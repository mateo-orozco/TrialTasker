<template>
    <HeaderTableVue title="Tipo de etapas" to="TypeStageDashboardCreate"/>
    <TableDashboard :thead ="thead" :data="typeStages.typeStages.data" v-if="typeStages.typeStages.data" :delete="typeStages.deleteTypeStage" edit="TypeStageDashboardUpdate"/>
    <Pagination :last_page="typeStages.typeStages.last_page" :current_page="typeStages.typeStages.current_page" :links="typeStages.typeStages.links" :funtion_page="typeStages.getTypeStagesPage" v-if="typeStages.typeStages.links"/>
</template>

<script setup>
import HeaderTableVue from '@/components/headers/HeaderTable.vue';
import TableDashboard from '@/components/Tables/TableDashboard.vue';
import Pagination from '@/components/Pagination.vue';
import { onMounted } from 'vue';
import { useTypeStageStore } from '../../stores/typeStageStore';

const typeStages = useTypeStageStore();
const thead = [
    {
        name: 'Nombre',
        key: 'type_stage_name',
    },
]
onMounted(() => {
    typeStages.getTypeStages();
});
</script>

<style>

</style>