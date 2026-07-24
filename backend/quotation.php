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
    echo json_encode(["success" => false, "message" => "Invalid JSON payload"]);
    exit();
}

$name    = trim($input['name'] ?? '');
$email   = trim($input['email'] ?? '');
$phone   = trim($input['phone'] ?? '');
$company = trim($input['company'] ?? '');
$remarks = trim($input['remarks'] ?? '');
$items   = $input['items'] ?? [];

if (empty($name) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Name, Email, and Phone fields are required."]);
    exit();
}

try {
    $pdo = getDbConnection();
    $pdo->beginTransaction();

    $quotation_ref = "RDA-QT-" . strtoupper(substr(uniqid(), -6));

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

    echo json_encode([
        "success" => true,
        "message" => "Quotation request generated successfully!",
        "quotation_ref" => $quotation_ref
    ]);

} catch (Exception $e) {
    if (isset($pdo) && $pdo->inTransaction()) {
        $pdo->rollBack();
    }
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Failed to submit quotation: " . $e->getMessage()
    ]);
}
