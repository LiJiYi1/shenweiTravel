<template>
    <div>
        <div style="display: flex;justify-content:space-between">
            <TopLeft style="width: 40%;min-width:280px;margin-right:20px"></TopLeft>
            <TopRight></TopRight>
        </div>
        <DomesticTravel style="margin-top:60px"></DomesticTravel>
        <OverseaTravel style="margin-top:60px"></OverseaTravel>
        <BottomComponent></BottomComponent>
    </div>
</template>

<script setup lang="ts">
import DomesticTravel from '@/components/travel/Group/Domestic/DomesticTravel.vue';
import BottomComponent from '@/components/bottomComponent.vue';
import TopLeft from '@/components/travel/Group/topLeft.vue';
import TopRight from '@/components/travel/Group/topRight.vue';
import OverseaTravel from '@/components/travel/Group/oversea/OverseaTravel.vue';

  
</script>

<style lang="less" scoped>

</style>