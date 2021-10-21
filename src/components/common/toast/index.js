import Toast from './toast.vue'
const obj={}
obj.install= function(Vue){
    // document.body.appendChild(Toast.$el)
    const ToastConstructor = Vue.extend(Toast);
    const toast = new ToastConstructor();
    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el)
    // console.log('执行了obj')
    Vue.prototype.$toast = toast
}
export default obj