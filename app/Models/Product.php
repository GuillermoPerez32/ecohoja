<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'large_description',
        'price',
        'image',
    ];

    protected $casts = [
        'price' => 'float',
    ];

    public function getSlugAttribute($value)
    {
        return Str::slug($value);
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function orders()
    {
        return $this->belongsToMany(Order::class)->withPivot('price', 'quantity');
    }
}
