<template>
    <div class="entry">
        <div class="card__entry">
            <div class="entry__logo">
                <Logo fill="--brown"/>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import Logo from '@/components/logo/Logo.vue'
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();

onMounted(() => {
    authStore.authMessage = null;
    authStore.authErrors = {};
});
</script>

<style scoped>
.entry {
  display: grid;
  place-items: center;
  width: 100%;
  min-height: 100vh;
  background-image: url("@/assets/img/bg-entry.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 40px;
}
</style>
