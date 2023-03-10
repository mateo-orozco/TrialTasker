<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;

    protected $fillable = [
        'per_name',
        'per_lastname',
        'per_email',
        'per_phone',
        'per_address',
        'per_nit',
        'per_issue_nit',
        'per_num_ministry',
        'per_num_dispaych',
        'per_radicated',
        'per_authority',
        'per_number',
    ];

    
}
