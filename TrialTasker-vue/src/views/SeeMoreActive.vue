<template>
    <div class="container">
        <div class="title">
            <RouterLink :to="{ name: 'CasosActivos' }" class="title">
                <button class='atras'>Atras</button>
            </RouterLink>
            <h1>Detalles del caso</h1>
        </div>
        
        
        

        <div class="contenido">
            <h2 class="seccion">CLIENTE</h2>
            <div class="cliente">
                <div class="info">
                    <h2 class="titulos">Nombre:</h2>
                    <p class="informacion">{{ cases.caseStore.case_name }}</p>
                </div>
                <div class="info">
                    <h2 class="titulos">Radicado:</h2>
                    <p class="informacion">{{ cases.caseStore.case_radicate }}</p>
                </div>
            </div>

            <h2 class="seccion">PERSONA RELACIONADA</h2>

            <div class="personas">
                <div class="izquierda">
                    <div class="info">
                        <h3 class="titulos">Nombre:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_name }}</p>
                    </div>
                    <div class="info">
                        <h3 class="titulos">Apellido:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_lastname }}</p>
                    </div>
                    <div class="info">
                        <h3 class="titulos">Telefono:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_phone }}</p>
                    </div>
                    <div class="info">
                        <h3 class="titulos">Direccion:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_address }}</p>
                    </div>
                    <div class="info">
                        <h3 class="titulos">Email:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_email }}</p>
                    </div>
                    <div class="info">
                        <h3 class="titulos">CC/NIT:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_nit }}</p>
                    </div>
                    <div class="info">
                        <h3 class="titulos">Fecha de Publicacion:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_issue_nit }}</p>
                    </div>
                </div>
                <div class="derecha">
                    <div class="info">
                        <h3 class="titulos">Numero de Ministerio:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_num_ministry }}</p>
                    </div>
                    <div class="info">
                        <h3 class="titulos">Numero de Despacho:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_num_dispaych }}</p>
                    </div>
                    <div class="info">
                        <h3 class="titulos">Radicado:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_radicated }}</p>
                    </div>
                    <div class="info">
                        <h3 class="titulos">Autoridad:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_authority }}</p>
                    </div>
                    <div class="info">
                        <h3 class="titulos">Telefono:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_number }}</p>
                    </div>
                    <div class="info">
                        <h3 class="titulos">Tipo de persona:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_authority }}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useCaseStore } from '@/stores/caseStore';

const cases = useCaseStore();

onMounted(() => {
})
    var casoid = localStorage.getItem("id");
    cases.getCase(casoid);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto+Condensed:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;500&family=Roboto+Condensed:wght@700&display=swap');


.container {
    width: 100%;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0px 0px 10px 0.1px rgba(0, 0, 0, 0.288);

}

.contenido {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.atras {
    left: 29vw;
    border: none;
    border-radius: 5px;
    width: 50px;
    height: 30px;
    background-color: var(--brown);
    color: white;
    cursor: pointer;
}


.seccion {
    margin-top: 40px;
}


.usuario {
    margin-top: 40px;
}

.personas {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
}

.izquierda {
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.derecha {
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.info {
    height: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.titulos {
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto Condensed', sans-serif;
}

.informacion {
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto Condensed', sans-serif;
}

.title {
    display: flex;
    justify-content: space-between;
    background-color: var(--verde);
    color: white;
    border-radius: 8px;
    text-decoration: none;
    padding: 5px;
}

p {
    color: rgba(0, 0, 0, 0.507);
}
</style>