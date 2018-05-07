<template>
  <div>
    <p>{{msg}}</p>
    <div class="bannerImg" style="height:200px;width:100%">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img :src="img1" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img :src="img2" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img :src="img3" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>
<script>
import img1 from '@/assets/commentImg/3.jpg'
import img2 from '@/assets/commentImg/4.jpg'
import img3 from '@/assets/commentImg/7.jpg'
export default {
  data () {
    return {
      msg: '行情',
      img1: img1,
      img2: img2,
      img3: img3,
      Num: 0
    }
  },
  created () {
  }
}
</script>
<style lang="less" scoped>
.bannerImg{
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
