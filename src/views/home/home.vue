<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <TabbarContrl
      ref="tabarContrl2"
      class="tabbaritem"
      :titlelist="['流行','新款','精选']"
      @tabclick="tabclick"
      v-show="isshowtabbar"
    ></TabbarContrl>
    <Scroll
      class="content"
      ref="scrollData"
      :probeType="3"
      @scroll="contentScroll"
      @pullingUp="loadmore"
      :pullUpLoad="true"
    >
      <HomeSwiper :banner="banner" @SwiperLoadimg="SwiperLoadimg"></HomeSwiper>
      <HomeRecommand :recommand="recommand"></HomeRecommand>
      <HomeFeatrue></HomeFeatrue>
      <TabbarContrl ref="tabarContrl1" :titlelist="['流行','新款','精选']" @tabclick="tabclick"></TabbarContrl>
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
import { debance } from "../../commonjs/util";
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
      curentType: "pop",
      tabOffsetTop: 0,
      isshowtabbar: false
    };
  },
  created() {
    //请求home的banner和轮播图数据
    this.getHomeMultidata();
    //请求商品数据
    this.getGoodData("pop");
    this.getGoodData("new");
    this.getGoodData("sell");
  },
  methods: {
    //监听获取tabOffsetTop
    SwiperLoadimg() {
      this.tabOffsetTop = this.$refs.tabarContrl1.$el.offsetTop;
      console.log("this.tabOffsetTop-------", this.tabOffsetTop);
    },
    //下拉加载下一页数据,首页
    loadmore() {
      // console.log("------"),
      this.getGoodData(this.curentType);
    },

    contentScroll(postion) {
      // 判断向上图标是否显示   console.log(postion.y);
      this.isShow = postion.y < -1000;
      // 判断tabContrl是否吸顶
      this.isshowtabbar = postion.y < -this.tabOffsetTop;
    },
    backTop() {
      // console.log(["流行", "新款", "精选"], this.$refs.scrollData);
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
      this.$refs.tabarContrl2.currentIndex = index;
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
        this.$refs.scrollData.finishPullUp();
      });
    }
  },
  mounted() {
    //1、防抖动
    const refresh = debance(this.$refs.scrollData.refresh(), 500);
    //2、监听goodlist-item.vue 发送的图片价值完成
    this.$bus.$on("itemloadimg", () => {
      refresh();
    });
  },
  destroyed() {
    console.log("homedestroy");
  },
  activated() {
    console.log("activated");
    this.$refs.scrollData.scrollTo(0, this.saveY, 0);
    this.$refs.scrollData.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scrollData.getScrollY() 
    console.log("deactivated this.saveY",this.saveY);
  }
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
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.tabbaritem1 {
  position: relative;
  /* z-index: 9; */
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
