<template>
    <div  ref="DOM" @scroll="Scroll">
        <div class="top">
        <TopLeft style="margin-right: 14px;min-width:370px"></TopLeft>
        <div>
            <TopRight></TopRight>
            <BottomRight></BottomRight>
        </div>
        </div>
     <DomesticTravel></DomesticTravel> 
     <OverseaTravel></OverseaTravel>
     <Coorparate></Coorparate> 
     <bottom></bottom>
     <bottomComponent></bottomComponent>
     <Transition>
        <BackToTop @click="toTop" v-show="dis" style="transition: all 0.3s ease;"></BackToTop>
    </Transition> 
    
    </div>
   
</template>

<script setup lang="ts">
import bottomComponent from '@/components/bottomComponent.vue';
import BottomRight from '@/components/travel/Home/bottomRight.vue';
import Coorparate from '@/components/travel/Home/coorparate.vue';
import DomesticTravel from '@/components/travel/Home/DomesticTravel/DomesticTravel.vue';
import OverseaTravel from '@/components/travel/Home/oversea/overseaTravel.vue';
import TopLeft from '@/components/travel/Home/topLeft.vue';
import TopRight from '@/components/travel/Home/topRight.vue';
import bottom from '@/components/travel/bottom.vue';
import BackToTop from '@/components/travel/backToTop.vue';
import {ref } from 'vue';
//二级路由的Dom元素
let DOM=ref()
const toTop=()=>{
  DOM.value.scrollTo({
    top:0,
    behavior:'smooth'
  })
}
//距离顶部的距离
let dis=ref()
const Scroll=()=>{
dis.value=DOM.value.scrollTop
    
}



</script>

<style lang="less" scoped>
.top{
    width: 100%;
    display: flex;
    justify-content: space-between;
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