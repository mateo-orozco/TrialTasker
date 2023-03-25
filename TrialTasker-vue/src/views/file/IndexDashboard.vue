<template>
    <HeaderTableVue title="Archivos" to="FileDashboardCreate"/>
    <TableDashboard :thead ="thead" :data="files.files.data" v-if="files.files.data" :delete="files.deleteFile" edit="FileDashboardUpdate"/>
    <Pagination :last_page="files.files.last_page" :current_page="files.files.current_page" :links="files.files.links" :funtion_page="files.getFilesPage" v-if="files.files.links"/>
  
</template>

<script setup>
import HeaderTableVue from '@/components/headers/HeaderTable.vue';
import TableDashboard from '@/components/Tables/TableDashboard.vue';
import Pagination from '@/components/Pagination.vue';
import { onMounted } from 'vue';
import { useFileStore } from '../../stores/fileStore';

const files = useFileStore();

const thead = [
    {
        name: 'Nombre',
        key: 'file_name',
    },
    {
        name: 'Url',
        key: 'file_url',
    },
    {
        name: 'Etapa',
        key: 'file_stage',
        key_2: 'stage_name',
    }
]
onMounted(() => {
    files.getFiles();
});

</script>

<style>

</style>