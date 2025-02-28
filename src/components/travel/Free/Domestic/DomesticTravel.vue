<template>
<el-card style="margin-top:80px;width:99.9%;min-width:1217px;">
    <div style="display: flex;">
         <p class="title"></p><span>境内自由行</span>
         <el-tabs  class="tabs">
            <el-tab-pane label="精选" class="pane">   
                <div class="box" v-for="(item,index) in jingxuan" :key="index">
                  <div style="height: 160px;overflow:hidden"><img :src="item.img"  alt=""></div>
                  <p class="boxInclude">{{item.include}}</p>
                  <p class="boxPrice">{{item.price}}</p>
             </div>
            </el-tab-pane>
            <el-tab-pane label="北京" class="pane"> 
                <div class="box" v-for="(item,index) in beijing" :key="index">
                  <div style="height: 160px;overflow:hidden"><img :src="item.img"  alt=""></div>
                  <p class="boxInclude">{{item.include}}</p>
                  <p class="boxPrice">{{item.price}}</p>
             </div>
            </el-tab-pane>
            <el-tab-pane label="西安" class="pane"> 
                <div class="box" v-for="(item,index) in xian" :key="index">
                  <div style="height: 160px;overflow:hidden"><img :src="item.img"  alt=""></div>
                  <p class="boxInclude">{{item.include}}</p>
                  <p class="boxPrice">{{item.price}}</p>
             </div>
            </el-tab-pane>
            <el-tab-pane label="杭州" class="pane"> 
                <div class="box" v-for="(item,index) in hangzhou" :key="index">
                  <div style="height: 160px;overflow:hidden"><img :src="item.img"  alt=""></div>
                  <p class="boxInclude">{{item.include}}</p>
                  <p class="boxPrice">{{item.price}}</p>
             </div>
            </el-tab-pane>
            <el-tab-pane label="九寨沟" class="pane">
                 <div class="box" v-for="(item,index) in jiuzhaigou" :key="index">
                  <div style="height: 160px;overflow:hidden"><img :src="item.img"  alt=""></div>
                  <p class="boxInclude">{{item.include}}</p>
                  <p class="boxPrice">{{item.price}}</p>
             </div>
            </el-tab-pane>
            <el-tab-pane label="成都" class="pane">
                 <div class="box" v-for="(item,index) in chengdu" :key="index">
                  <div style="height: 160px;overflow:hidden"><img :src="item.img"  alt=""></div>
                  <p class="boxInclude">{{item.include}}</p>
                  <p class="boxPrice">{{item.price}}</p>
             </div>
            </el-tab-pane>
         </el-tabs>
    </div>
   
        
    </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
