<template>
<!-- 图片详情页 -->
  <div>
    <!-- 顶部选项卡 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
			<!-- 设置：class 只有id为0的时候才高亮 即一进页面就是第一个高亮-->
          <a @click='getimg(item.id)' :class="['mui-control-item',item.id == 0 ? ' mui-active' : '']" href="#item1mobile" v-for="item in imgscategory" :key='item.id'>
			  {{item.title}}
		  </a>
        </div>
      </div>
    </div>
    <!-- 图片 -->
    <ul class="photo-list">
  <router-link tag="li" :to="'/home/imglist/'+item.id" v-for="item in imgdata" :key='item.id'>
    <img v-lazy="item.img_url">
    <div class="info">
      <h1 class="info-title">{{item.title}}</h1>
      <div class="info-body">{{item.zhaiyao}}</div>
    </div>
  </router-link >
</ul>


  </div>
</template>

<script>
import mui from "../../lib/mui-master/dist/js/mui";

export default {
  data() {
    return {
      imgscategory: [],//存储标题数据
      imgdata:[] //存储图片数据
    };
  },
  created() {
    this.get();
    this.getimg(0);
  },
  mounted() {
    // 钩子函数，组件被加载好了后调用，操作DOM最佳方法
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
  	// 获取顶部选项卡数据
    get() {
      this.$http.get("api/getimgcategory").then(res => {
        this.imgscategory = res.body.message;
        let one = { title: "全部", id: 0 };
        this.imgscategory.unshift(one);
      });
    },
    // 获取图片
    getimg(imgid){
      this.$http.get('api/getimages/'+imgid).then(
        res => {this.imgdata = res.body.message}
      )
    }
  }
};
</script>

<style>
.photo-list img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.photo-list{
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
}
.photo-list img{
  width: 100%;
  vertical-align: middle;
}
.photo-list li{
  background-color: #ccc;
  text-align: center;
  margin-bottom: 10px;
  box-shadow: 0 0 6px #999;
   position: relative;
}
.info{
  color: white;
  background-color:rgba(0, 0, 0, 0.3) ;
  position:absolute ;
  bottom: 0;
  max-height: 84px;
}
.info-title{
  font-size: 14px;
  text-align: left;
}
.info-body{
   font-size: 10px;
   text-align: left;

}

</style>
