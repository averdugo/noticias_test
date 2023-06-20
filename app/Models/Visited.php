<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visited extends Model
{
    use HasFactory;

    protected $fillable =[
        "news_id",
        "counter",
    ];

    public function news(){
        return $this->belongsTo(News::class);
    }
}
