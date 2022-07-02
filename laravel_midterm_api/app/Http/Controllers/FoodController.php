<?php

namespace App\Http\Controllers;

use App\Models\Food;
use Illuminate\Http\Request;

use App\Repositories\FoodRepository;
use mysql_xdevapi\Exception;

class FoodController extends Controller
{
    public function getAllFoods(): \Illuminate\Database\Eloquent\Collection
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
        $newImageName = time() . '-' . $request->file('image')->hashName();
        $request->file('image')->move(public_path('images'), $newImageName);
//
//        $newFood = new Food();
//        $newFood->image = 'images/' . $newImageName;
//        $newFood->name = $request->input('foodName');
//        $newFood->price = $request->input('price');
//        $newFood->category_id = $request->input('category_id');

        $newFood = [
            'image' => 'images/' . $newImageName,
            'name' => $request->input('name'),
            'price' => $request->input('price'),
            'category_id' => $request->input('category_id')
        ];

        Food::insert(
            $newFood
        );
    }
}
