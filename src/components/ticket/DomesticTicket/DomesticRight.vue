<template>
  
  <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="浙江" name="first">
      <div>
        <div @click="searchTicket(item.name)" v-for="(item,index) in zhejiang" :key="index" style="float: left;margin-right:20px;margin-top:10px">
            <img :src="item.img" style="width: 186px;height:122px;border-radius:20px">
            <p class="name">{{item.name}}</p>
            <p class="price">{{item.price}}</p>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="江苏" name="second">
       <div>
        <div @click="searchTicket(item.name)" v-for="(item,index) in jiangsu" :key="index" style="float: left;margin-right:20px;margin-top:10px">
            <img :src="item.img" style="width: 186px;height:122px;border-radius:20px">
            <p class="name">{{item.name}}</p>
            <p class="price">{{item.price}}</p>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="广东" name="third">
       <div>
        <div @click="searchTicket(item.name)" v-for="(item,index) in guangdong" :key="index" style="float: left;margin-right:20px;margin-top:10px">
            <img :src="item.img" style="width: 186px;height:122px;border-radius:20px">
            <p class="name">{{item.name}}</p>
            <p class="price">{{item.price}}</p>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="海南" name="fourth">
       <div>
        <div @click="searchTicket(item.name)" v-for="(item,index) in hainan" :key="index" style="float: left;margin-right:20px;margin-top:10px">
            <img :src="item.img" style="width: 186px;height:122px;border-radius:20px">
            <p class="name">{{item.name}}</p>
            <p class="price">{{item.price}}</p>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="北京" name="fifth">
       <div>
        <div @click="searchTicket(item.name)" v-for="(item,index) in beijing" :key="index" style="float: left;margin-right:20px;margin-top:10px">
            <img :src="item.img" style="width: 186px;height:122px;border-radius:20px">
            <p class="name">{{item.name}}</p>
            <p class="price">{{item.price}}</p>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="上海" name="sixth">
       <div>
        <div @click="searchTicket(item.name)" v-for="(item,index) in shangahi" :key="index" style="float: left;margin-right:20px;margin-top:10px">
            <img :src="item.img" style="width: 186px;height:122px;border-radius:20px">
            <p class="name">{{item.name}}</p>
            <p class="price">{{item.price}}</p>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
    
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const activeName = ref('first')
//浙江数据
let zhejiang=ref([
  {img:new URL("@/assets/ticket/Domestic/zhejiang/image1.png",import.meta.url).href,name:'灵隐飞来峰',price:"¥45"},
{img:new URL("@/assets/ticket/Domestic/zhejiang/image2.png",import.meta.url).href,name:'乌镇',price:"¥150"},
{img:new URL("@/assets/ticket/Domestic/zhejiang/image3.png",import.meta.url).href,name:'普陀山风景区',price:"¥225"},
{img:new URL("@/assets/ticket/Domestic/zhejiang/image4.png",import.meta.url).href,name:'朱家尖大青山景区',price:"¥30"},
{img:new URL("@/assets/ticket/Domestic/zhejiang/image5.png",import.meta.url).href,name:'横店影视城',price:"¥385"},
{img:new URL("@/assets/ticket/Domestic/zhejiang/image6.png",import.meta.url).href,name:'莫干山开元森泊度假乐园',price:"¥122"},
{img:new URL("@/assets/ticket/Domestic/zhejiang/image7.png",import.meta.url).href,name:'杭州开元森泊度假公园',price:"¥156"},
{img:new URL("@/assets/ticket/Domestic/zhejiang/image8.png",import.meta.url).href,name:'杭州野生动物世界',price:"¥338"},


])
//江苏数据
let jiangsu=ref([
{img:new URL("@/assets/ticket/Domestic/jiangsu/image1.png",import.meta.url).href,name:'牛首山文化旅游区',price:"¥145"},
{img:new URL("@/assets/ticket/Domestic/jiangsu/image2.png",import.meta.url).href,name:'寒山寺',price:"¥19"},
{img:new URL("@/assets/ticket/Domestic/jiangsu/image3.png",import.meta.url).href,name:'无锡灵山胜境（灵山大佛）',price:"¥189"},
{img:new URL("@/assets/ticket/Domestic/jiangsu/image4.png",import.meta.url).href,name:'中华恐龙园',price:"¥255"},
{img:new URL("@/assets/ticket/Domestic/jiangsu/image5.png",import.meta.url).href,name:'红山森林动物园',price:"¥40"},
{img:new URL("@/assets/ticket/Domestic/jiangsu/image6.png",import.meta.url).href,name:'瘦西湖',price:"¥98"},
{img:new URL("@/assets/ticket/Domestic/jiangsu/image7.png",import.meta.url).href,name:'拙政园',price:"¥69"},
{img:new URL("@/assets/ticket/Domestic/jiangsu/image8.png",import.meta.url).href,name:'天目湖南山竹海',price:"¥255"},


])
//广东数据
let guangdong=ref([
{img:new URL("@/assets/ticket/Domestic/guangdong/image1.png",import.meta.url).href,name:'广州长隆野生动物世界',price:"¥296"},
{img:new URL("@/assets/ticket/Domestic/guangdong/image2.png",import.meta.url).href,name:'珠海长隆海洋王国',price:"¥395"},
{img:new URL("@/assets/ticket/Domestic/guangdong/image3.png",import.meta.url).href,name:'广州长隆欢乐世界',price:"¥250"},
{img:new URL("@/assets/ticket/Domestic/guangdong/image4.png",import.meta.url).href,name:'广州长隆国际大马戏',price:"¥350"},
{img:new URL("@/assets/ticket/Domestic/guangdong/image5.png",import.meta.url).href,name:'广州塔',price:"¥298"},
{img:new URL("@/assets/ticket/Domestic/guangdong/image6.png",import.meta.url).href,name:'长鹿旅游休博园',price:"¥117"},
{img:new URL("@/assets/ticket/Domestic/guangdong/image7.png",import.meta.url).href,name:'古龙峡',price:"¥104"},
{img:new URL("@/assets/ticket/Domestic/guangdong/image8.png",import.meta.url).href,name:'黄腾峡漂流',price:"¥109"},


])
//海南数据
let hainan=ref([
{img:new URL("@/assets/ticket/Domestic/hainan/image1.png",import.meta.url).href,name:'蜈支洲岛',price:"¥140"},
{img:new URL("@/assets/ticket/Domestic/hainan/image2.png",import.meta.url).href,name:'南山文化旅游区',price:"¥154"},
{img:new URL("@/assets/ticket/Domestic/hainan/image3.png",import.meta.url).href,name:'西岛',price:"¥95"},
{img:new URL("@/assets/ticket/Domestic/hainan/image4.png",import.meta.url).href,name:'亚龙湾热带天堂森林公园',price:"¥268"},
{img:new URL("@/assets/ticket/Domestic/hainan/image5.png",import.meta.url).href,name:'亚特兰蒂斯水世界',price:"¥278"},
{img:new URL("@/assets/ticket/Domestic/hainan/image6.png",import.meta.url).href,name:'海南分界洲岛旅游区',price:"¥162"},
{img:new URL("@/assets/ticket/Domestic/hainan/image7.png",import.meta.url).href,name:'亚特兰蒂斯失落的空间水族馆',price:"¥220"},
{img:new URL("@/assets/ticket/Domestic/hainan/image8.png",import.meta.url).href,name:'海南海洋欢乐世界度假区',price:"¥258"},


])
//北京数据
let beijing=ref([
{img:new URL("@/assets/ticket/Domestic/beijing/image1.png",import.meta.url).href,name:'北京环球度假区',price:"¥344"},
{img:new URL("@/assets/ticket/Domestic/beijing/image2.png",import.meta.url).href,name:'恭王府',price:"¥49"},
{img:new URL("@/assets/ticket/Domestic/beijing/image3.png",import.meta.url).href,name:'颐和园',price:"¥22"},
{img:new URL("@/assets/ticket/Domestic/beijing/image4.png",import.meta.url).href,name:'八达岭长城',price:"¥35"},
{img:new URL("@/assets/ticket/Domestic/beijing/image5.png",import.meta.url).href,name:'天坛公园',price:"¥14"},
{img:new URL("@/assets/ticket/Domestic/beijing/image6.png",import.meta.url).href,name:'中国国家博物馆',price:"¥180"},
{img:new URL("@/assets/ticket/Domestic/beijing/image7.png",import.meta.url).href,name:'中国科学技术馆',price:"¥48"},
{img:new URL("@/assets/ticket/Domestic/beijing/image8.png",import.meta.url).href,name:'北京野生动物园',price:"¥145"},


])
//上海数据
let shangahi=ref([
{img:new URL("@/assets/ticket/Domestic/shanghai/image1.png",import.meta.url).href,name:'上海迪士尼度假区',price:"¥461"},
{img:new URL("@/assets/ticket/Domestic/shanghai/image2.png",import.meta.url).href,name:'上海野生动物园',price:"¥164"},
{img:new URL("@/assets/ticket/Domestic/shanghai/image3.png",import.meta.url).href,name:'上海海昌海洋公园',price:"¥323"},
{img:new URL("@/assets/ticket/Domestic/shanghai/image4.png",import.meta.url).href,name:'东方明珠广播电视塔',price:"¥195"},
{img:new URL("@/assets/ticket/Domestic/shanghai/image5.png",import.meta.url).href,name:'豫园',price:"¥99"},
{img:new URL("@/assets/ticket/Domestic/shanghai/image6.png",import.meta.url).href,name:'黄浦江游览',price:"¥29"},
{img:new URL("@/assets/ticket/Domestic/shanghai/image7.png",import.meta.url).href,name:'上海动物园',price:"¥39"},
{img:new URL("@/assets/ticket/Domestic/shanghai/image8.png",import.meta.url).href,name:'金茂大厦88层观光厅',price:"¥79"},


])
const searchTicket=(name:string)=>{
window.open(`https://travelsearch.fliggy.com/index.htm?searchType=product&keyword=${name}&category=SCENIC&pagenum=1`)
}
</script>

<style lang="less" scoped>

.demo-tabs{
    width: 100%;
    min-width: 800px;
    margin-top:16px;
    .name{
      width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size:18px;
      margin-top: 5px;
    }
    .price{
      font-size:28px;
      margin-top: 5px;
    color:rgb(224, 97, 33);
    }
}
:deep(.el-tabs__item.is-active) {
  color:#ffe033; /* 修改激活标签文字颜色 */
}
:deep(.el-tabs__item:hover) {
  color: #ffe033; /* 悬停颜色 */
}
:deep(.el-tabs__active-bar) {
  background-color: #ffe033; /* 修改激活标签下划线颜色 */
}
</style>