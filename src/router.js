//路由模块
import VueRouter from 'vue-router'
import home from './components/HomeContainer.vue'
import Member from './components/MemberContainer.vue'
import ShopCar from './components/ShopCarContainer.vue'
import search from './components/SearchContainer.vue'
import newslist from './components/Newslist.vue'
import newscon from './components//NewsContainer.vue'
//定义路由嵌套
let router = new VueRouter({
    routes : [
        {
            path:"/",
            redirect:'/home'
        },
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
        },
        {
            path:'/home/newslink',
            component:newslist
        },
        {
            path:'/home/newslist/:id',//id 是动态的 需加冒号
            component:newscon
        }
],
linkActiveClass:"mui-active"
})

export default router