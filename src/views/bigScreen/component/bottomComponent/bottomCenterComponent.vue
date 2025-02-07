<template>
    <div>
        <div class="bottom-left">
            <!-- 客流量组件 -->
           <div style="flex: 3;"></div>
           <!-- 客流量趋势图组件 -->
           <Touristcount style="flex: 1.5;"></Touristcount>

        </div>
    </div>
</template>

<script setup lang="ts">
import Touristcount from './touristcount/touristCount.vue';



</script>

<style lang="less" scoped>
    .bottom-left{
        margin-top: 24px;
        height: calc(1080px - 40px);
        display: flex;
        flex-direction: column;
        margin-left:30px
    }

</style>