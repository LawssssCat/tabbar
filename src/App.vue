<template>
  <div id="app">
    <tab-bar :items='tabBarItems'></tab-bar>
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
          img: '/assets/img/tabbar/home.svg',
          activeImg: '../../assets/img/tabbar/home_active.svg'
        },
        {
          name: '分类',
          img: '../../assets/img/tabbar/category.svg',
          activeImg: '../../assets/img/tabbar/category_active.svg'
        },
        {
          name: '购物车',
          img: '../../assets/img/tabbar/cart.svg',
          activeImg: '../../assets/img/tabbar/cart_active.svg'
        },
        {
          name: '我的',
          img: '../../assets/img/tabbar/profile.svg',
          activeImg: '../../assets/img/tabbar/profile_active.svg'
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
