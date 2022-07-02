<?php

namespace App\Repositories;

use App\Models\Food;
use Illuminate\Database\Eloquent\Collection;

class FoodRepository
{
    public static function getAllFoods(): Collection
    {
        return Food::all();
    }

    public static function getFoodsByCategory(int $category_id)
    {
        return Food::where('category_id', $category_id)->get();
    }

//    public static function addFood(Food $newFood): void
//    {
//        $newFood->save();
//    }
}
