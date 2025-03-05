<template>
        <div style="margin-top:20px" :style="{backgroundColor:color,borderRadius:'6px',padding:'10px',}">
        <!-- 日期选择 -->
        <div>
        <el-date-picker
        v-model="date"
        type="date"
        placeholder="选择日期"
        size="large"
        :clearable="false"
        :editable="false"
        style="width: 220px;height:50px;font-size:30px"
        @change="getDate"
        :disabled-date="disablePastDates"
         />
         <p style="font-size:25px;margin-top:10px;">{{Day1}}</p>
        </div>
        <!-- 时间选择 -->
         <div>
        <el-time-picker
         v-model="time"
         :clearable="false"
       @change="console.log(time)"
        placeholder="选择时间"
        style="width: 160px;height:50px;font-size:25px"
          />
          <p style="font-size:20px;margin-top:14px">后出发</p>
         </div>
        
        </div>
        <div style="margin-top:20px"  v-show="num==='2'" :style="{backgroundColor:color,borderRadius:'6px',padding:'10px',}">
        <!-- 日期选择 -->
        <div>
        <el-date-picker
        v-model="date2"
        type="date"
        placeholder="选择日期"
        :disabled-date="disablePastDates1"
        size="large"
        :clearable="false"
        :editable="false"
        style="width: 220px;height:50px;font-size:30px"
        @change="getDate1"
         />
         <p style="font-size:25px;margin-top:10px;">{{Day2}}</p>
        </div>
        <!-- 时间选择 -->
         <div>
        <el-time-picker
         v-model="time1"
         :clearable="false"
        placeholder="选择时间"
        style="width: 170px;height:50px;font-size:25px"
        @change="getDate"
          />
          <p style="font-size:20px;margin-top:14px">后出发</p>
         </div>
        
        </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import moment from 'moment';
import bus from '@/bus/bus'
import { useColorStore } from '@/store/modules/color';
import { storeToRefs } from 'pinia';
let {color}=storeToRefs(useColorStore())
//日期变量
let date=ref(moment().format("YYYY.MM.DD"))
let date2=ref('')
//时间变量
let time=ref(moment().format("YYYY.MM.DD.hh:mm:ss"))
let time1=ref('')
console.log(moment().format("hh:mm:ss"));
//单程还是往返
let num=ref('1')

//星期几的变量
let Day1=ref('周几')
let Day2=ref('')
const getDate=()=>{
const date1=new Date(date.value);
const dayNum=date1.getDay()
const dayOfWeek=['周日','周一','周二','周三','周四','周五','周六']
const dayl=dayOfWeek[dayNum]
Day1.value=dayl
}
const getDate1=()=>{
const date1=new Date(date2.value);
const dayNum=date1.getDay()
const dayOfWeek=['周日','周一','周二','周三','周四','周五','周六']
const dayl=dayOfWeek[dayNum]
Day2.value=dayl
}
//禁用过去日期
const disablePastDates = (date:any) => {
  return date < new Date(); // 如果日期小于当前日期，返回 true（禁用）
};
//第二个禁用开始时间
const disablePastDates1 = (dates:any) => {
  return dates < new Date(date.value); // 如果日期小于当前日期，返回 true（禁用）
};
onMounted(()=>{
const date1=new Date(date.value);
const dayNum=date1.getDay()
const dayOfWeek=['周日','周一','周二','周三','周四','周五','周六']
const dayl=dayOfWeek[dayNum]
Day1.value=dayl
//接受兄弟组件的数据
bus.on('oneOrTwo',(ya:any)=>{
  num.value=ya.oneOrTwo
  console.log(ya.oneOrTwo);
})


})


</script>

<style lang="less" scoped>
div{
    display:flex;
    justify-content: space-between;
}

</style>