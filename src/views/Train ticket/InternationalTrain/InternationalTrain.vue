<template>
    <div>
    <div >
        <el-card class="search" >
        <!-- 买哪个国家的火车票 -->
        <el-tabs class="demo-tabs"  v-model="activeName">
            <el-tab-pane label="欧洲" name="first" lazy="true" >  
    
                <PosComponent  @getPos3="pos3" :country="activeName"></PosComponent>
                <TimeComponent @getTime3="Time3"  style="margin-top: 20px;"></TimeComponent>
                <SelectNum @getNum="getPersonNum"  style="margin-top: 20px;"></SelectNum>
             </el-tab-pane>
            <el-tab-pane label="中国台湾" name="second" lazy="true">
                <PosComponent @getPos3="pos3"  :country="activeName"></PosComponent>
                <TimeComponent @getTime3="Time3" style="margin-top: 20px;"></TimeComponent>
            </el-tab-pane>
             <el-tab-pane label="日本" name="third" lazy="true">
                <PosComponent @getPos3="pos3"  :country="activeName"></PosComponent>
                <TimeComponent @getTime3="Time3" style="margin-top: 20px;"></TimeComponent>
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
//出发地与目的地
//欧洲
let start1=ref()
let end1=ref()
let num=ref('1成人')
let num1=ref('1青年')
let num2=ref('1老人')
//中国台湾
let start2=ref()
let end2=ref()
//日本
let start3=ref('')
let end3=ref('')
//出发日期
let date1=ref(moment().format("YYYY-MM-DD"))
let date2=ref(moment().format("YYYY-MM-DD"))
let date3=ref(moment().format("YYYY-MM-DD"))
const searchTrainTicket=()=>{
    if(activeName.value==='first'&&start1.value&&end1.value&&date1.value){
    console.log(num.value.slice(0,1));
        
    const start=new Date(date1.value)
    let year=start.getFullYear()
    let month=start.getMonth()+1
    let date=start.getDate()
    let startTime=`${year}-${month}-${date}`
    window.open(`https://www.klook.cn/zh-CN/rails-4/364891-europe/search/?date_range_count=334&origin_position_name=${start1.value}&origin_position=a646d121-29b6-44c0-ac72-67f4a6b487d8&destination_position_name=${end1.value}&destination_position=b8ae1fe5-d786-4efb-9c17-6c78d493fa9a&departure_date=${startTime}&departure_time=00%3A00&passengers=%5B%7B%22count%22%3A${num.value.slice(0,1)},%22passenger_type%22%3A%22adult%22,%22name%22%3A%22%E6%88%90%E4%BA%BA%22,%22ages%22%3A%5B%5D%7D,%7B%22count%22%3A${num1.value.slice(0,1)},%22passenger_type%22%3A%22youth%22,%22name%22%3A%22%E9%9D%92%E5%B9%B4%22,%22ages%22%3A%5B5%5D%7D,%7B%22count%22%3A${num2.value.slice(0,1)},%22passenger_type%22%3A%22senior%22,%22name%22%3A%22%E8%80%81%E5%B9%B4%22,%22ages%22%3A%5B%5D%7D%5D&spm=Mobility_Aggregate.SearchBtn&clickId=3ea6115eb4&return_date=&return_time=`)
    }
    else if(activeName.value==='second'&&start2.value&&end2.value&&date2.value){
    const start=new Date(date2.value)
    let year=start.getFullYear()
    let month=start.getMonth()+1
    let date=start.getDate()
    let startTime=`${year}-${month}-${date}`
    window.open(`https://www.klook.cn/zh-CN/rails-24/1014-taiwan/search/?date_range_count=60&origin_position_name=${start2.value}&origin_position=7dbbbab1-cde7-446d-7899-76cd15156dff&destination_position_name=${end2.value}&destination_position=b91ce598-b532-4e76-5b23-dcb12e59fb0a&departure_date=${startTime}&passengers=%5B%5D&spm=Mobility_Aggregate.SearchBtn&clickId=8377c8bd28`)
    }
    else if(activeName.value==='third'&&start3.value&&end3.value&&date3.value){
    const start=new Date(date3.value)
    let year=start.getFullYear()
    let month=start.getMonth()+1
    let date=start.getDate()
    let startTime=`${year}-${month}-${date}`
    window.open(`https://www.klook.cn/zh-CN/rails-32/1012-japan/search/?date_range_count=90&origin_position_name=${start3.value}&origin_position=99be1154-e69d-44cf-8fc4-8affe6e446a6&destination_position_name=${end3.value}&destination_position=8b4e5d2e-21ff-4488-b734-d55676a2ec1e&departure_date=${startTime}&passengers=%5B%5D&spm=Mobility_Aggregate.SearchBtn&clickId=2626f50921`)
    }
    else{
           ElMessage({
    message: '缺少必填表单数据!',
    type: 'warning',
  })
    }
}
interface input{
start:string,
end:string
}
const pos3=(pos:input)=>{
if(activeName.value==='first'){
start1.value=pos.start
end1.value=pos.end
}
if(activeName.value==='second'){
    console.log(222);
    
start2.value=pos.start
end2.value=pos.end
}
if(activeName.value==='third'){
start3.value=pos.start
end3.value=pos.end
}
}
const Time3=(Time:string)=>{
    if(activeName.value==='first'){
        date1.value=Time
    }
       if(activeName.value==='second'){
        date2.value=Time
    }
    if(activeName.value==='third'){
        date3.value=Time
    }
}
const getPersonNum=(Num:string[])=>{
num.value=Num[0]
num1.value=Num[1]
num2.value=Num[2]
console.log(num1.value,num2.value,num.value);

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
    overflow:visible;
    border-radius: 18px;
    .demo-tabs{
        justify-self: center;
        width: 100%;
        overflow: visible !important;
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
:deep(.el-tabs__content) {
overflow: visible;
}
:deep(.el-tabs__item.is-active) {
  color:#ffe033; /* 修改激活标签文字颜色 */
}
:deep(.el-tabs__item:hover) {
  color: #ffe033; /* 悬停颜色 */
}
:deep(.el-tabs__active-bar) {
  background-color: #ffe033; /* 修改激活标签下划线颜色 */
}
</style>