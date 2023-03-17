<template>
    <Entry>
        <p class="text__entry">¿Olvidaste tu contraseña?</p>
        <p class="text__entry">No hay problema. Simplemente háganos saber su dirección de correo electrónico y le enviaremos un enlace de restablecimiento de contraseña que le permitirá elegir una nueva.</p>
        <form class="form-entry"  @submit.prevent="authStore.handleForgotPassword(form)">
            <div class="form-group-entry">
                <input type="email" class="form-control" id="email" v-model="form.email" placeholder="Correo Electronico" :class="{error_input:authStore.errors.email}">
            </div>
            <div v-if="authStore.errors.email">
                    <p class="error">{{ authStore.errors.email[0] }}</p>
            </div>
            <button type="submit" class="btn">Enviar</button>
        </form>
    </Entry>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useAuthStore} from '@/stores/authStore'
import Entry from '@/components/Entry.vue'

const authStore = useAuthStore();


const form = ref({
    email: ''
});

</script>

<style>

</style>