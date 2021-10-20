<template>
  <div>
    <navbar>
      <div class="back" slot="left" @click="back">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,index) in titlelist"
          class="title-item"
          :key="item+'1'"
          @click="changeidx(index)"
          :class="{active: currentIndex=== index}"
        >{{item}}</div>
      </div>
    </navbar>
  </div>
</template>

<script>
import Navbar from "../../../components/common/navbar/Navbar.vue";
export default {
  components: {
    Navbar
  },
  data() {
    return {
      titlelist: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    changeidx(index) {
      this.currentIndex = index;
      this.$emit('titleClick',index)
    }
  },
  mounted() {}
};
</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.active {
  color:var(--color-high-text)
}
.back{
    text-align: center;;
}
.back img{
    margin-top: 11px;
}
</style>
