<template>
    <HeaderAccions title="Crear persona en etapa" to="PersonStageDashboard"/>
    <Form :create="personStages.createPersonStage" :form="form" button-text="Crear">
        <FormGroup label="Persona" :error="personStages.errors ? personStages.errors.person_stage_person_id : []">
            <select id="person_stage_person_id" v-model="form.person_stage_person_id">
                <option value="">Seleccione</option>
                <option v-for="person in persons.personsAll" :value="person.id">{{person.per_name}}</option>
            </select>
        </FormGroup>
        <FormGroup label="Etapa" :error="personStages.errors ? personStages.errors.person_stage_stage_id : []">
            <select id="person_stage_stage_id" v-model="form.person_stage_stage_id">
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
import { usePersonStageStore } from '../../stores/personStageStore';
import { useStageStore } from '../../stores/stageStore';
import { usePersonStore } from '../../stores/personStore';

const personStages = usePersonStageStore();
const stages = useStageStore();
const persons = usePersonStore();

const form = ref({
    person_stage_person_id: '',
    person_stage_stage_id: '',
});

onMounted(() => {
    stages.getStagesAll();
    persons.getPersonsAll();
});

</script>