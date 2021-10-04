<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <Scroll class="content" ref="scrollData" :probeType="3" @scroll="contentScroll" @pullingUp="loadmore" :pullUpLoad="true">
      <HomeSwiper :banner="banner"></HomeSwiper>
      <HomeRecommand :recommand="recommand"></HomeRecommand>
      <HomeFeatrue></HomeFeatrue>
      <TabbarContrl class="tabbaritem" :titlelist="['流行','新款','精选']" @tabclick="tabclick"></TabbarContrl>
      <Goodlist :goodlist="showGoods"></Goodlist>
    </Scroll>

    <!-- 组件监听函数 -->
    <BackTop @click.native="backTop" v-show="isShow"></BackTop>
  </div>
</template>

<script>
import HomeSwiper from "./childrenComponents/homeSwiper.vue";
import HomeRecommand from "./childrenComponents/homeRecommand.vue";
import HomeFeatrue from "./childrenComponents/homeFeatrue.vue";

import Navbar from "../../components/common/navbar/Navbar.vue";
import TabbarContrl from "../../components/content/TabbarContrl/tabbarContrl.vue";
import Goodlist from "../../components/content/goodlist/goodlist.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import BackTop from "../../components/content/BackTop/Backtop.vue";

import { getHomeMultidata, getGoodData } from "../../network/home";

export default {
  name: "home",
  components: {
    Navbar,
    HomeSwiper,
    HomeRecommand,
    HomeFeatrue,
    TabbarContrl,
    Goodlist,
    Scroll,
    BackTop
  },
  computed: {
    showGoods() {
      return this.goods[this.curentType].list;
    }
  },
  data() {
    return {
      isShow: false,
      resule: null,
      banner: null,
      recommand: null,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      curentType: "pop"
    };
  },
  created() {
    this.getHomeMultidata();
    this.getGoodData("pop");
    this.getGoodData("new");
    this.getGoodData("sell");
  },
  methods: {
    
    loadmore(){
      console.log("------"),
      this.getGoodData(this.curentType);

    },

    contentScroll(postion) {
      // console.log(postion.y);
      this.isShow = postion.y < -1000;
    },
    backTop() {
      console.log(["流行", "新款", "精选"], this.$refs.scrollData);
      this.$refs.scrollData.scrollTo(0, 0, 1000);
    },
    //小的['流行','新款','精选']列表数据选择
    tabclick(index) {
      switch (index) {
        case 0:
          this.curentType = "pop";
          break;
        case 1:
          this.curentType = "new";
          break;
        case 2:
          this.curentType = "sell";
          break;
      }
    },
    //网络请求
    getHomeMultidata() {
      getHomeMultidata()
        .then(res => {
          // console.log("getHomeMultidata------", res);
          this.banner = res.data.banner.list;
          this.recommand = res.data.recommend.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getGoodData(type) {
      const page = this.goods[type].page + 1;
      getGoodData(type, page).then(res => {
        // console.log("pop" + type, res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scrollData.finishPullUp()
      });
    }
  },
  mounted() {}
};
</script>
<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tabbaritem {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content {
  /* height: calc(100%-49px); */
  /* margin-top: 44px; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px;
}
</style>
