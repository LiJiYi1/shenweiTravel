<template>
    <div>
      <div class="top">
        <div class="left">
            <div class="home" @click="$router.push('/home')">首页</div>
        </div>
        <div class="center">
            <div class="title">神威管理大屏可视化</div>
        </div>
        <div class="right">
          <slot class="fullScreen"></slot>
          <span>当前时间为:{{time}}</span>
        </div>
        
      </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter} from 'vue-router';
import { onMounted, ref,onBeforeUnmount} from 'vue';
import moment from 'moment';
const $router=useRouter()
let time=ref(moment().format("YYYY年MM月DD日 hh:mm:ss"))
let timer=ref()
onMounted(()=>{
timer.value=setInterval(()=>{
    time.value=moment().format("YYYY年MM月DD日 hh:mm:ss")
},1000)
})
onBeforeUnmount(()=>{
clearInterval(timer.value)
})
</script>

<style lang="less" scoped>
.top{
    width: 100%;
    height: 45px;
    display: flex;
    .left{
        flex: 1;
        background: url('@/assets/bigScreen/images/dataScreen-header-left-bg.png');
        background-size: cover;
        .home{
        width: 150px;
        height: 40px;
    text-align: center;
    line-height: 40px ;
    color:#29fcff;
    background: url('@/assets/bigScreen/images/dataScreen-header-btn-bg-l.png') no-repeat;
    background-size:cover;
    float: right;
        }
    }
    .right{
        flex: 1;
        display: flex;
        background: url('@/assets/bigScreen/images/dataScreen-header-right-bg.png');
        background-size: cover;
        justify-content: space-between;
        span{
            text-align: center;
            line-height: 40px;
            color:#29fcff;
        }
    }

    .center{
        flex: 2;
        background: url('@/assets/bigScreen/images/dataScreen-header-center-bg.png');
        background-size: cover;
        .title{
            width: 100%;
            height: 90px;
            text-align: center;
            line-height: 90px;
            font-size:40px;
            color:#29fcff;
            background: url('@/assets/bigScreen/images/dataScreen-header-center-bg.png') no-repeat;
            background-size: cover;
        }
    }
}
</style>