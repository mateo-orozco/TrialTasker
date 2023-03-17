<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stage extends Model
{
    use HasFactory;

    protected $fillable = [
        'stage_name',
        'stage_notes',
        
    ];

    public function typeStage(){
        return $this->belongsTo(TypeStage::class);
    }

    public function files(){
        return $this->hasMany(File::class);
    }

    public function cases(){
        return $this->belongsTo(Caso::class);
    }

    public function users(){
        return $this->belongsToMany(User::class);
    }
}
