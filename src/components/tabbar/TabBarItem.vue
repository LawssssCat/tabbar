<template>
  <div class="tab-bar-item">
    <slot>
      <img v-if="!isActive" :src="item.img">
      <img v-if="isActive" :src="item.activeImg">
      <div :class='{active: isActive}'>{{item.name}}</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    item: Object,
    required: true
  },
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}

.active{
  color: red;
}
</style>
