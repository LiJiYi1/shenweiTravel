<template>
    <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="精选" name="first">
        <div class="big">
            <div style="width: 438px;height:320px;overflow:hidden;"> 
                <img :src="jingxuanBig.img" alt="">
            </div>
           
            <p class="bigInclude">{{jingxuanBig.include}}</p>
            <p class="bigPrice">{{jingxuanBig.price}}</p>
        </div>
        <div class="small" v-for="(item,index) in jingxuanSmall" :key="index">
            <div style="width: 200px;height:120px;overflow:hidden">
                <img :src="item.img" alt="">
            </div>    
            <p class="smallInclude">{{item.include}}</p>
            <p class="smallPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="日本" name="second">
         <div class="big">
            <div style="width: 438px;height:320px;overflow:hidden;"> 
                <img :src="JapanBig.img" alt="">
            </div>
           
            <p class="bigInclude">{{JapanBig.include}}</p>
            <p class="bigPrice">{{JapanBig.price}}</p>
        </div>
        <div class="small" v-for="(item,index) in JapanSmall" :key="index">
            <div style="width: 200px;height:120px;overflow:hidden">
                <img :src="item.img" alt="">
            </div>    
            <p class="smallInclude">{{item.include}}</p>
            <p class="smallPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="韩国" name="third"> 
        <div class="big">
            <div style="width: 438px;height:320px;overflow:hidden;"> 
                <img :src="KoreaBig.img" alt="">
            </div>
           
            <p class="bigInclude">{{KoreaBig.include}}</p>
            <p class="bigPrice">{{KoreaBig.price}}</p>
        </div>
        <div class="small" v-for="(item,index) in KoreaSmall" :key="index">
            <div style="width: 200px;height:120px;overflow:hidden">
                <img :src="item.img" alt="">
            </div>    
            <p class="smallInclude">{{item.include}}</p>
            <p class="smallPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="香港" name="fourth">
         <div class="big">
            <div style="width: 438px;height:320px;overflow:hidden;"> 
                <img :src="HongKongBig.img" alt="">
            </div>
           
            <p class="bigInclude">{{HongKongBig.include}}</p>
            <p class="bigPrice">{{HongKongBig.price}}</p>
        </div>
        <div class="small" v-for="(item,index) in HongKongSmall" :key="index">
            <div style="width: 200px;height:120px;overflow:hidden">
                <img :src="item.img" alt="">
            </div>    
            <p class="smallInclude">{{item.include}}</p>
            <p class="smallPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="新加坡" name="fifth"> 
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
    <el-tab-pane label="泰国" name="sixth"> 
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
    <el-tab-pane label="冰岛" name="seventh"> 
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
{img:new URL("@/assets/travel/oversea/jingxuan/image1.png",import.meta.url).href,include:'香港+澳门6日5晚跟团游·【携程自营·登澳门塔品鱼翅】升级45人+线路玩法A：火爆推荐热卖港澳游 B：亲子畅游双园（海洋公园+迪士尼）C：升悦享20人小团+米其林推荐餐 【下单两重好礼：流量卡+洗漱包】',price:"¥3320起"},
)
let jingxuanSmall=ref([
{img:new URL("@/assets/travel/oversea/jingxuan/image2.png",import.meta.url).href,include:'日本金泽+京都+大阪+奈良+箱根+伊豆+东京+富山8日7晚跟团游·老友会|5鉆标杆|全程导游|纯',price:"¥10419起"},
{img:new URL("@/assets/travel/oversea/jingxuan/image3.png",import.meta.url).href,include:'香港+澳门5日4晚跟团游·【春季大促@A/B线升登塔品鱼翅餐+45人中环+可选小团/直飞/赠福袋+流量卡】D：港进澳出| EF：小团—入故宫+坚尼地城+叮叮车+米其林美食+澳门大学丨G：奢旅5-9人团【可+购迪士尼|海洋|大屿山】',price:"¥3100起"},
{img:new URL("@/assets/travel/oversea/jingxuan/image4.png",import.meta.url).href,include:'香港+澳门5日4晚跟团游·含往返机票/动车丨赠流量卡+转换插头+洗漱包【可自选机',price:"¥2979起"},
{img:new URL("@/assets/travel/oversea/jingxuan/image5.png",import.meta.url).href,include:'香港+澳门3日2晚跟团游·A升级45人团&E升故宫版20人小团【自营纯玩团丨双人下单赠出游礼包】错峰火爆推荐｜C线长者安心游+新增大屿山大佛&大澳渔村 ｜B线45人中环升级澳门登巴黎塔&品鱼翅餐',price:"¥2758起"},
{img:new URL("@/assets/travel/oversea/jingxuan/image6.png",import.meta.url).href,include:'香港+澳门6日5晚跟团游·【港澳大社自营*好评榜冠*赠双船游维港】纯玩0购+轻奢酒店+24H接送机｜C线直飞香港·F线升级入住喜来登｜港澳珠畅游【尖沙咀+太平山顶+大三巴等】亲子游『梦幻迪士尼·广州/珠海长隆』蜜月',price:"¥2359起"},
{img:new URL("@/assets/travel/oversea/jingxuan/image7.png",import.meta.url).href,include:'香港+维多利亚港+澳门+港珠澳大桥游3日2晚跟团游·318 大促+福袋『C升45人团&澳门品鱼翅餐&登巴黎塔｜福袋御守+流量卡』B线特色之旅香港澳门珠海三城同游｜D线升级含送迪士尼乐园｜可选自选酒店套餐/20人团/9人小团',price:"¥2419起"},
{img:new URL("@/assets/travel/oversea/jingxuan/image8.png",import.meta.url).href,include:'韩国首尔4日3晚跟团游·【2-8人精奢小团】标杆纯玩*0自费丨升级东大门/明洞附近酒店&24H专车接送机+可代办签证+可升级包车服务『赠：不限量流量卡』豪华商务出行丨热门景点全含：景福宫+青瓦台+北村韩屋村+南山公园',price:"¥3612起"},
{img:new URL("@/assets/travel/oversea/jingxuan/image9.png",import.meta.url).href,include:'香港+澳门+港珠澳大桥游5日4晚跟团游·【携程·自营·品质】升级45人团+登澳门巴黎塔品鱼翅可选小团/迪士尼/油麻地/赤柱/大屿山+24H接送机+行程宽松+拒绝暴走+纯玩0套路丨乘天星+观维港丨港珠澳大桥+2人赠流量卡福袋1份',price:"¥2427起"},
])
//日本数据
let JapanBig=ref(
{img:new URL("@/assets/travel/oversea/japan/image1.png",import.meta.url).href,include:'日本大阪+京都+奈良6日5晚拼小团·【B线路·樱花限定·夜樱或灯光秀（​3/13~4/12期间出发）】A线胜尾寺·神户六甲山登高&有马温泉|中文导游讲解|奈良小鹿+清水寺+伏见稻荷大社|特色日式定食&宇治抹茶荞麦面',price:"¥6301起"},
)
let JapanSmall=ref([
{img:new URL("@/assets/travel/oversea/japan/image2.png",import.meta.url).href,include:'日本金泽+京都+大阪+奈良+箱根+伊豆+东京+富山8日7晚跟团游·老友会|5鉆标杆|全程导游|纯玩|北陆田园·樱花|金泽·宇奈月·白川|【东阪5钻市区酒店连泊】蟹宴&烧烤&温泉料理等6顿正餐逾2.5万日币※2天自由活动※2晚温泉',price:"¥10419起"},
{img:new URL("@/assets/travel/oversea/japan/image3.png",import.meta.url).href,include:'日本东京+大阪+京都+奈良6日5晚跟团游·【落樱冰纷&妩媚娇艳•13人精品&纯玩小团•多玩法可选】任选商圈豪华酒店，24H专车接送机，本州连线『富士山&日式温泉&歌舞伎町』祗园花见小路+伏见稻荷大社+奈良公园+心斋桥',price:"¥5409起"},
{img:new URL("@/assets/travel/oversea/japan/image4.png",import.meta.url).href,include:'日本大阪+京都+奈良5日4晚拼小团·【N种组合·随心选】D线樱花季限定·赏樱行程|B线USJ大阪环球影城专线|伏见稻荷千本鸟居|登高&历史古建',price:"¥4626起"},
{img:new URL("@/assets/travel/oversea/japan/image5.png",import.meta.url).href,include:'日本东京+富士山+大阪+京都+奈良6日5晚跟团游·樱见时光·扶桑和韵丨新店开业大放价【初游日本力荐】丨阪东经典游丨13人精品团丨自选酒店丨赠送10G流量卡-中文专车接送机｜可选：迪士尼+环球影城+灌篮高手镰仓+新干线',price:"¥6731起"},
{img:new URL("@/assets/travel/oversea/japan/image6.png",import.meta.url).href,include:'日本大阪+京都+奈良7日6晚拼小团·【祈求胜运·达摩不倒翁】【关西经典一周】A线秋冬上新胜尾寺·神户六甲山登高&有马温泉|B线京都岚山深度游|中文导游讲解|大阪城公园&岚山小火车&奈良小鹿|牛肉寿喜锅&特色日式定食',price:"¥7935起"},
{img:new URL("@/assets/travel/oversea/japan/image7.png",import.meta.url).href,include:'日本大阪+京都+奈良6日5晚拼小团·【C线樱花季专线背割堤赏樱|B&C线·樱花季出行性价比',price:"¥5611起"},
{img:new URL("@/assets/travel/oversea/japan/image8.png",import.meta.url).href,include:'日本东京+箱根+大阪+京都7日6晚私家团·1晚温泉|富士山景&山中湖&天梯小镇+箱根神社&成川美术馆+清水寺&稻荷大社+奈良|蟹道乐&新干线指定席|A线东京+大阪2日自由|B线全程用车|东京市内+神户+寿喜烧&神户牛|C线双乐园',price:"¥13250起"},
{img:new URL("@/assets/travel/oversea/japan/image9.png",import.meta.url).href,include:'日本东京+大阪+京都+奈良6日5晚跟团游·天天发团*1人起订<小团必入款〓2-13人精品团>销量口碑双冠『真纯玩*假一罚十』豪华商务专车接送机丨核心商圈酒店随心选丨赠700元新干线『富士山&日式温泉&奈良萌鹿&清水寺』',price:"¥5343起"},
])
//韩国数据
let KoreaBig=ref(
{img:new URL("@/assets/travel/oversea/Korea/image1.png",import.meta.url).href,include:'韩国首尔4日3晚跟团游·【2-8人精奢小团】标杆纯玩*0自费丨升级东大门/明洞附近酒店&24H专车接送机+可代办签证+可升级包车服务『赠：不限量流量卡』豪华商务出行丨热门景点全含：景福宫+青瓦台+北村韩屋村+南山公园',price:"¥3636起"},
)
let KoreaSmall=ref([
{img:new URL("@/assets/travel/oversea/Korea/image2.png",import.meta.url).href,include:'韩国首尔5日4晚跟团游·【星选爆歀&大咖推荐】封顶8人小团·标杆纯玩丨高人气口碑品牌酒店&24H专车接送机+可代办签证『赠：免税店金卡&不限量流量卡』豪华商务出行，自由活动随心打卡，硬核品质纯玩狂嗨首尔！',price:"¥2712起"},
{img:new URL("@/assets/travel/oversea/Korea/image3.png",import.meta.url).href,include:'韩国济州岛4日3晚跟团游·【错峰出游 真香定律】‹2-15人优质小团›冬天的济州岛 浪漫的天花板：涉地可支•城山日出峰•牛岛•月汀里海边丨精选酒店3晚连住丨赠流量卡+24h专车接送机+线上管家服务丨地标景点1次走完',price:"¥3577起"},
{img:new URL("@/assets/travel/oversea/Korea/image4.png",import.meta.url).href,include:'韩国首尔5日4晚跟团游·【集团自营•独嘉首發•2-8人精奢小团】',price:"¥3729起"},
{img:new URL("@/assets/travel/oversea/Korea/image5.png",import.meta.url).href,include:'韩国首尔6日5晚私家团·【纯玩！逛吃.美妆.时尚.姐妹团】明洞东大门自由活动+景福宫【皇家宫殿】-青瓦台-韩屋村【韩国历史文化】-五彩南山塔-南山公园-时尚COEX水族馆-星光图书馆-汝矣岛汉江公园-弘大【自选酒店】',price:"¥6138起"},
{img:new URL("@/assets/travel/oversea/Korea/image6.png",import.meta.url).href,include:'韩国济州岛5日4晚跟团游·春暖济州*赏花季【好评榜一•纯玩VIP精',price:"¥3349起"},
{img:new URL("@/assets/travel/oversea/Korea/image7.png",import.meta.url).href,include:'韩国首尔+釜山6日5晚跟团游·【高端精奢8人小团*纯玩0购*豪华商务车】24H专车接送机+管家一对一服务『潮流都市&文艺海岛』北村韩屋村+景福宫体验高丽文化+青瓦台+文艺仁寺洞+釜山｜赠流量卡*可加选代办签证',price:"¥6145起"},
{img:new URL("@/assets/travel/oversea/Korea/image8.png",import.meta.url).href,include:'韩国首尔5日4晚跟团游·『自由派•野浪人生』8人内纯玩标杆小团丨持证上岗老司机•专职中文司兼导•豪华商务24H上门接送丨高人气品牌酒店+代办签证『赠：免税店金卡&流量卡』自由打卡，硬核品质狂嗨首尔！',price:"¥4024起"},
{img:new URL("@/assets/travel/oversea/Korea/image9.png",import.meta.url).href,include:'韩国首尔6日5晚跟团游·【封顶8人小团•甄选纯玩】热门商圈轻奢度假酒店住宿+24H专车接送机丨【热门景点•一价全含】韩剧圣地『景福宫&青瓦台+北村韩屋村+星空图书馆+圣水洞+仁寺洞+新沙洞』【赠】汉江落日游轮等',price:"¥2514起"},
])
//香港数据
let HongKongBig=ref(
{img:new URL("@/assets/travel/oversea/HongKong/image1.png",import.meta.url).href,include:'香港+澳门6日5晚跟团游·【携程自营·登澳门塔品鱼翅】升级45人+线路玩法A：火爆推荐热卖港澳游 B：亲子畅游双园（海洋公园+迪士尼）C：升悦享20人小团+米其林推荐餐 【下单两重好礼：流量卡+洗漱包】',price:"¥3220起"},
)
let HongKongSmall=ref([
{img:new URL("@/assets/travel/oversea/HongKong/image2.png",import.meta.url).href,include:'香港+澳门6日5晚跟团游·【港澳大社自营*好评榜冠*赠双船游维港】纯玩0购+轻奢酒店+24H接送机｜C线直飞香港·F线升级入住喜来登｜港澳珠畅游【尖沙咀+太平山顶+大三巴等】亲子游『梦幻迪士尼·广州/珠海长隆』蜜月',price:"¥2359起"},
{img:new URL("@/assets/travel/oversea/HongKong/image3.png",import.meta.url).href,include:'香港+澳门+珠海6日5晚跟团游·好评榜冠〓纯玩天花板【升级住1晚澳门〓赠夜游维港】多线可选：B线迪士尼/C线港澳珠3地游/D线珠海长隆/E线广州长隆/F线昂坪〓24H专车接送机丨赠天星小轮&澳门银河钻石秀&流量卡&转化插头',price:"¥2806起"},
{img:new URL("@/assets/travel/oversea/HongKong/image4.png",import.meta.url).href,include:'香港+澳门5日4晚跟团游·【春季大促@A/B线升登塔品鱼翅餐+45人中环+可选小团/直飞/赠福袋+流量卡】D：港进澳出| EF：小团—入故宫+坚尼地城+叮叮车+米其林美食+澳门大学丨G：奢旅5-9人团【可+购迪士尼|海洋|大屿山】',price:"¥3100起"},
{img:new URL("@/assets/travel/oversea/HongKong/image5.png",import.meta.url).href,include:'香港+澳门6日5晚跟团游·【亲子甄选&暑期爆歀&玩爆三城】长隆野生动物世界&欢乐世界&水上乐园随心3or1丨高人气品牌酒店&24H接送机&赠转换头+流量卡丨“天星小轮”游港丨银河运财银钻“钻石表演”丨蜜月亲子优选度假！',price:"¥4062起"},
{img:new URL("@/assets/travel/oversea/HongKong/image6.png",import.meta.url).href,include:'香港+澳门5日4晚跟团游·含往返机票/动车丨赠流量卡+转换插头+洗漱包【可自选机票/动车 | 可升级20人高端纯玩小团（故宫参观）】甄选中环45人团丨经典港澳全景观光丨可+香港梦幻迪士尼/香港海洋乐园丨1v1客服管家',price:"¥2979起"},
{img:new URL("@/assets/travel/oversea/HongKong/image7.png",import.meta.url).href,include:'香港+澳门5日4晚跟团游·【臻品游】同配天花板·品质纯玩0购【赠双船游】天星小轮+夜游维港『资深导游陪同服务』甄选优质酒店｜地标尖沙咀、太平山顶、迪士尼、大三巴｜多条线路 ·深度游玩·不赶时间｜家庭亲子、蜜月',price:"¥2930起"},
{img:new URL("@/assets/travel/oversea/HongKong/image8.png",import.meta.url).href,include:'香港+澳门7日6晚跟团游·【品牌旗舰＊港澳大社自营＊高端纯玩】',price:"¥5956起"},
{img:new URL("@/assets/travel/oversea/HongKong/image9.png",import.meta.url).href,include:'香港+澳门3日2晚跟团游·A升级45人团&E升故宫版20人小团【自营纯玩团丨双人下单赠出游礼包】错峰火爆推荐｜C线长者安心游+新增大屿山大佛&大澳渔村 ｜B线45人中环升级澳门登巴黎塔&品鱼翅餐',price:"¥2758起"},
])
//上海数据
let shanghaiBig=ref(
{img:new URL("@/assets/travel/Domestic/shanghai/image1.png",import.meta.url).href,include:'上海+苏州+杭州+乌镇5日4晚跟团游·仲春盛典·下单立减【携程自营·漫游江南Classic】25人精致小团<318大促|踏青赏花>外滩集散免费寄存<5钻酒店> 好导游伴游5A<留园精讲+VIP入西塘•赠汉服+西栅+西湖+50元餐>交通任选',price:"¥1222起"},
)
let shanghaiSmall=ref([
{img:new URL("@/assets/travel/Domestic/shanghai/image2.png",import.meta.url).href,include:'上海迪士尼（Disney）+苏州+杭州+乌镇6日5晚跟团游·踏青早定优惠【携程自营·明星漫游Classic】25人精致小团<赠迪士尼旅拍>外滩集散免费寄存<5钻酒店>好导游伴游5A<留园精讲+VIP入西塘•赠汉服+西栅+西湖赏花>50元餐',price:"¥2204起"},
{img:new URL("@/assets/travel/Domestic/shanghai/image3.png",import.meta.url).href,include:'上海迪士尼（Disney）+杭州+苏州+乌镇5日4晚跟团游·『早订享立减&赠取消险·出行无',price:"¥2037起"},
{img:new URL("@/assets/travel/Domestic/shanghai/image4.png",import.meta.url).href,include:'上海迪士尼（Disney）+杭州+苏州+乌镇4日3晚跟团游·25人精致小团【携程自营·明星漫游Classic】<赠迪士尼园区旅拍>>外滩专属集散免费寄存，<全5钻>1晚乌镇，好导游伴游5A<留园VIP精讲+西塘赠汉服+西湖错峰>交通任选',price:"¥1938起"},
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
{img:new URL("@/assets/travel/Domestic/xian/image3.png",import.meta.url).href,include:'西安5日4晚跟团游·【携程自营·陪你旅行】16人封顶&慢旅行,无自费无购物！兵马俑+',price:"¥3902起"},
{img:new URL("@/assets/travel/Domestic/xian/image4.png",import.meta.url).href,include:'西安兵马俑+华清池+华山4日3晚跟团游·20人小团 赠大唐芙蓉园门票（3月29前出行，每间房2张）赠《西安千古情》演出贵宾票 赠西安博物院+讲解+耳机 夜宿华山早登峰【可选5钻套餐含华山温泉酒店】24小时接送机/站',price:"¥1605起"},
{img:new URL("@/assets/travel/Domestic/xian/image5.png",import.meta.url).href,include:'西安7日跟团游·『西安年·长相思来长安·专车接送·含儿童门票』『壶口升VIP2+1头等舱+壶口黄陵必坐景交』四钻住宿&大唐不夜城&送回+全程耳麦【全程5大5A景区：兵马俑+壶口+法门寺+黄帝陵+华清宫】',price:"¥3337起"},
{img:new URL("@/assets/travel/Domestic/xian/image6.png",import.meta.url).href,include:'西安兵马俑+华清宫+大唐不夜城+大雁塔+钟鼓楼广场+永兴坊+回民街3日2晚跟团游·赠',price:"¥1396起"},
{img:new URL("@/assets/travel/Domestic/xian/image7.png",import.meta.url).href,include:'西安兵马俑+华山4日3晚跟团游·【携程自营·夜宿华山】满13人升头等舱大巴，金牌导游一车到底，2/7-2/28班期送秦俑情表演，西安博物院预(预约+讲解)，1晚宿华山下·早入园多游玩+24H专车接送，可加购长恨歌·交通任选',price:"¥1668起"},
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
        width: 440px;
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
</style>