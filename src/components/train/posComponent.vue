<template>
           <div class="container" :style="{backgroundColor:color,borderRadius:'6px',padding:'10px',}">
            <el-input v-model="from" style="width: 280px;height:40px" placeholder="起始城市" />
            <el-icon style="font-size: 40px;" @click="change"><Switch /></el-icon>
            <el-input v-model="to" style="width: 280px;height:40px" placeholder="目的地" />
       
           </div>
</template>

<script setup>
import { ref } from 'vue';
import { useColorStore } from '@/store/modules/color';
import { storeToRefs } from 'pinia';
//接收到底是哪个国家的数据
//const prop=defineProps(['country'])
let {color}=storeToRefs(useColorStore())
let from=ref('')
let to=ref('')
const change=()=>{
    const between=from.value
    from.value=to.value
    to.value=between
}
</script>

<style lang="less" scoped>
.container{
    display: flex;
    justify-content: space-between;
}

</style>