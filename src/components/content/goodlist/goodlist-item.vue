<template>
  <div class="goods-item" @click="goToDetail()">
    <img  v-lazy="isImage" @load="loadimg" alt />
    <!-- {{goodlistItem}} -->
    <div class="goods-info">
      <p>{{goodlistItem.title}}</p>
      <span class="price">{{goodlistItem.price}}</span>
      <span class="collect">{{goodlistItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    goodlistItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    isImage() {
      return this.goodlistItem.image || this.goodlistItem.show.img;
    }
  },
  data() {
    return {
      iid: null
    };
  },
  methods: {
    //跳转到详情页
    goToDetail() {
      console.log("this.goodlistItem.iid", this.goodlistItem.iid);
      this.$router.push("/detail/" + this.goodlistItem.iid);
    },
    loadimg() {
      // console.log('imageload')
      if (this.$route.path.indexOf("/home")) {
        this.$bus.$emit("itemloadimg");
      }
    },
    condata() {
      // console.log("goodlistItem", this.goodlistItem);
    }
  },
  mounted() {
    this.condata();
  }
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
