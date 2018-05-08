<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id" @click="setCity(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="city of item" :key="city.id" @click="setCity(city.name)">
          <div class="item border-bottom">{{city.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  methods: {
    setCity (city) {
      //点击热门城市或者所有城市，赋值给当前城市和首页的城市
      //通过vuex的dispatch去派发一个action，在store/index.js下进行方法处理
      //this.$store.dispatch("changeCity", city)
      //此处不涉及异步操作，可以直接通过mutations操作
      this.$store.commit("setCity", city)
      //点击城市跳转到首页
      this.$router.push("/")
    }
  },
  mounted () {
    //创建better-scroll实例
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      //监听letter的值
      if(this.letter) {
        //调用BScroll方法，滚动到对应字母的区域
        let scrollArea = this.$refs[this.letter]
        this.scroll.scrollToElement(scrollArea[0])
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
