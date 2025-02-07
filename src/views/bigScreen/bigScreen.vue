<template>
    <div>
     <div class="container" ref="container">
        <div class="screen" ref="screen">
            <!-- 顶部组件 -->
           <topComponent><div class="full" @click="FullScreen">全屏</div></topComponent>
           <!-- 底部组件 -->
           <BottomComponent></BottomComponent>
        </div>
        
     </div>
    </div>
</template>       
<script setup lang="ts">
import { ref,onMounted } from 'vue';
import topComponent from './component/topComponent.vue';
import BottomComponent from './component/bottomComponent/bottomComponent.vue';
const container=ref()
const screen=ref()
onMounted(()=>{
//dom元素只要一挂载,就让他拽回去(因为我们在样式里写了fixed固定定位让他的左上角在屏幕中心,这样就可以把他的缩放中心放在屏幕中心了)
//类似于图形学的MVP矩阵, 他默认缩放的中心不在中心,我们要给他平移到中心去
//先缩放,再平移
screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
})
const FullScreen=()=>{
container.value.requestFullscreen()
}
//定义大屏缩放比例
function getScale(w = 1920, h = 1080) {
    const ww = window.innerWidth / w;
    const wh = window.innerHeight / h;
    return ww < wh ? ww : wh;
}
//监听视口变化
window.onresize = () => {
    screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
}

</script>

<style lang="less" scoped>
div{
    .container{
        width: 100vw;
        height: 100vh;
        background: url('@/assets/bigScreen/images/bg.png') no-repeat;
        background-size: cover;
        .screen{
            position: fixed;
            left:50%;
            top: 50%;
            width: 1920px;
            height:1080px;
            transform-origin: left top;
        }
    }
}
.full{
    width: 140px;
    height: 40px;
    text-align: center;
    line-height: 40px ;
    color:#29fcff;
    background: url('@/assets/bigScreen/images/dataScreen-header-btn-bg-r.png') no-repeat;
    background-size:cover;
}

</style>