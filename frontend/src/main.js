import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './globalVariable.js'
import './librerias.js'

Vue.config.productionTip = false

window.bus = new Vue(); //ESTO LO USO PARA EL MENU

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
