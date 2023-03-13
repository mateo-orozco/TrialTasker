<template>
  <router-link class="button-back" :to="{name: to}"><IconArrowLeft color="white" :size="20" stroke-width="2.2"/></router-link>
</template>

<script setup>
import { IconArrowLeft } from '@tabler/icons-vue'
import { defineProps } from 'vue'
defineProps({
    to: {
        type: String,
        required: true
    }
})
</script>

<style>
    .button-back {
        display: block;
        align-items: center;
        color: var(white);
        background-color: gray;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
    }
    .button-back > svg {
        display: block;
    }

</style>