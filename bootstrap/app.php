<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

$app = Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        //
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();

// Customize the storage path to a writable directory on Vercel
if (env('VERCEL') || env('APP_ENV') === 'production') {
    $storagePath = '/tmp/storage';
    if (!is_dir($storagePath)) {
        mkdir($storagePath, 0755, true);
        mkdir($storagePath . '/framework/views', 0755, true);
        mkdir($storagePath . '/framework/cache', 0755, true);
        mkdir($storagePath . '/framework/sessions', 0755, true);
        mkdir($storagePath . '/bootstrap/cache', 0755, true);
    }
    if (!is_dir('/tmp/views')) {
        mkdir('/tmp/views', 0755, true);
    }
    $app->useStoragePath($storagePath);
}

return $app;
