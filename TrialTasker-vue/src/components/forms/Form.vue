<template>
    <div class="container-form">
        <form action="" class="form" @submit.prevent="this.create(form)">
            <slot></slot>
            <Button type="submit" :text="buttonText" />
        </form>
    </div>
</template>

<script setup>
import Button from '../buttons/Button.vue';
const props = defineProps({
    create: {
        type: Function,
        required: true
    }, 
    form: {
        type: Object,
        required: true
    },
    buttonText: {
        type: String,
        required: true
    }
})

console.log(props)
</script>
<style scoped>

.container-form {
    margin-top: 20px;
}
.form {
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 400px));
    margin: 0 auto;
}


.form .btn {
    justify-self: center;
    max-width: 400px;
    grid-column: span 2;
}




</style>