//主文件

import Vue from 'Vue'
import App from './App.vue'
import VueResource from 'vue-resource'
// import { Header,Swipe, SwipeItem,Button,Toast ,Lazyload } from 'mint-ui';  
import './lib/mui-master/dist/css/mui.css'
import './lib/mui-master/dist/css/icons-extra.css'
import VueRouter from 'vue-router'
import router from './router.js'
import moment from 'moment' //导入时间格式化插件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'//全局配置根路径
Vue.use(App)



//定义全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {   //pattern默认值
      return moment(dataStr).format(pattern)
})
let vm = new Vue({
      el: '#app',
      render: c => c(App),
      router: router
})