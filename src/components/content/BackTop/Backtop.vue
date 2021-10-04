<template>
  <div class="back-top">
    <img src="../../../assets/img/common/top.png" alt />
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
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 20px;
  bottom: 80px;
}
.back-top img{
    width: 50px;
    height: 50px;
}
</style>
