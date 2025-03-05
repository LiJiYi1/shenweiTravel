<template>
    <div @click="outSearch">
    <div>
      <el-card class="search">
          <div  v-show="posSearch" style="
    border-left:12px solid transparent;
    border-right:12px solid transparent;
    border-top:12px solid transparent;
    border-bottom:12px solid;
    position:absolute;left:52px;top:108px"></div>
    <div  v-show="posSearch1" style="
    border-left:12px solid transparent;
    border-right:12px solid transparent;
    border-top:12px solid transparent;
    border-bottom:12px solid;
    position:absolute;right:52px;top:108px"></div>
    <!-- 单程还是往返 -->
    <el-radio-group v-model="oneOrTwo">
      <el-radio value="1" size="large" :style="{color:color}" @change="isOne">单程</el-radio>
      <el-radio value="2" size="large" :style="{color:color}" @change="isTwo">往返</el-radio>
      <el-radio value="3" size="large" :style="{color:color}" @change="isMore">多程</el-radio>
    </el-radio-group>
    <div v-show='(oneOrTwo!=="3")' :style="{backgroundColor:color,borderRadius:'6px',padding:'10px',height:'50px'}">
            <!-- 对城市提示 -->
    <div class="alert" >
        <p style="font-size: 14px;margin-left:12px">出发城市</p>
        <p style="font-size: 14px;margin-right:12px">到达城市</p>
    </div>
    <!-- 城市选择 -->
    <div class="city" v-show='(oneOrTwo!=="3")' @click="stop">
        <el-input v-model="city1" style="width: 240px;height:40px;font-size:25px" placeholder="城市" @focus="posSearch=true,posSearch1=false"/>
        <!-- 单程往返左搜索提示 -->
         <div class="posSearch" v-show="posSearch">
        <div style="background: gray;padding:10px">热门城市/国家（支持汉字/拼音/英文字母）</div>
            <el-tabs type="border-card">
               <el-tab-pane label="国内" class="hot">
                     <span @click="changeNames('北京')">北京</span>
                     <span @click="changeNames('上海')">上海</span>
                     <span @click="changeNames('广州')">广州</span>
                     <span @click="changeNames('深圳')">深圳</span>
                     <span @click="changeNames('成都')">成都</span>
                     <span @click="changeNames('重庆')">重庆</span>
                     <span @click="changeNames('厦门')">厦门</span>
                     <span @click="changeNames('昆明')">昆明</span>
                     <span @click="changeNames('杭州')">杭州</span>
                     <span @click="changeNames('西安')">西安</span>
                     <span @click="changeNames('武汉')">武汉</span>
                     <span @click="changeNames('长沙')">长沙</span>
                     <span @click="changeNames('南京')">南京</span>
                     <span @click="changeNames('大连')">大连</span>
                     <span @click="changeNames('郑州')">郑州</span>
                     <span @click="changeNames('青岛')">青岛</span>
                     <span @click="changeNames('天津')">天津</span>
                     <span @click="changeNames('三亚')">三亚</span>
                     <span @click="changeNames('海口')">海口</span>
                     <span @click="changeNames('乌鲁木齐')">乌鲁木齐</span>
               </el-tab-pane>
               <el-tab-pane label="国际/中国港澳台" class="hot">
                     <span @click="changeNames('中国香港')">中国香港</span>
                     <span @click="changeNames('中国澳门')">中国澳门</span>
                     <span @click="changeNames('中国台北')">中国台北</span>
                     <span @click="changeNames('新加坡')">新加坡</span>
                     <span @click="changeNames('雅加达')">雅加达</span>
                     <span @click="changeNames('曼谷')">曼谷</span>
                     <span @click="changeNames('')">普吉岛</span>
                     <span @click="changeNames('马尼拉')">马尼拉</span>
                     <span @click="changeNames('东京')">东京</span>
                     <span @click="changeNames('大阪')">大阪</span>
                     <span @click="changeNames('巴厘岛')">巴厘岛</span>
                     <span @click="changeNames('吉隆坡')">吉隆坡</span>
                     <span @click="changeNames('金边')">金边</span>
                     <span @click="changeNames('洛杉矶')">洛杉矶</span>
                     <span @click="changeNames('纽约')">纽约</span>
                     <span @click="changeNames('旧金山')">旧金山</span>
                     <span @click="changeNames('胡志明市')">胡志明市</span>
                     <span @click="changeNames('迪拜')">迪拜</span>
               </el-tab-pane>
               <el-tab-pane label="ABCDE">
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">A</div>
                    <div>
                    <div class="name" @click="changeNames('安庆')">安庆</div>
                    <div class="name" @click="changeNames('阿勒泰')">阿勒泰</div>
                    <div class="name" @click="changeNames('安康')">安康</div>
                    <div class="name" @click="changeNames('阿克苏')">阿克苏</div>
                    <div class="name" @click="changeNames('安顺')">安顺</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">B</div>
                    <div>
                    <div class="name" @click="changeNames('包头')">包头</div>
                    <div class="name" @click="changeNames('北海')">北海</div>
                    <div class="name" @click="changeNames('北京')">北京</div>
                    <div class="name" @click="changeNames('百色')">百色</div>
                    <div class="name" @click="changeNames('保山')">保山</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">C</div>
                    <div>
                     <div class="name" @click="changeNames('常德')">常德</div>
                    <div class="name" @click="changeNames('长白山')">长白山</div>
                    <div class="name" @click="changeNames('成都')">成都</div>
                    <div class="name" @click="changeNames('重庆')">重庆</div>
                    <div class="name" @click="changeNames('长沙')">长沙</div>
                    <div class="name" @click="changeNames('赤峰')">赤峰</div>
                    <div class="name" @click="changeNames('潮州')">潮州</div>
                    <div class="name" @click="changeNames('长治')">长治</div>
                    <div class="name" @click="changeNames('长春')">长春</div>
                    <div class="name" @click="changeNames('常州')">常州</div>
                    <div class="name" @click="changeNames('昌都')">昌都</div>
                    <div class="name" @click="changeNames('朝阳')">朝阳</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">E</div>
                    <div>
                     <div class="name" @click="changeNames('鄂尔多斯')">鄂尔多斯</div>
                    <div class="name" @click="changeNames('恩施')">恩施</div>
                </div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="FGHJ">
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">F</div>
                    <div>
                    <div class="name" @click="changeNames('福州')">福州</div>
                    <div class="name" @click="changeNames('阜阳')">阜阳</div>
            </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">G</div>
                    <div>
                    <div class="name" @click="changeNames('贵阳')">贵阳</div>
                    <div class="name" @click="changeNames('桂林')">桂林</div>
                    <div class="name" @click="changeNames('广州')">广州</div>
                    <div class="name" @click="changeNames('广元')">广元</div>
                    <div class="name" @click="changeNames('格尔木')">格尔木</div>
                    <div class="name" @click="changeNames('固原')">固原</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">H</div>
                    <div>
                     <div class="name" @click="changeNames('呼和浩特')">呼和浩特</div>
                    <div class="name" @click="changeNames('哈密')">哈密</div>
                    <div class="name" @click="changeNames('黑河')">黑河</div>
                    <div class="name" @click="changeNames('海拉尔')">海拉尔</div>
                    <div class="name" @click="changeNames('哈尔滨')">哈尔滨</div>
                    <div class="name" @click="changeNames('海口')">海口</div>
                    <div class="name" @click="changeNames('黄山')">黄山</div>
                    <div class="name" @click="changeNames('杭州')">杭州</div>
                    <div class="name" @click="changeNames('邯郸')">邯郸</div>
                    <div class="name" @click="changeNames('合肥')">合肥</div>
                    <div class="name" @click="changeNames('汉中')">汉中</div>
                    <div class="name" @click="changeNames('淮安')">淮安</div>
                    <div class="name" @click="changeNames('河池')">河池</div>
                    <div class="name" @click="changeNames('和田')">和田</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">J</div>
                    <div>
                     <div class="name" @click="changeNames('九江')">九江</div>
                    <div class="name" @click="changeNames('佳木斯')">佳木斯</div>
                    <div class="name" @click="changeNames('济南')">济南</div>
                    <div class="name" @click="changeNames('济宁')">济宁</div>
                    <div class="name" @click="changeNames('揭阳')">揭阳</div>
                    <div class="name" @click="changeNames('井冈山')">井冈山</div>
                    <div class="name" @click="changeNames('晋江')">晋江</div>
                    <div class="name" @click="changeNames('九寨沟')">九寨沟</div>
                    <div class="name" @click="changeNames('锦州')">锦州</div>
                    <div class="name" @click="changeNames('景德镇')">景德镇</div>
                    <div class="name" @click="changeNames('嘉峪关')">嘉峪关</div></div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="KLMNP">
                      <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">K</div>
                    <div>
                    <div class="name" @click="changeNames('喀什')">喀什</div>
                    <div class="name" @click="changeNames('昆明')">昆明</div>
                    <div class="name" @click="changeNames('康定')">康定</div>
                    <div class="name" @click="changeNames('克拉玛依')">克拉玛依</div>
                    <div class="name" @click="changeNames('库车')">库车</div>
                    <div class="name" @click="changeNames('库尔勒')">库尔勒</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">L</div>
                    <div>
                    <div class="name" @click="changeNames('兰州')">兰州</div>
                    <div class="name" @click="changeNames('洛阳')">洛阳</div>
                    <div class="name" @click="changeNames('丽江')">丽江</div>
                    <div class="name" @click="changeNames('拉萨')">拉萨</div>
                    <div class="name" @click="changeNames('黎平')">黎平</div>
                    <div class="name" @click="changeNames('连城')">连城</div>
                    <div class="name" @click="changeNames('连云港')">连云港</div>
                    <div class="name" @click="changeNames('临沧')">临沧</div>
                    <div class="name" @click="changeNames('临汾')">临汾</div>
                    <div class="name" @click="changeNames('临沂')">临沂</div>
                    <div class="name" @click="changeNames('林芝')">林芝</div>
                    <div class="name" @click="changeNames('六盘水')">六盘水</div>
                    <div class="name" @click="changeNames('柳州')">柳州</div>
                    <div class="name" @click="changeNames('泸州')">泸州</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">M</div>
                    <div>
                     <div class="name" @click="changeNames('牡丹江')">牡丹江</div>
                    <div class="name" @click="changeNames('芒市')">芒市</div>
                    <div class="name" @click="changeNames('满洲里')">满洲里</div>
                    <div class="name" @click="changeNames('绵阳')">绵阳</div>
                    <div class="name" @click="changeNames('梅县')">梅县</div>
                    <div class="name" @click="changeNames('漠河')">漠河</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">N</div>
                    <div>
                    <div class="name" @click="changeNames('那拉提')">那拉提</div>
                    <div class="name" @click="changeNames('南昌')">南昌</div>
                    <div class="name" @click="changeNames('宁波')">宁波</div>
                    <div class="name" @click="changeNames('南京')">南京</div>
                    <div class="name" @click="changeNames('南充')">南充</div>
                    <div class="name" @click="changeNames('南宁')">南宁</div>
                    <div class="name" @click="changeNames('南阳')">南阳</div>
                    <div class="name" @click="changeNames('南通')">南通</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">P</div>
                    <div>
                    <div class="name" @click="changeNames('攀枝花')">攀枝花</div>
                    </div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="QRSTW">
                      <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">Q</div>
                    <div>
                    <div class="name" @click="changeNames('衢州')">衢州</div>
                    <div class="name" @click="changeNames('秦皇岛')">秦皇岛</div>
                    <div class="name" @click="changeNames('庆阳')">庆阳</div>
                    <div class="name" @click="changeNames('齐齐哈尔')">齐齐哈尔</div>
                    <div class="name" @click="changeNames('青岛')">青岛</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">S</div>
                    <div>
                     <div class="name" @click="changeNames('深圳')"> 深圳</div>
                    <div class="name" @click="changeNames('石家庄')">石家庄</div>
                    <div class="name" @click="changeNames('思茅')">思茅</div>
                    <div class="name" @click="changeNames('神农架')">神农架</div>
                    <div class="name" @click="changeNames('邵阳')">邵阳</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">T</div>
                    <div>
                    <div class="name" @click="changeNames('铜仁')">铜仁</div>
                    <div class="name" @click="changeNames('塔城')">塔城</div>
                    <div class="name" @click="changeNames('腾冲')">腾冲</div>
                    <div class="name" @click="changeNames('台州')">台州</div>
                    <div class="name" @click="changeNames('通辽')">通辽</div>
                    <div class="name" @click="changeNames('太原')">太原</div>
                    <div class="name" @click="changeNames('天津')">天津</div>
                    <div class="name" @click="changeNames('泰州')">泰州</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">W</div>
                    <div>
