<template>
    <div class="container-form">
        <form action="" class="form" @submit.prevent="this.create(form)">
            <slot></slot>
            <Button type="submit" text="Crear" />
        </form>
    </div>
</template>

<script setup>
import Button from '../buttons/Button.vue';
const props = defineProps({
    create: {
        type: Function,
        required: true
    }, form: {
        type: Object,
        required: true
    }
})

console.log(props)
</script>
<style scoped>
.container-form {
    width: 100%;
    display: flex;
    justify-content: center;
}

.form {
    width: 80%;
    margin-top: 20px;
    margin-bottom: 20px;
    display: grid;
    gap: 20px;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
}
</style>