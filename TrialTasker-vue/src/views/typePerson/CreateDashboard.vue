<template>
    <HeaderAccions title="Crear Tipo de Persona" to="TypePersonDashboard" />
    <Form :create="typePersons.createTypePerson" :form="form">
        <FormGroup label="Nombre" :error="typePersons.errors ? typePersons.errors.type_person_name : []">
            <input type="text" id="type_person_name" v-model="form.type_person_name">
        </FormGroup>
    </Form>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HeaderAccions from '../../components/headers/HeaderAccions.vue';
import { useTypePersonStore } from '../../stores/typePersonStore';
import Form from '../../components/forms/Form.vue';
import FormGroup from '../../components/forms/FormGroup.vue';


const typePersons = useTypePersonStore();

typePersons.errorsStore = []

const form = ref({
    type_person_name: ''
});

</script>

<style>
.create-dashboard {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
}

.create-dashboard__form {
    width: 100%;
    max-width: 500px;
}

.create-dashboard__form__group {
    margin-bottom: 1rem;
}

.create-dashboard__form__group label {
    display: block;
    margin-bottom: 0.5rem;
}

.create-dashboard__form__group input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
}

.create-dashboard__form__group button {
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