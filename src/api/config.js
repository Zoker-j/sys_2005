import axios from "axios";
import router from "../router"
import ElementUI from "element-ui"
axios.defaults.baseURL=process.env.NODE_ENV==='development' ? "/api" :"http://www.chst.vip"
//允许请求携带认证
axios.defaults.withCredentials=true


//请求拦截器
//在请求发送前进行一些操作，例如在每个请求体里加上token
//向服务器发送请求前拦截，保证发送请求时,携带token到请求头authorization
// axios.interceptors.request.use(config=>{
//     // console.log(config);
//     if (config.url == "/users/login") {//如果是login直接放行
//         return config //放行
//     } else {
//         let token = localStorage.getItem('qf-token')
//         config.headers['authorization'] = token;
//         return config
//     }
// })

//响应拦截
//防止用户自行添加token 
//在请求结果返回后，先不直接导出，而是先对响应码等等进行处理
// axios.interceptors.response.use(config=>{
//     console.log("响应拦截",config);
//     let {data} =config
//     if(data.code=="1004"||data.code=="10022"){
//         ElementUI.Message.error("登入信息失效,请重新登录")
//         router.push("/login")
//     }
//     return config
// })

axios.create({
    timeout:4000//设置请求失效时间
})

export default axios