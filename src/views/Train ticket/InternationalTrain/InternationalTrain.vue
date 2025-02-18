<template>
    <div>
    <div>
        <el-card class="search">
            <!-- 买哪个国家的火车票 -->
        <el-tabs class="demo-tabs"  v-model="activeName">
            <el-tab-pane label="欧洲" name="first">
                <OnOrTwo @getVal="emit" :num="oneOrtwo"></OnOrTwo>
                <PosComponent style="margin-top: 20px;"></PosComponent>
                <TimeComponent style="margin-top: 20px;"></TimeComponent>
                <SelectNum style="margin-top: 20px;"></SelectNum>
             </el-tab-pane>
            <el-tab-pane label="韩国" name="second">
                <OnOrTwo :num="oneOrtwo"></OnOrTwo>
                <PosComponent style="margin-top: 20px;"></PosComponent>
                <TimeComponent style="margin-top: 20px;"></TimeComponent>
                <SelectNum style="margin-top: 20px;"></SelectNum>
            </el-tab-pane>
            <el-tab-pane label="中国港澳台" name="third">
                <OnOrTwo :num="oneOrtwo"></OnOrTwo>
                <PosComponent style="margin-top: 20px;"></PosComponent>
                <TimeComponent style="margin-top: 20px;"></TimeComponent>
                <SelectNum style="margin-top: 20px;"></SelectNum>
            </el-tab-pane>
             <el-tab-pane label="日本" name="fourth">
                <OnOrTwo :num="oneOrtwo"></OnOrTwo>
                <PosComponent style="margin-top: 20px;"></PosComponent>
                <TimeComponent style="margin-top: 20px;"></TimeComponent>
                <SelectNum style="margin-top: 20px;"></SelectNum>
             </el-tab-pane>
        </el-tabs>

  
        <el-button :color="color" style="width: 200px;height:60px;margin-left:225px;border-radius:20px;margin-top:20px">搜索火车票</el-button>
      </el-card>
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
    </div>
 
    <RightestComponent style="position: absolute;right:20px;top:20px;z-index:-1;"></RightestComponent>
    <TicketRecommon></TicketRecommon>
     <BottomComponent></BottomComponent>
    </div>
   
</template>

<script setup lang="ts">
import BottomComponent from '@/components/bottomComponent.vue';
import RightestComponent from '@/components/topBar/RightestComponent.vue';
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
const emit=(e)=>{
    console.log(e);
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
    width: 700px;
    height: 400px;
    border-radius: 18px;
    .demo-tabs{
        justify-self: center;
        width: 600px;
    }
}
.poetry{
    user-select: none;
    margin-left: 20px;
    position: absolute;
    left:720px;
    top:20px;
    width: 500px;
    height: 400px;
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
             top: 270px;
             right: 60px;
              z-index: 2;
            margin-top: 65px;
            line-height: 25px;
        }
        .cover{     
    position: absolute;
    top: -1px;
    right: 0px;
    z-index: 1;
    width: 298px;
    height: 402px;
    border-radius: 18px;
    opacity: 1;
    background: linear-gradient(270deg, rgba(0, 0, 0, .8), transparent 100%);
        }
    }
}
</style>