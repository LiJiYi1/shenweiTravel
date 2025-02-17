<template>
    <el-select
      v-model="value"
      placeholder="Select"
      size="large"
      style="width: 240px"
    >
      <el-option
        key="1"
        label="1成人"
        value="1成人"
      />
        <el-option
        key="2"
       label="2成人"
        value="2成人"
      />
      <el-option
        key="3"
       label="3成人"
        value="3成人"
      />
      <el-option
        key="4"
       label="4成人"
        value="4成人"
      />
      <el-option
        key="2"
       label="2成人1儿童"
        value="2成人1儿童"
      />
    </el-select>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('1成人')

</script>

<style lang="less" scoped>

</style>