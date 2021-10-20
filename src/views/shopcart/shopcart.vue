<template>
  <div class="cartdo">
    <!-- 导航 -->
    <NavBar class="cart">
      <div slot="center">购物车({{cartLength}})</div>
    </NavBar>
    <!-- 商品的列表 -->
    <CartList></CartList>
    <!-- 底部汇总 -->
    <CartListCount></CartListCount>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/Navbar.vue";
import CartList from "../shopcart/childrenComponents/CartList.vue";
import CartListCount from "../../views/shopcart/childrenComponents/CartListCount.vue";
import { mapGetters } from "vuex";
export default {
  name: "shopcart",
  components: {
    NavBar,
    CartList,
    CartListCount
  },
  computed: {
    ...mapGetters([
      "cartLength",
      "cartList"
      // ...
    ])
  },
  data() {
    return {
      msg: ""
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.cart {
  background-color: var(--color-tint);
  color: white;
  font-weight: 600;
}
.cartdo {
  height: 100vh;
}
</style>
