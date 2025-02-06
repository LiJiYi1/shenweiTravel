//进行路由鉴权的文件
//引入路由router
import router from "@/router";
//进度条插件
import nprogress from 'nprogress'
//进度条插件的样式
import "nprogress/nprogress.css"
import { useUserStore } from "@/store/modules/user";
import pinia from "@/store";
const userStore=useUserStore(pinia)
//全局前置路由守卫
router.beforeEach((to,from,next)=>{
//进度条开始
nprogress.start()
//每次切路由的时候拿到token
const token = userStore.storeToken
//路由在跳转的时候进行一个路由鉴权
//根据token判断登录状态
//如果有token说明我们已经登录了,那么只要不是登录页面我们都有权利访问
if(token){
//登录成功不让他访问login
if(to.path=='/login'){

    next('/home')
}
else{
//登录成功访问其他路由,放行
next()
}
}
//没有token那就说明没登录,只有登录页面会放行,其他页面都强制定向到登录页面,并且给他一个查询参数,
// 一旦登录就直接重定向查询参数那个路由
else{
    if(to.path=='/login'){
        next()
    }
    else{
        next({path:'/login'})
    }
}
console.log(from);

})
// //全局后置路由守卫
router.afterEach((to,from)=>{
//进度条结束
nprogress.done()
document.title=`神威管理-${to.meta.title}`
console.log(from);
})