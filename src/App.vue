<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar :items='tabBarItems' activeColor="blue"></tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'

export default {
  name: 'App',
  data () {
    return {
      tabBarItems: [
        {
          name: '首页',
          img: require('./assets/img/tabbar/home.svg'),
          activeImg: require('./assets/img/tabbar/home_active.svg'),
          path: '/home'
        },
        {
          name: '分类',
          img: require('./assets/img/tabbar/category.svg'),
          activeImg: require('./assets/img/tabbar/category_active.svg'),
          path: '/category'
        },
        {
          name: '购物车',
          img: require('./assets/img/tabbar/cart.svg'),
          activeImg: require('./assets/img/tabbar/cart_active.svg'),
          path: '/cart'
        },
        {
          name: '我的',
          img: require('./assets/img/tabbar/keai.gif'),
          activeImg: require('./assets/img/tabbar/keai.gif'),
          path: '/profile'
        }
      ]
    }
  },
  components: {
    TabBar
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
