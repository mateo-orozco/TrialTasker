import { createRouter, createWebHistory, useRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import axios from 'axios'
import authRoutes from './auth'
import typePersonRoutes from './typePerson'
import userRoutes from './user'
import personRoutes from './person'
import caseRoutes from './case' 
import typeStageRoutes from './typeStage'
import stageRoutes from './stage'

import Cookies from "js-cookie";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'Login'
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
      meta: {
        title: 'Inicio',
      },
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: {
        title: 'Dashboard',
      },
    },
    {
      path: '/landingpage',
      name: 'LandingPage',
      component: () => import('../views/LandingPage.vue'),
      meta: {
        title: 'Bienvenido',
      },
    },
    {
      path: '/actualizarcaso',
      name: 'ActualizarCaso',
      component: () => import('../views/ActualizarCaso.vue'),
      meta: {
        title: 'Actualizar Caso',
      },
    },
    {
      path: '/actualizarcasorepresentante',
      name: 'ActualizarCasoRepresentante',
      component: () => import('../views/ActualizarCasoRepresentante.vue'),
      meta: {
        title: 'Actualizar Caso',
      },
    },
    {
      path: '/createcase',
      name: 'CreateCase',
      component: () => import('../views/CreateCase.vue'),
      meta: {
        title: 'Crear Caso',
      },
    },
    {
      path: '/casosactivos',
      name: 'CasosActivos',
      component: () => import('../views/CasosActivos.vue'),
      meta: {
        title: 'Casos Activos',
      },
    },
    {
      children: [
        ...authRoutes,
        ...typePersonRoutes,
        ...userRoutes,
        ...personRoutes,
        ...caseRoutes,
        ...typeStageRoutes,
        ...stageRoutes
      ],
    },
  ]
});

let user = [];

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  const redirect = () => {
    if (from.name === 'Register' && to.name === 'VerifyEmail') {
      next()
    } else 
    if (user.email_verified_at === null && to.name !== 'VerifyEmail') {
      next({ name: 'VerifyEmail' })
    } else
    if (to.name === 'Login' || to.name === 'Register' || to.name === 'ForgotPassword' || to.name === 'ResetPassword' ) {
      if (user.is_admin) {
        next({ name: 'Dashboard' })
      } else {
        next({ name: 'Home' })
      }
    } else if (to.path.includes('/dashboard') && !user.is_admin) {
      next({ name: 'Home' })
    } else {
      next()
    }
  }
  if (Cookies.get("auth_token")) {
    if (user.length === 0) {
      axios.get('/api/user').then((response) => {
        user =  response.data;
        redirect();
      });
    }else{
      redirect();
    }
  } else {
    user = [];
    if (to.name === 'Login' || to.name === 'Register' || to.name === 'ForgotPassword' || to.name === 'ResetPassword') {
      next()
    } else {
      next({ name: 'Login' })
    }
  }

  
});

export default router
