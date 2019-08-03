<template>
  <div>
      <!-- 评论头 -->
    <h1>发表评论</h1>
    <hr />
    <textarea placeholder="在这里发表你的见解"></textarea>
    <mt-button size="large" type="primary">提交</mt-button>
    <!-- 评论区 -->
    <div class="comlist">
      <div class="comcon" v-for="(item,index) in comments" :key="index">
        <div class="comtitle">{{index+1}}楼 {{item.user_name}} 发表时间:{{item.add_time | dateFormat}}</div>
        <div class="combody">{{item.content === 'undefined' ? '此用户很懒' : item.content }}</div>
      </div>
    </div>
    <!-- 加载更多 -->
    <mt-button plain size="large" type="danger" @click="getmore()">查看更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageindex: 1, //评论页数，点击查看更多时应该+1
      comments: [] //存放评论数据
    };
  },

  props: ["id"],

  created() {
    this.get();
  },
  methods: {
    getmore() {
      //获取更多评论
      this.pageindex++;
      this.get();
    },
    get() {
      //获取评论
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageindex)
        .then(res => {
          if (res.body.status == 0) {
            this.comments = this.comments.concat(res.body.message);
          } else {
            alert("错误");
          }
        });
    }
  }
};
</script>

<style scoped>
textarea {
  margin: 0;
}
h1 {
  font-size: 18px;
}
/* 整个个表 */
.comlist {
  margin: 5px 0;
}
/* 标题 */
.comtitle {
  background-color: #ccc;
  height: 35px;
  line-height: 35px;
  font-size: 15px;
}
/* 发表内容 */
.combody {
  height: 40px;
  text-indent: 2em;
}
/* 一层楼 */
.comcon {
  line-height: 50px;
}
</style>
