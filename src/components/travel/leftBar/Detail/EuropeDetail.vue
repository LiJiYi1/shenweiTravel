<template>
    <el-card class="container">
             <h3>欧洲</h3>
             <div class="hot">
                <div class="box" v-for="(item,index) in data" :key="index">
                    <p>{{item.name}}</p>
                    <img :src="item.img" alt="">
                    <div class="cover"></div>
                </div>
             </div>
             <h3>美洲</h3>
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
    {img:new URL("@/assets/travel/Detail/Europe/image1.jpg",import.meta.url).href,name:"英国"},
    {img:new URL("@/assets/travel/Detail/Europe/image2.jpg",import.meta.url).href,name:"意大利"},
    {img:new URL("@/assets/travel/Detail/Europe/image3.jpg",import.meta.url).href,name:"法国"},
    {img:new URL("@/assets/travel/Detail/Europe/image4.jpg",import.meta.url).href,name:"俄罗斯"},
    {img:new URL("@/assets/travel/Detail/Europe/image5.jpg",import.meta.url).href,name:"冰岛"},
    {img:new URL("@/assets/travel/Detail/Europe/image6.jpg",import.meta.url).href,name:"巴黎"},
    {img:new URL("@/assets/travel/Detail/Europe/image7.jpg",import.meta.url).href,name:"西班牙"},
    {img:new URL("@/assets/travel/Detail/Europe/image8.jpg",import.meta.url).href,name:"德国"},
    {img:new URL("@/assets/travel/Detail/Europe/image9.jpg",import.meta.url).href,name:"土耳其"},
    {img:new URL("@/assets/travel/Detail/Europe/image10.jpg",import.meta.url).href,name:"瑞士"},
    {img:new URL("@/assets/travel/Detail/Europe/image11.jpg",import.meta.url).href,name:"格鲁吉亚"},
    {img:new URL("@/assets/travel/Detail/Europe/image12.jpg",import.meta.url).href,name:"塞尔维亚"},
    {img:new URL("@/assets/travel/Detail/Europe/image13.jpg",import.meta.url).href,name:"巴塞罗那"},
    {img:new URL("@/assets/travel/Detail/Europe/image14.jpg",import.meta.url).href,name:"伦敦"},
    {img:new URL("@/assets/travel/Detail/Europe/image15.jpg",import.meta.url).href,name:"莫斯科"},
    {img:new URL("@/assets/travel/Detail/Europe/image16.jpg",import.meta.url).href,name:"奥地利"},
    {img:new URL("@/assets/travel/Detail/Europe/image17.jpg",import.meta.url).href,name:"罗马"},
    {img:new URL("@/assets/travel/Detail/Europe/image18.jpg",import.meta.url).href,name:"瑞典"},
 ])
 let city=ref(['美国','巴西','纽约','古巴','加拿大','塞班岛','洛杉矶','智利','墨西哥','黄石国家公园','旧金山','奥兰多'])

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