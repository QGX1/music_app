<!--
 * @Descripttion: xxx
 * @Author: qiuguixian
 * @Date: 2021-02-02 11:52:45
 * @LastEditors: qiuguixian
 * @LastEditTime: 2021-02-02 16:16:11
-->
<template>
  <div class="home">
    <NavLink></NavLink>
    <router-view></router-view>
  </div>
</template>

<script>
import NavLink from 'components/navLink'
export default {
  name: 'home',
  components: {
    NavLink
  }
}
</script>