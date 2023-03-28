<template>
    <HeaderAccions title="Actualizar persona en etapa" to="PersonStageDashboard"/>
    <Form :create="personStages.updatePersonStage" :form="form" button-text="Actualizar">
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
import { useRoute } from 'vue-router';

const personStages = usePersonStageStore();
const stages = useStageStore();
const persons = usePersonStore();
const route = useRoute();

const form = ref({
    id: '',
    person_stage_person_id: '',
    person_stage_stage_id: '',
});

onMounted(async() => {
    stages.getStagesAll();
    persons.getPersonsAll();
    await personStages.getPersonStage(route.params.id);
    form.value  = {
        id: personStages.personStage.id,
        person_stage_person_id: personStages.personStage.person_stage_person_id,
        person_stage_stage_id: personStages.personStage.person_stage_stage_id,
    }
});

</script>