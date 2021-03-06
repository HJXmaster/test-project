// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
// import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import routes from './router'
import elementui from 'element-ui'
import axios from 'axios'
axios.defaults.withCredentials=true;
Vue.use(elementui)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
	routes
})

new Vue({
  router
}).$mount('#app')












// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
