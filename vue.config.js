
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  },
  devServer:{
    open: true,
    proxy: {
      /**
       * (推荐这种方式)
       * 这里是域名后面需要访问的部分(最原始的跨域方式！),！
       * 跨域域名https://baike.baidu.com/后面的访问目录！
       * 在axios路径中写入/article目录下要访问的具体内容路径即可，如果：/article/d4666d640e2e478d283d8c7f.htm即可
       * 
       */
      '/163musicapi': {
        //你要跨域的域名(包含host、端口号,切记：一定要带上http头);
        //同一个域名只能设置一次跨域，否则重复报错！
        target: 'http://163musicapi.jianggangsheng.com/',
        changeOrigin: true, //是否跨域，设置为true;(必须)
        // 对应的axios路径设置：
        pathRewrite: {
          '^/163musicapi': '/'//这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
        }
      }
    }
  }

}
