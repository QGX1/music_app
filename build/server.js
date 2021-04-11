/*
 * @Descripttion: 文本描述
 * @Author: qiuguixian
 * @Date: 2021-04-10 23:51:10
 * @LastEditors: qiuguixian
 * @LastEditTime: 2021-04-11 22:45:15
 */
let express = require('express')
let app = express()
let path = require('path')

// var proxyMiddleware = require('http-proxy-middleware')
var config = require('../config/index')
// let compiler = webpack('config')
// 服务器跨域
const axios = require('axios')
var port = process.env.PORT || config.build.port

var apiRoutes = express.Router()
apiRoutes.get('/getDiscList', function(req, res) {
  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  console.log('执行')
  // 使用axios发送http请求
  axios
    .get(url, {
      // 修改当前请求的请求头的配置
      headers: {
        referer: 'https://c.y.qq.com/',
        host: 'c.y.qq.com'
      },
      params: req.query
    })
    .then(response => {
      console.log('响应', response)
      res.json(response.data) // 响应中要发送JSON响应，使用res.json()。
    })
    .catch(e => {
      console.log(e)
    })
})

app.use('/api', apiRoutes)

// app.use(express.static('./dist'))
app.use(express.static(path.join(__dirname, './static')))

app.listen('9999', function name(params) {
  console.log('服务器启动')
})
