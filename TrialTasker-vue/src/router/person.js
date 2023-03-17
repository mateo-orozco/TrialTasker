export default [
    {
        path: '/dashboard/persons',
        name: 'PersonDashboard',
        component: () => import('@/views/person/IndexDashboard.vue')
    },
    {
        path: '/dashboard/persons/create',
        name: 'PersonDashboardCreate',
        component: () => import('@/views/person/CreateDashboard.vue')
    },
    {
        path: '/dashboard/persons/update/:id',
        name: 'PersonDashboardUpdate',
        component: () => import('@/views/person/UpdateDashboard.vue')
    },
]