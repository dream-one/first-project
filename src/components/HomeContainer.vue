<template>
    <div id="luntu">
        <!-- 轮播图 -->
 <mt-swipe :auto="3000">
        <mt-swipe-item v-for="item in lunboarr" :key="item.u">
            <img :src="item.img">
        </mt-swipe-item>

 </mt-swipe>
    </div>
</template>

<script type='application/x-javascript'>
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            lunboarr:[]    //保存轮播图的数组
        }
    },
    created(){
               this.getlutu()
            },
    methods:{
        getlutu(){  //获取轮播图数据
            this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(res=>{
                if(res.body.status==0){
                    this.lunboarr=res.body.message
                }else{
                    Toast('加载失败')
                }
            })
        }
    }
}
</script>

<style>
     #luntu{
         height: 200px;
         padding-top: 0%
     }
     .mint-swipe-indicator.is-active{
         background-color:orange;
     }
     .mint-swipe-items-wrap img{
         width: 100%;
         height: 100%;
     }
</style>
