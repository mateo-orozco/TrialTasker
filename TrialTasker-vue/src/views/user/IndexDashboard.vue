<template>
    <HeaderTableVue title="Usuarios" to="UserDashboardCreate"/>
    <TableDashboard :thead ="thead" :data="users.users.data" v-if="users.users.data" :delete="users.deleteUser" edit="UserDashboardUpdate"/>
    <Pagination :last_page="users.users.last_page" :current_page="users.users.current_page" :links="users.users.links" :funtion_page="users.getUsersPage" v-if="users.users.links"/>
</template>

<script setup>
import HeaderTableVue from '@/components/headers/HeaderTable.vue';
import TableDashboard from '@/components/Tables/TableDashboard.vue';
import Pagination from '@/components/Pagination.vue';
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore';

const users = useUserStore();

const thead = [
        {
            name: 'Nombre',
            key: 'name',
        },
        {
            name: 'Apellido',
            key: 'lastname',
        },
        {
            name: 'Correo',
            key: 'email',
        },
        {
            name: 'Telefono',
            key: 'phone',
        },
        {
            name: 'Es administrador',
            key: 'is_admin',
        }
    ]
onMounted(() => {
    users.getUsers();
});
</script>