//精选数据
let jingxuan=ref([
{img:new URL("@/assets/travel/Free/Domestic/jingxuan/image1.png",import.meta.url).href,include:'威海4日3晚自由行·【包车游】2日专属包车+赠市区接送站/机『宿精选市区4钻自选酒店』山海间的威海【超人气线路5选2·接受微调】成山头&鸥鹭王国·海驴岛&神雕山动物园 | 西霞口 | 5A刘公岛 | 火炬八街威海4日3晚自由行·【包车游】2日专属包车+赠市区接送站/机宿精',price:"¥1048起"},
{img:new URL("@/assets/travel/Free/Domestic/jingxuan/image2.jpg",import.meta.url).href,include:'威海+烟台5日4晚自由行【包车游】2日专属包车+赠接送站/机+动车无忧衔接『威海2晚+烟台2晚·全程精选4钻酒店』双城玩法均可自选·4选1+3选1随心搭配 | 大美蓬莱阁|"小马代"养马岛|“小镰仓”火炬八',price:"¥1643起"},
{img:new URL("@/assets/travel/Free/Domestic/jingxuan/image3.jpg",import.meta.url).href,include:'威海4日3晚自由行·【包车游】1日专属包车+赠市区接送站/机『宿』甄选威海5钻酒店〖人气线路4选1·嗨玩威海〗打卡“小镰仓”火炬八街|探秘甲午华夏历史·刘公岛+定远舰|打卡网红成山岛 喂投海鸥|畅游那香海海水浴场',price:"¥758起"},
{img:new URL("@/assets/travel/Free/Domestic/jingxuan/image4.jpg",import.meta.url).href,include:'威海3日2晚自由行·【周末包车游】1日专属包车+赠市区接送站/机『宿』精选威海C位4钻酒店〖人气线路4选1·嗨玩威海〗打卡“小镰仓”火炬八街|成山头 文艺金石湾|刘公岛+定远舰·风景与历史的交融与汇集',price:"¥475起"},
{img:new URL("@/assets/travel/Free/Domestic/jingxuan/image5.jpg",import.meta.url).href,include:'威海2-15日自由行·海量酒店随心选|自由定制行程|经典景点VS新晋网红圣地|市区大众游&深度周边小众景点|打造属于自己的度假行程.',price:"¥326起"},
{img:new URL("@/assets/travel/Free/Domestic/jingxuan/image6.jpg",import.meta.url).href,include:'三亚2-30日自由行·【1家酒店连住|3/4/5钻任选|天数随心定】精选20家特价高钻酒店+连住不挪窝|一线海景:美高梅·天域·喜来登 性价比:国光·温德姆·迎宾馆等 更多可选|可优惠价加购包车/租车/一日游等！双飞',price:"¥2228起"},
{img:new URL("@/assets/travel/Free/Domestic/jingxuan/image7.jpg",import.meta.url).href,include:'成都2-15日自由行·【超万人的选择·超级自由行】航班时刻&各航空公司任选+3-5钻酒店随心组合|可加购各类门票|打卡网红景点|自由定制您专属行程·随心逛吃魔幻巴蜀|更可选1日包车游（看花花、看三星堆、都青连线等）',price:"¥1422起"},
{img:new URL("@/assets/travel/Free/Domestic/jingxuan/image8.jpg",import.meta.url).href,include:'三亚亚龙湾5日自由行·纠结酒店怎么选？交给旅行设计师！设计&定制私家行程【4晚连住亚龙湾】亲子主推假期打卡地：仿佛置身于热带天堂！每天醒来都是海景，阳光沙滩让人忘却一切烦恼，赠专车接送机+1日包车',price:"¥1987起"},
])
//北京数据
let beijing=ref([
{img:new URL("@/assets/travel/Free/Domestic/beijing/image1.jpg",import.meta.url).href,include:'北京+故宫博物院+中国国家博物馆+八达岭长城+天坛公园+颐和园5日4晚自由行·桃红柳绿·春和景明-春日赏花赠用车延时【2日包车+含故宫+长城+天坛+颐和园圆明园+恭王府】宿市区口碑酒店,位置任选|行程可定制',price:"¥2449起"},
{img:new URL("@/assets/travel/Free/Domestic/beijing/image2.jpg",import.meta.url).href,include:'北京+北京环球度假区5日4晚自由行·【2日包车+含环影门票+赠接送机/站】享环球影城专属入园通道&提前1小时入园+1晚环影酒店+3晚市区4钻·随心选｜包车游享一单一车+行程自由可调+专业司机带路',price:"¥3450起"},
{img:new URL("@/assets/travel/Free/Domestic/beijing/image3.jpg",import.meta.url).href,include:'北京+故宫博物院+中国国家博物馆+八达岭长城+天坛公园5日4晚自由行·春色满城关不住-说走就走赴京来【2日包车+含门票+赠接送机/站】宿市区口碑3钻|用车日期可指定|含故宫（国博）+长城+天坛+颐和园圆明园--行程可调',price:"¥1943起"},
{img:new URL("@/assets/travel/Free/Domestic/beijing/image4.jpg",import.meta.url).href,include:'北京+北京环球度假区6日5晚自由行·『3日包车+首尾接送+环球影城单趟接驳+含景点门票』宿·1晚环球酒店·『享』提前1小时入园+4晚市区品质4钻酒店+一单一车+行程自由可调+免费升舒适车型',price:"¥3810起"},
{img:new URL("@/assets/travel/Free/Domestic/beijing/image5.jpg",import.meta.url).href,include:'北京+北京环球度假区4日3晚自由行·霍格沃兹报道!『包车游·含北京1日包车+赠接送机/站』1晚环影酒店+2晚市区4钻【享】提前1小时入园通道--【可加购】环影1日票/优速通等.',price:"¥2896起"},
{img:new URL("@/assets/travel/Free/Domestic/beijing/image6.jpg",import.meta.url).href,include:'北京+故宫博物院+天安门广场+八达岭长城5日4晚自由行·樱落春意浓·赏花正当时【3日包车+门票全含无忧+首尾接送】宿市区品牌4钻酒店【含】故宫+八达岭长城+天坛+颐和园+圆明园行程可调可改+24小时行程管家',price:"¥2174起"},
{img:new URL("@/assets/travel/Free/Domestic/beijing/image7.jpg",import.meta.url).href,include:'北京+颐和园+故宫博物院+八达岭长城+天安门广场+天坛公园5日自由行·【1日专属包车+赠接送机/站·宿3环优质酒店】位置房型可任选|含一日包车，行程N选1，线路可选可调|爬长城逛皇城·5A景点全覆盖--可选门票代约',price:"¥2488起"},
{img:new URL("@/assets/travel/Free/Domestic/beijing/image8.jpg",import.meta.url).href,include:'北京+故宫博物院+恭王府+天坛公园+颐和园6日5晚自由行·春风十里-花漾京城-限时赠赏花用车延时【3日包车+含门票：故宫+长城+天坛通票+颐和园+圆明园联票】甄选口碑4钻酒店|用车日期可指定+行程可定制+首尾接送',price:"¥1588起"},
])
//成都数据
let chengdu=ref([
{img:new URL("@/assets/travel/Free/Domestic/chengdu/image1.jpg",import.meta.url).href,include:'成都2-15日自由行·【超万人的选择·超级自由行】航班时刻&各航空公司任选+3-5钻酒店随心组合|可加购各类门票|打卡网红景点|自由定制您专属行程·随心逛吃魔幻巴蜀|更可选1日包车游（看花花、看三星堆、都青连线等）',price:"¥1423起"},
{img:new URL("@/assets/travel/Free/Domestic/chengdu/image2.jpg",import.meta.url).href,include:'成都+重庆3-10日自由行·【超5千人的选择~】机票+酒店任选,成渝高铁自理~麻辣火锅季·不负美食不负卿~川渝等你吃喝玩乐~~城市漫步,感受历史人文~',price:"¥1548起"},
{img:new URL("@/assets/travel/Free/Domestic/chengdu/image3.jpg",import.meta.url).href,include:'成都4日3晚自由行·【支持2+1酒店住宿·钻级房型自选】||成都1日包车可加购(行程3选1:市区8小时/熊猫基地+三星堆/都江堰+青城山)|| 【穿越古蜀文明||看软萌da熊猫】【城市漫步||感受历史人文~】',price:"¥1505起"},
{img:new URL("@/assets/travel/Free/Domestic/chengdu/image4.jpg",import.meta.url).href,include:'成都+九寨沟+黄龙风景名胜区+三星堆博物馆+都江堰6日5晚自由行·【全程包车|赠接送机/站】四川名片·全景游〓都江堰+古蜀文明·三星堆+九寨沟+黄龙+熊猫基地遇花局 | 都江堰1晚·世遗不错过|全程酒店自选|1v1管家',price:"¥3347起"},
{img:new URL("@/assets/travel/Free/Domestic/chengdu/image5.jpg",import.meta.url).href,include:'重庆+成都3-8日自由行·『川渝双城记·重庆进成都出·双飞往返+两地酒店任选』体验川渝慢生活·打卡8D魔幻山城·趣逗熊猫丸子,川渝段高铁自理',price:"¥4654起"},
{img:new URL("@/assets/travel/Free/Domestic/chengdu/image6.jpg",import.meta.url).href,include:'成都+三星堆博物馆+乐山大佛+都江堰5日4晚自由行·『包车游|赠接送机/站』「4晚成都5钻酒店」甄选司机+2整天包车|三星堆/熊猫基地/都江堰/青城山景点自由组合+畅游乐山大佛|动车/飞机任选|1v1管家+1日自由',price:"¥2274起"},
{img:new URL("@/assets/travel/Free/Domestic/chengdu/image7.jpg",import.meta.url).href,include:'成都2-15日自由行·【超万人的选择·超级自由行】航班时刻&各航空公司任选+3-5钻酒店随心组合|可加购各类门票|打卡网红景点|自由定制您专属行程·随心逛吃魔幻巴蜀|更可选1日包车游（看花花、看三星堆、都青连线等）',price:"¥2712起"},
{img:new URL("@/assets/travel/Free/Domestic/chengdu/image8.jpg",import.meta.url).href,include:'成都+九寨沟+黄龙风景名胜区+三星堆博物馆5日4晚自由行·【全程包车|赠接送机/站】『2成都+2九寨低海拔5钻酒店』甄选司机|三星堆·探古蜀文明/都江堰/熊猫乐园3选1+畅游童话世界九寨沟+轻徒步天上瑶池黄龙|1v1管家',price:"¥1392起"},
])
//杭州数据
let hangzhou=ref([
{img:new URL("@/assets/travel/Free/Domestic/hangzhou/image1.jpg",import.meta.url).href,include:'杭州2-10日自由行·【双飞+1家酒店连住或可选住2家 | 天数随心定】航班全覆盖+2/3/4/5钻酒店随选『住市区 出行超便捷-西湖湖滨商圈/武林广场 带娃亲子游-开元森泊·湘湖逍遥庄园等』可加购专车接送机&门票一次搞定！',price:"¥1030起"},
{img:new URL("@/assets/travel/Free/Domestic/hangzhou/image2.jpg",import.meta.url).href,include:'杭州+乌镇+苏州4日3晚自由行·经典玩法〖含3日跨城包车+24H接送机/站〗【宿】杭州1晚+乌镇1晚+苏州1晚 #甄选4/5钻酒店『游』杭州西湖·经典江南+“水乡天花板”乌镇+苏州园林『微信管家全程1V1服务』飞机/高铁可选',price:"¥2160起"},
{img:new URL("@/assets/travel/Free/Domestic/hangzhou/image3.jpg",import.meta.url).href,include:'杭州+乌镇+苏州+上海6日5晚自由行·【包车游|一次玩遍江南顶流@西湖·水乡·苏园·魔都<2晚杭州+1晚乌镇+1晚苏州+1晚上海>】住口碑榜4/5钻酒店 行程可DIY：苏堤漫步-灵隐|水乡乌镇|苏州园林|海派魔都',price:"¥2817起"},
{img:new URL("@/assets/travel/Free/Domestic/hangzhou/image4.jpg",import.meta.url).href,include:'杭州+乌镇+绍兴5日4晚自由行·【串游江南】杭州市区4晚连住·3/4/5钻酒店任选【含】1日杭州市区包车+1日乌镇包车+1日绍兴包车+赠接送机【游】秀丽杭州城/乌镇温柔乡/绍兴真江南！专车+管家服务！杭州进出·含大交通',price:"¥2084起"},
{img:new URL("@/assets/travel/Free/Domestic/hangzhou/image5.jpg",import.meta.url).href,include:'苏州+乌镇+杭州4日3晚自由行·【唯美江南@含3日跨城包车+24H接送机/站】宿-1晚苏州+1晚乌镇+1晚杭州#甄选4/5钻酒店/民宿【游】杭州西湖·经典江南+“水乡天花板”乌镇+苏州园林【微信管家全程1V1服务·轻松自在】',price:"¥2108起"},
{img:new URL("@/assets/travel/Free/Domestic/hangzhou/image6.jpg",import.meta.url).href,include:'杭州+乌镇3-10日自由行·超5k人【双飞往返 | 住杭州&乌镇双酒店】杭州进出，天数自定！一次玩转『烟雨杭州城+千年水乡乌镇』各星级酒店任选 | 可加购各大景点门票 | 一次搞定！',price:"¥1725起"},
{img:new URL("@/assets/travel/Free/Domestic/hangzhou/image7.jpg",import.meta.url).href,include:'南京+无锡+苏州+乌镇+杭州7日6晚自由行·《经典华东 全程包车》4钻/5钻 酒店随心选【游】总统府+中山陵+秦淮河畔+拈花湾+留园/狮子林 2选1+寒山寺+乌镇西栅+西湖+灵隐寺+西溪湿地【行】一单一团·全程待命放松游',price:"¥4786起"},
{img:new URL("@/assets/travel/Free/Domestic/hangzhou/image8.jpg",import.meta.url).href,include:'杭州+绍兴3日2晚自由行·【含1日绍兴包车+赠接送站】【住】杭州2晚连住·3/4/5钻酒店任选【游】杭州自由活动:西湖游船/灵隐/云栖竹径+包车寻味绍兴:臭豆腐/乌篷船/鲁迅故里/兰亭寻圣/东湖探秘！杭州进出·含大交通',price:"¥1201起"},
])
//西安数据
let xian=ref([
{img:new URL("@/assets/travel/Free/Domestic/xian/image1.jpg",import.meta.url).href,include:'西安4日3晚自由行·【性价比推荐·多好评高销量】热门钟鼓楼&3-4钻酒店任选 | 可加购大唐芙蓉园&兵马俑&华清池门票 | 古城墙骑车~回民街拔草~钟鼓楼夜景~更有大唐不夜城表演时刻表 | 双飞',price:"¥1519起"},
{img:new URL("@/assets/travel/Free/Domestic/xian/image2.jpg",import.meta.url).href,include:'西安2-15日自由行·【万人之选|热卖ing】双飞·航班时间任您选 | 西安当地酒店全覆盖·1晚起订 | 打卡网红地标 | 更可加购，华山、兵马俑、华清池、陕西历史博物馆包车一日游 | 【赠】内附大唐不夜城演出时刻~',price:"¥1256起"},
{img:new URL("@/assets/travel/Free/Domestic/xian/image3.jpg",import.meta.url).href,include:'西安+兵马俑+华清池5日4晚自由行·【2日专属包车+首尾赠接送机/站】宿4钻榜单酒店-可自选升级5钻酒店 | 5种精选人气玩法可选·接受微调·行程管家·省心省力-当地好司机护航-历史的熏陶-碳水之都的诱惑',price:"¥2106起"},
{img:new URL("@/assets/travel/Free/Domestic/xian/image4.jpg",import.meta.url).href,include:'西安+兵马俑+华清池4日3晚自由行·【🥇1日专属包车】宿·臻选西安中心5钻酒店·多房型可选|1日专属包车游·6种精选人气玩法任意选·接受微调·行程管家·省心省力|当地好司机护航|历史的熏陶|碳水之都的诱惑|游学知识海洋',price:"¥1122起"},
{img:new URL("@/assets/travel/Free/Domestic/xian/image5.jpg",import.meta.url).href,include:'西安+兵马俑+华清池+大唐芙蓉园4日3晚自由行·【2日专属包车+首尾赠接送机/站+可选兵马俑门票】精选5钻口碑好酒店-房型可选 | 5种精选人气玩法可选·接受微调·行程管家·省心省力-当地好司机护航-历史的熏陶',price:"¥1728起"},
{img:new URL("@/assets/travel/Free/Domestic/xian/image6.jpg",import.meta.url).href,include:'西安5日4晚自由行·【1日专属包车】宿·臻选西安钟鼓楼4钻酒店·多房型可选|1日专属包车游·6种精选人气玩法任意选·接受微调·行程管家·省心省力|当地好司机护航|博物奇妙夜|逛吃拍照打卡|考古之路',price:"¥1631起"},
{img:new URL("@/assets/travel/Free/Domestic/xian/image7.jpg",import.meta.url).href,include:'西安+重庆3-15日自由行·【网红双城&美食之旅】「双飞·西安进重庆出&双城双玩法，行程顺畅不重复」| 双城1+1起住 · 行程天数个性化，更自由 | 西重高铁开通，连接中国两个美食之城 | 当泡馍遇上火锅·是心动的味道~~',price:"¥1711起"},
{img:new URL("@/assets/travel/Free/Domestic/xian/image8.jpg",import.meta.url).href,include:'西安3日2晚自由行·【1日专属包车+首尾赠接送机/站】优选西安钟鼓楼4钻酒店·多房型可选|1日专属包车游·6种精选人气玩法任意选·接受微调·行程管家·省心省力|当地好司机护航|历史的熏陶|碳水之都的诱惑',price:"¥1563起"},
])
//九寨沟数据
let jiuzhaigou=ref([
{img:new URL("@/assets/travel/Free/Domestic/jiuzhaigou/image1.jpg",import.meta.url).href,include:'成都+九寨沟+峨眉山+乐山+三星堆博物馆+都江堰8日7晚自由行·『全程包车|赠接送机/站』【4成都+2九寨+1峨眉酒店】甄选司机|博物馆里觅传奇+世遗都江堰+峨眉+畅游乐山+童话九寨+黄龙轻徒步|1v1管家',price:"¥4654起"},
{img:new URL("@/assets/travel/Free/Domestic/jiuzhaigou/image2.jpg",import.meta.url).href,include:'成都+九寨沟+黄龙风景名胜区+三星堆博物馆5日4晚自由行·【全程包车|赠接送机/站】『2成都+2九寨低海拔5钻酒店』甄选司机|三星堆·探古蜀文明/都江堰/熊猫乐园3选1+畅游童话世界九寨沟+轻徒步天上瑶池黄龙|1v1管家',price:"¥2712起"},
{img:new URL("@/assets/travel/Free/Domestic/jiuzhaigou/image3.jpg",import.meta.url).href,include:'成都+九寨沟+黄龙风景名胜区+三星堆博物馆+都江堰6日5晚自由行·【全程包车|赠接送机/站】四川名片·全景游〓都江堰+古蜀文明·三星堆+九寨沟+黄龙+熊猫基地遇花局 | 都江堰1晚·世遗不错过|全程酒店自选|1v1管家',price:"¥3447起"},
{img:new URL("@/assets/travel/Free/Domestic/jiuzhaigou/image4.jpg",import.meta.url).href,include:'成都+九寨沟+黄龙风景名胜区5日4晚自由行·〖自选动车直达九寨·落地全程包车〗『2成都+2九寨5钻酒店』当地老司机|X景点3选1+九寨沟看山花&碧水&红叶+黄龙赏彩池&峡谷&森林|24H接送机/站+1v1管家',price:"¥2555起"},
{img:new URL("@/assets/travel/Free/Domestic/jiuzhaigou/image5.jpg",import.meta.url).href,include:'成都+九寨沟+黄龙风景名胜区+峨眉山+三星堆博物馆8日7晚自由行·『全程包车|赠接送机/站』【4成都+2九寨+1峨眉酒店】甄选司机|古蜀文明三星堆+都江堰工程+金顶+畅游乐山+童话九寨+黄龙轻徒步|1v1管家',price:"¥4846起"},
{img:new URL("@/assets/travel/Free/Domestic/jiuzhaigou/image6.jpg",import.meta.url).href,include:'九寨沟+黄龙风景名胜区3日2晚自由行·『动车直达九寨|落地全程包车』『甄选酒店』严选当地好司机+24小时接送|童话世界九寨沟+畅游人间天上瑶池黄龙|高铁/飞机任选进九寨|1v1管家',price:"¥3211起"},
{img:new URL("@/assets/travel/Free/Domestic/jiuzhaigou/image7.jpg",import.meta.url).href,include:'成都+九寨沟+黄龙风景名胜区+三星堆博物馆5日4晚自由行·〖自选动车·直达九寨·落地全程包车〗『3成都+1九寨低海拔5钻酒店』当地老司机·24h接送机/站|偶遇“花局”+三星堆·探前世今生+九寨轻徒步+黄龙森呼吸|1v1管家',price:"¥2781起"},
{img:new URL("@/assets/travel/Free/Domestic/jiuzhaigou/image8.jpg",import.meta.url).href,include:'成都+九寨沟+重庆6日5晚自由行·【成都-九寨全程包车· 赠接送机/站】『甄选酒店+严选当地老司机』九寨沟轻徒步+都江堰水利工程+黄龙五彩池+重庆自由行|含川渝段交通',price:"¥2784起"},
])
</script>

