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
        :active-text-color="color"
         >     <!-- 滚动条防止超出页面 -->
        <el-scrollbar height="91vh">
        <!-- 主页导航 -->
        <el-menu-item index="/home">
          <el-icon><HomeFilled /></el-icon>
          <span>{{language.home}}</span>
        </el-menu-item>
        <!-- 大屏导航 -->
        <el-menu-item index="/bigScreen">
          <el-icon><Monitor /></el-icon>
          <span>{{language.BigScreen}}</span>
        </el-menu-item>
        <!-- 酒店导航 -->
        <el-sub-menu index="/hotel">
          <template #title>
            <el-icon><OfficeBuilding/></el-icon>
            <span>{{language.hotel}}</span>
          </template>
            <el-menu-item index="/hotel/Demostic"><el-icon><MapLocation /></el-icon>{{language.Domestic}}</el-menu-item>
            <el-menu-item index="/hotel/Overseas"><el-icon><Location /></el-icon>{{language.Overseas}}</el-menu-item>
        </el-sub-menu>
        <!-- 机票导航 -->
        <el-sub-menu index="/airTicket">
          <template #title>
            <el-icon><Promotion /></el-icon>
            <span>{{language.air}}</span>
          </template>
            <el-menu-item index="/airTicket/DomesticAir"><el-icon><MapLocation /></el-icon>{{language.DomesticAir}}</el-menu-item>
            <el-menu-item index="/airTicket/InternationalAir"><el-icon><Location/></el-icon><p style="white-space: nowrap;overflow:hidden;text-overflow:ellipsis">{{language.International}}</p></el-menu-item>
        </el-sub-menu>
        <!-- 火车票导航 -->
        <el-sub-menu index="/trainTicket">
          <template #title>
            <el-icon><Van /></el-icon>
            <span>{{language.train}}</span>
          </template>
            <el-menu-item index="/trainTicket/DomesticTrain"><el-icon><MapLocation /></el-icon>{{language.Train}}</el-menu-item>
            <el-menu-item index="/trainTicket/InternationalTrain"><el-icon><Location/></el-icon><p style="white-space: nowrap;overflow:hidden;text-overflow:ellipsis">{{language.OverseasTrain}}</p></el-menu-item>
        </el-sub-menu>
        <!-- 汽车和船票导航 -->
        <el-sub-menu index="/busBoat">
          <template #title>
           <el-icon><Ship /></el-icon>
            <span>{{language.carShip}}</span>
          </template>
            <el-menu-item index="/busBoat/bus"><el-icon><Guide /></el-icon>{{language.bus}}</el-menu-item>
            <el-menu-item index="/busBoat/boat"><el-icon><Ship /></el-icon>{{language.boat}}</el-menu-item>
        </el-sub-menu>
        <!-- 租车 -->
        <el-menu-item index="/RentCar/RentCar2">
        
            <el-icon><Share /></el-icon>
            <span>{{language.RentCar}}</span>
 
        </el-menu-item>
        <!-- 景点门票 -->
        <el-menu-item index="/ticket/ticket1">
            <el-icon><Ticket /></el-icon>
            <span>{{language.ticket}}</span>
 
        </el-menu-item>
        <!-- 旅游 -->
        <el-sub-menu index="/travel">
          <template #title>
            <el-icon><Flag /></el-icon>
            <span>{{language.Travel}}</span>
          </template>
            <el-menu-item index="/travel/travelHome"><el-icon><HomeFilled /></el-icon>{{language.TravelHome}}</el-menu-item>
            <el-menu-item index="/travel/groupTravel"><el-icon><Camera /></el-icon>{{language.Group}}</el-menu-item>
            <el-menu-item index="/travel/PrivateTravel"><el-icon><VideoCamera /></el-icon>{{language.Private}}</el-menu-item>
            <el-menu-item index="/travel/FreeTravel"><el-icon><Bicycle/></el-icon>{{language.Free}}</el-menu-item>
            <el-menu-item index="/travel/CustomizedTravel"><el-icon><Calendar /></el-icon>{{language.Customized}}</el-menu-item>
        </el-sub-menu>
        <!-- 全球购 -->
        <el-sub-menu index="/Global">
          <template #title>
            <el-icon><ShoppingBag /></el-icon>
            <span>{{language.shopping}}</span>
          </template>
            <el-menu-item index="/Global/purChase"><el-icon><ShoppingCart /></el-icon>{{language.purchase}}</el-menu-item>
            <el-menu-item index="/Global/UnionPay"><el-icon><WalletFilled /></el-icon>{{language.UnionPay}}</el-menu-item>
            <el-menu-item index="/Global/exchangeMoney"><el-icon><Wallet /></el-icon>{{language.money}}</el-menu-item>
        </el-sub-menu>
        <!-- 关于神威 -->
        <el-menu-item index="/about">
          <el-icon><Notebook /></el-icon>
          <span>{{language.about}}</span>
        </el-menu-item>
        </el-scrollbar>
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
      
     <!-- 主题设置抽屉 -->
     <el-drawer  v-model="drawer"  :with-header="false">
    <h4>{{language.themes}}</h4>
      <div class="innerBox">
        <!-- 暗黑模式控制 -->
        <div class="dark">
        <div class="title">{{language.dark}}</div>
        <el-switch
        v-model="dark"
        :active-icon="Moon" 
        :inactive-icon="Sunny"
        @change="changeDark"
        inline-prompt
        style="--el-switch-on-color:#000000 ; --el-switch-off-color: #b2afb5;height:5vh;width:50px;"
         />
        </div> 
        <div class="searchColor">
          <div class="title">{{language.color}}</div>
          <el-color-picker 
          v-model="color" 
          @change="changeColor"
          />
        </div>
        <!-- 语言设置 -->
        <h4>{{language.language}}</h4>
        <LanguageComponent class="language"></LanguageComponent>
       
      
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
import { Location, MapLocation, Moon, Sunny } from '@element-plus/icons-vue'
import LanguageComponent from './languageComponent.vue';
import { useColorStore } from '@/store/modules/color';
import { storeToRefs } from 'pinia';
//颜色变量
let colorStore=useColorStore()
let {color}=storeToRefs(colorStore)
const changeColor=()=>{
 colorStore.change(color.value)
}
//引入能切换语言的文字
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { computed } from 'vue'

