<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @method static where(string $string, int $category_id)
 * @method static insert()
 */
class Food extends Model
{
    use HasFactory;

//    public mixed $image;
    protected $table = "foods";
    protected $primaryKey = "id";
    protected $fillable = [
        "name",
        "price",
        "image",
        "category_id",
        "created_at"
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
