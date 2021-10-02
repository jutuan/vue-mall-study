import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/home/home.vue"
import Category from "../views/category/cattegory.vue"
import Shopcart from "../views/shopcart/shopcart.vue"
import Profile from "../views/profile/profile.vue"

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: "",
            redirect: '/home'
        },
        {
            path: "/home",
            component: Home
        },
        {
            path: "/category",
            component: Category
        },
        {
            path: "/shopcart",
            component: Shopcart
        },
        {
            path: "/Profile",
            component: Profile
        }
    ],
    mode:'history'
})

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
export default router