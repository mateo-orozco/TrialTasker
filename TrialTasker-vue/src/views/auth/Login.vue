<template>
    <Entry>
        <form @submit.prevent="authStore.handleLogin(form)" class="form-entry login">
            <div class="form-group">
                <input type="email" id="email" v-model="form.email" placeholder="Correo Electronico">
            </div>
            <div class="form-group">
                <input type="password" id="password" v-model="form.password" placeholder="Contraseña">
            </div>
            <div v-if="authStore.message">
                <p class="error">{{ authStore.message }}</p>
            </div>
            <button type="submit" class="btn">Iniciar sesión</button>
        </form>
        <RouterLink :to="{ name: 'ForgotPassword' }">¿Olvidaste tu contraseña?</RouterLink>
        <RouterLink :to="{ name: 'Register' }">Registrarse</RouterLink>
    </Entry>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useAuthStore} from '@/stores/authStore'
import Entry from '@/components/Entry.vue'
const authStore = useAuthStore()
const form = ref({
  email: '',
  password: ''
});

</script>
