<template>
  <div class="app-container">
    <!-- <br></br> -->
    <!-- 头部 -->
    <!-- <goback class="back"></goback> -->
    <mt-header fixed title="张俊的第一个项目">
      <span @click='goback' to="/" slot="left" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>
    <!-- 路由容器 -->

    <transition id="routerCollction">
      <router-view></router-view>
    </transition>

    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-zj" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-zj" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-zj" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
        <span class="mui-badge" id="shopcar">{{this.$store.getters.getgoods}}</span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-zj" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import goback from "./components/subcomponents/goback.vue";

export default {
  data() {
    return {
      flag : true
    };
  },
  created(){
    if(this.$route.path == '/home'){
      this.flag = false
    }else{
      this.flag = true
    }
  },
  methods:{
    goback(){
      this.$router.go(-1)
    
      }
    },
    watch:{
      '$route.path':function(newvalue) {
          if(newvalue === '/home'){
        this.flag = false
      }else{
        this.flag = true
      }
    }
  }
};
</script>

<style scoped>
/* 路由切换动画，给设置position fixed */
#routerCollction {
  /* position: fixed; */
  width: 100%;
  height: 100%;
}
.mint-header {
  z-index: 99;
}
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;

  /* position: absolute; */
  overflow: hidden;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
/* 重新改变底部样式 */
.mui-bar-tab .mui-tab-item-zj {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-zj .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-zj .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mui-bar-tab .mui-tab-item-zj.mui-active {
  color: #007aff;
}
/* .back{
  position:fixed ;
  top:0;
  z-index: 100;
  color:#fff;
} */
.mui-badge {
  font-size: 10px;
  line-height: 1.4;
  position: absolute;
  top: -2px;
  left: 65%;
  margin-left: -10px;
  padding: 1px 5px;
  color: white;
  background: red;
  z-index: 80;
}
</style>

