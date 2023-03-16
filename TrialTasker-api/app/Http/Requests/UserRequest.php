<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }


    public function rules(): array
    {
        return [
            'name'=> ['required', 'string'],
            'lastname'=>['string'],
            'phone'=>['string'],
            'address'=>['string'],
            'email'=>['string'],
            'password'=>['string'],
        ];
    }
}
