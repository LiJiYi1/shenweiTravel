<template>
        <div style="display: flex;height:298px">
      <el-card style="width: 220px;border-radius:16px;height:300px" body-style="padding:0px">
        <img style="width: 220px;height:300px"  src="@/assets/ticket/recommon.png" alt="">
      </el-card>
      <el-card class="poetry"  body-style="padding:0px; width:220px;height:250px;">
        <div class="right">
        <div class="r-t"> 
            <h1 style="font-size:80px">{{time1}}</h1>
            <div style="border: 6px solid white;padding:10px;width:80px;font-size:20px">{{time}}</div>
        </div>
        <div class="r-b"> 
            <div>一湖栖日月,双塔共生辉</div>
            <div style="font-size: 12px;"><el-icon><Location /></el-icon>中国.桂林.日月双塔</div>
         </div>
         <div class="cover"></div>
        </div>
      
      </el-card>
        </div>
</template>

<script setup lang="ts">

import moment from 'moment';
import { onMounted,onBeforeUnmount,ref } from 'vue';
//当前时间
let time=ref(moment().format("YYYY.MM"))
let time1=ref(moment().format("DD"))
let timer=ref()
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

.poetry{
    width: 598px;
    height: 300px;
    margin-left: 10px;
    user-select: none;
    left:722px;
    top:20px;
    background: url('@/assets/travel/image.png') no-repeat;
    background-size: cover;
    border-radius: 18px;
    .right{
        color: white;
        margin-left:300px;
        position: relative;
        .r-t{
             position: absolute;
             top:20px;
             left: 140px;
            z-index: 2;
            color: rgb(255, 255, 255);
        }
        .r-b{
             position: absolute;
             left: 100px;;
             width: 200px;
             bottom: -280px;
            z-index: 2;
            margin-top: 220px;
            line-height: 25px;
        }
        .cover{     
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    width: 298px;
    height: 340px;
    border-radius: 18px;
    opacity: 1;
    background: linear-gradient(270deg, rgba(0, 0, 0, .8), transparent 100%);
        }
    }
}
</style>