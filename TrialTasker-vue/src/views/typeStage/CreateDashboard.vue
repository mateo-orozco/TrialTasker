<template>
    <HeaderAccions title="Crear Tipo de Etapa" to="TypeStageDashboard" />
    <Form :create="typeStages.createTypeStage" :form="form" button-text="Crear">
        <FormGroup label="Nombre" :error="typeStages.errors ? typeStages.errors.type_stage_name : []">
            <input type="text" id="type_stage_name" v-model="form.type_stage_name">
        </FormGroup>
    </Form>
</template>

<script setup>
import { ref } from 'vue';
import HeaderAccions from '../../components/headers/HeaderAccions.vue';
import Form from '../../components/forms/Form.vue';
import FormGroup from '../../components/forms/FormGroup.vue';
import { useTypeStageStore } from '../../stores/typeStageStore';

const typeStages = useTypeStageStore();

const form = ref({
    type_stage_name: ''
});



</script>

<style>

</style>