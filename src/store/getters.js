export default {
    cartLength(state) {
        return state.cartList.length
    },
    cartList(state) {
        return state.cartList
    },
    PriceCount(state) {
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
