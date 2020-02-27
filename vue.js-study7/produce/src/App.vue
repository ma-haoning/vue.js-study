<template>
  <div id="app">
    <produceList v-for="item in 10" :key="item"></produceList>
  </div>
</template>

<script>
//引入组件
import produceList from "./produce-list";
export default {
  name: "app",
  //注册组件
  components: {
    produceList: produceList
  }
};
</script>

<style>
#app {
  width: 1400px;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
