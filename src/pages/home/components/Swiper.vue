<template>
  <div class="wrapper">
    <swiper :options="swiperOption"  v-if="showSwiper">
      <swiper-slide v-for="item of swiperdata" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperdata: Array
  },
  data () {
    return {
      swiperOption: {//swiper配置项
        pagination: ".swiper-pagination",
        loop: true
      }/*,
      list:[{
        id: 1
      }, {
        id: 2
      }]*/
    }
  },
  computed: {
    showSwiper() {
      //v-if swiperdata.length: ajax请求之前swiperdata为[]，导致swiper渲染可能不正确，让swiperdata有值时再渲染
      return this.swiperdata.length
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