const language={
  home:computed(() => t('home')),
  BigScreen:computed(() => t('BigScreen')),
  dark:computed(() => t('dark')),
  themes: computed(() => t('themes')),
  language: computed(() => t('language')),
  hotel:computed(() => t('hotel')),
  air:computed(() => t('air')),
  train:computed(() => t('train')),
  carShip:computed(() => t('carShip')),
  ticket:computed(() => t('ticket')),
  RentCar:computed(() => t('RentCar')),
  Travel:computed(() => t('Travel')),
  about:computed(() => t('about')),
  shopping:computed(() => t('shopping')),
  money:computed(()=>t('money')),
  UnionPay:computed(()=>t('UnionPay')),
  purchase:computed(()=>t('purchase')),
  Domestic:computed(()=>t('Domestic')),
  Overseas:computed(()=>t('Overseas')),
  DomesticAir:computed(()=>t('DomesticAir')),
  International:computed(()=>t('International')),
  color:computed(()=>t('color')),
  Train:computed(()=>t('Train')),
  OverseasTrain:computed(()=>t('OverseasTrain')),
  bus:computed(()=>t('bus')),
  boat:computed(()=>t('boat')),
  TravelHome:computed(()=>t('TravelHome')),
  Group:computed(()=>t('Group')),
  Private:computed(()=>t('Private')),
  Free:computed(()=>t('Free')),
  Customized:computed(()=>t('Customized'))
}

//暗黑模式开关
let dark:Ref<boolean>=ref(JSON.parse(localStorage.getItem('dark') as string)||false)
onMounted(()=>{
// console.log(111);
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
      user-select: none;
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
       
      &.fold{
        width: 49.1px;
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
    z-index: 10
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
  h4{
    margin-top:20px;
  }
  .language{
    margin-top: 30px;
  }
  .searchColor{
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