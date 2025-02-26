<template>
    <el-card class="container">
             <h3>澳大利亚/新西兰</h3>
             <div class="hot">
                <div class="box" v-for="(item,index) in data" :key="index">
                    <p>{{item.name}}</p>
                    <img :src="item.img" alt="">
                    <div class="cover"></div>
                </div>
             </div>
             <h3>中东</h3>
             <div class="out">
                <ul>
                    <li v-for="(item,index) in city" :key="index">{{item}}</li>
                </ul>
             </div>
             <h3>非洲</h3>
             <div class="out">
                <ul>
                    <li v-for="(item,index) in city1" :key="index">{{item}}</li>
                </ul>
             </div>
    </el-card>
</template>

<script lang="ts" setup>
 import { ref } from 'vue';
 let data=ref([
    {img:new URL("@/assets/travel/Detail/FeiZhou/image1.jpg",import.meta.url).href,name:"新西兰"},
    {img:new URL("@/assets/travel/Detail/FeiZhou/image2.jpg",import.meta.url).href,name:"澳大利亚"},
    {img:new URL("@/assets/travel/Detail/FeiZhou/image3.jpg",import.meta.url).href,name:"悉尼"},
    {img:new URL("@/assets/travel/Detail/FeiZhou/image4.jpg",import.meta.url).href,name:"大堡礁"},
    {img:new URL("@/assets/travel/Detail/FeiZhou/image5.jpg",import.meta.url).href,name:"凯恩斯"},
    {img:new URL("@/assets/travel/Detail/FeiZhou/image6.jpg",import.meta.url).href,name:"基督城"},
    {img:new URL("@/assets/travel/Detail/FeiZhou/image7.jpg",import.meta.url).href,name:"奥克兰"},
    {img:new URL("@/assets/travel/Detail/FeiZhou/image8.jpg",import.meta.url).href,name:"布里斯班"},
    {img:new URL("@/assets/travel/Detail/FeiZhou/image9.jpg",import.meta.url).href,name:"库兰达"},
    {img:new URL("@/assets/travel/Detail/FeiZhou/image10.jpg",import.meta.url).href,name:"皇后镇"},
    {img:new URL("@/assets/travel/Detail/FeiZhou/image11.jpg",import.meta.url).href,name:"北岛"},
    {img:new URL("@/assets/travel/Detail/FeiZhou/image12.jpg",import.meta.url).href,name:"大洋路"},
    {img:new URL("@/assets/travel/Detail/FeiZhou/image13.jpg",import.meta.url).href,name:"霍巴特"},
    {img:new URL("@/assets/travel/Detail/FeiZhou/image14.jpg",import.meta.url).href,name:"墨尔本"},
    {img:new URL("@/assets/travel/Detail/FeiZhou/image15.jpg",import.meta.url).href,name:"南岛"},
    {img:new URL("@/assets/travel/Detail/FeiZhou/image16.jpg",import.meta.url).href,name:"珀斯"},
    {img:new URL("@/assets/travel/Detail/FeiZhou/image17.jpg",import.meta.url).href,name:"菲利普岛"},
    {img:new URL("@/assets/travel/Detail/FeiZhou/image18.jpg",import.meta.url).href,name:"戈斯福德"},
 ])
 let city=ref(['埃及','迪拜','土耳其','格鲁吉亚','开罗','阿塞拜疆','亚美尼亚','阿联酋','沙特','阿拉伯','伊斯坦布尔','赫尔格达','阿布扎比'])
 let city1=ref(['埃及','毛里求斯','肯尼亚','坦桑尼亚','开罗','博茨瓦纳','塞舌尔','赫尔格达','阿鲁沙','马达加斯加','南非','卡萨布兰卡','摩洛哥','突尼斯','纳米比亚','阿斯旺','突尼斯','津巴布韦'])
</script>

<style lang="less" scoped>
.container{
    width: 550px;
    height: 560px;
    .hot{
        width: 100%;
        margin-top:10px;
        height: 200px;
        .box{
           position: relative;  
           float: left;margin-right:10px;
           overflow:hidden;
           width:75px;
           height:60px;
        img{
            margin-top:12px;
            width: 75px;
            transition: all 0.3s ease;
        }
        .cover{
            position: absolute;
            left:0px;
            bottom: 0px;
            width: 75px;
            height: 20px;
            background: linear-gradient(0deg, rgba(0, 0, 0, .8), transparent 100%);
            pointer-events: none;
        }
        img:hover{
            width: 80px;
            margin-left: -2px;
        }
        p{
            position: absolute;
            font-size: 12px;
            width: 75px;
            text-align: center;
            bottom:2px;
            left:0;
            color: white;
            z-index: 1;
        }
        }
    
    }
    .out{
        width: 100%;
        height: 70px;
        ul{
            margin-top: 10px;
            li{
                float: left;
                margin-top: 10px;
                font-size: 14px;
                padding-right: 10px;
            }
        }
    }
}
</style>