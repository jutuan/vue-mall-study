import {ADD_COUNTER,ADD_To_CART} from './mutation-type'


export default {
    addcart(context, payld) {
        let product = context.state.cartList.find(item => item.iid === payld.iid)
        if (product) {
            context.commit(ADD_COUNTER, product)
        } else {
            payld.count = 1
            context.commit(ADD_To_CART, payld)
        }

    }
}