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
import VuePreview from 'vue-preview';

Vue.use(VuePreview);
Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'//全局配置根路径
Vue.use(App)
import Vuex from 'vuex'
Vue.use(Vuex)


//定义全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {   //pattern默认值
      return moment(dataStr).format(pattern)
})
let goodsShopCar = JSON.parse(localStorage.getItem('goodsShopCar') || '[]')
//定义vuex 
let store = new Vuex.Store({
      state: {
            goodsShopCar: goodsShopCar   //加入购物车的商品对象
      },
      mutations: {
            setgoodsShopCar(state, val) { //添加购物车按钮调用该方法
                  let flag = false  //flag表示有没有对应商品，假设没有，执行some方法
                  state.goodsShopCar.some(item => {     //some：对数组每一项运行函数，任一项返回true则返回true
                        if (item.id == val.id) {
                              item.count += parseInt(val.count)
                              flag = true
                              return true //执行完return 可以不用再继续向下执行了
                        }
                  })
                  if (flag === false) {   //如果没有找到，flag就位false  直接push整个对象就好   
                        state.goodsShopCar.push(val)
                  }
                  localStorage.setItem('goodsShopCar', JSON.stringify(state.goodsShopCar))
            },
            updatecount(state, el) {    //当numbox值改变时调用，同时更新state
                  state.goodsShopCar.forEach(item => {
                        if (item.id == el.id) {
                              item.count = parseInt(el.count)
                        }
                  })
                  localStorage.setItem('goodsShopCar', JSON.stringify(state.goodsShopCar))
            },
            removegoods(state,el){
                  //删除功能  几个点   
                  // 1. 需删除两次 一次是vuex  一次是渲染的组件内
                  // 2. 在组件内删除，因为是v-for，可以在删除标签上之间传i(即下标)  (item.i) in items
                  // 3. 组件调用这个vuex的方法，传递一个对象，some方法有第二个参数即当前元素的下标
                  state.goodsShopCar.some((item,i)=> {
                        if(item.id == el.id){   //some循环遍历元素如果等于传来的元素
                              state.goodsShopCar.splice(i,1)//根据下标删除
                        }
                  })
                  localStorage.setItem('goodsShopCar', JSON.stringify(state.goodsShopCar))
            },
            setSelected(state,el){    //设置选择器状态
                  state.goodsShopCar.some(item => {
                        if(item.id == el.id){
                              item.selected = el.selected
                        }
                  })
                  localStorage.setItem('goodsShopCar', JSON.stringify(state.goodsShopCar))

            }
      },
      getters: {
            getgoods(state) {
                  let c = 0
                  state.goodsShopCar.forEach(item => {
                        c += item.count
                  })
                  return c
            },
            getgoodscount(state) {  //获取添加到购物车的数量，每当调用这个方法返回一个对象{id:count}
                  let a = {}
                  state.goodsShopCar.forEach(item => {
                        a[item.id] = item.count   //a对象属性名为id,属性值为count
                  })
                  return a
            },
            getSelected(state){
                  let b ={}
                  state.goodsShopCar.forEach(item => {
                        b[item.id] = item.selected
                  })
                  return b 
            },
            getSelectedGoods(state,){
                  let d = 0
                  let price= 0
                  state.goodsShopCar.forEach(item => {
                        if(item.selected){
                            d += item.count  
                             price += item.price*d
                        }
                  })
                  return {jianshu:d,price:price}
            }
           
      }
})
let vm = new Vue({
      el: '#app',
      render: c => c(App),
      router: router,
      store: store
})