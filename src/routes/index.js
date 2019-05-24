import Home from '.././pages/Home/Home.vue'
import Classification from '.././pages/Classification/Classification.vue'
import Know from '.././pages/Know/Know.vue'
import Shopping from '.././pages/Shopping/Shopping.vue'
import Personal from '.././pages/Personal/Personal.vue'
import Login from '.././pages/Personal/Login/Login.vue'
import Mailbox from '.././pages/Personal/Mailbox/Mailbox.vue'
import Register from '.././pages/Personal/Register/Register.vue'
import Email from '.././pages/Personal/Email/Email.vue'
import Search from '.././pages/Search/Search.vue'
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
    path:'/personal',
    component:Personal,
  },
   {
     path:'/login',
     component:Login,
   },
   {
     path:'/mailbox',
     component:Mailbox,
   },
   {
     path:'/register',
     component:Register,
   },
   {
     path:'/email',
     component:Email,
   },
   {
     path:'/search',
     component:Search
   },
  // 自动重定向路由
  {
    path: '/',
    redirect: '/home'
  }
]

export default routes
