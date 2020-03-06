<template>
  <div id="app">
    <tab-bar :items='tabBarItems'></tab-bar>

  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'

let home = require('./assets/img/keai.gif')
console.log(home)

export default {
  name: 'App',
  data () {
    return {
      tabBarItems: [
        {
          name: '首页',
          img: '/static/img/tabbar/home.svg',
          activeImg: '/static/img/tabbar/home_active.svg'
        },
        {
          name: '分类',
          img: '/static/img/tabbar/category.svg',
          activeImg: '/static/img/tabbar/category_active.svg'
        },
        {
          name: '购物车',
          img: '/static/img/tabbar/cart.svg',
          activeImg: '/static/img/tabbar/cart_active.svg'
        },
        {
          name: '我的',
          img: './static/img/tabbar/keai.gif',
          activeImg: '/static/img/tabbar/keai.gif'
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
