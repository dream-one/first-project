//路由模块
import VueRouter from 'vue-router'
import home from './components/HomeContainer.vue'
import Member from './components/MemberContainer.vue'
import ShopCar from './components/ShopCarContainer.vue'
import search from './components/SearchContainer.vue'

//定义路由嵌套
let router = new VueRouter({
    routes : [
        {
            path:'/home',
            component:home
            
        },
        {
            path:'/member',
            component:Member
        },
        {
            path:'/shopcar',
            component:ShopCar
        },
        {
            path:'/search',
            component:search
        }
],
linkActiveClass:"mui-active"
})

export default router