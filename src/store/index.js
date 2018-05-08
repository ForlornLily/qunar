import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state.js"
import mutations from "./mutations.js"

Vue.use(Vuex)          //让vue使用Vuex

/*let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  alert("浏览器不支持localStorage或处于隐身模式")
}*/
export default new Vuex.Store({
  state,
  mutations
  /*state: {            //全局公用数据
    //city: '上海'
    city: defaultCity
  },
  actions: {
    //对应List.vue
    //第一个参数为vuex自带，第二个为自定义回传
    /*changeCity (ctx, city) {
      //调用mutations改变公用数据
      ctx.commit("setCity", city)
    }*/
   /*},
  mutations: {
    //第一个参数为vuex自带，第二个为自定义回传
    setCity (state, city) {
      state.city = city
      //刷新浏览器后数据会还原，用localStorage进行存储，保证刷新后仍然是刷新前的城市
      try {
        localStorage.city = city
      } catch (e) {
        alert("浏览器不支持localStorage或处于隐身模式")
      }
    }
  }*/
})
