<?php

namespace App\Http\Controllers;

use App\Models\Food;
use Illuminate\Http\Request;

use App\Repositories\FoodRepository;
use mysql_xdevapi\Exception;

class FoodController extends Controller
{
    public function getAllFoods()
    {
        return FoodRepository::getAllFoods();
    }

    public function getFoodsByCategory(Request $request)
    {
        $category_id = $request->category_id ?? -1;
        return FoodRepository::getFoodsByCategory($category_id);
    }

    public function addFood(Request $request)
    {
        $newFood = new Food();
        $newFood->image = $request->input('image');
        $newFood->name = $request->input('name');
        $newFood->price = $request->input('price');
        $newFood->category_id = $request->input('category_id');

        try {
            $newFood->save();
            return True;
        }
        catch (Exception $ex)
        {
            return False;
        }
    }
}
