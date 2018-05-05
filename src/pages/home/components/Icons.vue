<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png">
      </div>
      <p class="icon-intro">123456</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png">
      </div>
      <p class="icon-intro">123</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import "~style/varibles.styl"
  .icons
    height:0
    padding-bottom: 50%
    overflow: hidden
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
</style>
