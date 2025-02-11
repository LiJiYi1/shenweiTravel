<template>
  <el-select v-model="currentLocale" @change="changeLanguage">
    <el-option label="中文" value="zh-cn"></el-option>
    <el-option label="English" value="en"></el-option>
  </el-select>
</template>

<script lang="ts" setup>
import { ref} from 'vue';
import { useI18n } from 'vue-i18n';
import { zhCn } from 'element-plus/es/locales.mjs';
import { en } from 'element-plus/es/locales.mjs';
import { ElConfigProvider } from 'element-plus';

const { locale } = useI18n();
const currentLocale = ref(localStorage.getItem('language') as string||locale.value);
const changeLanguage = (lang: string) => {
 //如果有语言状态就移除
 if(localStorage.getItem('language')) localStorage.removeItem('language')
 locale.value = lang; // 更新 Vue I18n 的语言
 ElConfigProvider.locale = lang === 'zh-cn' ? zhCn : en; // 更新 Element Plus 的语言
  //做一个语言状态的本地持久化
  //刷新时我们要从本地拿到语言的状态,实现一个语言状态化
  localStorage.setItem('language',locale.value)
};


</script>