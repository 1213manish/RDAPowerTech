<?php
// RDA PowerTech Quotation Endpoint
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid JSON payload"]);
    exit();
}

$name     = trim($input['name'] ?? '');
$email    = trim($input['email'] ?? '');
$phone    = trim($input['phone'] ?? '');
$company  = trim($input['company'] ?? $input['businessType'] ?? '');
$product  = trim($input['product'] ?? '');
$quantity = trim($input['quantity'] ?? '');
$remarks  = trim($input['remarks'] ?? $input['message'] ?? '');
$items    = $input['items'] ?? [];

if (empty($name) || empty($phone)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Name and Mobile Number are required."]);
    exit();
}

$quotation_ref = "RDA-QT-" . strtoupper(substr(uniqid(), -6));
$db_saved = false;
$datetime = date('d M Y, h:i A');

// 1. Save to Database if DB connection works
try {
    require_once __DIR__ . '/config.php';
    $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
    
    if ($pdo) {
        $pdo->beginTransaction();
        $stmt = $pdo->prepare("
            INSERT INTO quotations (quotation_ref, customer_name, customer_email, customer_phone, company_name, remarks) 
            VALUES (:ref, :name, :email, :phone, :company, :remarks)
        ");
        $stmt->execute([
            ':ref'     => $quotation_ref,
            ':name'    => $name,
            ':email'   => $email,
            ':phone'   => $phone,
            ':company' => $company,
            ':remarks' => $remarks
        ]);
        $quotation_id = $pdo->lastInsertId();

        if (!empty($items) && is_array($items)) {
            $itemStmt = $pdo->prepare("
                INSERT INTO quotation_items (quotation_id, product_id, product_name, brand, quantity) 
                VALUES (:q_id, :p_id, :p_name, :brand, :qty)
            ");
            foreach ($items as $item) {
                $itemStmt->execute([
                    ':q_id'   => $quotation_id,
                    ':p_id'   => $item['id'] ?? null,
                    ':p_name' => $item['name'] ?? 'Custom Part',
                    ':brand'  => $item['brand'] ?? 'N/A',
                    ':qty'    => intval($item['quantity'] ?? 1)
                ]);
            }
        }
        $pdo->commit();
        $db_saved = true;
    }
} catch (\Throwable $e) {
    // Database error logged, gracefully continue to send email
    error_log("Database optional save notice: " . $e->getMessage());
}

// 2. Send HTML Email to info@rdapowertech.com
$to = "info@rdapowertech.com";
$subject = "New Website Quote Enquiry — RDA POWER TECH";

$productRow = !empty($product) ? "<tr><td style='padding: 8px 0; font-weight: bold; width: 160px; color: #475569;'>Product / Service:</td><td style='padding: 8px 0; color: #1e293b;'>".htmlspecialchars($product)."</td></tr>" : "";
$quantityRow = !empty($quantity) ? "<tr><td style='padding: 8px 0; font-weight: bold; width: 160px; color: #475569;'>Quantity:</td><td style='padding: 8px 0; color: #1e293b;'>".htmlspecialchars($quantity)."</td></tr>" : "";

$email_content = "
<html>
<head>
  <title>New Website Quote Enquiry</title>
</head>
<body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background: #f1f5f9;'>
  <div style='max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff;'>
    <div style='background-color: #071224; padding: 24px; text-align: center; color: white;'>
      <h2 style='margin: 0; color: #FFB800; font-size: 20px;'>NEW WEBSITE QUOTE ENQUIRY</h2>
      <p style='margin: 6px 0 0 0; font-size: 13px; color: #94a3b8;'>Reference: <strong style='color: #ffffff;'>$quotation_ref</strong></p>
    </div>
    <div style='padding: 24px; background-color: #ffffff;'>
      <h3 style='border-bottom: 2px solid #FFB800; padding-bottom: 8px; color: #071224; margin: 0 0 16px 0; font-size: 16px;'>Customer Details</h3>
      <table style='width: 100%; border-collapse: collapse;'>
        <tr><td style='padding: 8px 0; font-weight: bold; width: 160px; color: #475569;'>Name:</td><td style='padding: 8px 0; color: #1e293b;'>".htmlspecialchars($name)."</td></tr>
        <tr><td style='padding: 8px 0; font-weight: bold; color: #475569;'>Mobile:</td><td style='padding: 8px 0; color: #1e293b;'>".htmlspecialchars($phone)."</td></tr>
        <tr><td style='padding: 8px 0; font-weight: bold; color: #475569;'>Email:</td><td style='padding: 8px 0; color: #1e293b;'>".htmlspecialchars($email ? $email : 'Not Provided')."</td></tr>
        <tr><td style='padding: 8px 0; font-weight: bold; color: #475569;'>Business / Industry:</td><td style='padding: 8px 0; color: #1e293b;'>".htmlspecialchars($company ? $company : 'N/A')."</td></tr>
        $productRow
        $quantityRow
      </table>
      
      <h3 style='border-bottom: 2px solid #FFB800; padding-bottom: 8px; color: #071224; margin: 24px 0 16px 0; font-size: 16px;'>Requirements</h3>
      <p style='background: #f8fafc; padding: 14px; border-radius: 6px; border-left: 4px solid #FFB800; margin: 0; color: #334155;'>".nl2br(htmlspecialchars($remarks))."</p>
      
      <hr style='border: none; border-top: 1px solid #e2e8f0; margin: 24px 0 16px;' />
      <table style='width: 100%; border-collapse: collapse; font-size: 12px; color: #94a3b8;'>
        <tr><td style='padding: 3px 0;'>Source:</td><td>Website — RDA POWER TECH</td></tr>
        <tr><td style='padding: 3px 0;'>Enquiry Type:</td><td>Get Quote</td></tr>
        <tr><td style='padding: 3px 0;'>Date/Time:</td><td>$datetime</td></tr>
      </table>
    </div>
    <div style='background-color: #f1f5f9; padding: 14px; text-align: center; font-size: 11px; color: #94a3b8;'>
      Sent from RDA PowerTech Website • Quote Request Form
    </div>
  </div>
</body>
</html>
";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: RDA PowerTech Web <no-reply@rdapowertech.com>" . "\r\n";
if (!empty($email)) {
    $headers .= "Reply-To: " . $email . "\r\n";
}

@mail($to, $subject, $email_content, $headers);

echo json_encode([
    "success" => true,
    "message" => "Quotation request submitted successfully!",
    "quotation_ref" => $quotation_ref,
    "db_saved" => $db_saved
]);
