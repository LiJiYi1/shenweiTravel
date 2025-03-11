<template>
    
     <!-- 顶部导航 -->
      <div class="topBar">
       <!-- 左侧 -->
       <topBarleft></topBarleft>
       <!-- 中间 -->
       <CenterBar ></CenterBar>
       <!-- 右侧 -->
       <topBarRight></topBarRight>
      </div>

   
      
</template>

<script setup lang="ts">
//import RightestComponent from '@/components/topBar/RightestComponent.vue';
import CenterBar from './centerBar.vue';
import topBarleft from './topBarleft.vue';
import topBarRight from './topBarRight.vue';

 
</script>

<style lang="less" scoped>

.topBar{
    width: 100%;
    min-width: 1218px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    }

</style>