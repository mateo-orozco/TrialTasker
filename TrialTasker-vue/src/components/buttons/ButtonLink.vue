<template>
    <router-link :to="{name: to}"><slot></slot><span>{{ text }}</span></router-link>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
    to: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
    a {
        display: flex;
        align-items: flex-end;
        gap: 0.5rem;
        width: 100%;
        text-decoration: none;
        color: var(--white);
        font-size: 1rem;
        font-weight: bold;
        padding: 0.5rem 1rem;
        transition: all .3s ease;
    }
    a:hover {
        background-color: var(--white);
        color: var(--brown);
    }
    .router-link-active{
        background-color: var(--white);
        color: var(--brown);
    }


</style>