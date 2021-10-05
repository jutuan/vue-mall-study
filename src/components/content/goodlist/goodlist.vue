<template>
  <div class="goods">
    <GoodListItem v-for="item in goodlist" :key="item.iid" :goodlistItem = item ></GoodListItem>
  </div>
</template>

<script>
import GoodListItem from "./goodlist-item.vue";
export default {
  name: "",
  props: {
    goodlist: {
        type:Array,
        default(){
            return []
        }
    }
  },
  components: {
    GoodListItem
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
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>

