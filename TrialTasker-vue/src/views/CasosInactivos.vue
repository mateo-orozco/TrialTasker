<template>
    <main>
        <div class="navbar">
            <input class="search" type="search" placeholder="Buscar">
            <RouterLink :to="{ name: 'CreateCase' }" class="buttonCreateCase">
                <div class="createButton">Crear Caso</div>
            </RouterLink>
        </div>
        <HeaderTableVue title="Casos Activos" to="PersonDashboardCreate" />

        <table>
            <thead>
                <tr>
                    <td>Nombre del caso</td>
                    <td>Radicado</td>
                    <td>Estatus</td>
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="active in cases.inactiveCases">
                    <td>{{ active["case_name"] }}</td>
                    <td>{{ active["case_radicate"] }}</td>
                    <td>Inactivo</td>
                    <td>
                        <RouterLink :to="{ name: 'SeeMoreInactive' }" class="navButton">
                            <div class="buttonSeeMore">Ver Mas</div>
                        </RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<script setup>
import { onMounted } from 'vue';
import { useCaseStore } from '@/stores/caseStore';
import TableUser from '@/components/Tables/TableUsers.vue';

const cases = useCaseStore();
onMounted(() => {
    cases.casesInactive()
});

const thead = [
    {
        name: 'Nombre',
        key: 'case_name',
    },
    {
        name: 'Radicado',
        key: 'case_radicate',
    },
    {
        name: 'Cliente',
        key: 'case_person_id',
    },
    {
        name: 'Abogado',
        key: 'case_user_id',
    },
]


document.addEventListener("keyup", e => {
    if (e.target.matches(".search")) {
        document.querySelectorAll(".caso").forEach(caso => {
            caso.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? caso.classList.remove("filtro")
                : caso.classList.add("filtro")
        })
    }
})



</script>

<style scoped>
/* variables */
:root {
    --background: #edecec;
    --brown: #664200;
    --beige: #fff2bf;
    --my-hover-dark: #473800;
    --my-hover-ligth: #e8e8e8;
    --white: #fff;
    --black: #000;

}

.filtro {
    display: none;
}

.navbar {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.search {
    width: 50vw;
    height: 30px;
    border: none;
    border-radius: 10px;
    padding-left: 10px;
    background-color: #e8e8e8;
}

/* main */
main {
    height: auto;
    box-shadow: 0px 0px 10px 0.1px rgba(0, 0, 0, 0.288);
    border-radius: 12px;
    padding: 10px;
}

/* estilos boton de crear caso */
.createButton {
    border: solid 1px;
    width: 20vh;
    padding: 5px;
    height: 30px;
    text-align: center;
    border-radius: 5px;
    background-color: var(--verde);
    color: var(--white);

}

.buttonCreateCase {
    text-decoration: none;

}

/* estilos de la tabla */
table {
    margin-top: 30px;
}

/* estilos del thead */
thead {
    width: 100%;
    height: 5vh;
    background-color: var(--verde);
    color: var(--white);
}

/* estilos del tbody */
td {
    width: 35vh;
    text-align: center;
    border-radius: 5px;
}

tr {
    margin-top: 5vh;
}
</style>