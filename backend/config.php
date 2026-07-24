<?php
// RDA PowerTech Database Configuration & API Setup

// Allow CORS for React frontend (Local development & production)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database Credentials (Update these details in Hostinger cPanel / phpMyAdmin)
define('DB_HOST', 'localhost');
define('DB_NAME', 'rda_powertech');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_CHARSET', 'utf8mb4');
