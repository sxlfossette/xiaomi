import Vue from 'vue'
import router from './router'
// axios在每个页面都需要导入这个插件
import axios from 'axios'
// vue-axios把作用域对象挂载到Vue实例上，方便使用this调用
import VueAxios from 'vue-axios'
import App from './App.vue'
// import env from './env'

const mock = true
// require和import的区别：
// import：是预编译加载，在编译的时候import的文件会写入到内存中
// require：是执行的时候加载
// mock开关
if (mock) {
  require('./mock/api')
}

// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api'
// 设置超时时间8s
axios.defaults.timeout = 8000

// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL

// interceptors拦截器,接口错误拦截
// response是axios封装的，并不代表接口返回的值
axios.interceptors.response.use(function (response) {
  // eslint-disable-next-line prefer-const
  let res = response.data
  // response.data才是取到接口的值

  // eslint-disable-next-line eqeqeq
  if (res.status == 0) {
    // 状态码为0，成功
    return res.data
  // eslint-disable-next-line eqeqeq
  } else if (res.status == 10) {
    // 10未登录
    window.location.herf = '/#/login'
  } else {
    alert(res.msg)
  }
})
Vue.use(VueAxios, axios)
// productionTip生产环境提示
Vue.config.productionTip = false
new Vue({
  // 这里的router与上面导入的router名字一致
  router,
  render: h => h(App)
}).$mount('#app')
