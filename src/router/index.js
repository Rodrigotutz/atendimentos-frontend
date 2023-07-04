import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AlterPassView from '../views/AlterPassView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'


const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/cadastrar',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/alterar-senha',
    name: 'alter-pass',
    component: AlterPassView
  },
  {
    path: '/inicio',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sobre',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contato',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
