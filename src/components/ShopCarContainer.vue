<template>
  <div class="shopcar">
    <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-switch v-model="$store.getters.getSelected[item.id]" 
          @change="updataSelected(item.id,$store.getters.getSelected[item.id])"></mt-switch>
          <img :src="item.thumb_path" alt />
          <div class="inof">
            <h2>{{item.title}}</h2>
            <p>
              <span>￥{{item.sell_price}}</span>
              <shopcarnumbox :id="item.id" :initcount="$store.getters.getgoodscount[item.id]"></shopcarnumbox>
              <!-- <a href="#" @click='del(item,i)'>删除</a> -->
              <mt-button @click="del(item,i)" class="btn" size="small" type="primary" plain>删除</mt-button>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="left">
            <p>
              总计（不含运费）
              <br />已勾选商品
              <span class="price">{{$store.getters.getSelectedGoods.jianshu}}</span>件，总价：
              <span class="price">{{$store.getters.getSelectedGoods.price}}</span>
            </p>
          </div>
          <div class="right">
            <mt-button class="btn" size="small" type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
    <p>{{$store.getters.getSelected}}</p>
  </div>
</template>

<script>
import shopcarnumbox from "./goods/shopcar_numbox.vue";
export default {
  data() {
    return {
      goodslist: []
    };
  },
  created() {
    this.getgoodsList();
  },
  methods: {
    getgoodsList() {
      //调用API 需从vuex获取数据渲染
      let shopcarstr = [];
      this.$store.state.goodsShopCar.forEach(element => {
        //获取所有购物车商品的id
        shopcarstr.push(element.id);
      });
      if (shopcarstr.length <= 0) {
        //如果没有就直接结束
        return;
      }
      this.$http
        .get("api/goods/getshopcarlist/" + shopcarstr.join(","))
        .then(res => {
          //把id拼起来传入API
          this.goodslist = res.body.message;
        });
    },
    del(item, i) {
      //删除功能
      this.goodslist.splice(i, 1);
      this.$store.commit("removegoods", item);
    },
    updataSelected(id,val){
      this.$store.commit('setSelected',{id,selected:val})
    }
  },
  components: {
    shopcarnumbox
  }
};
</script>

<style lang="scss" scoped>
.shopcar {
  background-color: #ccc;
  overflow: hidden;
  width: 100%;
  .mui-card-content-inner {
    display: flex;
    align-items: center;
    .inof {
      h2 {
        font-size: 13px;
        text-align: center;
        margin-bottom: 13px;
      }
      p {
        display: flex;
        justify-content: space-between;
        margin: 3px 3px;
        padding-right: -1px;
        span {
          color: red;
          font-weight: bold;
          margin: 1px 3px;
        }
        .btn {
          margin: 0 18px;
        }
      }
    }
    img {
      width: 60px;
      margin: 1px 3px;
    }
  }
}
.mui-card-content-inner {
  display: flex;
  justify-content: space-between;
  align-content: center;
  .left{
    span{
      color: red;
      font-weight: bold;
      font-size: 15px;
    }
    p{
      line-height: 19px;
    }
  }
}
</style>

