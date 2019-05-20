import Home from '.././pages/Home/Home.vue'
import Classification from '.././pages/Classification/Classification.vue'
import Know from '.././pages/Know/Know.vue'
import Shopping from '.././pages/Shopping/Shopping.vue'
import Personal from '.././pages/Personal/Personal.vue'

 const routes = [
  {
    path:'/home',
    component:Home,
    meta: {
      isShowFoot: true
    }
  },
  {
    path:'/classification',
    component:Classification,
    meta: {
      isShowFoot: true
    }
  },
  {
    path:'/know',
    component:Know,
    meta: {
      isShowFoot: true
    }
  },
  {
    path:'/shopping',
    component:Shopping,
    meta: {
      isShowFoot: true
    }
  },
  {
    path:'/personal',component:Personal
  },
  // 自动重定向路由
  {
    path: '/',
    redirect: '/home'
  }
]

export default routes
