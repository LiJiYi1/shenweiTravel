<template>
    <div>
         <!-- 天气预报 -->
        <div class="weatherTitle">
        <!-- 遍历省 -->
        <el-select
        v-model="Region"
        placeholder="山东省"
        style="width: 100px;margin-top:20px"
        >
        <el-option @click="set()" :label="item.name" :value="item.name" v-for="(item,index) in city" :key="index"/>
        </el-select>
        <!--遍历市-->
        <div v-for="(item,index) in city" :key="index" >
            <el-select
            v-model="region"
            style="width: 100px;margin-top:20px"
            v-if="item.name===Region">
               <el-option @click="getData(item1.name)" :label="item1.name" :value="item1.name" v-for="(item1,index1) in item.city" :key="index1"/> 
            </el-select>
        </div>
     
     
        <h1>天气预报</h1>
    </div>
   
       <div class="box">
        <div class="innerBox">
            <div class="topTime">
                <p>{{time}}</p>
                <p>最近更新:{{lastUpdate}}</p>
            </div>
            <div class="centerWeather">
                <div class="img3"></div>
                <div style="display: flex;">
                <h1>{{temputureNow}}</h1>
                <sup>℃</sup>
                </div>
                <p>最低:{{ low1 }}℃</p>
                <p>最高:{{ high1 }}℃</p>
                <h1 style="margin-right: 4vh; font-size:38px">{{weatherNow}}</h1>
            </div>
            <div class="bottomWeather">
                <p>风向:{{direction1}}风</p>
                <p>降水量:{{ rainfall }}mm</p>
                <p>风速:{{speed1}}10km/h</p>
                <p>相对湿度:{{humidity}}%rh</p>

            </div>
            <p>{{location}}{{time}}天气预报,今天{{low1}}℃-{{high1}}℃,{{ weatherNow }}, 风向情况:{{ direction1 }}风,总降水量:{{rainfall}}mm,相对湿度:{{humidity}}%。{{location}}
            今日生活指数: 交通指数,{{traffic}} ({{trafficDetail}}),运动指数,{{sport}} ({{sportDetail}}),
            未来3天,最低温度{{low2}}℃，最高温度{{high2}}℃,查询{{location}}实时、3天天气预报,上神威天气预报频道。</p>
        </div>
       </div>
       <!-- 三天天气预测 -->
        <h1>三天天气预测</h1>
        <el-card shadow="always" class="day3">
            <div>
            <div class="img"></div>
            <div class="first">
                <p>日期:{{date1}}</p>
                <p>最高温度:{{high1}}<sup>℃</sup></p>
                <p>最低温度:{{low1}}<sup>℃</sup></p>
                <p>风向:{{direction1}}</p>
                <p>风速:{{speed1}}</p>
                <p>白天天气:{{weatherday1}}</p>
                <p>夜晚天气:{{weathernight1}}</p>
            </div>
            <div class="img1"></div>
             <div class="second">
               <div>日期:{{date2}}</div>
                <p>最高温度:{{high2}}<sup>℃</sup></p>
                <p>最低温度:{{low2}}<sup>℃</sup></p>
                <p>风向:{{direction2}}</p>
                <p>风速:{{speed2}}</p>
                <p>白天天气:{{weatherday2}}</p>
                <p>夜晚天气:{{weathernight2}}</p>
            </div>
            <div class="img2"></div>
            <div class="third">
               <div>日期:{{date3}}</div>
                <p>最高温度:{{high3}}<sup>℃</sup></p>
                <p>最低温度:{{low3}}<sup>℃</sup></p>
                <p>风向:{{direction3}}</p>
                <p>风速:{{speed3}}</p>
                <p>白天天气:{{weatherday3}}</p>
                <p>夜晚天气:{{weathernight3}}</p>
            </div>
            </div>
        </el-card>
        <!-- 穿衣指数 -->
        <h1>出行穿衣指数</h1>
        <el-card shadow="always" class="dressing">
            <h3 >{{ dressing }}</h3>
            <p style="margin-top:30px">{{ suggest }}</p>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { onMounted, ref,onBeforeUnmount} from 'vue';
