<template>
        <!-- 右侧 -->
        <div class="right">
      <el-tooltip content="购物车" placement="bottom">
         <el-badge :value="12" class="item" style="margin-right: 15px;" >
            <el-button :color="color" :icon="ShoppingCartFull" size="large"  circle /> 
         </el-badge>
      </el-tooltip>
      <!-- 无障碍阅读 -->
      <el-popover :visible="visible" placement="top" :width="320" :show-arrow="false">
         <OldCare @close="close"></OldCare>
      <template #reference>
       <el-tooltip content="无障碍阅读" placement="bottom">
         <el-button @click="visible = true" :color="color" :icon="Help" size="large"  circle /> 
      </el-tooltip>
      </template>
      </el-popover>
      <!-- 联系客服 -->
      <el-popover  placement="top" :width="280">
    <h2>联系客服</h2>
    <el-divider />
    <p>境内:95010<br>
     或 400-830-6666<br>
    中国香港：+852-3008-3295<br>
     中国澳门：+86-21 3406-4888<br>
    中国台湾：+86-21 3406-4888<br>
     其他国家和地区：+86-21-3406-4888</p>
    
    <template #reference>
        <el-button :color="color" :icon="Phone" size="large"  circle /> 
    </template>
      </el-popover>
      <!-- 局部刷新 -->
      <el-tooltip content="局部刷新" placement="bottom">
           <el-button :color="color" :icon="Refresh" size="large" circle @click="refresh"/>
      </el-tooltip>
      <!-- 全屏模式 -->
      <el-tooltip content="全屏模式" placement="bottom">
           <el-button :color="color" :icon="FullScreen" size="large" circle  @click="fullScreen"/>
      </el-tooltip>
      <!-- 设置 -->
      <el-tooltip content="设置" placement="bottom">
          <el-button :color="color" :icon="Setting" size="large" @click="drawer=true" circle /> 
      </el-tooltip>
      <!-- 头像 -->
      <img :src="useUserStore().avator" style=" margin-right: 10px;border-radius:40px;width:40px;height:40px;margin-left: 10px;"/>
      <!-- 下拉退出登录 -->
      <el-dropdown>
    <span class="el-dropdown-link" style="  white-space: nowrap;">
      {{useUserStore().userName}}
    <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <div @click="logout">{{language.logout}}</div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
      </el-dropdown>
    </div>
</template>

<script setup lang="ts">
  import { useRefreshStore } from '@/store/modules/refresh';
  import {Setting, FullScreen, Refresh,ArrowDown, ShoppingCartFull, Phone, Help}from '@element-plus/icons-vue'
  import { useUserStore } from '@/store/modules/user';
  import { onMounted,ref,inject} from 'vue';
  import { useRouter,useRoute } from 'vue-router';
  //引入能切换语言的文字
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
  import { computed } from 'vue'
  import { useColorStore } from '@/store/modules/color';
  import { storeToRefs } from 'pinia';
  import OldCare from '../oldCare/oldCare.vue';
  let {color}=storeToRefs(useColorStore())
  //老年人模式选项是否出现
  const visible = ref(false)
  //关闭老年人模式
  const close=()=>{
    visible.value=false
  }
  const language={
  logout:computed(() => t('logout')),
  }
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