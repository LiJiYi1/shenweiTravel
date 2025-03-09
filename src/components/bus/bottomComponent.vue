<template>
    <div  :style="{backgroundColor:color,borderRadius:'6px',padding:'10px',}">
      <div>
      <el-date-picker
        v-model="date1"
        type="date"
        placeholder="选择日期"
        size="large"
        style="width: 220px;height:55px;font-size:30px"
        :clearable="false"
        :editable="false"
        @change="changeDate"
         :disabled-date="disablePastDates"
      />
      <p style="margin-top: 10px;margin-left:18px;font-size:30px;margin-right:10px">{{ Day }}</p>
      </div>

   <div>
     <el-date-picker
        v-model="date2"
        type="date"
        placeholder="返程日期"
        size="large"
        style="width: 220px;height:55px;font-size:30px;"
        :clearable="false"
        :editable="false"
         @change="changeDate1"
          :disabled-date="disablePastDates1"
      />
    <p style="margin-top: 10px;margin-left:18px;font-size:30px">{{ Day1 }}</p>
   </div>
   
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useColorStore } from '@/store/modules/color';
import { storeToRefs } from 'pinia';
const $emit=defineEmits(['getTime'])

let {color}=storeToRefs(useColorStore())
import moment from 'moment';
//出发日期
let date1=ref(moment().format("YYYY.MM.DD"))
//返程日期
let date2=ref('')
//星期几
let Day=ref('')
let Day1=ref('')
//改变日期函数
const changeDate=()=>{
    const date=new Date(date1.value);
    const dayNum=date.getDay()
    const dayOfWeek=['周日','周一','周二','周三','周四','周五','周六']
    const dayl=dayOfWeek[dayNum]
    Day.value=dayl
    $emit('getTime',date1.value)
}
const changeDate1=()=>{
    const date=new Date(date2.value);
    const dayNum=date.getDay()
    const dayOfWeek=['周日','周一','周二','周三','周四','周五','周六']
    const dayl=dayOfWeek[dayNum]
    Day1.value=dayl
}
//禁用过去日期
const disablePastDates = (dates:any) => {
  return dates < new Date(); // 如果日期小于当前日期，返回 true（禁用）
};
//第二个禁用开始时间
const disablePastDates1 = (dates:any) => {
  return dates < new Date(date1.value); // 如果日期小于当前日期，返回 true（禁用）
};
onMounted(()=>{
    const date=new Date(moment().format("YYYY.MM.DD"));
    const dayNum=date.getDay()
    const dayOfWeek=['周日','周一','周二','周三','周四','周五','周六']
    const dayl=dayOfWeek[dayNum]
    Day.value=dayl
    date1.value=moment().format("YYYY.MM.DD")
})
   
</script>

<style lang="less" scoped>
div{
    display: flex;
    justify-content: space-between;
}
</style>