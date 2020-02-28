//main是入口文件 各类引入进来的package 都可以通过此文件直接引用
import Vue from 'vue'
import App from './App.vue'
//引入bootstrap
import "./../node_modules/bootstrap/dist/css/bootstrap.css"
//引入页面的css样式 全部的样式哦
import "./assets/index.css"
//以上引入的内容浏览器识别不了  需要在config中设置
//引入axios米快
import axios from "axios"
//设置一下基地址
axios.defaults.baseURL = "http://localhost:8888"
//直接在Vue下面prototype设置  给Vue添加一个对象 通过prototype 下面的vue实例化都可以用到这个添加的对象
Vue.prototype.$axios = axios //$axios只是一个变量 开发中 $axios更有语义化

//引入router
import router from "./router" //路由 在实际开发中 会建立在一个文件夹中 文件夹中有个index.js会是个默认的路径 
new Vue({
  el: '#app',
  render: h => h(App),
  //挂载router
  router
})
