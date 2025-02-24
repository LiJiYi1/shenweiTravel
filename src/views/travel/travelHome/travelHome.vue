<template>
    <div>
        <div class="top">
        <TopLeft style="margin-right: 14px;"></TopLeft>
        <TopRight></TopRight>
        </div>
     
     <bottomComponent></bottomComponent>
    </div>
   
</template>

<script setup lang="ts">
import bottomComponent from '@/components/bottomComponent.vue';
import TopLeft from '@/components/travel/topLeft.vue';
import TopRight from '@/components/travel/topRight.vue';
import { onMounted,onBeforeUnmount,ref } from 'vue';




</script>

<style lang="less" scoped>
.top{
    display: flex;
}
</style>