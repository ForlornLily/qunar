import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue' //@是webpack设置的路径别名，此处指src目录
import City from '@/pages/city/City.vue'

Vue.use(Router)
//路由配置文件
export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/city',
    name: 'City',
    component: City
  }]
})
