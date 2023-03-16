<?php

namespace App\Http\Controllers;

use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'per_name'=>['required','string'], 
                'per_lastname'=>['string'],
                'per_email'=>['string'],
                'per_phone'=>['string'],
                'per_address'=>['string'],
                'per_nit'=>['string'],
                'per_issue_nit'=>['string'],
                'per_num_ministry'=>['string'],
                'per_num_dispaych'=>['string'],
                'per_radicated'=>['string'],
                'per_authority'=>['string'],
                'per_number'=>['string'],
                'per_type_person'=>['required','integer'],
            ]);

            $person = Person::create([
                'per_name'=> $request->per_name, 
                'per_lastname'=> $request->per_lastname,
                'per_email'=> $request->per_email,
                'per_phone'=> $request->per_phone,
                'per_address'=> $request->per_address,
                'per_nit'=> $request->per_nit,
                'per_issue_nit'=> $request->per_issue_nit,
                'per_num_ministry'=> $request->per_num_ministry,
                'per_num_dispaych'=> $request->per_num_dispaych,
                'per_radicated'=> $request->per_radicated,
                'per_authority'=> $request->per_authority,
                'per_number'=> $request->per_number,
                'per_type_person'=> $request->per_type_person,
            ]);
            return response()->json(['message' => 'Persona creada correctamente'], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                $e->errors()
            ], 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
