import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/login/LoginView.vue'
import RegisterView from '../views/login/RegisterView.vue'
import AlterPassView from '../views/login/AlterPassView.vue'
import CallsView from '../views/app/CallsView.vue'
import ProfileView from '../views/app/ProfileView.vue'
import TipsView from '../views/app/TipsView.vue'
import AdminView from '../views/app/AdminView.vue'
import NewsView from '../views/blog/NewsView.vue'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/cadastrar',
    name: 'Cadastro',
    component: RegisterView
  },
  {
    path: '/alterar-senha',
    name: 'Alterar Senha',
    component: AlterPassView
  },
  {
    path: '/atendimentos',
    name: 'Todos os atendimentos',
    component: CallsView
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: ProfileView
  },
  {
    path: '/dicas',
    name: 'Dicas',
    component: TipsView
  },
  {
    path: '/admin',
    name: 'Página Administrativa',
    component: AdminView
  },
  {
    path: '/novidades',
    name: 'Veja todas as novidades',
    component: NewsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} - ${ to.name }`
  next()
})

export default router
