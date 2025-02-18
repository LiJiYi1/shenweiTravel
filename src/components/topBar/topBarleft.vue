<template>
        <!-- 左侧 -->
        <div class="left"> 
        <el-icon size="40" style="margin-right:10px;" v-show="isFold" @click="toExpand()"><Fold/></el-icon>
        <el-icon size="40" style="margin-right:10px;" v-show="!isFold" @click="toFold()"><Expand/></el-icon>
        <el-breadcrumb :separator-icon="ArrowRight"  style="user-select: none;font-size:20px">
        <el-breadcrumb-item style="white-space:nowrap;" v-for="(item,index) in $route.matched" :key="index" :to="{path:item.path}" v-show="item.meta.title">  
            <el-icon  style="vertical-align:bottom;">
                <component :is="item.meta.icon" ></component>
            </el-icon>
            <!-- 语言不同用v-show处理 -->
            <span v-show="lang==='zh-cn'">&nbsp;{{item.meta.title}}</span>
            <span v-show="lang==='en'">&nbsp;{{item.meta.Entitle}}</span>
        </el-breadcrumb-item>
        </el-breadcrumb>
        </div>  
</template>

<script setup lang="ts"> 

import { ArrowRight } from '@element-plus/icons-vue';
import { ref,inject, type Ref,watch} from 'vue';
import {useRoute} from 'vue-router'
//引入能切换语言的文字
import { useI18n } from 'vue-i18n'
const { locale } = useI18n();
let lang=ref(locale.value)
//用侦听器侦听这玩意value的变化,他一变化就把变量lang给变了,方便进行切换
watch(()=>locale.value,()=>{
lang.value=locale.value

})

const $route=useRoute()
//console.log($route.matched);

// $route.matched.forEach(e=>{
//     console.log(e);
    
// })
//来一个变量
let isFold=ref(true);
//利用inject拿到爷爷组件nvaComponent提供的是否折叠的数据
let isCollapse:Ref<boolean>=inject('isCollapse') as Ref<boolean>
const toExpand=()=>{
  isFold.value=false
  isCollapse.value=true

}
const toFold=()=>{
 isFold.value=true
 isCollapse.value=false

}



</script>

<style lang="less" scoped>

    .left{
        display: flex;
        align-items: center;
        margin-left: 20px;
    }

</style>