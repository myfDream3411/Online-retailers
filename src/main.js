import Vue from 'vue'
import App from './App'
import router from './router'
import './validate'
import 'lib-flexible'
import './mock/mock-server'
import store from './store'



Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template:
    '<App/>',
    router,
    store
})
