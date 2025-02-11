<script setup lang="ts">
 //引入全局语言配置
import { useI18n } from 'vue-i18n'
import { ElConfigProvider } from 'element-plus'

//在加载页面的时候判断一下是什么语言状态,好渲染一遍
const { locale } = useI18n();
locale.value=localStorage.getItem('language') as string

 


</script>
<template>
    <el-config-provider >
        <router-view></router-view>
    </el-config-provider>
</template>

<style scoped lang="less">


</style>