<div class="name" @click="changeNames('武夷山')">武夷山</div>
<div class="name" @click="changeNames('乌兰浩特')">乌兰浩特</div>
<div class="name" @click="changeNames('温州')">温州</div>
<div class="name" @click="changeNames('温州')">温州</div>
<div class="name" @click="changeNames('乌鲁木齐')">乌鲁木齐</div>
<div class="name" @click="changeNames('万州')">万州</div>
<div class="name" @click="changeNames('乌海')">乌海</div>
                    <div class="name" @click="changeNames('威海')">威海</div>
                    <div class="name" @click="changeNames('武汉')">武汉</div>
                    <div class="name" @click="changeNames('梧州')">梧州</div>
                    <div class="name" @click="changeNames('文山')">文山</div>
                    <div class="name" @click="changeNames('无锡')">无锡</div></div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="XYZ">
                 <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">X</div>
                    <div>
                    <div class="name" @click="changeNames('兴义')">兴义</div>
                    <div class="name" @click="changeNames('西昌')">西昌</div>
                    <div class="name" @click="changeNames('厦门')">厦门</div>
                    <div class="name" @click="changeNames('西安')">西安</div>
                    <div class="name" @click="changeNames('襄阳')">襄阳</div>
                    <div class="name" @click="changeNames('西宁')">西宁</div>
                    <div class="name" @click="changeNames('锡林浩特')">锡林浩特</div>
                    <div class="name" @click="changeNames('西双版纳')">西双版纳</div>
                    <div class="name" @click="changeNames('忻州')">忻州</div>
                    <div class="name" @click="changeNames('徐州')">徐州</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">Y</div>
                    <div>
                    <div class="name" @click="changeNames('义乌')">义乌</div>
                    <div class="name" @click="changeNames('永州')">永州</div>
                    <div class="name" @click="changeNames('榆林')">榆林</div>
                    <div class="name" @click="changeNames('延安')">延安</div>
                    <div class="name" @click="changeNames('运城')">运城</div>
                    <div class="name" @click="changeNames('烟台')">烟台</div>
                    <div class="name" @click="changeNames('银川')">银川</div>
                    <div class="name" @click="changeNames('宜昌')">宜昌</div>
                    <div class="name" @click="changeNames('宜宾')">宜宾</div>
                    <div class="name" @click="changeNames('盐城')">盐城</div>
                    <div class="name" @click="changeNames('延吉')">延吉</div>
                    <div class="name" @click="changeNames('伊宁')">伊宁</div>
                    <div class="name" @click="changeNames('扬州')">扬州</div>
                    <div class="name" @click="changeNames('玉树')">玉树</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">Z</div>
                    <div>
                     <div class="name" @click="changeNames('珠海')">珠海</div>
                    <div class="name" @click="changeNames('昭通')">昭通</div>
                    <div class="name" @click="changeNames('张家界')">张家界</div>
                    <div class="name" @click="changeNames('舟山')">舟山</div>
                    <div class="name" @click="changeNames('郑州')">郑州</div>
                    <div class="name" @click="changeNames('中卫')">中卫</div>
                    <div class="name" @click="changeNames('芷江')">芷江</div>
                    <div class="name" @click="changeNames('湛江')">湛江</div>
                    <div class="name" @click="changeNames('遵义新舟')">遵义新舟</div>
                    <div class="name" @click="changeNames('遵义茅台')">遵义茅台</div>
                </div>
                </div>

               </el-tab-pane>
            </el-tabs>
        </div>
        <img src="@/assets/air/fly.png" alt="" style="width: 40px;height:40px" @click="change" >  
         <!--单程往返右搜索提示 -->
         <div class="posSearch1" v-show="posSearch1">
        <div style="background: gray;padding:10px">热门城市/国家（支持汉字/拼音/英文字母）</div>
            <el-tabs type="border-card">
                <el-tab-pane label="国际/中国港澳台" style="line-height: 50px;">
                     <div class="name" @click="changeNames1('中国香港')">中国香港</div>
                     <div class="name" @click="changeNames1('中国澳门')">中国澳门</div>
                     <div class="name" @click="changeNames1('中国台北')">中国台北</div>
                     <div class="name" @click="changeNames1('新加坡')">新加坡</div>
                     <div class="name" @click="changeNames1('雅加达')">雅加达</div>
                     <div class="name" @click="changeNames1('曼谷')">曼谷</div>
                     <div class="name" @click="changeNames1('')">普吉岛</div>
                     <div class="name" @click="changeNames1('马尼拉')">马尼拉</div>
                     <div class="name" @click="changeNames1('东京')">东京</div>
                     <div class="name" @click="changeNames1('大阪')">大阪</div>
                     <div class="name" @click="changeNames1('巴厘岛')">巴厘岛</div>
                     <div class="name" @click="changeNames1('吉隆坡')">吉隆坡</div>
                     <div class="name" @click="changeNames1('金边')">金边</div>
                     <div class="name" @click="changeNames1('洛杉矶')">洛杉矶</div>
                     <div class="name" @click="changeNames1('纽约')">纽约</div>
                     <div class="name" @click="changeNames1('旧金山')">旧金山</div>
                     <div class="name" @click="changeNames1('胡志明市')">胡志明市</div>
                     <div class="name" @click="changeNames1('迪拜')">迪拜</div>
               </el-tab-pane>
               <el-tab-pane label="亚洲/大洋洲" style="line-height: 50px;">
                     <div class="name" @click="changeNames1('中国香港')">中国香港</div>
                    <div class="name" @click="changeNames1('中国台北')">中国台北</div>
                    <div class="name" @click="changeNames1('中国高雄')">中国高雄</div>
                    <div class="name" @click="changeNames1('新加坡')">新加坡</div>
                    <div class="name" @click="changeNames1('首尔')">首尔</div>
                    <div class="name" @click="changeNames1('济州岛')">济州岛</div>
                    <div class="name" @click="changeNames1('曼谷')">曼谷</div>
                    <div class="name" @click="changeNames1('普吉岛')">普吉岛</div>
                    <div class="name" @click="changeNames1('釜山')">釜山</div>
                    <div class="name" @click="changeNames1('东京')">东京</div>
                    <div class="name" @click="changeNames1('大阪')">大阪</div>
                    <div class="name" @click="changeNames1('孟买')">孟买</div>
                    <div class="name" @click="changeNames1('巴厘岛')">巴厘岛</div>
                    <div class="name" @click="changeNames1('吉隆坡')">吉隆坡</div>
                    <div class="name" @click="changeNames1('金边')">金边</div>
                    <div class="name" @click="changeNames1('清迈')">清迈</div>
                    <div class="name" @click="changeNames1('苏梅岛')">苏梅岛</div>
                    <div class="name" @click="changeNames1('雅加达')">雅加达</div>
                    <div class="name" @click="changeNames1('马尼拉')">马尼拉</div>
                    <div class="name" @click="changeNames1('暹粒')">暹粒</div>
                    <div class="name" @click="changeNames1('悉尼')">悉尼</div>
                    <div class="name" @click="changeNames1('孟买')">孟买</div>
                    <div class="name" @click="changeNames1('乌兰巴托')">乌兰巴托</div>
                    <div class="name" @click="changeNames1('伊斯坦布尔')">伊斯坦布尔</div>
                    <div class="name" @click="changeNames1('札幌')">札幌</div>
                    <div class="name" @click="changeNames1('名古屋')">名古屋</div>
                    <div class="name" @click="changeNames1('河内')">河内</div>
                    <div class="name" @click="changeNames1('马累')">马累</div>
                    <div class="name" @click="changeNames1('福冈')">福冈</div>
                    <div class="name" @click="changeNames1('墨尔本')">墨尔本</div>
                    <div class="name" @click="changeNames1('奥克兰')">奥克兰</div>
                    <div class="name" @click="changeNames1('布里斯班')">布里斯班</div>
                    <div class="name" @click="changeNames1('珀斯')">珀斯</div>
                    <div class="name" @click="changeNames1('阿德莱德')">阿德莱德</div>
                    <div class="name" @click="changeNames1('惠林顿')">惠林顿</div>
                    <div class="name" @click="changeNames1('堪培拉')">堪培拉</div>
                    <div class="name" @click="changeNames1('凯恩斯')">凯恩斯</div>
                    <div class="name" @click="changeNames1('南迪')">南迪</div>
                    <div class="name" @click="changeNames1('黄金海岸')">黄金海岸</div>
                    <div class="name" @click="changeNames1('帕皮提')">帕皮提</div>
               </el-tab-pane>
               <el-tab-pane label="欧洲" style="line-height: 50px;">
                    <div class="name" @click="changeNames1('布达佩斯')">布达佩斯</div>
                    <div class="name" @click="changeNames1('基辅')">基辅</div>
                    <div class="name" @click="changeNames1('雅典')">雅典</div>
                    <div class="name" @click="changeNames1('维也纳')">维也纳</div>
                    <div class="name" @click="changeNames1('圣彼得堡')">圣彼得堡</div>
                    <div class="name" @click="changeNames1('日内瓦')">日内瓦</div>
                    <div class="name" @click="changeNames1('赫尔辛基')">赫尔辛基</div>
                    <div class="name" @click="changeNames1('马德里')">马德里</div>
                     <div class="name" @click="changeNames1('曼彻斯特')">曼彻斯特</div>
                    <div class="name" @click="changeNames1('里昂')">里昂</div>
                    <div class="name" @click="changeNames1('汉堡')">汉堡</div>
                    <div class="name" @click="changeNames1('杜塞尔多夫')">杜塞尔多夫</div>
                    <div class="name" @click="changeNames1('布鲁塞尔')">布鲁塞尔</div>
                    <div class="name" @click="changeNames1('哥本哈根')">哥本哈根</div>
                    <div class="name" @click="changeNames1('罗马')">罗马</div>
                    <div class="name" @click="changeNames1('莫斯科')">莫斯科</div>
                    <div class="name" @click="changeNames1('米兰')">米兰</div>
                    <div class="name" @click="changeNames1('柏林')">柏林</div>
                    <div class="name" @click="changeNames1('巴塞罗那')">巴塞罗那</div>
                    <div class="name" @click="changeNames1('斯德哥尔摩')">斯德哥尔摩</div>
                    <div class="name" @click="changeNames1('阿姆斯特丹')">阿姆斯特丹</div>
                    <div class="name" @click="changeNames1('慕尼黑')">慕尼黑</div>
                     <div class="name" @click="changeNames1('法兰克福')">法兰克福</div>
                    <div class="name" @click="changeNames1('巴黎')">巴黎</div>
                    <div class="name" @click="changeNames1('伦敦')">伦敦</div>
               </el-tab-pane>
               <el-tab-pane label="美洲" style="line-height: 50px;">
                    <div class="name" @click="changeNames1('达拉斯')">达拉斯</div>
                    <div class="name" @click="changeNames1('夏威夷')">夏威夷</div>
                    <div class="name" @click="changeNames1('蒙特利尔')">蒙特利尔</div>
                    <div class="name" @click="changeNames1('布宜诺斯')">布宜诺斯</div>
                    <div class="name" @click="changeNames1('埃德蒙顿')">埃德蒙顿</div>
                    <div class="name" @click="changeNames1('波特兰')">波特兰</div>
                    <div class="name" @click="changeNames1('奥兰多')">奥兰多</div>
                    <div class="name" @click="changeNames1('丹佛')">丹佛</div>
                    <div class="name" @click="changeNames1('迈阿密')">迈阿密</div>
                    <div class="name" @click="changeNames1('拉斯维加斯')">拉斯维加斯</div>
                    <div class="name" @click="changeNames1('墨西哥城')">墨西哥城</div>
                    <div class="name" @click="changeNames1('渥太华')">渥太华</div>
                    <div class="name" @click="changeNames1('圣保罗')">圣保罗</div>
                    <div class="name" @click="changeNames1('费城')">费城</div>
                    <div class="name" @click="changeNames1('纽约')">纽约</div>
                    <div class="name" @click="changeNames1('休斯顿')">休斯顿</div>
                    <div class="name" @click="changeNames1('亚特兰大')">亚特兰大</div>
                    <div class="name" @click="changeNames1('底特律')">底特律</div>
                    <div class="name" @click="changeNames1('波士顿')">波士顿</div>
                    <div class="name" @click="changeNames1('华盛顿')">华盛顿</div>
                     <div class="name" @click="changeNames1('西雅图')">西雅图</div>
                    <div class="name" @click="changeNames1('多伦多')">多伦多</div>
                    <div class="name" @click="changeNames1('温哥华')">温哥华</div>
                    <div class="name" @click="changeNames1('芝加哥')">芝加哥</div>
                    <div class="name" @click="changeNames1('旧金山')">旧金山</div>
                    <div class="name" @click="changeNames1('洛杉矶')">洛杉矶</div>
               
               </el-tab-pane>
               <el-tab-pane label="非洲" style="line-height: 50px;">
                    <div class="name" @click="changeNames1('开罗')">开罗</div>
                    <div class="name" @click="changeNames1('约翰内斯堡')">约翰内斯堡</div>
                    <div class="name" @click="changeNames1('开普敦')">开普敦</div>
                    <div class="name" @click="changeNames1('内罗毕')">内罗毕</div>
                    <div class="name" @click="changeNames1('拉各斯')">拉各斯</div>
                      <div class="name" @click="changeNames1('马普托')">马普托</div>
                    <div class="name" @click="changeNames1('阿比让')">阿比让</div>
                    <div class="name" @click="changeNames1('毛里求斯')">毛里求斯</div>
                    <div class="name" @click="changeNames1('罗安达')">罗安达</div>
                    <div class="name" @click="changeNames1('喀土穆')">喀土穆</div>
                    <div class="name" @click="changeNames1('阿克拉')">阿克拉</div>
                    <div class="name" @click="changeNames1('阿尔及尔')">阿尔及尔</div>
               
                         <div class="name" @click="changeNames1('卡萨布兰卡')">卡萨布兰卡</div>
                    <div class="name" @click="changeNames1('德班')">德班</div>
                    <div class="name" @click="changeNames1('突尼斯')">突尼斯</div>
                    <div class="name" @click="changeNames1('卢萨卡')">卢萨卡</div>
                    <div class="name" @click="changeNames1('哈拉雷')">哈拉雷</div>
               </el-tab-pane>
               <el-tab-pane label="国内热门" style="line-height: 50px;">
                     <div class="name" @click="changeNames1('北京')">北京</div>
                     <div class="name" @click="changeNames1('上海')">上海</div>
                     <div class="name" @click="changeNames1('广州')">广州</div>
                     <div class="name" @click="changeNames1('深圳')">深圳</div>
                     <div class="name" @click="changeNames1('成都')">成都</div>
                     <div class="name" @click="changeNames1('重庆')">重庆</div>
                     <div class="name" @click="changeNames1('厦门')">厦门</div>
                     <div class="name" @click="changeNames1('昆明')">昆明</div>
                     <div class="name" @click="changeNames1('杭州')">杭州</div>
                     <div class="name" @click="changeNames1('西安')">西安</div>
                     <div class="name" @click="changeNames1('武汉')">武汉</div>
                     <div class="name" @click="changeNames1('长沙')">长沙</div>
                     <div class="name" @click="changeNames1('南京')">南京</div>
                     <div class="name" @click="changeNames1('大连')">大连</div>
                     <div class="name" @click="changeNames1('郑州')">郑州</div>
                     <div class="name" @click="changeNames1('青岛')">青岛</div>
                     <div class="name" @click="changeNames1('天津')">天津</div>
                     <div class="name" @click="changeNames1('三亚')">三亚</div>
                     <div class="name" @click="changeNames1('海口')">海口</div>
                     <div class="name" @click="changeNames1('乌鲁木齐')">乌鲁木齐</div>
             

               </el-tab-pane>
            </el-tabs>
         </div>
        <el-input v-model="city2" style="width: 240px; height:40px;font-size:25px;direction:rtl" placeholder="城市" @focus="posSearch1=true,posSearch=false"/>
    </div>
    </div>
    <!-- 底部的日期选择 -->
    <div  v-show='(oneOrTwo!=="3")' :style="{backgroundColor:color,borderRadius:'6px',padding:'10px',marginTop:'20px'}">
    <!-- 对底部日期的提示 -->
    <div class="alert1">
        <p style="font-size: 14px;margin-left:14px">出发日期</p>
        <p style="font-size: 14px;margin-right:14px">返程日期</p>
    </div>
    <div class="bt" v-show='(oneOrTwo!=="3")'>
        <el-date-picker
        v-model="day1"
        type="date"
        size="large"
        style="width: 300px; height:60px;font-size:32px"
        :editable="false"
        :disabled-date="disablePastDates"
        :clearable="false"
        />
         <el-date-picker
        v-model="day2"
        type="date"
        placeholder="添加返程"
        size="large"
        style="width: 240px; height:60px;font-size:32px"
        :disabled-date="disablePastDates1"
        @change="notOne"
        :editable="false"
        :clearable="false"
      />
        </div>
    </div>

    <!-- 多程 -->
     <div class="multi" v-show='(oneOrTwo==="3")'>
    <!-- 第一程 -->
    <div class="first" >
        <div style="margin-top:8px;font-size:16px;width:10px;height:16px;padding: 18px;border:1px solid;border-radius:10px">1</div>
                <!-- 城市选择 -->
    <div class="City" @click="stop" :style="{backgroundColor:color,borderRadius:'6px',padding:'10px'}">
    <!-- 多程1左搜索 -->
    <div class="posSearch2" v-show="posSearch2">
        <div style="background: gray;padding:10px">热门城市/国家（支持汉字/拼音/英文字母）</div>
            <el-tabs type="border-card">
               <el-tab-pane label="国内" class="hot">
                     <span @click="changeNames2('北京')">北京</span>
                     <span @click="changeNames2('上海')">上海</span>
                     <span @click="changeNames2('广州')">广州</span>
                     <span @click="changeNames2('深圳')">深圳</span>
                     <span @click="changeNames2('成都')">成都</span>
                     <span @click="changeNames2('重庆')">重庆</span>
                     <span @click="changeNames2('厦门')">厦门</span>
                     <span @click="changeNames2('昆明')">昆明</span>
                     <span @click="changeNames2('杭州')">杭州</span>
                     <span @click="changeNames2('西安')">西安</span>
                     <span @click="changeNames2('武汉')">武汉</span>
                     <span @click="changeNames2('长沙')">长沙</span>
                     <span @click="changeNames2('南京')">南京</span>
                     <span @click="changeNames2('大连')">大连</span>
                     <span @click="changeNames2('郑州')">郑州</span>
                     <span @click="changeNames2('青岛')">青岛</span>
                     <span @click="changeNames2('天津')">天津</span>
                     <span @click="changeNames2('三亚')">三亚</span>
                     <span @click="changeNames2('海口')">海口</span>
                     <span @click="changeNames2('乌鲁木齐')">乌鲁木齐</span>
               </el-tab-pane>
               <el-tab-pane label="国际/中国港澳台" class="hot">
                     <span @click="changeNames2('中国香港')">中国香港</span>
                     <span @click="changeNames2('中国澳门')">中国澳门</span>
                     <span @click="changeNames2('中国台北')">中国台北</span>
                     <span @click="changeNames2('新加坡')">新加坡</span>
                     <span @click="changeNames2('雅加达')">雅加达</span>
                     <span @click="changeNames2('曼谷')">曼谷</span>
                     <span @click="changeNames2('')">普吉岛</span>
                     <span @click="changeNames2('马尼拉')">马尼拉</span>
                     <span @click="changeNames2('东京')">东京</span>
                     <span @click="changeNames2('大阪')">大阪</span>
                     <span @click="changeNames2('巴厘岛')">巴厘岛</span>
                     <span @click="changeNames2('吉隆坡')">吉隆坡</span>
                     <span @click="changeNames2('金边')">金边</span>
                     <span @click="changeNames2('洛杉矶')">洛杉矶</span>
                     <span @click="changeNames2('纽约')">纽约</span>
                     <span @click="changeNames2('旧金山')">旧金山</span>
                     <span @click="changeNames2('胡志明市')">胡志明市</span>
                     <span @click="changeNames2('迪拜')">迪拜</span>
               </el-tab-pane>
               <el-tab-pane label="ABCDE">
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">A</div>
                    <div>
                    <div class="name" @click="changeNames2('安庆')">安庆</div>
                    <div class="name" @click="changeNames2('阿勒泰')">阿勒泰</div>
                    <div class="name" @click="changeNames2('安康')">安康</div>
                    <div class="name" @click="changeNames2('阿克苏')">阿克苏</div>
                    <div class="name" @click="changeNames2('安顺')">安顺</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">B</div>
                    <div>
                    <div class="name" @click="changeNames2('包头')">包头</div>
                    <div class="name" @click="changeNames2('北海')">北海</div>
                    <div class="name" @click="changeNames2('北京')">北京</div>
                    <div class="name" @click="changeNames2('百色')">百色</div>
                    <div class="name" @click="changeNames2('保山')">保山</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">C</div>
                    <div>
                     <div class="name" @click="changeNames2('常德')">常德</div>
                    <div class="name" @click="changeNames2('长白山')">长白山</div>
                    <div class="name" @click="changeNames2('成都')">成都</div>
                    <div class="name" @click="changeNames2('重庆')">重庆</div>
                    <div class="name" @click="changeNames2('长沙')">长沙</div>
                    <div class="name" @click="changeNames2('赤峰')">赤峰</div>
                    <div class="name" @click="changeNames2('潮州')">潮州</div>
                    <div class="name" @click="changeNames2('长治')">长治</div>
                    <div class="name" @click="changeNames2('长春')">长春</div>
                    <div class="name" @click="changeNames2('常州')">常州</div>
                    <div class="name" @click="changeNames2('昌都')">昌都</div>
                    <div class="name" @click="changeNames2('朝阳')">朝阳</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">E</div>
                    <div>
                     <div class="name" @click="changeNames2('鄂尔多斯')">鄂尔多斯</div>
                    <div class="name" @click="changeNames2('恩施')">恩施</div>
                </div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="FGHJ">
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">F</div>
                    <div>
                    <div class="name" @click="changeNames2('福州')">福州</div>
                    <div class="name" @click="changeNames2('阜阳')">阜阳</div>
            </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">G</div>
                    <div>
                    <div class="name" @click="changeNames2('贵阳')">贵阳</div>
                    <div class="name" @click="changeNames2('桂林')">桂林</div>
                    <div class="name" @click="changeNames2('广州')">广州</div>
                    <div class="name" @click="changeNames2('广元')">广元</div>
                    <div class="name" @click="changeNames2('格尔木')">格尔木</div>
                    <div class="name" @click="changeNames2('固原')">固原</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">H</div>
                    <div>
                     <div class="name" @click="changeNames2('呼和浩特')">呼和浩特</div>
                    <div class="name" @click="changeNames2('哈密')">哈密</div>
                    <div class="name" @click="changeNames2('黑河')">黑河</div>
                    <div class="name" @click="changeNames2('海拉尔')">海拉尔</div>
                    <div class="name" @click="changeNames2('哈尔滨')">哈尔滨</div>
                    <div class="name" @click="changeNames2('海口')">海口</div>
                    <div class="name" @click="changeNames2('黄山')">黄山</div>
                    <div class="name" @click="changeNames2('杭州')">杭州</div>
                    <div class="name" @click="changeNames2('邯郸')">邯郸</div>
                    <div class="name" @click="changeNames2('合肥')">合肥</div>
                    <div class="name" @click="changeNames2('汉中')">汉中</div>
                    <div class="name" @click="changeNames2('淮安')">淮安</div>
                    <div class="name" @click="changeNames2('河池')">河池</div>
                    <div class="name" @click="changeNames2('和田')">和田</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">J</div>
                    <div>
                     <div class="name" @click="changeNames2('九江')">九江</div>
                    <div class="name" @click="changeNames2('佳木斯')">佳木斯</div>
                    <div class="name" @click="changeNames2('济南')">济南</div>
                    <div class="name" @click="changeNames2('济宁')">济宁</div>
                    <div class="name" @click="changeNames2('揭阳')">揭阳</div>
                    <div class="name" @click="changeNames2('井冈山')">井冈山</div>
                    <div class="name" @click="changeNames2('晋江')">晋江</div>
                    <div class="name" @click="changeNames2('九寨沟')">九寨沟</div>
                    <div class="name" @click="changeNames2('锦州')">锦州</div>
                    <div class="name" @click="changeNames2('景德镇')">景德镇</div>
                    <div class="name" @click="changeNames2('嘉峪关')">嘉峪关</div></div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="KLMNP">
                      <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">K</div>
                    <div>
                    <div class="name" @click="changeNames2('喀什')">喀什</div>
                    <div class="name" @click="changeNames2('昆明')">昆明</div>
                    <div class="name" @click="changeNames2('康定')">康定</div>
                    <div class="name" @click="changeNames2('克拉玛依')">克拉玛依</div>
                    <div class="name" @click="changeNames2('库车')">库车</div>
                    <div class="name" @click="changeNames2('库尔勒')">库尔勒</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">L</div>
                    <div>
                    <div class="name" @click="changeNames2('兰州')">兰州</div>
                    <div class="name" @click="changeNames2('洛阳')">洛阳</div>
                    <div class="name" @click="changeNames2('丽江')">丽江</div>
                    <div class="name" @click="changeNames2('拉萨')">拉萨</div>
                    <div class="name" @click="changeNames2('黎平')">黎平</div>
                    <div class="name" @click="changeNames2('连城')">连城</div>
                    <div class="name" @click="changeNames2('连云港')">连云港</div>
                    <div class="name" @click="changeNames2('临沧')">临沧</div>
                    <div class="name" @click="changeNames2('临汾')">临汾</div>
                    <div class="name" @click="changeNames2('临沂')">临沂</div>
                    <div class="name" @click="changeNames2('林芝')">林芝</div>
                    <div class="name" @click="changeNames2('六盘水')">六盘水</div>
                    <div class="name" @click="changeNames2('柳州')">柳州</div>
                    <div class="name" @click="changeNames2('泸州')">泸州</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">M</div>
                    <div>
                     <div class="name" @click="changeNames2('牡丹江')">牡丹江</div>
                    <div class="name" @click="changeNames2('芒市')">芒市</div>
                    <div class="name" @click="changeNames2('满洲里')">满洲里</div>
                    <div class="name" @click="changeNames2('绵阳')">绵阳</div>
                    <div class="name" @click="changeNames2('梅县')">梅县</div>
                    <div class="name" @click="changeNames2('漠河')">漠河</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">N</div>
                    <div>
                    <div class="name" @click="changeNames2('那拉提')">那拉提</div>
                    <div class="name" @click="changeNames2('南昌')">南昌</div>
                    <div class="name" @click="changeNames2('宁波')">宁波</div>
                    <div class="name" @click="changeNames2('南京')">南京</div>
                    <div class="name" @click="changeNames2('南充')">南充</div>
                    <div class="name" @click="changeNames2('南宁')">南宁</div>
                    <div class="name" @click="changeNames2('南阳')">南阳</div>
                    <div class="name" @click="changeNames2('南通')">南通</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">P</div>
                    <div>
                    <div class="name" @click="changeNames2('攀枝花')">攀枝花</div>
                    </div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="QRSTW">
                      <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">Q</div>
                    <div>
                    <div class="name" @click="changeNames2('衢州')">衢州</div>
                    <div class="name" @click="changeNames2('秦皇岛')">秦皇岛</div>
                    <div class="name" @click="changeNames2('庆阳')">庆阳</div>
                    <div class="name" @click="changeNames2('齐齐哈尔')">齐齐哈尔</div>
                    <div class="name" @click="changeNames2('青岛')">青岛</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">S</div>
                    <div>
                     <div class="name" @click="changeNames2('深圳')"> 深圳</div>
                    <div class="name" @click="changeNames2('石家庄')">石家庄</div>
                    <div class="name" @click="changeNames2('思茅')">思茅</div>
                    <div class="name" @click="changeNames2('神农架')">神农架</div>
                    <div class="name" @click="changeNames2('邵阳')">邵阳</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">T</div>
                    <div>
                    <div class="name" @click="changeNames2('铜仁')">铜仁</div>
                    <div class="name" @click="changeNames2('塔城')">塔城</div>
                    <div class="name" @click="changeNames2('腾冲')">腾冲</div>
                    <div class="name" @click="changeNames2('台州')">台州</div>
                    <div class="name" @click="changeNames2('通辽')">通辽</div>
                    <div class="name" @click="changeNames2('太原')">太原</div>
                    <div class="name" @click="changeNames2('天津')">天津</div>
                    <div class="name" @click="changeNames2('泰州')">泰州</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">W</div>
                    <div>
