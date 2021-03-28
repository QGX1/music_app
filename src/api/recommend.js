/*
 * @Descripttion: 推荐数据请求的配置
 * @Author: qiuguixian
 * @Date: 2021-03-07 17:07:29
 * @LastEditors: qiuguixian
 * @LastEditTime: 2021-03-07 17:52:11
 */
import jsonp from 'assets/js/jsonp.js'
import { commonParams, options } from './config'
export function getRecommend() {
  const url =
    'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
    // 请求qq音乐必须传的参数，接口需求
  })
  return jsonp(url, data, options)
}
