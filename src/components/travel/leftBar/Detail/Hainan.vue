<template>
    <el-card class="container">
             <h3>海南</h3>
             <div class="hot">
                <div class="box" v-for="(item,index) in data" :key="index">
                    <p>{{item.name}}</p>
                    <img :src="item.img" alt="">
                    <div class="cover"></div>
                </div>
             </div>
             <h3>北京</h3>
             <div class="out">
                <ul>
                    <li v-for="(item,index) in city" :key="index">{{item}}</li>
                </ul>
             </div>
   
    </el-card>
</template>

<script lang="ts" setup>
 import { ref } from 'vue';
 let data=ref([
    {img:new URL("@/assets/travel/Detail/Hainan/image1.jpg",import.meta.url).href,name:"三亚"},
    {img:new URL("@/assets/travel/Detail/Hainan/image2.jpg",import.meta.url).href,name:"三沙"},
    {img:new URL("@/assets/travel/Detail/Hainan/image3.jpg",import.meta.url).href,name:"西沙"},
    {img:new URL("@/assets/travel/Detail/Hainan/image4.jpg",import.meta.url).href,name:"海口"},
    {img:new URL("@/assets/travel/Detail/Hainan/image5.jpg",import.meta.url).href,name:"万宁"},
    {img:new URL("@/assets/travel/Detail/Hainan/image6.jpg",import.meta.url).href,name:"陵水"},
    {img:new URL("@/assets/travel/Detail/Hainan/image7.jpg",import.meta.url).href,name:"琼海"},
    {img:new URL("@/assets/travel/Detail/Hainan/image8.jpg",import.meta.url).href,name:"海花岛"},
    {img:new URL("@/assets/travel/Detail/Hainan/image9.jpg",import.meta.url).href,name:"海南热带旅游公园五指山景区"},
    {img:new URL("@/assets/travel/Detail/Hainan/image10.jpg",import.meta.url).href,name:"三亚亚龙湾度假区"},
    {img:new URL("@/assets/travel/Detail/Hainan/image11.jpg",import.meta.url).href,name:"保亭"},
    {img:new URL("@/assets/travel/Detail/Hainan/image12.jpg",import.meta.url).href,name:"临高"},
    {img:new URL("@/assets/travel/Detail/Hainan/image13.jpg",import.meta.url).href,name:"琼中"},
    {img:new URL("@/assets/travel/Detail/Hainan/image14.jpg",import.meta.url).href,name:"昌江"},
    {img:new URL("@/assets/travel/Detail/Hainan/image15.jpg",import.meta.url).href,name:"定安"},
    {img:new URL("@/assets/travel/Detail/Hainan/image16.jpg",import.meta.url).href,name:"南山旅游度假区"},
    {img:new URL("@/assets/travel/Detail/Hainan/image17.jpg",import.meta.url).href,name:"屯昌"},
    {img:new URL("@/assets/travel/Detail/Hainan/image18.jpg",import.meta.url).href,name:"乐东"},
 ])
 let city=ref(['北京','古北水镇','十渡风景区'])
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