<template>
    <el-card class="container">
             <h3>云南</h3>
             <div class="hot">
                <div class="box" v-for="(item,index) in data" :key="index" @click="search(item.name)">
                    <p>{{item.name}}</p>
                    <img :src="item.img" alt="">
                    <div class="cover"></div>
                </div>
             </div>
             <h3>四川</h3>
             <div class="out">
                <ul>
                    <li v-for="(item,index) in city" :key="index" @click="search(item)">{{item}}</li>
                </ul>
             </div>
   
    </el-card>
</template>

<script lang="ts" setup>
 import { ref } from 'vue';
 let data=ref([
    {img:new URL("@/assets/travel/Detail/Yunnan/image1.jpg",import.meta.url).href,name:"丽江"},
    {img:new URL("@/assets/travel/Detail/Yunnan/image2.jpg",import.meta.url).href,name:"西双版纳"},
    {img:new URL("@/assets/travel/Detail/Yunnan/image3.jpg",import.meta.url).href,name:"大理市"},
    {img:new URL("@/assets/travel/Detail/Yunnan/image4.jpg",import.meta.url).href,name:"昆明"},
    {img:new URL("@/assets/travel/Detail/Yunnan/image5.jpg",import.meta.url).href,name:"芒市"},
    {img:new URL("@/assets/travel/Detail/Yunnan/image6.jpg",import.meta.url).href,name:"香格里拉"},
    {img:new URL("@/assets/travel/Detail/Yunnan/image7.jpg",import.meta.url).href,name:"弥勒"},
    {img:new URL("@/assets/travel/Detail/Yunnan/image8.jpg",import.meta.url).href,name:"建水"},
    {img:new URL("@/assets/travel/Detail/Yunnan/image9.jpg",import.meta.url).href,name:"梅里雪山"},
    {img:new URL("@/assets/travel/Detail/Yunnan/image10.jpg",import.meta.url).href,name:"普洱"},
    {img:new URL("@/assets/travel/Detail/Yunnan/image11.jpg",import.meta.url).href,name:"元阳"},
    {img:new URL("@/assets/travel/Detail/Yunnan/image12.jpg",import.meta.url).href,name:"宝山"},
    {img:new URL("@/assets/travel/Detail/Yunnan/image13.jpg",import.meta.url).href,name:"景洪"},
    {img:new URL("@/assets/travel/Detail/Yunnan/image14.jpg",import.meta.url).href,name:"迪庆"},
    {img:new URL("@/assets/travel/Detail/Yunnan/image15.jpg",import.meta.url).href,name:"澜沧"},
    {img:new URL("@/assets/travel/Detail/Yunnan/image16.jpg",import.meta.url).href,name:"普者黑风景区"},
    {img:new URL("@/assets/travel/Detail/Yunnan/image17.jpg",import.meta.url).href,name:"蒙自"},
    {img:new URL("@/assets/travel/Detail/Yunnan/image18.jpg",import.meta.url).href,name:"洱源"},
 ])
 let city=ref(['成都','九寨沟','甘孜藏族自治州','峨眉山风景区','雅安','青城山','乐山','稻城亚丁','都江堰','四姑娘山','色达','黄龙风景名胜区','西昌','汶川','广汉','绵阳','若尔盖','宜宾'])
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