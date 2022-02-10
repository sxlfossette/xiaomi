// Storege封装
// 使用ES6规范
const STORAGE_KEY = 'mall'
export default {
  // 存储值(数字，布尔值，对象，json字符串等)
  // moduleName模块名称
  setItem (key, value, moduleName) {
    console.log(this)
    if (moduleName) {
      // eslint-disable-next-line prefer-const
      let val = this.getItem(moduleName)
      val[key] = value
      this.setItem(moduleName, val)
    } else {
      // eslint-disable-next-line prefer-const
      let val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },
  // 获取某一个模块下面的的属性user下面的userName
  getItem (key, moduleName) {
    if (moduleName) {
      console.log(this.getItem)
      // eslint-disable-next-line prefer-const
      let val = this.getItem(moduleName)
      if (val) return val[key]
    }
    return this.getStorage()[key]
  },
  // 获取整个浏览器的缓冲信息
  getStorage () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  clear (key, moduleName) {
    // eslint-disable-next-line prefer-const
    let val = this.getStorage()
    // eslint-disable-next-line camelcase
    if (moduleName) {
      if (!val[moduleName]) return
      // eslint-disable-next-line camelcase
      delete val[moduleName][key]
      // 删除某个模块下面的属性
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    // this.setItem(STORAGE_KEY, val)// 覆盖原值
  }
}
