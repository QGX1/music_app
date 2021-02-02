<!--
 * @Descripttion: xxx
 * @Author: qiuguixian
 * @Date: 2021-02-02 09:47:28
 * @LastEditors: qiuguixian
 * @LastEditTime: 2021-02-02 11:34:13
-->
<template>
  <div class="m-header">
    <div class="icon"></div>
    <div class="text">QGX Music</div>
    <!-- router-link 通过tag配置生成新的标签  -->
    <!-- <router-link tag="div" class="mine" to="">
      <i class="icon-mine"></i>
    </router-link> -->
  </div>
</template>

<script>
export default {
  name: 'mHeader'
}
</script>
<style lang="stylus" scoped>
@import '~assets/stylus/variable';
@import '~assets/stylus/mixin';

.m-header {
  height: 220px;
  text-align: center;
  color: $color-theme;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    bg-image('./img/logo');
    width: 150px;
    height: 150px;
  }

  .text {
    font-size: 80px;
    margin-left: 30px;
  }
}
</style>