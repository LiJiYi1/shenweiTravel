<template>
      <el-input :readonly="true" @click="isShow" v-model="PrePhonenum" style="display:inline-block;width: 120px;margin-right:20px" placeholder="必填,方便定制师与您联络"/>
       <div  @click="stop" style="position: relative;display:inline-block;z-index:12">
      <el-card v-show="show" style="position: absolute;top:14px;left:-140px">
      <span style="color:grey;">未标注<span style="color:red">*</span> 号国家<i style="line-height:18px;">/</i>地区暂无法接受短信</span>
           <el-tabs v-model="activeName" class="demo-tabs">
            <el-tab-pane label="热门" name="first">
                  <div>
                        <span v-for="(item,index) in hot" :key="index">
                              <span class="phone" v-for="(item1,index1) in item.phone" :key="index1"  @click="change(item1)">
                                    <span style="color:red">*</span>
                              <p>{{item1.name}}&nbsp;</p>
                              <span style="font-size:14px;display:inline-block;" >{{item1.num}}</span>
                              </span>
                              
                        </span>
                  </div>
            </el-tab-pane>
            <el-tab-pane label="ABCDEF" name="second" style="width: 700px;height:280px;overflow:auto">
                  <div style="overflow: auto;">
                        <span v-for="(item,index) in ABCDEF" :key="index" >
                              <div style="float: left;width:50px;padding-top:10px;color:red">{{item.title}}</div>
                              <div style="float:left;width:620px">
                                     <span class="phone" v-for="(item1,index1) in item.phone" :key="index1" @click="change(item1)">
                                <span style="color:red">*</span>
                                <p>{{item1.name}}&nbsp;</p>
                                 <span style="font-size:14px;display:inline-block;" >{{item1.num}}</span>
                              </span>
                              </div>
                             
                              
                        </span>
                  </div>
            </el-tab-pane>
            <el-tab-pane label="GHIJ" name="third" style="width: 700px;height:280px;overflow:auto"> 
                  <div style="overflow: auto;">
                        <span v-for="(item,index) in GHIJ" :key="index">
                              <div style="float: left;width:50px;padding-top:10px;color:red">{{item.title}}</div>
                              <div style="float:left;width:620px">
                                     <span class="phone" v-for="(item1,index1) in item.phone" :key="index1" @click="change(item1)">
                                <span style="color:red">*</span>
                                <p>{{item1.name}}&nbsp;</p>
                                 <span style="font-size:14px;display:inline-block;" >{{item1.num}}</span>
                              </span>
                              </div>
                        </span>
                  </div>
            </el-tab-pane>
            <el-tab-pane label="KLMN" name="fourth" style="width: 700px;height:280px;overflow:auto"> 
                  <div style="overflow: auto;">
                        <span v-for="(item,index) in KLMN" :key="index">
                              <div style="float: left;width:50px;padding-top:10px;color:red">{{item.title}}</div>
                              <div style="float:left;width:620px">
                                     <span class="phone" v-for="(item1,index1) in item.phone" :key="index1" @click="change(item1)">
                                <span style="color:red">*</span>
                                <p>{{item1.name}}&nbsp;</p>
                                 <span style="font-size:14px;display:inline-block;" >{{item1.num}}</span>
                              </span>
                              </div>
                        </span>
                  </div>
            </el-tab-pane>
            <el-tab-pane label="PQRSTUVW" name="fifth" style="width: 700px;height:280px;overflow:auto">
                   <div style="overflow: auto;">
                        <span v-for="(item,index) in PQRSTUVW" :key="index">
                              <div style="float: left;width:50px;padding-top:10px;color:red">{{item.title}}</div>
                              <div style="float:left;width:620px">
                                     <span class="phone" v-for="(item1,index1) in item.phone" :key="index1" @click="change(item1)">
                                <span style="color:red">*</span>
                                <p>{{item1.name}}&nbsp;</p>
                                 <span style="font-size:14px;display:inline-block;" >{{item1.num}}</span>
                              </span>
                              </div>
                        </span>
                  </div>
                  </el-tab-pane>
            <el-tab-pane label="XYZ" style="width: 700px;height:280px;overflow:auto" name="sixth">
                   <div style="overflow: auto;">
                        <span v-for="(item,index) in XYZ" :key="index">
                              <div style="float: left;width:50px;padding-top:10px;color:red">{{item.title}}</div>
                              <div style="float:left;width:620px">
                                     <span class="phone" v-for="(item1,index1) in item.phone" :key="index1" @click="change(item1)">
                                <span style="color:red">*</span>
                                <p>{{item1.name}}&nbsp;</p>
                                 <span style="font-size:14px;display:inline-block;" >{{item1.num}}</span>
                              </span>
                              </div>
                        </span>
                  </div>
            </el-tab-pane>
           </el-tabs>
       </el-card>
       </div>

 
