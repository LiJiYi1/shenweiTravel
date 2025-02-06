<template>
      <!-- 侧边栏 -->
      <div class="left_bar">
           <!-- logo -->
        <logoComponent class="logo" :class="{fold:isCollapse}"></logoComponent>
       <el-row class="tac">
     <el-menu
        active-text-color="#ffd04b"
        background-color="#0d012d"
        class="el-menu-vertical-demo"
        :default-active="$route.path"
        text-color="#fff"
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
     <el-drawer v-model="drawer" title="I am the title" :with-header="false">
    <span>Hi there!</span>
     </el-drawer>
</template>

<script setup lang="ts">
//import { RouterView } from 'vue-router';
import logoComponent from '@/components/logoComponent.vue';
import topBar from '@/components/topBar/topBar.vue';
import { useRoute,RouterView  } from 'vue-router';
import {ref,provide, type Ref,watch,nextTick} from 'vue';
import { useRefreshStore } from '@/store/modules/refresh';
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
  height: 100vh;
  .left_bar{
    width:@left_bar_width;
    height: 100vh;
    .logo{
      width:@left_bar_width;
      transition: all 0.6s;
      white-space: nowrap;
      &.fold{
      width: @fold_length;
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
      width: 260px;
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
    background: linear-gradient(#0d012d, #ffffff);
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
    background-color: #ffffff;
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.6s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>