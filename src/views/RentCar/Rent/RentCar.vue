<template>
<div>
    <div>
        
         <el-card class="search">
         <!-- 城市地点 -->
         <div style="display: flex;justify-content:start">
             <!-- 城市选择 -->
             <el-select
             v-model="city"
             placeholder="Select"
             size="large"
             style="width: 240px"
             >
             <el-option
             key="item.value"
             label="item.label"
             value="item.value"
            />
             </el-select>
             <!-- 地点选择 -->
             <el-select
             v-model="city"
             placeholder="Select"
             size="large"
             style="width: 240px"
             >
             <el-option
             key="item.value"
             label="item.label"
             value="item.value"
            />
             </el-select>
             <el-switch
             style="border-radius:1px;"
             width="100"
             />
         </div>
         <!-- 用车日期 -->
         <div style="margin-top: 20px;">
            <el-date-picker
             v-model="timeDate"
            type="datetimerange"
            start-placeholder="Start date"
            end-placeholder="End date"
            format="YYYY-MM-DD HH:mm:ss"
            range-separator="---"
            date-format="YYYY/MM/DD ddd"
            time-format="A hh:mm:ss"
            style="width: 600px;height:40px;"
            :clearable="false"
            :editable="false"
        />
         </div>
         <!-- 只看站内取还 -->
         <div>
            <el-checkbox fill="#229eff" v-model="checked1" label="只看站内取还" size="large" />
         </div>
         <!-- 查询按钮 -->
         <el-button :color="color" style="width: 200px;height:60px;margin-left:225px;border-radius:20px">查询</el-button>
      </el-card>
      <el-card class="poetry">
        <div class="right">
        <div class="r-t"> 
            <h1 style="font-size:80px">{{time1}}</h1>
            <div style="border: 6px solid white;padding:10px;width:80px;font-size:20px">{{time}}</div>
        </div>
        <div class="r-b"> 
            <div>墙角数枝梅,凌寒独自开</div>
            <div style="font-size: 12px;"><el-icon><Location /></el-icon>中国.武汉.东湖梅园</div>
         </div>
         <div class="cover"></div>
        </div>
      
      </el-card>
    </div>
    <RightestComponent style="position: absolute;right:20px;top:20px;z-index:-1;"></RightestComponent>
    <TicketRecommon></TicketRecommon>
    <BottomComponent></BottomComponent>
 </div>
   
</template>

<script setup lang="ts">
import BottomComponent from '@/components/bottomComponent.vue';
import moment from 'moment';
import { onMounted,onBeforeUnmount,ref } from 'vue';
import TicketRecommon from '@/components/ticketRecommon.vue';
import { useColorStore } from '@/store/modules/color';
import { storeToRefs } from 'pinia';
import RightestComponent from '@/components/topBar/RightestComponent.vue';
//获得一个响应式的颜色
let {color}=storeToRefs(useColorStore())
//当前时间
let time=ref(moment().format("YYYY.MM"))
let time1=ref(moment().format("DD"))
let timer=ref()
//只看站内取还
let checked1=ref('')
//时间和日期
let timeDate=ref('')
//城市选择
let city=ref('')



onMounted(()=>{
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
    width: 700px;
    height: 300px;
    border-radius: 18px;
    display: flex;
    justify-content: center;
    .top{
        display: flex;
        justify-content: space-between;
    }
    .bt{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
}
.poetry{
    user-select: none;
    margin-left: 20px;
    position: absolute;
    left: 720px;
    top: 20px;
    width: 500px;
    height: 300px;
    background: url('@/assets/rentCar/image.png') no-repeat;
    background-position-y: -280px;
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
    top: 140px;
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
    left: 300px;
    top: 140px;
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
</style>