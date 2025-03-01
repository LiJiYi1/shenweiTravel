<template>
    <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="精选" name="first">
        <div class="big">
            <div style="width: 438px;height:320px;overflow:hidden;"> 
                <img :src="jingxuanBig.img" alt="">
            </div>
           
            <p class="bigInclude">{{jingxuanBig.include}}<p class="diamond_3"></p></p>
            <p class="bigPrice">{{jingxuanBig.price}}</p>
        </div>
        <div class="small" v-for="(item,index) in jingxuanSmall" :key="index">
            <div style="width: 200px;height:120px;overflow:hidden">
                <img :src="item.img" alt="">
            </div>    
            <p class="smallInclude">{{item.include}}<p class="diamond_3"></p></p>
            <p class="smallPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="威海" name="second">
         <div class="big">
            <div style="width: 438px;height:320px;overflow:hidden;"> 
                <img :src="weiHaiBig.img" alt="">
            </div>
           
            <p class="bigInclude">{{weiHaiBig.include}}</p>
            <p class="bigPrice">{{weiHaiBig.price}}</p>
        </div>
        <div class="small" v-for="(item,index) in weiHaiSmall" :key="index">
            <div style="width: 200px;height:120px;overflow:hidden">
                <img :src="item.img" alt="">
            </div>    
            <p class="smallInclude">{{item.include}}</p>
            <p class="smallPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="北京" name="third"> 
        <div class="big">
            <div style="width: 438px;height:320px;overflow:hidden;"> 
                <img :src="beijingBig.img" alt="">
            </div>
           
            <p class="bigInclude">{{beijingBig.include}}</p>
            <p class="bigPrice">{{beijingBig.price}}</p>
        </div>
        <div class="small" v-for="(item,index) in beijingSmall" :key="index">
            <div style="width: 200px;height:120px;overflow:hidden">
                <img :src="item.img" alt="">
            </div>    
            <p class="smallInclude">{{item.include}}</p>
            <p class="smallPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="杭州" name="fourth">
         <div class="big">
            <div style="width: 438px;height:320px;overflow:hidden;"> 
                <img :src="hangzhouBig.img" alt="">
            </div>
           
            <p class="bigInclude">{{hangzhouBig.include}}</p>
            <p class="bigPrice">{{hangzhouBig.price}}</p>
        </div>
        <div class="small" v-for="(item,index) in hangzhouSmall" :key="index">
            <div style="width: 200px;height:120px;overflow:hidden">
                <img :src="item.img" alt="">
            </div>    
            <p class="smallInclude">{{item.include}}</p>
            <p class="smallPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="上海" name="fifth"> 
        <div class="big">
            <div style="width: 438px;height:320px;overflow:hidden;"> 
                <img :src="shanghaiBig.img" alt="">
            </div>
           
            <p class="bigInclude">{{shanghaiBig.include}}</p>
            <p class="bigPrice">{{shanghaiBig.price}}</p>
        </div>
        <div class="small" v-for="(item,index) in shanghaiSmall" :key="index">
            <div style="width: 200px;height:120px;overflow:hidden">
                <img :src="item.img" alt="">
            </div>    
            <p class="smallInclude">{{item.include}}</p>
            <p class="smallPrice">{{item.price}}</p>
        </div></el-tab-pane>
    <el-tab-pane label="西安" name="sixth"> 
        <div class="big">
            <div style="width: 438px;height:320px;overflow:hidden;"> 
                <img :src="xianBig.img" alt="">
            </div>
           
            <p class="bigInclude">{{xianBig.include}}</p>
            <p class="bigPrice">{{xianBig.price}}</p>
        </div>
        <div class="small" v-for="(item,index) in xianSmall" :key="index">
            <div style="width: 200px;height:120px;overflow:hidden">
                <img :src="item.img" alt="">
            </div>    
            <p class="smallInclude">{{item.include}}</p>
            <p class="smallPrice">{{item.price}}</p>
        </div></el-tab-pane>
    <el-tab-pane label="成都" name="seventh"> 
        <div class="big">
            <div style="width: 438px;height:320px;overflow:hidden;"> 
                <img :src="chengduBig.img" alt="">
            </div>
           
            <p class="bigInclude">{{chengduBig.include}}</p>
            <p class="bigPrice">{{chengduBig.price}}</p>
        </div>
        <div class="small" v-for="(item,index) in chengduSmall" :key="index">
            <div style="width: 200px;height:120px;overflow:hidden">
                <img :src="item.img" alt="">
            </div>    
            <p class="smallInclude">{{item.include}}</p>
            <p class="smallPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const activeName = ref('first')
