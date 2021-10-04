<template>
  <div class="tabbarContrl">
    <div v-for="(item,index) in titlelist" :key="index" class="tabbarContrl-item" @click="CurIndex(index)" :class="{ active: index === currentIndex}">
      <span>{{item}}</span>
    </div>
   
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    titlelist: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex :0
    };
  },
  methods: {
    CurIndex(index){
      this.currentIndex = index
      this.$emit("tabclick",index)
    }
  },
  mounted() {
  }
};
</script>

<style scoped>
.tabbarContrl {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-size: 15px;
}
.tabbarContrl-item {
  flex: 1;
}
.tabbarContrl-item  span{
  padding:5px;
}
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 3px solid var(--color-tint);
} 
</style>
