<template>
    <div>
        <div class="top">
        <TopLeft style="margin-right: 14px;min-width:450px"></TopLeft>
        <div>
            <TopRight></TopRight>
            <BottomRight></BottomRight>
        </div>
        </div>
     <DomesticTravel></DomesticTravel>
     <OverseaTravel></OverseaTravel>
     <Coorparate></Coorparate>
     <bottomComponent></bottomComponent>
    </div>
   
</template>

<script setup lang="ts">
import bottomComponent from '@/components/bottomComponent.vue';
import BottomRight from '@/components/travel/Home/bottomRight.vue';
import Coorparate from '@/components/travel/Home/coorparate.vue';
import DomesticTravel from '@/components/travel/Home/DomesticTravel/DomesticTravel.vue';
import OverseaTravel from '@/components/travel/Home/oversea/overseaTravel.vue';
import TopLeft from '@/components/travel/Home/topLeft.vue';
import TopRight from '@/components/travel/Home/topRight.vue';

</script>

<style lang="less" scoped>
.top{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>