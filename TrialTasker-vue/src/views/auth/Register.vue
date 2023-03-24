<template>
    <Entry>
        <h2>Registro</h2>
        <form class="form-entry" @submit.prevent="authStore.handleRegister(form)">
            <div class="form-group-entry">
                <input type="text" id="name" placeholder="Nombre" v-model="form.name" :class="{error_input:authStore.errors.name}">
                <div v-if="authStore.errors.name">
                    <p class="error">{{ authStore.errors.name[0] }}</p>
                </div>
            </div>
            <div class="form-group-entry">
                <input type="text" id="lastname" placeholder="Apellido" v-model="form.lastname" :class="{error_input:authStore.errors.lastname}">
                <div v-if="authStore.errors.lastname">
                    <p class="error">{{ authStore.errors.lastname[0] }}</p>
                </div>
            </div>
            <div class="form-group-entry">
                <input type="text" id="address" placeholder="Direccion" v-model="form.address" :class="{error_input:authStore.errors.address}">
                <div v-if="authStore.errors.address">
                    <p class="error">{{ authStore.errors.address[0] }}</p>
                </div>
            </div>
            <div class="form-group-entry">
                <input type="text" id="phone" placeholder="Telefono" v-model="form.phone" :class="{error_input:authStore.errors.phone}">
                <div v-if="authStore.errors.phone">
                    <p class="error">{{ authStore.errors.phone[0] }}</p>
                </div>
            </div>
            <div class="form-group-entry">
                <input type="text" id="email" placeholder="Correo Electronico" v-model="form.email" :class="{error_input:authStore.errors.email}">
                <div v-if="authStore.errors.email">
                    <p class="error">{{ authStore.errors.email[0] }}</p>
                </div>
            </div>
            
            <div class="form-group-entry">
                <input type="password" id="password" placeholder="Contraseña" v-model="form.password" :class="{error_input:authStore.errors.password}">
                <div v-if="authStore.errors.password">
                    <p class="error">{{ authStore.errors.password[0] }}</p>
                </div>
            </div>
            <div class="form-group-entry">
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
    lastname: '',
    address: '',
    phone: '',
});

</script>

<style>

</style>