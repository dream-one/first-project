//主文件

import Vue from 'Vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import { Header,Swipe, SwipeItem } from 'mint-ui';  
import './lib/mui-master/dist/css/mui.css'
import './lib/mui-master/dist/css/icons-extra.css'
import VueRouter from 'vue-router'
import router from './router.js'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.component(Header.name, Header);
Vue.use(App)
Vue.component(Swipe.name, Swipe);   //轮播图
Vue.component(SwipeItem.name, SwipeItem);
let vm = new Vue({
    el:'#app',
    render:c=>c(App),
    router:router
})