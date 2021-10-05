<template>
  <div>
    <Swiper>
      <SwiperItem v-for="item in banner" :key="item.link" >
        <a :href="item.link">
          <img :src="item.image" alt @load="loadimg" />
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
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      msg: true
    };
  },
  methods: {
    loadimg() {
      if (this.msg) {
        this.$emit("SwiperLoadimg");
        this.msg = false;
      }
    }
  },
  mounted() {}
};
</script>
<style scoped>
</style>
