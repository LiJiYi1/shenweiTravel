<template>

<div style="margin-top: 20px;position:relative">
<div style="position:absolute;left:210px;top:18px;font-size:12px">{{week1}}</div> 
<div style="position:absolute;left:550px;top:18px;font-size:12px">{{week2}}</div> 
<div style="position:absolute;left:297px;top:25px;font-size:28px">→</div> 
            <el-date-picker
             v-model="timeDate"
            type="datetimerange"
            start-placeholder="取车时间"
            end-placeholder="还车时间"
            format="YYYY-MM-DD HH:mm:ss"
            :range-separator="num"
            date-format="YYYY/MM/DD ddd"
            time-format="A hh:mm:ss"
            style="width: 600px;height:50px;"
            @change="change"
            :clearable="false"
            :editable="false"
        />
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import moment from 'moment';
import { getWeek } from '@/utils/date';
let num=ref('0天')
//周几
let week1=ref('')
let week2=ref('')
//时间和日期
let timeDate=ref(moment().format("YYYY.MM.DD.hh.mm.ss"))
const change=()=>{
    const date=new Date(timeDate.value[0])
    const date1=new Date(timeDate.value[1])
    const sub=Math.abs(date1 - date)
    const diffDays=Math.ceil(sub/(1000*60*60*24))
    num.value=diffDays+'天'
    week1.value=getWeek(timeDate.value[0])
    week2.value=getWeek(timeDate.value[1])
}

</script>

<style lang="scss" scoped>

</style>