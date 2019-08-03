
<template>
  <div id="newscontainer">
    <div id="top">
      <h1 class="title">{{this.news.title}}</h1>
      <p class="subtitle">
        <span class="time">发表时间：{{news.add_time | dateFormat}}</span>
        <span class="click">俊报社</span>
      </p>
    </div>
    <div class='content' v-html="news.content">

    </div>
    <commentBox :id="this.id"></commentBox>
  </div>
</template>

<script>

import comment1 from './subcomponents/comment.vue'
export default {
  data() {
    return {
      id: this.$route.params.id, //获取url传参时的id
      news: {}
    };
  },
  created() {
    this.getconton();
  },
  components:{//注册子组件
      'commentBox':comment1
  },
  methods: {
    getconton: function() {
      this.$http.get("api/getnew/" + this.id).then(res => {
        if (res.body.status == 0) {
          this.news = res.body.message[0];
        } else {
          alert("失败");
        }
      });
    }
  }
};
</script>

<style scoped>

/* 主要是设置滚动条 */
#newscontainer{
    overflow: scroll;
    height: 100%;
}

/* 标题样式 */
.title {
  color: black;
  text-align: center;
  margin: 15px 0;
  color: brown;
  font-size: 16px
}

/* 标题与副标题 线  内边距 */
#top {
  border-bottom: solid 2px darkgray;
  padding: 0 5px;
}

/* 点击次数 */
.click {
  text-align: right;
  float: right;
}

/* 子标题  */
.subtitle {
  font-size: 13px;
  color: olivedrab;
}

/* 内容内边距 */
.content{
    padding: 7px;
}
</style>

