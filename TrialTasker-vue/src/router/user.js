export default [
    {
        path: '/dashboard/users',
        name: 'UserDashboard',
        component: () => import('@/views/user/IndexDashboard.vue')
    },
    {
        path: '/dashboard/users/create',
        name: 'UserDashboardCreate',
        component: () => import('@/views/user/CreateDashboard.vue')
    },
    {
        path: '/dashboard/users/update/:id',
        name: 'UserDashboardUpdate',
        component: () => import('@/views/user/UpdateDashboard.vue')
    },
]