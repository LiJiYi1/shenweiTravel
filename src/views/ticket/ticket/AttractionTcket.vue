<template>
    <div>
        <div class="top">
        <TopLeft style="margin-right: 14px;"></TopLeft>
        <TopRight></TopRight>
        </div>
    
     <Coorperation></Coorperation>
     <bottomComponent></bottomComponent>
    </div>
   
</template>

<script setup lang="ts">
import bottomComponent from '@/components/bottomComponent.vue';
import Coorperation from '@/components/ticket/coorperation.vue';
import TopLeft from '@/components/ticket/topLeft.vue';
import TopRight from '@/components/ticket/topRight.vue';
import { onMounted,onBeforeUnmount,ref } from 'vue';




</script>

<style lang="less" scoped>
.top{
    display: flex;
}
</style>