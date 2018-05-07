<template>
  <div class="home">
    <div class="home-content">
      <router-view></router-view>
      <!-- {{msg}} -->
    </div>
    <div class="home-button">
      <home-button></home-button>
    </div>
  </div>
</template>
<script>
import homeButton from '@/components/HomeButton'
export default {
  components: {
    'home-button': homeButton
  },
  data () {
    return {
      msg: '主页'
    }
  }
}
</script>
<style lang="less" scoped>
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .home-content{
    flex: 1;
  }
  .home-button{
  }
}
</style>
