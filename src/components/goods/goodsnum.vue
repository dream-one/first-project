<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input  id="test" class="mui-input-numbox" type="number" @change="getnumber" value="1"/>
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
     return mui(".mui-numbox").numbox().getValue()
    }
  }
};
</script>

<style>
</style>