<div class="name" @click="changeNames2('武夷山')">武夷山</div>
<div class="name" @click="changeNames2('乌兰浩特')">乌兰浩特</div>
<div class="name" @click="changeNames2('温州')">温州</div>
<div class="name" @click="changeNames2('温州')">温州</div>
<div class="name" @click="changeNames2('乌鲁木齐')">乌鲁木齐</div>
<div class="name" @click="changeNames2('万州')">万州</div>
<div class="name" @click="changeNames2('乌海')">乌海</div>
                    <div class="name" @click="changeNames2('威海')">威海</div>
                    <div class="name" @click="changeNames2('武汉')">武汉</div>
                    <div class="name" @click="changeNames2('梧州')">梧州</div>
                    <div class="name" @click="changeNames2('文山')">文山</div>
                    <div class="name" @click="changeNames2('无锡')">无锡</div></div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="XYZ">
                 <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">X</div>
                    <div>
                    <div class="name" @click="changeNames2('兴义')">兴义</div>
                    <div class="name" @click="changeNames2('西昌')">西昌</div>
                    <div class="name" @click="changeNames2('厦门')">厦门</div>
                    <div class="name" @click="changeNames2('西安')">西安</div>
                    <div class="name" @click="changeNames2('襄阳')">襄阳</div>
                    <div class="name" @click="changeNames2('西宁')">西宁</div>
                    <div class="name" @click="changeNames2('锡林浩特')">锡林浩特</div>
                    <div class="name" @click="changeNames2('西双版纳')">西双版纳</div>
                    <div class="name" @click="changeNames2('忻州')">忻州</div>
                    <div class="name" @click="changeNames2('徐州')">徐州</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">Y</div>
                    <div>
                    <div class="name" @click="changeNames2('义乌')">义乌</div>
                    <div class="name" @click="changeNames2('永州')">永州</div>
                    <div class="name" @click="changeNames2('榆林')">榆林</div>
                    <div class="name" @click="changeNames2('延安')">延安</div>
                    <div class="name" @click="changeNames2('运城')">运城</div>
                    <div class="name" @click="changeNames2('烟台')">烟台</div>
                    <div class="name" @click="changeNames2('银川')">银川</div>
                    <div class="name" @click="changeNames2('宜昌')">宜昌</div>
                    <div class="name" @click="changeNames2('宜宾')">宜宾</div>
                    <div class="name" @click="changeNames2('盐城')">盐城</div>
                    <div class="name" @click="changeNames2('延吉')">延吉</div>
                    <div class="name" @click="changeNames2('伊宁')">伊宁</div>
                    <div class="name" @click="changeNames2('扬州')">扬州</div>
                    <div class="name" @click="changeNames2('玉树')">玉树</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">Z</div>
                    <div>
                     <div class="name" @click="changeNames2('珠海')">珠海</div>
                    <div class="name" @click="changeNames2('昭通')">昭通</div>
                    <div class="name" @click="changeNames2('张家界')">张家界</div>
                    <div class="name" @click="changeNames2('舟山')">舟山</div>
                    <div class="name" @click="changeNames2('郑州')">郑州</div>
                    <div class="name" @click="changeNames2('中卫')">中卫</div>
                    <div class="name" @click="changeNames2('芷江')">芷江</div>
                    <div class="name" @click="changeNames2('湛江')">湛江</div>
                    <div class="name" @click="changeNames2('遵义新舟')">遵义新舟</div>
                    <div class="name" @click="changeNames2('遵义茅台')">遵义茅台</div>
                </div>
                </div>

               </el-tab-pane>
            </el-tabs>
    </div>
    <!-- 多程1右搜索 -->
    <div class="posSearch3" v-show="posSearch3">
        <div style="background: gray;padding:10px">热门城市/国家（支持汉字/拼音/英文字母）</div>
            <el-tabs type="border-card">
                <el-tab-pane label="国际/中国港澳台" style="line-height: 50px;">
                     <div class="name" @click="changeNames3('中国香港')">中国香港</div>
                     <div class="name" @click="changeNames3('中国澳门')">中国澳门</div>
                     <div class="name" @click="changeNames3('中国台北')">中国台北</div>
                     <div class="name" @click="changeNames3('新加坡')">新加坡</div>
                     <div class="name" @click="changeNames3('雅加达')">雅加达</div>
                     <div class="name" @click="changeNames3('曼谷')">曼谷</div>
                     <div class="name" @click="changeNames3('')">普吉岛</div>
                     <div class="name" @click="changeNames3('马尼拉')">马尼拉</div>
                     <div class="name" @click="changeNames3('东京')">东京</div>
                     <div class="name" @click="changeNames3('大阪')">大阪</div>
                     <div class="name" @click="changeNames3('巴厘岛')">巴厘岛</div>
                     <div class="name" @click="changeNames3('吉隆坡')">吉隆坡</div>
                     <div class="name" @click="changeNames3('金边')">金边</div>
                     <div class="name" @click="changeNames3('洛杉矶')">洛杉矶</div>
                     <div class="name" @click="changeNames3('纽约')">纽约</div>
                     <div class="name" @click="changeNames3('旧金山')">旧金山</div>
                     <div class="name" @click="changeNames3('胡志明市')">胡志明市</div>
                     <div class="name" @click="changeNames3('迪拜')">迪拜</div>
               </el-tab-pane>
               <el-tab-pane label="亚洲/大洋洲" style="line-height: 50px;">
                     <div class="name" @click="changeNames3('中国香港')">中国香港</div>
                    <div class="name" @click="changeNames3('中国台北')">中国台北</div>
                    <div class="name" @click="changeNames3('中国高雄')">中国高雄</div>
                    <div class="name" @click="changeNames3('新加坡')">新加坡</div>
                    <div class="name" @click="changeNames3('首尔')">首尔</div>
                    <div class="name" @click="changeNames3('济州岛')">济州岛</div>
                    <div class="name" @click="changeNames3('曼谷')">曼谷</div>
                    <div class="name" @click="changeNames3('普吉岛')">普吉岛</div>
                    <div class="name" @click="changeNames3('釜山')">釜山</div>
                    <div class="name" @click="changeNames3('东京')">东京</div>
                    <div class="name" @click="changeNames3('大阪')">大阪</div>
                    <div class="name" @click="changeNames3('孟买')">孟买</div>
                    <div class="name" @click="changeNames3('巴厘岛')">巴厘岛</div>
                    <div class="name" @click="changeNames3('吉隆坡')">吉隆坡</div>
                    <div class="name" @click="changeNames3('金边')">金边</div>
                    <div class="name" @click="changeNames3('清迈')">清迈</div>
                    <div class="name" @click="changeNames3('苏梅岛')">苏梅岛</div>
                    <div class="name" @click="changeNames3('雅加达')">雅加达</div>
                    <div class="name" @click="changeNames3('马尼拉')">马尼拉</div>
                    <div class="name" @click="changeNames3('暹粒')">暹粒</div>
                    <div class="name" @click="changeNames3('悉尼')">悉尼</div>
                    <div class="name" @click="changeNames3('孟买')">孟买</div>
                    <div class="name" @click="changeNames3('乌兰巴托')">乌兰巴托</div>
                    <div class="name" @click="changeNames3('伊斯坦布尔')">伊斯坦布尔</div>
                    <div class="name" @click="changeNames3('札幌')">札幌</div>
                    <div class="name" @click="changeNames3('名古屋')">名古屋</div>
                    <div class="name" @click="changeNames3('河内')">河内</div>
                    <div class="name" @click="changeNames3('马累')">马累</div>
                    <div class="name" @click="changeNames3('福冈')">福冈</div>
                    <div class="name" @click="changeNames3('墨尔本')">墨尔本</div>
                    <div class="name" @click="changeNames3('奥克兰')">奥克兰</div>
                    <div class="name" @click="changeNames3('布里斯班')">布里斯班</div>
                    <div class="name" @click="changeNames3('珀斯')">珀斯</div>
                    <div class="name" @click="changeNames3('阿德莱德')">阿德莱德</div>
                    <div class="name" @click="changeNames3('惠林顿')">惠林顿</div>
                    <div class="name" @click="changeNames3('堪培拉')">堪培拉</div>
                    <div class="name" @click="changeNames3('凯恩斯')">凯恩斯</div>
                    <div class="name" @click="changeNames3('南迪')">南迪</div>
                    <div class="name" @click="changeNames3('黄金海岸')">黄金海岸</div>
                    <div class="name" @click="changeNames3('帕皮提')">帕皮提</div>
               </el-tab-pane>
               <el-tab-pane label="欧洲" style="line-height: 50px;">
                    <div class="name" @click="changeNames3('布达佩斯')">布达佩斯</div>
                    <div class="name" @click="changeNames3('基辅')">基辅</div>
                    <div class="name" @click="changeNames3('雅典')">雅典</div>
                    <div class="name" @click="changeNames3('维也纳')">维也纳</div>
                    <div class="name" @click="changeNames3('圣彼得堡')">圣彼得堡</div>
                    <div class="name" @click="changeNames3('日内瓦')">日内瓦</div>
                    <div class="name" @click="changeNames3('赫尔辛基')">赫尔辛基</div>
                    <div class="name" @click="changeNames3('马德里')">马德里</div>
                     <div class="name" @click="changeNames3('曼彻斯特')">曼彻斯特</div>
                    <div class="name" @click="changeNames3('里昂')">里昂</div>
                    <div class="name" @click="changeNames3('汉堡')">汉堡</div>
                    <div class="name" @click="changeNames3('杜塞尔多夫')">杜塞尔多夫</div>
                    <div class="name" @click="changeNames3('布鲁塞尔')">布鲁塞尔</div>
                    <div class="name" @click="changeNames3('哥本哈根')">哥本哈根</div>
                    <div class="name" @click="changeNames3('罗马')">罗马</div>
                    <div class="name" @click="changeNames3('莫斯科')">莫斯科</div>
                    <div class="name" @click="changeNames3('米兰')">米兰</div>
                    <div class="name" @click="changeNames3('柏林')">柏林</div>
                    <div class="name" @click="changeNames3('巴塞罗那')">巴塞罗那</div>
                    <div class="name" @click="changeNames3('斯德哥尔摩')">斯德哥尔摩</div>
                    <div class="name" @click="changeNames3('阿姆斯特丹')">阿姆斯特丹</div>
                    <div class="name" @click="changeNames3('慕尼黑')">慕尼黑</div>
                     <div class="name" @click="changeNames3('法兰克福')">法兰克福</div>
                    <div class="name" @click="changeNames3('巴黎')">巴黎</div>
                    <div class="name" @click="changeNames3('伦敦')">伦敦</div>
               </el-tab-pane>
               <el-tab-pane label="美洲" style="line-height: 50px;">
                    <div class="name" @click="changeNames3('达拉斯')">达拉斯</div>
                    <div class="name" @click="changeNames3('夏威夷')">夏威夷</div>
                    <div class="name" @click="changeNames3('蒙特利尔')">蒙特利尔</div>
                    <div class="name" @click="changeNames3('布宜诺斯')">布宜诺斯</div>
                    <div class="name" @click="changeNames3('埃德蒙顿')">埃德蒙顿</div>
                    <div class="name" @click="changeNames3('波特兰')">波特兰</div>
                    <div class="name" @click="changeNames3('奥兰多')">奥兰多</div>
                    <div class="name" @click="changeNames3('丹佛')">丹佛</div>
                    <div class="name" @click="changeNames3('迈阿密')">迈阿密</div>
                    <div class="name" @click="changeNames3('拉斯维加斯')">拉斯维加斯</div>
                    <div class="name" @click="changeNames3('墨西哥城')">墨西哥城</div>
                    <div class="name" @click="changeNames3('渥太华')">渥太华</div>
                    <div class="name" @click="changeNames3('圣保罗')">圣保罗</div>
                    <div class="name" @click="changeNames3('费城')">费城</div>
                    <div class="name" @click="changeNames3('纽约')">纽约</div>
                    <div class="name" @click="changeNames3('休斯顿')">休斯顿</div>
                    <div class="name" @click="changeNames3('亚特兰大')">亚特兰大</div>
                    <div class="name" @click="changeNames3('底特律')">底特律</div>
                    <div class="name" @click="changeNames3('波士顿')">波士顿</div>
                    <div class="name" @click="changeNames3('华盛顿')">华盛顿</div>
                     <div class="name" @click="changeNames3('西雅图')">西雅图</div>
                    <div class="name" @click="changeNames3('多伦多')">多伦多</div>
                    <div class="name" @click="changeNames3('温哥华')">温哥华</div>
                    <div class="name" @click="changeNames3('芝加哥')">芝加哥</div>
                    <div class="name" @click="changeNames3('旧金山')">旧金山</div>
                    <div class="name" @click="changeNames3('洛杉矶')">洛杉矶</div>
               
               </el-tab-pane>
               <el-tab-pane label="非洲" style="line-height: 50px;">
                    <div class="name" @click="changeNames3('开罗')">开罗</div>
                    <div class="name" @click="changeNames3('约翰内斯堡')">约翰内斯堡</div>
                    <div class="name" @click="changeNames3('开普敦')">开普敦</div>
                    <div class="name" @click="changeNames3('内罗毕')">内罗毕</div>
                    <div class="name" @click="changeNames3('拉各斯')">拉各斯</div>
                      <div class="name" @click="changeNames3('马普托')">马普托</div>
                    <div class="name" @click="changeNames3('阿比让')">阿比让</div>
                    <div class="name" @click="changeNames3('毛里求斯')">毛里求斯</div>
                    <div class="name" @click="changeNames3('罗安达')">罗安达</div>
                    <div class="name" @click="changeNames3('喀土穆')">喀土穆</div>
                    <div class="name" @click="changeNames3('阿克拉')">阿克拉</div>
                    <div class="name" @click="changeNames3('阿尔及尔')">阿尔及尔</div>
               
                         <div class="name" @click="changeNames3('卡萨布兰卡')">卡萨布兰卡</div>
                    <div class="name" @click="changeNames3('德班')">德班</div>
                    <div class="name" @click="changeNames3('突尼斯')">突尼斯</div>
                    <div class="name" @click="changeNames3('卢萨卡')">卢萨卡</div>
                    <div class="name" @click="changeNames3('哈拉雷')">哈拉雷</div>
               </el-tab-pane>
               <el-tab-pane label="国内热门" style="line-height: 50px;">
                     <div class="name" @click="changeNames3('北京')">北京</div>
                     <div class="name" @click="changeNames3('上海')">上海</div>
                     <div class="name" @click="changeNames3('广州')">广州</div>
                     <div class="name" @click="changeNames3('深圳')">深圳</div>
                     <div class="name" @click="changeNames3('成都')">成都</div>
                     <div class="name" @click="changeNames3('重庆')">重庆</div>
                     <div class="name" @click="changeNames3('厦门')">厦门</div>
                     <div class="name" @click="changeNames3('昆明')">昆明</div>
                     <div class="name" @click="changeNames3('杭州')">杭州</div>
                     <div class="name" @click="changeNames3('西安')">西安</div>
                     <div class="name" @click="changeNames3('武汉')">武汉</div>
                     <div class="name" @click="changeNames3('长沙')">长沙</div>
                     <div class="name" @click="changeNames3('南京')">南京</div>
                     <div class="name" @click="changeNames3('大连')">大连</div>
                     <div class="name" @click="changeNames3('郑州')">郑州</div>
                     <div class="name" @click="changeNames3('青岛')">青岛</div>
                     <div class="name" @click="changeNames3('天津')">天津</div>
                     <div class="name" @click="changeNames3('三亚')">三亚</div>
                     <div class="name" @click="changeNames3('海口')">海口</div>
                     <div class="name" @click="changeNames3('乌鲁木齐')">乌鲁木齐</div>
             

               </el-tab-pane>
            </el-tabs>
    </div>
        <div><div style="margin-left:10px;font-size:14px">出发城市</div><el-input v-model="city3" style="width: 150px;font-size:20px;" placeholder="城市" @focus="posSearch2=true;posSearch3=false;posSearch4=false;posSearch5=false;posSearch6=false;posSearch7=false;"/></div>
        <img src="@/assets/air/fly.png" alt="" style="margin-left:-20px;margin-right:40px;width: 50px;height:50px;" @click="change1" >
        <div><div style="margin-left:10px;font-size:14px">到达城市</div><el-input v-model="city4" style="width: 150px; font-size:20px" placeholder="城市" @focus="posSearch3=true;posSearch2=false;posSearch4=false;posSearch5=false;posSearch6=false;posSearch7=false;"/></div>
               </div>
        <el-date-picker
        :style="{backgroundColor:color,borderRadius:'6px',padding:'10px'}"
        :disabled-date="disablePastDates"
        v-model="day3"
        type="date"
        size="large"
        style="width: 190px; height:75px;font-size:20px;"
        :clearable="false"
        :editable="false"
        />
    </div>
    <!-- 第二程 -->
    <div class="second" style="margin-top:20px">
         <div style="margin-top:8px;font-size:16px;width:10px;height:16px;padding: 18px;border:1px solid;border-radius:10px">2</div>
    <!-- 城市选择 -->
    <div class="City" @click="stop" :style="{backgroundColor:color,borderRadius:'6px',padding:'10px',}">
                           <!-- 多程2左搜索 -->
    <div class="posSearch4" v-show="posSearch4">
        <div style="background: gray;padding:10px">热门城市/国家（支持汉字/拼音/英文字母）</div>
            <el-tabs type="border-card">
               <el-tab-pane label="国内" class="hot">
                     <span @click="changeNames4('北京')">北京</span>
                     <span @click="changeNames4('上海')">上海</span>
                     <span @click="changeNames4('广州')">广州</span>
                     <span @click="changeNames4('深圳')">深圳</span>
                     <span @click="changeNames4('成都')">成都</span>
                     <span @click="changeNames4('重庆')">重庆</span>
                     <span @click="changeNames4('厦门')">厦门</span>
                     <span @click="changeNames4('昆明')">昆明</span>
                     <span @click="changeNames4('杭州')">杭州</span>
                     <span @click="changeNames4('西安')">西安</span>
                     <span @click="changeNames4('武汉')">武汉</span>
                     <span @click="changeNames4('长沙')">长沙</span>
                     <span @click="changeNames4('南京')">南京</span>
                     <span @click="changeNames4('大连')">大连</span>
                     <span @click="changeNames4('郑州')">郑州</span>
                     <span @click="changeNames4('青岛')">青岛</span>
                     <span @click="changeNames4('天津')">天津</span>
                     <span @click="changeNames4('三亚')">三亚</span>
                     <span @click="changeNames4('海口')">海口</span>
                     <span @click="changeNames4('乌鲁木齐')">乌鲁木齐</span>
               </el-tab-pane>
               <el-tab-pane label="国际/中国港澳台" class="hot">
                     <span @click="changeNames4('中国香港')">中国香港</span>
                     <span @click="changeNames4('中国澳门')">中国澳门</span>
                     <span @click="changeNames4('中国台北')">中国台北</span>
                     <span @click="changeNames4('新加坡')">新加坡</span>
                     <span @click="changeNames4('雅加达')">雅加达</span>
                     <span @click="changeNames4('曼谷')">曼谷</span>
                     <span @click="changeNames4('')">普吉岛</span>
                     <span @click="changeNames4('马尼拉')">马尼拉</span>
                     <span @click="changeNames4('东京')">东京</span>
                     <span @click="changeNames4('大阪')">大阪</span>
                     <span @click="changeNames4('巴厘岛')">巴厘岛</span>
                     <span @click="changeNames4('吉隆坡')">吉隆坡</span>
                     <span @click="changeNames4('金边')">金边</span>
                     <span @click="changeNames4('洛杉矶')">洛杉矶</span>
                     <span @click="changeNames4('纽约')">纽约</span>
                     <span @click="changeNames4('旧金山')">旧金山</span>
                     <span @click="changeNames4('胡志明市')">胡志明市</span>
                     <span @click="changeNames4('迪拜')">迪拜</span>
               </el-tab-pane>
               <el-tab-pane label="ABCDE">
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">A</div>
                    <div>
                    <div class="name" @click="changeNames4('安庆')">安庆</div>
                    <div class="name" @click="changeNames4('阿勒泰')">阿勒泰</div>
                    <div class="name" @click="changeNames4('安康')">安康</div>
                    <div class="name" @click="changeNames4('阿克苏')">阿克苏</div>
                    <div class="name" @click="changeNames4('安顺')">安顺</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">B</div>
                    <div>
                    <div class="name" @click="changeNames4('包头')">包头</div>
                    <div class="name" @click="changeNames4('北海')">北海</div>
                    <div class="name" @click="changeNames4('北京')">北京</div>
                    <div class="name" @click="changeNames4('百色')">百色</div>
                    <div class="name" @click="changeNames4('保山')">保山</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">C</div>
                    <div>
                     <div class="name" @click="changeNames4('常德')">常德</div>
                    <div class="name" @click="changeNames4('长白山')">长白山</div>
                    <div class="name" @click="changeNames4('成都')">成都</div>
                    <div class="name" @click="changeNames4('重庆')">重庆</div>
                    <div class="name" @click="changeNames4('长沙')">长沙</div>
                    <div class="name" @click="changeNames4('赤峰')">赤峰</div>
                    <div class="name" @click="changeNames4('潮州')">潮州</div>
                    <div class="name" @click="changeNames4('长治')">长治</div>
                    <div class="name" @click="changeNames4('长春')">长春</div>
                    <div class="name" @click="changeNames4('常州')">常州</div>
                    <div class="name" @click="changeNames4('昌都')">昌都</div>
                    <div class="name" @click="changeNames4('朝阳')">朝阳</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">E</div>
                    <div>
                     <div class="name" @click="changeNames4('鄂尔多斯')">鄂尔多斯</div>
                    <div class="name" @click="changeNames4('恩施')">恩施</div>
                </div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="FGHJ">
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">F</div>
                    <div>
                    <div class="name" @click="changeNames4('福州')">福州</div>
                    <div class="name" @click="changeNames4('阜阳')">阜阳</div>
            </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">G</div>
                    <div>
                    <div class="name" @click="changeNames4('贵阳')">贵阳</div>
                    <div class="name" @click="changeNames4('桂林')">桂林</div>
                    <div class="name" @click="changeNames4('广州')">广州</div>
                    <div class="name" @click="changeNames4('广元')">广元</div>
                    <div class="name" @click="changeNames4('格尔木')">格尔木</div>
                    <div class="name" @click="changeNames4('固原')">固原</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">H</div>
                    <div>
                     <div class="name" @click="changeNames4('呼和浩特')">呼和浩特</div>
                    <div class="name" @click="changeNames4('哈密')">哈密</div>
                    <div class="name" @click="changeNames4('黑河')">黑河</div>
                    <div class="name" @click="changeNames4('海拉尔')">海拉尔</div>
                    <div class="name" @click="changeNames4('哈尔滨')">哈尔滨</div>
                    <div class="name" @click="changeNames4('海口')">海口</div>
                    <div class="name" @click="changeNames4('黄山')">黄山</div>
                    <div class="name" @click="changeNames4('杭州')">杭州</div>
                    <div class="name" @click="changeNames4('邯郸')">邯郸</div>
                    <div class="name" @click="changeNames4('合肥')">合肥</div>
                    <div class="name" @click="changeNames4('汉中')">汉中</div>
                    <div class="name" @click="changeNames4('淮安')">淮安</div>
                    <div class="name" @click="changeNames4('河池')">河池</div>
                    <div class="name" @click="changeNames4('和田')">和田</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">J</div>
                    <div>
                     <div class="name" @click="changeNames4('九江')">九江</div>
                    <div class="name" @click="changeNames4('佳木斯')">佳木斯</div>
                    <div class="name" @click="changeNames4('济南')">济南</div>
                    <div class="name" @click="changeNames4('济宁')">济宁</div>
                    <div class="name" @click="changeNames4('揭阳')">揭阳</div>
                    <div class="name" @click="changeNames4('井冈山')">井冈山</div>
                    <div class="name" @click="changeNames4('晋江')">晋江</div>
                    <div class="name" @click="changeNames4('九寨沟')">九寨沟</div>
                    <div class="name" @click="changeNames4('锦州')">锦州</div>
                    <div class="name" @click="changeNames4('景德镇')">景德镇</div>
                    <div class="name" @click="changeNames4('嘉峪关')">嘉峪关</div></div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="KLMNP">
                      <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">K</div>
                    <div>
                    <div class="name" @click="changeNames4('喀什')">喀什</div>
                    <div class="name" @click="changeNames4('昆明')">昆明</div>
                    <div class="name" @click="changeNames4('康定')">康定</div>
                    <div class="name" @click="changeNames4('克拉玛依')">克拉玛依</div>
                    <div class="name" @click="changeNames4('库车')">库车</div>
                    <div class="name" @click="changeNames4('库尔勒')">库尔勒</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">L</div>
                    <div>
                    <div class="name" @click="changeNames4('兰州')">兰州</div>
                    <div class="name" @click="changeNames4('洛阳')">洛阳</div>
                    <div class="name" @click="changeNames4('丽江')">丽江</div>
                    <div class="name" @click="changeNames4('拉萨')">拉萨</div>
                    <div class="name" @click="changeNames4('黎平')">黎平</div>
                    <div class="name" @click="changeNames4('连城')">连城</div>
                    <div class="name" @click="changeNames4('连云港')">连云港</div>
                    <div class="name" @click="changeNames4('临沧')">临沧</div>
                    <div class="name" @click="changeNames4('临汾')">临汾</div>
                    <div class="name" @click="changeNames4('临沂')">临沂</div>
                    <div class="name" @click="changeNames4('林芝')">林芝</div>
                    <div class="name" @click="changeNames4('六盘水')">六盘水</div>
                    <div class="name" @click="changeNames4('柳州')">柳州</div>
                    <div class="name" @click="changeNames4('泸州')">泸州</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">M</div>
                    <div>
                     <div class="name" @click="changeNames4('牡丹江')">牡丹江</div>
                    <div class="name" @click="changeNames4('芒市')">芒市</div>
                    <div class="name" @click="changeNames4('满洲里')">满洲里</div>
                    <div class="name" @click="changeNames4('绵阳')">绵阳</div>
                    <div class="name" @click="changeNames4('梅县')">梅县</div>
                    <div class="name" @click="changeNames4('漠河')">漠河</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">N</div>
                    <div>
                    <div class="name" @click="changeNames4('那拉提')">那拉提</div>
                    <div class="name" @click="changeNames4('南昌')">南昌</div>
                    <div class="name" @click="changeNames4('宁波')">宁波</div>
                    <div class="name" @click="changeNames4('南京')">南京</div>
                    <div class="name" @click="changeNames4('南充')">南充</div>
                    <div class="name" @click="changeNames4('南宁')">南宁</div>
                    <div class="name" @click="changeNames4('南阳')">南阳</div>
                    <div class="name" @click="changeNames4('南通')">南通</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">P</div>
                    <div>
                    <div class="name" @click="changeNames4('攀枝花')">攀枝花</div>
                    </div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="QRSTW">
                      <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">Q</div>
                    <div>
                    <div class="name" @click="changeNames4('衢州')">衢州</div>
                    <div class="name" @click="changeNames4('秦皇岛')">秦皇岛</div>
                    <div class="name" @click="changeNames4('庆阳')">庆阳</div>
                    <div class="name" @click="changeNames4('齐齐哈尔')">齐齐哈尔</div>
                    <div class="name" @click="changeNames4('青岛')">青岛</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">S</div>
                    <div>
                     <div class="name" @click="changeNames4('深圳')"> 深圳</div>
                    <div class="name" @click="changeNames4('石家庄')">石家庄</div>
                    <div class="name" @click="changeNames4('思茅')">思茅</div>
                    <div class="name" @click="changeNames4('神农架')">神农架</div>
                    <div class="name" @click="changeNames4('邵阳')">邵阳</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">T</div>
                    <div>
                    <div class="name" @click="changeNames4('铜仁')">铜仁</div>
                    <div class="name" @click="changeNames4('塔城')">塔城</div>
                    <div class="name" @click="changeNames4('腾冲')">腾冲</div>
                    <div class="name" @click="changeNames4('台州')">台州</div>
                    <div class="name" @click="changeNames4('通辽')">通辽</div>
                    <div class="name" @click="changeNames4('太原')">太原</div>
                    <div class="name" @click="changeNames4('天津')">天津</div>
                    <div class="name" @click="changeNames4('泰州')">泰州</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">W</div>
                    <div>
