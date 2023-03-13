<template>
<HeaderAccions title="Actualizar Tipo de Persona" to="TypePersonDashboard"/>
    <div class="update-dashboard">
        <form class="update-dashboard__form" @submit.prevent="typePersons.updateTypePerson(form)">
            <div class="update-dashboard__form__group">
                <label for="type_person_name">Nombre</label>
                <input type="text" id="type_person_name" v-model="form.type_person_name" required>
            </div>
            <div class="update-dashboard__form__group">
                <Button type="submit" text="Actualizar"/>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import HeaderAccions from '../../components/headers/HeaderAccions.vue';
import { useTypePersonStore } from '../../stores/typePersonStore';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import Button from '@/components/buttons/Button.vue'

const typePersons = useTypePersonStore();
const route = useRoute();

const form = ref({
    type_person_name: '',
});
onMounted(async() => {
    await typePersons.getTypePerson(route.params.id);
    form.value ={
        id: typePersons.typePerson.id,
        type_person_name: typePersons.typePerson.type_person_name,
    }
});




</script>

<style>
.update-dashboard {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
}
.update-dashboard__form {
    width: 100%;
    max-width: 500px;
}
.update-dashboard__form__group {
    margin-bottom: 1rem;
}
.update-dashboard__form__group label {
    display: block;
    margin-bottom: 0.5rem;
}
.update-dashboard__form__group input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
}
.update-dashboard__form__group button {
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: var(--brown);
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
}

</style>