<template>
    <div class="container">
        <div class="navbar">
            <div class="navbarLogo">
                <Logo fill="--brown" />
            </div>
            <div class="buttons">

                <RouterLink :to="{ name: 'Login' }" class="navButton">
                    <div class="buttonLogin">Login
                    </div>
                </RouterLink>
                <RouterLink :to="{ name: 'Register' }" class="navButton">
                    <div class="buttonRegister">Registrarse</div>
                </RouterLink>
            </div>
        </div>
        <div class="contenido">

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

        <div class="contenido">

            <div class="texto2">
                <p>Nuestra plataforma está diseñada específicamente para abogados y se adapta perfectamente a sus
                    necesidades. Ya sea que esté buscando un sistema de gestión de casos, herramientas de colaboración
                    en equipo o una forma de automatizar su facturación, estamos aquí para ayudarlo.</p>
            </div>
            <div class="image2">
                <img src="@/assets/img/abogados2.jpeg" alt="" class="imagen2">
            </div>
            <div class="texto2" style="margin-left: 30px;">
                <p>Sabemos que como abogado, su tiempo es valioso y necesita herramientas efectivas para simplificar su
                    trabajo diario y aumentar la eficiencia. Nuestra plataforma ha sido diseñada específicamente para
                    satisfacer las necesidades únicas de los abogados y proporcionar una solución integral para todas
                    sus necesidades</p>
            </div>
        </div>

        <div class="contenido">
            <div class="image3">
                <img src="@/assets/img/abogados3.jpg" alt="" class="imagen3">
            </div>
            <div class="texto3">
                Además, nuestra plataforma es fácil de usar y está diseñada para proporcionar una experiencia de usuario
                sin complicaciones.

                Nos esforzamos por brindar un servicio de alta calidad y atención personalizada a cada uno de nuestros
                clientes. Trabajamos en estrecha colaboración con usted para entender sus necesidades y objetivos
                específicos

                ¡Únase a nuestra plataforma hoy y descubra cómo podemos ayudarlo a simplificar su práctica legal y
                mejorar la satisfacción del cliente!
            </div>
            <div class="image3">
                <img src="@/assets/img/abogados4.png" alt="" class="imagen4">
            </div>
        </div>
        <footer>
            <div class="logo">
                <Logo fill="--brown" />
            </div>
            <div class="informacion">
                <p>asdlkjfhlaskdjfnlasdkfbhasldkjbflkas</p>
            </div>
            <div class="informacion">
                <p>asdlkjfhlaskdjfnlasdkfbhasldkjbflkas2</p>
            </div>
        </footer>
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
body {
    background-color: var(--background);
}

.container {
    width: 100vw;
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


/* navbar Buttons */
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
    box-sizing: border-box;
    padding: 10px;
}

.buttonRegister {
    width: 250px;
    height: 40px;
    background-color: var(--brown);
    border-radius: 5px;
    text-align: center;
    margin-top: 20px;
    padding: 10px;
}

.navButton {
    color: var(--beige);
    text-decoration: none;
    width: 100%;
    height: 100%;
    font-size: 20px;
}

/* hover de los botones */
.buttonLogin:hover {
    background-color: var(--beige);
}

.buttonRegister:hover {
    background-color: var(--beige);
}

.navButton:hover {
    color: var(--brown);
}

/* Primera parte del contenido */
.contenido {
    margin-top: 150px;
    display: flex;
    justify-content: center;
    border: solid 1px;
    flex-wrap: wrap;
}

.part1 {
    display: flex;
    width: 100%;
}

.image1 {
    width: 700px;
}


.imagen1 {
    width: 70%;
    margin-left: 200px;
}

.texto1 {
    margin-left: 200px;
    width: 500px;
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
    width: 400px;
    margin-top: 80px;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 20px;
}

.imagen2 {
    width: 500px;
}

/* tercera parte del contenido */

.imagen3 {
    width: 500px;
}

.texto3 {
    width: 33%;
    margin-left: 20px;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 20px;
}

.imagen4 {
    width: 350px;
    margin-left: 20px;
}

/* footer */

footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    background-color: var(--brown);
}

.logo {
    width: 200px;
}

.informacion {
    color: var(--beige);
}
</style>