<div class="name" @click="changeNames4('武夷山')">武夷山</div>
<div class="name" @click="changeNames4('乌兰浩特')">乌兰浩特</div>
<div class="name" @click="changeNames4('温州')">温州</div>
<div class="name" @click="changeNames4('温州')">温州</div>
<div class="name" @click="changeNames4('乌鲁木齐')">乌鲁木齐</div>
<div class="name" @click="changeNames4('万州')">万州</div>
<div class="name" @click="changeNames4('乌海')">乌海</div>
                    <div class="name" @click="changeNames4('威海')">威海</div>
                    <div class="name" @click="changeNames4('武汉')">武汉</div>
                    <div class="name" @click="changeNames4('梧州')">梧州</div>
                    <div class="name" @click="changeNames4('文山')">文山</div>
                    <div class="name" @click="changeNames4('无锡')">无锡</div></div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="XYZ">
                 <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">X</div>
                    <div>
                    <div class="name" @click="changeNames4('兴义')">兴义</div>
                    <div class="name" @click="changeNames4('西昌')">西昌</div>
                    <div class="name" @click="changeNames4('厦门')">厦门</div>
                    <div class="name" @click="changeNames4('西安')">西安</div>
                    <div class="name" @click="changeNames4('襄阳')">襄阳</div>
                    <div class="name" @click="changeNames4('西宁')">西宁</div>
                    <div class="name" @click="changeNames4('锡林浩特')">锡林浩特</div>
                    <div class="name" @click="changeNames4('西双版纳')">西双版纳</div>
                    <div class="name" @click="changeNames4('忻州')">忻州</div>
                    <div class="name" @click="changeNames4('徐州')">徐州</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">Y</div>
                    <div>
                    <div class="name" @click="changeNames4('义乌')">义乌</div>
                    <div class="name" @click="changeNames4('永州')">永州</div>
                    <div class="name" @click="changeNames4('榆林')">榆林</div>
                    <div class="name" @click="changeNames4('延安')">延安</div>
                    <div class="name" @click="changeNames4('运城')">运城</div>
                    <div class="name" @click="changeNames4('烟台')">烟台</div>
                    <div class="name" @click="changeNames4('银川')">银川</div>
                    <div class="name" @click="changeNames4('宜昌')">宜昌</div>
                    <div class="name" @click="changeNames4('宜宾')">宜宾</div>
                    <div class="name" @click="changeNames4('盐城')">盐城</div>
                    <div class="name" @click="changeNames4('延吉')">延吉</div>
                    <div class="name" @click="changeNames4('伊宁')">伊宁</div>
                    <div class="name" @click="changeNames4('扬州')">扬州</div>
                    <div class="name" @click="changeNames4('玉树')">玉树</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">Z</div>
                    <div>
                     <div class="name" @click="changeNames4('珠海')">珠海</div>
                    <div class="name" @click="changeNames4('昭通')">昭通</div>
                    <div class="name" @click="changeNames4('张家界')">张家界</div>
                    <div class="name" @click="changeNames4('舟山')">舟山</div>
                    <div class="name" @click="changeNames4('郑州')">郑州</div>
                    <div class="name" @click="changeNames4('中卫')">中卫</div>
                    <div class="name" @click="changeNames4('芷江')">芷江</div>
                    <div class="name" @click="changeNames4('湛江')">湛江</div>
                    <div class="name" @click="changeNames4('遵义新舟')">遵义新舟</div>
                    <div class="name" @click="changeNames4('遵义茅台')">遵义茅台</div>
                </div>
                </div>

               </el-tab-pane>
            </el-tabs>
    </div>
    <!-- 多程2右搜索 -->
    <div class="posSearch5" v-show="posSearch5">
        <div style="background: gray;padding:10px">热门城市/国家（支持汉字/拼音/英文字母）</div>
            <el-tabs type="border-card">
                <el-tab-pane label="国际/中国港澳台" style="line-height: 50px;">
                     <div class="name" @click="changeNames5('中国香港')">中国香港</div>
                     <div class="name" @click="changeNames5('中国澳门')">中国澳门</div>
                     <div class="name" @click="changeNames5('中国台北')">中国台北</div>
                     <div class="name" @click="changeNames5('新加坡')">新加坡</div>
                     <div class="name" @click="changeNames5('雅加达')">雅加达</div>
                     <div class="name" @click="changeNames5('曼谷')">曼谷</div>
                     <div class="name" @click="changeNames5('')">普吉岛</div>
                     <div class="name" @click="changeNames5('马尼拉')">马尼拉</div>
                     <div class="name" @click="changeNames5('东京')">东京</div>
                     <div class="name" @click="changeNames5('大阪')">大阪</div>
                     <div class="name" @click="changeNames5('巴厘岛')">巴厘岛</div>
                     <div class="name" @click="changeNames5('吉隆坡')">吉隆坡</div>
                     <div class="name" @click="changeNames5('金边')">金边</div>
                     <div class="name" @click="changeNames5('洛杉矶')">洛杉矶</div>
                     <div class="name" @click="changeNames5('纽约')">纽约</div>
                     <div class="name" @click="changeNames5('旧金山')">旧金山</div>
                     <div class="name" @click="changeNames5('胡志明市')">胡志明市</div>
                     <div class="name" @click="changeNames5('迪拜')">迪拜</div>
               </el-tab-pane>
               <el-tab-pane label="亚洲/大洋洲" style="line-height: 50px;">
                     <div class="name" @click="changeNames5('中国香港')">中国香港</div>
                    <div class="name" @click="changeNames5('中国台北')">中国台北</div>
                    <div class="name" @click="changeNames5('中国高雄')">中国高雄</div>
                    <div class="name" @click="changeNames5('新加坡')">新加坡</div>
                    <div class="name" @click="changeNames5('首尔')">首尔</div>
                    <div class="name" @click="changeNames5('济州岛')">济州岛</div>
                    <div class="name" @click="changeNames5('曼谷')">曼谷</div>
                    <div class="name" @click="changeNames5('普吉岛')">普吉岛</div>
                    <div class="name" @click="changeNames5('釜山')">釜山</div>
                    <div class="name" @click="changeNames5('东京')">东京</div>
                    <div class="name" @click="changeNames5('大阪')">大阪</div>
                    <div class="name" @click="changeNames5('孟买')">孟买</div>
                    <div class="name" @click="changeNames5('巴厘岛')">巴厘岛</div>
                    <div class="name" @click="changeNames5('吉隆坡')">吉隆坡</div>
                    <div class="name" @click="changeNames5('金边')">金边</div>
                    <div class="name" @click="changeNames5('清迈')">清迈</div>
                    <div class="name" @click="changeNames5('苏梅岛')">苏梅岛</div>
                    <div class="name" @click="changeNames5('雅加达')">雅加达</div>
                    <div class="name" @click="changeNames5('马尼拉')">马尼拉</div>
                    <div class="name" @click="changeNames5('暹粒')">暹粒</div>
                    <div class="name" @click="changeNames5('悉尼')">悉尼</div>
                    <div class="name" @click="changeNames5('孟买')">孟买</div>
                    <div class="name" @click="changeNames5('乌兰巴托')">乌兰巴托</div>
                    <div class="name" @click="changeNames5('伊斯坦布尔')">伊斯坦布尔</div>
                    <div class="name" @click="changeNames5('札幌')">札幌</div>
                    <div class="name" @click="changeNames5('名古屋')">名古屋</div>
                    <div class="name" @click="changeNames5('河内')">河内</div>
                    <div class="name" @click="changeNames5('马累')">马累</div>
                    <div class="name" @click="changeNames5('福冈')">福冈</div>
                    <div class="name" @click="changeNames5('墨尔本')">墨尔本</div>
                    <div class="name" @click="changeNames5('奥克兰')">奥克兰</div>
                    <div class="name" @click="changeNames5('布里斯班')">布里斯班</div>
                    <div class="name" @click="changeNames5('珀斯')">珀斯</div>
                    <div class="name" @click="changeNames5('阿德莱德')">阿德莱德</div>
                    <div class="name" @click="changeNames5('惠林顿')">惠林顿</div>
                    <div class="name" @click="changeNames5('堪培拉')">堪培拉</div>
                    <div class="name" @click="changeNames5('凯恩斯')">凯恩斯</div>
                    <div class="name" @click="changeNames5('南迪')">南迪</div>
                    <div class="name" @click="changeNames5('黄金海岸')">黄金海岸</div>
                    <div class="name" @click="changeNames5('帕皮提')">帕皮提</div>
               </el-tab-pane>
               <el-tab-pane label="欧洲" style="line-height: 50px;">
                    <div class="name" @click="changeNames5('布达佩斯')">布达佩斯</div>
                    <div class="name" @click="changeNames5('基辅')">基辅</div>
                    <div class="name" @click="changeNames5('雅典')">雅典</div>
                    <div class="name" @click="changeNames5('维也纳')">维也纳</div>
                    <div class="name" @click="changeNames5('圣彼得堡')">圣彼得堡</div>
                    <div class="name" @click="changeNames5('日内瓦')">日内瓦</div>
                    <div class="name" @click="changeNames5('赫尔辛基')">赫尔辛基</div>
                    <div class="name" @click="changeNames5('马德里')">马德里</div>
                     <div class="name" @click="changeNames5('曼彻斯特')">曼彻斯特</div>
                    <div class="name" @click="changeNames5('里昂')">里昂</div>
                    <div class="name" @click="changeNames5('汉堡')">汉堡</div>
                    <div class="name" @click="changeNames5('杜塞尔多夫')">杜塞尔多夫</div>
                    <div class="name" @click="changeNames5('布鲁塞尔')">布鲁塞尔</div>
                    <div class="name" @click="changeNames5('哥本哈根')">哥本哈根</div>
                    <div class="name" @click="changeNames5('罗马')">罗马</div>
                    <div class="name" @click="changeNames5('莫斯科')">莫斯科</div>
                    <div class="name" @click="changeNames5('米兰')">米兰</div>
                    <div class="name" @click="changeNames5('柏林')">柏林</div>
                    <div class="name" @click="changeNames5('巴塞罗那')">巴塞罗那</div>
                    <div class="name" @click="changeNames5('斯德哥尔摩')">斯德哥尔摩</div>
                    <div class="name" @click="changeNames5('阿姆斯特丹')">阿姆斯特丹</div>
                    <div class="name" @click="changeNames5('慕尼黑')">慕尼黑</div>
                     <div class="name" @click="changeNames5('法兰克福')">法兰克福</div>
                    <div class="name" @click="changeNames5('巴黎')">巴黎</div>
                    <div class="name" @click="changeNames5('伦敦')">伦敦</div>
               </el-tab-pane>
               <el-tab-pane label="美洲" style="line-height: 50px;">
                    <div class="name" @click="changeNames5('达拉斯')">达拉斯</div>
                    <div class="name" @click="changeNames5('夏威夷')">夏威夷</div>
                    <div class="name" @click="changeNames5('蒙特利尔')">蒙特利尔</div>
                    <div class="name" @click="changeNames5('布宜诺斯')">布宜诺斯</div>
                    <div class="name" @click="changeNames5('埃德蒙顿')">埃德蒙顿</div>
                    <div class="name" @click="changeNames5('波特兰')">波特兰</div>
                    <div class="name" @click="changeNames5('奥兰多')">奥兰多</div>
                    <div class="name" @click="changeNames5('丹佛')">丹佛</div>
                    <div class="name" @click="changeNames5('迈阿密')">迈阿密</div>
                    <div class="name" @click="changeNames5('拉斯维加斯')">拉斯维加斯</div>
                    <div class="name" @click="changeNames5('墨西哥城')">墨西哥城</div>
                    <div class="name" @click="changeNames5('渥太华')">渥太华</div>
                    <div class="name" @click="changeNames5('圣保罗')">圣保罗</div>
                    <div class="name" @click="changeNames5('费城')">费城</div>
                    <div class="name" @click="changeNames5('纽约')">纽约</div>
                    <div class="name" @click="changeNames5('休斯顿')">休斯顿</div>
                    <div class="name" @click="changeNames5('亚特兰大')">亚特兰大</div>
                    <div class="name" @click="changeNames5('底特律')">底特律</div>
                    <div class="name" @click="changeNames5('波士顿')">波士顿</div>
                    <div class="name" @click="changeNames5('华盛顿')">华盛顿</div>
                     <div class="name" @click="changeNames5('西雅图')">西雅图</div>
                    <div class="name" @click="changeNames5('多伦多')">多伦多</div>
                    <div class="name" @click="changeNames5('温哥华')">温哥华</div>
                    <div class="name" @click="changeNames5('芝加哥')">芝加哥</div>
                    <div class="name" @click="changeNames5('旧金山')">旧金山</div>
                    <div class="name" @click="changeNames5('洛杉矶')">洛杉矶</div>
               
               </el-tab-pane>
               <el-tab-pane label="非洲" style="line-height: 50px;">
                    <div class="name" @click="changeNames5('开罗')">开罗</div>
                    <div class="name" @click="changeNames5('约翰内斯堡')">约翰内斯堡</div>
                    <div class="name" @click="changeNames5('开普敦')">开普敦</div>
                    <div class="name" @click="changeNames5('内罗毕')">内罗毕</div>
                    <div class="name" @click="changeNames5('拉各斯')">拉各斯</div>
                      <div class="name" @click="changeNames5('马普托')">马普托</div>
                    <div class="name" @click="changeNames5('阿比让')">阿比让</div>
                    <div class="name" @click="changeNames5('毛里求斯')">毛里求斯</div>
                    <div class="name" @click="changeNames5('罗安达')">罗安达</div>
                    <div class="name" @click="changeNames5('喀土穆')">喀土穆</div>
                    <div class="name" @click="changeNames5('阿克拉')">阿克拉</div>
                    <div class="name" @click="changeNames5('阿尔及尔')">阿尔及尔</div>
               
                         <div class="name" @click="changeNames5('卡萨布兰卡')">卡萨布兰卡</div>
                    <div class="name" @click="changeNames5('德班')">德班</div>
                    <div class="name" @click="changeNames5('突尼斯')">突尼斯</div>
                    <div class="name" @click="changeNames5('卢萨卡')">卢萨卡</div>
                    <div class="name" @click="changeNames5('哈拉雷')">哈拉雷</div>
               </el-tab-pane>
               <el-tab-pane label="国内热门" style="line-height: 50px;">
                     <div class="name" @click="changeNames5('北京')">北京</div>
                     <div class="name" @click="changeNames5('上海')">上海</div>
                     <div class="name" @click="changeNames5('广州')">广州</div>
                     <div class="name" @click="changeNames5('深圳')">深圳</div>
                     <div class="name" @click="changeNames5('成都')">成都</div>
                     <div class="name" @click="changeNames5('重庆')">重庆</div>
                     <div class="name" @click="changeNames5('厦门')">厦门</div>
                     <div class="name" @click="changeNames5('昆明')">昆明</div>
                     <div class="name" @click="changeNames5('杭州')">杭州</div>
                     <div class="name" @click="changeNames5('西安')">西安</div>
                     <div class="name" @click="changeNames5('武汉')">武汉</div>
                     <div class="name" @click="changeNames5('长沙')">长沙</div>
                     <div class="name" @click="changeNames5('南京')">南京</div>
                     <div class="name" @click="changeNames5('大连')">大连</div>
                     <div class="name" @click="changeNames5('郑州')">郑州</div>
                     <div class="name" @click="changeNames5('青岛')">青岛</div>
                     <div class="name" @click="changeNames5('天津')">天津</div>
                     <div class="name" @click="changeNames5('三亚')">三亚</div>
                     <div class="name" @click="changeNames5('海口')">海口</div>
                     <div class="name" @click="changeNames5('乌鲁木齐')">乌鲁木齐</div>
             

               </el-tab-pane>
            </el-tabs>
    </div>
        <div><div style="margin-left:10px;font-size:14px">出发城市</div><el-input v-model="city5" style="width: 150px;font-size:20px" placeholder="城市" @focus="posSearch4=true;posSearch5=false;posSearch2=false;posSearch3=false;posSearch6=false;posSearch7=false;"/></div>
        <img src="@/assets/air/fly.png" alt="" style="margin-left:-20px;margin-right:40px;width: 50px;height:50px;" @click="change2" >
        <div><div style="margin-left:10px;font-size:14px">到达城市</div><el-input v-model="city6" style="width: 150px; font-size:20px;" placeholder="城市" @focus="posSearch5=true;posSearch4=false;posSearch2=false;posSearch3=false;posSearch6=false;posSearch7=false;"/></div>
    </div>
    <el-date-picker
        :style="{backgroundColor:color,borderRadius:'6px',padding:'10px'}"
        :disabled-date="disablePastDates"
        type="date"
        size="large"
        v-model="day4"
        placeholder="yy-mm-dd"
        style="width: 190px; height:75px;font-size:20px;"
        :editable="false"
        :clearable="false"
        />
    </div>
    <!-- 是否添加第三个 -->
    <div class="add" v-show="add" @click="add=false">再加一程</div>
    <div v-show="!add">
            <div class="third" >
    <div style="margin-top:8px;font-size:16px;width:10px;height:16px;padding: 18px;border:1px solid;border-radius:10px">3</div>
           
    <!-- 城市选择 -->
    <div class="City" @click="stop" :style="{backgroundColor:color,borderRadius:'6px',padding:'10px',}">
                    <!-- 多程3左搜索 -->
    <div class="posSearch6" v-show="posSearch6">
        <div style="background: gray;padding:10px">热门城市/国家（支持汉字/拼音/英文字母）</div>
            <el-tabs type="border-card">
               <el-tab-pane label="国内" class="hot">
                     <span @click="changeNames6('北京')">北京</span>
                     <span @click="changeNames6('上海')">上海</span>
                     <span @click="changeNames6('广州')">广州</span>
                     <span @click="changeNames6('深圳')">深圳</span>
                     <span @click="changeNames6('成都')">成都</span>
                     <span @click="changeNames6('重庆')">重庆</span>
                     <span @click="changeNames6('厦门')">厦门</span>
                     <span @click="changeNames6('昆明')">昆明</span>
                     <span @click="changeNames6('杭州')">杭州</span>
                     <span @click="changeNames6('西安')">西安</span>
                     <span @click="changeNames6('武汉')">武汉</span>
                     <span @click="changeNames6('长沙')">长沙</span>
                     <span @click="changeNames6('南京')">南京</span>
                     <span @click="changeNames6('大连')">大连</span>
                     <span @click="changeNames6('郑州')">郑州</span>
                     <span @click="changeNames6('青岛')">青岛</span>
                     <span @click="changeNames6('天津')">天津</span>
                     <span @click="changeNames6('三亚')">三亚</span>
                     <span @click="changeNames6('海口')">海口</span>
                     <span @click="changeNames6('乌鲁木齐')">乌鲁木齐</span>
               </el-tab-pane>
               <el-tab-pane label="国际/中国港澳台" class="hot">
                     <span @click="changeNames6('中国香港')">中国香港</span>
                     <span @click="changeNames6('中国澳门')">中国澳门</span>
                     <span @click="changeNames6('中国台北')">中国台北</span>
                     <span @click="changeNames6('新加坡')">新加坡</span>
                     <span @click="changeNames6('雅加达')">雅加达</span>
                     <span @click="changeNames6('曼谷')">曼谷</span>
                     <span @click="changeNames6('')">普吉岛</span>
                     <span @click="changeNames6('马尼拉')">马尼拉</span>
                     <span @click="changeNames6('东京')">东京</span>
                     <span @click="changeNames6('大阪')">大阪</span>
                     <span @click="changeNames6('巴厘岛')">巴厘岛</span>
                     <span @click="changeNames6('吉隆坡')">吉隆坡</span>
                     <span @click="changeNames6('金边')">金边</span>
                     <span @click="changeNames6('洛杉矶')">洛杉矶</span>
                     <span @click="changeNames6('纽约')">纽约</span>
                     <span @click="changeNames6('旧金山')">旧金山</span>
                     <span @click="changeNames6('胡志明市')">胡志明市</span>
                     <span @click="changeNames6('迪拜')">迪拜</span>
               </el-tab-pane>
               <el-tab-pane label="ABCDE">
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">A</div>
                    <div>
                    <div class="name" @click="changeNames6('安庆')">安庆</div>
                    <div class="name" @click="changeNames6('阿勒泰')">阿勒泰</div>
                    <div class="name" @click="changeNames6('安康')">安康</div>
                    <div class="name" @click="changeNames6('阿克苏')">阿克苏</div>
                    <div class="name" @click="changeNames6('安顺')">安顺</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">B</div>
                    <div>
                    <div class="name" @click="changeNames6('包头')">包头</div>
                    <div class="name" @click="changeNames6('北海')">北海</div>
                    <div class="name" @click="changeNames6('北京')">北京</div>
                    <div class="name" @click="changeNames6('百色')">百色</div>
                    <div class="name" @click="changeNames6('保山')">保山</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">C</div>
                    <div>
                     <div class="name" @click="changeNames6('常德')">常德</div>
                    <div class="name" @click="changeNames6('长白山')">长白山</div>
                    <div class="name" @click="changeNames6('成都')">成都</div>
                    <div class="name" @click="changeNames6('重庆')">重庆</div>
                    <div class="name" @click="changeNames6('长沙')">长沙</div>
                    <div class="name" @click="changeNames6('赤峰')">赤峰</div>
                    <div class="name" @click="changeNames6('潮州')">潮州</div>
                    <div class="name" @click="changeNames6('长治')">长治</div>
                    <div class="name" @click="changeNames6('长春')">长春</div>
                    <div class="name" @click="changeNames6('常州')">常州</div>
                    <div class="name" @click="changeNames6('昌都')">昌都</div>
                    <div class="name" @click="changeNames6('朝阳')">朝阳</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">E</div>
                    <div>
                     <div class="name" @click="changeNames6('鄂尔多斯')">鄂尔多斯</div>
                    <div class="name" @click="changeNames6('恩施')">恩施</div>
                </div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="FGHJ">
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">F</div>
                    <div>
                    <div class="name" @click="changeNames6('福州')">福州</div>
                    <div class="name" @click="changeNames6('阜阳')">阜阳</div>
            </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">G</div>
                    <div>
                    <div class="name" @click="changeNames6('贵阳')">贵阳</div>
                    <div class="name" @click="changeNames6('桂林')">桂林</div>
                    <div class="name" @click="changeNames6('广州')">广州</div>
                    <div class="name" @click="changeNames6('广元')">广元</div>
                    <div class="name" @click="changeNames6('格尔木')">格尔木</div>
                    <div class="name" @click="changeNames6('固原')">固原</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">H</div>
                    <div>
                     <div class="name" @click="changeNames6('呼和浩特')">呼和浩特</div>
                    <div class="name" @click="changeNames6('哈密')">哈密</div>
                    <div class="name" @click="changeNames6('黑河')">黑河</div>
                    <div class="name" @click="changeNames6('海拉尔')">海拉尔</div>
                    <div class="name" @click="changeNames6('哈尔滨')">哈尔滨</div>
                    <div class="name" @click="changeNames6('海口')">海口</div>
                    <div class="name" @click="changeNames6('黄山')">黄山</div>
                    <div class="name" @click="changeNames6('杭州')">杭州</div>
                    <div class="name" @click="changeNames6('邯郸')">邯郸</div>
                    <div class="name" @click="changeNames6('合肥')">合肥</div>
                    <div class="name" @click="changeNames6('汉中')">汉中</div>
                    <div class="name" @click="changeNames6('淮安')">淮安</div>
                    <div class="name" @click="changeNames6('河池')">河池</div>
                    <div class="name" @click="changeNames6('和田')">和田</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">J</div>
                    <div>
                     <div class="name" @click="changeNames6('九江')">九江</div>
                    <div class="name" @click="changeNames6('佳木斯')">佳木斯</div>
                    <div class="name" @click="changeNames6('济南')">济南</div>
                    <div class="name" @click="changeNames6('济宁')">济宁</div>
                    <div class="name" @click="changeNames6('揭阳')">揭阳</div>
                    <div class="name" @click="changeNames6('井冈山')">井冈山</div>
                    <div class="name" @click="changeNames6('晋江')">晋江</div>
                    <div class="name" @click="changeNames6('九寨沟')">九寨沟</div>
                    <div class="name" @click="changeNames6('锦州')">锦州</div>
                    <div class="name" @click="changeNames6('景德镇')">景德镇</div>
                    <div class="name" @click="changeNames6('嘉峪关')">嘉峪关</div></div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="KLMNP">
                      <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">K</div>
                    <div>
                    <div class="name" @click="changeNames6('喀什')">喀什</div>
                    <div class="name" @click="changeNames6('昆明')">昆明</div>
                    <div class="name" @click="changeNames6('康定')">康定</div>
                    <div class="name" @click="changeNames6('克拉玛依')">克拉玛依</div>
                    <div class="name" @click="changeNames6('库车')">库车</div>
                    <div class="name" @click="changeNames6('库尔勒')">库尔勒</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">L</div>
                    <div>
                    <div class="name" @click="changeNames6('兰州')">兰州</div>
                    <div class="name" @click="changeNames6('洛阳')">洛阳</div>
                    <div class="name" @click="changeNames6('丽江')">丽江</div>
                    <div class="name" @click="changeNames6('拉萨')">拉萨</div>
                    <div class="name" @click="changeNames6('黎平')">黎平</div>
                    <div class="name" @click="changeNames6('连城')">连城</div>
                    <div class="name" @click="changeNames6('连云港')">连云港</div>
                    <div class="name" @click="changeNames6('临沧')">临沧</div>
                    <div class="name" @click="changeNames6('临汾')">临汾</div>
                    <div class="name" @click="changeNames6('临沂')">临沂</div>
                    <div class="name" @click="changeNames6('林芝')">林芝</div>
                    <div class="name" @click="changeNames6('六盘水')">六盘水</div>
                    <div class="name" @click="changeNames6('柳州')">柳州</div>
                    <div class="name" @click="changeNames6('泸州')">泸州</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">M</div>
                    <div>
                     <div class="name" @click="changeNames6('牡丹江')">牡丹江</div>
                    <div class="name" @click="changeNames6('芒市')">芒市</div>
                    <div class="name" @click="changeNames6('满洲里')">满洲里</div>
                    <div class="name" @click="changeNames6('绵阳')">绵阳</div>
                    <div class="name" @click="changeNames6('梅县')">梅县</div>
                    <div class="name" @click="changeNames6('漠河')">漠河</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">N</div>
                    <div>
                    <div class="name" @click="changeNames6('那拉提')">那拉提</div>
                    <div class="name" @click="changeNames6('南昌')">南昌</div>
                    <div class="name" @click="changeNames6('宁波')">宁波</div>
                    <div class="name" @click="changeNames6('南京')">南京</div>
                    <div class="name" @click="changeNames6('南充')">南充</div>
                    <div class="name" @click="changeNames6('南宁')">南宁</div>
                    <div class="name" @click="changeNames6('南阳')">南阳</div>
                    <div class="name" @click="changeNames6('南通')">南通</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">P</div>
                    <div>
                    <div class="name" @click="changeNames6('攀枝花')">攀枝花</div>
                    </div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="QRSTW">
                      <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">Q</div>
                    <div>
                    <div class="name" @click="changeNames6('衢州')">衢州</div>
                    <div class="name" @click="changeNames6('秦皇岛')">秦皇岛</div>
                    <div class="name" @click="changeNames6('庆阳')">庆阳</div>
                    <div class="name" @click="changeNames6('齐齐哈尔')">齐齐哈尔</div>
                    <div class="name" @click="changeNames6('青岛')">青岛</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">S</div>
                    <div>
                     <div class="name" @click="changeNames6('深圳')"> 深圳</div>
                    <div class="name" @click="changeNames6('石家庄')">石家庄</div>
                    <div class="name" @click="changeNames6('思茅')">思茅</div>
                    <div class="name" @click="changeNames6('神农架')">神农架</div>
                    <div class="name" @click="changeNames6('邵阳')">邵阳</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">T</div>
                    <div>
                    <div class="name" @click="changeNames6('铜仁')">铜仁</div>
                    <div class="name" @click="changeNames6('塔城')">塔城</div>
                    <div class="name" @click="changeNames6('腾冲')">腾冲</div>
                    <div class="name" @click="changeNames6('台州')">台州</div>
                    <div class="name" @click="changeNames6('通辽')">通辽</div>
                    <div class="name" @click="changeNames6('太原')">太原</div>
                    <div class="name" @click="changeNames6('天津')">天津</div>
                    <div class="name" @click="changeNames6('泰州')">泰州</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">W</div>
                    <div>
