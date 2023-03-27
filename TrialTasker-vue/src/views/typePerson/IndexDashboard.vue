<template>
    <HeaderTableVue title="Tipo de Personas" to="TypePersonDashboardCreate"/>
    <TableDashboard :thead ="thead" :data="typePersons.typePersons.data" v-if="typePersons.typePersons.data" :delete="typePersons.deleteTypePerson" edit="TypePersonDashboardUpdate"/>
    <Pagination :last_page="typePersons.typePersons.last_page" :current_page="typePersons.typePersons.current_page" :links="typePersons.typePersons.links" :funtion_page="typePersons.getTypePersonsPage" v-if="typePersons.typePersons.links"/>
</template>

<script setup>
import HeaderTableVue from '@/components/headers/HeaderTable.vue';
import TableDashboard from '@/components/Tables/TableDashboard.vue';
import Pagination from '@/components/Pagination.vue';
import { onMounted } from 'vue';
import { useTypePersonStore } from '@/stores/typePersonStore';

const typePersons = useTypePersonStore();

const thead = [
        {
            name: 'Tipo de Persona',
            key: 'type_person_name',
        }
    ]
onMounted(() => {
    typePersons.getTypePersons();
});



</script>

<style>



</style>