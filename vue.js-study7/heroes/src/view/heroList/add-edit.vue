<template>
  <div>
    <h2 class="sub-header">{{btn_text}}英雄</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="请输入您的姓名"
          v-model.trim="formDate.name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="请输入您的性别"
          v-model.trim="formDate.gender"
        />
      </div>

      <button type="submit" class="btn btn-success" @click.prevent="all">{{btn_text}}英雄</button>
    </form>
  </div>
</template>

<script>
const PATH = "http://localhost:8888/heroes";
//引入axios模块
import axios from "axios";
export default {
  data() {
    return {
      formDate: {
        name: "",
        gender: ""
      }
    };
  },
  methods: {
    // addData() {
    //   if (this.formDate.name && this.formDate.gender) {
    //     axios.post(PATH, this.formDate).then(res => {
    //       //添加成功之后直接$router.push
    //       this.$router.push("/heroes");
    //     });
    //   } else {
    //     alert("请输入");
    //   }
    // },
    //这个方法里面判断是添加还是编辑
    all() {
      //不管是添加还是编辑 文本框内必须有内容 如果没有内容说明是需要添加
      if (this.formDate.name && this.formDate.gender) {
        //判断是否有id  添加的时候一定没有id  编辑的时候只有有id才会去编辑
        if (this.$route.params.id) {
          //编辑分支 发送请求
          axios
            .put(`${PATH}/${this.$route.params.id}`, this.formDate)
            .then(() => {
              this.$router.push("/heroes");
            });
        } else {
          axios.post(PATH, this.formDate).then(res => {
            //添加成功之后直接$router.push
            this.$router.push("/heroes");
          });
        }
      } else {
        alert("请输入");
      }
    },
    //如果是编辑先本内容获取到页面上
    editData() {
      if (this.$route.params.id) {
        axios.get(`${PATH}/${this.$route.params.id}`).then(res => {
          this.formDate = res.data;
        });
      }
    }
  },
  //vue实例结束执行
  created() {
    this.editData();
  },
  //判断添加还是删除
  computed: {
    btn_text() {
      return this.$route.params.id ? "编辑" : "添加";
    }
  }
};
</script>

<style>
</style>