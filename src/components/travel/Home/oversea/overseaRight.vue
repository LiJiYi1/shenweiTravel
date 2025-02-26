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
                <img :src="singapoBig.img" alt="">
            </div>
           
            <p class="bigInclude">{{singapoBig.include}}</p>
            <p class="bigPrice">{{singapoBig.price}}</p>
        </div>
        <div class="small" v-for="(item,index) in singapoSmall" :key="index">
            <div style="width: 200px;height:120px;overflow:hidden">
                <img :src="item.img" alt="">
            </div>    
            <p class="smallInclude">{{item.include}}</p>
            <p class="smallPrice">{{item.price}}</p>
        </div></el-tab-pane>
    <el-tab-pane label="泰国" name="sixth"> 
        <div class="big">
            <div style="width: 438px;height:320px;overflow:hidden;"> 
                <img :src="taiguoBig.img" alt="">
            </div>
           
            <p class="bigInclude">{{taiguoBig.include}}</p>
            <p class="bigPrice">{{taiguoBig.price}}</p>
        </div>
        <div class="small" v-for="(item,index) in taiguoSmall" :key="index">
            <div style="width: 200px;height:120px;overflow:hidden">
                <img :src="item.img" alt="">
            </div>    
            <p class="smallInclude">{{item.include}}</p>
            <p class="smallPrice">{{item.price}}</p>
        </div></el-tab-pane>
    <el-tab-pane label="冰岛" name="seventh"> 
        <div class="big">
            <div style="width: 438px;height:320px;overflow:hidden;"> 
                <img :src="bingdaoBig.img" alt="">
            </div>
           
            <p class="bigInclude">{{bingdaoBig.include}}</p>
            <p class="bigPrice">{{bingdaoBig.price}}</p>
        </div>
        <div class="small" v-for="(item,index) in bingdaoSmall" :key="index">
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
//新加坡数据
let singapoBig=ref(
{img:new URL("@/assets/travel/Domestic/singapo/image1.png",import.meta.url).href,include:'新加坡6日5晚拼小团·免签【狮城巡游】9人小拼团·中文司机+微信管家 | 省心连住市区酒店·近地铁+专车接送机 | 一站式打卡热门景点：鱼尾狮+赞美广场+甘榜格南+滨海湾金莎+哈芝巷+福康宁公园+乌节路+',price:"¥5038起"},
)
let singapoSmall=ref([
{img:new URL("@/assets/travel/Domestic/singapo/image2.png",import.meta.url).href,include:'新加坡+吉隆坡+马六甲6日5晚私家团·【私享新马】『中文1对1专车畅游两国』|A线马进新出&B线指定2晚圣淘沙酒店+环球影城门票|·|C线新进马出|·|D线E线游玩新山LEGO乐园|·|吉隆坡+新加坡多线路任选+马六甲都市专车游览',price:"¥5984起"},
{img:new URL("@/assets/travel/Domestic/singapo/image3.png",import.meta.url).href,include:'泰国+新加坡+马来西亚10日9晚跟团游·三飞玩三国【稀缺限量 加量不加价】领队+导游+管家全方位服务丨泰国甄选5钻酒店丨臻享9早10正餐丨经典荟萃~吃喝玩乐一网打尽丨骑大象+水果大餐-美味榴莲+国际人妖秀+泰式按摩',price:"¥6090起"},
{img:new URL("@/assets/travel/Domestic/singapo/image4.png",import.meta.url).href,include:'新加坡+马来西亚5日4晚跟团游·【马上加新丨急速响应•贴心无间】全职接送机全天待命『中文导游+领队+线上管家』3方陪护-全程助力实现梦想愿景丨优选酒店•赠双国流量卡•升4早6正餐丨鱼尾狮 圣淘沙 粉红清真寺...',price:"¥3511起"},
{img:new URL("@/assets/travel/Domestic/singapo/image5.png",import.meta.url).href,include:'新加坡+圣淘沙5日4晚私家团·＜亲子双酒店香格里拉可选，国际品牌酒店3晚市区+1晚鼎级圣淘沙岛＞1天中文司导包车+2日自由活动+行程可定制『精心规划4大主题&门票可选『城市漫游+必打卡经典 +城市科技&人文&生态』',price:"¥9937起"},
{img:new URL("@/assets/travel/Domestic/singapo/image6.png",import.meta.url).href,include:'新加坡6日5晚私家团·【畅玩狮城 亲子游】『环球影城+SEA海洋馆+斜坡滑车+鱼尾狮+滨海湾经',price:"¥9689起"},
{img:new URL("@/assets/travel/Domestic/singapo/image7.png",import.meta.url).href,include:'新加坡+马来西亚6日5晚拼小团·9人小团•VIP过境•五钻酒店『赠松发肉骨茶+特色娘惹菜+特别安排摩天观景轮+滨海湾花园+马六甲河游船+双子塔』环球影城｜新山乐高乐园｜海洋馆+水上探险乐园｜海洋馆+斜坡滑车(四选一)',price:"¥6518起"},
{img:new URL("@/assets/travel/Domestic/singapo/image8.png",import.meta.url).href,include:'新加坡5日4晚拼小团·免签【狮城巡游】9人小拼团·中文司机+微信管家 | 省心连住市区酒店·近地铁+专车接送机 | 一站式打卡热门景点：鱼尾狮+赞美广场+甘榜格南+滨海湾金莎+哈芝巷+福康宁公园+乌节路+滨海湾花园',price:"¥4609起"},
{img:new URL("@/assets/travel/Domestic/singapo/image9.png",import.meta.url).href,include:'新加坡+马来西亚5日4晚跟团游·王炸【品牌旗舰•一价全含•当季热卖】赠2国流量卡+儿童含早餐『领队+导游+线上管家三重服务保障』臻享5早6正餐丨经典荟萃『鱼尾狮+圣淘沙+马六甲+吉隆坡+双峰塔+黑风洞』家庭亲子',price:"¥3245起"},
])
//泰国
let taiguoBig=ref(
{img:new URL("@/assets/travel/Domestic/taiguo/image1.png",import.meta.url).href,include:'泰国曼谷+芭堤雅6日5晚跟团游·【精致纯玩·赠泰服体验&司导小费】市中心70套房&私人沙滩阳台房/花园海景｜品牌5星希尔顿&尊享9人团可选升级｜人妖秀&CityWalk唐人街&出海沙美岛·金属城堡·实弹射',price:"¥2946起"},
)
let taiguoSmall=ref([
{img:new URL("@/assets/travel/Domestic/taiguo/image2.png",import.meta.url).href,include:'泰国曼谷+芭堤雅+普吉岛8日7晚拼小团·【金牌导游】『1-9人纯玩团』※曼2芭2普3|大皇宫&玉佛寺-丹嫩沙多-美功铁道 | 暹罗古城-INS风真理寺 | 格兰岛出海 | 环岛米其林+海景下午茶+普吉镇**24H中文管家服务',price:"¥6509起"},
{img:new URL("@/assets/travel/Domestic/taiguo/image3.png",import.meta.url).href,include:'泰国曼谷+芭堤雅+沙美岛7日跟团游·『享补贴礼遇&境外领队』全程5钻·芭堤雅海景房『铂尔曼/温德姆&嵿奢SPA&风情特色秀可升』快艇『双岛出海』暹罗古城·公主号狂欢『爽泰庄园骑大象&泼水』粉红三神象·丹嫩沙朵·夜市',price:"¥2305起"},
{img:new URL("@/assets/travel/Domestic/taiguo/image4.png",import.meta.url).href,include:'泰国曼谷+芭堤雅6日5晚跟团游·0购物+5钻高奢泳池酒店+3晚220海景酒店+双岛出海【翡翠岛',price:"¥2230起"},
{img:new URL("@/assets/travel/Domestic/taiguo/image5.png",import.meta.url).href,include:'泰国曼谷+芭堤雅6日5晚跟团游·【王炸来袭&镇店之宝】首發限量·大咖潮玩丨双体双层游艇出海（浮潜&海钓&派对}+沙美岛游艇出海丨海天盛筵游轮海景Party+实弹射击+骑大象+粉红下午茶+泼水电音节！】',price:"¥3733起"},
{img:new URL("@/assets/travel/Domestic/taiguo/image6.png",import.meta.url).href,include:'泰国曼谷+芭堤雅6日5晚跟团游·【泰兰德之旅 · 奇幻游|赠司导小费】全程5钻『风情』夜游湄南河&爽泰『奇幻』骑大象&实弹射击&泼水体验『影视』唐人街&水上市场『出海』沙美岛『美食』悬崖餐厅&森林餐厅',price:"¥3251起"},
{img:new URL("@/assets/travel/Domestic/taiguo/image7.png",import.meta.url).href,include:'泰国曼谷+芭堤雅6日5晚跟团游·稀缺限量*好评榜一<纯玩精致团•特靠谱>豪华用车丨海陆双栖『3晚海景房+市区酒店』『海天盛筵+实弹射击+粉色沙滩下午茶+从林骑象』双岛出海『沙美岛+格兰岛』咖喱螃蟹餐+海鲜晚宴',price:"¥3118起"},
{img:new URL("@/assets/travel/Domestic/taiguo/image8.png",import.meta.url).href,include:'泰国曼谷+芭堤雅6日5晚拼小团·『VIP极奢定制|1-9人小团』2晚芭提雅市区&海边5钻酒店+',price:"¥3002起"},
{img:new URL("@/assets/travel/Domestic/taiguo/image9.png",import.meta.url).href,include:'泰国+新加坡+马来西亚10日9晚跟团游·三飞玩三国【稀缺限量 加量不加价】领队+导游+管家全方位服务丨泰国甄选5钻酒店丨臻享9早10正餐丨经典荟萃~吃喝玩乐一网打尽丨骑大象+水果大餐-美味榴莲+国际人妖秀+泰式按摩',price:"¥6090起"},
])
//冰岛
let bingdaoBig=ref(
{img:new URL("@/assets/travel/Domestic/bingdao/image1.png",import.meta.url).href,include:'冰岛8日7晚私家团·经典南部之旅',price:"¥33119起"},
)
let bingdaoSmall=ref([
{img:new URL("@/assets/travel/Domestic/bingdao/image2.png",import.meta.url).href,include:'冰岛雷克雅未克+黄金旅游圈+瓦特纳冰川国家公园+斯奈山冰盖9日7晚拼小团·【精选4.27/5.24钜惠团期丨4-7人纯玩小团】纯玩0购物0自费+雷市City Walk北欧黄金圈，斯奈山探险/飞机残骸/冰川徒步/宿蓝湖泡温泉/出海观鲸',price:"¥31100起"},
{img:new URL("@/assets/travel/Domestic/bingdao/image3.png",import.meta.url).href,include:'冰岛8日7晚跟团游·【Affordable 冰岛南部之旅】【8人精致小',price:"¥22865起"},
{img:new URL("@/assets/travel/Domestic/bingdao/image4.png",import.meta.url).href,include:'挪威+芬兰+瑞典+丹麦+冰岛12日跟团游·25人团|冰岛3晚深度+峡湾景观酒店+豪蕐游轮2人舱|',price:"¥33139起"},
{img:new URL("@/assets/travel/Domestic/bingdao/image5.png",import.meta.url).href,include:'冰岛13日12晚拼小团·冰岛13日12晚私家团·【环游冰岛+极光之旅',price:"¥73145起"},
{img:new URL("@/assets/travel/Domestic/bingdao/image6.png",import.meta.url).href,include:'深度人文·冰岛蓝湖+教会山+黄金旅游圈+钻石冰沙滩10日7晚私家团·『中文司导+专车出行』住蓝湖温泉酒店+旷野山原美居，冰川徒步+出海观鲸+黑沙滩+雪地摩托+DC-3飞机残骸+火山岩洞探险+雪地摩托亲子情侣定制旅游团',price:"¥50014起"},
{img:new URL("@/assets/travel/Domestic/bingdao/image7.png",import.meta.url).href,include:'冰岛8日跟团游·25人团|冰岛4晚+首都市中心4-5钻酒店+景观酒',price:"¥30633起"},
{img:new URL("@/assets/travel/Domestic/bingdao/image8.png",import.meta.url).href,include:'冰岛+蓝湖+米湖10日私家团·【安全&省心】【20年经验管家24h服务】【夏季舒适慵懒】环岛深',price:"¥49138起"},
{img:new URL("@/assets/travel/Domestic/bingdao/image9.png",import.meta.url).href,include:'冰岛6日4晚私家团·【草莓猪专业定制 多人更优】行程可调+VIP专车+中文司机丨含DC-3往返摆渡车+蓝湖温泉+冰川徒步丨全程3-4钻酒店丨经典南部之旅；黄金圈＋飞机残骸＋黑沙滩【双瀑布】塞里雅兰瀑布＋彩虹瀑布；',price:"¥35125起"},
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