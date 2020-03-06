import Vue from 'vue'
import VueRouter from 'vue-router'

// 1. 安装插件
Vue.use(VueRouter)

// 2. 创建路由对象
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    }, {
      path: '/home',
      component: () => import('../views/home/Home.vue')
    }, {
      path: '/category',
      component: () => import('../views/category/Category.vue')
    }, {
      path: '/cart',
      component: () => import('../views/cart/Cart.vue')
    }, {
      path: '/profile',
      component: () => import('../views/profile/Profile.vue')
    }
  ]
})
