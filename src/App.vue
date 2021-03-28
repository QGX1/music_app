<!--
 * @Descripttion: xxx
 * @Author: qiuguixian
 * @Date: 2021-02-01 11:59:25
 * @LastEditors: qiuguixian
 * @LastEditTime: 2021-03-28 23:52:01
-->

<template>
  <div id="app">
    <MHeader></MHeader>
    <keep-alive v-if="$route.meta.isKeepAlive">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import MHeader from 'components/m-header/mheader'
export default {
  name: 'App',
  components: {
    MHeader
  }
}
</script>

<style lang="stylus" scoped></style>
