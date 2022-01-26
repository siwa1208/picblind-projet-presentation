import Vue from 'vue'
import router from './router'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '../node_modules/bulma/css/bulma.css'

Vue.use(BootstrapVue);

Vue.config.productionTip = false
new Vue({
  router,
  BootstrapVue,
  IconsPlugin,
  render: h => h(App)
}).$mount('#app')
