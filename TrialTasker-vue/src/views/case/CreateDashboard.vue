<template>
    <HeaderAccions title="Crear Caso" to="CasesDashboard" />
    <Form :create="cases.createCase" :form="form" button-text="Crear">
        <FormGroup label="Nombre" :error="cases.errors ? cases.errors.case_name : []">
            <input type="text" id="case_name" v-model="form.case_name">
        </FormGroup>
        <FormGroup label="Radicado" :error="cases.errors ? cases.errors.case_radicate : []">
            <input type="text" id="case_radicate" v-model="form.case_radicate">
        </FormGroup>
        <FormGroup label="Cliente" :error="cases.errors ? cases.errors.case_person_id : []">
            <select id="case_person_id" v-model="form.case_person_id">
                <option value="">Seleccione un cliente</option>
                <option v-for="person in persons.personsAll" :value="person.id">{{ person.per_name }} {{ person.per_lastname }}</option>
            </select>
        </FormGroup>
        <FormGroup label="Abogado" :error="cases.errors ? cases.errors.case_user_id : []">
            <select id="case_user_id" v-model="form.case_user_id">
                <option value="">Seleccione un abogado</option>
                <option v-for="user in users.usersAll" :value="user.id">{{ user.name }} {{ user.lastname }}</option>
            </select>
        </FormGroup>
    </Form>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import HeaderAccions from '../../components/headers/HeaderAccions.vue';
import Form from '../../components/forms/Form.vue';
import FormGroup from '../../components/forms/FormGroup.vue';
import { useCaseStore } from '../../stores/caseStore';
import { usePersonStore } from '../../stores/personStore';
import { useUserStore } from '../../stores/userStore';


const cases = useCaseStore();
const persons = usePersonStore();
const users = useUserStore();

const form = ref({
    case_name: '',
    case_radicate: '',
    case_person_id: '',
    case_user_id: '',
    case_status: true,
});

onMounted(() => {
    persons.getPersonsAll();
    users.getUsersAll();
});

</script>

<style>

</style>