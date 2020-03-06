<template>
  <div class="tab-bar-item" @click="btnClick">
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
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    isActive () {
      let path = this.item.path
      // 这里用 indexOf 可以使子组件也高亮
      return this.$route.path.includes(path)
    }
  },
  methods: {
    btnClick () {
      let path = this.item.path
      this.$router.replace(path)
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
