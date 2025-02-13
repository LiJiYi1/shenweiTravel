<template>
    <div>
    <div style="display: flex;">
      <el-card class="search">
        <div class="top">
        <!-- 目的地 -->
        <div class="to">
        <p>目的地</p>
          <el-input
          style="width: 180px;margin-top:10px;font-size:25px;height:70px"
          size="large"
          placeholder="北京"
          v-model="position"
          :suffix-icon="CaretBottom"
          @focus="search"

        />
         </div>
         <!-- 搜索提示 -->
        <div class="posSearch" v-show="posSearch">
            <el-tabs type="border-card">
               <el-tab-pane label="热门城市" disabled="true">
                <span @click="change('香港')">香港</span>
                <span @click="change('三亚')">三亚</span>
                <span @click="change('澳门')">澳门</span>
                <span @click="change('北京')">北京</span>
                <span @click="change('上海')">上海</span>
                <span @click="change('广州')">广州</span>
                <span @click="change('厦门')">厦门</span>
                <span @click="change('深圳')">深圳</span>
                <span @click="change('杭州')">杭州</span>
                <span @click="change('成都')">成都</span>
                <span @click="change('西安')">西安</span>
                <span @click="change('黄山')">黄山</span>
                <span @click="change('苏州')">苏州</span>
                <span @click="change('桂林')">桂林</span>
                <span @click="change('南京')">南京</span>
                <span @click="change('九寨沟')">九寨沟</span>
                <span @click="change('青岛')">青岛</span>
                <span @click="change('重庆')">重庆</span>
                <span @click="change('杭州')">杭州</span>
                <span @click="change('哈尔滨')">哈尔滨</span>
               </el-tab-pane>
            </el-tabs>
        </div>
        <!-- 关键词 -->
        <div class="importantWord" >
        <p style="margin-left:20px">关键词</p>
        <el-input
        style="width: 400px;height:70px;margin-left:20px;margin-top:10px;font-size:25px"
        size="large"
        placeholder="位置/品牌/酒店"
        clearable
        @focus="key"
        v-model="keys"
        />
        </div>
         <!-- 搜索提示 -->
        <div class="keySearch" v-show="keySearch">
            <el-tabs type="border-card">
               <el-tab-pane label="猜你想搜" disabled="true">
                <span @click="change1('迪士尼')">迪士尼</span>
                <span @click="change1('国际机场')">国际机场</span>
                <span @click="change1('步行街')">步行街</span>
                <span @click="change1('高铁站')">高铁站</span>
                <span @click="change1('维也纳')">维也纳</span>
                <span @click="change1('度假村')">度假村</span>
               </el-tab-pane>
            </el-tabs>
        </div>
        </div>
        <div class="bt">
        <el-date-picker
        v-model="CheckInOut"
        type="daterange"
        :range-separator="diff"
        start-placeholder="入住日期"
        end-placeholder="离店日期"
        style="font-size:20px;height:60px"
        size="large"
        @change="val"
      />
        </div>
        <el-button style="width: 200px;height:60px;margin-top:20px;margin-left:225px;border-radius:20px">搜索酒店</el-button>
      </el-card>
      <el-card class="poetry">
        <div class="right">
        <div class="r-t"> 
            <h1 style="font-size:80px">{{time1}}</h1>
            <div style="border: 6px solid white;padding:10px;width:80px;font-size:20px">{{time}}</div>
        </div>
        <div class="r-b"> 
            <div>苍山负雪,明烛天南</div>
            <div style="font-size: 12px;"><el-icon><Location /></el-icon>中国.新疆.天山天池</div>
         </div>
         <div class="cover"></div>
        </div>
      
      </el-card>
    </div>
     
     <el-card class="bottom">
        <div>
            <div  style="font-size:14px">探索世界从未如此简单，欢迎来到神威旅行 —— 您全方位的旅行伙伴！</div>
            <p>在神威旅行，我们致力于为您提供一站式、高效便捷的旅行预订服务。无论是商务出差还是休闲度假，我们的平台都能满足您的需求。我们的业务涵盖以下方面:</p>
            <br><p>1. 机票预订：覆盖全球多个航线，提供各种舱位选择，保障您能以最优惠的价格开始旅程。</p><br>
            <p>2. 酒店预订：合作众多国内外知名酒店、度假村，从经济型到豪华型，总有一间适合您的风格和预算。</p><br><p>3. 火车票预订：无论是高铁还是普通列车，我们助您轻松规划国内各地的铁路旅行。</p><br>
            <p>4. 旅游度假：精心挑选的旅游套餐，覆盖海内外热门旅游目的地，让您的假期充满精彩。</p><br>
            <p data-spm-anchor-id="181.11358650.bottom-summary.i0.6c1c223eOTWXAg">5. 景点门票：提前预订国内外热门景点门票，避免长时间排队，享受无缝的旅行体验。</p><br>
            <p>6. 商旅服务：专为企业客户量身定制的商务旅行解决方案，支持企业差旅管理和费用控制。</p><br>
            <p>7. 交通出行：无论是打车、顺风车，还是接送机、租车服务，我们都能为您提供方便快捷的本地出行方式。</p><br><p>8. 旅行保险：为您和您的家人提供全面的保险计划，确保旅途安全，让您无后顾之忧。</p><br>
            <p>在神威旅行，我们不仅提供预订服务，更是注重用户体验，确保旅行过程中的每一步都简单便捷。轻松规划行程、比较优惠价格、发现不可错过的体验，所有这些只需轻触指尖。</p><br>
            <p></p><br>
            <a style="border-bottom:1px solid #5c5f66;text-decoration:none;color:inherit" href="https://map.baidu.com/">网站地图</a>
        </div>
     </el-card>
     <BottomComponent></BottomComponent>
    </div>
   
