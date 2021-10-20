<template>
    <swiper  class="swiper1">
      <SwiperItem v-for="item in topImages" :key="item">
          <img :src="item"/>
      </SwiperItem>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper";

export default {
  name: "",
  props: {
    topImages: {
      type: Array,
      defualt: []
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      msg: ""
    };
  },
  methods: {},
  create() {
      console.log("this.topImages=============",this.topImages)
  },
  mounted() {}
};
</script>

<style scoped>
.swiper1{
    height: 350px;
    overflow: hidden;
}
</style>
