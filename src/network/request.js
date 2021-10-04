import axios from "axios";
export function request(config) {
    const instant = axios.create({
        // baseURL:"http://123.207.32.32:8000/",
        baseURL: "http://152.136.185.210:7878/api/hy66",
        timeout: 20000
    })
    instant.interceptors.request.use(res => {
        console.log("interceptors.request",res)
        return res
    }, err => {
        console.log(err)
    })
    instant.interceptors.response.use(res => {
        console.log("interceptors.response",res)
        return res.data
    }, err => {
        console.log(err)
    })
    return instant(config);
}