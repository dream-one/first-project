<template>
  <div>
    <!-- 轮播图 -->
    <div id="luntu">
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="item in lunboarr" :key="item.u">
          <img :src="item.img" />
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <!-- 九宫格 -->
    <div>
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newslink">
            <img src="../lib/images/menu1.png" alt />
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/imglist">
            <img src="../lib/images/menu2.png" alt />
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/goodslist">
            <img src="../lib/images/menu3.png" alt />
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../lib/images/menu4.png" alt />
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../lib/images/menu5.png" alt />
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../lib/images/menu6.png" alt />
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type='application/x-javascript'>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunboarr: [] //保存轮播图的数组
    };
  },
  created() {
    this.getlutu();
  },
  methods: {
    getlutu() {
      //获取轮播图数据
      this.$http.get("api/getlunbo").then(res => {
        if (res.body.status == 0) {
          this.lunboarr = res.body.message;
        } else {
          Toast("加载失败");
        }
      });
    }
  }
};
</script>

<style scoped>
#luntu {/* 轮播图尺寸 */
  height: 200px;
  width: 100%;
  padding-left: 1.5px;
}
.mint-swipe-indicator.is-active {/*录播按钮的颜色*/

  background-color: orange;
}
.mint-swipe-items-wrap img {
  width: 370px;
  height: 200px;
}
.mui-grid-view.mui-grid-9 {   /*背景颜色六宫格*/
  background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell { /* 六宫格边框 */
  border: none;
}

.mui-table-view img { /* 六宫格图片 */
  width: 60px;
  height: 60px;
}
.mui-media-body {/* 六宫格字体 */
  font-size: 12px;
}
</style>
