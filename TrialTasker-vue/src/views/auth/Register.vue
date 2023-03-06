<template>
    <Entry>
        <h2>Registro</h2>
        <form class="form-entry" @submit.prevent="authStore.handleRegister(form)">
            <div class="form-group">
                <input type="text" id="name" placeholder="Nombre" v-model="form.name">
            </div>
            <div class="form-group">
                <input type="email" id="email" placeholder="Correo Electronico" v-model="form.email">
            </div>
            <div class="form-group">
                <input type="password" id="password" placeholder="Contraseña" v-model="form.password">
            </div>
            <div class="form-group">
                <input type="password" id="password_confirmation" placeholder="Confirmar Contraseña" v-model="form.password_confirmation">
            </div>
            <button class="btn" type="submit">Registrar</button>
        </form>
    </Entry>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore} from '@/stores/authStore'
import Entry from '@/components/Entry.vue'

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