</template>

<script setup lang="ts">
import { ref,onMounted} from 'vue';
import bus from '@/bus/bus'
let PrePhonenum=ref('86 中国')
let activeName=ref('first')
//数据
let hot=ref(
      [{title:'', 
      phone:[
{name:'中国',num:86},
{name:'加拿大',num:1},
{name:'意大利',num:39},
{name:'澳大利亚',num:39},
{name:'新加坡',num:65},
{name:'越南',num:84},
{name:'中国香港',num:852},
{name:'美国',num:1},
{name:'英国',num:44},
{name:'印度尼西亚',num:62},
{name:'泰国',num:66},
{name:'印度',num:91},
{name:'中国澳门',num:853},
{name:'俄罗斯',num:7},
{name:'德国',num:49},
{name:'菲律宾',num:63},
{name:'日本',num:81},
{name:'柬埔寨',num:855},
{name:'中国台湾',num:886},
{name:'法国',num:33},
{name:'马来西亚',num:60},
{name:'新西兰',num:64},
{name:'韩国',num:82},
      ]}
      ]
      )
let ABCDEF=ref(
      [
      {title:'A', 
      phone:[
  {name:"安道尔",num:376},
{name:"阿尔及利亚",num: 213},
{name:"安圭拉 ",num:1264},
{name:"阿联酋",num: 971},
{name:"爱沙尼亚",num: 372},
{name:"澳大利亚",num: 61},
{name:"爱尔兰",num: 353},
{name:"阿根廷",num: 54},
{name:"阿曼",num: 968},
{name:"阿森松",num: 247},
{name:"奥地利",num: 43},
{name:"阿富汗",num: 93},
{name:"埃及",num: 20},
{name:"阿塞拜疆",num: 994},
{name:"安提瓜和巴布达",num: 1268},
{name:"阿尔巴尼亚",num: 355},
{name:"安哥拉",num: 244},
{name:"阿鲁巴",num: 297},
{name:"埃塞俄比亚",num: 251},
      ]},
      {title:'B', 
      phone:[
{name:"巴巴多斯",num: 1246},
{name:"波多黎备",num:  1787},
{name:"保加利亚",num:  359},
{name:"巴拉圭",num:  595},
{name:"波兰",num:  48},
{name:"北马里亚纳",num:  1670},
{name:"波斯尼亚和黑塞哥维那",num:  387},
{name:"巴布亚新几内亚",num: 675},
{name:"不丹",num:  975},
{name:"布基纳法索",num:  226},
{name:"巴勒斯坦",num:  970},
{name:"玻利维亚",num:  591},
{name:"北马其顿",num:  389},
{name:"布韦岛",num:  47},
{name:"博茨瓦纳",num:  267},
{name:"白俄罗斯",num:  375},
{name:"巴基斯坦",num:  92},
{name:"巴林",num:  973},
{name:"伯利兹",num:  501},
{name:"巴拿马",num:  507},
{name:"巴西",num:  55},
{name:"冰岛",num:  354},
{name:"巴哈马",num:  1242},
{name:"布隆迪",num:  257},
{name:"比利时",num:  32},
{name:"百慕大",num:  1441},
{name:"贝宁",num:  229},
      ]},
      {title:'C', 
      phone:[
{name:"赤道几内亚",num: 240},
{name:"朝鲜",num:  850},
      ]},
      {title:'D', 
      phone:[
{name:"东帝汶",num: 670},
{name:"多米尼加共和国",num:1809},
{name:"德国",num:49},
{name:"多米尼克",num:1767},
{name:"多哥",num:228},
{name:"丹麦",num:45},
      ]},
      {title:'E', 
      phone:[
{name:"厄瓜多尔",num: 593},
{name:"俄罗斯",num:7},
{name:"厄立特里亚",num:291},
      ]},
       {title:'F', 
      phone:[
{name:"梵蒂冈",num: 379},
{name:"菲律宾",num:  63},
{name:"法属波利尼西亚",num:689},
{name:"佛得角",num: 238},
{name:"福克兰群岛",num: 500},
{name:"法属圭亚那",num:594},
{name:"法国",num: 33},
{name:"法罗群岛",num: 298},
{name:"法属南部领土",num: 262},
{name:"斐济",num:679},
{name:"芬兰 ",num:358},
{name:"法属圣马丁",num: 590},
      ]},
      ]
      )