<div class="name" @click="changeNames6('武夷山')">武夷山</div>
<div class="name" @click="changeNames6('乌兰浩特')">乌兰浩特</div>
<div class="name" @click="changeNames6('温州')">温州</div>
<div class="name" @click="changeNames6('温州')">温州</div>
<div class="name" @click="changeNames6('乌鲁木齐')">乌鲁木齐</div>
<div class="name" @click="changeNames6('万州')">万州</div>
<div class="name" @click="changeNames6('乌海')">乌海</div>
                    <div class="name" @click="changeNames6('威海')">威海</div>
                    <div class="name" @click="changeNames6('武汉')">武汉</div>
                    <div class="name" @click="changeNames6('梧州')">梧州</div>
                    <div class="name" @click="changeNames6('文山')">文山</div>
                    <div class="name" @click="changeNames6('无锡')">无锡</div></div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="XYZ">
                 <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">X</div>
                    <div>
                    <div class="name" @click="changeNames6('兴义')">兴义</div>
                    <div class="name" @click="changeNames6('西昌')">西昌</div>
                    <div class="name" @click="changeNames6('厦门')">厦门</div>
                    <div class="name" @click="changeNames6('西安')">西安</div>
                    <div class="name" @click="changeNames6('襄阳')">襄阳</div>
                    <div class="name" @click="changeNames6('西宁')">西宁</div>
                    <div class="name" @click="changeNames6('锡林浩特')">锡林浩特</div>
                    <div class="name" @click="changeNames6('西双版纳')">西双版纳</div>
                    <div class="name" @click="changeNames6('忻州')">忻州</div>
                    <div class="name" @click="changeNames6('徐州')">徐州</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">Y</div>
                    <div>
                    <div class="name" @click="changeNames6('义乌')">义乌</div>
                    <div class="name" @click="changeNames6('永州')">永州</div>
                    <div class="name" @click="changeNames6('榆林')">榆林</div>
                    <div class="name" @click="changeNames6('延安')">延安</div>
                    <div class="name" @click="changeNames6('运城')">运城</div>
                    <div class="name" @click="changeNames6('烟台')">烟台</div>
                    <div class="name" @click="changeNames6('银川')">银川</div>
                    <div class="name" @click="changeNames6('宜昌')">宜昌</div>
                    <div class="name" @click="changeNames6('宜宾')">宜宾</div>
                    <div class="name" @click="changeNames6('盐城')">盐城</div>
                    <div class="name" @click="changeNames6('延吉')">延吉</div>
                    <div class="name" @click="changeNames6('伊宁')">伊宁</div>
                    <div class="name" @click="changeNames6('扬州')">扬州</div>
                    <div class="name" @click="changeNames6('玉树')">玉树</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">Z</div>
                    <div>
                     <div class="name" @click="changeNames6('珠海')">珠海</div>
                    <div class="name" @click="changeNames6('昭通')">昭通</div>
                    <div class="name" @click="changeNames6('张家界')">张家界</div>
                    <div class="name" @click="changeNames6('舟山')">舟山</div>
                    <div class="name" @click="changeNames6('郑州')">郑州</div>
                    <div class="name" @click="changeNames6('中卫')">中卫</div>
                    <div class="name" @click="changeNames6('芷江')">芷江</div>
                    <div class="name" @click="changeNames6('湛江')">湛江</div>
                    <div class="name" @click="changeNames6('遵义新舟')">遵义新舟</div>
                    <div class="name" @click="changeNames6('遵义茅台')">遵义茅台</div>
                </div>
                </div>

               </el-tab-pane>
            </el-tabs>
    </div>
    <!-- 多程3右搜索 -->
    <div class="posSearch7" v-show="posSearch7">
        <div style="background: gray;padding:10px">热门城市/国家（支持汉字/拼音/英文字母）</div>
            <el-tabs type="border-card">
                <el-tab-pane label="国际/中国港澳台" style="line-height: 50px;">
                     <div class="name" @click="changeNames7('中国香港')">中国香港</div>
                     <div class="name" @click="changeNames7('中国澳门')">中国澳门</div>
                     <div class="name" @click="changeNames7('中国台北')">中国台北</div>
                     <div class="name" @click="changeNames7('新加坡')">新加坡</div>
                     <div class="name" @click="changeNames7('雅加达')">雅加达</div>
                     <div class="name" @click="changeNames7('曼谷')">曼谷</div>
                     <div class="name" @click="changeNames7('')">普吉岛</div>
                     <div class="name" @click="changeNames7('马尼拉')">马尼拉</div>
                     <div class="name" @click="changeNames7('东京')">东京</div>
                     <div class="name" @click="changeNames7('大阪')">大阪</div>
                     <div class="name" @click="changeNames7('巴厘岛')">巴厘岛</div>
                     <div class="name" @click="changeNames7('吉隆坡')">吉隆坡</div>
                     <div class="name" @click="changeNames7('金边')">金边</div>
                     <div class="name" @click="changeNames7('洛杉矶')">洛杉矶</div>
                     <div class="name" @click="changeNames7('纽约')">纽约</div>
                     <div class="name" @click="changeNames7('旧金山')">旧金山</div>
                     <div class="name" @click="changeNames7('胡志明市')">胡志明市</div>
                     <div class="name" @click="changeNames7('迪拜')">迪拜</div>
               </el-tab-pane>
               <el-tab-pane label="亚洲/大洋洲" style="line-height: 50px;">
                     <div class="name" @click="changeNames7('中国香港')">中国香港</div>
                    <div class="name" @click="changeNames7('中国台北')">中国台北</div>
                    <div class="name" @click="changeNames7('中国高雄')">中国高雄</div>
                    <div class="name" @click="changeNames7('新加坡')">新加坡</div>
                    <div class="name" @click="changeNames7('首尔')">首尔</div>
                    <div class="name" @click="changeNames7('济州岛')">济州岛</div>
                    <div class="name" @click="changeNames7('曼谷')">曼谷</div>
                    <div class="name" @click="changeNames7('普吉岛')">普吉岛</div>
                    <div class="name" @click="changeNames7('釜山')">釜山</div>
                    <div class="name" @click="changeNames7('东京')">东京</div>
                    <div class="name" @click="changeNames7('大阪')">大阪</div>
                    <div class="name" @click="changeNames7('孟买')">孟买</div>
                    <div class="name" @click="changeNames7('巴厘岛')">巴厘岛</div>
                    <div class="name" @click="changeNames7('吉隆坡')">吉隆坡</div>
                    <div class="name" @click="changeNames7('金边')">金边</div>
                    <div class="name" @click="changeNames7('清迈')">清迈</div>
                    <div class="name" @click="changeNames7('苏梅岛')">苏梅岛</div>
                    <div class="name" @click="changeNames7('雅加达')">雅加达</div>
                    <div class="name" @click="changeNames7('马尼拉')">马尼拉</div>
                    <div class="name" @click="changeNames7('暹粒')">暹粒</div>
                    <div class="name" @click="changeNames7('悉尼')">悉尼</div>
                    <div class="name" @click="changeNames7('孟买')">孟买</div>
                    <div class="name" @click="changeNames7('乌兰巴托')">乌兰巴托</div>
                    <div class="name" @click="changeNames7('伊斯坦布尔')">伊斯坦布尔</div>
                    <div class="name" @click="changeNames7('札幌')">札幌</div>
                    <div class="name" @click="changeNames7('名古屋')">名古屋</div>
                    <div class="name" @click="changeNames7('河内')">河内</div>
                    <div class="name" @click="changeNames7('马累')">马累</div>
                    <div class="name" @click="changeNames7('福冈')">福冈</div>
                    <div class="name" @click="changeNames7('墨尔本')">墨尔本</div>
                    <div class="name" @click="changeNames7('奥克兰')">奥克兰</div>
                    <div class="name" @click="changeNames7('布里斯班')">布里斯班</div>
                    <div class="name" @click="changeNames7('珀斯')">珀斯</div>
                    <div class="name" @click="changeNames7('阿德莱德')">阿德莱德</div>
                    <div class="name" @click="changeNames7('惠林顿')">惠林顿</div>
                    <div class="name" @click="changeNames7('堪培拉')">堪培拉</div>
                    <div class="name" @click="changeNames7('凯恩斯')">凯恩斯</div>
                    <div class="name" @click="changeNames7('南迪')">南迪</div>
                    <div class="name" @click="changeNames7('黄金海岸')">黄金海岸</div>
                    <div class="name" @click="changeNames7('帕皮提')">帕皮提</div>
               </el-tab-pane>
               <el-tab-pane label="欧洲" style="line-height: 50px;">
                    <div class="name" @click="changeNames7('布达佩斯')">布达佩斯</div>
                    <div class="name" @click="changeNames7('基辅')">基辅</div>
                    <div class="name" @click="changeNames7('雅典')">雅典</div>
                    <div class="name" @click="changeNames7('维也纳')">维也纳</div>
                    <div class="name" @click="changeNames7('圣彼得堡')">圣彼得堡</div>
                    <div class="name" @click="changeNames7('日内瓦')">日内瓦</div>
                    <div class="name" @click="changeNames7('赫尔辛基')">赫尔辛基</div>
                    <div class="name" @click="changeNames7('马德里')">马德里</div>
                     <div class="name" @click="changeNames7('曼彻斯特')">曼彻斯特</div>
                    <div class="name" @click="changeNames7('里昂')">里昂</div>
                    <div class="name" @click="changeNames7('汉堡')">汉堡</div>
                    <div class="name" @click="changeNames7('杜塞尔多夫')">杜塞尔多夫</div>
                    <div class="name" @click="changeNames7('布鲁塞尔')">布鲁塞尔</div>
                    <div class="name" @click="changeNames7('哥本哈根')">哥本哈根</div>
                    <div class="name" @click="changeNames7('罗马')">罗马</div>
                    <div class="name" @click="changeNames7('莫斯科')">莫斯科</div>
                    <div class="name" @click="changeNames7('米兰')">米兰</div>
                    <div class="name" @click="changeNames7('柏林')">柏林</div>
                    <div class="name" @click="changeNames7('巴塞罗那')">巴塞罗那</div>
                    <div class="name" @click="changeNames7('斯德哥尔摩')">斯德哥尔摩</div>
                    <div class="name" @click="changeNames7('阿姆斯特丹')">阿姆斯特丹</div>
                    <div class="name" @click="changeNames7('慕尼黑')">慕尼黑</div>
                     <div class="name" @click="changeNames7('法兰克福')">法兰克福</div>
                    <div class="name" @click="changeNames7('巴黎')">巴黎</div>
                    <div class="name" @click="changeNames7('伦敦')">伦敦</div>
               </el-tab-pane>
               <el-tab-pane label="美洲" style="line-height: 50px;">
                    <div class="name" @click="changeNames7('达拉斯')">达拉斯</div>
                    <div class="name" @click="changeNames7('夏威夷')">夏威夷</div>
                    <div class="name" @click="changeNames7('蒙特利尔')">蒙特利尔</div>
                    <div class="name" @click="changeNames7('布宜诺斯')">布宜诺斯</div>
                    <div class="name" @click="changeNames7('埃德蒙顿')">埃德蒙顿</div>
                    <div class="name" @click="changeNames7('波特兰')">波特兰</div>
                    <div class="name" @click="changeNames7('奥兰多')">奥兰多</div>
                    <div class="name" @click="changeNames7('丹佛')">丹佛</div>
                    <div class="name" @click="changeNames7('迈阿密')">迈阿密</div>
                    <div class="name" @click="changeNames7('拉斯维加斯')">拉斯维加斯</div>
                    <div class="name" @click="changeNames7('墨西哥城')">墨西哥城</div>
                    <div class="name" @click="changeNames7('渥太华')">渥太华</div>
                    <div class="name" @click="changeNames7('圣保罗')">圣保罗</div>
                    <div class="name" @click="changeNames7('费城')">费城</div>
                    <div class="name" @click="changeNames7('纽约')">纽约</div>
                    <div class="name" @click="changeNames7('休斯顿')">休斯顿</div>
                    <div class="name" @click="changeNames7('亚特兰大')">亚特兰大</div>
                    <div class="name" @click="changeNames7('底特律')">底特律</div>
                    <div class="name" @click="changeNames7('波士顿')">波士顿</div>
                    <div class="name" @click="changeNames7('华盛顿')">华盛顿</div>
                     <div class="name" @click="changeNames7('西雅图')">西雅图</div>
                    <div class="name" @click="changeNames7('多伦多')">多伦多</div>
                    <div class="name" @click="changeNames7('温哥华')">温哥华</div>
                    <div class="name" @click="changeNames7('芝加哥')">芝加哥</div>
                    <div class="name" @click="changeNames7('旧金山')">旧金山</div>
                    <div class="name" @click="changeNames7('洛杉矶')">洛杉矶</div>
               
               </el-tab-pane>
               <el-tab-pane label="非洲" style="line-height: 50px;">
                    <div class="name" @click="changeNames7('开罗')">开罗</div>
                    <div class="name" @click="changeNames7('约翰内斯堡')">约翰内斯堡</div>
                    <div class="name" @click="changeNames7('开普敦')">开普敦</div>
                    <div class="name" @click="changeNames7('内罗毕')">内罗毕</div>
                    <div class="name" @click="changeNames7('拉各斯')">拉各斯</div>
                      <div class="name" @click="changeNames7('马普托')">马普托</div>
                    <div class="name" @click="changeNames7('阿比让')">阿比让</div>
                    <div class="name" @click="changeNames7('毛里求斯')">毛里求斯</div>
                    <div class="name" @click="changeNames7('罗安达')">罗安达</div>
                    <div class="name" @click="changeNames7('喀土穆')">喀土穆</div>
                    <div class="name" @click="changeNames7('阿克拉')">阿克拉</div>
                    <div class="name" @click="changeNames7('阿尔及尔')">阿尔及尔</div>
               
                         <div class="name" @click="changeNames7('卡萨布兰卡')">卡萨布兰卡</div>
                    <div class="name" @click="changeNames7('德班')">德班</div>
                    <div class="name" @click="changeNames7('突尼斯')">突尼斯</div>
                    <div class="name" @click="changeNames7('卢萨卡')">卢萨卡</div>
                    <div class="name" @click="changeNames7('哈拉雷')">哈拉雷</div>
               </el-tab-pane>
               <el-tab-pane label="国内热门" style="line-height: 50px;">
                     <div class="name" @click="changeNames7('北京')">北京</div>
                     <div class="name" @click="changeNames7('上海')">上海</div>
                     <div class="name" @click="changeNames7('广州')">广州</div>
                     <div class="name" @click="changeNames7('深圳')">深圳</div>
                     <div class="name" @click="changeNames7('成都')">成都</div>
                     <div class="name" @click="changeNames7('重庆')">重庆</div>
                     <div class="name" @click="changeNames7('厦门')">厦门</div>
                     <div class="name" @click="changeNames7('昆明')">昆明</div>
                     <div class="name" @click="changeNames7('杭州')">杭州</div>
                     <div class="name" @click="changeNames7('西安')">西安</div>
                     <div class="name" @click="changeNames7('武汉')">武汉</div>
                     <div class="name" @click="changeNames7('长沙')">长沙</div>
                     <div class="name" @click="changeNames7('南京')">南京</div>
                     <div class="name" @click="changeNames7('大连')">大连</div>
                     <div class="name" @click="changeNames7('郑州')">郑州</div>
                     <div class="name" @click="changeNames7('青岛')">青岛</div>
                     <div class="name" @click="changeNames7('天津')">天津</div>
                     <div class="name" @click="changeNames7('三亚')">三亚</div>
                     <div class="name" @click="changeNames7('海口')">海口</div>
                     <div class="name" @click="changeNames7('乌鲁木齐')">乌鲁木齐</div>
             

               </el-tab-pane>
            </el-tabs>
    </div>
        <div><div style="font-size:14px;margin-left:12px">出发城市</div><el-input v-model="city7" style="width: 150px;height:45px;font-size:20px" placeholder="城市" @focus="posSearch6=true;posSearch7=false;posSearch2=false;posSearch3=false;posSearch4=false;posSearch5=false;"/></div>
        <img src="@/assets/air/fly.png" alt="" style="margin-left:-20px;margin-right:40px;width: 50px;height:50px;" @click="change3" >
        <div><div style="font-size:14px;margin-left:12px">到达城市</div><el-input v-model="city8" style="width: 150px; height:45px;font-size:20px" placeholder="城市" @focus="posSearch7=true;posSearch6=false;posSearch2=false;posSearch3=false;posSearch4=false;posSearch5=false;"/></div>
    </div>
        <el-date-picker
        :style="{backgroundColor:color,borderRadius:'6px',padding:'10px',}"
        :disabled-date="disablePastDates"
        type="date"
        size="large"
        v-model="day5"
        placeholder="yy-mm-dd"
        style="width: 190px; height:75px;font-size:20px;"
        :editable="false"
        :clearable="false"
        />
        <el-icon style="position:absolute;right:35px;top:300px;" @click="add=true" v-show="!add"><CircleClose /></el-icon>

            </div>
        </div>
        
     </div>
        <div>
    <!-- 携带儿童 -->
    <el-checkbox v-model="checked1" label="携带儿童(2-12岁)" size="large" />
    <!-- 携带婴儿 -->
    <el-checkbox v-model="checked2" label="携带婴儿(14天-2岁)" size="large" style="margin-right:180px"/>
    <!-- 携带儿童说明 -->
    <el-popover
    style="position:absolute;top:0px"
    placement="top-start"
    title="儿童票/婴儿票预订说明"
    :width="300"
    trigger="hover"
    content="儿童票（2岁-12岁）&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
