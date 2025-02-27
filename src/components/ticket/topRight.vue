<template>
        <div style="display: flex;height:298px">
            <div>
                 <el-card style="width: 220px;border-radius:16px;height:200px" body-style="padding:0px">
        <img style="width: 220px;height:200px"  src="@/assets/ticket/recommon.png" alt="">
                 </el-card>
                 <el-card style="width: 220px;border-radius:16px;height:190px;margin-top:8px" body-style="padding:0px">
        <img style="width: 220px;height:190px"  src="@/assets/ticket/newChoose.png" alt="">
                 </el-card>
            </div>
     
      <el-card class="poetry"  body-style="padding:0px; width:220px;">
        <div class="right">
        <div class="r-t"> 
            <h1 style="font-size:80px">{{time1}}</h1>
            <div style="border: 6px solid white;padding:10px;width:80px;font-size:20px">{{time}}</div>
        </div>
        <div class="r-b"> 
            <div>不入拙政园,怎知春色如许</div>
            <div style="font-size: 12px;"><el-icon><Location /></el-icon>中国.苏州.拙政园</div>
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
    width: 668px;
    height: 400px;
    margin-left: 20px;
    user-select: none;
    left:722px;
    top:20px;
    background: url('@/assets/ticket/poetry.png') no-repeat;
    background-size: cover;
    border-radius: 18px;
    .right{
        color: white;
        margin-left:300px;
        position: relative;
        .r-t{
             position: absolute;
             top:40px;
             left: 200px;
            z-index: 2;
            color: rgb(255, 255, 255);
        }
        .r-b{
             position: absolute;
             width: 200px;
             top:100px;
             right: -350px;
            z-index: 2;
            margin-top: 220px;
            line-height: 25px;
        }
        .cover{     
    position: absolute;
    top: 0px;
    left: -100px;
    z-index: 1;
    width: 668px;
    height: 400px;
    border-radius: 18px;
    opacity: 1;
    background: linear-gradient(270deg, rgba(0, 0, 0, .8), transparent 100%);
        }
    }
}
</style>