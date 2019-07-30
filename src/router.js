//路由模块

import one from '../vuelist/one1.vue'
import two from '../vuelist/two1.vue'
import denglu from '../vuelist/denglu.vue'
import zhuce from '../vuelist/zhuce.vue'
import VueRouter from "vue-router"
//定义路由嵌套
let router = new VueRouter({
    routes : [
        {
            path:'/one',
            component:one,
            children:[
                {path:"denglu",component:denglu},
                {path:'zhuce',component:zhuce}
            ]
        },
        {
            path:'/two',
            component:two
        }
]
})

export default router