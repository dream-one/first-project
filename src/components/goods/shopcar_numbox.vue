<template>
  <div>
    <div  class="mui-numbox" data-numbox-min="1" style="height:25px;">
      
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input ref = 'numbox' readonly @change='changcount' id="test" class="mui-input-numbox" type="number" :value="initcount" />
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
import mui from "../../lib/mui-master/dist/js/mui";
export default {
  mounted() {
    mui(".mui-numbox").numbox();
 
  },

  methods: {
      changcount(){ //每当值改变的时候调用这个方法，同时把值同步更新到store仓库内
                
              let c = {id:this.id,count:this.$refs.numbox.value}
              this.$store.commit('updatecount',c)

      }
  },
  props:['initcount','id']
};
</script>

<style>
</style>
