export default [
    {
        path: '/dashboard/stage',
        name: 'StageDashboard',
        component: () => import('@/views/stage/IndexDashboard.vue'),
        meta: {
            title: 'Etapas',
        },
    },
    {
        path: '/dashboard/stage/create',
        name: 'StageDashboardCreate',
        component: () => import('@/views/stage/CreateDashboard.vue'),
        meta: {
            title: 'Crear Etapa',
        },
    },
    {
        path: '/dashboard/stage/update/:id',
        name: 'StageDashboardUpdate',
        component: () => import('@/views/stage/UpdateDashboard.vue'),
        meta: {
            title: 'Actualizar Etapa',
        },
    },
]