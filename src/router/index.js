import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 主页
import Home from '@/components/Home'
// 登录
// import Login from '@/components/login/login'
// 交易
import Deal from '@/components/main/deal/deal'
// 行情
import Market from '@/components/main/market/market'
// 个人中心
import PersonalCenter from '@/components/main/personalCenter/personalCenter'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   component: Login
    // },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/home/market',
      children: [{
        path: '/home/market',
        name: 'Market',
        component: Market
      }, {
        name: 'Deal',
        path: '/home/deal',
        component: Deal
      }, {
        path: '/home/personalCenter',
        name: 'PersonalCenter',
        component: PersonalCenter
      }]

    }
  ]
})
