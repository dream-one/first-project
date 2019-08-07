<template>
    <div>
       <h2>{{tuwen.title}}</h2>
       <hr>
       <div v-html="tuwen.content"></div>
    </div>
</template>

<script>
export default {
data(){
    return{
        id:this.$route.params.id,
        tuwen:{}//保存图文信息
    }
},
created(){
    this.getTuwen();
},
methods:{
    getTuwen(){ //获取图文
        this.$http.get('api/goods/getdesc/'+this.id).then(res => {
            if(res.body.status == 0){
                this.tuwen = res.body.message[0];
                console.log(this.tuwen)
            }
        })
    }
}
}
</script>

<style>

</style>
