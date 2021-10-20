<template>
  <div class="warpper1" ref="warpper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import PullUp from "@better-scroll/pull-up";
import ObserveDOM from "@better-scroll/observe-dom";
BScroll.use(ObserveDOM);
BScroll.use(PullUp);
export default {
  name: "",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { scroll: null };
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
      // this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      // console.log("-------------");
      this.scroll  && this.scroll.refresh();
      // this.scroll.refresh();
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.warpper, {
      probeType: this.probeType,
      observeDOM: true,
      click: true,
      pullUpLoad: this.pullUpLoad
    });
    this.scroll.on("scroll", postion => {
      // console.log(postion);
      this.$emit("scroll", postion);
    });
    console.log("this.scroll", this.scroll);
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多");
      this.$emit("pullingUp");
      // setTimeout(() => {
      //   this.scroll.finishPullUp();
      // }, 2000);
    });
  }
};
</script>

<style scoped>
</style>