<style lang="less" scoped>
.title{
        margin: 3px 8px 3px 0;
        display: inline-block;
        width: 24px;
        height: 24px;
        line-height: 28px;
        background: url('@/assets/travel/Free/icon/icon1.png') no-repeat;
        background-size: contain;
    
}
span{
    width: 200px;
    font-size: 24px;
    line-height: 24px;
    
}
.tabs{
    width: 100%;
    margin-top: -8px;
    .box{
    margin-top:20px;
    border: 1px solid rgb(150, 149, 149);
    overflow: hidden;
    float: left;
    margin-right: 18.5px;
    width: 280px;
    height: 250px;
    
    img{
        transition:all 0.3s ease;
        width: 280px;
         height:160px;
    }
    .boxInclude{
        padding: 15px;
        padding-bottom: 0px;
            width:250px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
    }
    .boxPrice{
        padding: 15px;
        color: rgb(255, 115, 0);
        font-size:20px
      }
   }
    .box:hover{
    box-shadow: 0 0 2px ;
     img:hover{
      width: 300px;
      height: 170px;
       margin-left: -10px;
     
    }
   }
    .pane :nth-child(4),.pane :nth-child(8){
        margin-right: 0;
    }
}
:deep(.el-tabs__content){
    margin-left: -200px;
}

</style>