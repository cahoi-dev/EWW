<?php

namespace App\Http\Controllers;

use App\Repositories\CategoryRepository;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getCategories()
    {
        return CategoryRepository::getCategories();
    }
}
