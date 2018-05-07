
/**
 * 全局状态管理字段的 操作
 */
const mutations = {
  addCount (state) {
    state.count = state.count + 1
    alert(state.count)
  }
}
export default mutations
