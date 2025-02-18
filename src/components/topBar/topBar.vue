<template>
     <!-- 顶部导航 -->
      <div class="topBar">
        <!-- 左侧 -->
       <topBarleft></topBarleft>
        <!-- 右侧 -->
        <topBarRight></topBarRight>
       
      </div>
    <!-- 右侧彩蛋 -->
      <!-- <RightestComponent></RightestComponent> -->
      
</template>

<script setup lang="ts">
//import RightestComponent from '@/components/topBar/RightestComponent.vue';
import topBarleft from './topBarleft.vue';
import topBarRight from './topBarRight.vue';

 
</script>

<style lang="less" scoped>
.topBar{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    }

</style>