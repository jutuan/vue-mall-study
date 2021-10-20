<template>
  <div>
    <div @click="OnLook">
      <span>{{this.PriceCount}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "",
  data(){
      return{
      }
  },
  props: {
    product: Object,
    default() {
      return {};
    }
  },
  computed: {


    ...mapGetters([
      "cartLength",
      "cartList",
      "PriceCount"
      // ...
    ]),
    
  },

  methods: {
    OnLook() {
      console.log("this.cartList", this.cartList);
     
    }
  },
  mounted() {}
};
</script>

<style scoped>
</style>

