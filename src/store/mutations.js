// 商城Vuex-mutations
export default {
  saveUserName (state, username) {
    state.username = username
  },
  saveCartCount (state, count) {
    // 通过commit会调用mutations
    state.carCount = count
  }
}
