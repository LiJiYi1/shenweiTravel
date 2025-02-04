//axios的二次封装,使用请求拦截器和响应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'
//用axios的create方法来创建axios(可以写其他配置比如,基础路径,超时时间等)
const request=axios.create({
    baseURL:'/api',//路径上都会带/api
    timeout:5000//超时的时间
})
//添加请求与响应拦截器
request.interceptors.request.use((config)=>{
//返回配置对象
//config他有个请求头,给服务器端携带公共参数
//config.header.token='wc'
return config
})
//响应拦截器
request.interceptors.response.use((response)=>{
//成功的回调
//简化数据
return response.data
},(error)=>{
//失败的回调:处理HTTP网络错误
//定义一个变量,存储网络错误信息
let message='';
//http状态码
const status=error.response.status;
switch(status){
    case 401:
    message='token过期'
    break;
    case 403 :
    message="无权访问"
    break;
    case 404:
    message="请求地址错误"
    break;
    case 500:
    message="服务器出错"
    break;
    default:
    message="网路错误"
    break;}
    //错误信息
    ElMessage({
        type:'error',
        message
    })
    return  Promise.reject(error)
})

export default request