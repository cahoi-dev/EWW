<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use \App\Http\Controllers\FoodController;
use App\Http\Controllers\CategoryController;

Route::get('/categories', [CategoryController::class, 'getCategories']);

Route::get('/foods', [FoodController::class, 'getAllFoods']);
Route::get('/foods-by-category', [FoodController::class, 'getFoodsByCategory']);


Route::post('/foods/post', [FoodController::class, 'addFood']);
