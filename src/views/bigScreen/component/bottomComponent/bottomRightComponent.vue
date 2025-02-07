<template>
    <div>
        <div class="bottom-left">
            <!-- 热门景区组件 -->
           <HotScenic style="flex:2"></HotScenic>
           <!-- 年度游客数量对比组件 -->
            <TouristCountCompare style="flex: 1.5;"></TouristCountCompare>
           <!-- 预约统计组件 -->
            <ReservationComponent style="flex:1.5;"></ReservationComponent>
            
        </div>
    </div>
</template>

<script setup lang="ts">

import HotScenic from './hotScenic/hotScenic.vue';
import ReservationComponent from './reservation/reservationComponent.vue';
import TouristCountCompare from './touristCountCompare/touristCountCompare.vue';

</script>

<style lang="less" scoped>
    .bottom-left{
        height: calc(1080px - 40px);
        display: flex;
        flex-direction: column;
        margin-left:30px
    }

</style>