//精选数据
let jingxuanBig=ref(
{img:new URL("@/assets/travel/Domestic/better/image1.png",import.meta.url).href,include:'威海+刘公岛景区+荣成+那香海钻石沙滩浴场+搁浅货轮布鲁维斯号+火炬八街3日2晚拼小团',price:"¥744起"},
)
let jingxuanSmall=ref([
{img:new URL("@/assets/travel/Domestic/better/image2.png",import.meta.url).href,include:'上海+苏州+杭州+乌镇5日4晚跟团游',price:"¥1211起"},
{img:new URL("@/assets/travel/Domestic/better/image3.png",import.meta.url).href,include:'西安兵马俑+华清宫+华山+大雁塔+大唐不夜城+钟鼓楼广场4日3晚跟团游',price:"¥1611起"},
{img:new URL("@/assets/travel/Domestic/better/image4.png",import.meta.url).href,include:'云南昆明+大理市+丽江6日5晚跟团游',price:"¥2000起"},
{img:new URL("@/assets/travel/Domestic/better/image5.png",import.meta.url).href,include:'成都+九寨沟+黄龙风景名胜区5日4晚跟团游·【135特价 口碑福利T0P.1】金牌导游〓',price:"¥2215起"},
{img:new URL("@/assets/travel/Domestic/better/image6.png",import.meta.url).href,include:'北京5日4晚跟团游·【提前8天订享进宫·不进赔付1000/单·金牌导游】泛2环酒店连住｜早定送博物馆盲盒·暖春赏樱花｜28人团·非遗中轴｜0购物｜儿童赠',price:"¥1524起"},
{img:new URL("@/assets/travel/Domestic/better/image7.png",import.meta.url).href,include:'长沙+张家界+武陵源+天门山+凤凰6日5晚跟团游·万人游全景热销榜一！咨询下单领现金',price:"¥3675起"},
{img:new URL("@/assets/travel/Domestic/better/image8.png",import.meta.url).href,include:'广州+珠海+长隆野生动物世界+珠海长隆海洋王国5日4晚跟团游·【错峰早订·儿童赠',price:"¥3274起"},
{img:new URL("@/assets/travel/Domestic/better/image9.png",import.meta.url).href,include:'海南三亚7日6晚跟团游·『销量榜冠』 蜈支洲赠VIP免排队上下岛+沙滩旅拍+游艇出海直升',price:"¥2534起"},
])
//威海数据
let weiHaiBig=ref(
{img:new URL("@/assets/travel/Domestic/weihai/image1.png",import.meta.url).href,include:'威海+刘公岛景区+荣成+那香海钻石沙滩浴场+搁浅货轮布鲁维斯号+火炬八街3日2晚拼小团',price:"¥744起"},
)
let weiHaiSmall=ref([
{img:new URL("@/assets/travel/Domestic/weihai/image2.png",import.meta.url).href,include:'威海+荣成5日4晚私家团·儿童免单&冬季特惠 全程升级海景房『全程向导+电子讲解+一日DIY包车自由行』人气景点<荣成天鹅湖/刘公岛/布鲁维斯号沉船/那香海钻石沙滩>纯玩0购物0自费+当地土著+24h管家服务',price:"¥1972起"},
{img:new URL("@/assets/travel/Domestic/weihai/image3.png",import.meta.url).href,include:'威海4日3晚私家团·儿童免单【暖冬温泉·邂逅天鹅·0购物】宿·升级一晚5钻温泉酒店＋2晚城芯5钻酒店「浪漫威海·布鲁维斯号/行摄荣成·天鹅湖/半部近代史·5A刘公岛/火炬八街·美拍」小红薯网红打卡地|24H管家/接or送机服务',price:"¥1716起"},
{img:new URL("@/assets/travel/Domestic/weihai/image4.png",import.meta.url).href,include:'威海+烟台+蓬莱区+青岛4日3晚跟团游·【威海参团·免升威海钻海景房·赠栈桥喂海鸥】<硬核双5A刘公岛+蓬莱阁>O自费·金导带玩金沙滩·打卡孤独鲸+火炬八街·邂逅海鸥/养马岛日落+鲅鱼水饺&正宗韩料&德餐』含接送',price:"¥1690起"},
{img:new URL("@/assets/travel/Domestic/weihai/image5.png",import.meta.url).href,include:'威海3日跟团游·春日出游-探秘威海湾海洋世界出发探秘网红景，走千里山海2-6人小包团（2人',price:"¥1280起"},
{img:new URL("@/assets/travel/Domestic/weihai/image6.png",import.meta.url).href,include:'威海3日2晚拼小团·『6人小团·宿火炬八街旁』行程灵活&自选·热门景点2选1<“爸爸去哪',price:"¥993起"},
{img:new URL("@/assets/travel/Domestic/weihai/image7.png",import.meta.url).href,include:'青岛+威海+烟台+蓬莱5日4晚跟团游·限升海景房·2N5钻+2N4钻【9人精致团+空座率30%】',price:"¥1547起"},
{img:new URL("@/assets/travel/Domestic/weihai/image8.png",import.meta.url).href,include:'威海3日2晚私家团·儿童免单【不拼外人·独立成团·0购物】甄选沙滩/海景·5钻酒店任选「浪',price:"¥1541起"},
{img:new URL("@/assets/travel/Domestic/weihai/image9.png",import.meta.url).href,include:'威海3日2晚跟团游·【宿火炬八街旁·“多巴胺”漫步】『限赠·摩天岭索道·跨过山和大海』<get爸',price:"¥2998起"},
])
//北京数据
let beijingBig=ref(
{img:new URL("@/assets/travel/Domestic/beijing/image1.png",import.meta.url).href,include:'北京5日4晚跟团游·【提前8天订享进宫·不进赔付1000/单·金牌导游】泛2环酒店连住｜早定送博物馆盲盒·暖春赏樱花｜28人团·非遗中轴｜0购物｜儿童赠早餐｜赠神武门摆渡车·天坛通票·奥运地标｜24h专车',price:"¥1524起"},
)
let beijingSmall=ref([
{img:new URL("@/assets/travel/Domestic/beijing/image2.png",import.meta.url).href,include:'北京5日4晚跟团游·【提前8天订享进宫·不进赔付1000/单·金牌导游】泛2环酒店连住｜早定送博物馆盲盒·暖春赏樱花｜28人团·非遗中轴｜0购物｜儿童赠早餐｜赠神武门摆渡车·天坛通票·奥运地标｜24h专',price:"¥1224起"},
{img:new URL("@/assets/travel/Domestic/beijing/image3.png",import.meta.url).href,include:'北京4日3晚跟团游·〖漫游京城-免费升级2-3三钻轻奢酒店〗{春',price:"¥1142起"},
{img:new URL("@/assets/travel/Domestic/beijing/image4.png",import.meta.url).href,include:'北京5日4晚跟团游·【早订无忧保票故宫+纪念堂 自营爆品】参观国家一级博物馆 2环沿线4钻',price:"¥1619起"},
{img:new URL("@/assets/travel/Domestic/beijing/image5.png",import.meta.url).href,include:'北京+八达岭长城+天安门广场-国旗+故宫博物院5日4晚拼小团·暖春放肆游 ·真纯玩 畅享 2-9人',price:"¥2377起"},
{img:new URL("@/assets/travel/Domestic/beijing/image6.png",import.meta.url).href,include:'北京5日4晚跟团游·【国旅品牌-官方自营】不带钱包游帝都（含往返机票/高铁）/下单立减-精',price:"¥3638起"},
{img:new URL("@/assets/travel/Domestic/beijing/image7.png",import.meta.url).href,include:'北京5日4晚跟团游·51班期赠参观国博【一价全含20人团 限定班期指定住“1环”君亭酒店】0购物0自费 7正餐全含|3.5天行程 5A景点全含 限时踏春赏花 提前8天保故宫+毛记入内 赠黄包车胡同游+奥运文化游 儿童含早+门票',price:"¥2768起"},
{img:new URL("@/assets/travel/Domestic/beijing/image8.png",import.meta.url).href,include:'北京4日3晚跟团游·【提前8天订享进宫·不进赔付1000/单·金牌导游】泛2环酒店连住｜',price:"¥1517起"},
{img:new URL("@/assets/travel/Domestic/beijing/image9.png",import.meta.url).href,include:'北京5日4晚跟团游·【早订无忧保票故宫+纪念堂 自营新品热卖】2环沿线4钻酒店 28人团',price:"¥1493起"},
])
//杭州数据
let hangzhouBig=ref(
{img:new URL("@/assets/travel/Domestic/hangzhou/image1.png",import.meta.url).href,include:'上海+苏州+杭州+乌镇5日4晚跟团游·仲春盛典·下单立减【神威自营·漫游江南Classic】25人精致小团<318大促|踏青赏花>外滩集散免费寄存<5钻酒店> 好导游伴游5A<留园精讲+VIP入西塘•赠汉服+西栅+西湖+50元餐>交通任选',price:"¥1222起"},
)
let hangzhouSmall=ref([
{img:new URL("@/assets/travel/Domestic/hangzhou/image2.png",import.meta.url).href,include:'上海迪士尼（Disney）+苏州+杭州+乌镇6日5晚跟团游·踏青早定优惠【神威自营·明星漫游Classic】25人精致小团<赠迪士尼旅拍>外滩集散免费寄存<5钻酒店>好导游伴游5A<留园精讲+VIP入西塘•赠汉服+西栅+西湖赏花>50元餐',price:"¥2204起"},
{img:new URL("@/assets/travel/Domestic/hangzhou/image3.png",import.meta.url).href,include:'杭州+西塘+乌镇3日2晚跟团游·纯玩0购物 | 精讲导游+1车到底『赠』值300元 | 双摇橹船+汉服游园『宿』全5钻酒店『游』5A景区 | 西栅+西塘+南浔+西湖 | 可选宋城『食』2早1正 | 5星自助早+御茶宴<老友会>可选航班/车次',price:"¥1279起"},
{img:new URL("@/assets/travel/Domestic/hangzhou/image4.png",import.meta.url).href,include:'上海+苏州+杭州+无锡+南京+乌镇5日4晚跟团游·春季赏花 纯玩【金牌导游服务 升级2晚5钻&网红拈花湾客栈+夜宿乌镇】精华『灵隐飞来峰 登雷峰塔 船游西湖』美食~【湖鲜餐+自助素斋+乾隆御茶宴】留园 禅光夜秀 多交通',price:"¥1378起"},
{img:new URL("@/assets/travel/Domestic/hangzhou/image5.png",import.meta.url).href,include:'杭州4日3晚私家团·【杭城深度游】私享一单一团=不拼不凑【宿】3晚杭州市区内 #精选3/4/5钻榜单酒店@精品出游 | 品宋城千古情演出+西湖游船+雷峰塔 · 苏堤漫步+飞来峰 · 灵隐祈愿+云栖竹径+龙井村+九溪烟树 |',price:"¥3849起"},
{img:new URL("@/assets/travel/Domestic/hangzhou/image6.png",import.meta.url).href,include:'杭州+苏州+乌镇4日3晚跟团游·纯玩+升级全程5星宿乌镇 精华5A四水乡~『周庄+西栅双夜游 南浔+西塘双古镇』姑苏~【拙政园 寒山寺】赠~【体验抄经+汉服游园+300元双摇橹船】美食~【5星自助早 50御茶宴】A线双飞/B线双高',price:"¥1563起"},
{img:new URL("@/assets/travel/Domestic/hangzhou/image7.png",import.meta.url).href,include:'杭州+乌镇+西塘3日2晚跟团游·纯玩1车到底 甄选金牌导游『宿乌镇品牌5钻+升级杭州5星开元』赠送~【汉服游园+300元双摇橹船 门票价超600】经典~『5A3水乡 乌镇+南浔+西塘』美食~【5星自助早 50元御茶宴】高铁/飞机任选',price:"¥1287起"},
{img:new URL("@/assets/travel/Domestic/hangzhou/image8.png",import.meta.url).href,include:'南京+无锡+苏州+杭州+上海+乌镇5日4晚跟团游·【错峰出游】【限量升级盐湖城内客栈+乌镇网红酒店+1晚杭州5钻】五星旅行社【乌镇日景夜景】5A四水乡【东栅 西栅 周庄 南浔】高餐标50元 专职导游',price:"¥1315起"},
{img:new URL("@/assets/travel/Domestic/hangzhou/image9.png",import.meta.url).href,include:'上海+苏州+杭州+无锡+南京+乌镇6日5晚跟团游·纯玩 金牌导游服务【升级2晚5钻&网红拈花湾客栈+夜宿乌镇】精华~『灵隐飞来峰 登雷峰塔 船游西湖』美食~【湖鲜餐+自助素斋+乾隆御茶宴】姑苏留园 禅光夜秀 多交通',price:"¥1368起"},
])
//上海数据
let shanghaiBig=ref(
{img:new URL("@/assets/travel/Domestic/shanghai/image1.png",import.meta.url).href,include:'上海+苏州+杭州+乌镇5日4晚跟团游·仲春盛典·下单立减【神威自营·漫游江南Classic】25人精致小团<318大促|踏青赏花>外滩集散免费寄存<5钻酒店> 好导游伴游5A<留园精讲+VIP入西塘•赠汉服+西栅+西湖+50元餐>交通任选',price:"¥1222起"},
)
let shanghaiSmall=ref([
{img:new URL("@/assets/travel/Domestic/shanghai/image2.png",import.meta.url).href,include:'上海迪士尼（Disney）+苏州+杭州+乌镇6日5晚跟团游·踏青早定优惠【神威自营·明星漫游Classic】25人精致小团<赠迪士尼旅拍>外滩集散免费寄存<5钻酒店>好导游伴游5A<留园精讲+VIP入西塘•赠汉服+西栅+西湖赏花>50元餐',price:"¥2204起"},
{img:new URL("@/assets/travel/Domestic/shanghai/image3.png",import.meta.url).href,include:'上海迪士尼（Disney）+杭州+苏州+乌镇5日4晚跟团游·『早订享立减&赠取消险·出行无',price:"¥2037起"},
{img:new URL("@/assets/travel/Domestic/shanghai/image4.png",import.meta.url).href,include:'上海迪士尼（Disney）+杭州+苏州+乌镇4日3晚跟团游·25人精致小团【神威自营·明星漫游Classic】<赠迪士尼园区旅拍>>外滩专属集散免费寄存，<全5钻>1晚乌镇，好导游伴游5A<留园VIP精讲+西塘赠汉服+西湖错峰>交通任选',price:"¥1938起"},
{img:new URL("@/assets/travel/Domestic/shanghai/image5.png",import.meta.url).href,include:'上海+上海迪士尼度假区5日4晚私家团·【魔都往事&童话城堡&】宿4钻舒适酒店【游】魔旅深度',price:"¥4699起"},
{img:new URL("@/assets/travel/Domestic/shanghai/image6.png",import.meta.url).href,include:'上海+东方明珠+外滩2日1晚跟团游·『特惠纯玩·深度游魔都』【上',price:"¥828起"},
{img:new URL("@/assets/travel/Domestic/shanghai/image7.png",import.meta.url).href,include:'上海+苏州+杭州+无锡+南京+乌镇6日5晚跟团游·纯玩 金牌导游服务【升级2晚5钻&网红',price:"¥1368起"},
{img:new URL("@/assets/travel/Domestic/shanghai/image8.png",import.meta.url).href,include:'上海+苏州+杭州+无锡+南京+乌镇5日4晚跟团游·春季赏花 纯玩【金牌导游服务 升级2晚5钻',price:"¥1378起"},
{img:new URL("@/assets/travel/Domestic/shanghai/image9.png",import.meta.url).href,include:'南京+无锡+苏州+杭州+上海+乌镇5日4晚跟团游·【错峰出游】【限量升级盐湖城内客栈+乌镇网红酒店+1晚杭州5钻】五星旅行社【乌镇日景夜景】5A四水乡【东栅 西栅 周庄 南浔】高餐标50元 专职导游',price:"¥1315起"},
])
//西安
let xianBig=ref(
{img:new URL("@/assets/travel/Domestic/xian/image1.png",import.meta.url).href,include:'西安兵马俑+华清宫+华山+大雁塔+大唐不夜城+钟鼓楼广场4日3晚跟团游·赠西安千古情演出·全程四钻酒店【2+1头等舱用车舒享乘·大座椅·充电口】西安博物院保证入园·汉服夜游不夜城·四景区耳麦+登山手套+导览器+专车接送',price:"¥1611起"},
)
let xianSmall=ref([
{img:new URL("@/assets/travel/Domestic/xian/image2.png",import.meta.url).href,include:'西安3日2晚跟团游·赠《西安千古情》演出+园区参观·6-12人封顶·4钻酒店连宿·一车一导·秦兵',price:"¥1459起"},
{img:new URL("@/assets/travel/Domestic/xian/image3.png",import.meta.url).href,include:'西安5日4晚跟团游·【神威自营·陪你旅行】16人封顶&慢旅行,无自费无购物！兵马俑+',price:"¥3902起"},
{img:new URL("@/assets/travel/Domestic/xian/image4.png",import.meta.url).href,include:'西安兵马俑+华清池+华山4日3晚跟团游·20人小团 赠大唐芙蓉园门票（3月29前出行，每间房2张）赠《西安千古情》演出贵宾票 赠西安博物院+讲解+耳机 夜宿华山早登峰【可选5钻套餐含华山温泉酒店】24小时接送机/站',price:"¥1605起"},
{img:new URL("@/assets/travel/Domestic/xian/image5.png",import.meta.url).href,include:'西安7日跟团游·『西安年·长相思来长安·专车接送·含儿童门票』『壶口升VIP2+1头等舱+壶口黄陵必坐景交』四钻住宿&大唐不夜城&送回+全程耳麦【全程5大5A景区：兵马俑+壶口+法门寺+黄帝陵+华清宫】',price:"¥3337起"},
{img:new URL("@/assets/travel/Domestic/xian/image6.png",import.meta.url).href,include:'西安兵马俑+华清宫+大唐不夜城+大雁塔+钟鼓楼广场+永兴坊+回民街3日2晚跟团游·赠',price:"¥1396起"},
{img:new URL("@/assets/travel/Domestic/xian/image7.png",import.meta.url).href,include:'西安兵马俑+华山4日3晚跟团游·【神威自营·夜宿华山】满13人升头等舱大巴，金牌导游一车到底，2/7-2/28班期送秦俑情表演，西安博物院预(预约+讲解)，1晚宿华山下·早入园多游玩+24H专车接送，可加购长恨歌·交通任选',price:"¥1668起"},
{img:new URL("@/assets/travel/Domestic/xian/image8.png",import.meta.url).href,include:'西安5日4晚私家团·【冰蛋推荐-手绘长安 | 春光作序·可定制】乙巳中国年·灯映长安春 专业讲解拒绝到此一游 深度游兵马俑 NPC伴游观光车 西影博物馆 汉服&妆造体验 DIY秦小俑 可加购长恨歌【可选订冰蛋趣讲兵马俑】',price:"¥4429起"},
{img:new URL("@/assets/travel/Domestic/xian/image9.png",import.meta.url).href,include:'西安兵马俑+大唐不夜城+西安城墙+大雁塔+永兴坊3日2晚跟团',price:"¥1426起"},
])
//成都
let chengduBig=ref(
{img:new URL("@/assets/travel/Domestic/chengdu/image1.png",import.meta.url).href,include:'成都+九寨沟+黄龙风景名胜区5日4晚跟团游·【135特价 口碑福利T0P.1】金牌导游〓2+1保姆车+15%空座率〓封顶20人精致团《BC线高铁往返九寨+超级保姆车+带腿拖》限时九寨升豪生 熊猫/都江堰2选1+赠精修旅拍 24H接送机',price:"¥2215起"},
)
let chengduSmall=ref([
{img:new URL("@/assets/travel/Domestic/chengdu/image2.png",import.meta.url).href,include:'成都+九寨沟+三星堆博物馆+都江堰+黄龙风景名胜区6日5晚跟团游·错峰【赠价值88元成都火锅+川剧变脸〓藏服换装旅拍】金牌导游&2+1保姆车【三星堆+正宗‘花花’熊猫基地+都江堰精讲】<可选B线成都高铁达九寨>24H接送机',price:"¥2632起"},
{img:new URL("@/assets/travel/Domestic/chengdu/image3.png",import.meta.url).href,include:'成都+九寨沟+黄龙风景名胜区+都江堰景区+三星堆博物馆6日5晚跟团游·【春季爆品·限时免费升2晚5星豪生】金牌导游〓2+1保姆车| 三星堆2H精讲+有“花花“的熊猫基地〓赠108元表演午宴+九寨旅拍&下午茶|24h专车接送机/站',price:"¥2659起"},
{img:new URL("@/assets/travel/Domestic/chengdu/image4.png",import.meta.url).href,include:'成都+九寨沟+黄龙风景名胜区+峨眉山+乐山7日6晚跟团游·【金牌导游+B线高铁往返九寨】保姆车20人团+15%空座率【九寨3天升plus车+腿托.腰枕】 峨眉段8点晚出发〓二进峨眉+可选金顶酒店 牦牛汤锅+川剧变脸 24H接送机站',price:"¥3634起"},
{img:new URL("@/assets/travel/Domestic/chengdu/image5.png",import.meta.url).href,include:'九寨沟+黄龙风景名胜区5日4晚跟团游·四钻高端酒店+酒店早晚餐+自选2+1超宽座距保姆车可座可斜躺+遥望群山连绵 云雾缭绕四季色彩斑斓的山水画廊 体验“九寨归来不看水”意境-独特的钙化群池奇观+呆萌熊猫+三环内接',price:"¥1612起"},
{img:new URL("@/assets/travel/Domestic/chengdu/image6.png",import.meta.url).href,include:'成都+九寨沟+黄龙风景名胜区5日4晚跟团游·【热榜2+1宽敞保姆车•可充电】自营旗舰〓真纯玩《高铁2h直达九寨+保姆车EFG/高铁8人拼小团H/20人保姆车I》宿4钻酒店｜可选高品/轻奢/5星酒店套餐｜专车-天府/双流/高铁接送',price:"¥1779起"},
{img:new URL("@/assets/travel/Domestic/chengdu/image7.png",import.meta.url).href,include:'四川成都+九寨沟+都江堰+黄龙风景名胜区6日5晚跟团游·高端纯玩｜升级2+1保姆车｜高铁往返九寨段【5A黄龙风景名胜区+5A九寨沟深度游玩+探索古蜀文明三星堆+耍大熊猫基地+松潘岷江源】 赠【三星堆2H精讲+下午茶+旅拍】',price:"¥2389起"},
{img:new URL("@/assets/travel/Domestic/chengdu/image8.png",import.meta.url).href,include:'成都+青城山+都江堰景区+成都大熊猫繁育研究基地+三星堆博物馆+杜甫草堂5日4晚跟团游·错峰爆品【赠成都火锅+非遗变脸+夜游锦里 】2+1保姆车&赏’花花‘熊猫+古蜀‘三星堆’父母安心游 24h接送机/站',price:"¥2379起"},
{img:new URL("@/assets/travel/Domestic/chengdu/image9.png",import.meta.url).href,include:'成都+九寨沟+黄龙风景名胜区5日4晚跟团游·国旅官方直营纯玩',price:"¥1703起"},
])
</script>

