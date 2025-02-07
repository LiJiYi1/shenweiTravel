<template>
      <!-- 侧边栏 -->
      <div class="left_bar">
           <!-- logo -->
        <logoComponent class="logo" :class="{fold:isCollapse}"></logoComponent>
       <el-row class="tac">
     <el-menu
     
        class="el-menu-vertical-demo"
        :class="{fold:isCollapse}"
        :default-active="$route.path"
        :router="true"
        :collapse="isCollapse"
      >
        <el-menu-item index="/home">
          <el-icon><HomeFilled /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/bigScreen">
          <el-icon><Monitor /></el-icon>
          <span>大屏可视化</span>
        </el-menu-item>
        <el-sub-menu index="/permission">
          <template #title>
            <el-icon><Lock /></el-icon>
            <span>权限管理</span>
          </template>
            <el-menu-item index="/permission/userCharge"><el-icon><User/></el-icon>用户管理</el-menu-item>
            <el-menu-item index="/permission/roleCharge"><el-icon><UserFilled /></el-icon>角色管理</el-menu-item>
            <el-menu-item index="/permission/menuCharge"><el-icon><Menu/></el-icon>菜单管理</el-menu-item>
     
        </el-sub-menu>
        <el-sub-menu index="/goodsCharge">
          <template #title>
            <el-icon><ShoppingBag /></el-icon>
            <span>商品管理</span>
          </template>
            <el-menu-item index="/goodsCharge/brandCharge"><el-icon><ShoppingCart /></el-icon>品牌管理</el-menu-item>
            <el-menu-item index="/goodsCharge/attributeCharge"><el-icon><QuestionFilled /></el-icon>属性管理</el-menu-item>
            <el-menu-item index="/goodsCharge/SPUCharge"><el-icon><Menu /></el-icon>SPU</el-menu-item>
            <el-menu-item index="/goodsCharge/SKUCharge"><el-icon><Menu /></el-icon>SKU</el-menu-item>
        </el-sub-menu>
      
      </el-menu>
        </el-row>
         </div>
      <!-- 顶部栏 -->
     <div class="top_bar" :class="{fold:isCollapse}"> 
      <topBar></topBar>
      </div>
      <!-- 内容区加个动画效果,这是一个二级路由的路由出口-->
      <RouterView v-slot="{ Component }" class="main" :class="{fold:isCollapse}" v-if="flag">
         <transition>
             <component :is="Component" />
         </transition>
      </RouterView> 

     <!-- 暗黑模式控制的抽屉 -->
  <el-drawer v-model="drawer"  :with-header="false">
    <h4>主题设置</h4>
      <div class="innerBox">
         <div class="dark">
        <div class="title">暗黑模式</div>
        <el-switch
    v-model="dark"
    :active-icon="Moon" 
    :inactive-icon="Sunny"
    @change="changeDark"
    inline-prompt
    style="--el-switch-on-color:#000000 ; --el-switch-off-color: #b2afb5;height:5vh;width:50px;"
         />
      </div> 
      
    </div>
     </el-drawer>
 
</template>

<script setup lang="ts">
//import { RouterView } from 'vue-router';
import logoComponent from '@/components/logoComponent.vue';
import topBar from '@/components/topBar/topBar.vue';
import { useRoute,RouterView  } from 'vue-router';
import {ref,provide, type Ref,watch,nextTick,onMounted} from 'vue';
import { useRefreshStore } from '@/store/modules/refresh';
import { Moon, Sunny } from '@element-plus/icons-vue'
//暗黑模式开关
let dark:Ref<boolean>=ref(JSON.parse(localStorage.getItem('dark') as string)||false)
onMounted(()=>{
//刷新时我们要从本地拿到黑暗模式的状态,实现一个黑暗持久化
let html=document.documentElement
let darkStyle=JSON.parse(localStorage.getItem('dark') as string)
//根据本地存储的状态来判断
if(darkStyle){
html.className='dark'
}
else{
  html.className=''
}
})
//Switch开关切换黑暗模式
const changeDark=()=>{
//点击时如果有上次存储的状态,我们先给他清除
if(localStorage.getItem('dark'))localStorage.removeItem('dark')
//没有存储状态之后我们再存储当前状态
const isDark=JSON.stringify(dark.value)
localStorage.setItem('dark',isDark)
//判断是不是暗黑状态
let html=document.documentElement
if(dark.value){
html.className='dark'
}
else{
  html.className=''
}
}
//拿到路由相关数据
let $route=useRoute()
//暗黑模式控制抽屉是否打开
let drawer = ref(false)
//向孙子组件提供数据
provide("drawer",drawer)
//利用provide向孙子组件topBarleft传递一个数据
let isCollapse:Ref<boolean>=ref(false)
defineExpose({isCollapse,drawer})
provide("isCollapse",isCollapse)
//创建一个是否刷新的响应式对象
let flag=ref(true)
//监听仓库数据的变化
watch(()=>useRefreshStore().refresh,()=>{
  //仓库数据变化以后刷新的状态改为false,利用v-if销毁数据
  flag.value=false
  //响应式数据改变,立即重新加载模板
  nextTick(()=>{
    flag.value=true
  })
})
// const handleOpen = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)

// }
// const handleClose = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)

// }
</script>

<style lang="less" scoped>
div{
  width: 100%;
  
  .left_bar{
    width:@left_bar_width;
    .logo{
      width:@left_bar_width;
      transition: all 0.6s;
      white-space: nowrap;
      overflow: hidden;
      &.fold{
      width: @fold_length;
      overflow: hidden;
    }
    }
    .tac{
        position: absolute;
      top:@left_logo_height;
      color: white;
      height: calc(100vh - @left_logo_height);
      width:@left_bar_width ;
      z-index: 0;
      .el-menu-vertical-demo{
      border-right: none;
      width: @left_bar_width ;
      transition: all 0.6s;
     overflow: hidden;
      &.fold{
        width: 50px;
      }
    }
    }
  }
  .top_bar{
    justify-content: space-around;
    position:fixed;
    top:0px;
    left: @left_bar_width;
    width: calc(100% - @left_bar_width);
    height: @top_bar_height;
    transition: all 0.6s;
    &.fold{
    left:@fold_length;
    width: calc(100% - @fold_length);
  }
  }
  .main{
    position: absolute;
    top:@top_bar_height;
    left:@left_bar_width;
    width: calc(100% - @left_bar_width - 40px );
    height:calc(100vh - @top_bar_height - 40px) ;
    padding:20px;
    overflow: auto;
    transition: all 0.6s;
    &.fold{
      left:@fold_length;
      width: calc(100% - @fold_length - 40px);
     
    }
  }
}
.innerBox{
  margin-top: 20px;
  height: 5vh;
  .dark{
  display: flex;
  justify-content: space-between;
  height: 5vh;
  line-height: 5vh;
  }
 
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.6s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>