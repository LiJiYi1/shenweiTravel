<template>
    <div @click="outSearch">
    <div style="display: flex;">
      <el-card class="search">
        <div class="top" >
        <!-- 目的地 -->
         <div class="to"  :style="{backgroundColor:color,borderRadius:'6px'}">
           <div  @click="stop">
        <p style="margin-left:12px;font-size:14px">目的地</p>
          <el-input
          style="width: 160px;font-size:20px;height:35px"
          size="large"
          placeholder="城市名"
          v-model="position"
          :suffix-icon="CaretBottom"
          @focus="search"
        /> 
        <!-- 搜索提示 -->
         <div class="posSearch" v-show="posSearch">
            <el-tabs type="border-card">
               <el-tab-pane label="热门城市" :disabled="true">
                <span @click="change('马尔代夫')">马尔代夫</span>
                <span @click="change('沙巴')">沙巴</span>
                <span @click="change('热浪岛')">热浪岛</span>
                <span @click="change('兰卡威')">兰卡威</span>
                <span @click="change('曼谷')">曼谷</span>
                <span @click="change('普吉岛')">普吉岛</span>
                <span @click="change('清迈')">清迈</span>
                <span @click="change('新加坡')">新加坡</span>
                <span @click="change('巴厘岛')">巴厘岛</span>
                <span @click="change('东京')">东京</span>
                <span @click="change('胡志明市')">胡志明市</span>
               </el-tab-pane>
            </el-tabs>
        </div>
           </div>
         </div>
        
        <!-- 每间入住人数 -->
        <div class="number" :style="{backgroundColor:color,borderRadius:'6px'}">
        <p style="margin-left:10px;font-size:14px">每间入住人数</p>
         <el-select
      v-model="num1"
      placeholder="Select"
      style="width: 120px;"
    >
      <el-option label="成人1位" value="1"/>
      <el-option label="成人2位" value="2"/>
      <el-option label="成人3位" value="3"/>
      <el-option label="成人4位" value="4"/>
      <el-option label="成人5位" value="5"/>
         </el-select>
         <el-select
      v-model="num2"
      placeholder="Select"
      style="width: 120px;margin-left:10px"
    >
      <el-option label="儿童1位" value="1"/>
      <el-option label="儿童2位" value="2"/>
      <el-option label="儿童3位" value="3"/>
      <el-option label="儿童4位" value="4"/>
      <el-option label="儿童5位" value="5"/>
         </el-select>
         </div>
        <!-- 关键词 -->
        <div class="importantWord" :style="{backgroundColor:color,borderRadius:'6px'}">
        <p style="margin-left:25px;font-size:14px">关键词</p>
        <el-input
        style="width: 160px;height:35px;margin-left:10px;font-size:20px"
        size="large"
        placeholder="位置/品牌/酒店"
        clearable
        v-model="keys"
        />
        </div>
         
        </div>
        <div class="bt" :style="{backgroundColor:color,borderRadius:'6px'}">
        <el-date-picker
        v-model="CheckInOut"
        type="daterange"
        :range-separator="diff"
        start-placeholder="入住日期"
        end-placeholder="离店日期"
        style="font-size:20px;height:60px;width:600px"
        size="large"
        :clearable="false"
        :editable="false"
        @change="val"
      />
        </div>
        <el-button @click="searchHotel" :color="color" style="margin-left:calc(50% - 100px);width: 200px;height:60px;margin-top:20px;border-radius:20px">搜索酒店</el-button>
      </el-card>
      <el-card class="poetry" @click="scene">
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
let {color}=storeToRefs(useColorStore())
//当前时间
let time=ref(moment().format("YYYY.MM"))
let time1=ref(moment().format("DD"))
let timer=ref()
//位置
let position=ref('')
//关键词
let keys=ref('')
//入住时间
let CheckInOut=ref('')
let diff=ref('——0晚——')
//位置搜索是否展示
let posSearch=ref(false)
//成人数量
let num1=ref('2')
//儿童数量
let num2=ref('1')
function val(){
    console.log(CheckInOut.value[0],CheckInOut.value[1]);
    const date:any=new Date(CheckInOut.value[0])
    const date1:any=new Date(CheckInOut.value[1])
    const sub:number=Math.abs(date1 - date)
    const diffDays=Math.ceil(sub/(1000*60*60*24))
    diff.value='——'+diffDays+'晚'+'——'
}
//聚焦时搜索框展示
function search(){
    posSearch.value=true
}

//改变输入框里的值
const change=(name:string)=>{
position.value=name
//选了之后让选择框消失
posSearch.value=false
}
//提示消失
function outSearch(){
//选了之后让选择框消失
posSearch.value=false

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
    const end=new Date(CheckInOut.value[1])
    let year1=end.getFullYear()
    let month1=end.getMonth()+1
    let date1=end.getDate()
    let endTime=`${year1}-${month1}-${date1}`
    window.open(`https://hotel.fliggy.com/hotel_list3.htm?spm=181.11358650.hotelModule.internationalSearch&cityName=${position.value}&checkIn=${startTime}&checkOut=${endTime}&keywords=${keys.value}&aNum_1=${num1.value}&cNum_1=${num2.value}&_output_charset=utf8`)
   }
else{
     ElMessage({
    message: '缺少必填表单数据!',
    type: 'warning',
  })
}
    
}
const scene=()=>{
    window.open('https://travelsearch.fliggy.com/index.htm?spm=181.11358650.beautiful.d0.32cb223e0te9xc&searchType=product&keyword=天山天池')
}
//阻止事件委托
const stop=(e:any)=>{
e.stopPropagation()
}

onMounted(()=>{
document.addEventListener('click',()=>{
        posSearch.value=false
    })
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
    width: 60%;
    min-width: 700px;
    height: 300px;
    border-radius: 18px;
    .top{
        display: flex;
        justify-content: space-between;
        .to{
          padding: 10px;
          height: 45px;
        }
        .number{
          width: 250px;
          margin-left: -6px;
           padding: 10px;
          height: 45px;
        }
        .importantWord{
          padding: 10px;
          padding-left: 0px;
          height: 45px;
        }
    }
    .bt{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
}
.poetry{
    position: relative;
   
    user-select: none;
    margin-left: 20px;
    width: 600px;
     min-width: 495px;
    height: 300px;
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
.bottom{
margin-top: 40px;
}
.posSearch{
    position: absolute;
    left: 40px;
    top: 108px;
    width: 450px;
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
.number{
    margin-left: 25px;
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