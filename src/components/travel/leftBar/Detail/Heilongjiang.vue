<template>
    <el-card class="container">
             <h3>黑龙江</h3>
             <div class="hot">
                <div class="box" v-for="(item,index) in data" :key="index" @click="search(item.name)">
                    <p>{{item.name}}</p>
                    <img :src="item.img" alt="">
                    <div class="cover"></div>
                </div>
             </div>
             <h3>吉林</h3>
             <div class="out">
                <ul>
                    <li v-for="(item,index) in city" :key="index" @click="search(item)">{{item}}</li>
                </ul>
             </div>
             <h3>辽宁</h3>
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
    {img:new URL("@/assets/travel/Detail/Heilongjiang/image1.jpg",import.meta.url).href,name:"哈尔滨"},
    {img:new URL("@/assets/travel/Detail/Heilongjiang/image2.jpg",import.meta.url).href,name:"漠河"},
    {img:new URL("@/assets/travel/Detail/Heilongjiang/image3.jpg",import.meta.url).href,name:"雪乡"},
    {img:new URL("@/assets/travel/Detail/Heilongjiang/image4.jpg",import.meta.url).href,name:"伊春"},
    {img:new URL("@/assets/travel/Detail/Heilongjiang/image5.jpg",import.meta.url).href,name:"黑河"},
    {img:new URL("@/assets/travel/Detail/Heilongjiang/image6.jpg",import.meta.url).href,name:"大兴安岭"},
    {img:new URL("@/assets/travel/Detail/Heilongjiang/image7.jpg",import.meta.url).href,name:"五大连池风景区"},
    {img:new URL("@/assets/travel/Detail/Heilongjiang/image8.jpg",import.meta.url).href,name:"齐齐哈尔"},
    {img:new URL("@/assets/travel/Detail/Heilongjiang/image9.jpg",import.meta.url).href,name:"抚远"},
    {img:new URL("@/assets/travel/Detail/Heilongjiang/image10.jpg",import.meta.url).href,name:"牡丹江"},
    {img:new URL("@/assets/travel/Detail/Heilongjiang/image11.jpg",import.meta.url).href,name:"佳木斯"},
    {img:new URL("@/assets/travel/Detail/Heilongjiang/image12.jpg",import.meta.url).href,name:"亚布力滑雪旅游度假区"},
    {img:new URL("@/assets/travel/Detail/Heilongjiang/image13.jpg",import.meta.url).href,name:"同江"},
    {img:new URL("@/assets/travel/Detail/Heilongjiang/image14.jpg",import.meta.url).href,name:"嘉荫"},
    {img:new URL("@/assets/travel/Detail/Heilongjiang/image15.jpg",import.meta.url).href,name:"塔河"},
    {img:new URL("@/assets/travel/Detail/Heilongjiang/image16.jpg",import.meta.url).href,name:"依兰"},
    {img:new URL("@/assets/travel/Detail/Heilongjiang/image17.jpg",import.meta.url).href,name:"双鸭山"},
    {img:new URL("@/assets/travel/Detail/Heilongjiang/image18.jpg",import.meta.url).href,name:"饶河"},
 ])
 let city=ref(['延吉','长白山','长春','长白山北坡','吉林市','图们','白山','长白山','西坡','珲春','长白山南坡','通化','集安','龙井','和龙'])
 let city1=ref(['大连','沈阳','丹东','本溪','锦州','辽阳','盘锦','葫芦岛','营口','兴城','绥中','东戴河','义县','朝阳','宽甸','桓仁','凤城','东港'])
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