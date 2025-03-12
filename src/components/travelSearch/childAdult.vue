<template>
    <div>
         <h3>费用包含</h3>
    <el-radio-group v-model="isChild" size="large">
      <el-radio-button label="成人" value="adult" style="margin-right: 28px;" />
      <el-radio-button label="儿童" value="child" />
    </el-radio-group>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isChild=ref('adult')
</script>

<style lang="less" scoped>
h3{
    margin-bottom: 20px;
    font-size: 16px;
}
</style>