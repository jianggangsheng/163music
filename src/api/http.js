/**
 * http配置
 */
// 引入axios以及element ui中的loading和message组件
import axios from 'axios'
// import index from './index'
// import { Loading, Message } from 'element-ui'

// 超时时间
axios.defaults.timeout = 5000

// http请求拦截器
// var loadinginstace
axios.interceptors.request.use(config => {
  // loadinginstace = Loading.service({
  //   fullscreen: true,
  //   text: '请稍等',
  //   background: 'rgba(0, 0, 0, 0.7)'
  // })
 
 
  // element ui Loading方法
  return config
}, error => {
  // loadinginstace.close()
  // Message.error({
  //   message: '加载超时'
  // })
  return Promise.reject(error)
})

// http响应拦截器
axios.interceptors.response.use(data => {
  // loadinginstace.close()
  if (data.status === 200) {
    return data.data
  } else {
    console.log('网络错误,请刷新页面')
  }
}, error => {
  // loadinginstace.close()
 console.log('加载失败,请刷新页面')
  return Promise.reject(error)
})

export default axios
