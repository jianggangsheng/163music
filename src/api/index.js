// import { Message } from 'element-ui'

// 配置API接口地址
var root = '/'
var tokenUrl = '/auth/Index/getToken?client_secret=c9542caa2c0bef74ea27a267d572ee92&api=koa_new_test'
// 引用axios
var axios = require('axios')

// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}
/*
  接口处理函数
  这个函数每个项目都是不一样的，我现在调整的是适用于
  https://cnodejs.org/api/v1 的接口，如果是其他接口
  需要根据接口的参数进行调整。参考说明文档地址：
  https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
  主要是，不同的接口的成功标识和失败提示是不一致的。
  另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
*/

function apiAxios (method, url, params, success, failure) {
  if (params) {
    params = filterNull(params)
  }
  axios({
    method: method,
    url: '/163musicapi/'+url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    withCredentials: false
  }).then(res => {
    success(res)
  }).catch(err => {
    success(err)
  })
}

// 获取当前时间（时间戳）
// function getTheCurrentTime () {
//   return (new Date()).getTime()
// }



// 请求数据 API
function getDataApi ($method, url, params, success, failure) {
  // 获取当前时间
  // let time = getTheCurrentTime()
  // // 获取access_token时间
  // let arr = localStorage.getItem('token')
  // let token = JSON.parse(arr)
  // if (token === null || parseInt(token.expire_time + '000') <= time) {
  //   // 获取access_token
  //   return getAccessToken($method, url, params, success, failure)
  // } else {
    return apiAxios($method, url, params, success, failure)
  // }
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return getDataApi('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return getDataApi('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return getDataApi('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return getDataApi('DELETE', url, params, success, failure)
  }
}
