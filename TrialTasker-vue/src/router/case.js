export default [
    {
        path: '/dashboard/cases',
        name: 'CasesDashboard',
        component: () => import('@/views/case/IndexDashboard.vue')
    },
    {
        path: '/dashboard/cases/create',
        name: 'CaseDashboardCreate',
        component: () => import('@/views/case/CreateDashboard.vue')
    },
    {
        path: '/dashboard/cases/update/:id',
        name: 'CaseDashboardUpdate',
        component: () => import('@/views/case/UpdateDashboard.vue')
    },
]