</template>

<script setup lang="ts">
import BottomComponent from '@/components/bottomComponent.vue';
import moment from 'moment';
import { onMounted,onBeforeUnmount,ref } from 'vue';
import { CaretBottom} from '@element-plus/icons-vue';
//当前时间
let time=ref(moment().format("YYYY.MM"))
let time1=ref(moment().format("DD"))
let timer=ref()
//位置
let position=ref('北京')
//关键词
let keys=ref('')
//入住时间
let CheckInOut=ref('')
let diff=ref('——0晚——')
//位置搜索是否展示
let posSearch=ref(false)
//关键词搜索是否展示
let keySearch=ref(false)
function val(){
    console.log(CheckInOut.value[0],CheckInOut.value[1]);
    const date=new Date(CheckInOut.value[0])
    const date1=new Date(CheckInOut.value[1])
    const sub:number=Math.abs(date1 - date)
    const diffDays=Math.ceil(sub/(1000*60*60*24))
    diff.value='——'+diffDays+'晚'+'——'
}
//聚焦时搜索框展示
function search(){
    posSearch.value=true
}

//聚焦式关键词显示
const key=()=>{
    keySearch.value=true
     
}
//改变输入框里的值
const change=(name:string)=>{
position.value=name
//选了之后让选择框消失
posSearch.value=false
}

//改变关键词输入框的值
const change1=(name:string)=>{
keys.value=name
//选了之后让选择框消失
keySearch.value=false
}

onMounted(()=>{
timer.value=setInterval(()=>{
    time.value=moment().format("YYYY.MM")
    time1.value=moment().format("DD")
},1000)
})
onBeforeUnmount(()=>{
clearInterval(timer.value)
})
  
</script>

<style lang="less" scoped>
.search{
    width: 700px;
    height: 300px;
    border-radius: 18px;
    .top{
        display: flex;
        justify-content: space-between;
    }
    .bt{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
}
.poetry{
    user-select: none;
    margin-left: 20px;
    width: 500px;
    height: 300px;
    background: url('@/assets/hotel/changbaishan.jpg') no-repeat;
    background-position-y: -280px;
    background-size:cover;
    border-radius: 18px;
    .right{
        color: white;
        margin-left:300px;
        .r-t{
             position: absolute;
            top: 40px;
            right: 80px;
            z-index: 2;
            color: rgb(255, 255, 255);
        }
        .r-b{
             position: absolute;
             top: 170px;
             right: 60px;
              z-index: 2;
            margin-top: 65px;
            line-height: 25px;
        }
        .cover{     
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1;
    width: 298px;
    height: 302px;
    border-radius: 18px;
    opacity: 1;
    background: linear-gradient(270deg, rgba(0, 0, 0, .8), transparent 100%);
        }
    }
}
.bottom{
margin-top: 40px;
}
.posSearch{
    position: absolute;
    left: 40px;
    top: 140px;
    width: 450px;
    z-index: 3;
    span{
        display: block;
        float: left;
       width: 50px;
       margin-right: 45px;
       line-height: 40px;
       cursor: pointer;
    }
}
.keySearch{
    position: absolute;
    left: 300px;
    top: 140px;
    width: 450px;
    z-index: 3;
    span{
        display: block;
        float: left;
       width: 80px;
       margin-right: 45px;
       line-height: 40px;
       cursor: pointer;
    }
}
</style>