婴儿票（14天-2周岁，不含2周岁）&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
1. 使用儿童票的乘客：航班起飞当日应满2周岁但未满12周岁。&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
2. 婴儿乘客航班起飞当日应满14天但未满2周岁。航班起飞当日出生未满14天的婴儿，请至航空公司柜台申请购买机票。&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
3. 儿童、婴儿乘客需要凭护照乘机，订票时应准确填写护照号。&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
4. 目前暂不支持儿童单独订票，无人陪伴儿童请与航空公司联系购票。&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
5. 儿童购买成人票，登机时可能存在风险，请先和代理商咨询确认。&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
6. 婴儿票无座。"
  >
    <template #reference >
      <el-icon style="width: 200px;float:right;margin-top:15px"><Warning />携带婴儿/儿童预定说明</el-icon>
    </template>
     </el-popover>

     
        </div>
      <el-card class="poetry">
        <div class="right">
        <div class="r-t"> 
            <h1 style="font-size:80px">{{time1}}</h1>
            <div style="border: 6px solid white;padding:10px;width:80px;font-size:20px">{{time}}</div>
        </div>
        <div class="r-b"> 
            <div>自来自去梁上燕,相亲相近水中鸥</div>
            <div style="font-size: 12px;"><el-icon><Location /></el-icon>中国.丽江.泸沽湖</div>
         </div>
         <div class="cover"></div>
        </div>
      
      </el-card>
    <!-- 搜索按钮 -->
    <el-button :color="color" style="width: 200px;height:60px;margin-left:calc(50% - 100px);border-radius:20px">搜索机票</el-button>
      </el-card>
     
    </div>

  


  
    <TicketRecommon></TicketRecommon>
    <BottomComponent></BottomComponent>
    </div>
   
