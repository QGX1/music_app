<!--
 * @Descripttion: 推荐
 * @Author: qiuguixian
 * @Date: 2021-02-02 15:05:04
 * @LastEditors: qiuguixian
 * @LastEditTime: 2021-03-07 17:53:21
-->
<template>
  <div class="recommend">推荐1111</div>
</template>

<script>
import { getRecommend } from 'api/recommend'
export default {
  name: 'recommend',
  data() {
    return {}
  },
  created() {
    this._getRecommend()
  },
  mounted() {},

  methods: {
    _getRecommend() {
      getRecommend().then((res) => {})
    }
  }
}
</script>