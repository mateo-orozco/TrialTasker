<template>
    
        <form action="" class="form" @submit.prevent="this.create(form)">
            <div class="form-content">
                <slot></slot>
            </div>
            <Button type="submit" :text="buttonText" />
        </form>
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

</script>
<style scoped>
.form {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.form-content{
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(240px, 350px));
    gap: 20px;
}


.form .btn {
    width: 100%;
    max-width: 400px;
}




</style>