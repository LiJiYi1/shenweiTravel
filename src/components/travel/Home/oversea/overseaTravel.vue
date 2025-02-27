<template>
    <el-card class="card" style="margin-top:80px;width:99.9%;min-width:1217px">
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