<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



// POST API
Route::post('/products', [ProductController::class,'addProducts']);
Route::get('/products', [ProductController::class,'getProducts']);
Route::put('/products/{id}', [ProductController::class,'updateProduct']);
Route::delete('/products/{id}', [ProductController::class,'deleteProduct']);


