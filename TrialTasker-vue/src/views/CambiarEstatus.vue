<template>
    <HeaderAccions title="Editar Caso" to="CasosActivos" />
    <Form :create="cases.updateCase" :form="form" button-text="Actualizar">
        <!-- <FormGroup label="Nombre del Cliente" :error="cases.errors ? cases.errors.case_name : []">
            <select id="case_name" v-model="form.case_name">
                <option value="">Seleccione un cliente</option>
                <option v-for="active in cases.activeCases" :value="active.id">{{ active.case_name }}</option>
            </select>
        </FormGroup> -->
        <input type="text" v-model="form.case_name" placeholder="Nombre">
        <input type="text" v-model="form.case_radicate" placeholder="Radicado">
        <input type="number" v-model="form.case_user_id" placeholder="Id usuario">
        <input type="number" v-model="form.case_person_id" placeholder="Id persona">
        
        
        <FormGroup label="Estado" :error="cases.errors ? cases.errors.case_status : []">
            <select id="case_status" v-model="form.case_status">
                <option value="1">Activo</option>
                <option value="0">Inactivo</option>
            </select>
        </FormGroup>
    </Form>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import HeaderAccions from '@/components/headers/HeaderAccions.vue';
import Form from '@/components/forms/Form.vue';
import FormGroup from '@/components/forms/FormGroup.vue';
import { useRoute } from 'vue-router';
import { useCaseStore } from '@/stores/caseStore';
import { usePersonStore } from '@/stores/personStore';
import { useUserStore } from '@/stores/userStore';
import { useAuthStore } from '@/stores/authStore';

const route = useRoute();
const cases = useCaseStore();
const persons = usePersonStore();
const users = useUserStore();
const auth = useAuthStore();

var casoid = localStorage.getItem("id");
cases.getCase(casoid);




const form = ref({
    id: '',
    case_name: '',
    case_status: '',
    
});


var casoid = localStorage.getItem("id");
var name = localStorage.getItem("name");
var radicate = localStorage.getItem("radicate");
var user = localStorage.getItem("userid");
var person = localStorage.getItem("personid");


    form.value = {
        id: casoid,
        case_status: cases.caseStore.case_status,
        case_name: name,
        case_radicate: radicate,
        case_user_id: user,
        case_person_id: person
    }

onMounted(async () => {
    // var casoid = localStorage.getItem("id");
    // cases.getCase(casoid);

});


</script>

<style></style> -->

<template>
    <HeaderAccions title="Editar Caso" to="CasesDashboard" />
    <Form :create="cases.updateCase" :form="form" button-text="Actualizar">
        <FormGroup label="Nombre" :error="cases.errors ? cases.errors.case_name : []">
            <input type="text" id="case_name" v-model="form.case_name">
        </FormGroup>
        <FormGroup label="Radicado" :error="cases.errors ? cases.errors.case_radicate : []">
            <input type="text" id="case_radicate" v-model="form.case_radicate">
        </FormGroup>
        <FormGroup label="Cliente" :error="cases.errors ? cases.errors.case_person_id : []">
            <select id="case_person_id" v-model="form.case_person_id">
                <option value="">Seleccione un cliente</option>
                <option v-for="person in persons.personsAll" :value="person.id">{{ person.per_name }} {{ person.per_lastname
                }}</option>
            </select>
        </FormGroup>
        <FormGroup label="Abogado" :error="cases.errors ? cases.errors.case_user_id : []">
            <select id="case_user_id" v-model="form.case_user_id">
                <option value="">Seleccione un abogado</option>
                <option v-for="user in users.usersAll" :value="user.id">{{ user.name }} {{ user.lastname }}</option>
            </select>
        </FormGroup>
        <FormGroup label="Estado" :error="cases.errors ? cases.errors.case_status : []">
            <select id="case_status" v-model="form.case_status">
                <option value="1">Activo</option>
                <option value="0">Inactivo</option>
            </select>
        </FormGroup>
    </Form>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import HeaderAccions from '@/components/headers/HeaderAccions.vue';
import Form from '@/components/forms/Form.vue';
import FormGroup from '@/components/forms/FormGroup.vue';
import { useUserStore } from '@/stores/userStore';
import { usePersonStore } from '@/stores/personStore';
import { useRoute } from 'vue-router';
import { useCaseStore } from '@/stores/caseStore';



const route = useRoute();
const cases = useCaseStore();
const persons = usePersonStore();
const users = useUserStore();
console.log(cases.getCase());
const form = ref({
    id: '',
    case_name: '',
    case_radicate: '',
    case_person_id: '',
    case_user_id: '',
    case_status: 1,
});
// El error esta en la promesa de espera, primero se se asigna un undefined pero cuando encuentra el id que toca no realiza el cambio
onMounted(async () => {
    persons.getPersonsAll();
    users.getUsersAll();
    await cases.getCase(route.params.id);
    form.value = {
        id: route.params.id,
        case_name: cases.case.case_name,
        case_radicate: cases.case.case_radicate,
        case_person_id: cases.case.case_person_id,
        case_user_id: cases.case.case_user_id,
        case_status: cases.case.case_status,
    }
});
</script>

<style>

    input{
        height: 40px;
        padding-left: 10px;
        border: none;
        background-color: #e8e8e8;
        border-radius: 7px;
    }

</style>