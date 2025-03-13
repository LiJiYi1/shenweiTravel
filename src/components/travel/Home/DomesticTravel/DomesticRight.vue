<template>
    <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="精选" name="first">
        <div class="big" @click="Search(jingxuanBig.price,jingxuanBig.img,jingxuanBig.head,jingxuanBig.title,jingxuanBig.about)">
            <div style="width: 438px;height:320px;overflow:hidden;"> 
                <img :src="jingxuanBig.img" alt="">
            </div>
           
            <p class="bigInclude">{{jingxuanBig.include}}<span class="diamond_3"></span></p>
            <p class="bigPrice">{{jingxuanBig.price}}</p>
        </div>
        <div class="small" @click="Search(item.price,item.img,item.head,item.title,item.about)" v-for="(item,index) in jingxuanSmall" :key="index">
            <div style="width: 200px;height:120px;overflow:hidden">
                <img :src="item.img" alt="">
            </div>    
            <p class="smallInclude">{{item.include}}<span class="diamond_3"></span></p>
            <p class="smallPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="威海" name="second">
         <div class="big" @click="Search(weiHaiBig.price,weiHaiBig.img,weiHaiBig.head,weiHaiBig.title,weiHaiBig.about)">
            <div style="width: 438px;height:320px;overflow:hidden;"> 
                <img :src="weiHaiBig.img" alt="">
            </div>
           
            <p class="bigInclude">{{weiHaiBig.include}}</p>
            <p class="bigPrice">{{weiHaiBig.price}}</p>
        </div>
        <div class="small" @click="Search(item.price,item.img,item.head,item.title,item.about)" v-for="(item,index) in weiHaiSmall" :key="index">
            <div style="width: 200px;height:120px;overflow:hidden">
                <img :src="item.img" alt="">
            </div>    
            <p class="smallInclude">{{item.include}}</p>
            <p class="smallPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="北京" name="third"> 
        <div class="big"  @click="Search(beijingBig.price,beijingBig.img,beijingBig.head,beijingBig.title,beijingBig.about)">
            <div style="width: 438px;height:320px;overflow:hidden;"> 
                <img :src="beijingBig.img" alt="">
            </div>
           
            <p class="bigInclude">{{beijingBig.include}}</p>
            <p class="bigPrice">{{beijingBig.price}}</p>
        </div>
        <div class="small" @click="Search(item.price,item.img,item.head,item.title,item.about)" v-for="(item,index) in beijingSmall" :key="index">
            <div style="width: 200px;height:120px;overflow:hidden">
                <img :src="item.img" alt="">
            </div>    
            <p class="smallInclude">{{item.include}}</p>
            <p class="smallPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="杭州" name="fourth">
         <div class="big" @click="Search(hangzhouBig.price,hangzhouBig.img,hangzhouBig.head,hangzhouBig.title,shanghaiBig.about)">
            <div style="width: 438px;height:320px;overflow:hidden;"> 
                <img :src="hangzhouBig.img" alt="">
            </div>
           
            <p class="bigInclude">{{hangzhouBig.include}}</p>
            <p class="bigPrice">{{hangzhouBig.price}}</p>
        </div>
        <div class="small" @click="Search(item.price,item.img,item.head,item.title,item.about)" v-for="(item,index) in hangzhouSmall" :key="index">
            <div style="width: 200px;height:120px;overflow:hidden">
                <img :src="item.img" alt="">
            </div>    
            <p class="smallInclude">{{item.include}}</p>
            <p class="smallPrice">{{item.price}}</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="上海" name="fifth"> 
        <div class="big" @click="Search(shanghaiBig.price,shanghaiBig.img,shanghaiBig.head,shanghaiBig.title,shanghaiBig.about)">
            <div style="width: 438px;height:320px;overflow:hidden;"> 
                <img :src="shanghaiBig.img" alt="" >
            </div>
           
            <p class="bigInclude">{{shanghaiBig.include}}</p>
            <p class="bigPrice">{{shanghaiBig.price}}</p>
        </div>
        <div class="small" @click="Search(item.price,item.img,item.head,item.title,item.about)" v-for="(item,index) in shanghaiSmall" :key="index">
            <div style="width: 200px;height:120px;overflow:hidden">
                <img :src="item.img" alt="">
            </div>    
            <p class="smallInclude">{{item.include}}</p>
            <p class="smallPrice">{{item.price}}</p>
        </div></el-tab-pane>
    <el-tab-pane label="西安" name="sixth"> 
        <div class="big" @click="Search(xianBig.price,xianBig.img,xianBig.head,xianBig.title,xianBig.about)">
            <div style="width: 438px;height:320px;overflow:hidden;"> 
                <img :src="xianBig.img" alt="">
            </div>
           
            <p class="bigInclude">{{xianBig.include}}</p>
            <p class="bigPrice">{{xianBig.price}}</p>
        </div>
        <div class="small" @click="Search(item.price,item.img,item.head,item.title,item.about)" v-for="(item,index) in xianSmall" :key="index">
            <div style="width: 200px;height:120px;overflow:hidden">
                <img :src="item.img" alt="">
            </div>    
            <p class="smallInclude">{{item.include}}</p>
            <p class="smallPrice">{{item.price}}</p>
        </div></el-tab-pane>
    <el-tab-pane label="成都" name="seventh"> 
        <div class="big" @click="Search(chengduBig.price,chengduBig.img,chengduBig.head,chengduBig.title,chengduBig.about)">
            <div style="width: 438px;height:320px;overflow:hidden;"> 
                <img :src="chengduBig.img" alt="">
            </div>
           
            <p class="bigInclude">{{chengduBig.include}}</p>
            <p class="bigPrice">{{chengduBig.price}}</p>
        </div>
        <div class="small" @click="Search(item.price,item.img,item.head,item.title,item.about)" v-for="(item,index) in chengduSmall" :key="index">
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
import { useRouter } from 'vue-router'
const activeName = ref('first')
//精选数据
let jingxuanBig=ref(
{img:new URL("@/assets/travel/Domestic/better/image1.png",import.meta.url).href,include:'威海+刘公岛景区+荣成+那香海钻石沙滩浴场+搁浅货轮布鲁维斯号+火炬八街3日2晚拼小团',price:"¥744",head:"威海旅行",title:"威海+刘公岛景区+荣成+那香海钻石沙滩浴场+搁浅货轮布鲁维斯号+火炬八街3日2晚拼小团",about:"升级4钻 轻奢6人精品团【贴心赠送刘公岛观光车+暖心咖啡】+真纯玩+接机/站+幸福门登顶+海草房+悦海公园+大相框+海源公园+猫头山"},
)
let jingxuanSmall=ref([
{img:new URL("@/assets/travel/Domestic/better/image2.png",import.meta.url).href,include:'上海+苏州+杭州+乌镇5日4晚跟团游',price:"¥1211",head:"上海旅行",title:"上海+苏州+杭州+乌镇5日4晚跟团游",about:"仲春盛典·下单立减【神威自营·漫游江南Classic】25人精致小团<318大促|踏青赏花>外滩集散免费寄存<5钻酒店> 好导游伴游5A<留园精讲+VIP入西塘•赠汉服+西栅+西湖+50元餐>交通任选"},
{img:new URL("@/assets/travel/Domestic/better/image3.png",import.meta.url).href,include:'西安兵马俑+华清宫+华山+大雁塔+大唐不夜城+钟鼓楼广场4日3晚跟团游',price:"¥1611",head:"西安旅游",title:"西安兵马俑+华清宫+华山+大雁塔+大唐不夜城+钟鼓楼广场4日3晚跟团游",about:"赠西安千古情演出·价值298元·四钻酒店【2+1头等舱用车舒享乘·大座椅·充电口】西安博物院·汉服夜游不夜城·四景区耳麦+登山手套+导览器+专车接送"},
{img:new URL("@/assets/travel/Domestic/better/image4.png",import.meta.url).href,include:'云南昆明+大理市+丽江6日5晚跟团游',price:"¥2000",head:"大理市旅游",title:"云南昆明+大理市+丽江6日5晚跟团游",about:"自营地接！高端纯玩 0自费「限时直降300元」升级5钻酒店+大理海景房+动车返昆丨5A石林+5A崇圣寺+5A玉龙雪山「洱海大游船+暖阳下午茶+三道茶歌舞表演」赠双表演【印象丽江+千古情】"},
{img:new URL("@/assets/travel/Domestic/better/image5.png",import.meta.url).href,include:'成都+九寨沟+黄龙风景名胜区5日4晚跟团游·【135特价 口碑福利T0P.1】金牌导游〓',price:"¥2215",head:"九寨沟旅游",title:"成都+九寨沟+黄龙风景名胜区5日4晚跟团游",about:"【 自营爆品 周135特价〓B线高铁往返九寨+超级保姆车+带腿拖】金牌导游〓2+1保姆车+15%空座率〓封顶20人精致团 九寨指定2晚豪生 熊猫/都江堰2选1+赠精修旅拍 24H接送机"},
{img:new URL("@/assets/travel/Domestic/better/image6.png",import.meta.url).href,include:'北京5日4晚跟团游·【提前8天订享进宫·不进赔付1000/单·金牌导游】泛2环酒店连住｜早定送博物馆盲盒·暖春赏樱花｜28人团·非遗中轴｜0购物｜儿童赠',price:"¥1524",head:"北京旅游",title:"北京5日4晚跟团游",about:"【春季大促·早订享约进宫·泛2环酒店连住】金牌导游｜早定送博物馆盲盒·暖春赏樱花｜28人团·非遗中轴｜0购物｜儿童赠早餐｜赠神武门摆渡车·天坛通票·奥运地标｜24h专车接送机/站"},
{img:new URL("@/assets/travel/Domestic/better/image7.png",import.meta.url).href,include:'长沙+张家界+武陵源+天门山+凤凰6日5晚跟团游·万人游全景热销榜一！咨询下单领现金',price:"¥3675",head:"长沙旅游",title:"长沙+张家界+武陵源+天门山+凤凰6日5晚跟团游",about:"万人游湘西热销榜一！ 20人团〓2+1航空巴士+天门山景区VIP通道优先通行（免排队2H）+7大景区VIP通道〓6大核心景区+赠魅力湘西晚会/百龙电梯/耳麦讲解+苗服换装"},
{img:new URL("@/assets/travel/Domestic/better/image8.png",import.meta.url).href,include:'广州+珠海+长隆野生动物世界+珠海长隆海洋王国5日4晚跟团游·【错峰早订·儿童赠',price:"¥3274",head:"广州旅游",title:"广州+珠海+长隆野生动物世界+珠海长隆海洋王国5日4晚跟团游",about:"【错峰早订·儿童赠早·金牌店铺品质】纯玩0购物丨全程轻奢5钻酒店丨超级工程深中通道丨深圳·登地王看深圳速度·中英街·大梅沙看海丨广州进深圳出 不走回头路"},
{img:new URL("@/assets/travel/Domestic/better/image9.png",import.meta.url).href,include:'海南三亚7日6晚跟团游·『销量榜冠』 蜈支洲赠VIP免排队上下岛+沙滩旅拍+游艇出海直升',price:"¥2534",head:"海南旅游",title:"海南三亚7日6晚跟团游·『销量榜冠』 蜈支洲赠VIP免排队上下岛+沙滩旅拍+游艇出海直升",about:"海南三亚7日6晚跟团游·『销量榜冠』 蜈支洲赠VIP免排队上下岛+沙滩旅拍+游艇出海直升"},
])
//威海数据
let weiHaiBig=ref(
{img:new URL("@/assets/travel/Domestic/weihai/image1.png",import.meta.url).href,include:'威海+刘公岛景区+荣成+那香海钻石沙滩浴场+搁浅货轮布鲁维斯号+火炬八街3日2晚拼小团',price:"¥744",head:"威海旅游",title:"威海+刘公岛景区+荣成+那香海钻石沙滩浴场+搁浅货轮布鲁维斯号+火炬八街3日2晚拼小团",about:"升级4钻 轻奢6人精品团【贴心赠送刘公岛观光车+暖心咖啡】+真纯玩+接机/站+幸福门登顶+海草房+悦海公园+大相框+海源公园+猫头山"},
)
let weiHaiSmall=ref([
{img:new URL("@/assets/travel/Domestic/weihai/image2.png",import.meta.url).href,include:'威海+荣成5日4晚私家团·儿童免单&冬季特惠 全程升级海景房『全程向导+电子讲解+一日DIY包车自由行』人气景点<荣成天鹅湖/刘公岛/布鲁维斯号沉船/那香海钻石沙滩>纯玩0购物0自费+当地土著+24h管家服务',price:"¥1972",head:"威海4日3晚私家团",title:"威海旅游",about:"儿童免单【暖冬温泉·邂逅天鹅·0购物】宿·升级一晚5钻温泉酒店＋2晚城芯5钻酒店「浪漫威海·布鲁维斯号/行摄荣成·天鹅湖/半部近代史·5A刘公岛/火炬八街·美拍」小红薯网红打卡地|24H管家/接or送机服务"},
{img:new URL("@/assets/travel/Domestic/weihai/image3.png",import.meta.url).href,include:'威海4日3晚私家团·儿童免单【暖冬温泉·邂逅天鹅·0购物】宿·升级一晚5钻温泉酒店＋2晚城芯5钻酒店「浪漫威海·布鲁维斯号/行摄荣成·天鹅湖/半部近代史·5A刘公岛/火炬八街·美拍」小红薯网红打卡地|24H管家/接or送机服务',price:"¥1716",head:"威海3日2晚跟团游",title:"威海旅游",about:"【宿火炬八街旁·“多巴胺”漫步】『限赠·摩天岭索道·跨过山和大海』<get爸爸去哪儿同款·原生态小众·鸡鸣岛&网红巨轮·BLUEWAYS&浪漫BGM·那香海>「 5A刘公岛&定远舰·宝藏海岛·甲午风云」24H自营管家"},
{img:new URL("@/assets/travel/Domestic/weihai/image4.png",import.meta.url).href,include:'威海+烟台+蓬莱区+青岛4日3晚跟团游·【威海参团·免升威海钻海景房·赠栈桥喂海鸥】<硬核双5A刘公岛+蓬莱阁>O自费·金导带玩金沙滩·打卡孤独鲸+火炬八街·邂逅海鸥/养马岛日落+鲅鱼水饺&正宗韩料&德餐』含接送',price:"¥1690",head:"青岛+威海+烟台+蓬莱5日4晚跟团游",title:"威海旅游",about:"9人团·国潮换装旅拍『趣春游·5W+销量:豪海景房+限升陆地头等舱+真Vip通道』2N5钻+2N4钻·3餐飙升419元=海鲜餐.海参&烤肉BBQ&劲爆海鲜自助:刺身畅吃丨成山头<刘公岛&海洋世界&八仙渡>"},
{img:new URL("@/assets/travel/Domestic/weihai/image5.png",import.meta.url).href,include:'威海3日跟团游·春日出游-探秘威海湾海洋世界出发探秘网红景，走千里山海2-6人小包团（2人',price:"¥1280",head:"威海5日4晚跟团游",title:"威海旅游",about:"【全程五钻酒店 · 畅游自在威海】『限赠·摩天岭索道·跨过山和大海』<get爸爸去哪儿同款·原生态小众·鸡鸣岛&网红巨轮·BLUEWAYS&浪漫BGM·那香海>「 5A刘公岛&定远舰·宝藏海岛·甲午风云」24H自营管家"},
{img:new URL("@/assets/travel/Domestic/weihai/image6.png",import.meta.url).href,include:'威海3日2晚拼小团·『6人小团·宿火炬八街旁』行程灵活&自选·热门景点2选1<“爸爸去哪',price:"¥993",head:"青岛+威海+烟台+蓬莱区5日4晚跟团游",title:"威海旅游",about:"9人团『探春·性价比N0.I：2N5钻海景房+2N4钻&限升陆地头等舱&Vip通道』3餐飙值418=九宫格·鲍鱼&饕餮海鲜自助&八仙宴<潮酷青啤馆x啤酒畅饮x新中式茶饮>刘公岛·海洋世界·八仙过海"},
{img:new URL("@/assets/travel/Domestic/weihai/image7.png",import.meta.url).href,include:'青岛+威海+烟台+蓬莱5日4晚跟团游·限升海景房·2N5钻+2N4钻【9人精致团+空座率30%】',price:"¥1547",head:"威海+荣成5日4晚私家团",title:"威海旅游",about:"儿童免单&冬季特惠 全程升级海景房『全程向导+电子讲解+一日DIY包车自由行』人气景点<荣成天鹅湖/刘公岛/布鲁维斯号沉船/那香海钻石沙滩>纯玩0购物0自费+当地土著+24h管家服务"},
{img:new URL("@/assets/travel/Domestic/weihai/image8.png",import.meta.url).href,include:'威海3日2晚私家团·儿童免单【不拼外人·独立成团·0购物】甄选沙滩/海景·5钻酒店任选「浪',price:"¥1541",head:"威海+烟台+蓬莱区+青岛4日3晚跟团游",title:"威海旅游",about:"【威海参团·免升威海钻海景房·赠栈桥喂海鸥】<硬核双5A刘公岛+蓬莱阁>O自费·金导带玩金沙滩·打卡孤独鲸+火炬八街·邂逅海鸥/养马岛日落+鲅鱼水饺&正宗韩料&德餐』含接送"},
{img:new URL("@/assets/travel/Domestic/weihai/image9.png",import.meta.url).href,include:'威海3日2晚跟团游·【宿火炬八街旁·“多巴胺”漫步】『限赠·摩天岭索道·跨过山和大海』<get爸',price:"¥2998",head:"【威海参团·免升威海钻海景房·赠栈桥喂海鸥】<硬核双5A刘公岛+蓬莱阁>O自费·金导带玩金沙滩·打卡孤独鲸+火炬八街·邂逅海鸥/养马岛日落+鲅鱼水饺&正宗韩料&德餐』含接送",title:"威海旅游",about:"万人游【9人团·1晚青岛城芯海景房·1N5钻+2N4钻】4餐469|烤肉BBQ&品质海鲜自助&海鲜宴&八大碗】成山头&火炬八街&布鲁维斯|双景区Vip通道4大5A刘公岛&海洋世界&八仙过海＆金石滩"},
])
//北京数据
let beijingBig=ref(
{img:new URL("@/assets/travel/Domestic/beijing/image1.png",import.meta.url).href,include:'北京5日4晚跟团游·【提前8天订享进宫·不进赔付1000/单·金牌导游】泛2环酒店连住｜早定送博物馆盲盒·暖春赏樱花｜28人团·非遗中轴｜0购物｜儿童赠早餐｜赠神武门摆渡车·天坛通票·奥运地标｜24h专车',price:"¥1524",title:"北京5日4晚跟团游",head:"北京旅游",about:"【春季大促·早订享约进宫·泛2环酒店连住】金牌导游｜早定送博物馆盲盒·暖春赏樱花｜28人团·非遗中轴｜0购物｜儿童赠早餐｜赠神武门摆渡车·天坛通票·奥运地标｜24h专车接送机/站"},
)
let beijingSmall=ref([
{img:new URL("@/assets/travel/Domestic/beijing/image2.png",import.meta.url).href,include:'北京5日4晚跟团游·【提前8天订享进宫·不进赔付1000/单·金牌导游】泛2环酒店连住｜早定送博物馆盲盒·暖春赏樱花｜28人团·非遗中轴｜0购物｜儿童赠早餐｜赠神武门摆渡车·天坛通票·奥运地标｜24h专',price:"¥1224",title:"北京4日3晚跟团游",head:"北京旅游",about:"〖漫游京城-免费升级2-3三钻轻奢酒店〗{春季特惠{长者}-{学生}立减-甄选北京5A景区深度游-天安门广场+故宫博物院+升旗仪式+八达岭长城+颐和园+圆明园+天坛-帝都精华景区一览到底-24小时接机接站"},
{img:new URL("@/assets/travel/Domestic/beijing/image3.png",import.meta.url).href,include:'北京4日3晚跟团游·〖漫游京城-免费升级2-3三钻轻奢酒店〗{春',price:"¥1142",title:"北京4日3晚跟团游",head:"北京旅游",about:"〖漫游京城-免费升级2-3三钻轻奢酒店〗{春季特惠{长者}-{学生}立减-甄选北京5A景区深度游-天安门广场+故宫博物院+升旗仪式+八达岭长城+颐和园+圆明园+天坛-帝都精华景区一览到底-24小时接机接站"},
{img:new URL("@/assets/travel/Domestic/beijing/image4.png",import.meta.url).href,include:'北京5日4晚跟团游·【早订无忧保票故宫+纪念堂 自营爆品】参观国家一级博物馆 2环沿线4钻',price:"¥1619",title:"北京5日4晚跟团游",head:"北京旅游",about:"【早订无忧约进宫+纪念堂 自营爆品】参观国家一级博物馆 2环沿线4钻酒店 万人销量28人团 游9大热门景点(须预约) 全程0购物 享北京烤鸭+东来顺涮肉 儿童含早餐 24小时专车接送机/站"},
{img:new URL("@/assets/travel/Domestic/beijing/image5.png",import.meta.url).href,include:'北京+八达岭长城+天安门广场-国旗+故宫博物院5日4晚拼小团·暖春放肆游 ·真纯玩 畅享 2-9人',price:"¥2377",title:"北京+八达岭长城+天安门广场-国旗+故宫博物院5日4晚拼小团",head:"北京旅游",about:"暖春放肆游 ·真纯玩【封顶9人轻奢小团 保进纪念堂 故宫 博物馆 享·50元高餐标特色餐·享：神威4钻高端酒店 赠：博物馆门票】24小时接送 独立导游专业讲解"},
{img:new URL("@/assets/travel/Domestic/beijing/image6.png",import.meta.url).href,include:'北京5日4晚跟团游·【国旅品牌-官方自营】不带钱包游帝都（含往返机票/高铁）/下单立减-精',price:"¥3638",title:"北京5日4晚跟团游",head:"北京旅游",about:"【5A景点全打卡·知名精华景点一个不少】天安门广场升旗仪式+八达岭长城+打卡清华北大+毛主席纪念堂人民英雄纪念碑+颐和园+鸟巢水立方+可升级酒店+可升级天津一日游/环球影城"},
{img:new URL("@/assets/travel/Domestic/beijing/image7.png",import.meta.url).href,include:'北京5日4晚跟团游·51班期赠参观国博【一价全含20人团 限定班期指定住“1环”君亭酒店】0购物0自费 7正餐全含|3.5天行程 5A景点全含 限时踏春赏花 提前8天保故宫+毛记入内 赠黄包车胡同游+奥运文化游 儿童含早+门票',price:"¥2768",title:"北京5日4晚跟团游",head:"北京旅游",about:"51班期赠国博【一价全含20人团 限定班期指定住“1环”君亭酒店】0购物0自费 7正餐全含|3.5天行程 5A景点全含 限时踏春赏花 提前8天优先约故宫+毛记入内 赠胡同黄包车+奥运杂技演出 儿童含早+门票"},
{img:new URL("@/assets/travel/Domestic/beijing/image8.png",import.meta.url).href,include:'北京4日3晚跟团游·【提前8天订享进宫·不进赔付1000/单·金牌导游】泛2环酒店连住｜',price:"¥1517",title:"北京5日4晚跟团游",head:"北京旅游",about:"51班期赠国博参观【口碑0购物轻松游 2环沿线4钻高分酒店 28人团】提前8天享进宫+纪念堂入内 热门景点全含 观升旗+天安门+八达岭长城+天坛+颐和园+圆明园 儿童含早餐+门票 3正餐含北京烤鸭 专车接送"},
{img:new URL("@/assets/travel/Domestic/beijing/image9.png",import.meta.url).href,include:'北京5日4晚跟团游·【早订无忧保票故宫+纪念堂 自营新品热卖】2环沿线4钻酒店 28人团',price:"¥1493",title:"北京5日4晚跟团游",head:"北京旅游",about:"【早订无忧约故宫+纪念堂 自营新品热卖】2环沿线4钻酒店 28人团 游9大热门景点(须预约) 一对一管家服务 游9大热门景点(须预约) 享北京烤鸭+东来顺涮肉 儿童含早餐门票 24小时专车接送机/站"},
])
//杭州数据
let hangzhouBig=ref(
{img:new URL("@/assets/travel/Domestic/hangzhou/image1.png",import.meta.url).href,include:'上海+苏州+杭州+乌镇5日4晚跟团游·仲春盛典·下单立减【神威自营·漫游江南Classic】25人精致小团<318大促|踏青赏花>外滩集散免费寄存<5钻酒店> 好导游伴游5A<留园精讲+VIP入西塘•赠汉服+西栅+西湖+50元餐>交通任选',price:"¥1222",head:"杭州旅游",title:"上海+苏州+杭州+乌镇5日4晚跟团游",about:"仲春盛典·下单立减【神威自营·漫游江南Classic】25人精致小团<318大促|踏青赏花>外滩集散免费寄存<5钻酒店> 好导游伴游5A<留园精讲+VIP入西塘•赠汉服+西栅+西湖+50元餐>交通任选"},
)
let hangzhouSmall=ref([
{img:new URL("@/assets/travel/Domestic/hangzhou/image2.png",import.meta.url).href,include:'上海迪士尼（Disney）+苏州+杭州+乌镇6日5晚跟团游·踏青早定优惠【神威自营·明星漫游Classic】25人精致小团<赠迪士尼旅拍>外滩集散免费寄存<5钻酒店>好导游伴游5A<留园精讲+VIP入西塘•赠汉服+西栅+西湖赏花>50元餐',price:"¥2204",head:"杭州旅游",title:"上海迪士尼（Disney）+苏州+杭州+乌镇6日5晚跟团游",about:"踏青早定优惠【神威自营·明星漫游Classic】25人精致小团<赠迪士尼旅拍>外滩集散免费寄存<5钻酒店>好导游伴游5A<留园精讲+VIP入西塘•赠汉服+西栅+西湖赏花>50元餐"},
{img:new URL("@/assets/travel/Domestic/hangzhou/image3.png",import.meta.url).href,include:'杭州+西塘+乌镇3日2晚跟团游·纯玩0购物 | 精讲导游+1车到底『赠』值300元 | 双摇橹船+汉服游园『宿』全5钻酒店『游』5A景区 | 西栅+西塘+南浔+西湖 | 可选宋城『食』2早1正 | 5星自助早+御茶宴<老友会>可选航班/车次',price:"¥1279",head:"杭州旅游",title:"华东5市+乌镇6日5晚跟团游",about:"【神威自营·枕水江南】<318大促>2晚升级5钻+宿乌镇【特别安排】灵山祈愿&梵宫自助+4正餐标50·品乾隆茶宴，水乡乌镇+周庄赠景交*船游西湖+留园【纯玩无购物】上海进|含大交通"},
{img:new URL("@/assets/travel/Domestic/hangzhou/image4.png",import.meta.url).href,include:'上海+苏州+杭州+无锡+南京+乌镇5日4晚跟团游·春季赏花 纯玩【金牌导游服务 升级2晚5钻&网红拈花湾客栈+夜宿乌镇】精华『灵隐飞来峰 登雷峰塔 船游西湖』美食~【湖鲜餐+自助素斋+乾隆御茶宴】留园 禅光夜秀 多交通',price:"¥1378",head:"杭州旅游",title:"上海+苏州+杭州+无锡+南京+乌镇5日4晚跟团游",about:"春季赏花 纯玩【金牌导游服务 升级2晚5钻&网红拈花湾客栈+夜宿乌镇】精华『灵隐飞来峰 登雷峰塔 船游西湖』美食~【湖鲜餐+自助素斋+乾隆御茶宴】留园 禅光夜秀 多交通"},
{img:new URL("@/assets/travel/Domestic/hangzhou/image5.png",import.meta.url).href,include:'杭州4日3晚私家团·【杭城深度游】私享一单一团=不拼不凑【宿】3晚杭州市区内 #精选3/4/5钻榜单酒店@精品出游 | 品宋城千古情演出+西湖游船+雷峰塔 · 苏堤漫步+飞来峰 · 灵隐祈愿+云栖竹径+龙井村+九溪烟树 |',price:"¥3849",head:"杭州旅游",title:"杭州西溪国家湿地公园+安吉云上草原+绍兴鲁迅故里景区+藏龙百瀑+中国大竹海+绍兴柯岩风景区6日5晚私家团",about:"【亲子※口碑5钻】悬崖心跳乐园+三味书屋『大佛&鉴湖&鲁镇&&百草园』+九溪十八涧+竹博园【专车·管家·纯玩】"},
{img:new URL("@/assets/travel/Domestic/hangzhou/image6.png",import.meta.url).href,include:'杭州+苏州+乌镇4日3晚跟团游·纯玩+升级全程5星宿乌镇 精华5A四水乡~『周庄+西栅双夜游 南浔+西塘双古镇』姑苏~【拙政园 寒山寺】赠~【体验抄经+汉服游园+300元双摇橹船】美食~【5星自助早 50御茶宴】A线双飞/B线双高',price:"¥1563",head:"杭州旅游",title:"上海迪士尼（Disney）+杭州+苏州+乌镇4日3晚跟团游",about:"25人精致小团【神威自营·明星漫游Classic】<赠迪士尼园区旅拍>>外滩专属集散免费寄存，<全5钻>1晚乌镇，好导游伴游5A<留园VIP精讲+西塘赠汉服+西湖错峰>交通任选"},
{img:new URL("@/assets/travel/Domestic/hangzhou/image7.png",import.meta.url).href,include:'杭州+乌镇+西塘3日2晚跟团游·纯玩1车到底 甄选金牌导游『宿乌镇品牌5钻+升级杭州5星开元』赠送~【汉服游园+300元双摇橹船 门票价超600】经典~『5A3水乡 乌镇+南浔+西塘』美食~【5星自助早 50元御茶宴】高铁/飞机任选',price:"¥1287",head:"杭州旅游",title:"上海迪士尼（Disney）+杭州+苏州+乌镇5日4晚跟团游",about:"25人纯玩小团·人少·打折·住5钻 | 金牌导游+1车到底 +外滩VIP休息区存行李&畅玩迪士尼+赠乐园旅拍【留园+VIP免排队入西塘&赠汉服游园+西栅+西湖】4早2正|大交通可选"},
{img:new URL("@/assets/travel/Domestic/hangzhou/image8.png",import.meta.url).href,include:'南京+无锡+苏州+杭州+上海+乌镇5日4晚跟团游·【错峰出游】【限量升级盐湖城内客栈+乌镇网红酒店+1晚杭州5钻】五星旅行社【乌镇日景夜景】5A四水乡【东栅 西栅 周庄 南浔】高餐标50元 专职导游',price:"¥1315",head:"杭州旅游",title:"上海+苏州+杭州+无锡+南京+乌镇6日5晚跟团游",about:"纯玩+金牌导游服务【赏花拈花湾&禅夜秀+西栅夜游】升级2晚5钻拈花湾客栈+乌镇网红酒店 杭州~【灵隐飞来峰 登雷峰塔 船游西湖】慢逛留园 三特色正餐 24小时接机 多交通"},
{img:new URL("@/assets/travel/Domestic/hangzhou/image9.png",import.meta.url).href,include:'上海+苏州+杭州+无锡+南京+乌镇6日5晚跟团游·纯玩 金牌导游服务【升级2晚5钻&网红拈花湾客栈+夜宿乌镇】精华~『灵隐飞来峰 登雷峰塔 船游西湖』美食~【湖鲜餐+自助素斋+乾隆御茶宴】姑苏留园 禅光夜秀 多交通',price:"¥1368",head:"杭州旅游",title:"上海+苏州+乌镇+杭州4日3晚跟团游",about:"25人精致小团【外滩集散免费寄存】5钻酒店【50元水乡+御茶宴】金牌导游伴游5A景区【精讲世遗名园+山塘街+VIP入西塘•赠汉服+乌镇】西湖 交通自选"},
])
//上海数据
let shanghaiBig=ref(
{img:new URL("@/assets/travel/Domestic/shanghai/image1.png",import.meta.url).href,include:'上海+苏州+杭州+乌镇5日4晚跟团游·仲春盛典·下单立减【神威自营·漫游江南Classic】25人精致小团<318大促|踏青赏花>外滩集散免费寄存<5钻酒店> 好导游伴游5A<留园精讲+VIP入西塘•赠汉服+西栅+西湖+50元餐>交通任选',price:"¥1222",head:"上海旅游",title:"上海+苏州+杭州+无锡+南京+乌镇6日5晚跟团游",about:"纯玩+金牌导游服务【赏花拈花湾&禅夜秀+西栅夜游】升级2晚5钻拈花湾客栈+乌镇网红酒店 杭州~【灵隐飞来峰 登雷峰塔 船游西湖】慢逛留园 三特色正餐 赠24小时接机"},
)
let shanghaiSmall=ref([
{img:new URL("@/assets/travel/Domestic/shanghai/image2.png",import.meta.url).href,include:'上海迪士尼（Disney）+苏州+杭州+乌镇6日5晚跟团游·踏青早定优惠【神威自营·明星漫游Classic】25人精致小团<赠迪士尼旅拍>外滩集散免费寄存<5钻酒店>好导游伴游5A<留园精讲+VIP入西塘•赠汉服+西栅+西湖赏花>50元餐',price:"¥2204",head:"上海旅游",title:"上海迪士尼（Disney）+杭州+苏州+乌镇5日4晚跟团游",about:"25人小团&早订立减&分期免息付款 | 金牌导游&外滩VIP行李寄存点&畅玩迪士尼<赠迪士尼旅拍>【留园+VIP免排队入西塘&赠汉服体验+西栅+西湖】2顿特色餐 | C线18人小团"},
{img:new URL("@/assets/travel/Domestic/shanghai/image3.png",import.meta.url).href,include:'上海迪士尼（Disney）+杭州+苏州+乌镇5日4晚跟团游·『早订享立减&赠取消险·出行无',price:"¥2037"},
{img:new URL("@/assets/travel/Domestic/shanghai/image4.png",import.meta.url).href,include:'上海迪士尼（Disney）+杭州+苏州+乌镇4日3晚跟团游·25人精致小团【神威自营·明星漫游Classic】<赠迪士尼园区旅拍>>外滩专属集散免费寄存，<全5钻>1晚乌镇，好导游伴游5A<留园VIP精讲+西塘赠汉服+西湖错峰>交通任选',price:"¥1938",head:"上海旅游",title:"上海迪士尼（Disney）+苏州+杭州+乌镇6日5晚跟团游",about:"踏青早定优惠【神威自营·明星漫游Classic】25人精致小团<赠迪士尼旅拍>外滩集散免费寄存<5钻酒店>好导游伴游5A<留园精讲+VIP入西塘•赠汉服+西栅+西湖赏花>50元餐"},
{img:new URL("@/assets/travel/Domestic/shanghai/image5.png",import.meta.url).href,include:'上海+上海迪士尼度假区5日4晚私家团·【魔都往事&童话城堡&】宿4钻舒适酒店【游】魔旅深度',price:"¥4699",head:"上海旅游",title:"华东5市+乌镇6日5晚跟团游",about:"【神威自营·枕水江南】春季踏青<318大促>升级2晚5钻+宿乌镇【特别安排】灵山祈愿+梵宫自助，4正高餐标·品御茶宴，逛乌镇+周庄赠景交+西湖游船+留园 B线升级外滩酒店C线含双夜景丨上海进出"},
{img:new URL("@/assets/travel/Domestic/shanghai/image6.png",import.meta.url).href,include:'上海+东方明珠+外滩2日1晚跟团游·『特惠纯玩·深度游魔都』【上',price:"¥828",head:"上海旅游",title:"上海5日4晚私家团",about:"《咨询客服享优惠-行程可定制》〈轻松游·亲子游·闺蜜游〉童年回忆·上海迪士尼（Disney）--探索动物王国·野生动物园--世博·中华宫--感受自然之美·上海自然博物馆"},
{img:new URL("@/assets/travel/Domestic/shanghai/image7.png",import.meta.url).href,include:'上海+苏州+杭州+无锡+南京+乌镇6日5晚跟团游·纯玩 金牌导游服务【升级2晚5钻&网红',price:"¥1368",head:"上海旅游",title:"上海+苏州+乌镇+杭州5日4晚跟团游",about:"仲春盛典·下单立减【神威自营·漫游江南Classic】25人精致小团<318大促|踏青赏花>外滩集散免费寄存<5钻酒店> 好导游伴游5A<留园精讲+VIP入西塘•赠汉服+西栅+西湖+50元餐>当地参"},
{img:new URL("@/assets/travel/Domestic/shanghai/image8.png",import.meta.url).href,include:'上海+苏州+杭州+无锡+南京+乌镇5日4晚跟团游·春季赏花 纯玩【金牌导游服务 升级2晚5钻',price:"¥1378",head:"上海旅游",title:"上海+苏州+乌镇+杭州4日3晚跟团游",about:"早订立减~25人小团 | 住5钻酒店+金牌导游+外滩集散免费寄存 | 精讲5A景区【苏式园林+山塘街+VIP免排队入西塘•赠汉服体验+西栅夜游+全景西湖】2顿特色餐 | C线18人小团+拙政园+灵隐"},
{img:new URL("@/assets/travel/Domestic/shanghai/image9.png",import.meta.url).href,include:'南京+无锡+苏州+杭州+上海+乌镇5日4晚跟团游·【错峰出游】【限量升级盐湖城内客栈+乌镇网红酒店+1晚杭州5钻】五星旅行社【乌镇日景夜景】5A四水乡【东栅 西栅 周庄 南浔】高餐标50元 专职导游',price:"¥1315",head:"上海旅游",title:"上海+东方明珠+外滩2日1晚跟团游",about:"【上海站、虹桥站、上海南站免费接站】『新品特惠纯玩亲子深度游 含早餐』登东方明珠 感受浦江两岸美景叹繁华都市 逛外滩南京路城隍庙品上海当地美食 自选迪士尼 自选黄浦江夜游船票"},
])
//西安
let xianBig=ref(
{img:new URL("@/assets/travel/Domestic/xian/image1.png",import.meta.url).href,include:'西安兵马俑+华清宫+华山+大雁塔+大唐不夜城+钟鼓楼广场4日3晚跟团游·赠西安千古情演出·全程四钻酒店【2+1头等舱用车舒享乘·大座椅·充电口】西安博物院保证入园·汉服夜游不夜城·四景区耳麦+登山手套+导览器+专车接送',price:"¥1611",head:"西安旅行",title:"西安兵马俑+华清宫+大唐不夜城+大雁塔+钟鼓楼广场+永兴坊+回民街3日2晚跟团游",about:"赠西安千古情演出【20人团40%空座率·亲子甄选】4钻酒店连住·金牌导游1车1导·汉服夜游不夜城·西安博物院·赠四景区耳麦+讲解·24H专车接送"},
)
let xianSmall=ref([
{img:new URL("@/assets/travel/Domestic/xian/image2.png",import.meta.url).href,include:'西安3日2晚跟团游·赠《西安千古情》演出+园区参观·6-12人封顶·4钻酒店连宿·一车一导·秦兵',price:"¥1459",head:"西安旅行",title:"西安兵马俑+华清池+华山4日跟团游",about:"20人小团 赠《西安千古情》演出贵宾票 赠西安博物院+人工讲解+耳机 夜宿华山早登峰少排队【可选5钻套餐含华山温泉酒店】24小时专车接送机/站"},
{img:new URL("@/assets/travel/Domestic/xian/image3.png",import.meta.url).href,include:'西安5日4晚跟团游·【神威自营·陪你旅行】16人封顶&慢旅行,无自费无购物！兵马俑+',price:"¥3902",head:"西安旅行",title:"西安兵马俑+大唐不夜城+西安城墙+大雁塔+永兴坊3日2晚跟团游",about:"自选-赠【西安千古情/复活的军团】演出 10-20人以内小团 金牌导游 1车1导 市区4钻连住【可选升级5钻】宝藏土著玩法-铜车马 汉服夜游不夜城 专车接送机/站"},
{img:new URL("@/assets/travel/Domestic/xian/image4.png",import.meta.url).href,include:'西安兵马俑+华清池+华山4日3晚跟团游·20人小团 赠大唐芙蓉园门票（3月29前出行，每间房2张）赠《西安千古情》演出贵宾票 赠西安博物院+讲解+耳机 夜宿华山早登峰【可选5钻套餐含华山温泉酒店】24小时接送机/站',price:"¥1605",head:"西安旅行",title:"西安兵马俑+华清宫+华山+大雁塔+大唐不夜城+钟鼓楼广场4日3晚跟团游",about:"赠西安千古情演出·价值298元·四钻酒店【2+1头等舱用车舒享乘·大座椅·充电口】西安博物院·汉服夜游不夜城·四景区耳麦+登山手套+导览器+专车接送"},
{img:new URL("@/assets/travel/Domestic/xian/image5.png",import.meta.url).href,include:'西安7日跟团游·『西安年·长相思来长安·专车接送·含儿童门票』『壶口升VIP2+1头等舱+壶口黄陵必坐景交』四钻住宿&大唐不夜城&送回+全程耳麦【全程5大5A景区：兵马俑+壶口+法门寺+黄帝陵+华清宫】',price:"¥3337",head:"西安旅行",title:"西安兵马俑+大雁塔+大唐不夜城+西安城墙+《驼铃传奇》秀3日2晚跟团游",about:"赠送价值298元/人《驼铃传奇》秀，12人精品小团、无自费 ，赠送汉服体验 兵马俑＆丽山园一网打尽，甄选四钻不挪窝，24h专车接送机/站+专属管家"},
{img:new URL("@/assets/travel/Domestic/xian/image6.png",import.meta.url).href,include:'西安兵马俑+华清宫+大唐不夜城+大雁塔+钟鼓楼广场+永兴坊+回民街3日2晚跟团游·赠',price:"¥1396",head:"西安旅行",title:"西安兵马俑+华清池3日跟团游",about:"20人小团 赠价值298元《西安千古情》演出贵宾票 赠西安博物院+人工讲解+无线耳机 【可选升级5钻酒店套餐】 24h专车接送机站"},
{img:new URL("@/assets/travel/Domestic/xian/image7.png",import.meta.url).href,include:'西安兵马俑+华山4日3晚跟团游·【神威自营·夜宿华山】满13人升头等舱大巴，金牌导游一车到底，2/7-2/28班期送秦俑情表演，西安博物院预(预约+讲解)，1晚宿华山下·早入园多游玩+24H专车接送，可加购长恨歌·交通任选',price:"¥1668",head:"西安旅行",title:"西安兵马俑+华清池+华山+壶口瀑布5日跟团游",about:"壶口行程升级【2+1】陆地头等舱 赠《西安千古情》演出贵宾票 赠西安博物院+人工讲解+耳机 夜宿华山早登峰少排队 24小时接送机/站"},
{img:new URL("@/assets/travel/Domestic/xian/image8.png",import.meta.url).href,include:'西安5日4晚私家团·【冰蛋推荐-手绘长安 | 春光作序·可定制】乙巳中国年·灯映长安春 专业讲解拒绝到此一游 深度游兵马俑 NPC伴游观光车 西影博物馆 汉服&妆造体验 DIY秦小俑 可加购长恨歌【可选订冰蛋趣讲兵马俑】',price:"¥4429",head:"西安旅行",title:"西安兵马俑+华山+黄帝陵+延安壶口瀑布5日4晚跟团游",about:"【神威自营·行摄壶口】满13人升头等舱大巴+3/31前出发班期送秦俑情表演+金牌导游一车到底+接站口0等候+西安博物院(预约+讲解) +1晚宿华山下·早入园多游玩+当地参团"},
{img:new URL("@/assets/travel/Domestic/xian/image9.png",import.meta.url).href,include:'西安兵马俑+大唐不夜城+西安城墙+大雁塔+永兴坊3日2晚跟团',price:"¥1426",head:"西安旅行",title:"陕西西安+延安+陕西黄河壶口瀑布+黄帝陵轩辕庙黄帝陵2日1晚跟团游",about:"1早3正餐+景区耳麦免费用『专属赠北京知青旧居+南泥湾+打卡宝塔山』不进购物店•西安市三环内接早【蛇年旺财 选我省心游•3月住知青文苑酒店】"},
])
//成都
let chengduBig=ref(
{img:new URL("@/assets/travel/Domestic/chengdu/image1.png",import.meta.url).href,include:'成都+九寨沟+黄龙风景名胜区5日4晚跟团游·【135特价 口碑福利T0P.1】金牌导游〓2+1保姆车+15%空座率〓封顶20人精致团《BC线高铁往返九寨+超级保姆车+带腿拖》限时九寨升豪生 熊猫/都江堰2选1+赠精修旅拍 24H接送机',price:"¥2215",head:"成都旅游",title:"九寨沟+黄龙风景名胜区3日2晚跟团游",about:"销量T0P.1〓自营旗舰〓真纯玩0餐店【ABC线特惠-3月免费升级2晚五星品牌天源豪生】2+1保姆车+金牌导游+108元表演午宴+赠旅拍&下午茶【CD线升级20人精品小团】熊猫/都江堰2选1"},
)
let chengduSmall=ref([
{img:new URL("@/assets/travel/Domestic/chengdu/image2.png",import.meta.url).href,include:'成都+九寨沟+三星堆博物馆+都江堰+黄龙风景名胜区6日5晚跟团游·错峰【赠价值88元成都火锅+川剧变脸〓藏服换装旅拍】金牌导游&2+1保姆车【三星堆+正宗‘花花’熊猫基地+都江堰精讲】<可选B线成都高铁达九寨>24H接送机',price:"¥2632",head:"成都旅游",title:"九寨沟+黄龙风景名胜区3日2晚跟团游",about:"《国旅真纯玩+升级5钻品牌酒店+头等舱保姆车》【成都高铁2小时直达九寨沟选B】【五星国际豪生酒店选D】《9:30出发C线》都江堰熊猫景区+五钻酒店美食+免费包接+20000多人出游选择"},
{img:new URL("@/assets/travel/Domestic/chengdu/image3.png",import.meta.url).href,include:'成都+九寨沟+黄龙风景名胜区+都江堰景区+三星堆博物馆6日5晚跟团游·【春季爆品·限时免费升2晚5星豪生】金牌导游〓2+1保姆车| 三星堆2H精讲+有“花花“的熊猫基地〓赠108元表演午宴+九寨旅拍&下午茶|24h专车接送机/站',price:"¥2659",head:"成都旅游",title:"九寨沟+黄龙风景名胜区+四姑娘山4日3晚拼小团",about:"8人精品小团+尊享定制版航空座椅保姆车+问道青城山&拜水都江堰+都江堰5钻酒店+九寨沟口碑榜4钻酒店+南桥夜景·自拍熊猫·神威琻牌师傅+特色美食+三环内接+24h管家式服务"},
{img:new URL("@/assets/travel/Domestic/chengdu/image4.png",import.meta.url).href,include:'成都+九寨沟+黄龙风景名胜区+峨眉山+乐山7日6晚跟团游·【金牌导游+B线高铁往返九寨】保姆车20人团+15%空座率【九寨3天升plus车+腿托.腰枕】 峨眉段8点晚出发〓二进峨眉+可选金顶酒店 牦牛汤锅+川剧变脸 24H接送机站',price:"¥3634",head:"成都旅游",title:"都江堰+九寨沟+黄龙风景名胜区+峨眉山+乐山5日4晚跟团游",about:"『高铁、高铁、纯玩团·质量保证·500人好评』可选九寨高铁团、可选五钻酒店、可选保姆车2+1座椅、【同样的产品-更好的服务】热门景点经典玩法+三环内免费包接"},
{img:new URL("@/assets/travel/Domestic/chengdu/image5.png",import.meta.url).href,include:'九寨沟+黄龙风景名胜区5日4晚跟团游·四钻高端酒店+酒店早晚餐+自选2+1超宽座距保姆车可座可斜躺+遥望群山连绵 云雾缭绕四季色彩斑斓的山水画廊 体验“九寨归来不看水”意境-独特的钙化群池奇观+呆萌熊猫+三环内接',price:"¥1612",head:"成都旅游",title:"都江堰+九寨沟+黄龙风景名胜区+峨眉山+乐山5日4晚跟团游",about:"『纯玩团·青旅直营·质量保证·5000人好评』可选九寨高铁团、可选五钻酒店、可选保姆车2+1座椅【同样的产品-更好的服务】热门景点经典玩法+三环内免费包接"},
{img:new URL("@/assets/travel/Domestic/chengdu/image6.png",import.meta.url).href,include:'成都+九寨沟+黄龙风景名胜区5日4晚跟团游·【热榜2+1宽敞保姆车•可充电】自营旗舰〓真纯玩《高铁2h直达九寨+保姆车EFG/高铁8人拼小团H/20人保姆车I》宿4钻酒店｜可选高品/轻奢/5星酒店套餐｜专车-天府/双流/高铁接送',price:"¥1779",head:"成都旅游",title:"成都+九寨沟+黄龙风景名胜区+都江堰景区+三星堆博物馆4日3晚跟团游",about:"爆品T0P.1〓自营旗舰【3月特价&免费升级五星天源豪生】真纯玩0餐店<金牌导游〓保姆车〓108元印象表演宴〓熊猫基地+三星堆2H精讲+旅拍*下午茶>"},
{img:new URL("@/assets/travel/Domestic/chengdu/image7.png",import.meta.url).href,include:'四川成都+九寨沟+都江堰+黄龙风景名胜区6日5晚跟团游·高端纯玩｜升级2+1保姆车｜高铁往返九寨段【5A黄龙风景名胜区+5A九寨沟深度游玩+探索古蜀文明三星堆+耍大熊猫基地+松潘岷江源】 赠【三星堆2H精讲+下午茶+旅拍】',price:"¥2389",head:"成都旅游",title:"成都+九寨沟+黄龙风景名胜区+都江堰景区+三星堆博物馆4日3晚跟团游",about:"4钻/5钻酒店/2+1保姆车 套餐可选 行程中24小时微管家在线服务+赠藏式土火锅"},
{img:new URL("@/assets/travel/Domestic/chengdu/image8.png",import.meta.url).href,include:'成都+青城山+都江堰景区+成都大熊猫繁育研究基地+三星堆博物馆+杜甫草堂5日4晚跟团游·错峰爆品【赠成都火锅+非遗变脸+夜游锦里 】2+1保姆车&赏’花花‘熊猫+古蜀‘三星堆’父母安心游 24h接送机/站',price:"¥2379",head:"成都旅游",title:"九寨沟+黄龙风景名胜区3日2晚跟团游",about:"性价比T0P.1【BD线升级2晚豪生酒店】自营旗舰〓真纯玩0餐店<2+1头等舱车+108元熊猫表演宴+藏家旅拍&下午茶>熊猫/都江堰任选"},
{img:new URL("@/assets/travel/Domestic/chengdu/image9.png",import.meta.url).href,include:'成都+九寨沟+黄龙风景名胜区5日4晚跟团游·国旅官方直营纯玩',price:"¥1703",head:"成都旅游",title:"成都+九寨沟+黄龙风景名胜区+都江堰景区+三星堆博物馆4日3晚跟团游",about:"爆品T0P.1〓自营旗舰【3月特价&免费升级五星天源豪生】真纯玩0餐店<金牌导游〓保姆车〓108元印象表演宴〓熊猫基地+三星堆2H精讲+旅拍*下午茶>"},
])
const $router=useRouter()
const Search=(price:string,img:any,head:any,title:any,about:any)=>{
$router.push({name:'travelSearch',
    params:{
        price,
        img,
        head,
        title,
        about
    }
})
}
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