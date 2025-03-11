<template>
    <div class="container">
        <!-- 按钮 -->
        <div style="display: flex;justify-content:space-between">
        <el-button circle  icon="ZoomIn"  @click="ZoomIn" > 
        </el-button>
        <el-button circle  icon="ZoomOut" @click="ZoomOut" > 
         </el-button>
         <el-button circle  icon="Rank" :class="{active:LineActive}"   @click="Plus" > 
         </el-button>
         <el-button circle :class="{active:MouseActive}"  icon="Mouse"  @click="bigMouse"   > 
         </el-button>
         <!-- 关闭 -->
         <el-button circle   icon="CloseBold" style="color: red;border-color:red"   @click="close">
           
         </el-button>
        </div>
        <!-- 按钮介绍 -->
         <div style="display: flex;justify-content:space-between">
            <p style="margin-left:2px">放大</p>
            <p style="margin-left:-6px">缩小</p>
            <p style="margin-left:-16px" :class="{textActive:LineActive}">辅助线</p>
            <p style="margin-left:-10px" :class="{textActive:MouseActive}">大鼠标</p>
            <p style="width:30px">关闭</p>
         </div>
    </div>
    <!-- 自定义鼠标 -->
      <div class="custom-cursor" ref="cursor" v-show="cursorIsShow">
      </div>
    <!-- 辅助线 -->
    <!-- 水平线 -->
     <div class="crosshair horizontal" ref="horizontal" v-show="lineShow"></div>
     <!-- 垂直线 -->
     <div class="crosshair vertical"  ref="vertical"  v-show="lineShow"></div>

     <!-- <el-slider v-model="scroll" v-show="scale!==1" :max="1200"  class="slider" @input="slide" /> -->
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
//滚动条滑块
//const scroll=ref(0)
//主页的dom元素
const Main=ref()
const $emit=defineEmits(['close'])
//缩放时的缩进
let indentTop=ref(0)
let indentLeft=ref(0)
//放大倍数
let scale=ref(1)
//大鼠标
const cursor=ref()
const cursorIsShow=ref(false)
//大鼠标按钮激活状态
const MouseActive=ref(false)
//辅助线
const lineShow=ref(false)
// 获取十字线元素
const horizontal = ref();
const vertical = ref();
//辅助线激活状态
const LineActive=ref(false)
//放大
const ZoomIn=()=>{   
if(scale.value<1.3){
scale.value+=0.2
  }
Main.value.style.zoom = `${scale.value}`;
Main.value.style.transform=`scale(${scale.value})`
Main.value.style.transformOrigin="50% 50% "
Main.value.style.width=''
}
//缩小
const ZoomOut=()=>{   
  if(scale.value>1){
     scale.value-=0.2
  }
Main.value.style.transform=`scale(${scale.value})`
Main.value.style.transformOrigin="0 0 "
Main.value.style.width=''
}
//辅助线
const Plus=()=>{
   //让辅助线可见
   lineShow.value=!lineShow.value
   //辅助线按钮激活状态取反
   LineActive.value=!LineActive.value
}
//大鼠标
const bigMouse=()=>{
   //让大鼠标可见
   cursorIsShow.value=!cursorIsShow.value
   //大鼠标按钮激活状态取反
   MouseActive.value=!MouseActive.value
}

const close=()=>{
$emit('close',{close:false})
//关闭时把所有参数都变回非老年人模式
Main.value.style.zoom = `1`;
Main.value.style.marginTop=`0px`
Main.value.style.marginLeft=`0px`
Main.value.style.width=''
scale.value=1
indentLeft.value=0
indentTop.value=0
}
// //滑块滑动
// const slide=()=>{
//   console.log(Main.value);
  
// Main.value.scrollLeft=scroll.value
// console.log(Main.value.scrollLeft,scroll.value); 
// }
onMounted(()=>{
Main.value=document.getElementsByClassName('main')[0]
// 监听鼠标移动事件
document.addEventListener('mousemove', (e) => {
  if(e.clientX>1470||e.clientY>660){
    cursorIsShow.value=false
  }
  else if(e.clientX<1470&&MouseActive.value===true){
     cursorIsShow.value=true
  }
  if(e.clientX>1520||e.clientY>720){
    lineShow.value=false
  }
  else if(e.clientX<1520&&LineActive.value===true){
     lineShow.value=true
  }
      // 更新自定义鼠标指针的位置
      cursor.value.style.left = `${e.clientX}px`;
      cursor.value.style.top = `${e.clientY}px`;

      horizontal.value.style.transform = `translateY(${e.clientY}px)`;
      vertical.value.style.transform = `translateX(${e.clientX}px)`;
    });
})
</script>

<style lang="less" scoped>
.container{
   width: @left_bar_width;
   p{
      width: 42px;
      
   }
}
.custom-cursor {
     cursor: none;
      z-index: 1000;
      position: absolute;
      width: 80px;
      height: 80px;
      background: url('@/assets/oldCare/cursor.svg');
      background-size: cover;
      pointer-events:  none; /* 防止干扰点击事件 */
      transform: translate(-18%, -18%); /* 使指针居中 */
      transition: transform 0.1s ease; /* 平滑移动 */
    }
  /* 十字线样式 */
    .crosshair {
      position: absolute;
      pointer-events: none; /* 防止十字线干扰鼠标事件 */
    }
    /* 水平线 */
    .horizontal {
      width: 99vw; /* 覆盖整个页面宽度 */
      height: 8px;
      background-color: red;
      top: 0;
      left: 0;
    }
    /* 垂直线 */
    .vertical {
      width: 8px;
      height: 99vh; /* 覆盖整个页面高度 */
      background-color: red;
      top: 0;
      left: 0;
    }
    .active{
      background: #FFD800;
      color: rgb(60, 119, 8);
    }
    .textActive{
      color:#FFD800
    }
.slider{
  position: absolute;
  width: 1220px;
  left:282px;
  top:66px
}
</style>