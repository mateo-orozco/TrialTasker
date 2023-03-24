<template>
    <HeaderAccions title="Actualizar Tipo de Etapa" to="TypeStageDashboard" />
    <Form :create="typeStages.updateTypeStage" :form="form" button-text="Actualizar">
        <FormGroup label="Nombre" :error="typeStages.errors ? typeStages.errors.type_stage_name : []">
            <input type="text" id="type_stage_name" v-model="form.type_stage_name">
        </FormGroup>
    </Form>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import HeaderAccions from '../../components/headers/HeaderAccions.vue';
import Form from '../../components/forms/Form.vue';
import FormGroup from '../../components/forms/FormGroup.vue';
import { useTypeStageStore } from '../../stores/typeStageStore';
import { useRoute } from 'vue-router';


const typeStages = useTypeStageStore();
const router = useRoute();


const form = ref({
    id: '',
    type_stage_name: ''
});

onMounted(async() => {
    await typeStages.getTypeStage(router.params.id)
    form.value = {
        id: typeStages.typeStage.id,
        type_stage_name: typeStages.typeStage.type_stage_name,
    }
});

</script>

<style>

</style>