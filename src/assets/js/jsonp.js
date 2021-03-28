/*
 * @Descripttion: 封装jsonp请求
 * @Author: qiuguixian
 * @Date: 2021-02-01 17:16:46
 * @LastEditors: qiuguixian
 * @LastEditTime: 2021-03-28 20:54:29
 */
import originJSONP from 'jsonp' // 原生的jsonp

// 在使用过程中要将jsonp 进行异步封装，请求
export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  // 第一个拼接需要有 ？ 存在则拼接 &

  // 封装异步请求数据
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        console.log('请求出错了')
        // reject(err)
      }
    })
  })
}

// 拼接请求地址
const param = data => {
  let url = ''
  if (Object.keys(data).length > 0) {
    for (let k in data) {
      let val = data[k]
      // 路径地址字符串拼接，encodeURIComponent 把字符串作为 URI 组件进行编码。
      url += `&${k}=${encodeURIComponent(val)}`
    }
  }
  // 返回拼接好的地址，存在地址第一个不需要 &
  return url ? url.substring(1) : ''
}
