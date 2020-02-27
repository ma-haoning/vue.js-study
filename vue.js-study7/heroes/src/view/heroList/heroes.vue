<template>
  <div>
    <h2 class="sub-header">英雄列表</h2>
    <router-link class="btn btn-success" to="/add-edit">添加英雄</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <router-link :to=" `/add-edit/${item.id}`">编辑</router-link>&nbsp;&nbsp;
              <a href="#" @click.prevent="delData(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
const PATH = "http://localhost:8888/heroes";
//引入 axios模块
import axios from "axios";
export default {
  data() {
    return {
      //设置一个空数组
      list: []
    };
  },
  methods: {
    //获取数据
    getData() {
      //发送请求
      axios.get(PATH).then(res => {
        this.list = res.data;
      });
    },
    //删除数据
    delData(id) {
      if (confirm("Are you sure?")) {
        //发送请求
        axios.delete(`${PATH}/${id}`).then(res => {
          //重新渲染
          this.getData();
        });
      }
    }
  },
  //vue实例创建完就执行
  created() {
    this.getData();
  }
};
</script>

<style>
</style>