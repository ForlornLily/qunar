<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @citychange="handleChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from "./components/Header.vue"
import CitySearch from "./components/Search.vue"
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from "axios" //ajax
export default {
  name: 'Citye',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''   //值传给子组件List.vue
    }
  },
  methods: {
    getCityData () {
      //static可以直接访问，其他会被重新定位，所以json放在static下
      //真实项目请求的路径假设为api，而本地模拟数据用静态即可
      //通过webpakc 在config/index.js的proxyTable进行重定位
      axios.get('/api/city.json')
        .then(this.cityDataSuccess)
    },
    cityDataSuccess (res) {
      let cityData = res.data
      if ( cityData.ret && cityData.data) {
        this.cities = cityData.data.cities
        this.hotCities = cityData.data.hotCities
      }
    },
    handleChange (e) {
      //接收右侧字母子组件的值
      //let alphabet = e.target.innerText
      this.letter = e
    }
  },
  mounted () {
    //发送一个ajax，将数据传给各个组件
    this.getCityData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
