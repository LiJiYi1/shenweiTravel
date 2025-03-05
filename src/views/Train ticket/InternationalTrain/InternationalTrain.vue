<template>
    <div>
    <div>
        <el-card class="search">
        <!-- 单程还是往返 -->
        <OnOrTwo @getVal="emit" :num="oneOrtwo"></OnOrTwo>
        <!-- 买哪个国家的火车票 -->
        <el-tabs class="demo-tabs"  v-model="activeName">
            <el-tab-pane label="欧洲" name="first" >  
                <PosComponent :country="activeName"></PosComponent>
                <TimeComponent style="margin-top: 20px;"></TimeComponent>
                <SelectNum style="margin-top: 20px;"></SelectNum>
             </el-tab-pane>
            <el-tab-pane label="韩国" name="second" >
                <PosComponent  :country="activeName"></PosComponent>
                <TimeComponent style="margin-top: 20px;"></TimeComponent>
                <SelectNum style="margin-top: 20px;"></SelectNum>
            </el-tab-pane>
            <el-tab-pane label="中国港澳台" name="third" >
                <PosComponent  :country="activeName"></PosComponent>
                <TimeComponent style="margin-top: 20px;"></TimeComponent>
                <SelectNum style="margin-top: 20px;"></SelectNum>
            </el-tab-pane>
             <el-tab-pane label="日本" name="fourth" >
                <PosComponent  :country="activeName"></PosComponent>
                <TimeComponent style="margin-top: 20px;"></TimeComponent>
                <SelectNum style="margin-top: 20px;"></SelectNum>
             </el-tab-pane>
        </el-tabs>
        <!-- 诗句 -->
        <el-card class="poetry">
        <div class="right">
        <div class="r-t"> 
            <h1 style="font-size:80px">{{time1}}</h1>
            <div style="border: 6px solid white;padding:10px;width:80px;font-size:20px">{{time}}</div>
        </div>
        <div class="r-b"> 
            <div>冰雪奇缘的现实画卷</div>
            <div style="font-size: 12px;"><el-icon><Location /></el-icon>中国.哈尔滨.哈尔滨冰雪大世界</div>
         </div>
         <div class="cover"></div>
        </div>
      
        </el-card>
        <el-button :color="color" style="width: 200px;height:60px;margin-left:calc(50% - 100px);border-radius:20px;margin-top:20px">搜索火车票</el-button>
      </el-card>
      
    </div>
 
    <TicketRecommon></TicketRecommon>
     <BottomComponent></BottomComponent>
    </div>
   
</template>

<script setup lang="ts">
import BottomComponent from '@/components/bottomComponent.vue';
import moment from 'moment';
import { onMounted,onBeforeUnmount,ref } from 'vue';
import TicketRecommon from '@/components/ticketRecommon.vue';
import { useColorStore } from '@/store/modules/color';
import { storeToRefs } from 'pinia';
import OnOrTwo from '@/components/train/onOrTwo.vue';
import SelectNum from '@/components/train/selectNum.vue';
import TimeComponent from '@/components/train/timeComponent.vue';
import PosComponent from '@/components/train/posComponent.vue';
let {color}=storeToRefs(useColorStore())
//当前时间
let time=ref(moment().format("YYYY.MM"))
let time1=ref(moment().format("DD"))
let timer=ref()
//当前是哪个国家
const activeName = ref('first')
//单程还是往返
let oneOrtwo=ref('1')

//从子组件拿数据
const emit=(e:any)=>{
    //console.log(e);
    oneOrtwo.value=e
}

onMounted(()=>{
//加载时调用一下日期
timer.value=setInterval(()=>{
    time.value=moment().format("YYYY.MM")
    time1.value=moment().format("DD")
},1000)
})
onBeforeUnmount(()=>{
clearInterval(timer.value)
})
  
</script>

<style lang="less" scoped>
.search{
    min-width: 700px;
    width: 60%;
    position: relative;
    overflow: visible;
    border-radius: 18px;
    .demo-tabs{
        justify-self: center;
        width: 90%;
    }
}
.poetry{
    user-select: none;
    margin-left: 20px;
    position: absolute;
    right:-66%;
    top:0px;
    width: 20%;
    min-width: 450px;
    height: 100%;
    background: url('@/assets/train/snow.png') no-repeat;
    background-position-y: -230px;
    background-size:cover;
    border-radius: 18px;
    .right{
        color: white;
        margin-left:300px;
        .r-t{
             position: absolute;
            top: 40px;
            right: 80px;
            z-index: 2;
            color: rgb(255, 255, 255);
        }
        .r-b{
             position: absolute;
             bottom: 20px;
             right: 60px;
              z-index: 2;
            margin-top: 65px;
            line-height: 25px;
        }
        .cover{     
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 1;
    width: 298px;
    height: 100%;
    border-radius: 18px;
    opacity: 1;
    background: linear-gradient(270deg, rgba(0, 0, 0, .8), transparent 100%);
        }
    }
}
:deep(.el-radio.is-bordered.is-checked) {
    border-color:rgb(255, 234, 0);
}
:deep(.el-radio__input.is-checked .el-radio__inner) {
    background: rgb(255, 234, 0);
    border-color: rgb(255, 234, 0);
}
:deep(.el-radio__label){
    color:rgb(255, 234, 0)
}
:deep(.el-radio__input.is-checked+.el-radio__label) {
    color: rgb(255, 234, 0);
}
:deep(.el-input__wrapper) {
  border: none !important;
  box-shadow: none !important;
   background-color: inherit !important;
}
:deep(.el-select .el-select__wrapper) {
  border: none !important;
   box-shadow: none !important;
  background-color: inherit !important;
}
</style>