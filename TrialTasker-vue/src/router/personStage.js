export default [
    {
        path: '/dashboard/personStage',
        name: 'PersonStageDashboard',
        component: () => import('@/views/personStage/IndexDashboard.vue'),
        meta: { 
            title: 'Personas en etapa' 
        }
    },
    {
        path: '/dashboard/personStage/create',
        name: 'PersonStageDashboardCreate',
        component: () => import('@/views/personStage/CreateDashboard.vue'),
        meta: {
            title: 'Crear Persona en etapa',
        },
    },
    {
        path: '/dashboard/personStage/update/:id',
        name: 'PersonStageDashboardUpdate',
        component: () => import('@/views/personStage/UpdateDashboard.vue'),
        meta: {
            title: 'Actualizar Persona en etapa',
        },
    },
]