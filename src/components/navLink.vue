<!--
 * @Descripttion: xxx
 * @Author: qiuguixian
 * @Date: 2021-02-02 11:54:00
 * @LastEditors: qiuguixian
 * @LastEditTime: 2021-02-02 16:28:16
-->
<template>
  <div class="nav-link">
    <router-link
      tag="div"
      class="nav-item"
      v-for="(item, index) in linkItem"
      :key="index"
      :to="item.linkTo"
    >
      <span class="text">{{ item.name }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'navLink',
  data() {
    return {
      linkItem: [
        {
          name: '推荐',
          linkTo: '/home/recommend'
        },
        {
          name: '歌手',
          linkTo: '/home/recommend1'
        },
        {
          name: '排行',
          linkTo: '/home/recommend2'
        },
        {
          name: '搜索',
          linkTo: '/home/recommend3'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~assets/stylus/variable';

.nav-link {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: $font-size-medium;

  .nav-item {
    color: $color-text-l;
    line-height: 100px;
    font-size: 30px;
    letter-spacing: 10px;

    &.router-link-active {
      color: $color-theme;
      border-bottom: 15px solid $color-theme;
    }
  }
}
</style>