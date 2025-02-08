<template>
    <div>
       <div class="container">
       </div>
        <el-button class="button" type="warning" @click="back()">back to home</el-button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const $router=useRouter()
const back=()=>{
    $router.push('/home')

}
</script>

<style lang="less" scoped>
 div{
    display: flex;
    background-color: #D8765D;
    justify-content: center;
    .container{
    width: 60%;
    height:100vh;
    background: url('@/assets/404.gif') no-repeat;
    background-size: contain;
    }
    .button{
        position: absolute;
        top:80vh;
        left:40vw;
        width:20vw ;
        height: 6vh;
    }
 }
</style>