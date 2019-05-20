import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from '../routes'

const router = new VueRouter({
  // 去掉了路由路径中的#
  mode: 'history',
  routes,
  linkActiveClass: 'active'
})

export default router