let GHIJ=ref(
      [
      {title:'G', 
      phone:[
{name:"冈比亚",num: 220},
{name:"刚果(布)",num:242},
{name:"格陵兰",num: 299},
{name:"古巴 ",num:53},
{name:"刚果(金)",num:243},
{name:"格林纳达",num: 1473},
{name:"瓜德罗普",num: 590},
{name:"哥伦比亚",num: 57},
{name:"哥斯达黎加",num: 506},
{name:"关岛",num: 1671},
{name:"格鲁吉亚",num: 995},
{name:"圭亚那",num: 592},
      ]},
      {title:'H', 
      phone:[
{name:"海地",num: 509},
{name:"荷兰",num: 31},
{name:"赫德岛和麦...",num: 672},
{name:"荷兰加勒比区",num: 599},
{name:"洪都拉斯",num: 504},
{name:"黑山",num: 382},
{name:"韩国",num: 82},
{name:"哈萨克斯坦",num: 7},
{name:"荷属圣马丁",num: 1721},
      ]},
      {title:'J', 
      phone:[
{name:"津巴布韦",num: 263},
{name:"基里巴斯",num: 686},
{name:"加纳",num: 233},
{name:"吉布提",num: 253},
{name:"加拿大",num: 1},
{name:"柬埔寨",num: 855},
{name:"吉尔吉斯斯坦",num: 996},
{name:"捷克",num: 420},
{name:"几内亚",num: 224},
{name:"几内亚比绍",num: 245},
{name:"加蓬",num: 241},
      ]},
      ]
      )
let XYZ=ref(
      [
      {title:'X', 
      phone:[
{name:"西班牙",num: 34},
{name:"叙利亚",num: 963},
{name:"新加坡",num: 65},
{name:"西撒哈拉",num: 212},
{name:"新喀里多尼亚",num:687},
{name:"新西兰",num: 64},
{name:"希腊",num: 30},
{name:"匈牙利",num: 36},
      ]},
      {title:'Y', 
      phone:[
{name:"意大利",num: 39},
{name:"英国",num:  44},
{name:"亚美尼亚",num:   374},
{name:"印度尼西亚",num:   62},
{name:"伊拉克",num:   964},
{name:"也门",num:   967},
{name:"印度",num:  91},
{name:"伊朗",num:  98},
{name:"越南",num: 84},
{name:"约旦",num: 962},
{name:"牙买加",num: 1876},
{name:"以色列",num: 972},
{name:"英属维尔京群岛",num: 1284},
{name:"英属印度洋领地",num:  246},
      ]},
      {title:'Z', 
      phone:[
{name:"直布罗陀",num: 350},
{name:"中国澳门",num: 853},
{name:"赞比亚",num: 260},
{name:"中国",num: 86},
{name:"乍得",num: 235},
{name:"中国台湾",num: 886},
{name:"中非共和国",num: 236},
{name:"中国香港",num: 852},
{name:"智利",num: 56},
      ]},
      ]
      )
let KLMN=ref(
      [
      {title:'K', 
      phone:[
{name:"库克群岛",num: 682},
{name:"喀麦隆",num: 237},
{name:"科特迪瓦",num: 225},
{name:"科科斯(基林)群岛",num: 61},
{name:"科摩罗",num: 269},
{name:"卡塔尔",num: 974},
{name:"克罗地亚",num: 385},
{name:"开曼群岛",num: 1345},
{name:"科威特",num: 965},
{name:"库拉索",num: 599},
{name:"肯尼亚",num: 254},
      ]},
      {title:'L', 
      phone:[
{name:"利比里亚",num: 231},
{name:"卢森堡",num:  352},
{name:"老挝",num:  856},
{name:"利比亚",num:  218},
{name:"莱索托",num:  266},
{name:"卢旺达",num:  250},
{name:"黎巴嫩",num:  961},
{name:"拉脱维亚",num:  371},
{name:"列支敦士登",num:  423},
{name:"罗马尼亚",num:  40},
{name:"立陶苑",num:  370},
      ]},
      {title:'M', 
      phone:[
{name:"马达加斯加",num: 261},
{name:"马耳他",num: 356},
{name:"孟加拉国",num: 880},
{name:"马拉维",num: 265},
{name:"秘鲁",num: 51},
{name:"美属萨摩亚",num: 1684},
{name:"墨西哥",num: 52},
{name:"缅甸",num: 95},
{name:"美国",num: 1},
{name:"密克罗尼西亚",num:691},
{name:"马里",num: 223},
{name:"摩纳哥",num: 377},
{name:"美属维尔京群岛",num:1340},
{name:"马约特",num: 262},
{name:"马尔代夫",num: 960},
{name:"美国本土外小岛屿",num: 1},
{name:"摩洛哥",num: 212},
{name:"毛里塔尼亚",num: 222},
{name:"莫桑比克",num: 258},
{name:"马提尼克",num: 596},
{name:"摩尔多瓦",num: 373},
{name:"蒙古",num: 976},
{name:"毛里求斯",num: 230},
{name:"马来西亚",num: 60},
{name:"马绍尔群岛",num: 692},
{name:"蒙特塞拉特",num: 1664},
      ]},
      {title:'N', 
      phone:[
{name:"纽埃",num: 683},
{name:"尼加拉瓜",num: 505},
{name:"纳米比亚",num: 264},
{name:"南苏丹",num: 211},
{name:"尼泊尔",num: 977},
{name:"南极洲",num: 672},
{name:"南乔治亚和南桑德维奇岛",num: 500},
{name:"挪威",num: 47},
{name:"南非",num: 27},
{name:"瑙鲁",num: 674},
{name:"尼日尔",num: 227},
{name:"诺福克岛",num: 672},
{name:"留尼汪(法属)",num: 262},
{name:"尼日利亚",num: 234},
      ]},
      ]
      )
