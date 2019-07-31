# A project

#制作APP组件
1.Header区域使用Mint-ui组件
2.底部tabber使用MUI
3.把底部选项卡设置为路由组件，同时修改类名，把当前项类名变成MUI自带的类名
    3.1制作好对应路由的.vue文件。规则写好。
    3.2放置router-view（坑）
4.制作首页轮播图
    4.1加载首页轮播图数据     vue-resource this.$http.get获取    跨域   API注意
    4.2把数据保存在data
    4.3 v-for循环渲染
