<template>
 <el-tabs v-model="activeName" class="demo-tabs" type="border-card">
  <el-tab-pane label="精选" name="first"> 
        <div class="box" v-for="(item,index) in jingxuan" :key="index">
            <div style="width: 180px;height:160px;overflow:hidden;position:relative">
                <div class="pos"><em>出发地参团</em></div>
                <div class="from">威海出发</div>
                <img :src="item.img"  alt="">
            </div>    
            <p class="boxInclude">{{item.include}}</p>
            <p class="boxPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="首尔" name="second">
        <div class="box" v-for="(item,index) in shouer" :key="index">
            <div style="width: 180px;height:160px;overflow:hidden;position:relative">
                <div class="pos"><em>出发地参团</em></div>
                <div class="from">威海出发</div>
                <img :src="item.img"  alt="">
            </div>    
            <p class="boxInclude">{{item.include}}</p>
            <p class="boxPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="大阪" name="third">
        <div class="box" v-for="(item,index) in daban" :key="index">
            <div style="width: 180px;height:160px;overflow:hidden;position:relative">
                <div class="pos"><em>出发地参团</em></div>
                <div class="from">威海出发</div>
                <img :src="item.img"  alt="">
            </div>    
            <p class="boxInclude">{{item.include}}</p>
            <p class="boxPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="迪拜" name="fourth">
        <div class="box" v-for="(item,index) in dibai" :key="index">
            <div style="width: 180px;height:160px;overflow:hidden;position:relative">
                <div class="pos"><em>出发地参团</em></div>
                <img :src="item.img"  alt="">
            </div>    
            <p class="boxInclude">{{item.include}}</p>
            <p class="boxPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="巴黎" name="fifst">  <div class="box" v-for="(item,index) in bali" :key="index">
            <div style="width: 180px;height:160px;overflow:hidden;position:relative">
                <div class="pos"><em>出发地参团</em></div>
                <img :src="item.img"  alt="">
            </div>    
            <p class="boxInclude">{{item.include}}</p>
            <p class="boxPrice">{{item.price}}</p>
        </div>
      </el-tab-pane>
    <el-tab-pane label="东京" name="sixth">
        <div class="box" v-for="(item,index) in dongjing" :key="index">
            <div style="width: 180px;height:160px;overflow:hidden;position:relative">
                <div class="pos"><em>出发地参团</em></div>
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
{img:new URL("@/assets/travel/Group/Domestic/jingxuan/image1.png",import.meta.url).href,include:'香港+澳门6日5晚跟团游·【携程自营·登澳门...',price:"¥3220起"},
{img:new URL("@/assets/travel/Group/Domestic/jingxuan/image2.png",import.meta.url).href,include:'日本金泽+京都+大阪+奈良+箱根+伊豆+东京+富...',price:"¥10419起"},
{img:new URL("@/assets/travel/Group/Domestic/jingxuan/image3.png",import.meta.url).href,include:'香港+澳门5日4晚跟团游·【春季大促@A/B线升...',price:"¥3100起"},
{img:new URL("@/assets/travel/Group/Domestic/jingxuan/image4.png",import.meta.url).href,include:'香港+澳门5日4晚跟团游·含往返机票/动车丨赠...',price:"¥2897起"},
])
//首尔数据
let shouer=ref([
{img:new URL("@/assets/travel/Group/Domestic/shouer/image1.png",import.meta.url).href,include:'韩国首尔4日3晚跟团游·【高端纯玩*2-8人精致小...',price:"¥3686起"},
{img:new URL("@/assets/travel/Group/Domestic/shouer/image2.png",import.meta.url).href,include:'韩国首尔5日4晚跟团游·【集团自营•独嘉首發•2-8...',price:"¥3712起"},
{img:new URL("@/assets/travel/Group/Domestic/shouer/image3.png",import.meta.url).href,include:'韩国首尔5日4晚跟团游·【星选爆歀&大咖推荐】封...',price:"¥2762起"},
{img:new URL("@/assets/travel/Group/Domestic/shouer/image4.png",import.meta.url).href,include:'韩国首尔+釜山6日5晚跟团游·【高端精奢8人小团*...',price:"¥6145起"},
])
//大阪数据
let daban=ref([
{img:new URL("@/assets/travel/Group/Domestic/daban/image1.png",import.meta.url).href,include:'日本大阪+京都+奈良6日5晚拼小团·【B线路·樱花限...',price:"¥6190起"},
{img:new URL("@/assets/travel/Group/Domestic/daban/image2.png",import.meta.url).href,include:'日本大阪+京都+奈良5日4晚拼小团·【N种组合·随...',price:"¥4626起"},
{img:new URL("@/assets/travel/Group/Domestic/daban/image3.png",import.meta.url).href,include:'日本大阪+京都+奈良7日6晚拼小团·【祈求胜运·达...',price:"¥7935起"},
{img:new URL("@/assets/travel/Group/Domestic/daban/image4.png",import.meta.url).href,include:'日本金泽+京都+大阪+奈良+箱根+伊豆+东京+富...*...',price:"¥10419起"},
])
//迪拜数据
let dibai=ref([
{img:new URL("@/assets/travel/Group/Domestic/dibai/image1.png",import.meta.url).href,include:'阿联酋迪拜+阿布扎比6日5晚跟团游·只选对•不买...',price:"5615起"},
{img:new URL("@/assets/travel/Group/Domestic/dibai/image2.png",import.meta.url).href,include:'迪拜+阿布扎比7日6晚跟团游·周2/5/7特价 | 3大...',price:"¥9721起"},
{img:new URL("@/assets/travel/Group/Domestic/dibai/image3.png",import.meta.url).href,include:'阿联酋迪拜+阿布扎比6日5晚跟团游· 【五星甄选*...',price:"¥8071起"},
{img:new URL("@/assets/travel/Group/Domestic/dibai/image4.png",import.meta.url).href,include:'阿联酋迪拜+阿布扎比6日5晚跟团游·【携程年度...',price:"¥5548起"},
])
//巴黎数据
let bali=ref([
{img:new URL("@/assets/travel/Group/Domestic/bali/image1.png",import.meta.url).href,include:'德国+法国+意大利+瑞士12日跟团游·西欧四国纯...',price:"¥17617起"},
{img:new URL("@/assets/travel/Group/Domestic/bali/image2.png",import.meta.url).href,include:'法国巴黎+凡尔赛+枫丹白露6日私家团·【法国浪漫...',price:"¥22675起"},
{img:new URL("@/assets/travel/Group/Domestic/bali/image3.png",import.meta.url).href,include:'法国巴黎+凡尔赛+枫丹白露6日私家团·【法国浪漫...',price:"¥17982起"},
{img:new URL("@/assets/travel/Group/Domestic/bali/image4.png",import.meta.url).href,include:'意大利+德国+荷兰+比利时+法国+瑞士12日私...',price:"¥58188起"},
])
//东京数据
let dongjing=ref([
{img:new URL("@/assets/travel/Group/Domestic/dongjing/image1.png",import.meta.url).href,include:'日本金泽+京都+大阪+奈良+箱根+伊豆+东京+富...',price:"¥10419起"},
{img:new URL("@/assets/travel/Group/Domestic/dongjing/image2.png",import.meta.url).href,include:'日本东京+箱根+大阪+京都7日6晚私家团·1晚温泉|...',price:"¥13256起"},
{img:new URL("@/assets/travel/Group/Domestic/dongjing/image3.png",import.meta.url).href,include:'日本东京+富士山6日5晚拼小团·【早春樱花季·A连...',price:"¥7212起"},
{img:new URL("@/assets/travel/Group/Domestic/dongjing/image4.png",import.meta.url).href,include:'日本东京+大阪+京都+奈良6日5晚跟团游·【落樱冰...',price:"¥5395起"},
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
      margin-top: 40px;
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
.pos{
  padding: 9px;
  padding-left: 0px;
  padding-top: 7px;
  position: absolute;
  background: url('@/assets/travel/Group/pos.png') no-repeat;
  background-position: 0 -55px;
}
.from{
  background-color: #0202026d;
  color: white;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>