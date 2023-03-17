<template>
    <div class="container">
        <div class="navbar">
            <div class="navbarLogo">
                <Logo fill="--brown" />
            </div>
            <div class="buttons">
                <div class="buttonLogin">
                    <RouterLink :to="{ name: 'Login' }" class="navButton">Login</RouterLink>
                </div>
                <div class="buttonRegister">
                    <RouterLink :to="{ name: 'Register' }" class="navButton">Registrarse</RouterLink>
                </div>
            </div>
        </div>
        <div class="contenido">
            <div class="part1">
                <div class="image1">
                    <img src="@/assets/img/abogados.jpeg" alt="imagenAbogado1" class="imagen1">
                </div>
                <div class="texto1">
                    <p id="textoPart1">Bienvenido a TrialTasker</p>
                    <p id="textoPart2">la plataforma dedicada unicamente a abogados donde podras llevar tu calendario y tus
                        casos
                        ordenadamente</p>
                </div>
            </div>
        </div>
        <div class="contenido">
            <div class="part1">
                <div class="texto2">
                    <p>Nuestra plataforma está diseñada específicamente para abogados y se adapta perfectamente a sus
                        necesidades. Ya sea que esté buscando un sistema de gestión de casos, herramientas de colaboración
                        en equipo o una forma de automatizar su facturación, estamos aquí para ayudarlo.</p>
                </div>
                <div class="image2">
                    <img src="@/assets/img/abogados2.jpeg" alt="">
                </div>
                <div class="texto2">
                    <p>Sabemos que como abogado, su tiempo es valioso y necesita herramientas efectivas para simplificar su
                        trabajo diario y aumentar la eficiencia. Nuestra plataforma ha sido diseñada específicamente para
                        satisfacer las necesidades únicas de los abogados y proporcionar una solución integral para todas
                        sus necesidades</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Logo from '../components/logo/Logo.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');

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

/* body */
.container {
    background-color: rgba(255, 255, 255, 1);
}

/* navbar */
.navbar {
    width: 100%;
    height: 150px;
    display: flex;
    margin-top: 5%;
}

.navbarLogo {
    width: 400px;
    margin-left: 5%;
}

/* navbar Buttons8 */
.buttons {
    margin-left: 60%;
    margin-top: 25px;
}

.buttonLogin {
    width: 250px;
    height: 40px;
    background-color: var(--brown);
    border-radius: 5px;
    text-align: center;
}

.navButton {
    color: var(--beige);
    text-decoration: none;
}

.buttonRegister {
    width: 250px;
    height: 40px;
    background-color: var(--brown);
    border-radius: 5px;
    text-align: center;
    margin-top: 20px;
}

/* Primera parte del contenido */
.contenido {
    border: solid 1px;
    margin-top: 150px;
    display: flex;
    justify-content: center;
}

.part1 {
    display: flex;
    width: 80%;
}

.imagen1 {
    width: 500px;
    margin-left: 200px;
}

.texto1 {
    margin-left: 200px;
    width: 30%;
}

#textoPart1 {
    font-weight: bold;
    font-size: 80px;
    font-family: 'Roboto Condensed', sans-serif;
}

/* segunda parte del contenido */
#textoPart2 {
    font-size: 25px;
    font-family: 'Roboto Condensed', sans-serif;
}

.texto2 {
    width: 33.3%;
    margin-top: 150px;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 20px;
}
</style>