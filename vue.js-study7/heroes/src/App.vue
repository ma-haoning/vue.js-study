<template>
  <div id="app">
    <appNav></appNav>
    <div class="container-fluid">
      <div class="row">
        <appAside></appAside>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 视图必须要有容器收纳 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//引入 导航信息
import nav from "./nav";
//引入左侧信息
import aside from "./aside";
//引入主体部分
import mains from "./mains";
export default {
  name: "app",
  //设置组件
  components: {
    //组件名字  组件对象
    //注册导航信息
    appNav: nav,
    //注册左侧信息
    appAside: aside,
    //注册主体部分信息
    appMain: mains
  }
};
</script>

<style>
</style>
