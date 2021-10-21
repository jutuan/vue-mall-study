<template>
  <div>
    <div @click="OnLook" class="proFlex">
      <div class="pcB">
        <CheackButtom class="btn" :isChecked="isSelectAll" @click.native="AllChecked"></CheackButtom>
      </div>
      <span class="pc">总金额：{{this.PriceCount}}</span>
      <span class="pca" @click="countALL">数量:({{this.productCount}})</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CheackButtom from "../childrenComponents/CheackBotton.vue";
export default {
  name: "",
  components: {
    CheackButtom
  },
  data() {
    return {};
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
      "PriceCount",
      "productCount"
      // ...
    ]),
    isSelectAll() {
      if(this.cartList.length == 0) return false;
      return !this.cartList.filter(item => !item.checked).length;
    }
  },

  methods: {
    countALL(){
      this.$toast.show("请添加商品至购物车",1000)
    },

    OnLook() {
      console.log("this.cartList", this.cartList);
    },
    AllChecked(){
      var c = this.isSelectAll
      for(var item of this.cartList){
        item.checked = !c;
        console.log("item",item)
      }
    }
  },
  mounted() {}
};
</script>

<style scoped>
.proFlex {
  display: flex;
  line-height: 50px;
}
.btn{
  text-align: center;
 

}
.pcB {
  line-height: 50px;

  flex: 1;
  background-color: rgb(60, 70, 85);
  text-align: center;
  color: white;
}
.pc {
  flex: 2.5;
  background-color: rgb(60, 70, 85);
  margin: auto;
  text-align: center;
  color: white;
}
.pca {
  flex: 1;
  background-color: rgb(235, 51, 18);
  margin: auto;
  text-align: center;
  color: white;
}
</style>

