<?php
require_once __DIR__ . '/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid JSON input"]);
    exit();
}

$name    = trim($input['name'] ?? '');
$email   = trim($input['email'] ?? '');
$subject = trim($input['subject'] ?? 'General Inquiry');
$message = trim($input['message'] ?? '');

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Name, Email, and Message are required."]);
    exit();
}

try {
    $pdo = getDbConnection();
    $stmt = $pdo->prepare("
        INSERT INTO contact_messages (name, email, subject, message) 
        VALUES (:name, :email, :subject, :message)
    ");
    $stmt->execute([
        ':name'    => $name,
        ':email'   => $email,
        ':subject' => $subject,
        ':message' => $message
    ]);

    // Send notification email to info@rdapowertech.com
    $to = "info@rdapowertech.com";
    $mail_subject = "New Contact Message: " . $subject;
    $email_content = "
    <html>
    <head><title>New Contact Message</title></head>
    <body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;'>
      <div style='max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 10px; padding: 24px; background: #fff;'>
        <h2 style='color: #071224; border-bottom: 2px solid #FFB800; padding-bottom: 8px;'>New Contact Form Submission</h2>
        <p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>
        <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
        <p><strong>Subject:</strong> " . htmlspecialchars($subject) . "</p>
        <p><strong>Message:</strong><br/>" . nl2br(htmlspecialchars($message)) . "</p>
      </div>
    </body>
    </html>";

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8\r\n";
    $headers .= "From: RDA PowerTech Web <no-reply@rdapowertech.com>\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    @mail($to, $mail_subject, $email_content, $headers);

    echo json_encode([
        "success" => true,
        "message" => "Thank you! Your message has been sent successfully. We will get back to you soon."
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Error sending message: " . $e->getMessage()
    ]);
}
