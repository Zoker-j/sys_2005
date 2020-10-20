import axios from "axios";
import router from "../router"
import ElementUI from "element-ui"
axios.defaults.baseURL=process.env.NODE_ENV==='development' ? "/api" :"http://www.chst.vip"
//允许请求携带认证
axios.defaults.withCredentials=true
//创建请求拦截器,可以给每个请求都携带上想要传递的内容
axios.interceptors.request.use(config=>{
    if (config.url == "/users/login") {
        return config //放行
    } else {
        let token = localStorage.getItem('qf-token')
        config.headers['authorization'] = token;
        return config
    }
})

//响应拦截
axios.interceptors.response.use(config=>{
    let {data} =config
    if(data.code=="1004"||data.code=="10022"){
        ElementUI.Message.error("登入信息失效,请重新登录")
        router.push("/login")
    }
    return config
})

axios.create({
    timeout:4000
})

export default axios