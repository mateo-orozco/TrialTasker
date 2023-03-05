<template>
    <form @submit.prevent="authStore.handleLogin(form)">
        <div class="form-group">
            <label for="email">Correo</label>
            <input type="email" class="form-control" id="email" v-model="form.email" placeholder="Digite su correo">
        </div>
        <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" class="form-control" id="password" v-model="form.password" placeholder="Digite su contraseña">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <RouterLink :to="{ name: 'Register' }">Registrarse</RouterLink>
    <RouterLink :to="{ name: 'ForgotPassword' }">¿Olvidaste tu contraseña?</RouterLink>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore} from '@/stores/authStore'

const authStore = useAuthStore()

const form = ref({
  email: '',
  password: ''
});
</script>

<style>

</style>