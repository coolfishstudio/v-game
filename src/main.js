import Vue from 'vue'
import fastclick from 'fastclick'
import App from './App'
import router from './router'
// import { device } from 'common/js/util'

import 'common/stylus/index.styl'

// 根据ua 处理移动端适配
// if (device.isPC()) {
//   document.documentElement.style.fontSize = '100px'
// } else {
//   var deviceWidth = document.documentElement.clientWidth
//   if (deviceWidth > 420) {
//     deviceWidth = 420
//   }
//   document.documentElement.style.fontSize = deviceWidth / 3.75 + 'px'
// }
var deviceWidth = document.documentElement.clientWidth
if (deviceWidth > 420) {
  deviceWidth = 420
}
document.documentElement.style.fontSize = deviceWidth / 3.75 + 'px'
document.body.style.maxWidth = '420px'
document.body.style.margin = '0 auto'
document.body.style.overflow = 'hidden'
document.body.style.display = 'none'
setTimeout(function () {
  document.body.style.display = 'block'
}, 10)

fastclick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