import moment from 'moment';
import data from '@/assets/home/china.json'
import { citys } from '@/assets/home/name';
const city=data
//持久化数据
const Region=ref(localStorage.getItem('province'))||ref('山东省')
//持久化数据
const region=ref(localStorage.getItem('city'))||ref('威海市')
//当前时间
let time=ref(moment().format("YYYY年MM月DD日 hh:mm:ss"))
//计时器
let timer=ref()
//天气最后更新时间
let lastUpdate=ref();
//三天
//今天
let date1=ref()
let high1=ref()
let low1=ref()
//风向
let direction1=ref()
//风速
let speed1=ref()
//天气
let weatherday1=ref()
let weathernight1=ref()
//明天
let date2=ref()
let high2=ref()
let low2=ref()
//风向
let direction2=ref()
//风速
let speed2=ref()
//天气
let weatherday2=ref()
let weathernight2=ref()
//后天
let date3=ref()
let high3=ref()
let low3=ref()
//风向
let direction3=ref()
//风速
let speed3=ref()
//天气
let weatherday3=ref()
let weathernight3=ref()
//穿指数
let dressing=ref()
//建议穿的衣服
let suggest=ref()
//当前温度
let temputureNow=ref()
//当前天气
let weatherNow=ref()
//降水量
let rainfall=ref()
//空气湿度
let humidity=ref()
//地点
let location=ref()
//交通指数
let traffic=ref()
let trafficDetail=ref()
//旅游指数
let sport=ref()
let sportDetail=ref()
onMounted(()=>{
getData(localStorage.getItem('city')||'威海市')
//页面挂载红请求数据
timer.value=setInterval(()=>{
    time.value=moment().format("YYYY年MM月DD日 hh:mm:ss")
},1000)
})
//点击省份选择的时候让市选择变成省会
const set=()=>{
city.forEach((e)=>{
    if(e.name===Region.value){
         if(localStorage.getItem('province'))localStorage.removeItem('province')
         localStorage.setItem('province',e.name)
         region.value=e.city[0].name
         getData(region.value)
    }
})
}
//封装一个方法请求数据
async function getData(name:string){
let KEY;
for(let key in citys){
    let name1:string=citys[key]
    if(name===name1){
        KEY=key
        if (localStorage.getItem('city'))localStorage.removeItem('city')
        localStorage.setItem('city',citys[key])
    }
}
//请求生活指数
const date =await axios.get(`https://api.seniverse.com/v3/life/suggestion.json?key=S2iuEfpXM1ml93Gau&location=${KEY}&language=zh-Hans&days=5`)
dressing.value=date.data.results[0].suggestion[0].dressing.brief
suggest.value=date.data.results[0].suggestion[0].dressing.details
traffic.value=date.data.results[0].suggestion[0].traffic.brief
trafficDetail.value=date.data.results[0].suggestion[0].traffic.details
sport.value=date.data.results[0].suggestion[0].sport.brief
sportDetail.value=date.data.results[0].suggestion[0].sport.details
console.log(date.data.results[0].suggestion[0]);
//请求3天天气
const weather3 =await axios.get(`https://api.seniverse.com/v3/weather/daily.json?key=S2iuEfpXM1ml93Gau&location=${KEY}&language=zh-Hans&unit=c&start=-1&days=5`)
//今天
date1.value=weather3.data.results[0].daily[0].date
high1.value=weather3.data.results[0].daily[0].high
low1.value=weather3.data.results[0].daily[0].low
direction1.value=weather3.data.results[0].daily[0].wind_direction
speed1.value=weather3.data.results[0].daily[0].wind_speed
weatherday1.value=weather3.data.results[0].daily[0].text_day
weathernight1.value=weather3.data.results[0].daily[0].text_night
rainfall.value=weather3.data.results[0].daily[0].rainfall
humidity.value=weather3.data.results[0].daily[0].humidity
//明天
date2.value=weather3.data.results[0].daily[1].date
high2.value=weather3.data.results[0].daily[1].high
low2.value=weather3.data.results[0].daily[1].low
direction2.value=weather3.data.results[0].daily[1].wind_direction
speed2.value=weather3.data.results[0].daily[1].wind_speed
weatherday2.value=weather3.data.results[0].daily[1].text_day
weathernight2.value=weather3.data.results[0].daily[1].text_night
//后天
date3.value=weather3.data.results[0].daily[2].date
high3.value=weather3.data.results[0].daily[2].high
low3.value=weather3.data.results[0].daily[2].low
direction3.value=weather3.data.results[0].daily[2].wind_direction
speed3.value=weather3.data.results[0].daily[2].wind_speed
weatherday3.value=weather3.data.results[0].daily[2].text_day
weathernight3.value=weather3.data.results[0].daily[2].text_night
//请求天气情况
const data =await axios.get(`https://api.seniverse.com/v3/weather/now.json?key=S2iuEfpXM1ml93Gau&location=${KEY}&language=zh-Hans&unit=c`)
lastUpdate.value=data.data.results[0].last_update.substr(11,8)
location.value=data.data.results[0].location.name
temputureNow.value=data.data.results[0].now.temperature
weatherNow.value=data.data.results[0].now.text
}
onBeforeUnmount(()=>{
clearInterval(timer.value)
})







</script>

<style lang="less" scoped>
div{
    .weatherTitle{
        display: flex;
    }
    h1{
          margin-top: 20px;
    }
    .box{
        width: 100%;
        height: 460px;
        background: url('@/assets/home/weather.jpg') no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius:5px;
        margin-top: 20px;
        .innerBox{
            width: 80%;
            height: 80%;
            background: rgba(0, 0, 0, 0.15);
            
            padding: 20px;
            .topTime{
                display: flex;
                justify-content: space-between;
            }
            .centerWeather{
                display: flex;
                justify-content: space-between;
                margin-top: 40px;
                h1{
                    font-size: 6vw;
                }
                sup{
                    font-size:5vh
                }
                p{
                   font-size:4vh
                }
            }
            .bottomWeather{
                  display: flex;
                  justify-content: space-between;
                  padding: 0px;
            }
            p{ 
                margin-top: 20px;
                margin-left: 32px;
                line-height: 25px;
            }
            
        }
    }
    .dressing{
        padding: 20px;
        margin-top: 20px;
    }
    .day3{
         padding: 20px;
        margin-top: 20px;
        div{
        display: flex;
        justify-content: space-between;
        .first{
            display: flex;
            flex-direction: column;
            margin-top: -20px;
            p{  
                padding-top: 20px;
            }
        }
        .second{
            display: flex;
            flex-direction: column;
            p{
                padding-top: 20px;
            }
        }
        .third{
            display: flex;
            flex-direction: column;
            p{
                padding-top: 20px;
            }
        }
        }
     
         
    }
}
.img{
width: 200px;
height:130px;
margin-top:40px;
background:url('@/assets/home/weather.png') no-repeat;
background-size: cover;
}
.img1{
width: 200px;
height:130px;
margin-top:40px;
background:url('@/assets/home/weather1.png') no-repeat;
background-size: cover;
}
.img2{
width: 200px;
height:130px;
margin-top:40px;
background:url('@/assets/home/weather2.png') no-repeat;
background-size: cover;
}
.img3{
width: 18%;
height:18vh;
background:url('@/assets/home/weather1.png') no-repeat;
background-size: cover;
margin-left: -20px;
}
</style>