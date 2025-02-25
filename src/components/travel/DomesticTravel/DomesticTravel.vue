<template>
    <el-card class="card">
        <div>
            <DomesticLeft></DomesticLeft>
         <DomesticRight></DomesticRight>
        </div>
         
    </el-card>
</template>

<script lang="ts" setup>
 import DomesticLeft from './DomesticLeft.vue';
import DomesticRight from './DomesticRight.vue';
</script>

<style lang="less" scoped>
.card{
margin-top: 60px;
width: 100%;
min-width: 1218px;
div{display: flex;
justify-content: space-between;
}
}
</style>