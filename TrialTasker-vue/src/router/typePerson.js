export default [
    {
        path: '/dashboard/type-persons',
        name: 'TypePersonDashboard',
        component: () => import('@/views/typePerson/IndexDashboard.vue'),
        meta: {
            title: 'Tipos de Persona',
        },
    },
    {
        path: '/dashboard/type-persons/create',
        name: 'TypePersonDashboardCreate',
        component: () => import('@/views/typePerson/CreateDashboard.vue'),
        meta: {
            title: 'Crear Tipo de Persona',
        },
    },
    {
        path: '/dashboard/type-persons/update/:id',
        name: 'TypePersonDashboardUpdate',
        component: () => import('@/views/typePerson/UpdateDashboard.vue'),
        meta: {
            title: 'Actualizar Tipo de Persona',
        },
    },
]