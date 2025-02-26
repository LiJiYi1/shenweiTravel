<template>
    <el-card style="min-width: 1200px;">
        <div style="display: flex;justify-content:space-between">
            <DomesticLeft></DomesticLeft>
            <DomesticRight style="width: 100%;"></DomesticRight>
        </div>
        
    </el-card>
</template>

<script setup lang="ts">
import DomesticLeft from './DomesticLeft.vue';
import DomesticRight from './DomesticRight.vue';


</script>

<style lang="less" scoped>

</style>