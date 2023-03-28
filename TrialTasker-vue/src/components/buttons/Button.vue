<template>
    <button class="btn"  :type="type" >
        {{ text }}
    </button>
</template>

<script setup>
 defineProps({
    text: {
        type: String,
        default: 'Enviar',
    },
    type: {
        type: String,
        default: 'button',
    },
})
</script>

<style scoped>
.btn {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 10px;
    background-color: #0600ff;
    color: var(--white);
}
</style>