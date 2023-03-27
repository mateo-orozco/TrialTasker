export default [
    {
        path: '/dashboard/users',
        name: 'UserDashboard',
        component: () => import('@/views/user/IndexDashboard.vue'),
        meta: {
            title: 'Usuarios',
        },
    },
    {
        path: '/dashboard/users/create',
        name: 'UserDashboardCreate',
        component: () => import('@/views/user/CreateDashboard.vue'),
        meta: {
            title: 'Crear Usuario',
        },
    },
    {
        path: '/dashboard/users/update/:id',
        name: 'UserDashboardUpdate',
        component: () => import('@/views/user/UpdateDashboard.vue'),
        meta: {
            title: 'Actualizar Usuario',
        },
    },
]