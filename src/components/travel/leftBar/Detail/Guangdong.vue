<template>
    <el-card class="container">
             <h3>广东</h3>
             <div class="hot">
                <div class="box" v-for="(item,index) in data" :key="index">
                    <p>{{item.name}}</p>
                    <img :src="item.img" alt="">
                    <div class="cover"></div>
                </div>
             </div>
             <h3>广西</h3>
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
    {img:new URL("@/assets/travel/Detail/Guangdong/image1.jpg",import.meta.url).href,name:"广州"},
    {img:new URL("@/assets/travel/Detail/Guangdong/image2.jpg",import.meta.url).href,name:"深圳"},
    {img:new URL("@/assets/travel/Detail/Guangdong/image3.jpg",import.meta.url).href,name:"珠海"},
    {img:new URL("@/assets/travel/Detail/Guangdong/image4.jpg",import.meta.url).href,name:"揭阳"},
    {img:new URL("@/assets/travel/Detail/Guangdong/image5.jpg",import.meta.url).href,name:"清远"},
    {img:new URL("@/assets/travel/Detail/Guangdong/image6.jpg",import.meta.url).href,name:"广州长隆旅游度假区"},
    {img:new URL("@/assets/travel/Detail/Guangdong/image7.jpg",import.meta.url).href,name:"潮汕地区"},
    {img:new URL("@/assets/travel/Detail/Guangdong/image8.jpg",import.meta.url).href,name:"佛山"},
    {img:new URL("@/assets/travel/Detail/Guangdong/image9.jpg",import.meta.url).href,name:"汕头"},
    {img:new URL("@/assets/travel/Detail/Guangdong/image10.jpg",import.meta.url).href,name:"潮州"},
    {img:new URL("@/assets/travel/Detail/Guangdong/image11.jpg",import.meta.url).href,name:"惠州"},
    {img:new URL("@/assets/travel/Detail/Guangdong/image12.jpg",import.meta.url).href,name:"湛江"},
    {img:new URL("@/assets/travel/Detail/Guangdong/image13.jpg",import.meta.url).href,name:"珠海长隆旅游度假区"},
    {img:new URL("@/assets/travel/Detail/Guangdong/image14.jpg",import.meta.url).href,name:"江门"},
    {img:new URL("@/assets/travel/Detail/Guangdong/image15.jpg",import.meta.url).href,name:"南澳岛"},
    {img:new URL("@/assets/travel/Detail/Guangdong/image16.jpg",import.meta.url).href,name:"东莞"},
    {img:new URL("@/assets/travel/Detail/Guangdong/image17.jpg",import.meta.url).href,name:"徐闻"},
    {img:new URL("@/assets/travel/Detail/Guangdong/image18.jpg",import.meta.url).href,name:"肇庆"},
 ])
 let city=ref(['桂林','阳朔','涠洲岛','南宁','北海','崇左','柳州','龙脊梯田','巴马','黄姚古镇','防城港','三江','梧州','钦州','宁明','南丹','贺州','凭祥'])
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