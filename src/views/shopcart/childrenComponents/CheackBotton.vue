<template>
  <div class="c-btn">
    <img class="check-button" :class="{check:isChecked}" src="~assets/img/cart/tick.svg" alt />全选
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    isChecked: {
      type: Boolean,
      default: true
    }
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
.check-button {
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #aaa;
  margin-right: 10px;
  vertical-align: middle;

}
.check {
  border-color: red;
}
.c-btn{
  text-align: center;
}
.c-btn img {
  text-align: center;
  margin-bottom: 4px;
}
</style>
