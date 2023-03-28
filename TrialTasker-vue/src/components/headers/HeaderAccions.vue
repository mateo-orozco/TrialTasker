<template>
    <div class="header">
        <ButtonBack :to="to"/>
        <h2 class="header__title">{{ title }}</h2>
    </div>
</template>

<script setup>
import ButtonBack from '../buttons/ButtonBack.vue'

defineProps({
    title: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    }
})
</script>

<style>
.header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--my-hover-ligth);
}


</style>