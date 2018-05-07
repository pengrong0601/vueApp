<template>
  <div class="homeBtnContent">
    <ul class="homeButton">
      <li v-for="(item,index) in buttonLists" :key="index" v-bind:class="index === curIndex ? 'active' : ''" @click="routerGo(item.routerName)">
        <i  :class="item.icon"></i>
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '主页下方的button',
      curIndex: 0,
      buttonLists: [{
        name: '行情',
        icon: 'el-icon-tickets',
        routerName: '/home/market'
      }, {
        name: '交易',
        icon: 'el-icon-sold-out',
        routerName: '/home/deal'
      }, {
        name: '个人中心',
        icon: 'el-icon-printer',
        routerName: '/home/personalCenter'
      }]
    }
  },
  methods: {
    changeBtn () {
      const path = this.$route.path
      switch (path) {
        case '/home/market':
          this.curIndex = 0
          break
        case '/home/deal':
          this.curIndex = 1
          break
        case '/home/personalCenter':
          this.curIndex = 2
          break
        default:
          break
      }
    },
    routerGo (routerName) {
      this.$router.push({
        path: routerName
      })
    }
  },
  watch: {
    '$route': 'changeBtn'
  },
  created () {
    this.changeBtn()
  }
}
</script>
<style scoped lang='less'>
.homeBtnContent{
  height: 50px;
  border: 1px solid #D2D2D2;
  .homeButton {
    list-style: none;
    display: flex;
    flex-direction: row;
    li{
      flex: 1;
      i{
        font-size: 18px;
      }
    }
    .active{
        color: #3E9EFB;
      }
  }
}
</style>
