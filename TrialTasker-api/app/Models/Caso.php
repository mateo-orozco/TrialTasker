<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Caso extends Model
{
    use HasFactory;

    protected $table ='cases';

    protected $fillable = [
        'case_name',
        'case_radicate',
        'case_status',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
