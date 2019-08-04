<template>
  <div class="photocontainer">
    <!-- 图片详情页 -->
    <!-- 标题 -->
    <h1 class="title">{{phtotinfo.title}}</h1>
    <!-- 副标题 -->
    <div class="body">
      <span class="time">发表时间:{{phtotinfo.add_time | dateFormat}}</span>
      <span class="click">点击{{phtotinfo.click}}次</span>
    </div>
    <hr />
    <!-- 内容 -->
    <div class="thum">
      <vue-preview :slides="phtotlist" class="imgPrev"></vue-preview>
    </div>
    <div v-html="phtotinfo.content" class="neirong"></div>

    <!-- 放置评论 -->
    <com-box :id="id"></com-box>
  </div>
</template>

<script>
//导入评论子组件
import comment from "./comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      phtotinfo: {}, //存放图片内容
      phtotlist: [] //缩略图
    };
  },
  created() {
    this.get();
    this.suolvetu();
  },
  methods: {
    get() {
      this.$http.get("api/getimageInfo/" + this.id).then(res => {
        if (res.body.status == 0) {
          this.phtotinfo = res.body.message[0];
        } else {
        }
      });
    },
    suolvetu() {
      this.$http.get("api/getthumimages/" + this.id).then(res => {
        if (res.body.status == 0) {
          this.phtotlist = res.body.message;
          this.phtotlist.forEach(element => {
            element.w = 500;
            element.h = 500;
            element.msrc = element.src;
          });
        }
      });
    }
  },
  //   注册评论组件
  components: {
    "com-box": comment
  }
};
</script>

<style >
.photocontainer {
  padding: 3px;
  width: 100%;
}
.title {
  color: skyblue;
  font-size: 16px;
  text-align: center;
  margin: 15px 0;
}
.body {
  color: #ccc;
  font-size: 14px;
}
.click {
  float: right;
}
.neirong {
  font-size: 12px;
  line-height: 24px;
}

.my-gallery {
  display: flex;
  flex-wrap: wrap;
}
.photocontainer figure {
  width: 30%;
  margin: 5px;
}
.my-gallery img {
  width: 100%;
  box-shadow: 0 0 8px #999;
  border-radius: 5px;
}
</style>
