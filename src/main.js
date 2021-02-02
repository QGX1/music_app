/*
 * @Descripttion: xxx
 * @Author: qiuguixian
 * @Date: 2021-02-01 11:59:26
 * @LastEditors: qiuguixian
 * @LastEditTime: 2021-02-02 11:05:35
 */

import 'babel-polyfill'
// 移动端点击延迟300ms的问题
import fastclick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'
import './utils/rem.js'
import 'assets/stylus/index.styl'

Vue.config.productionTip = false
// body下的按钮都没有300ms的延迟
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
