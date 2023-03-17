<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;

    
    protected $fillable = [
        'file_name',
        'file_url',
    ];

    public function stage(){
        return $this->belongsTo(Stage::class);
    }
}
