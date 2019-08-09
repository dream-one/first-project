<template>
  <div class="goodsinfo">
    <transition @before-enter="beforeEnter" @enter="Enter" @after-enter="afterEnter">
      <div id="ball" ref="ball" v-show="flag"></div>
    </transition>

    <!-- 轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div id="luntu">
            <mt-swipe :auto="3000">
              <mt-swipe-item v-for="item in lunbotu" :key="item.id">
                <img :src="item.src" />
              </mt-swipe-item>
            </mt-swipe>
          </div>
        </div>
      </div>
    </div>
    <!-- 价格 -->
    <div class="mui-card">
      <div class="mui-card-header">{{price.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            市场价:
            <del>{{price.market_price}}</del>&nbsp;&nbsp;&nbsp;现售价:
            <span class="nowprice">{{price.sell_price}}</span>
          </p>
          <p>
            购买数量:
            <goodsnum ref="good" class="goodsnum"  :goodsMaxNum="price.stock_quantity"></goodsnum>
          </p>
          <mt-button size="small" type="primary">立即购买</mt-button>
          <mt-button size="small" type="danger" @click="flag =!flag;getgoodsnum()">加入购物车</mt-button>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:{{price.goods_no}}</p>
          <p>库存情况:{{price.stock_quantity}}</p>
          <p>上架时间:{{price.add_time | dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <router-link :to="'/home/goodslist/goodsinof/goodstuwen/'+this.id">
          <mt-button class="btn" size="large" type="primary" plain>图文介绍</mt-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import goodsnum from "./goodsnum.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      lunbotu: [], //轮播
      price: {},
      flag: false, //控制小球显示
      count: 1, //商品数量,

    };
  },
  created() {
    this.get();
    this.getPrice();
  },
  methods: {
    get() {
      this.$http.get("api/getthumimages/" + this.id).then(res => {
        if (res.body.status == 0) {
          this.lunbotu = res.body.message;
        } else {
          Toast("图片加载出错");
        }
      });
    },

    getgoodsnum() {
      //获取子组件商品个数

      this.count = this.$refs.good.getnumber(); //调用子组件的getnumber方法

    },
    getPrice() {
      //获取价格
      this.$http.get("api/goods/getinfo/" + this.id).then(res => {
        if (res.body.status == 0) {
          this.price = res.body.message[0];
        } else {
          Toast("加载失败");
        }
      });
    },
    //小球动画
    beforeEnter(el) {
     
      el.style.transform = "translate(0,0)";
    },
    Enter(el, done) {
      //让小球在不同分辨率上到同一个地方
      
      let num = this.$refs.ball.getBoundingClientRect();
      let shopcar = document.getElementById("shopcar").getBoundingClientRect();
      let x = shopcar.left - num.left;
      let y = shopcar.top - num.top;
      el.offsetHeight;
      el.style.transform = `translate(${x}px,${y}px)`;
      el.style.transition = "all 1s ease";
      done();
    },
    afterEnter(el) {
      {
        this.flag = !this.flag;
      }
    }
  },
  components: {
    goodsnum
  }
};
</script>

<style scoped>
.goodsinfo {
  background-color: #ccc;
  padding-top: 0;
  overflow: hidden;
}
#luntu {
  /* 轮播图尺寸 */
  height: 300px;
  /* width: 300px; */
}
.nowprice {
  color: red;
  font-weight: bold;
  font-size: 16px;
}
.goodsnum {
  margin-left: 20px;
  display: inline;
}
.mui-card-footer {
  display: block;
}
.btn {
  margin: 10px 0;
}

#ball {
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  /*把DIV设置成圆*/
  z-index: 99;
  position: absolute;
  top: 503px;
  left: 157px;
}
</style>
