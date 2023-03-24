<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Caso;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\TypePerson;
use App\Models\Person;
use App\Models\PersonStage;
use App\Models\Stage;
use App\Models\TypeStage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'is_admin' => true,
        ]);
        $this->call([
            TypePersonSeeder::class,
        ]);
        User::factory(20)->create();
        TypePerson::factory(20)->create();
        Person::factory(20)->create();
        Caso::factory(20)->create();
        TypeStage::factory(12)->create();
        Stage::factory(20)->create();
        PersonStage::factory(20)->create();
    }
    
}