</template>

<script setup lang="ts">
import BottomComponent from '@/components/bottomComponent.vue';

import moment from 'moment';
import { onMounted,onBeforeUnmount,ref } from 'vue';
import TicketRecommon from '@/components/ticketRecommon.vue';
import { useColorStore } from '@/store/modules/color';
import { storeToRefs } from 'pinia';
let {color}=storeToRefs(useColorStore())
//当前时间
let time=ref(moment().format("YYYY.MM"))
let time1=ref(moment().format("DD"))
let timer=ref()
//单程还是往返
let oneOrTwo=ref('1')
//往返程时间
let day1=ref(moment().format("YYYY.MM.DD"))
let day2=ref('')
let day3=ref(moment().format("YYYY.MM.DD"))
let day4=ref('')
let day5=ref('')
//是否添加一程
let add=ref(true)

//出发城市和返回城市
let city1=ref('北京')
let city2=ref('杭州')
let city3=ref('北京')
let city4=ref('曼谷')
let city5=ref('')
let city6=ref('曼谷')
let city7=ref('')
let city8=ref('')
//搜索提示
let posSearch=ref()
let posSearch1=ref()
let posSearch2=ref()
let posSearch3=ref()
let posSearch4=ref()
let posSearch5=ref()
let posSearch6=ref()
let posSearch7=ref()
//携带儿童与婴儿
let checked1=ref()
let checked2=ref()
//出发城市和返回城市互换
const change=()=>{
    const between=city1.value
    city1.value=city2.value
    city2.value=between
}
const change1=()=>{
    const between=city3.value
    city3.value=city4.value
    city4.value=between
}
const change2=()=>{
    const between=city5.value
    city5.value=city6.value
    city6.value=between
}
const change3=()=>{
    const between=city7.value
    city7.value=city8.value
    city8.value=between
}
//单程模式下添加了返程就是返程模式
function notOne(){    
//如果有返程票就不再是单程旅行了
if(day2.value)oneOrTwo.value='2'
}
//切换到往返模式后要把返程时间填上
function isTwo(){
    console.log(moment().format("YYYY.MM"));
    
    day2.value=moment().format("YYYY.MM.DD")
}
//切换到单程要把返程时间置空
function isOne(){
    day2.value=''
}
//更多程
function isMore(){

}
//点击搜索提示改名
function changeNames(name:string){
city1.value=name
posSearch.value=false;
}
//点击搜索提示改名
function changeNames1(name:string){
city2.value=name
posSearch1.value=false;
}
//点击搜索提示改名
function changeNames2(name:string){
city3.value=name
posSearch2.value=false;
}
//点击搜索提示改名
function changeNames3(name:string){
city4.value=name
posSearch3.value=false;
}
//点击搜索提示改名
function changeNames4(name:string){
city5.value=name
posSearch4.value=false;
}
//点击搜索提示改名
function changeNames5(name:string){
city6.value=name
posSearch5.value=false;
}
//点击搜索提示改名
function changeNames6(name:string){
city7.value=name
posSearch6.value=false;
}
//点击搜索提示改名
function changeNames7(name:string){
city8.value=name
posSearch7.value=false;
}
//点击其他地方提示消失
const outSearch=()=>{
    posSearch.value=false
    posSearch1.value=false
    posSearch2.value=false
    posSearch3.value=false
    posSearch4.value=false
    posSearch5.value=false
    posSearch6.value=false
    posSearch7.value=false
}
//禁用过去日期
const disablePastDates = (date:any) => {
  return date < new Date(); // 如果日期小于当前日期，返回 true（禁用）
};
//第二个禁用开始时间
const disablePastDates1 = (date:any) => {
  return date < new Date(day1.value); // 如果日期小于当前日期，返回 true（禁用）
};
//取消事件委托防止点输入框时他也消失
const stop=(e:any)=>{
e.stopPropagation()
}
onMounted(()=>{
document.addEventListener('click',()=>{
        posSearch.value=false
        posSearch1.value=false
        posSearch2.value=false
        posSearch3.value=false
        posSearch4.value=false
        posSearch5.value=false
        posSearch6.value=false
        posSearch7.value=false
    })
timer.value=setInterval(()=>{
    time.value=moment().format("YYYY.MM")
    time1.value=moment().format("DD")
},1000)
})
onBeforeUnmount(()=>{
clearInterval(timer.value)
})
  
