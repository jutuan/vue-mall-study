<template>
  <div>
    <DetailNav></DetailNav>
  </div>
</template>

<script>
import DetailNav from "./childrenComponents/detailNavbar.vue";
import {getDetail} from "../../network/detail"
export default {
  name: "",
  components: {
    DetailNav
  },
  data() {
    return {
      iid: null,
      topImages:[]
    };
  },
  created() {
    //1、保存传入的iid
    this.iid = this.$route.params.iid;
    console.log("this.$route.iid--===", this.$route.params);
    //2、通过iid获取详情页数据
    getDetail(this.iid).then(res =>{
        // this.topImages = res.r
        console.log('getDetails',res)})
  },
  mounted() {}
};
</script>

<style scoped>
</style>
