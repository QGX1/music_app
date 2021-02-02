<!--
 * @Descripttion: xxx
 * @Author: qiuguixian
 * @Date: 2021-02-01 11:59:25
 * @LastEditors: qiuguixian
 * @LastEditTime: 2021-02-02 14:22:12
-->

<template>
  <div id="app">
    <MHeader></MHeader>
    <router-view />
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
