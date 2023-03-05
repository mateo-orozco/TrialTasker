export default [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/auth/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/auth/Register.vue')
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: () => import('@/views/auth/ForgotPassword.vue')
    },
    {
        path: "/password-reset/:token",
        name: "ResetPassword",
        component: () => import('@/views/auth/ResetPassword.vue')
    }
]