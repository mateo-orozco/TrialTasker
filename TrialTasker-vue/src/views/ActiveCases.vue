<template>
    <main>
        <div class="navbar">
            <RouterLink :to="{ name: 'CreateCase' }" class="buttonCreateCase">
                <div class="createButton">Crear Caso</div>
            </RouterLink>
        </div>
        <table>
            <thead>
                <td>Nombre del caso</td>
                <td>Radicado del caso</td>
                <td>Estatus</td>
                <td>Personas relacionadas</td>
                <td>Usuarios relacionados</td>
                <td>Acciones</td>
            </thead>
            <tbody>
                <tr>
                    <td>Wilton Kilback</td>
                    <td>81957816</td>
                    <td>Activo</td>
                    <td>Prof. Jedediah Bode I</td>
                    <td>Austin</td>
                    <td>Ver mas</td>
                </tr>
                <tr>
                    <td>Wilton Kilback</td>
                    <td>81957816</td>
                    <td>Activo</td>
                    <td>Prof. Jedediah Bode I</td>
                    <td>Austin</td>
                    <td>Ver mas</td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<script setup>

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

/* main */
main {
    border: solid 1px;
    height: 100vh;
}

/* estilos boton de crear caso */
.createButton {
    border: solid 1px;
    width: 20vh;
    height: 4vh;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    background-color: var(--brown);
    color: var(--beige);
    margin-left: 85%;
}

/* estilos de la tabla */
table {
    margin-top: 30px;
}

/* estilos del thead */
thead {
    width: 100%;
    height: 5vh;
    background-color: var(--brown);
    color: var(--beige);
}

/* estilos del tbody */
td {
    width: 35vh;
    text-align: center;
}

tr {
    margin-top: 5vh;
}
</style>