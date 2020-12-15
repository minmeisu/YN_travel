import Vue from 'vue'
import VueRouter from 'vue-router'
//首页
import Home from '../views/Home/home.vue'
//个人中心
import Personal from '../views/Personal/personal.vue'
//搜索页面
import Search from '../views/Search/search.vue'
//登录
import Login from '../views/Login/login.vue'
//登录的
import Loginend from '../views/Login/components/loginend.vue'
//注册的
import Register from '../views/Login/components/register.vue'
//收藏的
import Mycollection from '../views/Mycollection/mycollection.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      keepAlive:true,//该页面需要缓存
    }
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import( '../views/Personal/personal.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import( '../views/Search/search.vue'),
    meta:{
      keepAlive:true,//该页面需要缓存
    }
  },
  {
    path: '/container/:id',
    name: 'Container',
    component: () => import( '../views/Container/container.vue')
  },
  {
    path: '/mycollection',
    name: 'Mycollection',
    component: () => import( '../views/Mycollection/mycollection.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/Login/login.vue'),
    //重定向
    redirect:'/loginend',
    //二级路由
    children : [
      {
        path: '/loginend',
        name: 'Loginend',
        component: () => import( '../views/Login/components/loginend.vue'),
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import( '../views/Login/components/register.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
