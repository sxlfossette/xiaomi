<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
// import storage from './storage/index'
export default {
  name: 'app',
  components: {},
  data () {
    return {}
  },
  mounted () {
    // storage.setItem('a', 1)
    // storage.setItem('user', { a: 1 })
    // storage.setItem('abc', { a: 1 }, 'user')
    // storage.clear('a', 'user')

    // 本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res
    // })

    // // 通过esay-mock平台实现数据mock
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res
    // })

    // 本地集成mockjs实现数据mock
    this.axios.get('/user/login').then((res) => {
      this.res = res
    })
  }
}
</script>