let PQRSTUVW=ref(
      [
      {title:'P', 
      phone:[
{name:"帕劳",num: 680},
{name:"葡萄牙",num: 64},
{name:"皮特凯恩",num: 351},
      ]},
      {title:'R', 
      phone:[
{name:"日本",num: 81},
{name:"瑞典",num: 46},
{name:"瑞士",num: 61},
      ]},
      {title:'S', 
      phone:[
{name:"圣巴泰勒米",num: 590},
{name:"塞尔维亚",num: 381},
{name:"塞拉利昂",num: 232},
{name:"萨尔瓦多",num: 503},
{name:"索马里",num: 252},
{name:"塞浦路斯",num: 357},
{name:"斯威士兰",num: 268},
{name:"圣诞岛",num: 61},
{name:"圣赫勒拿....",num:290},
{name:"斯里兰卡",num: 94},
{name:"斯洛文尼亚",num: 386},
{name:"萨摩亚",num: 685},
{name:"塞舌尔",num: 248},
{name:"圣文森特...",num:1784},
{name:"圣多美和....",num:239},
{name:"圣基茨和....",num:1869},
{name:"檑陶褳驏溶阽恨罗门群岛",num: 677},
{name:"圣卢西亚",num: 1758},
{name:"塞内加尔",num: 221},
{name:"沙特阿拉伯",num: 966},
{name:"幟鲅术閭故鍕正繒歆自丹",num: 249},
{name:"斯洛伐克",num: 421},
{name:"苏里南",num: 597},
{name:"圣马力诺",num: 378},
{name:"圣皮埃尔和密克隆",num:508},
{name:"斯瓦尔巴岛和扬马延岛",num: 47},
      ]},
      {title:'T', 
      phone:[
{name:"士耳其",num: 90},
{name:"托克劳",num: 690},
{name:"突尼斯",num: 216},
{name:"泰国",num: 66},
{name:"士库曼斯坦",num: 993},
{name:"坦桑尼亚",num: 255},
{name:"塔吉克斯坦",num: 992},
{name:"特克斯和...",num:1649},
{name:"图瓦卢",num: 688},
{name:"汤加",num: 676},
{name:"特立尼达...",num:1868},
      ]},
      {title:'W', 
      phone:[
{name:"危地马拉",num: 502},
{name:"瓦利斯和...",num: 681},
{name:"乌干达",num: 256},
{name:"文莱",num: 673},
{name:"乌克兰",num: 380},
{name:"瓦努阿图",num: 678},
{name:"乌拉圭",num: 598},
{name:"委内瑞拉",num: 58},
{name:"乌兹别克...",num:998},
      ]},
      ]
      )
//搜索提示是否显示
let show=ref(false)
const isShow=(e:any)=>{
      e.stopPropagation()
 show.value=true
}
const stop=(e:any)=>{
e.stopPropagation()
}
interface val{
      name:string,
      num:number
}
//把数据改了并传到数据总线上
const change=(value:val)=>{
console.log(value);
PrePhonenum.value=value.name+' '+value.num
show.value=false
}
 onMounted(()=>{
 bus.emit('prePhoneNum',{
         PrePhoneNum:PrePhonenum.value
       })
       document.addEventListener('click',()=>{
            show.value=false
       })
   })
</script>

<style lang="less" scoped>
.phone{

      cursor: pointer;
      padding-top: 10px;
      padding-bottom: 10px;
      font-size: 15px;
      width: 110px;
      margin-right: 4px;
      display:inline-block;
      span{
            float: left;
            color: grey;
      }
      p{
           float: left;
            width: 65px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
      }
}
.phone:hover{
      background-color: #2577e3;
      color: white;
      span{
            color: white;
      }
}
</style>