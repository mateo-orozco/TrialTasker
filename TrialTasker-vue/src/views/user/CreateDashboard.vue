<template>
    <HeaderAccions title="Crear Usuario" to="UserDashboard" />
    <Form :create="users.createUser" :form="form" button-text="Crear">
        <FormGroup label="Nombre" :error="users.errors ? users.errors.name : []">
            <input class="input" type="text" id="name" v-model="form.name">
        </FormGroup>
        <FormGroup label="Apellidos" :error="users.errors ? users.errors.lastname : []">
            <input type="text" id="lastname" v-model="form.lastname">
        </FormGroup>
        <FormGroup label="Correo" :error="users.errors ? users.errors.email : []">
            <input type="email" id="email" v-model="form.email">
        </FormGroup>
        <FormGroup label="Teléfono" :error="users.errors ? users.errors.phone : []">
            <input type="text" id="phone" v-model="form.phone">
        </FormGroup>
        <FormGroup label="Dirección" :error="users.errors ? users.errors.address : []">
            <input type="text" id="address" v-model="form.address">
        </FormGroup>
        <FormGroup label="Contraseña" :error="users.errors ? users.errors.password : []">
            <input type="password" id="password" v-model="form.password">
        </FormGroup>
        <FormGroup label="Confirmacion de contraseña" :error="users.errors ? users.errors.password_confirmation : []">
            <input type="password" id="password_confirmation" v-model="form.password_confirmation">
        </FormGroup>
    </Form>
</template>

<script setup>
import { ref } from 'vue';
import HeaderAccions from '../../components/headers/HeaderAccions.vue';
import Form from '../../components/forms/Form.vue';
import FormGroup from '../../components/forms/FormGroup.vue';
import { useUserStore } from '../../stores/userStore';

const users = useUserStore();

const form = ref({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    password_confirmation: ''
});

</script>

<style>

</style>