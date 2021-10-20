<template>
  <div id="detail">
    <div v-for="(item,index) in $store.state.cartList" :key="index"></div>

    <DetailNav class="detail-nav" @titleClick="titleClick" ref="nav"></DetailNav>
    <Scroll ref="scrollD" class="content-detail" :probeType="3" @scroll="ScrollPostion">
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <DetailBaseInfo :goods="good"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodInfo :detailInfo="detailInfo" @imageLoad="imageLoad"></DetailGoodInfo>
      <ParamInfo ref="param" :paramInfo="paramInfo"></ParamInfo>
      <CommentInfo ref="comment" :commentInfo="commentInfo"></CommentInfo>
      <Goodlist ref="recommend" :goodlist="RecommendData"></Goodlist>
    </Scroll>
    <BottomBar @addcart="addToCart"></BottomBar>
    <!-- 组件监听函数 -->
    <BackTop @click.native="backTop" v-show="isShow"></BackTop>
  </div>
</template>

<script>
import DetailNav from "./childrenComponents/detailNavbar.vue";
import DetailSwiper from "./childrenComponents/detailSwiper.vue";
import DetailBaseInfo from "./childrenComponents/detailBaseInfo.vue";
import DetailShopInfo from "./childrenComponents/detailShopInfo.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import DetailGoodInfo from "./childrenComponents/detailGoodsInfo.vue";
import ParamInfo from "./childrenComponents/detailParmaInfo.vue";
import CommentInfo from "./childrenComponents/detailCommentInfo.vue";
import BottomBar from "./childrenComponents/detailBottomBar.vue";

import { BackTopMixin } from "../../commonjs/mixin";
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommendData
} from "../../network/detail";
import Goodlist from "../../components/content/goodlist/goodlist.vue";
import { debance } from "../../commonjs/util";
export default {
  name: "DETA",
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodInfo,
    ParamInfo,
    CommentInfo,
    Goodlist,
    BottomBar
  },
  mixins: [BackTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      good: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: [],
      RecommendData: [],
      ThemeTopY: [],
      getThemeTopY: null,
      currentIndexnum: 0
    };
  },
  created() {
    //1、保存传入的iid
    this.iid = this.$route.params.iid;
    console.log("this.$route.iid--===", this.$route.params);
    //2、通过iid获取详情页数据 商品信息对象
    getDetail(this.iid).then(res => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      console.log("getDetails", this.topImages);
      console.table("getresDetails res", res.result);
      this.good = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      console.log("this.good===========", this.good);
      //3.创建店铺详细信息的对象
      this.shop = new Shop(data.shopInfo);
      console.log("this.shop===========", this.shop);

      //4.保存商品的详细数据
      this.detailInfo = data.detailInfo;

      //5.获取商品的参数
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //6、取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list;
        console.log("commentInfo", this.commentInfo);
      }
    });
    //3、获取推荐数据
    getRecommendData().then(res => {
      console.log("getRecommendData", res);
      this.RecommendData = res.data.list;
    });
    //4、给getThemeTopY赋值
    this.getThemeTopY = debance(() => {
      // this.ThemeTopY = [];
      // this.ThemeTopY.push(0);
      // this.ThemeTopY.push(this.$refs.param.$el.offsetTop - 44);
      // this.ThemeTopY.push(this.$refs.comment.$el.offsetTop - 44);
      // this.ThemeTopY.push(this.$refs.recommend.$el.offsetTop - 44);
      // console.log("-----1------", this.ThemeTopY);
    }, 200);
  },
  mounted() {},
  methods: {
    //加入购物车
    addToCart() {
      console.log("------");
      //显示商品需要展示的信息
      console.log("商品主要信息：", this.good);
      const product = {};
      product.image = this.topImages[0];
      product.title = this.good.title;
      product.desc = this.good.desc;
      product.price = this.good.realPrice;
      product.iid = this.iid;

      //将商品添加到购物车里面
      //  this.$store.commit('addcart',product)
      this.$store.dispatch("addcart", product);
    },

    ScrollPostion(postion) {
      const positiony = -postion.y;
      console.log(this.ThemeTopY);
      // let length = this.ThemeTopY.length;
      // for (let i in this.ThemeTopY)
      for (let i = 0; i < this.ThemeTopY.length - 1; i++) {
        if (
          positiony > this.ThemeTopY[i] &&
          positiony < this.ThemeTopY[i + 1]
        ) {
          this.currentIndexnum = i;
          this.$refs.nav.currentIndex = this.currentIndexnum;
          console.log(this.currentIndexnum);
        }

        // if (
        //   ( this.currentIndexnum !== (i*1) &&(i * 1 < length - 1 &&
        //     positiony >= this.ThemeTopY[i] )&&
        //     positiony < this.ThemeTopY[1 * (i * 1 +1)]) ||
        //   (i * 1 === length - 1 && positiony >= this.ThemeTopY[i])
        // ) {
        //   this.currentIndexnum = i*1 ;
        //   this.$refs.nav.currentIndex = this.currentIndexnum
        //   console.log(this.currentIndexnum)
        // }
      }
      //是否显示回到顶部
      //  alert(this.isshowtabbar);
      this.isShow = positiony > 2000;
      // alert(this.isshowtabbar);
    },
    imageLoad() {
      // console.log(".");
      this.$refs.scrollD.refresh();
      // this.getThemeTopY();
      // console.log("this.getThemeTopY!!!",this.getThemeTopY())
      this.ThemeTopY = [];
      this.ThemeTopY.push(0);
      this.ThemeTopY.push(this.$refs.param.$el.offsetTop - 44);
      this.ThemeTopY.push(this.$refs.comment.$el.offsetTop - 44);
      this.ThemeTopY.push(this.$refs.recommend.$el.offsetTop - 44);
      this.ThemeTopY.push(Number.MAX_VALUE);
      console.log("-----1-this.ThemeTopY", this.ThemeTopY);
    },
    titleClick(index) {
      this.$refs.scrollD.scrollTo(0, -this.ThemeTopY[index], 200);
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content-detail {
  height: calc(100% - 44px);
}
</style>
