<template>
    <form @submit.prevent="authStore.handleResetPassword(form)">
        <h1>Restablecer contraseña</h1>
        <label for="password">Contraseña</label>
        <input type="password" id="password" placeholder="Password" v-model="form.password">
        <label for="confirmationPassword">Confirmar Contraseña</label>
        <input type="password" id="confirmationPassword" placeholder="Password" v-model="form.password_confirmation">
        <button type="submit">Restablecer</button>
    </form>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const authStore = useAuthStore();
const route = useRoute();

const form = ref({
    email: route.query.email,
    password: '',
    password_confirmation: '',
    token: route.params.token,
});
</script>

<style></style>