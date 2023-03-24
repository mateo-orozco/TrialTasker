export default [
    {
        path: '/dashboard/typeStage',
        name: 'TypeStageDashboard',
        component: () => import('@/views/typeStage/IndexDashboard.vue'),
        meta: {
            title: 'Tipos de Etapa',
        },
    },
    {
        path: '/dashboard/typeStage/create',
        name: 'TypeStageDashboardCreate',
        component: () => import('@/views/typeStage/CreateDashboard.vue'),
        meta: {
            title: 'Crear Tipo de Etapa',
        },
    },
    {
        path: '/dashboard/typeStage/update/:id',
        name: 'TypeStageDashboardUpdate',
        component: () => import('@/views/typeStage/UpdateDashboard.vue'),
        meta: {
            title: 'Actualizar Tipo de Etapa',
        },
    },
]