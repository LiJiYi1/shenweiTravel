<template>
    <div>
       <div class="bottom">
              <!-- 底部左侧组件 -->
             <bottomLeftComponent style="flex: 1;"></bottomLeftComponent>
             <!-- 底部中间组件 -->
             <BottomCenterComponent style="flex: 2.8;"></BottomCenterComponent>
             <!-- 底部右侧组件 -->
             <BottomRightComponent style="flex: 1;"></BottomRightComponent>
           </div>
    </div>
</template>

<script setup lang="ts">
import BottomCenterComponent from './bottomCenterComponent.vue';
import bottomLeftComponent from './bottomLeftComponent.vue';
import BottomRightComponent from './bottomRightComponent.vue';



  
</script>

<style lang="less" scoped>
.bottom{
    display: flex;
    justify-content: space-between;
}
</style>