<template>
  <div id="app">
    <tabbar>
    </tabbar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
export default {
  name: 'App',
  data () {
    return {
      items: ['首页', '分类', '购物车', '我的']
    }
  },
  components: {
    TabBar
  }
}
</script>

<style>
@import url("./assets/css/base.css");
</style>
