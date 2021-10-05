import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
import { request } from './network/request'



Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
// axios({
//   url: "http://123.207.32.32:8000/home/multidata",
//   method: 'get'
// }).then(res => {
//   console.log(res.data)
// })

// axios({
//   url: "http://123.207.32.32:8000/home/multidata",
//   params: {
//     type: 'pop',
//     page: 1
//   }
// })
// axios.defaults.baseURL = "http://123.207.32.32:8000/"
axios.defaults.baseURL = "http://152.136.185.210:7878/api/hy66"
axios.defaults.timeout = 5000
// //axios发送并发请求
// axios.all([axios({ url: "home/multidata", }),
// axios({ url: "home/multidata", })])
//   .then(res1 => {
//     console.log(res1);
//   })

// axios.all([axios({ url: "home/multidata", }),
// axios({ url: "http://123.207.32.32:8000/home/multidata", })])
//   .then(axios.spread((res1, res2) => {
//     console.log(res1);
//     console.log(res2)
//   }))



// const instance1 = axios.create({
//   baseURL: "http://123.207.32.32:8000/",
//   timeout: 5000
// })
// instance1({
//   url: "home/multidata"
// }).then(res => { console.log("res:", res) })

// const instance2 = axios.create({
//   baseURL: "http://123.207.32.32:8000/",
//   // headers:" "
// })
// instance2({
//   url: "home/multidata"
// }).then(res => { console.log("res:", res) })

request({
  url: "http://123.207.32.32:8000/home/multidata"
}).then(res => {console.log(res)})