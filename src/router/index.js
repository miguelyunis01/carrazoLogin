import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogInView from '../views/Auth/LogInView.vue'
import RegisterView from '../views/Auth/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import {auth} from '../main'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'CarrazoApp'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LogInView,
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
    meta: {
      title: 'Register'
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: {
      requiresAuth: true,
      title: 'Dashboard'
    }
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if(to.path === '/login' && auth.currentUser) {
    next()
    return;
  }
  if(to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser){
    next('/login')
    return;
  }
  next();
})

export default router


