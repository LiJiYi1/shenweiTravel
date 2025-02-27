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
    <el-tab-pane label="北京" name="second"> 
      <div class="box" v-for="(item,index) in beijing" :key="index">
            <div style="width: 180px;height:160px;overflow:hidden;position:relative">
                <div class="pos"><em>出发地参团</em></div>
                <div class="from">威海出发</div>
                <img :src="item.img"  alt="">
            </div>    
            <p class="boxInclude">{{item.include}}</p>
            <p class="boxPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="杭州" name="third"> 
      <div class="box" v-for="(item,index) in hangzhou" :key="index">
            <div style="width: 180px;height:160px;overflow:hidden;position:relative">
                <div class="pos"><em>出发地参团</em></div>
                <div class="from">威海出发</div>
                <img :src="item.img"  alt="">
            </div>    
            <p class="boxInclude">{{item.include}}</p>
            <p class="boxPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="西安" name="fourth"> 
      <div class="box" v-for="(item,index) in xian" :key="index">
            <div style="width: 180px;height:160px;overflow:hidden;position:relative">
                <div class="pos"><em>出发地参团</em></div>
                <div class="from">威海出发</div>
                <img :src="item.img"  alt="">
            </div>    
            <p class="boxInclude">{{item.include}}</p>
            <p class="boxPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="南京" name="fifst"> 
      <div class="box" v-for="(item,index) in nanjing" :key="index">
            <div style="width: 180px;height:160px;overflow:hidden;position:relative">
                <div class="pos"><em>出发地参团</em></div>
                <div class="from">威海出发</div>
                <img :src="item.img"  alt="">
            </div>    
            <p class="boxInclude">{{item.include}}</p>
            <p class="boxPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="香港" name="sixth"> 
      <div class="box" v-for="(item,index) in xianggang" :key="index">
            <div style="width: 180px;height:160px;overflow:hidden;position:relative">
                <div class="pos"><em>出发地参团</em></div>
                <div class="from">威海出发</div>
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
{img:new URL("@/assets/travel/Group/Oversea/jingxuan/image1.png",import.meta.url).href,include:'威海+刘公岛景区+荣成+那香海钻石沙滩浴场+搁...',price:"¥744起"},
{img:new URL("@/assets/travel/Group/Oversea/jingxuan/image2.png",import.meta.url).href,include:'上海+苏州+杭州+乌镇5日4晚跟团游·仲春盛典·下...',price:"¥1222起"},
{img:new URL("@/assets/travel/Group/Oversea/jingxuan/image3.png",import.meta.url).href,include:'云南昆明+大理市+丽江6日5晚跟团游·自营地接！...',price:"¥2000起"},
{img:new URL("@/assets/travel/Group/Oversea/jingxuan/image4.png",import.meta.url).href,include:'西安兵马俑+华清宫+华山+大雁塔+大唐不夜城..',price:"¥1540起"},
])
//北京数据
let beijing=ref([
{img:new URL("@/assets/travel/Group/Oversea/beijing/image1.png",import.meta.url).href,include:'北京5日4晚跟团游·【提前8天约故宫·金牌导游】泛...',price:"¥1524起"},
{img:new URL("@/assets/travel/Group/Oversea/beijing/image2.png",import.meta.url).href,include:'北京4日3晚跟团游·〖漫游京城-免费升级2-3三钻...',price:"¥1142起"},
{img:new URL("@/assets/travel/Group/Oversea/beijing/image3.png",import.meta.url).href,include:'北京5日4晚跟团游·【早订无忧约进宫+纪念堂 ...',price:"¥1619起"},
{img:new URL("@/assets/travel/Group/Oversea/beijing/image4.png",import.meta.url).href,include:'北京+八达岭长城+天安门广场-国旗+故宫博物院5...',price:"¥2349起"},
])
//杭州数据
let hangzhou=ref([
{img:new URL("@/assets/travel/Group/Oversea/hangzhou/image1.png",import.meta.url).href,include:'上海+苏州+杭州+乌镇5日4晚跟团游·仲春盛典·下...',price:"¥1222起"},
{img:new URL("@/assets/travel/Group/Oversea/hangzhou/image2.png",import.meta.url).href,include:'上海迪士尼（Disney）+苏州+杭州+乌镇6日5晚...',price:"¥2224起"},
{img:new URL("@/assets/travel/Group/Oversea/hangzhou/image3.png",import.meta.url).href,include:'杭州+西塘+乌镇3日2晚跟团游·纯玩0购物 | 精讲导...',price:"¥1279起"},
{img:new URL("@/assets/travel/Group/Oversea/hangzhou/image4.png",import.meta.url).href,include:'上海+苏州+杭州+无锡+南京+乌镇5日4晚跟团游...',price:"¥1165起"},
])
//西安数据
let xian=ref([
{img:new URL("@/assets/travel/Group/Oversea/xian/image1.png",import.meta.url).href,include:'西安兵马俑+华清宫+华山+大雁塔+大唐不夜城...',price:"¥1540起"},
{img:new URL("@/assets/travel/Group/Oversea/xian/image2.png",import.meta.url).href,include:'西安3日2晚跟团游·赠《西安千古情》演出+园区参观...',price:"¥1390起"},
{img:new URL("@/assets/travel/Group/Oversea/xian/image3.png",import.meta.url).href,include:'西安兵马俑+华清池+华山4日3晚跟团游·20人小团...',price:"¥1536起"},
{img:new URL("@/assets/travel/Group/Oversea/xian/image4.png",import.meta.url).href,include:'西安5日4晚跟团游·【神威自营·陪你旅行】16人封...',price:"¥3902起"},
])
//南京数据
let nanjing=ref([
{img:new URL("@/assets/travel/Group/Oversea/nanjing/image1.png",import.meta.url).href,include:'南京3日2晚跟团游·升『金牌导游』+赠『秦淮河游...',price:"¥805起"},
{img:new URL("@/assets/travel/Group/Oversea/nanjing/image2.png",import.meta.url).href,include:'上海+苏州+杭州+无锡+南京+乌镇5日4晚跟团游...',price:"¥1165起"},
{img:new URL("@/assets/travel/Group/Oversea/nanjing/image3.png",import.meta.url).href,include:'南京3日2晚跟团游·『错峰惠游』古都南京 品南京...',price:"¥797起"},
{img:new URL("@/assets/travel/Group/Oversea/nanjing/image4.png",import.meta.url).href,include:'华东5市+乌镇6日5晚跟团游·【神威自营·枕水江南】<...',price:"¥1665起"},
])
//香港数据
let xianggang=ref([
{img:new URL("@/assets/travel/Group/Oversea/xianggang/image1.png",import.meta.url).href,include:'香港+澳门6日5晚跟团游·【神威自营·登澳门...',price:"¥3222起"},
{img:new URL("@/assets/travel/Group/Oversea/xianggang/image2.png",import.meta.url).href,include:'香港+澳门6日5晚跟团游·【港澳大社自营*好评...',price:"¥2361起"},
{img:new URL("@/assets/travel/Group/Oversea/xianggang/image3.png",import.meta.url).href,include:'香港+澳门+珠海6日5晚跟团游·好评榜冠〓纯玩...',price:"¥2828起"},
{img:new URL("@/assets/travel/Group/Oversea/xianggang/image4.png",import.meta.url).href,include:'香港+澳门5日4晚跟团游·【春季大促@A/B线升...',price:"¥3100起"},
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
  background-position: 0 -90px;
}
.from{
  background-color: #0202026d;
  color: white;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>