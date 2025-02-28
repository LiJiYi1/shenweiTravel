<template>
    <el-card  class="card" body-style="padding:0px">
        <div ref="card" style="font-size: 50px;rotate:180deg"><el-icon><Download /></el-icon></div>
       返回顶部
    </el-card>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.card{
    cursor: pointer;
    user-select: none;
    text-align: center;
    width: 80px;
    height: 80px;
    position: fixed;
    right:25px;
    bottom:20px;
    z-index:10;
    font-size: 12px;
}
.card:hover{
    color: rgb(255, 196, 0);
}
</style>