<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeStyle="deeppink">
        <img slot="img-item" src="./assets/img/tabbar/home.svg" alt />
        <img slot="img-item-active" src="./assets/img/tabbar/home_active.svg" alt />
        <div slot="text-item">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeStyle="deeppink">
        <img slot="img-item" src="~assets/img/tabbar/category.svg" alt />
        <img slot="img-item-active" src="./assets/img/tabbar/category_active.svg" alt />
        <div slot="text-item">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeStyle="deeppink">
        <img slot="img-item" src="./assets/img/tabbar/shopcart.svg" alt />
        <img slot="img-item-active" src="./assets/img/tabbar/shopcart_active.svg" alt />
        <div slot="text-item">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeStyle="deeppink">
        <img slot="img-item" src="./assets/img/tabbar/profile.svg" alt />
        <img slot="img-item-active" src="./assets/img/tabbar/profile_active.svg" alt />

        <div slot="text-item">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/common/tabbar/tabbar.vue";
import TabBarItem from "./components/common/tabbar/tabbarItem.vue";

export default {
  name: "app",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
@import "./assets/css/base.css";
</style>
