/**
 * 全局状态管理字段
 */

const state = {
  show: false,
  count: 0,
  loginState: false, // 登录状态（true登录中，false未登录）
  userInfo: {}
}

export default state // 抛出定义的state
