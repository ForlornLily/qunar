<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of page" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-intro">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    icondata: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      },
      iconList:[{
        id: 1,
        title: "热门景点",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
      }, {
        id: 2,
        title: "热门景点2",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
      }, {
        id: 3,
        title: "热门景点3",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
      },{
        id: 4,
        title: "热门景点",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
      }, {
        id: 5,
        title: "热门景点2",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
      }, {
        id: 6,
        title: "热门景点3",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
      },{
        id: 7,
        title: "热门景点",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
      }, {
        id: 8,
        title: "热门景点2",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
      }, {
        id: 9,
        title: "热门景点3",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
      }]
    }
  },
  computed: {
    //计算swiper-slide生成个数
    page () {
      const pages = []
      this.icondata.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import "~style/varibles.styl"
@import "~style/mixcommon.styl"
/*  ellipsis() 通用的一组样式*/
/* swiper高度为div.icon高度，而没有撑满整个div.icons，
需要进行处理，使其撑满 */
 /*  .icons
   height:0
   padding-bottom: 50%
   overflow: hidden */
   .icons >>> .swiper-container
    height:0
    padding-bottom: 50%
    .icon
      width: 25%
      float: left
      height: 0
      overflow: hidden
      position: relative
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          height: 100%
          display: block
          margin: 0 auto
      .icon-intro
          position: absolute
          left: 0
          right: 0
          bottom: 0
          height: .44rem
          line-height: .44rem
          text-align: center
          color: $darkTextColor
          ellipsis()
</style>
