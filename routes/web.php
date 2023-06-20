<?php

use App\Http\Controllers\{ NewsController, VisitedController };
use Illuminate\Support\Facades\Route;

Route::resource("/news", NewsController::class);
Route::post("/visited", [VisitedController::class, 'store']);

Route::get('/', [NewsController::class, 'index'])->name("dashboard");
Route::get('/mas_visitadas', [VisitedController::class, 'index'])->name("mas_visitadas");

require __DIR__.'/auth.php';
