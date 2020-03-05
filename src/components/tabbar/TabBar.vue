<template>
<div>
  <div id="tab-bar"></div>
  <div v-for="(item, index) in items" :key="index" class="tab-bar-item">{{ item }}</div>
</div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>
#tab-bar{
  display: flex;
  text-align: center;
  height: 49px;

  /*到最小面*/
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0px -3px 1px rgba(100, 100, 100, .09);
}

.tab-bar-item {
  flex: 1;
  background-color: #ecf0f1;
}
</style>
