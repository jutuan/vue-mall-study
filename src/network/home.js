import { request } from "./request";

export function getHomeMultidata() {
    return request({
        url: "home/multidata"
    })
}
export function getGoodData(type,page) {
    return request({
        url: "home/data",
        params: {
            type:type,
            page:page
        }
    })
    
}