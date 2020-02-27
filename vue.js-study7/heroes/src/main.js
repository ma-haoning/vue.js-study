import Vue from 'vue'
import App from './App.vue'
//引入bootstrap
import "./../node_modules/bootstrap/dist/css/bootstrap.css"
//引入页面的css样式 全部的样式哦
import "./assets/index.css"
//以上引入的内容浏览器识别不了  需要在config中设置
//引入路由模块
import VueRouter from "vue-router"

new Vue({
  el: '#app',
  render: h => h(App)
})
