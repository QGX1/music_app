/*
 * @Descripttion: xxx
 * @Author: qiuguixian
 * @Date: 2021-02-02 15:09:00
 * @LastEditors: qiuguixian
 * @LastEditTime: 2021-03-28 23:54:46
 */
const homeChildren = [
  {
    path: 'recommend',
    component: () => import('@/views/recommend'),
    meta: { isKeepAlive: true }
  }
]
export default {
  homeChildren
}
