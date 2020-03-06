<template>
  <div id="tab-bar">
    <tab-bar-item v-for="(item, index) in items" :key='index' :item='item'></tab-bar-item >
  </div>
</template>

<script>
import TabBarItem from './TabBarItem'

export default {
  name: 'TabBar',
  props: {
    items: {
      type: Array,
      required: true
    },
    activeColor: {
      type: String,
      default: 'red',
      required: false
    }
  },
  components: {
    TabBarItem
  }
}
</script>

<style>
#tab-bar{
  display: flex;
  text-align: center;

  /*到最小面*/
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0px -3px 1px rgba(100, 100, 100, .09);
  background-color: #ecf0f1;
}
</style>
