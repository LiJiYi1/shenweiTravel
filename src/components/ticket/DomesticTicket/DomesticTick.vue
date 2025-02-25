<template>
    <el-card style="margin-top:80px;min-width:1218px">
         <p style="font-size: 30px;margin-top:20px;">热卖门票</p>
         <div style="display: flex;justify-content:space-between">
            <DomesticLeft style="width: 25%;min-width:250px;display:block;"></DomesticLeft>
            <DomesticRight style="width: 70%;margin-left:40px"></DomesticRight>
         </div>
    </el-card>
</template>

<script lang="ts" setup>
import DomesticLeft from './DomesticLeft.vue';
import DomesticRight from './DomesticRight.vue';

  
</script>

<style lang="less" scoped>

</style>