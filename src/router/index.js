import Vue from 'vue'
import Router from 'vue-router'
/*import Home from '@/pages/home/Home.vue'*/ //@是webpack设置的路径别名，此处指src目录
/*import City from '@/pages/city/City.vue'*/
/*import Detail from '@/pages/detail/Detail.vue'*/

Vue.use(Router)
//路由配置文件
export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import ('@/pages/home/Home.vue') //按需加载
  },{
    path: '/city',
    name: 'City',
    component: () => import ('@/pages/city/City.vue')
  },{
    path: '/detail/:id',   //动态路由
    name: 'Detail',
    component: () => import ('@/pages/detail/Detail.vue')
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }//点击某个路由进入新页面，让滚动条位置回到最顶部
  }
})
