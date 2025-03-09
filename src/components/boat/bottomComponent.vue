<template>
    <div :style="{backgroundColor:color,borderRadius:'6px',padding:'10px',}">
      <div>
      <el-date-picker
        v-model="date1"
        type="date"
        placeholder="选择日期"
        size="large"
        style="width: 200px;height:55px;font-size:25px"
        :clearable="false"
        :editable="false"
        @change="changeDate"
      />
      <p style="margin-top: 10px;font-size:32px;margin-right:10px">{{ Day }}</p>
      </div>

    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import moment from 'moment';
import { useColorStore } from '@/store/modules/color';
import { storeToRefs } from 'pinia';
let {color}=storeToRefs(useColorStore())
//出发日期
let date1=ref(moment().format("YYYY.MM.DD"))
//星期几
let Day=ref('')
//改变日期函数
const changeDate=()=>{
    const date=new Date(date1.value);
    const dayNum=date.getDay()
    const dayOfWeek=['周日','周一','周二','周三','周四','周五','周六']
    const dayl=dayOfWeek[dayNum]
    Day.value=dayl
    $emit('getTime',date1.value)
}
const $emit=defineEmits(['getTime'])
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