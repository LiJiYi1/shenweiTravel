<template>
  <div >
    <img src="@/assets/travel/travelType/image1.png" @click="type1" alt="">
    <img src="@/assets/travel/travelType/image2.png" @click="type2" alt="">
    <img src="@/assets/travel/travelType/image3.png" @click="type3" alt="">
    <img src="@/assets/travel/travelType/image4.png" @click="type4" alt="" style="margin-right: 0;">
    <img src="@/assets/travel/alert.png" alt="" style="margin-top:10px;width:830px; height: 73.78px;">
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const $router=useRouter()
const type1=()=>{
  $router.push('/travel/groupTravel')
}
const type2=()=>{
  $router.push('/travel/PrivateTravel')
}
const type3=()=>{
  $router.push('/travel/FreeTravel')
}
const type4=()=>{
  $router.push('/travel/CustomizedTravel')
}
</script>

<style lang="less" scoped>
div{
margin-top:20px;
img{
  cursor: pointer;
    width: 200px;
    height: 290px;
    margin-right:10px
}
}

</style>