<template>
    <HeaderTableVue title="Personas en etapas"  to="PersonStageDashboardCreate"/>
    <TableDashboard :thead ="thead" :data="personStages.personStages.data" v-if="personStages.personStages.data" :delete="personStages.deletePersonStage" edit="PersonStageDashboardUpdate"/>
    <Pagination :last_page="personStages.personStages.last_page" :current_page="personStages.personStages.current_page" :links="personStages.personStages.links" :funtion_page="personStages.getPersonStagesPage" v-if="personStages.personStages.links"/>
    
  
</template>

<script setup>
import HeaderTableVue from '@/components/headers/HeaderTable.vue';
import TableDashboard from '@/components/Tables/TableDashboard.vue';
import Pagination from '@/components/Pagination.vue';
import { onMounted } from 'vue';
import { usePersonStageStore } from '@/stores/personStageStore';

const personStages = usePersonStageStore();

const thead = [
        {
            name: 'Persona',
            key: 'person_stage_person',
            key_2: 'per_name',
        },
        {
            name: 'Etapa',
            key: 'person_stage_stage',
            key_2: 'stage_name',
        }
    ]
onMounted(() => {
    personStages.getPersonStages();
});

</script>

<style>

</style>