<style lang="less" scoped>
.demo-tabs{
    width:80%;
    min-width: 950px;
    margin-top: 10px;
  
    .bigInclude{
        position: relative;
        width: 432px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
    }
    .bigPrice{
        color: rgb(255, 115, 0);
        font-size:25px
    }
    .big{
        width: 440px;
        padding: 9px;
        float: left;
        margin-right: 20px;
        margin-bottom: -15px;
        img{
        transition: all 0.3s ease;
        width: 590px;
        }
    }
    .big:hover{
        box-shadow:0 0 0 1px  yellow inset;
        background-color: rgba(255, 255, 0, 0.139);
        width: 440px;
        padding: 9px;
        margin-right: 20px;
        float: left;
     
        img{
        width: 640px;
        margin-left: -15px;
     

        }
    }
    .small{
        float: left;
        width: 200px;
        padding: 10px;
        margin-right: 16px;
        margin-bottom:10px;
        img{
            transition: all 0.3s ease;
            width: 240px;
        }
        .smallPrice{
        color: rgb(255, 115, 0);
        font-size:20px}
        .smallInclude{
            position: relative;
            width: 200px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .small:hover{
        box-shadow:0 0 0 1px  yellow inset;
        background-color: rgba(255, 255, 0, 0.139);
        float: left;
        width: 200px;
        padding: 10px;
        margin-right: 16px;
        margin-bottom:10px;
        img{
            width: 280px;
             margin-left: -15px;
        }
        .smallPrice{
        color: rgb(255, 115, 0);
        font-size:20px}
        .smallInclude{
            width: 200px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
.diamond_3{
    display: inline-block;
    position: absolute;
    right: 0;
    width: 78px;
    height: 20px;
    padding-left: 14px;
    background-image: url('@/assets/travel/sprite.png');
    background-repeat: no-repeat;
    background-position: -211px -296px;
 
}
</style>