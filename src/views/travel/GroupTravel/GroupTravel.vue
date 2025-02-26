<template>
    <div>
        <div style="display: flex;justify-content:space-between">
            <TopLeft style="min-width:320px;margin-right:20px" @show="isShow"></TopLeft>
            <TopRight></TopRight>
            <HotDetai @mouseover="over" @mouseleave="leave" v-show="show1"  style=" position: absolute;left: 340px;"></HotDetai>
            <FeiDetial @mouseover="over1" @mouseleave="leave1" v-show="show2" style=" position: absolute;left: 340px;"></FeiDetial>
            <EuropeDetail @mouseover="over2" @mouseleave="leave2" v-show="show3" style=" position: absolute;left: 340px;"></EuropeDetail>
            <JapnDetail @mouseover="over3" @mouseleave="leave3" v-show="show4" style=" position: absolute;left: 340px;"></JapnDetail>
        </div>
        <DomesticTravel style="margin-top:60px"></DomesticTravel>
        <OverseaTravel style="margin-top:60px"></OverseaTravel>
        <BottomComponent></BottomComponent>
    </div>
</template>

<script setup lang="ts">
import DomesticTravel from '@/components/travel/Group/Domestic/DomesticTravel.vue';
import HotDetai from '@/components/travel/leftBar/Detail/HotDetai.vue';
import BottomComponent from '@/components/bottomComponent.vue';
import TopLeft from '@/components/travel/leftBar/topLeft.vue';
import TopRight from '@/components/travel/Group/topRight.vue';
import OverseaTravel from '@/components/travel/Group/oversea/OverseaTravel.vue';
import { ref } from 'vue';
import FeiDetial from '@/components/travel/leftBar/Detail/FeiDetial.vue';
import EuropeDetail from '@/components/travel/leftBar/Detail/EuropeDetail.vue';
import JapnDetail from '@/components/travel/leftBar/Detail/JapnDetail.vue';
//是否展示
let show1=ref(false)
let show2=ref(false)
let show3=ref(false)
let show4=ref(false)
//从子组件拿到是否显示的数据
const isShow=(e:boolean[])=>{
   show1.value=e[0].value
   show2.value=e[1].value
   show3.value=e[2].value
   show4.value=e[3].value
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
</script>

<style lang="less" scoped>

</style>