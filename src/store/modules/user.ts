//用户相关的仓库
import { ref} from "vue"
import { defineStore } from 'pinia'
import type { loginForm,loginResponseData } from '@/api/user/type'
import { reqLogin,reqUserInfo,reqLogOut } from '@/api/user';
import { ElNotification } from "element-plus";
//存储用户信息
const storeToken=ref(localStorage.getItem('token'))
const userName=ref('')
const avator=ref('')
const useUserStore = defineStore('UserStore', () => {
    //登录时调用这个函数,拿到token数据并实现本地存储
    async function loginPost(user: loginForm){
        //用封装好的API发Post请求用户数据
        const userData:loginResponseData=await reqLogin(user)
        if(userData.code===200)
        { 
         //存储到pina里
            storeToken.value = (userData.data.token as string)
            //持久化存储
            localStorage.setItem('token', storeToken.value)
            //返回一个成功的promise
            return   'ok' 
        }
        else{
            return Promise.reject(new Error(userData.data.message))
        }

       
    }
    //登录以后从服务器拿到参数
    async function getUserData(){
       const data=await reqUserInfo()
       
        return data
    }
    //退出登录的方法
    async function logOut(){
        try {
            const response =await reqLogOut(storeToken.value as string)
            console.log(response)
            if (response.success) {
                ElNotification({
                    type: 'warning',
                    title: `已退出登录!`,
                })
                // 执行相应的退出登录逻辑，如清除本地存储的 token 等
                storeToken.value = ''
                //存储的用户昵称也去掉
                userName.value = ''
                //存储的头像去掉
                avator.value = ''
                localStorage.removeItem('token')
            } else {
                ElNotification({
                    type: 'error',
                    title: `退出登录失败!`,
                    message: `${response.message}`,
                })
                console.error(response.message);
            }
        } catch (error) {
            console.error('请求出错:', error);
        }
       
    
    }
    return {  loginPost,storeToken,getUserData,logOut,userName,avator}
})
export  {useUserStore}