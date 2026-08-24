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

// 2. Prepare Organized Notification Email to info@rdapowertech.com
$to = "info@rdapowertech.com";
$cleanPhone = preg_replace('/[^0-9]/', '', $phone);
$companyPart = (!empty($company) && $company !== 'N/A') ? " — " . $company : "";
$subject = "Quotation Request #{$quotation_ref}{$companyPart} ({$name})";

$productRow = !empty($product) ? "<tr><td style='padding: 10px 14px; font-weight: 700; color: #475569; width: 170px; background: #f8fafc; border-bottom: 1px solid #e2e8f0;'>Product / Service:</td><td style='padding: 10px 14px; color: #0f172a; font-weight: 600; border-bottom: 1px solid #e2e8f0;'>".htmlspecialchars($product)."</td></tr>" : "";
$quantityRow = !empty($quantity) ? "<tr><td style='padding: 10px 14px; font-weight: 700; color: #475569; width: 170px; background: #f8fafc; border-bottom: 1px solid #e2e8f0;'>Quantity:</td><td style='padding: 10px 14px; color: #0f172a; border-bottom: 1px solid #e2e8f0;'>".htmlspecialchars($quantity)."</td></tr>" : "";

$email_content = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <title>Quotation Request</title>
</head>
<body style='margin: 0; padding: 24px 12px; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;'>
  <table role='presentation' border='0' cellpadding='0' cellspacing='0' width='100%' style='max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;'>
    <!-- Header -->
    <tr>
      <td style='background: #071224; padding: 26px 30px; border-bottom: 4px solid #FFB800;'>
        <div style='color: #FFB800; font-size: 12px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;'>RDA POWER TECH • INQUIRY ALERT</div>
        <h1 style='margin: 6px 0 0 0; color: #ffffff; font-size: 21px; font-weight: 800;'>New Quotation Request</h1>
        <p style='margin: 6px 0 0 0; color: #94a3b8; font-size: 13px;'>Reference: <strong style='color: #FFB800;'>$quotation_ref</strong> &nbsp;|&nbsp; $datetime</p>
      </td>
    </tr>

    <!-- Body Content -->
    <tr>
      <td style='padding: 28px 30px;'>
        
        <!-- Quick Action Buttons -->
        <table role='presentation' border='0' cellpadding='0' cellspacing='0' style='margin-bottom: 24px; width: 100%;'>
          <tr>
            <td style='padding-right: 8px; width: 50%;'>
              <a href='tel:+91$cleanPhone' style='display: block; text-align: center; background: #0066CC; color: #ffffff; font-weight: 700; font-size: 13px; padding: 12px 14px; text-decoration: none; border-radius: 6px;'>
                📞 Call Customer ($phone)
              </a>
            </td>
            <td style='padding-left: 8px; width: 50%;'>
              <a href='https://wa.me/91$cleanPhone?text=Hello%20$name,%20thank%20you%20for%20contacting%20RDA%20PowerTech%20regarding%20your%20quotation%20request%20($quotation_ref).' target='_blank' style='display: block; text-align: center; background: #25D366; color: #ffffff; font-weight: 700; font-size: 13px; padding: 12px 14px; text-decoration: none; border-radius: 6px;'>
                💬 WhatsApp Customer
              </a>
            </td>
          </tr>
        </table>

        <!-- Customer & Requirement Info Table -->
        <h3 style='margin: 0 0 12px 0; font-size: 14px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.05em;'>Inquiry Summary</h3>
        <table role='presentation' border='0' cellpadding='0' cellspacing='0' width='100%' style='border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; font-size: 13.5px;'>
          <tr>
            <td style='padding: 10px 14px; font-weight: 700; color: #475569; width: 170px; background: #f8fafc; border-bottom: 1px solid #e2e8f0;'>Customer Name:</td>
            <td style='padding: 10px 14px; color: #0f172a; font-weight: 700; border-bottom: 1px solid #e2e8f0;'>".htmlspecialchars($name)."</td>
          </tr>
          <tr>
            <td style='padding: 10px 14px; font-weight: 700; color: #475569; background: #f8fafc; border-bottom: 1px solid #e2e8f0;'>Mobile Number:</td>
            <td style='padding: 10px 14px; color: #0f172a; font-weight: 700; border-bottom: 1px solid #e2e8f0;'>
              <a href='tel:$phone' style='color: #0066CC; text-decoration: none;'>".htmlspecialchars($phone)."</a>
            </td>
          </tr>
          <tr>
            <td style='padding: 10px 14px; font-weight: 700; color: #475569; background: #f8fafc; border-bottom: 1px solid #e2e8f0;'>Email Address:</td>
            <td style='padding: 10px 14px; color: #0f172a; border-bottom: 1px solid #e2e8f0;'>".htmlspecialchars($email ? $email : 'Not Provided')."</td>
          </tr>
          <tr>
            <td style='padding: 10px 14px; font-weight: 700; color: #475569; background: #f8fafc; border-bottom: 1px solid #e2e8f0;'>Company / Unit:</td>
            <td style='padding: 10px 14px; color: #0f172a; border-bottom: 1px solid #e2e8f0;'>".htmlspecialchars($company ? $company : 'N/A')."</td>
          </tr>
          $productRow
          $quantityRow
        </table>

        <!-- Message / Requirement Box -->
        <h3 style='margin: 22px 0 10px 0; font-size: 14px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.05em;'>Requirement / Specifications</h3>
        <div style='background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #FFB800; padding: 14px 16px; border-radius: 6px; color: #334155; font-size: 13.5px; line-height: 1.5;'>
          ".(!empty($remarks) ? nl2br(htmlspecialchars($remarks)) : '<em style=\"color: #94a3b8;\">No additional remarks provided.</em>')."
        </div>

      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style='background: #f8fafc; padding: 16px 30px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;'>
        Automated notification sent from <strong style='color: #475569;'>RDA PowerTech</strong> website (<a href='https://rdapowertech.com' style='color: #0066CC; text-decoration: none;'>rdapowertech.com</a>)
      </td>
    </tr>
  </table>
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
