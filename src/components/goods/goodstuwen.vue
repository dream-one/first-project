<template>
  <div class="goods-container">
    <h2>{{tuwen.title}}</h2>
    <hr />
    <div class="content" v-html="tuwen.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      tuwen: {} //保存图文信息
    };
  },
  created() {
    this.getTuwen();
  },
  methods: {
    getTuwen() {
      //获取图文
      this.$http.get("api/goods/getdesc/" + this.id).then(res => {
        if (res.body.status == 0) {
          this.tuwen = res.body.message[0];
          console.log(this.tuwen);
        }
      });
    }
  }
};
</script>

<style lang="scss">
.goods-container {
  h2 {
      font-size: 16px;
      color:skyblue;
      text-align: center;
      margin: 23px 0;
      font-weight: bold;
  }
  .content {
      padding: 5px;
    img {
      width: 100%;
    }
  }
}
</style>
