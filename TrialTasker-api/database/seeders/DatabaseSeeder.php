<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Caso;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\TypePerson;
use App\Models\Person;
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
        User::factory(10)->create();
        TypePerson::factory(10)->create();
        Person::factory(20)->create();
        Caso::factory(10)->create();
        TypeStage::factory(6)->create();
        Stage::factory(10)->create();
    }
}
