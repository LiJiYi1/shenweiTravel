<template>
    <div>
        <div class="bottom-left">
            <!-- 游客组件 -->
           <TouristComponent style="flex: 2;"></TouristComponent>
           <!-- 性别组件 -->
            <SexComponent style="flex: 1.5;"></SexComponent>
           <!-- 年龄组件 -->
            <AgeComponent style="flex:1.5"></AgeComponent>
            
        </div>
    </div>
</template>

<script setup lang="ts">
import AgeComponent from './age/ageComponent.vue';
import SexComponent from './sex/sexComponent.vue';
import TouristComponent from './tourist/touristComponent.vue';

</script>

<style lang="less" scoped>
    .bottom-left{
        height: calc(1080px - 40px);
        display: flex;
        flex-direction: column;
        margin-left:30px
    }

</style>