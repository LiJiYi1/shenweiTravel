<template>
    <el-card class="container">
             <h3>热门目的地</h3>
             <div class="hot">
                <div class="box" v-for="(item,index) in data" :key="index" @click="search(item.name)">
                    <p>{{item.name}}</p>
                    <img :src="item.img" alt="">
                    <div class="cover"></div>
                </div>
             </div>
             <h3>出境畅游</h3>
             <div class="out">
                <ul>
                    <li v-for="(item,index) in city" :key="index" @click="search(item)">{{item}}</li>
                </ul>
             </div>
             <h3>周边目的地</h3>
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
    {img:new URL("@/assets/travel/Detail/hot/image1.jpg",import.meta.url).href,name:"威海"},
    {img:new URL("@/assets/travel/Detail/hot/image2.jpg",import.meta.url).href,name:"北京"},
    {img:new URL("@/assets/travel/Detail/hot/image3.jpg",import.meta.url).href,name:"日本"},
    {img:new URL("@/assets/travel/Detail/hot/image4.jpg",import.meta.url).href,name:"青岛"},
    {img:new URL("@/assets/travel/Detail/hot/image5.jpg",import.meta.url).href,name:"韩国"},
    {img:new URL("@/assets/travel/Detail/hot/image6.jpg",import.meta.url).href,name:"南京"},
    {img:new URL("@/assets/travel/Detail/hot/image7.jpg",import.meta.url).href,name:"香港"},
    {img:new URL("@/assets/travel/Detail/hot/image8.jpg",import.meta.url).href,name:"大连"},
    {img:new URL("@/assets/travel/Detail/hot/image9.jpg",import.meta.url).href,name:"杭州"},
    {img:new URL("@/assets/travel/Detail/hot/image10.jpg",import.meta.url).href,name:"西安"},
    {img:new URL("@/assets/travel/Detail/hot/image11.jpg",import.meta.url).href,name:"苏州"},
    {img:new URL("@/assets/travel/Detail/hot/image12.jpg",import.meta.url).href,name:"丽江"},
    {img:new URL("@/assets/travel/Detail/hot/image13.jpg",import.meta.url).href,name:"重庆"},
    {img:new URL("@/assets/travel/Detail/hot/image14.jpg",import.meta.url).href,name:"张家界"},
    {img:new URL("@/assets/travel/Detail/hot/image15.jpg",import.meta.url).href,name:"成都"},
    {img:new URL("@/assets/travel/Detail/hot/image16.jpg",import.meta.url).href,name:"烟台"},
    {img:new URL("@/assets/travel/Detail/hot/image17.jpg",import.meta.url).href,name:"上海"},
    {img:new URL("@/assets/travel/Detail/hot/image18.jpg",import.meta.url).href,name:"桂林"},
    {img:new URL("@/assets/travel/Detail/hot/image19.jpg",import.meta.url).href,name:"普陀山"},
    {img:new URL("@/assets/travel/Detail/hot/image20.jpg",import.meta.url).href,name:"西双版纳"},
    {img:new URL("@/assets/travel/Detail/hot/image21.jpg",import.meta.url).href,name:"新加坡"},
    {img:new URL("@/assets/travel/Detail/hot/image22.jpg",import.meta.url).href,name:"九寨沟"},
    {img:new URL("@/assets/travel/Detail/hot/image23.jpg",import.meta.url).href,name:"马尔代夫"},
    {img:new URL("@/assets/travel/Detail/hot/image24.jpg",import.meta.url).href,name:"黄山风景区"},
 ])
 let city=ref(['日本','韩国','香港','新加坡','马尔代夫','济州岛','新西兰','美国','泰国','首尔','印度尼西亚','澳大利亚','大阪','英国','意大利','法国','俄罗斯','埃及','迪拜','马来西亚'])
 let city1=ref(['威海','青岛','大连','烟台','泰山','济南','淄博','潍坊','临沂','荣成','曲阜','徐州','秦皇岛','沂水','天津','德州','青州','丹东'])
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
        height: 260px;
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