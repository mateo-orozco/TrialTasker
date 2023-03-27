<template>
    <HeaderAccions title="Actualizar Archivo" to="FileDashboard"/>
    <Form :create="files.updateFile" :form="form" button-text="Actualizar">
        <FormGroup label="Nombre" :error="files.errors ? files.errors.file_name : []">
            <input type="text" id="file_name" v-model="form.file_name">
        </FormGroup>
        <FormGroup label="Url" :error="files.errors ? files.errors.file_url : []">
            <input type="text" id="file_url" v-model="form.file_url">
        </FormGroup>
        <FormGroup label="Etapa" :error="files.errors ? files.errors.file_stage_id : []">
            <select id="file_stage_id" v-model="form.file_stage_id">
                <option value="">Seleccione</option>
                <option v-for="stage in stages.stagesAll" :value="stage.id">{{stage.stage_name}}</option>
            </select>
        </FormGroup>
        
    </Form>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import HeaderAccions from '../../components/headers/HeaderAccions.vue';
import Form from '../../components/forms/Form.vue';
import FormGroup from '../../components/forms/FormGroup.vue';
import { useFileStore } from '../../stores/fileStore';
import { useStageStore } from '../../stores/stageStore';
import { useRoute } from 'vue-router';

const files = useFileStore();
const stages = useStageStore();
const route = useRoute();

const form = ref({
    id: '',
    file_name: '',
    file_stage_id: '',
    file_url: '',
});

onMounted(async() => {
    stages.getStagesAll();
    await files.getFile(route.params.id);
    form.value = {
        id: files.file.id,
        file_name: files.file.file_name,
        file_stage_id: files.file.file_stage_id,
        file_url: files.file.file_url,
    }

});

</script>

<style>

</style>