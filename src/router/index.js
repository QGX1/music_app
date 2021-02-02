/*
 * @Descripttion: xxx
 * @Author: qiuguixian
 * @Date: 2021-02-01 17:50:47
 * @LastEditors: qiuguixian
 * @LastEditTime: 2021-02-02 16:27:03
 */

import Vue from 'vue'
import Router from 'vue-router'
import children from './children'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home'),
      redirect: '/home/recommend',
      meta: {},
      children: children.homeChildren
    }
  ]
})
