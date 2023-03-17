<template>
  <HeaderAccions title="Crear Persona" to="PersonDashboard" />
    <Form :create="persons.createPerson" :form="form" button-text="Crear">
        <FormGroup label="Nombre" :error="persons.errors ? persons.errors.per_name : []">
            <input class="input" type="text" id="per_name" v-model="form.per_name">
        </FormGroup>
        <FormGroup label="Apellido" :error="persons.errors ? persons.errors.per_lastname : []">
            <input class="input" type="text" id="per_lastname" v-model="form.per_lastname">
        </FormGroup>
        <FormGroup label="Correo" :error="persons.errors ? persons.errors.per_email : []">
            <input class="email" type="text" id="per_email" v-model="form.per_email">
        </FormGroup>
        <FormGroup label="Telefono" :error="persons.errors ? persons.errors.per_phone : []">
            <input class="input" type="text" id="per_phone" v-model="form.per_phone">
        </FormGroup>
        <FormGroup label="Direccion" :error="persons.errors ? persons.errors.per_address : []">
            <input class="input" type="text" id="per_address" v-model="form.per_address">
        </FormGroup>
        <FormGroup label="Nit" :error="persons.errors ? persons.errors.per_nit : []">
            <input class="input" type="text" id="per_nit" v-model="form.per_nit">
        </FormGroup>
        <FormGroup label="Fecha de expedicion" :error="persons.errors ? persons.errors.per_issue_nit : []">
            <input class="date" type="date" id="per_issue_nit" v-model="form.per_issue_nit">
        </FormGroup>
        <FormGroup label="Numero de ministerio" :error="persons.errors ? persons.errors.per_num_ministry : []">
            <input class="number" type="text" id="per_num_ministry" v-model="form.per_num_ministry">
        </FormGroup>
        <FormGroup label="Numero de despacho" :error="persons.errors ? persons.errors.per_num_dispaych : []">
            <input class="number" type="text" id="per_num_dispaych" v-model="form.per_num_dispaych">
        </FormGroup>
        <FormGroup label="Radicado" :error="persons.errors ? persons.errors.per_radicated : []">
            <input class="input" type="text" id="per_radicated" v-model="form.per_radicated">
        </FormGroup>
        <FormGroup label="Autoridad" :error="persons.errors ? persons.errors.per_authority : []">
            <input class="input" type="text" id="per_authority" v-model="form.per_authority">
        </FormGroup>
        <FormGroup label="Numero" :error="persons.errors ? persons.errors.per_number : []">
            <input class="number" type="text" id="per_number" v-model="form.per_number">
        </FormGroup>
        
    </Form>
</template>

<script setup>
import { ref } from 'vue';
import HeaderAccions from '../../components/headers/HeaderAccions.vue';
import Form from '../../components/forms/Form.vue';
import FormGroup from '../../components/forms/FormGroup.vue';
import { usePersonStore } from '../../stores/personStore';

const persons = usePersonStore();

const form = ref({
    per_name:'',
    per_lastname:'',
    per_email:'',
    per_phone:'',
    per_address:'',
    per_nit:'',
    per_issue_nit:'',
    per_num_ministry:'',
    per_num_dispaych:'',
    per_radicated:'',
    per_authority:'',
    per_number:'',
    per_type_person_id:'',
});

</script>

<style>

</style>