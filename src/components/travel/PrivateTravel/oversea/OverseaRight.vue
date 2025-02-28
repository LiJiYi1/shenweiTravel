<template>
 <el-tabs v-model="activeName" class="demo-tabs" type="border-card">
    <el-tab-pane label="精选" name="first">  
       <div class="box" v-for="(item,index) in jingxuan" :key="index">
            <div style="width: 180px;height:160px;overflow:hidden;position:relative">
                <div class="from">威海出发</div>
                <img :src="item.img"  alt="">
            </div>    
            <p class="boxInclude">{{item.include}}</p>
            <p class=title>{{item.title}}</p>
            <p class="boxPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="巴厘岛" name="second"> 
      <div class="box" v-for="(item,index) in balidao" :key="index">
            <div style="width: 180px;height:160px;overflow:hidden;position:relative">
                <div class="from">威海出发</div>
                <img :src="item.img"  alt="">
            </div>    
            <p class="boxInclude">{{item.include}}</p>
            <p class=title>{{item.title}}</p>
            <p class="boxPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="日本" name="third"> 
      <div class="box" v-for="(item,index) in riben" :key="index">
            <div style="width: 180px;height:160px;overflow:hidden;position:relative">
                <div class="from">威海出发</div>
                <img :src="item.img"  alt="">
            </div>    
            <p class="boxInclude">{{item.include}}</p>
            <p class=title>{{item.title}}</p>
            <p class="boxPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="泰国" name="fourth"> 
      <div class="box" v-for="(item,index) in taiguo" :key="index">
            <div style="width: 180px;height:160px;overflow:hidden;position:relative">
                <div class="from">威海出发</div>
                
                <img :src="item.img"  alt="">
            </div>    
            <p class="boxInclude">{{item.include}}</p>
            <p class=title>{{item.title}}</p>
            <p class="boxPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="新加坡" name="fifst"> 
      <div class="box" v-for="(item,index) in xinjiapo" :key="index">
            <div style="width: 180px;height:160px;overflow:hidden;position:relative">
                <div class="from">威海出发</div>
                
                <img :src="item.img"  alt="">
            </div>    
            <p class="boxInclude">{{item.include}}</p>
            <p class=title>{{item.title}}</p>
            <p class="boxPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="越南" name="sixth"> 
      <div class="box" v-for="(item,index) in yuenan" :key="index">
            <div style="width: 180px;height:160px;overflow:hidden;position:relative">
                <div class="from">威海出发</div>
                <p class=title>{{item.title}}</p>
                <img :src="item.img"  alt="">
            </div>    
            <p class="boxInclude">{{item.include}}</p>
            <p class="boxPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const activeName = ref('first')
