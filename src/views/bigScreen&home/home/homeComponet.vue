<template>
    <div>
        <el-card shadow="always">
            <div class="card">
                    <img :src="useUserStore().avator" class="avator">
                    <div class="text">
            <h1>{{language.time}}！{{useUserStore().userName}}!</h1>
            <p>{{language.welcome}}</p>
                    </div>
          
         </div>
        </el-card>
        <WeatherComponent></WeatherComponent>
        <BottomComponent></BottomComponent>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/modules/user';
import { getTime } from '@/utils/time';
import { computed } from 'vue'
//引入能切换语言的文字
import { useI18n } from 'vue-i18n'
import WeatherComponent from '../weather/weatherComponent.vue';
import BottomComponent from '@/components/bottomComponent.vue';
//当前时间
const time=getTime()
console.log(time);

//使用语言切换
const { t } = useI18n({
legacy: false,
locale:'zh-cn',
messages:{
    en: {
        time:time.message1,
        welcome:"Welcome to the Shengwei Travel Platform!",
    },
    'zh-cn': {
        time:time.message,
        welcome:"欢迎来到神威旅行平台!",
    }
}
})
const language={
  welcome:computed(() => t('welcome')),
  time:computed(() => t('time')),
}

</script>

<style lang="less" scoped>
.card{
display: flex;
.avator{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.text{
    margin-left: 20px;
    margin-top: 10px;
    p{
        margin-top:30px
    }
}

}
.welcom{
    
    height: calc(90vh - @top_bar_height);
    width: calc(100%);
}
</style>