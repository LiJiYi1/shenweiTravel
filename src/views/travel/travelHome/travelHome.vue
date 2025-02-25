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
import BottomRight from '@/components/travel/bottomRight.vue';
import Coorparate from '@/components/travel/coorparate.vue';
import DomesticTravel from '@/components/travel/DomesticTravel/DomesticTravel.vue';
import OverseaTravel from '@/components/travel/oversea/overseaTravel.vue';
import TopLeft from '@/components/travel/topLeft.vue';
import TopRight from '@/components/travel/topRight.vue';

</script>

<style lang="less" scoped>
.top{
    display: flex;
}
</style>