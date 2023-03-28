<template>
    <HeaderTableVue title="Etapas" to="StageDashboardCreate"/>
    <TableDashboard :thead ="thead" :data="stages.stages.data" v-if="stages.stages.data" :delete="stages.deleteStage" edit="StageDashboardUpdate"/>
    <Pagination :last_page="stages.stages.last_page" :current_page="stages.stages.current_page" :links="stages.stages.links" :funtion_page="stages.getStagesPage" v-if="stages.stages.links"/>
  
</template>

<script setup>
import HeaderTableVue from '@/components/headers/HeaderTable.vue';
import TableDashboard from '@/components/Tables/TableDashboard.vue';
import Pagination from '@/components/Pagination.vue';
import { onMounted } from 'vue';
import { useStageStore } from '@/stores/stageStore';

const stages = useStageStore();

const thead = [
        {
            name: 'Etapa',
            key: 'stage_name',
        },
        {
            name: 'Tipo de Etapa',
            key: 'stage_type_stage',
            key_2: 'type_stage_name',
        },
        {
            name: 'Caso',
            key: 'stage_case',
            key_2: 'case_name',
            
        }
    ]
onMounted(() => {
    stages.getStages();
});

</script>

<style>

</style>