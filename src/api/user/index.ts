//统一管理用户的接口
import request from "@/utils/request";
import type { loginForm,loginResponseData,userResponseData,logOutResponse } from "./type";
//统一管理接口
enum API{
    LOGIN_URL="/user/login",
    USERINFO_URL="/user/info",
    LOGOUT_URL="/user/logout"
}
//暴露请求函数
//登录请求方法
export const reqLogin=(data:loginForm)=>request.post<string,loginResponseData>(API.LOGIN_URL,data);
//获取用户信息的接口方法
export const reqUserInfo=()=>request.get<string,userResponseData>(API.USERINFO_URL)
//这里的泛型string是错误信息
//退出登录请求的方法
export const reqLogOut=(token:string)=>request.post<string,logOutResponse>(API.LOGOUT_URL,{token:token})