import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
axios({
  url: "http://123.207.32.32:8000/home/multidata",
  method: 'get'
}).then(res => {
  console.log(res.data)
})

axios({
  url: "http://123.207.32.32:8000/home/multidata",
  params: {
    type: 'pop',
    page: 1
  }
})
//axios发送并发请求
axios.all([axios({ url: "http://123.207.32.32:8000/home/multidata", }), 
axios({ url: "http://123.207.32.32:8000/home/multidata", })])
.then(axios.spread((res1,res2)=>{
  console.log(res1);
  console.log(res2)
}))