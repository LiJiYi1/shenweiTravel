<template>
<div style="display: flex;justify-content:start;margin-top:10px;user-select: none;">
             <!-- 城市选择 -->
             <el-select
             v-model="city"
             placeholder="取车城市"
             size="large"
             style="width: 240px"
             @change="getCity"
             >
             <el-option
             v-for="(item,index) in cityTrain"
             :key="index"
             :label="item.city"
             :value="item.city"
             />
             </el-select>
             <!-- 地点选择 -->
             <el-select
             v-model="position"
             placeholder="取车地点"
             size="large"
             style="width: 240px;margin-left:20px"
             >
             <el-option
             v-for="(item,index) in cityStation"
             :key="index"
             :label="item"
             :value="item"
            />
             </el-select>
             <!-- 异地还车 -->
             <el-switch
             :style="{  marginLeft:'20px','--el-switch-on-color':color,}"
             width="100"
             size="large"
             v-model="Switch"
             />
</div>
<!-- 还车 -->
<div v-show="Switch" style="user-select: none;">
<TitleComponent1 style="margin-top: 20px;"></TitleComponent1>
<div style="margin-top:10px;">
   <!-- 城市选择 -->
             <el-select
             v-model="city1"
             placeholder="取车城市"
             size="large"
             style="width: 240px"
             @change="getCity1"
             >
             <el-option
             v-for="(item,index) in cityTrain"
             :key="index"
             :label="item.city"
             :value="item.city"
             />
             </el-select>
             <!-- 地点选择 -->
             <el-select
             v-model="position1"
             placeholder="取车地点"
             size="large"
             style="width: 240px;margin-left:20px"
             >
             <el-option
             v-for="(item,index) in cityStation1"
             :key="index"
             :label="item"
             :value="item"
            />
             </el-select>
</div>
</div>
 
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useColorStore } from '@/store/modules/color';
import TitleComponent1 from './titleComponent1.vue';
import { storeToRefs } from 'pinia';
import cityTrain from '@/assets/rentCar/trainPos.json'
//主题颜色
let {color}=storeToRefs(useColorStore())
//城市车站数据
let cityStation=ref([ "成都站", "成都东站","成都南站"])
let cityStation1=ref([ "成都站", "成都东站","成都南站"])
//城市
let city=ref('成都')
let city1=ref('成都')
//地点
let position=ref('成都东站')
let position1=ref('成都东站')
//异地还车
let Switch=ref(false)
//改变城市时获得城市信息
const getCity=()=>{
   //我们根据获得城市的信息来拿到车站信息
   let data=cityTrain.filter((e)=>{
      return e.city===city.value
   })
   cityStation.value=data[0].stations 
   position.value=cityStation.value[0]
}
const getCity1=()=>{
   //我们根据获得城市的信息来拿到车站信息
   let data=cityTrain.filter((e)=>{
      return e.city===city1.value
   })
   console.log(data);
   
   cityStation1.value=data[0].stations 
   position1.value=cityStation1.value[0]
}
onMounted(()=>{
   console.log(cityTrain);
   
})
</script>

<style lang="less" scoped>
 :deep(.el-switch .el-switch__core){
    border-radius: 2px !important;
   }
 :deep(.el-switch .el-switch__core .el-switch__action){
    border-radius: 2px !important;
   }
</style>