<template>
    <form @submit.prevent="authStore.handleRegister(form)">
        <h1>Registro</h1>
        <label for="name">Nombre</label>
        <input type="text" id="name" placeholder="Nombre" v-model="form.name">
        <label for="email">Correo</label>
        <input type="email" id="email" placeholder="Correo" v-model="form.email">
        <label for="password">Contraseña</label>
        <input type="password" id="password" placeholder="Contraseña" v-model="form.password">
        <label for="password_confirmation">Confirmar Contraseña</label>
        <input type="password" id="password_confirmation" placeholder="Confirmar Contraseña" v-model="form.password_confirmation">
        <button type="submit">Registrar</button>
    </form>
  
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore} from '@/stores/authStore'

const authStore = useAuthStore();

const form = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

</script>

<style>

</style>