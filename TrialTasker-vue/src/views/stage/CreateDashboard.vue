<template>
    <HeaderAccions title="Crear Etapa" to="StageDashboard"/>
    <Form :create="stages.createStage" :form="form" button-text="Crear">
        <FormGroup label="Nombre" :error="stages.errors ? stages.errors.stage_name : []">
            <input type="text" id="stage_name" v-model="form.stage_name">
        </FormGroup>
        <FormGroup label="Tipo de Etapa" :error="stages.errors ? stages.errors.stage_type_stage_id : []">
            <select id="stage_type_stage_id" v-model="form.stage_type_stage_id">
                <option value="">Seleccione</option>
                <option v-for="typeStage in typeStages.typeStagesAll" :value="typeStage.id">{{typeStage.type_stage_name}}</option>
            </select>
        </FormGroup>
        <FormGroup label="Caso" :error="stages.errors ? stages.errors.stage_case_id : []">
            <select id="stage_case_id" v-model="form.stage_case_id">
                <option value="">Seleccione</option>
                <option v-for="caseItem in cases.casesAll" :value="caseItem.id">{{caseItem.case_name}}</option>
            </select>
        </FormGroup>
        <FormGroup label="Notas" :error="stages.errors ? stages.errors.stage_notes : []">
            <textarea id="stage_notes" v-model="form.stage_notes"></textarea>
        </FormGroup>
    </Form>
  
</template>

<script setup>
import { onMounted, ref } from 'vue';
import HeaderAccions from '../../components/headers/HeaderAccions.vue';
import Form from '../../components/forms/Form.vue';
import FormGroup from '../../components/forms/FormGroup.vue';
import { useStageStore } from '../../stores/stageStore';
import { useTypeStageStore } from '../../stores/typeStageStore';
import { useCaseStore } from '../../stores/caseStore';

const stages = useStageStore();
const typeStages = useTypeStageStore();
const cases = useCaseStore();

const form = ref({
    stage_name: '',
    stage_type_stage_id: '',
    stage_case_id: '',
    stage_notes: '',
});

onMounted(() => {
    typeStages.getTypeStagesAll();
    cases.getCasesAll();
});




</script>

<style>

</style>