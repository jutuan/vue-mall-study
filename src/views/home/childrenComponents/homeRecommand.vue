<template>
  <div class="recommad">
      <div v-for="item in recommand" class="recommand-item" :key="item.link">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      recommand:{
          type:Array,
          default(){
              return []
          }
      }
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>

<style scoped>
.recommad{
    display:flex;
    width: 100%;
    text-align: center;
    font-size: 14px;
    padding: 15px 0 20px;
    border-bottom:8px solid #eee ;
}
.recommand-item{
    flex: 1;    
}
.recommand-item img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
}
</style>
