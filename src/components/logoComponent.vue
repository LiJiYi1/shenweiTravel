<template>
    <div>
        <img src="@/assets/home/logo.png" alt="">
        <p>{{language.name}}</p>
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
justify-content: space-between;
align-items: start;
  img{   
        width: 40px;
        height:40px;
        margin-left: 18px;
        margin-top:2px
    }
  p{
    width: 200px;
    text-align: center;
    margin-top: 2px;
    font-size: 25px;
    height: 45px;
    line-height: 45px;
    margin-right: 20px;
    margin-left: 10px;
    
    font-family: ZCOOL KuaiLe,cursive;
    color: #FFD800;
  }
}
  
</style>