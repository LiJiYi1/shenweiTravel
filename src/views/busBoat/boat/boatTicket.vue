<template>
    <div>
        <div style="display: flex;">
        <el-card class="search">
        <!-- 城市选择 -->
        <TopComponent @getCity="City" @click="stop"></TopComponent>
        <!-- 日期选择 -->
        <BottomComponent @getTime="Times" style="margin-top:20px;"></BottomComponent>
        <!-- 搜索按钮 -->
        <el-button @click="searchBoatTicket" :color="color" style="width: 200px;height:60px;margin-left:225px;border-radius:20px;margin-top:20px">船票查询</el-button>
      </el-card>
      <el-card class="poetry" @click="scene"  body-style=" width: 220px;height:220px;">
        <div class="right">
        <div class="r-t"> 
            <h1 style="font-size:80px">{{time1}}</h1>
            <div style="border: 6px solid white;padding:10px;width:80px;font-size:20px">{{time}}</div>
        </div>
        <div class="r-b"> 
            <div>不远万里赴瑶池,一睹人间最盛景</div>
            <div style="font-size: 12px;"><el-icon><Location /></el-icon>中国.吉林.长白山天池</div>
         </div>
         <div class="cover"></div>
        </div>
      
      </el-card>
        </div>
  
     <TicketRecommon></TicketRecommon>
     <bottomComponent></bottomComponent>
    </div>
   
</template>

<script setup lang="ts">
import BottomComponent from '@/components/boat/bottomComponent.vue';
import bottomComponent from '@/components/bottomComponent.vue';
import moment from 'moment';
import { onMounted,onBeforeUnmount,ref } from 'vue';
import TicketRecommon from '@/components/ticketRecommon.vue';
import { useColorStore } from '@/store/modules/color';
import { storeToRefs } from 'pinia';
import TopComponent from '@/components/boat/topComponent.vue';
import { ElMessage } from 'element-plus';
let {color}=storeToRefs(useColorStore())
//当前时间
let time=ref(moment().format("YYYY.MM"))
let time1=ref(moment().format("DD"))
let timer=ref()
//起始地点目的地与出发时间
let start=ref('威海')
let end=ref('')
let Time=ref(moment().format("YYYY-MM-DD"))
const City=(pos:string[])=>{
start.value=pos[0]
end.value=pos[1]
}
const Times=(time:string)=>{
   Time.value=time
}
const scene=()=>{
    window.open('https://travelsearch.fliggy.com/index.htm?spm=181.11358650.beautiful.d0.32cb223e0te9xc&searchType=product&keyword=长白山天池')
}
//取消事件委托防止点输入框时他也消失
const stop=(e:any)=>{
e.stopPropagation()
}
const searchBoatTicket=()=>{
    if(start.value&&end.value&&Time.value){  
    const starts=new Date(Time.value)
    let year=starts.getFullYear()
    let month=starts.getMonth()+1
    let date=starts.getDate()
    let startTime=`${year}-${month}-${date}`

    window.open(`https://ship.ly.com/#/list?startname=${start.value}&arrivename=${end.value}&startdatetime=${startTime}`)
   }
else{
     ElMessage({
    message: '缺少必填表单数据!',
    type: 'warning',
  })
}
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
    overflow: visible;
    min-width: 700px;
    width: 70%;
    border-radius: 18px;
    
    .demo-tabs{
        justify-self: center;
        width: 600px;
    }
}
.poetry{
    min-width: 500px;
    margin-left: 20px;
    user-select: none;
    position: relative;
    background: url('@/assets/busBoat/image.png') no-repeat;
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
               top: 160px;
             right: 20px;
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
    height: 366px;
    border-radius: 18px;
    opacity: 1;
    background: linear-gradient(270deg, rgba(0, 0, 0, .8), transparent 100%);
        }
    }
}
:deep(.el-input__wrapper) {
  border: none !important;
  box-shadow: none !important;
  background-color: inherit !important;
}
</style>