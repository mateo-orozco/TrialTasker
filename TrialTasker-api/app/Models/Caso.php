<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Caso extends Model
{
    use HasFactory;

    protected $table = 'cases';

    protected $fillable = [
        'case_name',
        'case_radicate',
        'case_status',
        'case_user_id',
        'case_person_id',
    ];

    public function stages()
    {
        return $this->hasMany(Stage::class);
    }

    public function typeStages()
    {
        return $this->belongsToMany(TypeStage::class);
    }


    public function users()
    {
        return $this->belongsTo(User::class);
    }

    public  function persons()
    {
     return $this->belongsTo(Person::class);
    }
}
