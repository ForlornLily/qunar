<template>
  <ul class="list">
    <!-- <li class="item" v-for="(item, key) of cities" :key="key" @click="locateCity">
      {{key}}
    </li> -->
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="locateCity"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop   //字母A距离ul的高度，不需要反复在handleTouchMove方法内获取
  },
  methods: {
    locateCity (e) {
      //this.$emit("citychange", e)   //触发父组件的自定义事件
      this.$emit("citychange", e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      //滑动右侧字母列时，让List跟着滑动
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79    //手滑动时候的距离整个body的高度-header和search的高
          const index = Math.floor((touchY - this.startY) / 20) //20:单个个li的高度
          if (index >= 0 && index < this.letters.length) {
            this.$emit('citychange', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
/* flex相关:垂直方向居中 */
  @import '~style/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
