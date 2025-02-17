<template>
        <div>
        <!-- 日期选择 -->
        <div>
        <el-date-picker
        v-model="date"
        type="date"
        placeholder="选择日期"
        size="large"
        :clearable="false"
        :editable="false"
        style="width: 250px;height:50px;font-size:30px"
        @change="getDate"
         />
         <p style="margin-top: 22px;margin-left:10px">{{Day1}}</p>
        </div>
        <!-- 时间选择 -->
         <div>
        <el-time-picker
         v-model="time"
         :clearable="false"
       @change="console.log(time)"
        placeholder="选择时间"
        style="width: 222px;height:50px;font-size:25px"
          />
          <p style="margin-top: 22px;margin-left:10px">后出发</p>
         </div>
        
        </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import moment from 'moment';
//日期变量
let date=ref(moment().format("YYYY.MM.DD"))
//时间变量
let time=ref(moment().format("YYYY.MM.DD.hh:mm:ss"))
console.log(moment().format("hh:mm:ss"));

//星期几的变量
let Day1=ref('周几')
const getDate=()=>{
const date1=new Date(date.value);
const dayNum=date1.getDay()
const dayOfWeek=['周日','周一','周二','周三','周四','周五','周六']
const dayl=dayOfWeek[dayNum]
Day1.value=dayl
}
onMounted(()=>{
const date1=new Date(date.value);
const dayNum=date1.getDay()
const dayOfWeek=['周日','周一','周二','周三','周四','周五','周六']
const dayl=dayOfWeek[dayNum]
Day1.value=dayl
})

</script>

<style lang="less" scoped>
div{
    display:flex;
    justify-content: space-between;
}
</style>