//精选数据
let jingxuan=ref([
{img:new URL("@/assets/travel/PrivateTravel/Oversea/jingxuan/image1.jpg",import.meta.url).href,include:'泰国普吉岛5日4晚私家团·【斯米兰开岛·2+2换...',price:"¥4626起",title:'​精选酒店·任意选择 | 2+2换住 · ...'},
{img:new URL("@/assets/travel/PrivateTravel/Oversea/jingxuan/image2.jpg",import.meta.url).href,include:'香港+澳门5日4晚私家团·【亲子热销/五一预热...',price:"¥6932起",title:'全新玩转港澳，吃遍港澳特色美...'},
{img:new URL("@/assets/travel/PrivateTravel/Oversea/jingxuan/image3.jpg",import.meta.url).href,include:'日本大阪+京都6日5晚私家团·2晚京都|【咨询客...',price:"¥9767起",title:'关西经典景点串游，多行程可选：...'},
{img:new URL("@/assets/travel/PrivateTravel/Oversea/jingxuan/image4.jpg",import.meta.url).href,include:'香港+澳门+广州6日5晚私家团·【广州塔&珠江夜...',price:"¥8289起",title:'体验港珠澳大桥穿梭巴士，感...'},
])
//巴厘岛数据
let balidao=ref([
{img:new URL("@/assets/travel/PrivateTravel/Oversea/balidao/image1.jpg",import.meta.url).href,include:'印度尼西亚巴厘岛7日5晚私家团·【专车+独立导...',price:"¥6432起",title:'乌布秘境3选1： ①【冒险体验】...'},
{img:new URL("@/assets/travel/PrivateTravel/Oversea/balidao/image2.jpg",import.meta.url).href,include:'印度尼西亚巴厘岛7日5晚私家团·#Next Level Bal...',price:"¥5995起",title:'乌布秘境3选1： ①【冒险体验】...'},
{img:new URL("@/assets/travel/PrivateTravel/Oversea/balidao/image3.jpg",import.meta.url).href,include:'印度尼西亚巴厘岛6日5晚私家团·【独创硬核玩法...',price:"¥7118起",title:'乌布秘境3选1： ①【冒险体验】：...'},
{img:new URL("@/assets/travel/PrivateTravel/Oversea/balidao/image4.jpg",import.meta.url).href,include:'印度尼西亚巴厘岛7日私家团·【私密私家团•一单一...',price:"¥7080起",title:'...'},
])
//日本数据
let riben=ref([
{img:new URL("@/assets/travel/PrivateTravel/Oversea/riben/image1.jpg",import.meta.url).href,include:'日本东京+箱根+大阪+京都7日6晚私家团·1晚温泉|...',price:"¥13359起",title:'精选优质酒店，2晚东京+1晚箱根...'},
{img:new URL("@/assets/travel/PrivateTravel/Oversea/riben/image2.jpg",import.meta.url).href,include:'日本东京+京都+大阪8日7晚私家团·2晚京都|富士...',price:"¥12014起",title:'精选东京&京都&大阪地区优质酒...'},
{img:new URL("@/assets/travel/PrivateTravel/Oversea/riben/image3.jpg",import.meta.url).href,include:'日本大阪+京都6日5晚私家团·2晚京都|【咨询客...',price:"¥9767起",title:'关西经典景点串游，多行程可选...'},
{img:new URL("@/assets/travel/PrivateTravel/Oversea/riben/image4.jpg",import.meta.url).href,include:'日本大阪+京都+奈良5日4晚私家团·邂逅樱花.樱吹雪...',price:"¥7682起",title:'关西经典景点串游：清水寺&伏见...'},
])
//泰国数据
let taiguo=ref([
{img:new URL("@/assets/travel/PrivateTravel/Oversea/taiguo/image1.jpg",import.meta.url).href,include:'泰国普吉岛7日6晚私家团·【咨询立减200元】独立...',price:"¥5812起",title:'打卡必选 | 环岛多选1+出海多选2 | ...'},
{img:new URL("@/assets/travel/PrivateTravel/Oversea/taiguo/image2.jpg",import.meta.url).href,include:'普吉岛6日5晚私家团·『轻松遛娃』咨询送礼包·独立...',price:"¥5297起",title:'【曼谷一天游遍暹罗象征大皇宫&玉...'},
{img:new URL("@/assets/travel/PrivateTravel/Oversea/taiguo/image3.jpg",import.meta.url).href,include:'泰国曼谷+芭堤雅6日5晚私家团·【精品纯玩私家...',price:"¥5163起",title:'精选酒店·任意选择 | 3+2换住三大...'},
{img:new URL("@/assets/travel/PrivateTravel/Oversea/taiguo/image4.jpg",import.meta.url).href,include:'泰国普吉岛5日4晚私家团·【斯米兰开岛·2+2换...',price:"¥4626起",title:'​精选酒店·任意选择 | 2+2换住 · 三...'},
])
//新加坡数据
let xinjiapo=ref([
{img:new URL("@/assets/travel/PrivateTravel/Oversea/xinjiapo/image1.jpg",import.meta.url).href,include:'新加坡+吉隆坡+马六甲6日5晚私家团·【私享新马 ·...',price:"¥5998起",title:'【专车服务】一单一团，中文司...'},
{img:new URL("@/assets/travel/PrivateTravel/Oversea/xinjiapo/image2.jpg",import.meta.url).href,include:'新加坡6日5晚私家团·【畅玩狮城 亲子游】『环...',price:"¥9721起",title:'A线：2晚市区+2晚圣淘沙+1晚...'},
{img:new URL("@/assets/travel/PrivateTravel/Oversea/xinjiapo/image3.jpg",import.meta.url).href,include:'新加坡+新加坡环球影城+夜间野生动物园5日4晚私...',price:"¥8104起",title:'❤️A线·2晚市区+2晚圣淘沙，嗨...'},
{img:new URL("@/assets/travel/PrivateTravel/Oversea/xinjiapo/image4.jpg",import.meta.url).href,include:'新加坡+吉隆坡+马六甲6日5晚私家团·【早鸟优惠...',price:"¥5639起",title:'🚗错峰出行预定活动，下单立...'},
])
//越南数据
let yuenan=ref([
{img:new URL("@/assets/travel/PrivateTravel/Oversea/yuenan/image1.jpg",import.meta.url).href,include:'越南河内+下龙湾5日4晚私家团·【经典北越A线...',price:"¥7503起",title:'神威自营 越南本土老五星旅游企业...'},
{img:new URL("@/assets/travel/PrivateTravel/Oversea/yuenan/image2.jpg",import.meta.url).href,include:'越南胡志明市+美奈5日4晚私家团·『纯玩0购』赠...',price:"¥4123起",title:'西贡小法国安排两天自由活动...'},
{img:new URL("@/assets/travel/PrivateTravel/Oversea/yuenan/image3.jpg",import.meta.url).href,include:'越南胡志明市+富国岛7日6晚私家团·赠越南电...',price:"¥6094起",title:'胡志明网红打卡市区游🏮，体验...'},
{img:new URL("@/assets/travel/PrivateTravel/Oversea/yuenan/image4.jpg",import.meta.url).href,include:'越南河内+宁平+下龙湾+吉婆岛6日5晚私家团·『越...',price:"¥9279起",title:'【专车+中文导游+24小时当地中文微信客服...'},
])
</script>

<style lang="less" scoped>
.demo-tabs{
  width: 1000px;
  .box{
    padding: 10px;
    border: 1px solid rgb(150, 149, 149);
    float: left;
    margin-left: 20px;
    width: 180px;
    img{
        transition:all 0.3s ease;
        width: 250px;
         height:160px;
    }
    .boxInclude{
      margin-top: 12px;
            width:180px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
    }
    .boxPrice{
        margin-top: 10px;
        color: rgb(255, 115, 0);
        font-size:20px
      }
  }
  .box:hover{
    box-shadow: 0 0 2px ;
     img:hover{
      width: 280px;
      height: 180px;
       margin-left: -20px;
     
    }
  }
}
.title{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    color:rgb(253, 199, 4);
    margin-top:20px;
    font-size: 14px;

}
.from{
  background-color: #0202026d;
  color: white;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>