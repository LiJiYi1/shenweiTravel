<template>
    <div>
        <el-card shadow="always">
            <div class="card">
                    <img :src="useUserStore().avator" class="avator">
                    <div class="text">
            <h1>{{time}}好,{{useUserStore().userName}}!</h1>
            <p>欢迎来到神威管理平台!</p>
                    </div>
          
         </div>
        </el-card>
        <img src="@/assets/home/weblcom.svg" alt="" class="welcom">
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/modules/user';
import { getTime } from '@/utils/time';






//当前事件
const time=getTime()
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