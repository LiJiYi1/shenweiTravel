<template>
     <!-- 顶部导航 -->
      <div class="topBar">
        <!-- 左侧 -->
       <topBarleft></topBarleft>
        <!-- 右侧 -->
        <topBarRight></topBarRight>
      </div>
   
      
</template>

<script setup lang="ts">
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