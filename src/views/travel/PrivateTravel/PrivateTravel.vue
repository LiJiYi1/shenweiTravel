<template>
    <div ref="DOM" @scroll="Scroll">
        <div style="display: flex;justify-content:space-between">
            <div style="display: flex;">
            <TopLeft style="min-width:320px;margin-right:20px" @show="isShow"></TopLeft>
            <TopRight></TopRight>
            </div>
            <HotDetai @mouseover="over" @mouseleave="leave" v-show="show1"  style=" position: absolute;left: 340px;"></HotDetai>
            <FeiDetial @mouseover="over1" @mouseleave="leave1" v-show="show2" style=" position: absolute;left: 340px;"></FeiDetial>
            <EuropeDetail @mouseover="over2" @mouseleave="leave2" v-show="show3" style=" position: absolute;left: 340px;"></EuropeDetail>
            <JapnDetail @mouseover="over3" @mouseleave="leave3" v-show="show4" style=" position: absolute;left: 340px;"></JapnDetail>
            <Heilongjiang @mouseover="over4" @mouseleave="leave4" v-show="show5" style=" position: absolute;left: 340px;"></Heilongjiang>
            <Yunnan @mouseover="over5" @mouseleave="leave5" v-show="show6" style=" position: absolute;left: 340px;"></Yunnan>
            <Hainan @mouseover="over6" @mouseleave="leave6" v-show="show7" style=" position: absolute;left: 340px;"></Hainan>
            <Guangdong @mouseover="over7" @mouseleave="leave7" v-show="show8" style=" position: absolute;left: 340px;"></Guangdong>
        </div>
        <DomesticTravel style="margin-top:60px"></DomesticTravel>
        <OverseaTravel style="margin-top:60px"></OverseaTravel>
        <bottom></bottom>
        <BottomComponent></BottomComponent>
        <Transition>
        <BackToTop @click="toTop" v-show="dis" style="transition: all 0.3s ease;"></BackToTop>
        </Transition> 
    </div>
</template>

<script setup lang="ts">
import DomesticTravel from '@/components/travel/PrivateTravel/Domestic/DomesticTravel.vue';
import HotDetai from '@/components/travel/leftBar/Detail/HotDetai.vue';
import BottomComponent from '@/components/bottomComponent.vue';
import TopLeft from '@/components/travel/leftBar/topLeft.vue';
import TopRight from '@/components/travel/PrivateTravel/topRight.vue';
import OverseaTravel from '@/components/travel/PrivateTravel/oversea/OverseaTravel.vue';
import { ref } from 'vue';
import FeiDetial from '@/components/travel/leftBar/Detail/FeiDetial.vue';
import EuropeDetail from '@/components/travel/leftBar/Detail/EuropeDetail.vue';
import JapnDetail from '@/components/travel/leftBar/Detail/JapnDetail.vue';
import Heilongjiang from '@/components/travel/leftBar/Detail/Heilongjiang.vue';
import Yunnan from '@/components/travel/leftBar/Detail/Yunnan.vue';
import Hainan from '@/components/travel/leftBar/Detail/Hainan.vue';
import Guangdong from '@/components/travel/leftBar/Detail/Guangdong.vue';
import bottom from '@/components/travel/bottom.vue';
import BackToTop from '@/components/travel/backToTop.vue';
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
//是否展示
let show1=ref(false)
let show2=ref(false)
let show3=ref(false)
let show4=ref(false)
let show5=ref(false)
let show6=ref(false)
let show7=ref(false)
let show8=ref(false)
//从子组件拿到是否显示的数据
const isShow=(e:boolean[])=>{
   show1.value=e[0].value
   show2.value=e[1].value
   show3.value=e[2].value
   show4.value=e[3].value
   show5.value=e[4].value
   show6.value=e[5].value
   show7.value=e[6].value
   show8.value=e[7].value
}
//放在弹窗上也不要消失
const over=()=>{
show1.value=true
}
//离开弹窗时消失
const leave=()=>{
show1.value=false
}
const over1=()=>{
show2.value=true
}
const leave1=()=>{
show2.value=false
}
const over2=()=>{
show3.value=true
}
const leave2=()=>{
show3.value=false
}
const over3=()=>{
show4.value=true
}
const leave3=()=>{
show4.value=false
}
const over4=()=>{
show5.value=true
}
const leave4=()=>{
show5.value=false
}
const over5=()=>{
show6.value=true
}
const leave5=()=>{
show6.value=false
}
const over6=()=>{
show7.value=true
}
const leave6=()=>{
show7.value=false
}
const over7=()=>{
show8.value=true
}
const leave7=()=>{
show8.value=false
}
</script>

<style lang="less" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.6s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>