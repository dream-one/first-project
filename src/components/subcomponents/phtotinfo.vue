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
    <div v-html="phtotinfo.content" class="neirong"></div>
    <!-- 放置注册 -->
    <com-box :id="id" ></com-box>
  </div>
</template>

<script>
//导入评论子组件
  import comment from './comment.vue';
export default {
  
  data() {
    return {
        id:this.$route.params.id,
        phtotinfo:{}//存放图片内容
    };
  },
  created(){
      this.get()
  },
  methods:{
      get(){
          this.$http.get('api/getimageInfo/'+this.id).then(res => {
              if(res.body.status == 0){
                this.phtotinfo = res.body.message[0]
              }else{
              }
          })
      }
  },
//   注册评论组件
  components:{
     'com-box':comment
  }
};
</script>

<style scoped>
.photocontainer{
    padding: 3px;
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
.click{
float: right;
}
.neirong{
    font-size: 12px;
    line-height: 24px;
}
</style>
