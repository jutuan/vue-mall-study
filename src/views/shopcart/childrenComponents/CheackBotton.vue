<template>
  <div class="check-button" :class="{check:isChecked}">
      <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      isChecked:{
          type:Boolean,
          default:true
      }
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>

<style scoped>
.check-button{
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid #aaa;
}
.check{
    border-color: red;
}
</style>
