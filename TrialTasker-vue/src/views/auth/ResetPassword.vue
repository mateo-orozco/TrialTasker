<template>
    <Entry>
        <h3>Restablecer contraseña</h3>
        <form class="form-entry" @submit.prevent="authStore.handleResetPassword(form)" >
            <div class="form-group-entry">
                <input type="password" id="password" placeholder="Ingrese la nueva contraseña" v-model="form.password">
            </div>
            <div v-if="authStore.errors.password">
                    <p class="error">{{ authStore.errors.password[0] }}</p>
                </div>
            <div class="form-group-entry">
                <input type="password" id="confirmationPassword" placeholder="Confirme su contraseña" v-model="form.password_confirmation">
            </div>
            <button class="btn" type="submit">Restablecer</button>
        </form>
    </Entry>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import Entry from '@/components/Entry.vue';

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