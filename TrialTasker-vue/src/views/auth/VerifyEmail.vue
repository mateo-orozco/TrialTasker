<template>
    <Entry>
        <h1 class="text__entry">Debe verificar su correo electrónico</h1>
        <p class="text__entry">
            Hemos enviado un correo electrónico de verificación a su dirección de correo electrónico. Por favor, verifique
            su correo electrónico y haga clic en el enlace de verificación para verificar su dirección de correo
            electrónico.
        </p>
        <p class="text__entry">
            Si no ha recibido el correo electrónico, puede solicitar otro
        </p>
        <Button text="Reenviar correo electrónico de verificación" @click="authStore.handleSendVerifyEmail" />
        <Button text="Cerrar sesión" @click="authStore.handleLogout" />
    </Entry>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore'
import Entry from '@/components/Entry.vue'
import Button from '../../components/buttons/Button.vue';

const authStore = useAuthStore()


</script>

<style></style>