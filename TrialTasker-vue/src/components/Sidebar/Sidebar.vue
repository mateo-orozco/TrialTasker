<template>
    <div class="logo">
        <Logo :fill="'--white'" />
    </div>
    <div class="links" v-if="auth.user">
        <ButtonLink to="Dashboard" text="Dashboard" v-if="auth.user.is_admin">
            <IconDashboard :size="20" stroke-width="2.2" />
        </ButtonLink>
        <ButtonLink to="TypePersonDashboard" text="Tipo de personas" v-if="auth.user.is_admin">
            <IconUsers :size="20" stroke-width="2.2" />
        </ButtonLink>
        <ButtonLink to="UserDashboard" text="Usuarios" v-if="auth.user.is_admin">
            <IconUsers :size="20" stroke-width="2.2" />
        </ButtonLink>
        <ButtonLink to="PersonDashboard" text="Personas" v-if="auth.user.is_admin">
            <IconUsers :size="20" stroke-width="2.2" />
        </ButtonLink>
        <ButtonLink to="Home" text="Inicio">
            <IconHome :size="20" stroke-width="2.2" />
        </ButtonLink>
        <ButtonLink to="ActiveCase" text="Casos activos"></ButtonLink>
    </div>
    <div class="user">
        <div class="user__name" v-if="auth.user">
            <span>{{ auth.user.name }} {{ auth.user.lastname }}</span>
        </div>
        <ButtonLink to="Login" text="Salir" @click="auth.handleLogout()">
            <IconLogout :size="20" stroke-width="2.2" />
        </ButtonLink>
    </div>
</template>

<script setup>
import Logo from '@/components/logo/Logo.vue';
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import ButtonLink from '../buttons/ButtonLink.vue';
import { IconHome, IconDashboard, IconLogout, IconUsers } from '@tabler/icons-vue';

const auth = useAuthStore();

onMounted(() => {
    auth.getUser();
})

</script>

<style scoped>
.logo {
    width: 100%;
    border-bottom: 2px solid var(--white);


}

.links {
    width: 100%;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.user {
    width: 100%;
    border-top: 2px solid var(--white);
    display: flex;
    flex-direction: column;
    padding: 1rem 0;

}

.user__name {
    font-size: 1rem;
    padding: 0.5rem 1rem;
}
</style>