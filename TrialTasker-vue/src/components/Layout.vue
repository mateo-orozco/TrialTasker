<template>
    <main>
        <div class="sidebar"
            v-if="$route.name != 'Login' && $route.name != 'Register' && $route.name != 'ForgotPassword' && $route.name != 'ResetPassword' && $route.name != 'VerifyEmail' && $route.name != 'LandingPage'">
            <Sidebar />
        </div>
        <div class="container"
            :class="{ 'container-padding': $route.name != 'Login' && $route.name != 'Register' && $route.name != 'ForgotPassword' && $route.name != 'ResetPassword' && $route.name != 'VerifyEmail' }">
            <slot></slot>
        </div>
    </main>
</template>

<script setup>
import Sidebar from './Sidebar/Sidebar.vue';
</script>

<style scoped>
main {
    display: flex;
    height: 100vh;
}

.sidebar {
    width: 250px;
    height: 100%;
    position: fixed;
    background-color: var(--brown);
    color: var(--white);
    padding: 1.5rem 1.5rem 0 1.5rem;
    display: grid;
    grid-template-rows: max-content 1fr max-content;
}

.container {
    flex: 1;
    background-color: var(--white);
}

.container-padding {
    padding: 1.5rem;
    margin: 0 0 0 250px;
}
</style>