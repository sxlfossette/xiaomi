export default {
  saveUserName (context, username) {
    // 通过commit会调用mutations
    context.commit('saveUserName', username)
  },
  saveCartCount (context, count) {
    // 通过commit会调用mutations
    context.commit('saveCartCount', count)
  }
}
