<template>
  <div class="app-container">
    <!-- <br></br> -->
    <!-- 头部 -->
    <mt-header fixed title="张俊的第一个项目"></mt-header>
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
        <span class="mui-icon mui-icon-contact">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-zj" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
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

</script>

<style scoped>
/* 路由切换动画，给设置position fixed */
#routerCollction {
  /* position: fixed; */
  width: 100%;
  height: 100%;
  
}
.mint-header{
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
.mui-bar-tab .mui-tab-item-zj .mui-icon{
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
</style>

