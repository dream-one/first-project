# A project

#制作APP组件

#1.Header区域使用Mint-ui组件

#2.底部tabber使用MUI

#3.把底部选项卡设置为路由组件，同时修改类名，把当前项类名变成MUI自带的类名
   
      3.1 制作好对应路由的.vue文件。规则写好。
   
      3.2 放置router-view（坑）
 
#4.制作首页轮播图
   
     4.1 加载首页轮播图数据     vue-resource this.$http.get获取    跨域   API注意
  
     4.2 把数据保存在data          "api/getlunbo"
  
     4.3 v-for循环渲染
#5.制作六宫格
#6.制作新闻详情
     6.1 把a链接改为routerlink添加to属性
     6.2 创建newslist组件，匹配newlist
     6.2 渲染列表 v-for 。修改列表样式。列表时间格式化。
     6.3 把列表设置为router-link
     6.4 创建对应newscontainer组件，匹配newscontainer
     6.5 每次点进一个页面都有一个id传入url,需要在newscontainer中使用$router.params.id拿到 
#7.新闻详情布局与请求数据
     6.6 有了id从后台请求数据就可以拿到一个对象，里面有内容（HTML) 等数据            this.$http.get("api/getnew/" + this.id)
#8.评论（comment)组件
     自定义一个组件，
     在需要评论组件的时候import它。父组件compoents注册   然后使用标签引用
#9.获取后台评论数据
     获取后台评论数据需要在url用到页面的ID（在newslist内有)和pageindex（页数,默认1） 
     需要父组件的值      "api/getcomments/" + this.id + "?pageindex=" + this.pageindex
     父子组件的传值  v-bind  props:[]
#9.加载更多评论
     点击按钮pageindex(页数)加1。然后调用get获取后台数据。拼接到原数据上。concat