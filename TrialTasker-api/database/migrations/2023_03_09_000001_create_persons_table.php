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
        Schema::create('persons', function (Blueprint $table) {
            $table->id();
            $table->string('per_name');
            $table->string('per_lastname');
            $table->string('per_email');
            $table->string('per_phone');
            $table->string('per_address');
            $table->string('per_nit');
            $table->string('per_issue_nit');
            $table->string('per_num_ministry');
            $table->string('per_num_dispaych');
            $table->string('per_radicated');
            $table->string('per_authority');
            $table->string('per_number');
            $table->foreignId('per_type_person')->constrained('type_persons');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('persons');
    }
};
