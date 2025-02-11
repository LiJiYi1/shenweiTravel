<template>
    <div>
        <img src="@/assets/home/logo.webp" alt="">
        <h3>{{language.name}}</h3>
    </div>
</template>

<script setup lang="ts">
//引入能切换语言的文字
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { computed } from 'vue'
const language={
  name:computed(() => t('name'))
}
</script>

<style lang="less" scoped>
div{
cursor: pointer;
user-select: none;
width:@left_bar_width;
height:@left_logo_height;

display: flex;
justify-content: space-around;
align-items: start;
  img{   
        width: 40px;
        height:40px;
        margin-left: 10px;
    }
  h3{
    margin-top: 10px;
    margin-right: 20px;
    margin-left:20px;

  }
}
  
</style>