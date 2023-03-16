export default [
    {
        path: '/dashboard/type-persons',
        name: 'TypePersonDashboard',
        component: () => import('@/views/typePerson/IndexDashboard.vue')
    },
    {
        path: '/dashboard/type-persons/create',
        name: 'TypePersonDashboardCreate',
        component: () => import('@/views/typePerson/CreateDashboard.vue')
    },
    {
        path: '/dashboard/type-persons/update/:id',
        name: 'TypePersonDashboardUpdate',
        component: () => import('@/views/typePerson/UpdateDashboard.vue')
    },
]