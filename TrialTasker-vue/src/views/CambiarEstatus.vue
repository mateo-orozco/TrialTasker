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


const route = useRoute();
const cases = useCaseStore();




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

<style>

    input{
        height: 40px;
        padding-left: 10px;
        border: none;
        background-color: #e8e8e8;
        border-radius: 7px;
    }

</style>