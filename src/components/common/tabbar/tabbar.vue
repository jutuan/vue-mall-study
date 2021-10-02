<template>
  <div id="tabbar-set">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>
<style scoped>
#tabbar-set {
  display: flex;
  background-color: rgb(200, 235, 231);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -2px 1px rgba(100, 100, 100, 0.1);
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

</style>