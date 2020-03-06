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
          img: require('./assets/img/tabbar/home.svg'),
          activeImg: require('./assets/img/tabbar/home_active.svg')
        },
        {
          name: '分类',
          img: require('./assets/img/tabbar/category.svg'),
          activeImg: require('./assets/img/tabbar/category_active.svg')
        },
        {
          name: '购物车',
          img: require('./assets/img/tabbar/cart.svg'),
          activeImg: require('./assets/img/tabbar/cart_active.svg')
        },
        {
          name: '我的',
          img: require('./assets/img/tabbar/keai.gif'),
          activeImg: require('./assets/img/tabbar/keai.gif')
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
