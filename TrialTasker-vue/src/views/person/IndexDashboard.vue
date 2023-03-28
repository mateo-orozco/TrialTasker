<template>
    <HeaderTableVue title="Personas" to="PersonDashboardCreate"/>
    <TableDashboard :thead ="thead" :data="persons.persons.data" v-if="persons.persons.data" :delete="persons.deletePerson" edit="PersonDashboardUpdate"/>
    <Pagination :last_page="persons.persons.last_page" :current_page="persons.persons.current_page" :links="persons.persons.links" :funtion_page="persons.getPersonsPage" v-if="persons.persons.links"/>
  
</template>

<script setup>
import HeaderTableVue from '@/components/headers/HeaderTable.vue';
import TableDashboard from '@/components/Tables/TableDashboard.vue';
import Pagination from '@/components/Pagination.vue';
import { onMounted } from 'vue';
import { usePersonStore } from '../../stores/personStore';

const persons = usePersonStore();
const thead = [
    {
        name: 'Nombre',
        key: 'per_name',
    },
    {
        name: 'Apellido',
        key: 'per_lastname',
    },
    {
        name: 'Correo',
        key: 'per_email',
    },
    {
        name: 'Telefono',
        key: 'per_phone',
    },
    {
        name:"Tipo",
        key: 'per_type_person',
        key_2: 'type_person_name'
    }

]
onMounted(() => {
    persons.getPersons();
});


</script>

<style>

</style>