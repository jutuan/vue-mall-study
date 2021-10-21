import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutation.js'
import actions from './actions.js'
import getters from './getters.js'
Vue.use(Vuex)
//创建store对象
const state= {
    cartList: [],
    PriceCount:0,
    productCount:0

}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
//挂载vue实例上面
export default store