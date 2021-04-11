<!--
 * @Descripttion: 推荐
 * @Author: qiuguixian
 * @Date: 2021-02-02 15:05:04
 * @LastEditors: qiuguixian
 * @LastEditTime: 2021-04-11 21:55:55
-->
<template>
  <div class="recommend">
    <section class="swiper-contain"></section>
  </div>
</template>

<script>
import { getRecommend, getDiscList } from 'api/recommend'
import { Swiper } from 'assets/js/swiper'
export default {
  name: 'recommend',
  data() {
    return {
      musicList: []
    }
  },
  created() {},
  mounted() {
    this._getRecommend() // 获取图片轮播的数据
    this._getDiscList() // 获取歌单列表
  },
  // 销毁，清除定时器
  destroyed() {},

  methods: {
    _getRecommend() {
      getRecommend().then(res => {})
      let options = {
        parentDom: '.swiper-contain',
        imgs: [
          require('assets/image/1.jpg'),
          require('assets/image/2.jpg'),
          require('assets/image/3.jpg'),
          require('assets/image/4.jpg')
        ],
        imgClassName: 'swiper-img', // 自定义图片类名
        autoSwitch: {
          state: true, // 是否自动跳转
          duration: 2000 // 多少秒自动切换图片
        },
        upDownWitch: {
          state: true // 上下切换图片
        }
      }
      let mySwiper = new Swiper(options)
      console.log(mySwiper)
    },
    _getDiscList() {
      getDiscList().then(res => {
        this.musicList = res.data.list
      })
    }
  }
}
</script>
<style scoped>
.swiper-contain {
  width: 100%;
  height: 9rem;
  background: aqua;
  margin-top: 0.1rem;
}
</style>
