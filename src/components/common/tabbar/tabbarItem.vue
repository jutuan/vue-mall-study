<template>
  <div class="tabbar-set-item" @click="tabbarlink">
    <div v-if="!isActive">
      <slot name="img-item"></slot>
    </div>
    <div v-else>
      <slot name="img-item-active"></slot>
    </div>
    <div :style=activecolor>
      <slot name="text-item"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String, //指定传入的类型
    activeStyle:{
      type:String,
      default:"red"
    }
  },
  data() {
    return {
    };
  },
  
  methods: {
    tabbarlink: function() {
      this.$router.push(this.path)
      // console.log("111")
    }
  },
  computed:{
    isActive(){
     return this.$route.path.indexOf(this.path) !== -1
    },
    activecolor(){
      return this.isActive?{color:this.activeStyle}:{}
    }
  },
};
</script>

<style scoped>
.active {
  color: blue;
}
.tabbar-set-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabbar-set-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>