<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1805/50/8000c1044c6d8702.jpg_750x200_03811ee7.jpg">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {//swiper配置项
        pagination: ".swiper-pagination",
        loop: true
      },
      list:[{
        id: 1
      }, {
        id: 2
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

/* 避免图片未加载时印象周围布局，进行宽高写死 */
 /* padding-bottom相对于宽度的百分比 */
  .wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 31.25%
    .swiper-img
      width: 100%

</style>
