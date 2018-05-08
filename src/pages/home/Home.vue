<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperdata="swiperList"></home-swiper>
    <home-icons :icondata="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header.vue"
import HomeSwiper from "./components/Swiper.vue"
import HomeIcons from "./components/Icons.vue"
import HomeRecommend from "./components/Recommend.vue"
import axios from "axios" //ajax
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  },
  data () {
    return {
      //父子间传值
      swiperList: [],
      iconList: [],
      recommendList: []
    }
  },
  methods: {
    getHomeData () {
      //static可以直接访问，其他会被重新定位，所以json放在static下
      //真实项目请求的路径假设为api，而本地模拟数据用静态即可
      //通过webpakc 在config/index.js的proxyTable进行重定位
      axios.get('/api/home.json')
        .then(this.homeDataSuccess)
    },
    homeDataSuccess (res) {
      let homeData = res.data
      if ( homeData.ret && homeData.data) {
        this.swiperList = homeData.data.swiperList
        this.iconList = homeData.data.iconList
        this.recommendList = homeData.data.recommendList
      }
    }
  },
  mounted () {
    //首页发送一个ajax，将数据传给各个组件
    this.getHomeData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
