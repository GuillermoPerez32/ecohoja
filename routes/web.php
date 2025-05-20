<?php

use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [ProductController::class, 'index'])->name('home');

Route::get('cart', function () {
    return Inertia::render('cart');
})->name('cart');

Route::resource('products', ProductController::class);

Route::resource('orders', OrderController::class);

Route::get('checkout', function () {
    return Inertia::render('checkout');
})->name('checkout');

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
