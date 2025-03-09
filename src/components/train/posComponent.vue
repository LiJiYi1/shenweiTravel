<template>
        <div @click="stop"   class="container" :style="{backgroundColor:color,borderRadius:'6px',padding:'10px',paddingTop:'0',paddingBottom:'0'}">
            <el-input  @input="start" @focus="Show" v-model="from" style="width: 280px;height:60px;font-size:25px;" placeholder="起始城市" />
            <el-icon style="font-size: 40px;margin-top:10px" @click="change"><Switch /></el-icon>
            <el-input   @input="end"  @focus="Show1"  v-model="to" style="width: 300px;height:60px;font-size:25px" placeholder="目的地" />
            <!-- 搜索提示 -->
            <!-- 欧洲 -->
            <el-card class="posSearch"  v-show="isShow1">
            <el-tabs>
                <!-- 欧洲搜索左 -->
               <el-tab-pane label="热门城市" :disabled="true">
                <span  v-for="(item,index) in data1" :key="index" @click="Eurl(item)">{{item}}</span>
               </el-tab-pane>

            </el-tabs>
            </el-card>
            <el-card class="posSearch1"  v-show="isShow2">
            <el-tabs>
                <!-- 欧洲搜索右 -->
               <el-tab-pane label="热门城市" :disabled="true">
                <span  v-for="(item,index) in data1" :key="index" @click="Eurr(item)">{{item}}</span>
               </el-tab-pane>

            </el-tabs>
            </el-card>
            <!-- 台湾 -->
            <el-card class="posSearch"  v-show="isShow3">
            <el-tabs>
                <!-- 台湾搜索左 -->
               <el-tab-pane label="热门城市" :disabled="true">
                <span  v-for="(item,index) in data2" :key="index" @click="Eurl(item)">{{item}}</span>
               </el-tab-pane>

            </el-tabs>
            </el-card>
            <el-card class="posSearch1"  v-show="isShow4">
            <el-tabs>
                <!-- 台湾右 -->
               <el-tab-pane label="热门城市" :disabled="true">
                <span  v-for="(item,index) in data2" :key="index" @click="Eurr(item)">{{item}}</span>
               </el-tab-pane>

            </el-tabs>
            </el-card>
            
             <!-- 日本 -->
            <el-card class="posSearch"  v-show="isShow5">
            <el-tabs>
                <!-- 日本搜索左 -->
               <el-tab-pane label="热门城市" :disabled="true" style="height: 200px;overflow:auto">
                <span  v-for="(item,index) in data3" :key="index" @click="Eurl(item)">{{item}}</span>
               </el-tab-pane>
               
            </el-tabs>
            </el-card>
            <el-card class="posSearch1"  v-show="isShow6" >
            <el-tabs>
                <!-- 日本搜索右 -->
               <el-tab-pane label="热门城市" :disabled="true" style="height: 200px;overflow:auto">
                <span  v-for="(item,index) in data3" :key="index" @click="Eurr(item)">{{item}}</span>
               </el-tab-pane>

            </el-tabs>
            </el-card>   
            
           </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useColorStore } from '@/store/modules/color';
