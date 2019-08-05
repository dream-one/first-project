//路由模块
import VueRouter from 'vue-router'
import home from './components/HomeContainer.vue'
import Member from './components/MemberContainer.vue'
import ShopCar from './components/ShopCarContainer.vue'
import search from './components/SearchContainer.vue'
import newslist from './components/Newslist.vue'
import newscon from './components//NewsContainer.vue'
import img from './components/subcomponents/img.vue'
import imgphtot from './components/subcomponents/phtotinfo.vue'
import goodslist from './components/goods/goodslist.vue'
import search1 from './components/subcomponents/search.vue'
import Goodsinof from './components/goods/goodsinof.vue'
//定义路由嵌套
let router = new VueRouter({
    routes: [
        {
            path: "/",
            redirect: '/home'
        },
        {
            path: '/home',
            component: home

        },
        {
            path: '/member',
            component: Member
        },
        {
            path: '/shopcar',
            component: ShopCar
        },
        {
            path: '/search',
            component: search1
        },
        {
            path: '/home/newslink',
            component: newslist
        },
        {
            path: '/home/newslist/:id',//id 是动态的 需加冒号
            component: newscon
        },
        {
            path: '/home/imglist',
            component: img
        },
        {
            path: '/home/imglist/:id',
            component: imgphtot
        },
        {
            path: '/home/goodslist',
            component: goodslist
        },
        {
            path:'/home/goodslist/goodsinof/:id',
            component:Goodsinof
        }
    ],
    linkActiveClass: "mui-active"
})

export default router