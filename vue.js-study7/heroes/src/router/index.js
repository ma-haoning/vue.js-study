//引入vue-router
import VueRouter from "vue-router"
//这里没有vue全局变量需要引入vue
import Vue from "vue"
//使用VueRouter
Vue.use(VueRouter)
//引入英雄列表的组件
import heroes from "./../view/heroList/heroes.vue"
//引入武器列表的组件
import weapon from "./../view/weaponList/weapon.vue"
//引入装备列表的组件
import equip from "./../view/equipList/equip.vue"
//引入添加和修改的组件
import addedit from "./../view/heroList/add-edit.vue"
//实例化VueRouter
const router = new VueRouter({
  //配置路由表
  routes: [
    //设置重定向  强制跳转
    {
      path: "/",
      redirect: "/heroes"
    }, {
      //配置英雄列表的path和组件
      path: "/heroes",
      component: heroes
    }, {
      //配置武器列表的path和组件
      path: "/weapon",
      component: weapon
    }, {
      //配置装备列表的path和组件
      path: "/equip",
      component: equip
    },
    //配置添加和修改数据和path
    {
      //此处参数可有可无
      path: "/add-edit/:id?",
      component: addedit
    }
  ]
});
//导出router
export default router;
