<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $users = User::orderBy('id', 'desc')->paginate(10);
        return response()->json($users);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $request->validate([
                'name' => ['required', 'string'],
                'lastname' => ['required', 'string'],
                'phone' => ['required', 'string'],
                'address' => ['required', 'string'],
                'email' => ['required', 'string', 'email', 'unique:users'],
                'password' => ['required', 'string'],
            ]);

            $user = User::create([
                'name' => $request->name,
                'lastname' => $request->lastname,
                'phone' => $request->phone,
                'address' => $request->address,
                'email' => $request->email,
                'password' => $request->password,
            ]);
            return response()->json(['message' => 'Usuario creado correctamente'], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                $e->errors()
            ], 400);
        }
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id):JsonResponse
    {

        try {
            $user = User::findOrFail($id);

            $request->validate([
                'name' => ['required', 'string'],
                'lastname' => ['required', 'string'],
                'phone' => ['required', 'string'],
                'address' => ['required', 'string'],
                'email' => ['required', 'string', 'email',  Rule::unique('users')->ignore($user->id)],
                'password' => ['required', 'string'],
            ]);

            User::find($id)->update([
                'name' => $request->name,
                'lastname' => $request->lastname,
                'phone' => $request->phone,
                'address' => $request->address,
                'email' => $request->email,
                'password' => $request->password,
            ]);

            return response()->json(['message' => 'Usuario actualizado correctamente'], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                $e->errors()
            ], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id):JsonResponse
    {
        User::find($id)->delete();
        return response()->json(['message' => 'usuario  eliminado exitosamente'], 201);
        //
    }
}
