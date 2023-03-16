import { createRouter, createWebHistory, useRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import axios from 'axios'
import auth from './auth'
import typePerson from './typePerson'
import userRouter from './user'
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
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      children: [
        ...auth,
        ...typePerson,
        ...userRouter,
      ],
    },
  ]
});

let user = [];

router.beforeEach((to, from, next) => {
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
