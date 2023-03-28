<template>
    <h1>Detalles del caso</h1>
    <div class="container">
        <RouterLink :to="{ name: 'CasosInactivos' }" class="title">
            <button class='atras'>Atras</button>
        </RouterLink>
        <div class="contenido">
            <div class="cliente" v-for="inactives in cases.inactiveCases">
                <h2 class="seccion">CLIENTE:</h2>
                <h2 class="titulos">Name:</h2>
                <p class="informacion">{{ inactives["case_name"] }}</p>
                <h2 class="titulos">Radicado:</h2>
                <p class="informacion">{{ inactives["case_radicate"] }}</p>
            </div>
            <div class="personas" v-for="inactives in cases.inactiveCases">
                <h2 class="seccion">PERSONA RELACIONADA:</h2>
                <h2 class="titulos">Name:</h2>
                <p class="informacion">{{ inactives["case_person"]["per_name"] }}</p>
                <h2 class="titulos">Last Name:</h2>
                <p class="informacion">{{ inactives["case_person"]["per_lastname"] }}</p>
                <h2 class="titulos">Phone:</h2>
                <p class="informacion">{{ inactives["case_person"]["per_phone"] }}</p>
                <h2 class="titulos">Address:</h2>
                <p class="informacion">{{ inactives["case_person"]["per_address"] }}</p>
                <h2 class="titulos">Email:</h2>
                <p class="informacion">{{ inactives["case_person"]["per_email"] }}</p>
                <h2 class="titulos">CC:</h2>
                <p class="informacion">{{ inactives["case_person"]["per_nit"] }}</p>
                <h2 class="titulos">Issue:</h2>
                <p class="informacion">{{ inactives["case_person"]["per_issue_nit"] }}</p>
                <h2 class="titulos">Number Ministry:</h2>
                <p class="informacion">{{ inactives["case_person"]["per_num_ministry"] }}</p>
                <h2 class="titulos">Number Dispaych:</h2>
                <p class="informacion">{{ inactives["case_person"]["per_num_dispaych"] }}</p>
                <h2 class="titulos">Radicate:</h2>
                <p class="informacion">{{ inactives["case_person"]["per_radicated"] }}</p>
                <h2 class="titulos">Authority:</h2>
                <p class="informacion">{{ inactives["case_person"]["per_authority"] }}</p>
                <h2 class="titulos">Number:</h2>
                <p class="informacion">{{ inactives["case_person"]["per_number"] }}</p>
                <h2 class="titulos">Type Person:</h2>
                <p class="informacion">{{ inactives["case_person"]["per_type_person_id"] }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useCaseStore } from '@/stores/caseStore';

const cases = useCaseStore();
onMounted(() => {
    cases.casesInactive()
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto+Condensed:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;500&family=Roboto+Condensed:wght@700&display=swap');

.atras {
    border: none;
    border-radius: 5px;
    width: 50px;
    height: 30px;
    background-color: #664200;
    color: white;
    cursor: pointer;
}

.contenido {
    margin-top: 20px;
    margin-bottom: 30px;
    border: solid 1px;
    text-align: center;
}

.cliente {
    margin-top: 40px;
}

.usuario {
    margin-top: 40px;
}

.personas {
    margin-top: 40px;
    margin-bottom: 40px;
}

.titulos {
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto Condensed', sans-serif;
}

.informacion {
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto Condensed', sans-serif;
}
</style>