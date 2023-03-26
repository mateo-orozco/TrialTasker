<template>
    <main>
        <div class="navbar">
            <input class="search" type="search" placeholder="Buscar">
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
            <tbody class="listacasos">
                <tr class="caso">
                    <td>mmmmm aaa</td>
                    <td>81957816</td>
                    <td>Activo</td>
                    <td>Prof. Jedediah Bode I</td>
                    <td>Austin</td>
                    <td>Ver mas</td>
                </tr>
                <tr class="caso">
                    <td>Wilton Kilback</td>
                    <td>1111</td>
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
    --azul: #0600ff;
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
    height: 100vh;
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
    text-decoration: none;
    background-color: var(--brown);
    color: var(--beige);
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
    border-radius: 5px;
}
tr {
    margin-top: 5vh;
}
</style>