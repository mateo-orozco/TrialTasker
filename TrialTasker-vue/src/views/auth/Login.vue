<template>
    <div class="container">
        <div class="logo"></div>
        <form @submit.prevent="authStore.handleLogin(form)" class="login">
            <div class="form-group email">
                <!-- <label for="email">Correo</label> -->
                <input type="email" class="form-control" id="email" v-model="form.email" placeholder="Digite su correo">
            </div>
            <div class="form-group password">
                <!-- <label for="password">Contraseña</label> -->
                <input type="password" class="form-control" id="password" v-model="form.password" placeholder="Digite su contraseña">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <div class="forgotPassword">
            <RouterLink :to="{ name: 'ForgotPassword' }">¿Olvidaste tu contraseña?</RouterLink>
        </div>
        <div class="register">
            <RouterLink :to="{ name: 'Register' }">Registrarse</RouterLink>
        </div>
       
    </div>
    <div>
        
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore} from '@/stores/authStore'

const authStore = useAuthStore()

const form = ref({
  email: '',
  password: ''
});
</script>

<style>
/* pallet color */
:root {
    --my-background: #edecec;
    --my-shadow: #333;
    --my-text-dark: #664200;
    --my-text-ligth: #fff2bf;
    --my-hover-dark: #473800;
    --my-hover-ligth:#e8e8e8 ;
  }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* --------backgraud--------  */

    body{
        margin: auto;
        /* border: 1px solid black; */
        width:100%;
        height: 95vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url('../../assets/backgraundLogin.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    
    /* --------container form--------  */
    
    .container{
        width: 400px;
        padding: 40px;
        background-color:white;
        border: none;
        border-radius: 30px;
        box-shadow: black 0px 3px 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    /* --------logo--------  */
    .logo{
        height: 60px;
        width:90%;
        background-image: url(../../assets/logo-TrialTasker.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 30px;
        margin-bottom: 20px;
    }

    /* -------- form--------  */
    .login{
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    /* --------input email--------  */

    .email{
        width: 100%;
    }
    .email input{
        width: 100%;
        color: var(--my-text-dark);
        border: 1px solid var(--my-hover-dark);
        border-radius: 10px  10px 0 0;
        padding: 10px 5px;
        outline-style: none;
        background-color: var(--my-hover-ligth); 
    }
    
    .email input::placeholder {
        color: var(--my-text-dark);
        opacity: 1;
    }

    /* --------input password--------  */
    .password{
        width: 100%;
    }
    .password input{
        width: 100%;
        color: var(--my-text-dark);
        border: 1px solid var(--my-hover-dark);
        border-radius:0 0 10px  10px ;
        outline-style: none;
        padding: 10px 5px;
        background-color: var(--my-hover-ligth); 
    }

    .password input::placeholder {
        color: var(--my-text-dark);
        opacity: 1;
    }

    /* --------margins--------  */

    .btn, .register, .forgotPassword{
        margin-top: 10px;
    }

    /* --------buttton submit--------  */
 
    .btn {
        background-color: var(--my-hover-dark);
        color: var(--my-text-ligth);
        padding: 10px 30px;
        border: none;
        border-radius: 10px;
        width: 100%;
    }

</style>