 /* eslint-disable */ 
import {ADD_COUNTER,ADD_To_CART} from './mutation-type'


export default {

    addcart(context, payld) {
        return new Promise((resolve,reject)=>{
            let product = context.state.cartList.find(item => item.iid === payld.iid)
            
            
            if (product) {
                context.commit(ADD_COUNTER, product)
                resolve("数量加1")
            // resolve("这里也能执行resolve，好像只执行1次")

            } else {
                payld.count = 1
                context.commit(ADD_To_CART, payld)
                resolve("添加新商品")

            }
            // resolve("这里也能执行resolve，好像只执行一次")
        })
        

    }
    ,
    // PriceCount(context) {
        
    //     context.commit(PriceCount)
    // }
}