import { ADD_COUNTER, ADD_To_CART } from './mutation-type'
export default {
    //
    [ADD_COUNTER](state, pyaload) {
        pyaload.count++
    },
    [ADD_To_CART](state, pyaload) {
        pyaload.checked = false
        state.cartList.push(pyaload)
        console.log("state.cartlist", state.cartList)
    },
    PriceCount(state, pyaload) {
        console.log(pyaload)
        var cot = 0;
        for (var item of state.cartList) {
            if (item.checked) {
                cot = item.count * item.price + cot
            }
        }
        return cot;
    },
    productCount(state) {
        var count = 0;
        for (var item of state.cartList) {
            if (item.checked) {
                count = item.count  + count
            }
        }
        return count;
    }
}