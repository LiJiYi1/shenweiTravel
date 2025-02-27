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
    <el-tab-pane label="云南" name="second">
        <div class="box" v-for="(item,index) in yunan" :key="index">
            <div style="width: 180px;height:160px;overflow:hidden;position:relative">
                <div class="from">威海出发</div>
                <img :src="item.img"  alt="">
            </div>    
            <p class="boxInclude">{{item.include}}</p>
            <p class=title>{{item.title}}</p>
            <p class="boxPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="海南" name="third">
        <div class="box" v-for="(item,index) in hainan" :key="index">
            <div style="width: 180px;height:160px;overflow:hidden;position:relative">
                <div class="from">威海出发</div>
                <img :src="item.img"  alt="">
            </div>    
            <p class="boxInclude">{{item.include}}</p>
            <p class=title>{{item.title}}</p>
            <p class="boxPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="四川" name="fourth">
        <div class="box" v-for="(item,index) in sichuan" :key="index">
            <div style="width: 180px;height:160px;overflow:hidden;position:relative">
                <img :src="item.img"  alt="">
            </div>    
            <p class="boxInclude">{{item.include}}</p>
            <p class=title>{{item.title}}</p>
            <p class="boxPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="广西" name="fifst">  <div class="box" v-for="(item,index) in guangxi" :key="index">
            <div style="width: 180px;height:160px;overflow:hidden;position:relative">
                <img :src="item.img"  alt="">
            </div>    
            <p class="boxInclude">{{item.include}}</p>
            <p class=title>{{item.title}}</p>
            <p class="boxPrice">{{item.price}}</p>
        </div>
      </el-tab-pane>
    <el-tab-pane label="甘肃" name="sixth">
        <div class="box" v-for="(item,index) in gansu" :key="index">
            <div style="width: 180px;height:160px;overflow:hidden;position:relative">
                <img :src="item.img"  alt="">
            </div>    
            <p class="boxInclude">{{item.include}}</p>
            <p class=title>{{item.title}}</p>
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
{img:new URL("@/assets/travel/PrivateTravel/Domestic/jingxuan/image1.jpg",import.meta.url).href,include:'威海4日3晚私家团·儿童免单【暖冬温泉·邂逅天鹅...',price:"¥3220起",title:"👑一价全包尊享威海一晚5钻温泉酒..."},
{img:new URL("@/assets/travel/PrivateTravel/Domestic/jingxuan/image2.jpg",import.meta.url).href,include:'西双版纳+普洱6日5晚私家团·「自营口碑.臻选亲...',price:"¥2419起",title:"【亲子超爱.自然游乐园】👑 🌴"},
{img:new URL("@/assets/travel/PrivateTravel/Domestic/jingxuan/image3.jpg",import.meta.url).href,include:'威海+荣成5日4晚私家团·儿童免单&冬季特惠 全...',price:"¥3100起",title:"🧧赠送荣成天鹅湖景区💎观鸟爱..."},
{img:new URL("@/assets/travel/PrivateTravel/Domestic/jingxuan/image4.jpg",import.meta.url).href,include:'威海3日2晚私家团·儿童免单【不拼外人·独立成团...',price:"¥2897起",title:"❤酒店选择温馨提示: 👑一价全包..."},
])
//云南数据
let yunan=ref([
{img:new URL("@/assets/travel/PrivateTravel/Domestic/yunnan/image1.jpg",import.meta.url).href,include:'西双版纳+普洱6日5晚私家团·「自营口碑.臻选亲...',price:"¥4686起",title:"【亲子超爱.自然游乐园】👑 🌴..."},
{img:new URL("@/assets/travel/PrivateTravel/Domestic/yunnan/image2.jpg",import.meta.url).href,include:'丽江+大理市+香格里拉6日5晚私家团·自营-咨询客...',price:"¥5712起",title:"【自营热销】畅玩三城、深度香..."},
{img:new URL("@/assets/travel/PrivateTravel/Domestic/yunnan/image3.jpg",import.meta.url).href,include:'云南昆明+大理市+丽江+西双版纳8日7晚私家团·...',price:"¥1762起",title:"【自营全新升级】满8人以上《赠送..."},
{img:new URL("@/assets/travel/PrivateTravel/Domestic/yunnan/image4.jpg",import.meta.url).href,include:'云南西双版纳5日4晚私家团·自营爆品·咨询立减...',price:"¥4145起",title:"🧨神威自营🏮 新̺春̺礼遇̺ ·福满腕...。。"},
])
//海南数据
let hainan=ref([
{img:new URL("@/assets/travel/PrivateTravel/Domestic/hainan/image1.jpg",import.meta.url).href,include:'海南三亚5日4晚私家团·【错峰出游·咨询客服享立减 ...',price:"¥4190起",title:"👊【上千人之选，纯玩品质承诺..."},
{img:new URL("@/assets/travel/PrivateTravel/Domestic/hainan/image2.jpg",import.meta.url).href,include:'三亚+亚特兰蒂斯5日4晚私家团·『错峰出游 咨询...',price:"¥41626起",title:"🥇【优质服务】下单前点击咨询..."},
{img:new URL("@/assets/travel/PrivateTravel/Domestic/hainan/image3.jpg",import.meta.url).href,include:'海南三亚+亚特兰蒂斯5日私家团·『👶海岛遛娃...',price:"¥1935起",title:"【女性司机服务更安心】赠趣味..."},
{img:new URL("@/assets/travel/PrivateTravel/Domestic/hainan/image4.jpg",import.meta.url).href,include:'海口+万宁+三亚6日5晚私家团·【蓝梦·环岛之旅】...*...',price:"¥20419起",title:"优享VIP专车游：骑楼老街+云洞书..."},
])
//四川数据
let sichuan=ref([
{img:new URL("@/assets/travel/PrivateTravel/Domestic/sichuan/image1.png",import.meta.url).href,include:'重庆+成都6日5晚私家团·玩川渝享安逸：青城...',price:"¥1615起",title:"✨成都/重庆入住市区5钻口碑..."},
{img:new URL("@/assets/travel/PrivateTravel/Domestic/sichuan/image2.png",import.meta.url).href,include:'成都大熊猫繁育研究基地+都江堰+青城山+三星堆...',price:"¥1721起",title:"👑经典线路【熊猫基地+三星..."},
{img:new URL("@/assets/travel/PrivateTravel/Domestic/sichuan/image3.png",import.meta.url).href,include:'成都+九寨沟+黄龙风景名胜区5日4晚私家团·【蜀境...',price:"¥1071起",title:"🌸 早春特惠来袭！ 🌸🎉 下单..."},
{img:new URL("@/assets/travel/PrivateTravel/Domestic/sichuan/image4.png",import.meta.url).href,include:'成都+九寨沟+黄龙风景名胜区+都江堰+三星堆博...',price:"¥1548起",title:"🌟 专属定制游 ✨ - 私密自由行 ..."},
])
//广西数据
let guangxi=ref([
{img:new URL("@/assets/travel/PrivateTravel/Domestic/guangxi/image1.png",import.meta.url).href,include:'桂林+漓江+阳朔+龙脊梯田6日5晚私家团·【1单1团...',price:"¥2617起",title:"有生之年，纵情山水，1单1团，私..."},
{img:new URL("@/assets/travel/PrivateTravel/Domestic/guangxi/image2.png",import.meta.url).href,include:'广西北海+涠洲岛5日4晚私家团·欣欣子同款综艺海...',price:"¥2675起",title:"㊙️【咨询客服享立减优惠500元+专..."},
{img:new URL("@/assets/travel/PrivateTravel/Domestic/guangxi/image3.png",import.meta.url).href,include:'广西南宁+德天瀑布+明仕田园+通灵大峡谷+北海...',price:"¥7982起",title:"高端亲子游〓Chill海岛➕可自由加..."},
{img:new URL("@/assets/travel/PrivateTravel/Domestic/guangxi/image4.png",import.meta.url).href,include:'广西北海+涠洲岛5日4晚私家团·『错峰礼遇 咨询...',price:"¥1188起",title:"咨询客服下单立减30元/人，享100..."},
])
//感受数据
let gansu=ref([
{img:new URL("@/assets/travel/PrivateTravel/Domestic/gansu/image1.png",import.meta.url).href,include:'青海湖+鸣沙山月牙泉+张掖七彩丹霞旅游景区+嘉...',price:"¥20419起",title:"🐬📸！🎉可增加费用升级鸣沙山..."},
{img:new URL("@/assets/travel/PrivateTravel/Domestic/gansu/image2.png",import.meta.url).href,include:'敦煌+嘉峪关+张掖+张掖七彩丹霞旅游景区6日5...',price:"¥3256起",title:"深度探索河西走廊，全线景点均含..."},
{img:new URL("@/assets/travel/PrivateTravel/Domestic/gansu/image3.png",import.meta.url).href,include:'青海西宁+青海湖+茶卡盐湖+敦煌+嘉峪关+张掖6...',price:"¥2212起",title:"100%纯玩&不推自费-随走随停-深..."},
{img:new URL("@/assets/travel/PrivateTravel/Domestic/gansu/image4.png",import.meta.url).href,include:'甘肃兰州+张掖+嘉峪关+敦煌+青海西宁+德令哈...',price:"¥1395起",title:"西宁最后一晚升级索菲特酒店或..."},
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
      margin-top: 15px;
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