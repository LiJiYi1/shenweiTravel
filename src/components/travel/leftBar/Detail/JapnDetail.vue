<template>
    <el-card class="container">
             <h3>东南亚</h3>
             <div class="hot">
                <div class="box" v-for="(item,index) in data" :key="index" @click="search(item.name)">
                    <p>{{item.name}}</p>
                    <img :src="item.img" alt="">
                    <div class="cover"></div>
                </div>
             </div>
             <h3>日本</h3>
             <div class="out">
                <ul>
                    <li v-for="(item,index) in city" :key="index" @click="search(item)">{{item}}</li>
                </ul>
             </div>
             <h3>韩国</h3>
             <div class="out">
                <ul>
                    <li v-for="(item,index) in city1" :key="index" @click="search(item)">{{item}}</li>
                </ul>
             </div>
    </el-card>
</template>

<script lang="ts" setup>
 import { ref } from 'vue';
 let data=ref([
    {img:new URL("@/assets/travel/Detail/Japan/image1.jpg",import.meta.url).href,name:"新加坡"},
    {img:new URL("@/assets/travel/Detail/Japan/image2.jpg",import.meta.url).href,name:"泰国"},
    {img:new URL("@/assets/travel/Detail/Japan/image3.jpg",import.meta.url).href,name:"印度尼西亚"},
    {img:new URL("@/assets/travel/Detail/Japan/image4.jpg",import.meta.url).href,name:"马来西亚"},
    {img:new URL("@/assets/travel/Detail/Japan/image5.jpg",import.meta.url).href,name:"越南"},
    {img:new URL("@/assets/travel/Detail/Japan/image6.jpg",import.meta.url).href,name:"巴厘岛"},
    {img:new URL("@/assets/travel/Detail/Japan/image7.jpg",import.meta.url).href,name:"吉隆坡"},
    {img:new URL("@/assets/travel/Detail/Japan/image8.jpg",import.meta.url).href,name:"曼谷"},
    {img:new URL("@/assets/travel/Detail/Japan/image9.jpg",import.meta.url).href,name:"胡志明市"},
    {img:new URL("@/assets/travel/Detail/Japan/image10.jpg",import.meta.url).href,name:"仙本郡"},
    {img:new URL("@/assets/travel/Detail/Japan/image11.jpg",import.meta.url).href,name:"普吉岛"},
    {img:new URL("@/assets/travel/Detail/Japan/image12.jpg",import.meta.url).href,name:"热浪岛"},
    {img:new URL("@/assets/travel/Detail/Japan/image13.jpg",import.meta.url).href,name:"芭提雅"},
    {img:new URL("@/assets/travel/Detail/Japan/image14.jpg",import.meta.url).href,name:"哥打京那巴鲁"},
    {img:new URL("@/assets/travel/Detail/Japan/image15.jpg",import.meta.url).href,name:"河内"},
    {img:new URL("@/assets/travel/Detail/Japan/image16.jpg",import.meta.url).href,name:"老挝"},
    {img:new URL("@/assets/travel/Detail/Japan/image17.jpg",import.meta.url).href,name:"泗水"},
    {img:new URL("@/assets/travel/Detail/Japan/image18.jpg",import.meta.url).href,name:"菲律宾"},
 ])
 let city=ref(['日本','大阪','东京','京都','九州','福冈','熊本','札幌','奈良','富士山','镰仓市','箱根','富山','名古屋','小樽','伊豆半岛','青森','春日部市'])
 let city1=ref(['韩国','济州岛','首尔','仁川','釜山','龙仁市','庆州','坡州市','春川市','加平郡','利川市','水原','束草市','洪川郡'])
const search=(pos:string)=>{
    window.open(`https://travelsearch.fliggy.com/index.htm?searchType=product&keyword=${pos}&category=MULTI_SEARCH&pagenum=1`)
}
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