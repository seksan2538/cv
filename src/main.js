import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/bootstrap-vue'
import './plugins/fontawesome'

Vue.config.productionTip = false

Vue.prototype.$publicPath = process.env.BASE_URL

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
