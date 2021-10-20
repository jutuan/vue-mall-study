<template>
  <div class="btm-bar">
    <div class="bottom-bar">
      <div class="bottom-bar-item">
        <i class="icon service"></i>
        <p>客服</p>
      </div>
      <div class="bottom-bar-item">
        <i class="icon shop"></i>
        <p>店铺</p>
      </div>
      <div class="bottom-bar-item">
        <i class="icon select"></i>
        <p>收藏</p>
      </div>
      <div class="bar-right">
        <div class="cart" @click="addToCart">加入购物车</div>
        <div class="buy">购买</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    addToCart() {
      this.$emit("addcart");
    }
  },
  mounted() {}
};
</script>

<style scoped>

.bottom-bar {
  height: 58px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  text-align: center;
}
.bottom-bar-item {
  flex: 1;
}

.bar-right {
  flex: 2.5;
  display: flex;
  /* text-align: center; */
}

.bar-right .buy {
  flex: 1.5;
  background-color: crimson;
  margin: auto;
  line-height: 58px;
}
.bar-right .cart {
  flex: 2;
  margin: auto;
  background-color: rgb(248, 215, 17);
  line-height: 58px;
}
.icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 10px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}

.service {
  background-position: 0 -54px;
}
.shop {
  background-position: 0 -98px;
}
</style>

