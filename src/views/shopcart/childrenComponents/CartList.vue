<template>
  <div class="cart-list">
    <scroll class="content">
      <!-- <li v-for="(item,index) in cartList" :key="index">{{item}}</li> -->
     <cartListItem v-for="(item,index) in cartList" :key="index" :product="item"></cartListItem>
    </scroll>
  </div>
</template>

<script>
import scroll from "../../../components/common/scroll/Scroll.vue";
import cartListItem from '../childrenComponents/CartListItem.vue'

import { mapGetters } from "vuex";
export default {
  name: "",
  data() {
    return {
      msg: ""
    };
  },
  components: {
    scroll,
    cartListItem
  },
  computed: {
    ...mapGetters([
      "cartLength",
      "cartList"
      // ...
    ])
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.content{
    height: 100%;
    overflow: hidden;
}
.cart-list{
    height: calc(100% - 44px - 49px - 50px);
}
</style>
