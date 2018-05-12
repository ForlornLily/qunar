<template>
  <div>
    <div class="title">猜你喜欢</div>
    <ul>
        <router-link tag="li" :to="'/detail/'+item.id" class="item" v-for="item of list" :key="item.id">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl">
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-money">
              <span class="item-price">{{item.price | filterMoney}}</span>
              起
            </p>
          </div>
        </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  /*data () {
    return {
      recommendList: [{
        id:"1",
        imgURL: "http://img1.qunarzz.com/sight/p0/1803/1a/1aac2b1dd96b36ba3.water.jpg_150x150_edd4b21c.jpg",
        title: "上海欢乐谷",
        price: "99"
      }, {
        id:"2",
        imgURL: "http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg",
        title: "上海迪士尼乐园",
        price: "260"
      }, {
        id:"3",
        imgURL: "http://img1.qunarzz.com/sight/p0/1803/1a/1aac2b1dd96b36ba3.water.jpg_150x150_edd4b21c.jpg",
        title: "上海欢乐谷",
        price: "99"
      }]
    }
  },*/
  filters: {
    filterMoney(value) {
      return `￥${value}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import "~style/mixcommon.styl"
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      position: relative
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-money
        line-height: .54rem
        font-size: .32rem
        position: absolute
        bottom: 0
        ellipsis()
        .item-price
          color: #ff8300
          font-size: .4rem
</style>
