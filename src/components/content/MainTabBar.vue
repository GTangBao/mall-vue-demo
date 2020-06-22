<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="deepPink">
      <img src="~assets/img/tabbar/home.svg" slot="tab-icon"/>
      <img src="~assets/img/tabbar/home_active.svg" slot="tab-icon-active"/>
      <div slot="tab-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="deepPink">
      <img src="~assets/img/tabbar/category.svg" slot="tab-icon"/>
      <img src="~assets/img/tabbar/category_active.svg" slot="tab-icon-active"/>
      <div slot="tab-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="deepPink">
      <img src="~assets/img/tabbar/shopcart.svg" slot="tab-icon"/>
      <img src="~assets/img/tabbar/shopcart_active.svg" slot="tab-icon-active"/>
      <div slot="tab-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deepPink">
      <img src="~assets/img/tabbar/profile.svg" slot="tab-icon"/>
      <img src="~assets/img/tabbar/profile_active.svg" slot="tab-icon-active"/>
      <div slot="tab-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/Tabbar"
  import TabBarItem from "components/common//tabbar/TabBarItem"
    export default {
        name: "main-tab-bar",
      components:{
        TabBar,
        TabBarItem
      }
    }
</script>

<style scoped>

</style>
