<template>
  <div class="goods-list">
    <router-link :to="'/home/goodslist/goodsinof/'+item.id" tag='div'  class="goods-item" v-for="item in goodslist" :key="item.id" >
      <img :src="item.img_url"  alt />
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">${{ item.sell_price }}</span>
          <span class="old">${{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </router-link>

    <mt-button size="large" type="danger" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        pagindex:1,
        goodslist:[]
    };
  },
  created(){
      this.get()
  },
  methods:{
      get(){
          this.$http.get('api/getgoods?pageindex='+this.pagindex).then(res => {
              if(res.body.status == 0){
                  this.goodslist =this.goodslist.concat(res.body.message) 
                  for(let i = 0;i<this.goodslist.length;i++){
                      if(this.goodslist[i].img_url=='http://demo.dtcms.net/upload/201504/20/thumb_201504200242250674.jpg'){
                          this.goodslist[i].img_url='http://demo.dtcms.net/upload/201504/20/thumb_201504200154277661.jpg'
                      }
                  }
              }else{
                 alert('err')
              }
          })
      },
     
      getMore(){
          this.pagindex++
          this.get()
      }
  }
};
</script>

<style  scoped>
.goods-list {

  display: flex;
  
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 7px;
  padding-top: 0;
  
}
.goods-item {
    width: 49%;
    border: 1px solid #ccc;
    margin-top: 7px;
    box-shadow: 0 0 7px #ccc;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
   
  
  }
img {
      width: 100%;
      min-height: 170px;
    }
 .title {
      font-size: 14px;
    }
  .info {
      background-color: #eee;
      overflow: hidden;
     
     
    }
 p {
        margin: 3px;
      }
  .now {
          color: red;
          font-size: 16px;
          font-weight: bold;
          margin-right: 10px;
        }
 .old {
          text-decoration: line-through;
          font-size: 12px;
        }
 .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
</style>