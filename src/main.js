//主文件
import Vue from 'Vue'
import App from './App.vue'
import { Header } from 'mint-ui';
import './lib/mui-master/dist/css/mui.css'
Vue.component(Header.name, Header);
Vue.use(App)
let vm = new Vue({
    el:'#app',
    render:c=>c(App)
})