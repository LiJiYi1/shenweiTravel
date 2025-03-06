<template>
<div @click="outSearch">
    <div style="display: flex;">
      <el-card class="search">
        <div class="top" :style="{backgroundColor:color,borderRadius:'6px'}">
        <!-- 目的地 -->
        <div class="to"   @click="stop">
        <p style="margin-left: 14px;margin-top:14px;font-size:14px">目的地</p>
        <el-input
          style="width: 180px;font-size:25px;height:35px;"
          size="large"
          placeholder="北京"
          v-model="position"
          :suffix-icon="CaretBottom"
          :clearable="false"
          @focus="search"
        />
        <!-- 搜索提示 -->
        <div class="posSearch" v-show="posSearch">
            <el-tabs type="border-card">
               <el-tab-pane label="热门城市" :disabled="true">
                <span @click="change('香港')">香港</span>
                <span @click="change('三亚')">三亚</span>
                <span @click="change('澳门')">澳门</span>
                <span @click="change('北京')">北京</span>
                <span @click="change('上海')">上海</span>
                <span @click="change('广州')">广州</span>
                <span @click="change('厦门')">厦门</span>
                <span @click="change('深圳')">深圳</span>
                <span @click="change('杭州')">杭州</span>
                <span @click="change('成都')">成都</span>
                <span @click="change('西安')">西安</span>
                <span @click="change('黄山')">黄山</span>
                <span @click="change('苏州')">苏州</span>
                <span @click="change('桂林')">桂林</span>
                <span @click="change('南京')">南京</span>
                <span @click="change('九寨沟')">九寨沟</span>
                <span @click="change('青岛')">青岛</span>
                <span @click="change('重庆')">重庆</span>
                <span @click="change('杭州')">杭州</span>
                <span @click="change('哈尔滨')">哈尔滨</span>
               </el-tab-pane>
            </el-tabs>
        </div>
         </div>
         
        <!-- 关键词 -->
        <div class="importantWord"  @click="stop">
        <p style="margin-left: 34px;margin-top:14px;font-size:14px">关键词</p>
        <el-input
        style="width: 400px;height:35px;margin-left:20px;font-size:25px"
        size="large"
        placeholder="位置/品牌/酒店"
        clearable
        @focus="key"
        v-model="keys"
        />
         <!-- 搜索提示 -->
        <div class="keySearch" v-show="keySearch">
            <el-tabs type="border-card">
               <el-tab-pane label="猜你想搜" :disabled="true">
                <span @click="change1('迪士尼')">迪士尼</span>
                <span @click="change1('国际机场')">国际机场</span>
                <span @click="change1('步行街')">步行街</span>
                <span @click="change1('高铁站')">高铁站</span>
                <span @click="change1('维也纳')">维也纳</span>
                <span @click="change1('度假村')">度假村</span>
               </el-tab-pane>
            </el-tabs>
        </div>
        </div>
       
        </div>
        <div class="bt"  :style="{backgroundColor:color,borderRadius:'20px'}">
        <el-date-picker
        :disabled-date="disablePastDates"
        v-model="CheckInOut"
        type="daterange"
        :range-separator="diff"
        start-placeholder="入住日期"
        end-placeholder="离店日期"
        style="font-size:20px;height:60px"
        size="large"
        :clearable="false"
        :editable="false"
        @change="val"
      />
        </div>
        <el-button @click="searchHotel" :color="color" style="margin-left:calc(50% - 100px);width: 200px;height:60px;margin-top:20px;border-radius:20px">搜索酒店</el-button>
      </el-card>
      <el-card class="poetry">
        <div class="right">
        <div class="r-t"> 
            <h1 style="font-size:80px">{{time1}}</h1>
            <div style="border: 6px solid white;padding:10px;width:80px;font-size:20px">{{time}}</div>
        </div>
        <div class="r-b"> 
            <div>苍山负雪,明烛天南</div>
            <div style="font-size: 12px;"><el-icon><Location /></el-icon>中国.新疆.天山天池</div>
         </div>
         <div class="cover"></div>
        </div>
      
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
import { CaretBottom} from '@element-plus/icons-vue';
import TicketRecommon from '@/components/ticketRecommon.vue';
import { useColorStore } from '@/store/modules/color';
import { storeToRefs } from 'pinia';
import { ElMessage } from 'element-plus';
//获得一个响应式的颜色
let {color}=storeToRefs(useColorStore())
//当前时间
let time=ref(moment().format("YYYY.MM"))
let time1=ref(moment().format("DD"))
let timer=ref()
//位置
let position=ref('北京')
//关键词
let keys=ref('')
//入住时间
let CheckInOut=ref('')
let diff=ref('——0晚——')
//位置搜索是否展示
let posSearch=ref(false)
//关键词搜索是否展示
let keySearch=ref(false)
//禁用过去日期
const disablePastDates = (date:any) => {
  return date < new Date(); // 如果日期小于当前日期，返回 true（禁用）
};
function val(){
    console.log(CheckInOut.value[0],CheckInOut.value[1]);
    const date:any=new Date(CheckInOut.value[0])
    const date1:any=new Date(CheckInOut.value[1])
    const sub:any=Math.abs(date1 - date)
    const diffDays=Math.ceil(sub/(1000*60*60*24))
    diff.value='——'+diffDays+'晚'+'——'
}
//聚焦时搜索框展示
function search(){
    posSearch.value=true
    keySearch.value=false
}
//搜索提示框消失
function outSearch(){
    //选了之后让选择框消失
    posSearch.value=false
    keySearch.value=false
}
//聚焦式关键词显示
const key=()=>{
    keySearch.value=true
    posSearch.value=false
}
//改变输入框里的值
const change=(name:string)=>{
position.value=name
//选了之后让选择框消失
posSearch.value=false
}
//改变关键词输入框的值
const change1=(name:string)=>{
keys.value=name
//选了之后让选择框消失
keySearch.value=false
}
//查询酒店
const searchHotel=()=>{
if(position.value&&CheckInOut.value[1]&&CheckInOut.value[0]){  
    console.log(CheckInOut.value);
    
    const start=new Date(CheckInOut.value[0])
    let year=start.getFullYear()
    let month=start.getMonth()+1
    let date=start.getDate()
    let startTime=`${year}-${month}-${date}`
    console.log(startTime);
    const end=new Date(CheckInOut.value[1])
    let year1=end.getFullYear()
    let month1=end.getMonth()+1
    let date1=end.getDate()
    let endTime=`${year1}-${month1}-${date1}`
    window.open(`https://hotel.fliggy.com/hotel_list3.htm?spm=181.11358650.hotelModule.domesticSearch&city=&cityName=${position.value}&checkIn=${startTime}&checkOut=${endTime}&keywords=${keys.value}&_output_charset=utf8`)
   }
else{
     ElMessage({
    message: '缺少必填表单数据!',
    type: 'warning',
  })
}
    
}
//阻止事件委托
const stop=(e:any)=>{
e.stopPropagation()
}
onMounted(()=>{
    document.addEventListener('click',()=>{
        keySearch.value=false
        posSearch.value=false
    })
timer.value=setInterval(()=>{
    time.value=moment().format("YYYY.MM")
    time1.value=moment().format("DD")
},200)
})
onBeforeUnmount(()=>{
clearInterval(timer.value)
})
  
