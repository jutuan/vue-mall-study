<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      message: "hello",
      isShow: false
    };
  },
  methods: {
    show(message, duration) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    }
  },
  mounted() {}
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
  background-color: rgba(0,0,0,0.688);
  z-index: 9;
  padding: 8px 8px;
}
</style>
