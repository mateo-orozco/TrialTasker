export default [
    {
        path: '/dashboard/typeStage',
        name: 'TypeStageDashboard',
        component: () => import('@/views/typeStage/IndexDashboard.vue')
    },
    {
        path: '/dashboard/typeStage/create',
        name: 'TypeStageDashboardCreate',
        component: () => import('@/views/typeStage/CreateDashboard.vue')
    },
    {
        path: '/dashboard/typeStage/update/:id',
        name: 'TypeStageDashboardUpdate',
        component: () => import('@/views/typeStage/UpdateDashboard.vue')
    },
]