</script>

<style lang="less" scoped>
.search{
    width: 60%;
    min-width: 700px;
    height: 300px;
    border-radius: 18px;
    .top{
        display: flex;
        justify-content: space-between;
        padding-bottom: 15px;
    }
    .bt{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
    .importantWord{
        position: relative;
      
    }
}
.poetry{
    user-select: none;
    margin-left: 20px;
    width: 545px;
    min-width: 495px;
    position: relative;
    background: url('@/assets/hotel/changbaishan.jpg') no-repeat;
    background-position-y: -380px;
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
             top: 170px;
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
    height: 302px;
    border-radius: 18px;
    opacity: 1;
    background: linear-gradient(270deg, rgba(0, 0, 0, .8), transparent 100%);
        }
    }
}

.posSearch{
    position: absolute;
    left: 40px;
    top: 120px;
    width: 450px;
    z-index: 3;
    span{
        display: block;
        float: left;
       width: 50px;
       margin-right: 45px;
       line-height: 40px;
       cursor: pointer;
    }
}
.keySearch{
    position: absolute;
    left: 35px;
    top: 80px;
    width: 410px;
    z-index: 3;
    span{
        display: block;
        float: left;
       width: 80px;
       margin-right: 45px;
       line-height: 40px;
       cursor: pointer;
    }
}
:deep(.el-input__wrapper) {
  border: none !important;
  box-shadow: none !important;
  background-color: inherit !important;
}
</style>