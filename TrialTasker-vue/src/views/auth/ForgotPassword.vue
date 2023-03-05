<template>
    <form  @submit.prevent="authStore.handleForgotPassword(form)">
        <div class="form-group">
            <label for="email">Correo</label>
            <input type="email" class="form-control" id="email" v-model="form.email" placeholder="Digite su correo">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore} from '@/stores/authStore'

const authStore = useAuthStore();

const form = ref({
    email: ''
});

</script>

<style>

</style>