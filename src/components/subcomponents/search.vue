<template>
    <div class="pack">
      <div class="div_sech">
  <form action="" target="frameFile"><mt-search v-model="value" cancel-text="取消"  placeholder="搜索" @keyup.enter.native="searchData"></mt-search></form>
  <iframe name='frameFile' style="display: none;"></iframe>
</div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mint-searchbar{
    margin-top: 50px;
    position: absolute ;
}
.pack{
    height: 100%;
}
</style>
