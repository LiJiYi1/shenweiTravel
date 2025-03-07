<template>
    <div>
    <div>
        <el-card class="search">
        <!-- 买哪个国家的火车票 -->
        <el-tabs class="demo-tabs"  v-model="activeName">
            <el-tab-pane label="欧洲" name="first" >  
                <PosComponent :country="activeName"></PosComponent>
                <TimeComponent style="margin-top: 20px;"></TimeComponent>
                <SelectNum style="margin-top: 20px;"></SelectNum>
             </el-tab-pane>
            <el-tab-pane label="中国台湾" name="second" >
                <PosComponent  :country="activeName"></PosComponent>
                <TimeComponent style="margin-top: 20px;"></TimeComponent>
                <SelectNum style="margin-top: 20px;"></SelectNum>
            </el-tab-pane>
             <el-tab-pane label="日本" name="third" >
                <PosComponent  :country="activeName"></PosComponent>
                <TimeComponent style="margin-top: 20px;"></TimeComponent>
                <SelectNum style="margin-top: 20px;"></SelectNum>
             </el-tab-pane>
        </el-tabs>
        <!-- 诗句 -->
        <el-card @click="scene" class="poetry">
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
        <el-button @click="searchTrainTicket" :color="color" style="width: 200px;height:60px;margin-left:calc(50% - 100px);border-radius:20px;margin-top:20px">搜索火车票</el-button>
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
import SelectNum from '@/components/train/selectNum.vue';
import TimeComponent from '@/components/train/timeComponent.vue';
import PosComponent from '@/components/train/posComponent.vue';
import { ElMessage } from 'element-plus';
let {color}=storeToRefs(useColorStore())
//当前时间
let time=ref(moment().format("YYYY.MM"))
let time1=ref(moment().format("DD"))
let timer=ref()
//当前是哪个国家
const activeName = ref('first')

const searchTrainTicket=()=>{
    if(activeName.value==='first'){
        window.open(`https://www.klook.cn/zh-CN/rails-4/364891-europe/search/?date_range_count=334&origin_position_name=%E4%BC%A6%E6%95%A6&origin_position=a646d121-29b6-44c0-ac72-67f4a6b487d8&destination_position_name=%E5%B7%B4%E9%BB%8E&destination_position=b8ae1fe5-d786-4efb-9c17-6c78d493fa9a&departure_date=2025-03-22&departure_time=00%3A00&passengers=%5B%7B%22count%22%3A1,%22passenger_type%22%3A%22adult%22,%22name%22%3A%22%E6%88%90%E4%BA%BA%22,%22ages%22%3A%5B%5D%7D%5D&spm=Mobility_Aggregate.SearchBtn&clickId=3ea6115eb4`)
    }
    else if(activeName.value==='second'){
        window.open(`https://www.klook.cn/zh-CN/rails-24/1014-taiwan/search/?date_range_count=60&origin_position_name=%E5%8F%B0%E5%8C%97%E7%AB%99&origin_position=7dbbbab1-cde7-446d-7899-76cd15156dff&destination_position_name=%E5%B7%A6%E8%90%A5%E7%AB%99&destination_position=b91ce598-b532-4e76-5b23-dcb12e59fb0a&departure_date=2025-03-08&passengers=%5B%5D&spm=Mobility_Aggregate.SearchBtn&clickId=8377c8bd28`)
    }
    else if(activeName.value==='third'){
        window.open(`https://www.klook.cn/zh-CN/rails-32/1012-japan/search/?date_range_count=90&origin_position_name=%E4%B8%9C%E4%BA%AC&origin_position=99be1154-e69d-44cf-8fc4-8affe6e446a6&destination_position_name=%E5%A4%A7%E9%98%AA&destination_position=8b4e5d2e-21ff-4488-b734-d55676a2ec1e&departure_date=2025-03-14&passengers=%5B%5D&spm=Mobility_Aggregate.SearchBtn&clickId=2626f50921`)
    }
    else{
           ElMessage({
    message: '缺少必填表单数据!',
    type: 'warning',
  })
    }
}
const scene=()=>{
    window.open('https://travelsearch.fliggy.com/index.htm?spm=181.11358650.beautiful.d0.32cb223e0te9xc&searchType=product&keyword=哈尔滨冰雪大世界')
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