</script>

<style lang="less" scoped>
.search{
    position: relative;
    overflow:visible;
    width: 63%;
    min-width: 750px;
    border-radius: 18px; 
    position: relative;
    overflow: visible;
    .top{
        display: flex;
        justify-content: space-between;
    }
    .alert{
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    .alert1{
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    .city{  
            width: 100%;
            height: 30px;
            display: flex;
            justify-content: space-between;
    }
    .bt{
        display: flex;
        justify-content: space-between;
        
    }
    .multi{
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        .first{
            display: flex;
            justify-content: space-between;
            .City{
                position:relative;
                margin-top: 0px;
                display: flex;
            }
        }
        .second{
            display: flex;
            justify-content: space-between;
           .City{
            position:relative;
                margin-top: 0px;
                display: flex;
            }
        }
        .third{
            position:relative;
            margin-top:20px;
            display: flex;
            justify-content: space-between;
           .City{
                position: relative;
                margin-top: 0px;
                display: flex;
            }
        }
        .add{
            cursor: pointer;
            width: 613px;
            text-align: center;
            font-size: 20px;
            border-radius: 8px;
            padding: 20px;
            border: 1px dashed;
            margin:0 auto;
            margin-top: 20px;
        }
    }
}
.poetry{
    user-select: none;
    width: 52%;
    min-width: 420px;
    height: 100%;
    background: url('@/assets/air/luguhu.png') no-repeat;
    background-position-y: -230px;
    background-size:cover;
    border-radius: 18px;
    position: absolute;
    right: -59%;
    top:0px;
    .right{
        color: white;
        margin-left:300px;
        .r-t{
             position: absolute;
            top: 40px;
            right: 80px;
            z-index: 2;
            color: rgb(255, 255, 255);
        }
        .r-b{
             position: absolute;
             bottom: 20px;
             right: 60px;
              z-index: 2;
            margin-top: 80px;
            line-height: 25px;
        }
        .cover{     
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 1;
    width: 298px;
    height: 100%;
    border-radius: 18px;
    opacity: 1;
    background: linear-gradient(270deg, rgba(0, 0, 0, .8), transparent 100%);
        }
    }
}
.posSearch{
    width: 650px;
    height: 300px;
    position: absolute;
    left: 20px;
    cursor: pointer;
    top: 132px;
    z-index: 10;
    .hot{  
        span{
           float: left;
           margin-right: 25px;
           line-height: 40px;
        }
    }
    .name{
        float: left;
        margin-right: 25px;
     
       
    }
}
.posSearch1{
    width: 580px;
    height: 300px;
    position: absolute;
    right:20px;
    cursor: pointer;
    top: 132px;
    z-index: 10;
    .hot{  
        span{
           float: left;
           margin-right: 25px;
           line-height: 40px;
        }
    }
    .name{
        float: left;
        margin-right: 25px;
     
       
    }
}
.posSearch2{
    width: 650px;
    height: 300px;
    position: absolute;
    left: 0px;
    cursor: pointer;
    top:76px;
    z-index: 10;
    .hot{  
        span{
           float: left;
           margin-right: 25px;
           line-height: 40px;
        }
    }
    .name{
        float: left;
        margin-right: 25px;
     
       
    }
}
.posSearch3{
    width: 580px;
    height: 300px;
    position: absolute;
    left: 240px;
    cursor: pointer;
    top: 76px;
    z-index: 10;
    .hot{  
        span{
           float: left;
           margin-right: 25px;
           line-height: 40px;
        }
    }
    .name{
        float: left;
        margin-right: 25px;
     
       
    }
}
.posSearch4{
    width: 630px;
    height: 300px;
    position: absolute;
    left: 0px;
    cursor: pointer;
    top: 76px;
    z-index: 10;
    .hot{  
        span{
           float: left;
           margin-right: 25px;
           line-height: 40px;
        }
    }
    .name{
        float: left;
        margin-right: 25px;
     
       
    }
}
.posSearch5{
    width: 580px;
    height: 300px;
    position: absolute;
    left: 240px;
    cursor: pointer;
    top: 76px;
    z-index: 10;
    .hot{  
        span{
           float: left;
           margin-right: 25px;
           line-height: 40px;
        }
    }
    .name{
        float: left;
        margin-right: 25px;
     
       
    }
}
.posSearch6{
    width: 630px;
    height: 300px;
    position: absolute;
    left: 0px;
    cursor: pointer;
    top:80px;
    z-index: 10;
    .hot{  
        span{
           float: left;
           margin-right: 25px;
           line-height: 40px;
        }
    }
    .name{
        float: left;
        margin-right: 25px;
     
       
    }
}
.posSearch7{
    width: 580px;
    height: 270px;
    position: absolute;
    left: 240px;
    cursor: pointer;
    top: 80px;
    z-index: 10;
    .hot{  
        span{
           float: left;
           margin-right: 25px;
           line-height: 40px;
        }
    }
    .name{
        float: left;
        margin-right: 25px;
     
       
    }
}
:deep(.el-radio__input.is-checked .el-radio__inner) {
    background: rgb(255, 234, 0);
    border-color: rgb(255, 234, 0);
}
:deep(.el-radio__label){
    color:rgb(255, 234, 0)
}
:deep(.el-radio__input.is-checked+.el-radio__label) {
    color: rgb(255, 234, 0);
}
:deep(.el-input__wrapper) {
  border: none !important;
  box-shadow: none !important;
   background-color: inherit !important;
}
</style>