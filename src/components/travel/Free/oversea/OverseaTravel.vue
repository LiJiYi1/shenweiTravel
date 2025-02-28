<template>
<el-card style="margin-top:80px;width:99.9%;min-width:1217px;">
    <div style="display: flex;">
         <p class="title"></p><span>出境自由行</span>
        <el-tabs  class="tabs">
            <el-tab-pane label="精选" class="pane">   
                <div class="box" v-for="(item,index) in jingxuan" :key="index">
                  <div style="height: 160px;overflow:hidden"><img :src="item.img"  alt=""></div>
                  <p class="boxInclude">{{item.include}}</p>
                  <p class="boxPrice">{{item.price}}</p>
             </div>
            </el-tab-pane>
            <el-tab-pane label="香港" class="pane"> 
                <div class="box" v-for="(item,index) in xianggang" :key="index">
                  <div style="height: 160px;overflow:hidden"><img :src="item.img"  alt=""></div>
                  <p class="boxInclude">{{item.include}}</p>
                  <p class="boxPrice">{{item.price}}</p>
             </div>
            </el-tab-pane>
            <el-tab-pane label="新加坡" class="pane"> 
                <div class="box" v-for="(item,index) in xinjiapo" :key="index">
                  <div style="height: 160px;overflow:hidden"><img :src="item.img"  alt=""></div>
                  <p class="boxInclude">{{item.include}}</p>
                  <p class="boxPrice">{{item.price}}</p>
             </div>
            </el-tab-pane>
            <el-tab-pane label="首尔" class="pane"> 
                <div class="box" v-for="(item,index) in shouer" :key="index">
                  <div style="height: 160px;overflow:hidden"><img :src="item.img"  alt=""></div>
                  <p class="boxInclude">{{item.include}}</p>
                  <p class="boxPrice">{{item.price}}</p>
             </div>
            </el-tab-pane>
            <el-tab-pane label="东京" class="pane">
                 <div class="box" v-for="(item,index) in dongjing" :key="index">
                  <div style="height: 160px;overflow:hidden"><img :src="item.img"  alt=""></div>
                  <p class="boxInclude">{{item.include}}</p>
                  <p class="boxPrice">{{item.price}}</p>
             </div>
            </el-tab-pane>
            <el-tab-pane label="巴厘岛" class="pane">
                 <div class="box" v-for="(item,index) in balidao" :key="index">
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
{img:new URL("@/assets/travel/Free/oversea/jingxuan/image1.jpg",import.meta.url).href,include:'澳门4日3晚自由行·【5钻酒店·连住3晚】打卡世界遗产大三巴牌坊，赏味中葡美食<葡式蛋挞/猪扒包>，嗨购购物体验<DFS/威尼斯人购物街>、打卡国际化澳门<巴黎人铁塔/伦敦人大钟/贡多拉运河>New秀《澳门2049》',price:"¥2146起"},
{img:new URL("@/assets/travel/Free/oversea/jingxuan/image2.jpg",import.meta.url).href,include:'澳门2-7日自由行·【口碑榜酒店随心选】酒店连住+机票任选； 好吃+好玩+好买+好拍，经典推荐：澳门teamlab|网红大三巴|巴黎铁塔|体验 一次游遍澳门的独特魅力与繁华',price:"¥2516起"},
{img:new URL("@/assets/travel/Free/oversea/jingxuan/image3.jpg",import.meta.url).href,include:'日本东京5日自由行·【4晚连住，可选4钻/5钻酒店】可加选包车游|探寻潮流之都『推荐景点：富士山-东京塔-浅草寺-原宿-银座-歌舞伎町-六本木-秋叶原-镰仓高校』二次元爱好者·家庭亲子·朋友·情侣出游~',price:"¥4460起"},
{img:new URL("@/assets/travel/Free/oversea/jingxuan/image4.jpg",import.meta.url).href,include:'马尔代夫芙拉薇利岛7日5晚自由行·含机票『五星价格六星品质』【赠2项出海赠海豚巡航+日落钓鱼+限时免费升级升一价全包+三餐全包＆酒水饮料畅饮＆2名15岁以下儿童免吃住】+【浮潜沙滩双A+海洋泳池水额外赠漂浮早餐】',price:"¥14576起"},
{img:new URL("@/assets/travel/Free/oversea/jingxuan/image5.jpg",import.meta.url).href,include:'马尔代夫6日4晚自由行·波杜希蒂岛•专拍【携程自营·选岛不迷路】【马代资深销售1V1选岛·一站式服务】4晚岛上·海量岛可选|中央/伊露/莉莉/奥臻/丽笙等可选+可定制迪拜/新加坡/斯里兰卡等两国连游【不含国际机票】',price:"¥13039起"},
{img:new URL("@/assets/travel/Free/oversea/jingxuan/image6.jpg",import.meta.url).href,include:'马尔代夫7日5晚自由行·六星特惠.【卡尼富士岛·白金一价全包＆赠送45分钟SPA】【免费三餐＆特色点餐＆酒水畅饮＆别墅迷你吧+赠出海垂钓和出游活动+每日2次出海浮潜+免费无动力项目+水飞专属候机+赠马累】',price:"¥14655起"},
{img:new URL("@/assets/travel/Free/oversea/jingxuan/image7.jpg",import.meta.url).href,include:'香港2-7日自由行·〓错峰优选〓【双酒店任选&天数随心定】缤纷玩乐在香港：迪士尼乐园·海洋乐园·维多利亚港·太平山顶缆车/多元文化在香港：故宫文化博物馆·M+·K11 MUSEA·太空馆 ·科学馆·港风坚尼地城',price:"¥2271起"},
{img:new URL("@/assets/travel/Free/oversea/jingxuan/image8.jpg",import.meta.url).href,include:'新加坡+圣淘沙岛6日5晚自由行·【3+2晚换住or连住 省心专车】自选双酒店+含接送机+三大动物园接驳+酒店专车换住|自由打卡环球影城/夜间动物园/滨海湾/哈芝巷/肉骨茶〓精选华人向导包车游，和你聊聊新加坡的那些事】',price:"¥4666起"},
])
//香港数据
let xianggang=ref([
{img:new URL("@/assets/travel/Free/oversea/xianggang/image1.jpg",import.meta.url).href,include:'香港2-7日自由行·〓错峰优选〓【双酒店任选&天数随心定】缤纷玩乐在香港：迪士尼乐园·海洋乐园·维多利亚港·太平山顶缆车/多元文化在香港：故宫文化博物馆·M+·K11 MUSEA·太空馆 ·科学馆·港风坚尼地城',price:"¥2271起"},
{img:new URL("@/assets/travel/Free/oversea/xianggang/image2.jpg",import.meta.url).href,include:'香港+澳门3-11日自由行·含港珠澳大桥穿梭巴士票&24H行程规划师服务，可升级港澳快艇船票/代订门票/包车/行程攻略推荐【港进澳出】住宿晚数随心选/酒店任选行程自由安排',price:"¥1889起"},
{img:new URL("@/assets/travel/Free/oversea/xianggang/image3.jpg",import.meta.url).href,include:'香港2-7日自由行·【酒店连住·天数随心选】嗨玩香港，赏味香港美食，可加购专车接送机/包车/1日游/门票，赠购物返现礼遇',price:"¥2182起"},
{img:new URL("@/assets/travel/Free/oversea/xianggang/image4.jpg",import.meta.url).href,include:'香港+澳门5日自由行·【港进澳出】双城天数可以自由搭配，推荐香港尖沙咀（九龙酒店/马哥孛罗等）/ 铜锣湾（湾仔皇悦酒店等）；澳门热门景点：半岛（葡京酒店等） / 路凼城（威尼斯人/巴黎人等）',price:"¥2863起"},
{img:new URL("@/assets/travel/Free/oversea/xianggang/image5.jpg",import.meta.url).href,include:'香港4日3晚自由行·【精选5钻酒店·含VIP专车接机&24H行程规划师服务，可代订门票/包车/行程攻略推荐】圆梦香港迪士尼乐园/乘海景缆车游海洋公园/赏味香港美食/嗨购香港各大商圈【年末狂欢等你来！】',price:"¥2380起"},
{img:new URL("@/assets/travel/Free/oversea/xianggang/image6.jpg",import.meta.url).href,include:'香港4日自由行·【精选榜单酒店·连住3晚】设计感酒店/亲子乐园酒店/当地风情/豪华美食酒店等4-5钻可选，缤纷玩乐在香港：迪士尼乐园·海洋乐园·维多利亚港·太平山顶夜景；打卡香港美食，嗨购购物天堂！',price:"¥2926起"},
{img:new URL("@/assets/travel/Free/oversea/xianggang/image7.jpg",import.meta.url).href,include:'香港+澳门3-11日自由行·【港进澳出，可选双酒店】推荐香港热门游玩区域：尖沙咀/中环/铜锣湾，探索纯正港味；澳门热门区域：澳门半岛/路凼城等，酒店任选，行程自由安排。',price:"¥2708起"},
{img:new URL("@/assets/travel/Free/oversea/xianggang/image8.jpg",import.meta.url).href,include:'香港5日自由行·玩转香港！【4钻双酒店2+2】尖沙咀/铜锣湾/旺角/油麻地/中环等可选，打卡不同商圈及港式美食，缤纷欢乐游香港:迪士尼/海洋公园/太平山顶/杜莎夫人蜡像馆/故宫博物馆',price:"¥3091起"},
])
//新加坡数据
let xinjiapo=ref([
{img:new URL("@/assets/travel/Free/oversea/xinjiapo/image1.jpg",import.meta.url).href,include:'新加坡+圣淘沙岛6日5晚自由行·【3+2晚换住or连住 省心专车】自选双酒店+含接送机+三大动物园接驳+酒店专车换住|自由打卡环球影城/夜间动物园/滨海湾/哈芝巷/肉骨茶〓精选华人向导包车游，和你聊聊新加坡的那些事】',price:"¥4666起"},
{img:new URL("@/assets/travel/Free/oversea/xinjiapo/image2.jpg",import.meta.url).href,include:'新加坡+圣淘沙岛5日4晚自由行·【跟着综艺去打卡·花少同款】2+2晚换住/连住 4-5钻酒店随心选 |中文接送机+换住接驳 |环球影城+滨海湾+鱼尾狮+夜间动物园| 味蕾之旅 肉骨茶 加东叻沙 辣椒螃蟹 24小时微信中文管家',price:"¥4504起"},
{img:new URL("@/assets/travel/Free/oversea/xinjiapo/image3.jpg",import.meta.url).href,include:'新加坡5日4晚自由行·【近2W人·爆品】中文接送机+半日包车游『当地华人带你畅游新加坡精华景点』〓4-5钻酒店随心选+〓尽情打卡狮城热门景点: 哈芝巷+福康宁公园+旧禧街+牛车水|自由体验环球影城+圣淘沙〓专属管家协助',price:"¥3725起"},
{img:new URL("@/assets/travel/Free/oversea/xinjiapo/image4.jpg",import.meta.url).href,include:'新加坡3-14日自由行·【超1W人】机票+酒店+天数随心选|1家酒店连住|度假圣地圣淘沙·地标网红鱼尾狮·亲子酒店丽思卡尔顿·国际品牌万豪雅高等海量酒店可选『百变玩法·遇见不一样的狮城』',price:"¥4062起"},
{img:new URL("@/assets/travel/Free/oversea/xinjiapo/image5.jpg",import.meta.url).href,include:'新加坡+马来西亚6日5晚自由行·马上加新【新加坡2晚+马六甲1晚+吉隆坡2晚】全程中文微信管家+接送机+2日中文司陪包车, 环球影城+哈芝巷+鱼尾狮 |马六甲海峡+双子塔+粉红清真寺 |推荐雪兰莪 蓝眼泪萤火虫',price:"¥5427起"},
{img:new URL("@/assets/travel/Free/oversea/xinjiapo/image6.jpg",import.meta.url).href,include:'马来西亚吉隆坡+新加坡6日5晚自由行·【马进新出：2晚吉隆坡+1晚马六甲+2晚新加坡】『专车接送机+2日中文包车游』吉隆坡大马风情+马六甲海峡风光+新加坡花园城市+24H客服协助【行程可调整】超省心！',price:"¥5556起"},
{img:new URL("@/assets/travel/Free/oversea/xinjiapo/image7.jpg",import.meta.url).href,include:'新加坡4日3晚自由行·【重生之我在新加坡自由行·您就看细不细就完事了】新想狮城绝不浪得虚名-新加坡官宣免签-可升级『24H专车接送机&中文司兼导包车』四钻，五钻任选酒店-住热门商圈丨24H线上客服管家-出境更放心',price:"¥5720起"},
{img:new URL("@/assets/travel/Free/oversea/xinjiapo/image8.jpg",import.meta.url).href,include:'新加坡+马来西亚吉隆坡5日4晚自由行·【飞入大马】新加坡2晚+吉隆坡2晚【含】专车接送机（私享包车不拼车）+微信中文管家全程服务，推荐游玩： 环球影城+滨海湾+福康宁公园+动物园专线+东海岸散步+吉隆坡双子塔',price:"¥3654起"},
])
//首尔数据
let shouer=ref([
{img:new URL("@/assets/travel/Free/oversea/shouer/image1.jpg",import.meta.url).href,include:'韩国首尔4日自由行·俯瞰首尔的日与夜#网红#漫步新沙洞林荫道|萌萌Line Friends Store|必摘草高颜值Bistopping 带你认识清新文艺范爆棚的首尔 Say HI～～～',price:"¥1838起"},
{img:new URL("@/assets/travel/Free/oversea/shouer/image2.jpg",import.meta.url).href,include:'韩国首尔5日自由行·摘草Stylenanda 粉红少女心|品Bover Lounge贵妇冷淡风下午茶|清新孤独的树|潮牌任逛 随心摆拍 别样小资情调',price:"¥2888起"},
{img:new URL("@/assets/travel/Free/oversea/shouer/image3.jpg",import.meta.url).href,include:'韩国首尔3日自由行·周末游|【精选度假专属酒店】Point Of View游走在时尚之都|人气Ins咖啡厅 潮牌聚集地 落日美景餐厅 每一处所到之处总能又Chill瞬间',price:"¥1876起"},
{img:new URL("@/assets/travel/Free/oversea/shouer/image4.jpg",import.meta.url).href,include:'韩国首尔2-15日自由行·首尔随你而订|摘草Stylenanda 粉红少女心|品Bover Lounge贵妇冷淡风下午茶|清新孤独的树|潮牌任逛 随心摆拍 别样小资情调',price:"¥1616起"},
{img:new URL("@/assets/travel/Free/oversea/shouer/image5.jpg",import.meta.url).href,include:'韩国首尔6日自由行·【精选人气酒店】网红打卡City Walk plus 网红拔草|圣水洞-韩国版布鲁克林 工业风咖啡厅Onion 落日美景餐厅NOCT 小资情调 贵妇体验 别致生活 Seoul You~',price:"¥3197起"},
{img:new URL("@/assets/travel/Free/oversea/shouer/image6.jpg",import.meta.url).href,include:'首尔4日3晚自由行·3晚连住『含』接送机+景福宫南山东大门包车一日游|打卡首尔塔 粉红少女心|品Bover Lounge贵妇冷淡风下午茶|明洞美食逛逛逛|潮牌任逛  别样小资情调',price:"¥3990起"},
{img:new URL("@/assets/travel/Free/oversea/shouer/image7.jpg",import.meta.url).href,include:'韩国首尔4日3晚自由行·【万人出游~专享酒店】3晚连住|特惠酒店|景福宫&韩屋村&江南网红咖啡店|东大门买买买|明洞逛吃|可选接送机&包车一日游|可选签证|无忧游首尔',price:"¥3674起"},
{img:new URL("@/assets/travel/Free/oversea/shouer/image8.jpg",import.meta.url).href,include:'釜山+首尔2-14日自由行·釜进首出 两城酒店可任选 | 首尔时尚之都 首尔塔俯瞰夜景 东大门 明洞逛吃 釜山圣托里尼文化村探秘 漫步纯净海滩  一次游玩两大韩国都市 休闲购物美食一网打尽',price:"¥2172起"},
])
//巴厘岛数据
let balidao=ref([
{img:new URL("@/assets/travel/Free/oversea/balidao/image1.jpg",import.meta.url).href,include:'巴厘岛7日5晚自由行·『当红中文向导包车』5钻2晚特色别墅+3晚海边酒店 〓 接送机+1日包车4选1：乌布森林/网红打卡/乌布皇宫+【双岛出游】<心动加选>追海豚共舞|火山吉普日出【赠】送机日半日包车',price:"¥1519起"},
{img:new URL("@/assets/travel/Free/oversea/balidao/image2.jpg",import.meta.url).href,include:'巴厘岛+新加坡7日6晚自由行·【新进巴出】3晚新加坡+3晚巴厘岛独栋别墅/五钻海边/阿雅娜等可选【含】巴厘岛段接送机+中文司导包车1日游·网红景点带你玩【推荐打卡】双岛出海/追海豚/环球影城/滨海湾花园·蜜月亲子',price:"¥1256起"},
{img:new URL("@/assets/travel/Free/oversea/balidao/image3.jpg",import.meta.url).href,include:'新加坡+巴厘岛6日5晚自由行·城市与海岛全都要【新加坡3晚+巴厘岛2晚】新加坡+巴厘岛接送机（私享包车不拼车）|  鸭子船+滨海湾+鱼尾狮+南洋理工大学+夜间动物园+巴厘岛酒店随心躺',price:"¥2106起"},
{img:new URL("@/assets/travel/Free/oversea/balidao/image4.jpg",import.meta.url).href,include:'巴厘岛7日5晚自由行·【住】5晚连住 阿雅娜/海边酒店/国际品牌等自选【含】专车接送机+心动蓝梦岛&佩尼达出海+中文向导·1日乌布包车4选1打卡网红景点+送机日半日包车-推荐打卡乌鲁瓦图断崖 潘达瓦海滩',price:"¥1122起"},
{img:new URL("@/assets/travel/Free/oversea/balidao/image5.jpg",import.meta.url).href,include:'新加坡+巴厘岛7日6晚自由行·火爆南洋【新加坡2晚+巴厘岛3晚+新加坡1晚】自由行定制（含全程段机票）',price:"¥1728起"},
{img:new URL("@/assets/travel/Free/oversea/balidao/image6.jpg",import.meta.url).href,include:'新加坡+巴厘岛7日6晚自由行·城市与海岛全都要【新加坡3晚+巴厘岛3晚】两地接送机（私享包车不拼车）|  鸭子船+滨海湾+鱼尾狮+南洋理工大学+夜间动物园+巴厘岛酒店随心躺',price:"¥1631起"},
{img:new URL("@/assets/travel/Free/oversea/balidao/image7.jpg",import.meta.url).href,include:'巴厘岛7日5晚自由行·加倍多巴胺【住】可选双酒店·2晚+3晚-国际品牌/阿雅娜度假村/海边酒店等可选【玩】双岛出海1日游：打卡佩妮达岛+蓝梦岛+乌布包车1日游-推荐网红秋千/乌布皇宫/圣泉寺/德格拉郎梯田 | 专车接送机',price:"¥1711起"},
{img:new URL("@/assets/travel/Free/oversea/balidao/image8.jpg",import.meta.url).href,include:'巴厘岛+新加坡9日8晚自由行·5晚巴厘岛+新加坡3晚【环球影城+各色美食】',price:"¥1563起"},
])
//东京数据
let dongjing=ref([
{img:new URL("@/assets/travel/Free/oversea/dongjing/image1.jpg",import.meta.url).href,include:'日本东京5日自由行·【4晚连住，可选4钻/5钻酒店】可加选包车游|探寻潮流之都『推荐景点：富士山-东京塔-浅草寺-原宿-银座-歌舞伎町-六本木-秋叶原-镰仓高校』二次元爱好者·家庭亲子·朋友·情侣出游~',price:"¥4460起"},
{img:new URL("@/assets/travel/Free/oversea/dongjing/image2.jpg",import.meta.url).href,include:'日本大阪+京都+东京2-15日自由行·随心订·1晚起住·千年古都·历史底蕴与现代潮流的融合·行程自由搭配',price:"¥2003起"},
{img:new URL("@/assets/travel/Free/oversea/dongjing/image3.jpg",import.meta.url).href,include:'日本大阪6日自由行·含包车接送机|5晚连住「3~5钻酒店自选」可加购包车1日游/京都&奈良1日游/日本环球影城门票/大阪海游馆/乐高探索中心/利木津巴士券/签证|一站式服务',price:"¥4455起"},
{img:new URL("@/assets/travel/Free/oversea/dongjing/image4.jpg",import.meta.url).href,include:'日本大阪+东京7日自由行·「含酒店至新干线站包车接送&新干线指定席车票」大阪3晚+东京3晚| 投喂梅花鹿「奈良公园」&世遗金阁寺&圣岳富士山五合目&大阪城公园',price:"¥8688起"},
{img:new URL("@/assets/travel/Free/oversea/dongjing/image5.jpg",import.meta.url).href,include:'日本东京5日4晚自由行·【航班自选&东京市区4-5钻酒店随心选】赠流量卡『可选升级接送机*包车*日游』探寻潮流之都『推荐景点：富士山-东京塔-浅草寺-银座-歌舞伎町-秋叶原-镰仓』二次元爱好者·家庭亲子·朋友·情侣出游',price:"¥3949起"},
{img:new URL("@/assets/travel/Free/oversea/dongjing/image6.jpg",import.meta.url).href,include:'日本东京6日5晚自由行·【含迪士尼往返接送·富士山网红打卡1日游】富士山下品美景 迪士尼海洋新园区·Fantasy Springs梦幻源泉2024年6月6日全新开幕·还原冰雪奇缘魔法幻想 来偶遇彼得潘 艾莎和长发公主吧【自选航班】',price:"¥6860起"},
{img:new URL("@/assets/travel/Free/oversea/dongjing/image7.jpg",import.meta.url).href,include:'日本东京+迪士尼（Disney）5日自由行·【专车|含接送机+箱根富士山包车一日游 4～5钻酒店悠闲家庭度假】2晚迪士尼度假区 +2晚东京市区 相遇米老鼠唐老鸭迪士尼大家庭 富士包车一日游 童话与自然',price:"¥9870起"},
{img:new URL("@/assets/travel/Free/oversea/dongjing/image8.jpg",import.meta.url).href,include:'日本大阪+东京6日5晚自由行·【航班+市区商圈酒店自选】3晚大阪+2晚东京丨下单赠送流量卡包邮到家&24H客服管家&交通指南&游玩攻略『可加购新干线&接送机服务&包车』<二次元爱好者·家庭亲子·朋友·情侣出游·公司团建>',price:"¥6441起"},
])
</script>

<style lang="less" scoped>
.title{
        margin: 3px 8px 3px 0;
        display: inline-block;
        width: 24px;
        height: 24px;
        line-height: 28px;
        background: url('@/assets/travel/Free/icon/icon2.png') no-repeat;
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

