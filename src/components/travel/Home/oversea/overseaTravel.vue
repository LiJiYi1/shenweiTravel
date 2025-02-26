<template>
    <el-card class="card">
        <div>
            <overseaLeft></overseaLeft>
         <overseaRight></overseaRight>
        </div>
         
    </el-card>
</template>

<script lang="ts" setup>
 import overseaLeft from './overseaLeft.vue';
import overseaRight from './overseaRight.vue';
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