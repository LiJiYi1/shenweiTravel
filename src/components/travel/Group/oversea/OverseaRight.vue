<template>
 <el-tabs v-model="activeName" class="demo-tabs" type="border-card">
    <el-tab-pane label="精选" name="first">User</el-tab-pane>
    <el-tab-pane label="北京" name="second">Config</el-tab-pane>
    <el-tab-pane label="杭州" name="third">Role</el-tab-pane>
    <el-tab-pane label="西安" name="fourth">Task</el-tab-pane>
    <el-tab-pane label="南京" name="fifst">User</el-tab-pane>
    <el-tab-pane label="香港" name="sixth">Config</el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const activeName = ref('first')
</script>

<style lang="less" scoped>
.demo-tabs{
  width: 1000px;
}
</style>