import { storeToRefs } from 'pinia';
//欧洲数据
let data1=['伦敦','巴黎','巴塞罗那桑特斯','马德里阿托查门','斯特拉斯堡','巴黎东站','少女峰站','巴黎','巴塞罗那','阿姆斯特丹','Brussels','伦敦','米兰（Milan）','苏黎世（Zurich）','因特拉肯（Interlaken）','Madrid','斯特拉斯堡','日内瓦（Geneva）','Basel']
let data2=['台南站','板桥站','桃园站','新竹站','云林站','苗栗站','嘉义站','台中站','彰化站','南港站','台北站','左营站']
let data3=['新大阪','东京',
'博多',
'广岛',
'秋田',
'鹿儿岛中央',
'新函馆北斗',
'京都',
'仙台',
'别府',
'丰后森',
'松任',
'敦贺',
'小松',
'鸟栖',
'芦原温泉',
'河津',
'伊豆热川',
'武生',
'加贺温泉',
'福井（福井）',
'大圣寺',
'安房鸭川',
'天濑',
'日田',
'大分县',
'鲭江',
'伊豆急下田',
'伊豆稻取',
'伊豆高原',
'由布院',
'天王寺',
'宇土',
'新宫',
'神户（兵库）',
'三之宫',
'加古川',
'明石',
'上郡',
'鸟取',
'佐用',
'智头',
'郡家',
'备中高梁',
'仓吉',
'仓敷',
'生山',
'总社',
'新见',
'玉造温泉',
'伯耆大山',
'松江',
'宍道',
'米子',
'安来',
'根雨',
'出云市',
'武雄温泉',
'长崎（长崎）',
'新横滨',
'米原',
'小山',
'一之关',
'东广岛',
'盛冈',
'村山（山形）',
'雫石',
'新花卷',
'三原',
'三岛',
'新尾道',
'挂川',
'新白河',
'奥津轻今别',
'三河安城',
'新岩国',
'田泽湖',
'岩手沼宫内',
'小田原',
'天童',
'北上',
'白石藏王',
'新仓敷',
'热海',
'新富士（静冈）',
'上山温泉',
'大石田',
'静冈',
'西明石',
'木古内',
'岐阜羽岛',
'八户',
'山形',
'滨松',
'厚狭',
'相生（兵库）',
'名古屋',
'樱桃东根',
'七户十和田',
'那须盐原',
'水泽江刺',
'二户',
'丰桥',
'栗驹高原',
'古川',
'新青森',
'品川',
'松本',
'甲府',
'新庄',
'韭崎',
'水户',
'中之条',
'户冢',
'龙王',
'石和温泉',
'胜田',
'山梨市',
'小渊泽',
'武藏小杉',
'尾张一宫',
'中津川',
'磐城',
'角馆',
'盐山',
'岐阜',
'飞騨古川',
'南小谷',
'金泽',
'大月',
'冈谷',
'涩川',
'白马',
'偕乐园',
'日立',
'新泻',
'浦和',
'大船',
'信浓大町',
'下吉田',
'富士见',
'长野原草津口',
'横滨',
'下吕',
'高山',
'盐尻',
'大曲（秋田）',
'河口湖',
'成田机场2 - 3号航站楼(成田特快)',
'富士急乐园',
'富士山',
'新宿',
'涩谷',
'成田机场1号航站楼(成田特快)',
'本庄早稻田',
'越后汤泽',
'上毛高原',
'GALA汤泽',
'熊谷',
'长冈',
'浦佐',
'上野',
'大宫（埼玉）',
'高畠',
'新神户',
'新鸟栖',
'熊本',
'光之森',
'肥后大津',
'丰后荻',
'赤水',
'宫地',
'阿苏',
'丰后竹田',
'中判田',
'三重町',
'绪方',
'和泉砂川',
'和泉府中',
'和歌山',
'箕岛',
'日根野',
'海南',
'网田',
'纪伊田边',
'白滨',
'串本',
'周参见',
'藤并',
'南部',
'汤浅',
'御坊',
'纪伊胜浦',
'太地',
'古座',
'和田山',
'八鹿',
'丰冈（兵库）',
'城崎温泉',
'江原',
'竹田（兵库）',
'生野(兵库）',
'福崎',
'寺前',
'竹野',
'佐津',
'滨坂',
'香住',
'岩美',
'江北（佐贺）',
'肥前滨',
'多良',
'三角']
//接收到底是哪个国家的数据
const prop=defineProps(['country'])
let {color}=storeToRefs(useColorStore())
let from=ref('')
let to=ref('巴黎')
//是否展示搜索提示
let isShow1=ref(false)
let isShow2=ref(false)
let isShow3=ref(false)
let isShow4=ref(false)
let isShow5=ref(false)
let isShow6=ref(false)
const change=()=>{
    const between=from.value
    from.value=to.value
    to.value=between
}
const $emit=defineEmits(['getPos3'])
const start=()=>{
    $emit('getPos3',{start:from.value,end:to.value})
}
const end=()=>{
    $emit('getPos3',{start:from.value,end:to.value})
}
const Eurl=(pos:string)=>{
    from.value=pos
    $emit('getPos3',{start:from.value,end:to.value})
}
const Eurr=(pos:string)=>{
    to.value=pos
    $emit('getPos3',{start:from.value,end:to.value})
}
const Show=()=>{
    if(prop.country==='first'){
        isShow1.value=true
        isShow2.value=false
    }
    else if(prop.country==='second'){
        isShow3.value=true
        isShow4.value=false
    }
      else if(prop.country==='third'){
        isShow5.value=true
        isShow6.value=false
    }
}
const Show1=()=>{
    if(prop.country==='first'){
        isShow2.value=true
        isShow1.value=false
    }
    else if(prop.country==='second'){
        isShow4.value=true
        isShow3.value=false
    }
    else if(prop.country==='third'){
        isShow6.value=true
        isShow5.value=false
    }
}
const stop=(e:any)=>{
e.stopPropagation()
}
onMounted(()=>{
    document.addEventListener('click',()=>{
        isShow1.value=false
        isShow2.value=false
        isShow3.value=false
        isShow4.value=false
        isShow5.value=false
        isShow6.value=false
    })
    if(prop.country==='first'){
        from.value='伦敦'
        to.value='巴黎'
    }
    else if(prop.country==='second'){
        from.value='台北站'
        to.value='左营站'
    }
    else if(prop.country==='third'){
        from.value='东京'
        to.value='大阪'
    }
    $emit('getPos3',{start:from.value,end:to.value})
})
</script>

<style lang="less" scoped>
.container{

    display: flex;
    justify-content: space-between;
    .posSearch{
        position: absolute;
        z-index: 100;
        width: 600px;
        left:0px;
        top:62px;
        span{
            cursor: pointer;
            display: inline-block;
            line-height: 25px;
            margin-right: 16px;
            width: 75px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    .posSearch1{
        position: absolute;
        z-index: 100;
        width: 600px;
        right:-320px;
        top:62px;
        span{
            cursor: pointer;
            display: inline-block;
            line-height: 25px;
            margin-right: 16px;
            width: 75px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    
}

</style>