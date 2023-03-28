export default [
    {
        path: '/dashboard/persons',
        name: 'PersonDashboard',
        component: () => import('@/views/person/IndexDashboard.vue'),
        meta: {
            title: 'Personas',
        },
    },
    {
        path: '/dashboard/persons/create',
        name: 'PersonDashboardCreate',
        component: () => import('@/views/person/CreateDashboard.vue'),
        meta: {
            title: 'Crear Persona',
        },
    },
    {
        path: '/dashboard/persons/update/:id',
        name: 'PersonDashboardUpdate',
        component: () => import('@/views/person/UpdateDashboard.vue'),
        meta: {
            title: 'Actualizar Persona',
        },
    },
]