<?php
require_once __DIR__ . '/db.php';

try {
    $pdo = getDbConnection();
    
    // Fetch all categories
    $catStmt = $pdo->query("SELECT id, slug, name, description FROM categories ORDER BY id ASC");
    $categories = $catStmt->fetchAll();

    // Fetch all products with decoded specifications
    $prodStmt = $pdo->query("
        SELECT 
            p.id, 
            p.category_id, 
            c.slug as category_slug,
            p.name, 
            p.brand, 
            p.model_number, 
            p.description, 
            p.specifications, 
            p.image_url 
        FROM products p
        JOIN categories c ON p.category_id = c.id
        ORDER BY p.id ASC
    ");
    $products = $prodStmt->fetchAll();

    // Decode specifications JSON string for frontend use
    foreach ($products as &$prod) {
        if (!empty($prod['specifications'])) {
            $prod['specifications'] = json_decode($prod['specifications'], true);
        } else {
            $prod['specifications'] = (object)[];
        }
    }

    echo json_encode([
        "success" => true,
        "categories" => $categories,
        "products" => $products
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Error fetching products: " . $e->getMessage()
    ]);
}
