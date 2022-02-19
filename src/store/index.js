import Vue from 'vue'
import Vuex from 'vuex'

// 导入名称不能随意取名
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)
const state = {
  username: '', // 登录用户名
  cartCount: 0 // 购物车商品数量
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
