<template>
  <div id="app">
    <!-- keep-alive:路由内容加载一次后，放在内存中，不需要反复渲染页面 -->
   <!--  exclude属于例外，仍然每次都请求 -->
    <keep-alive exclude="Detail">
      <!-- router-view:当前路由地址所对应的内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
