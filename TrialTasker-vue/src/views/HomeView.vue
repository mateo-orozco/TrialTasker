
<template>
  <main>
    <h1>Home</h1>
    <button @click="authStore.handleLogout">Salir</button>
  </main>
</template>
<script setup>
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()
</script>
