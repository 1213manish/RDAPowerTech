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
