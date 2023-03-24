<template>
    <h1>Detalles del caso</h1>
    <div class="container">
        <RouterLink :to="{ name: 'CasosActivos' }" class="title">
            <button class='atras'>Atras</button>
        </RouterLink>
        <div class="contenido">
            <div class="cliente">
                <h2 class="seccion">CLIENTE:</h2>
                <h2 class="titulos">Name:</h2>
                <p class="informacion">Isom Trantow</p>
                <h2 class="titulos">Radicado:</h2>
                <p class="informacion">730404372</p>
            </div>
            <div class="usuario">
                <h2 class="seccion">ABOGADO:</h2>
                <h2 class="titulos">Name:</h2>
                <p class="informacion">Miss Samara Upton</p>
                <h2 class="titulos">Last Name:</h2>
                <p class="informacion">Fay</p>
                <h2 class="titulos">Phone:</h2>
                <p class="informacion">(681) 852-0360</p>
                <h2 class="titulos">Address:</h2>
                <p class="informacion">5663 Jordi Forge
                    Port Marysetown, OK 23814-0828</p>
                <h2 class="titulos">Email:</h2>
                <p class="informacion">eliezer69@example.com</p>
            </div>
            <div class="personas">
                <h2 class="seccion">PERSONA RELACIONADA:</h2>
                <h2 class="titulos">Name:</h2>
                <p class="informacion">Richard</p>
                <h2 class="titulos">Last Name:</h2>
                <p class="informacion">Upton</p>
                <h2 class="titulos">Phone:</h2>
                <p class="informacion">+1.432.919.6939</p>
                <h2 class="titulos">Address:</h2>
                <p class="informacion">8105 Crystel Pine Suite 128</p>
                <h2 class="titulos">Email:</h2>
                <p class="informacion">wyman.pinkie@example.org</p>
                <h2 class="titulos">CC:</h2>
                <p class="informacion">73213084</p>
                <h2 class="titulos">Issue:</h2>
                <p class="informacion">85441745</p>
                <h2 class="titulos">Number Ministry:</h2>
                <p class="informacion">6859108</p>
                <h2 class="titulos">Number Dispaych:</h2>
                <p class="informacion">92175167</p>
                <h2 class="titulos">Radicate:</h2>
                <p class="informacion">56494163</p>
                <h2 class="titulos">Authority:</h2>
                <p class="informacion">26818457</p>
                <h2 class="titulos">Number:</h2>
                <p class="informacion">89246911</p>
                <h2 class="titulos">Type Person:</h2>
                <p class="informacion">Juez</p>
            </div>
        </div>
    </div>
</template>

<script setup>

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