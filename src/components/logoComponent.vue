<template>
    <div>
        <img src="@/assets/home/logo.png" alt="">
        <h1>{{language.name}}</h1>
    </div>
</template>

<script setup lang="ts">
//引入能切换语言的文字
import { useI18n } from 'vue-i18n'
import { computed } from 'vue';
const { t,locale } = useI18n()
locale.value = localStorage.getItem('language') as string||'zh-cn';


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
        margin-left: 18px;
        margin-top:2px
    }
  h1{
    margin-top: 5px;
    margin-right: 20px;
    margin-left:30px;

  }
}
  
</style>