//统一管理用户的接口
import request from "@/utils/request";
import type { loginForm,loginResponseData,userResponseData } from "./type";
//统一管理接口
enum API{
    LOGIN_URL="/user/login",
    USERINFO_URL="/user/info"
}
//暴露请求函数
//登录请求方法
export const reqLogin=(data:loginForm)=>request.post<string,loginResponseData>(API.LOGIN_URL,data);
//获取用户信息的接口方法
export const reqUserInfo=()=>request.get<string,userResponseData>(API.USERINFO_URL)
//这里的泛型string是错误信息
