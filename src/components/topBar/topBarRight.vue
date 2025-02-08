<template>
        <!-- 右侧 -->
        <div class="right">
            <el-button :icon="Refresh" size="large" circle @click="refresh"/>
            <el-button :icon="FullScreen" size="large" circle  @click="fullScreen"/>
            <el-button :icon="Setting" size="large" @click="drawer=true" circle /> 
            <!-- 头像 -->
           <img :src="useUserStore().avator" style=" margin-right: 10px;border-radius:40px;width:40px;height:40px;margin-left: 10px;"/>
           <!-- 下拉退出登录 -->
   <el-dropdown>
    <span class="el-dropdown-link">
      {{useUserStore().userName}}
    <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <div @click="logout">退出登录</div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
        </div>


      
</template>

<script setup lang="ts">
  import { useRefreshStore } from '@/store/modules/refresh';
  import {Setting, FullScreen, Refresh,ArrowDown}from '@element-plus/icons-vue'
  import { useUserStore } from '@/store/modules/user';
  import { onMounted,ref,inject} from 'vue';
  import { useRouter,useRoute } from 'vue-router';
  //从爷爷组件navComponent里拿到抽屉是否被拉开
  const drawer=inject('drawer')

 
  const $router=useRouter()
  const $route=useRoute()
//刷新的回调
const refresh=()=>{
//事件触发以后取反,改变仓库里的数据
useRefreshStore().refresh=!useRefreshStore().refresh
}
//全屏的回调
const fullScreen=()=>{
  //获得是否是全屏
  let full=document.fullscreenElement
  //如果不是全屏,我们就让他全屏
  if(full===null){
      document.documentElement.requestFullscreen()
      
  }
  else{
document.exitFullscreen()
  }
  
}
//退出登录的回调
const logout=()=>{
  //第一步往服务器发请求,把token注销掉
  //第二步把pina仓库里面的token与用户相关的数据通通删掉
  //我们通过调用pina仓库里的layOut方法来实现这两步
  useUserStore().logOut()
  //清空token方便路由跳转
  useUserStore().storeToken=''
  //第三步路由跳转
  $router.push({path:'/login',query:{
    redirect:$route.path
  }})
  console.log(useUserStore().storeToken);
  
}
//根据token请求头像,用户名
let userHead=ref()
let userName=ref()
onMounted(async ()=>{
//页面加载完毕立刻拿到userData数据
const userData=await useUserStore().getUserData()
userHead.value=userData.data.checkUser.avatar
userName.value=userData.data.checkUser.userName
useUserStore().userName=userName.value
useUserStore().avator=userHead.value
})


</script>

<style lang="less" scoped>
    .right{
        display: flex;
        align-items: center;
        margin-right: 15px;
       
    }
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>