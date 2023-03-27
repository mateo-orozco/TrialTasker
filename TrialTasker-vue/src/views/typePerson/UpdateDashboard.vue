<template>
    <HeaderAccions title="Actualizar Tipo de Persona" to="TypePersonDashboard"/>
    <Form :create="typePersons.updateTypePerson" :form="form" button-text="Actualizar">
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
import { useRoute } from 'vue-router';

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


</style>