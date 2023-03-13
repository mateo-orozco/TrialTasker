import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import axios from 'axios'
import auth from './auth'
import typePerson from './typePerson'

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
      ],
    },
  ]
});

router.beforeEach((to, from, next) => {
  axios.get('/api/user').then((response) => {
    if (response.data) {
      if (to.name === 'Login'|| to.name === 'Register' || to.name === 'ForgotPassword'|| to.name === 'ResetPassword') {
        if (response.data.is_admin) {
          next({ name: 'Dashboard' })
        }else{
          next({ name: 'Home' })
        }
      }else if (response.data.email_verified_at === null && to.name !== 'VerifyEmail') {
        next({ name: 'VerifyEmail' })
      } else if (to.name === 'VerifyEmail') {
        if (response.data.is_admin) {
          next({ name: 'Dashboard' })
        }else{
          next({ name: 'Home' })
        }
      } else if (to.path.includes('/dashboard/') && !response.data.is_admin) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  }).catch((error) => {
    if (to.name === 'Login'|| to.name === 'Register' || to.name === 'ForgotPassword'|| to.name === 'ResetPassword') {
      next()
    } else {
      next({ name: 'Login' })
    } 
  })
});

export default router
