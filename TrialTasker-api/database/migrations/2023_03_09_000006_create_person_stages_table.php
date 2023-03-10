<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('person_stages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('per_sta_person')->constrained('persons');
            $table->foreignId('per_sta_stage')->constrained('stages');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('person_stages');
    }
};
