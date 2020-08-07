import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Autenticacion/Login.vue'
import Registrar from '../views/Autenticacion/Registrar.vue'
import token from "@/services/token";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { //ESTE META LO USAMOS PARA PERMITIR USUARIOS NO LOGUEADOS EN ESTA RUTA, ES PARECIDO AL CANACTIVATE DE ANGULAR
      allowAnonymous: true
    }
  },
  {
    path: '/registrar',
    name: 'registrar',
    component: Registrar,
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
]

const router = new VueRouter({
  routes
})

///AQUI PROTEJO MIS RUTAS

router.beforeEach((to, from, next) => {
  if (to.name == 'login' && token.loggedIn()) { //SI EL USUARIO VA A IR A LA RUTA DEL LOGIN PERO ESTA LOGUEADO, ENTONCES LO REDIRIGIMOS A HOME
    next({ path: '/' })
  }
  else if (!to.meta.allowAnonymous && !token.loggedIn()) { // SI EL USUARIO VA A IR A UNA RUTA QUE NO PERMITE ANONIMOS(OSEA UNA RUTA QUE PIDE QUE ESTE LOGUEADO) Y EL USUARIO NO ESTA LOGUEADO, ENTONCES LO MANDAMOS AL LOGIN
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }
  else {
    next()
  }
})

export default router
