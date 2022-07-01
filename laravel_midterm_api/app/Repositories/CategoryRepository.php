<?php

namespace App\Repositories;

use App\Models\Category;

class CategoryRepository
{
    public static function getCategories(): array|\Illuminate\Database\Eloquent\Collection
    {
        return Category::all();
    }
}
