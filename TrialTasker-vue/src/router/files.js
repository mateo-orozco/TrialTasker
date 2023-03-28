export default [
    {
        path: '/dashboard/files',
        name: 'FileDashboard',
        component: () => import('@/views/file/IndexDashboard.vue'),
        meta: {
            title: 'Archivos',
        },
    },
    {
        path: '/dashboard/files/create',
        name: 'FileDashboardCreate',
        component: () => import('@/views/file/CreateDashboard.vue'),
        meta: {
            title: 'Crear Archivo',
        },
    },
    {
        path: '/dashboard/files/update/:id',
        name: 'FileDashboardUpdate',
        component: () => import('@/views/file/UpdateDashboard.vue'),
        meta: {
            title: 'Actualizar Archivo',
        },
    },
]