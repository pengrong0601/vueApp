<template>
  <div>
    <p>{{msg}}</p>
    <el-button @click="$store.commit('addCount')">点击按钮</el-button>
    <span >{{curNum}}</span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '交易',
      curNum: 5
    }
  },
  methods: {
  },
  created () {
    this.$store.state.count = this.curNum
  }
}
</script>
<style lang="less" scoped>

</style>
