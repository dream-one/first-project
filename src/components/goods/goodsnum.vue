<template>
  <div>
    <div  class="mui-numbox" data-numbox-min="1">
      
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input   id="test" class="mui-input-numbox" type="number" value="1" />
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
    getnumber() {
      return mui(".mui-numbox")
        .numbox()
        .getValue();
    }
  },
  props: ["goodsMaxNum"],
  watch: {//监听goodsMaxNum属性，当他改变时也就是值传来时，设置最大值
    'goodsMaxNum': function(newval) {
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newval);
    }
  }
};
</script>

<style>
</style>
