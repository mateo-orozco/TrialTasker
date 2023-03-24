export default [
    {
        path: '/dashboard/cases',
        name: 'CasesDashboard',
        component: () => import('@/views/case/IndexDashboard.vue'),
        meta: {
            title: 'Casos',
        },
    },
    {
        path: '/dashboard/cases/create',
        name: 'CaseDashboardCreate',
        component: () => import('@/views/case/CreateDashboard.vue'),
        meta: {
            title: 'Crear Caso',
        },
    },
    {
        path: '/dashboard/cases/update/:id',
        name: 'CaseDashboardUpdate',
        component: () => import('@/views/case/UpdateDashboard.vue'),
        meta: {
            title: 'Actualizar Caso',
        },
    },
]