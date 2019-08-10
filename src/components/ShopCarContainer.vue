<template>
  <div class="shopcar">
    <div class="mui-card" v-for="item in goodslist" :key="item.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-switch></mt-switch>
          <img :src="item.thumb_path" alt />
          <div class="inof">
            <h2>{{item.title}}</h2>
            <p>
              <span>￥{{item.sell_price}}</span>
              <shopcarnumbox :id="item.id" :initcount='$store.getters.getgoodscount[item.id]' ></shopcarnumbox>
              <a href="#">删除</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner"></div>
      </div>
    </div>
  </div>
</template>

<script>
import shopcarnumbox from "./goods/shopcar_numbox.vue";
export default {
    data(){
        return {
            goodslist:[]
        }
    },
    created(){
        this.getgoodsList()
    },
    methods:{
        getgoodsList(){
            let shopcarstr = []
            this.$store.state.goodsShopCar.forEach(element => {     //获取所有购物车商品的id
                shopcarstr.push(element.id)
            });
            if(shopcarstr.length <= 0){   //如果没有就直接结束
                return
            }
            this.$http.get('api/goods/getshopcarlist/' + shopcarstr.join(',')).then(res => {  //把id拼起来传入API
                this.goodslist = res.body.message
            })
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
        a{
    
        }
      }
    }
    img{
        width: 60px;
        margin: 1px 3px;
    }
  }
}
</style>

