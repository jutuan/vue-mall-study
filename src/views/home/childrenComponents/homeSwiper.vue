<template>
  <div>
    <Swiper>
      <SwiperItem v-for="item in banner" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper";

export default {
  name: "",
  components: {
    Swiper,
    SwiperItem
  },
  props:{
      banner:{
          type:Array,
          default(){
              return []
          }
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
</style>
