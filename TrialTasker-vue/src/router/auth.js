export default [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/auth/Login.vue'),
        meta: {
            title: 'Iniciar Sesión',
        },
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/auth/Register.vue'),
        meta: {
            title: 'Registrarse',
        },
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: () => import('@/views/auth/ForgotPassword.vue'),
        meta: {
            title: 'Recuperar Contraseña',
        },
    },
    {
        path: "/password-reset/:token",
        name: "ResetPassword",
        component: () => import('@/views/auth/ResetPassword.vue'),
        meta: {
            title: 'Restablecer Contraseña',
        },
    },
    {
        path: '/verify-email/',
        name: 'VerifyEmail',
        component: () => import('@/views/auth/VerifyEmail.vue'),
        meta: {
            title: 'Verificar Correo Electrónico',
        },
    },
]