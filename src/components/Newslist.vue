<template>
  <div id="newscontainer">
    <div >
      <ul class="mui-table-view mui-table-view-chevron">
        <li class="mui-table-view-cell mui-media" v-for="item in listarr" :key="item.id">
          <router-link :to="'/home/newslist/' + item.id" class="mui-navigate-right">
            <img
              class="mui-media-object mui-pull-left"
              :src="item.url"
            />
            <div class="mui-media-body">
              <h1>{{item.title}}</h1>
              <p class="mui-ellipsis">
                <span>发表时间：{{item.add_time | dateFormat}}</span>
                <span class="clicknum" >点击{{item.click}}次</span>
              </p>
            </div>
          </router-link>
        </li>
      
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listarr: []
    };
  },
  created() {
    this.get();
  },
  methods: {
    get: function() {
      this.$http
        .get("api/getnewslist")
        .then(res => {
          if (res.body.status == 0) {
            this.listarr = res.body.message;
          } else {
            Toast("加载列表失败");
          }
        });
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 14px;
}
.mui-ellipsis {
  font-size: 12px;
  color: #226aff;
}
.clicknum {
  float: right;
}
#newscontainer{
    overflow: hidden;
    width: 100%;
    height: 100%;
     overflow:scroll;
}
</style>
