<template>
    <div @click="outSearch">
    <div>
      <el-card class="search" body-style=" width: 668px;height:220px">
    <!-- 单程还是往返 -->
    <el-radio-group v-model="oneOrTwo" :fill="color">
      <el-radio value="1" size="large" @change="isOne" :style="{color:color,borderColor:color,}">单程</el-radio>
      <el-radio value="2" size="large" @change="isTwo" :style="{color:color,borderColor:color}">往返</el-radio>
      <el-radio value="3" size="large" @change="isTwo" :style="{color:color,borderColor:color}">中转</el-radio>
    </el-radio-group>
    <!-- 对城市提示 -->
    <div class="alert"><p>出发城市</p><p>到达城市</p></div>
    <!-- 城市选择 -->
    <div class="city"  @click="stop">
        <el-input v-model="city1"  style="width: 300px;height:60px;font-size:25px;" placeholder="Please input" @focus="posSearch=true;posSearch1=false;posSearch2=false;"/>
           <!-- 搜索提示 -->
        <div class="posSearch" v-show="posSearch">
        <div style="background: gray;padding:10px">热门城市/国家（支持汉字/拼音/英文字母）</div>
            <el-tabs type="border-card">
               <el-tab-pane label="热门城市" class="hot">
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
                    <div style="margin-right: 1px;">Y</div>
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
                    <div class="name" @click="changeNames('玉树')">玉树</div>
                    </div>
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
        <el-icon style="font-size: 52px;" @click="change"><Switch /></el-icon>
        <el-input v-model="city2" style="width: 300px; height:60px;font-size:25px;direction:rtl" placeholder="Please input" @focus="posSearch1=true;posSearch=false;posSearch2=false;"/>
          <!-- 搜索提示 -->
         <div class="posSearch1" v-show="posSearch1">
        <div style="background: gray;padding:10px">热门城市/国家（支持汉字/拼音/英文字母）</div>
            <el-tabs type="border-card">
               <el-tab-pane label="热门城市" class="hot">
                     <span @click="changeNames1('北京')">北京</span>
                     <span @click="changeNames1('上海')">上海</span>
                     <span @click="changeNames1('广州')">广州</span>
                     <span @click="changeNames1('深圳')">深圳</span>
                     <span @click="changeNames1('成都')">成都</span>
                     <span @click="changeNames1('重庆')">重庆</span>
                     <span @click="changeNames1('厦门')">厦门</span>
                     <span @click="changeNames1('昆明')">昆明</span>
                     <span @click="changeNames1('杭州')">杭州</span>
                     <span @click="changeNames1('西安')">西安</span>
                     <span @click="changeNames1('武汉')">武汉</span>
                     <span @click="changeNames1('长沙')">长沙</span>
                     <span @click="changeNames1('南京')">南京</span>
                     <span @click="changeNames1('大连')">大连</span>
                     <span @click="changeNames1('郑州')">郑州</span>
                     <span @click="changeNames1('青岛')">青岛</span>
                     <span @click="changeNames1('天津')">天津</span>
                     <span @click="changeNames1('三亚')">三亚</span>
                     <span @click="changeNames1('海口')">海口</span>
                     <span @click="changeNames1('乌鲁木齐')">乌鲁木齐</span>
               </el-tab-pane>
               <el-tab-pane label="ABCDE">
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">A</div>
                    <div>
                    <div class="name" @click="changeNames1('安庆')">安庆</div>
                    <div class="name" @click="changeNames1('阿勒泰')">阿勒泰</div>
                    <div class="name" @click="changeNames1('安康')">安康</div>
                    <div class="name" @click="changeNames1('阿克苏')">阿克苏</div>
                    <div class="name" @click="changeNames1('安顺')">安顺</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">B</div>
                    <div>
                    <div class="name" @click="changeNames1('包头')">包头</div>
                    <div class="name" @click="changeNames1('北海')">北海</div>
                    <div class="name" @click="changeNames1('北京')">北京</div>
                    <div class="name" @click="changeNames1('百色')">百色</div>
                    <div class="name" @click="changeNames1('保山')">保山</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">C</div>
                    <div>
                     <div class="name" @click="changeNames1('常德')">常德</div>
                    <div class="name" @click="changeNames1('长白山')">长白山</div>
                    <div class="name" @click="changeNames1('成都')">成都</div>
                    <div class="name" @click="changeNames1('重庆')">重庆</div>
                    <div class="name" @click="changeNames1('长沙')">长沙</div>
                    <div class="name" @click="changeNames1('赤峰')">赤峰</div>
                    <div class="name" @click="changeNames1('潮州')">潮州</div>
                    <div class="name" @click="changeNames1('长治')">长治</div>
                    <div class="name" @click="changeNames1('长春')">长春</div>
                    <div class="name" @click="changeNames1('常州')">常州</div>
                    <div class="name" @click="changeNames1('昌都')">昌都</div>
                    <div class="name" @click="changeNames1('朝阳')">朝阳</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">E</div>
                    <div>
                     <div class="name" @click="changeNames1('鄂尔多斯')">鄂尔多斯</div>
                    <div class="name" @click="changeNames1('恩施')">恩施</div>
                </div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="FGHJ">
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">F</div>
                    <div>
                    <div class="name" @click="changeNames1('福州')">福州</div>
                    <div class="name" @click="changeNames1('阜阳')">阜阳</div>
            </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">G</div>
                    <div>
                    <div class="name" @click="changeNames1('贵阳')">贵阳</div>
                    <div class="name" @click="changeNames1('桂林')">桂林</div>
                    <div class="name" @click="changeNames1('广州')">广州</div>
                    <div class="name" @click="changeNames1('广元')">广元</div>
                    <div class="name" @click="changeNames1('格尔木')">格尔木</div>
                    <div class="name" @click="changeNames1('固原')">固原</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">H</div>
                    <div>
                     <div class="name" @click="changeNames1('呼和浩特')">呼和浩特</div>
                    <div class="name" @click="changeNames1('哈密')">哈密</div>
                    <div class="name" @click="changeNames1('黑河')">黑河</div>
                    <div class="name" @click="changeNames1('海拉尔')">海拉尔</div>
                    <div class="name" @click="changeNames1('哈尔滨')">哈尔滨</div>
                    <div class="name" @click="changeNames1('海口')">海口</div>
                    <div class="name" @click="changeNames1('黄山')">黄山</div>
                    <div class="name" @click="changeNames1('杭州')">杭州</div>
                    <div class="name" @click="changeNames1('邯郸')">邯郸</div>
                    <div class="name" @click="changeNames1('合肥')">合肥</div>
                    <div class="name" @click="changeNames1('汉中')">汉中</div>
                    <div class="name" @click="changeNames1('淮安')">淮安</div>
                    <div class="name" @click="changeNames1('河池')">河池</div>
                    <div class="name" @click="changeNames1('和田')">和田</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">J</div>
                    <div>
                     <div class="name" @click="changeNames1('九江')">九江</div>
                    <div class="name" @click="changeNames1('佳木斯')">佳木斯</div>
                    <div class="name" @click="changeNames1('济南')">济南</div>
                    <div class="name" @click="changeNames1('济宁')">济宁</div>
                    <div class="name" @click="changeNames1('揭阳')">揭阳</div>
                    <div class="name" @click="changeNames1('井冈山')">井冈山</div>
                    <div class="name" @click="changeNames1('晋江')">晋江</div>
                    <div class="name" @click="changeNames1('九寨沟')">九寨沟</div>
                    <div class="name" @click="changeNames1('锦州')">锦州</div>
                    <div class="name" @click="changeNames1('景德镇')">景德镇</div>
                    <div class="name" @click="changeNames1('嘉峪关')">嘉峪关</div></div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="KLMNP">
                      <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">K</div>
                    <div>
                    <div class="name" @click="changeNames1('喀什')">喀什</div>
                    <div class="name" @click="changeNames1('昆明')">昆明</div>
                    <div class="name" @click="changeNames1('康定')">康定</div>
                    <div class="name" @click="changeNames1('克拉玛依')">克拉玛依</div>
                    <div class="name" @click="changeNames1('库车')">库车</div>
                    <div class="name" @click="changeNames1('库尔勒')">库尔勒</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">L</div>
                    <div>
                    <div class="name" @click="changeNames1('兰州')">兰州</div>
                    <div class="name" @click="changeNames1('洛阳')">洛阳</div>
                    <div class="name" @click="changeNames1('丽江')">丽江</div>
                    <div class="name" @click="changeNames1('拉萨')">拉萨</div>
                    <div class="name" @click="changeNames1('黎平')">黎平</div>
                    <div class="name" @click="changeNames1('连城')">连城</div>
                    <div class="name" @click="changeNames1('连云港')">连云港</div>
                    <div class="name" @click="changeNames1('临沧')">临沧</div>
                    <div class="name" @click="changeNames1('临汾')">临汾</div>
                    <div class="name" @click="changeNames1('临沂')">临沂</div>
                    <div class="name" @click="changeNames1('林芝')">林芝</div>
                    <div class="name" @click="changeNames1('六盘水')">六盘水</div>
                    <div class="name" @click="changeNames1('柳州')">柳州</div>
                    <div class="name" @click="changeNames1('泸州')">泸州</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">M</div>
                    <div>
                     <div class="name" @click="changeNames1('牡丹江')">牡丹江</div>
                    <div class="name" @click="changeNames1('芒市')">芒市</div>
                    <div class="name" @click="changeNames1('满洲里')">满洲里</div>
                    <div class="name" @click="changeNames1('绵阳')">绵阳</div>
                    <div class="name" @click="changeNames1('梅县')">梅县</div>
                    <div class="name" @click="changeNames1('漠河')">漠河</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">N</div>
                    <div>
                    <div class="name" @click="changeNames1('那拉提')">那拉提</div>
                    <div class="name" @click="changeNames1('南昌')">南昌</div>
                    <div class="name" @click="changeNames1('宁波')">宁波</div>
                    <div class="name" @click="changeNames1('南京')">南京</div>
                    <div class="name" @click="changeNames1('南充')">南充</div>
                    <div class="name" @click="changeNames1('南宁')">南宁</div>
                    <div class="name" @click="changeNames1('南阳')">南阳</div>
                    <div class="name" @click="changeNames1('南通')">南通</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">P</div>
                    <div>
                    <div class="name" @click="changeNames1('攀枝花')">攀枝花</div>
                    </div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="QRSTW">
                      <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">Q</div>
                    <div>
                    <div class="name" @click="changeNames1('衢州')">衢州</div>
                    <div class="name" @click="changeNames1('秦皇岛')">秦皇岛</div>
                    <div class="name" @click="changeNames1('庆阳')">庆阳</div>
                    <div class="name" @click="changeNames1('齐齐哈尔')">齐齐哈尔</div>
                    <div class="name" @click="changeNames1('青岛')">青岛</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">S</div>
                    <div>
                     <div class="name" @click="changeNames1('深圳')"> 深圳</div>
                    <div class="name" @click="changeNames1('石家庄')">石家庄</div>
                    <div class="name" @click="changeNames1('思茅')">思茅</div>
                    <div class="name" @click="changeNames1('神农架')">神农架</div>
                    <div class="name" @click="changeNames1('邵阳')">邵阳</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">T</div>
                    <div>
                    <div class="name" @click="changeNames1('铜仁')">铜仁</div>
                    <div class="name" @click="changeNames1('塔城')">塔城</div>
                    <div class="name" @click="changeNames1('腾冲')">腾冲</div>
                    <div class="name" @click="changeNames1('台州')">台州</div>
                    <div class="name" @click="changeNames1('通辽')">通辽</div>
                    <div class="name" @click="changeNames1('太原')">太原</div>
                    <div class="name" @click="changeNames1('天津')">天津</div>
                    <div class="name" @click="changeNames1('泰州')">泰州</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">W</div>
                    <div>
<div class="name" @click="changeNames1('武夷山')">武夷山</div>
<div class="name" @click="changeNames1('乌兰浩特')">乌兰浩特</div>
<div class="name" @click="changeNames1('温州')">温州</div>
<div class="name" @click="changeNames1('温州')">温州</div>
<div class="name" @click="changeNames1('乌鲁木齐')">乌鲁木齐</div>
<div class="name" @click="changeNames1('万州')">万州</div>
<div class="name" @click="changeNames1('乌海')">乌海</div>
                    <div class="name" @click="changeNames1('威海')">威海</div>
                    <div class="name" @click="changeNames1('武汉')">武汉</div>
                    <div class="name" @click="changeNames1('梧州')">梧州</div>
                    <div class="name" @click="changeNames1('文山')">文山</div>
                    <div class="name" @click="changeNames1('无锡')">无锡</div></div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="XYZ">
                 <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">X</div>
                    <div>
                    <div class="name" @click="changeNames1('兴义')">兴义</div>
                    <div class="name" @click="changeNames1('西昌')">西昌</div>
                    <div class="name" @click="changeNames1('厦门')">厦门</div>
                    <div class="name" @click="changeNames1('西安')">西安</div>
                    <div class="name" @click="changeNames1('襄阳')">襄阳</div>
                    <div class="name" @click="changeNames1('西宁')">西宁</div>
                    <div class="name" @click="changeNames1('锡林浩特')">锡林浩特</div>
                    <div class="name" @click="changeNames1('西双版纳')">西双版纳</div>
                    <div class="name" @click="changeNames1('忻州')">忻州</div>
                    <div class="name" @click="changeNames1('徐州')">徐州</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">Y</div>
                    <div>
                    <div class="name" @click="changeNames1('义乌')">义乌</div>
                    <div class="name" @click="changeNames1('永州')">永州</div>
                    <div class="name" @click="changeNames1('榆林')">榆林</div>
                    <div class="name" @click="changeNames1('延安')">延安</div>
                    <div class="name" @click="changeNames1('运城')">运城</div>
                    <div class="name" @click="changeNames1('烟台')">烟台</div>
                    <div class="name" @click="changeNames1('银川')">银川</div>
                    <div class="name" @click="changeNames1('宜昌')">宜昌</div>
                    <div class="name" @click="changeNames1('宜宾')">宜宾</div>
                    <div class="name" @click="changeNames1('盐城')">盐城</div>
                    <div class="name" @click="changeNames1('延吉')">延吉</div>
                    <div class="name" @click="changeNames1('伊宁')">伊宁</div>
                    <div class="name" @click="changeNames1('扬州')">扬州</div>
                    <div class="name" @click="changeNames1('玉树')">玉树</div></div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">Z</div>
                    <div>
                     <div class="name" @click="changeNames1('珠海')">珠海</div>
                    <div class="name" @click="changeNames1('昭通')">昭通</div>
                    <div class="name" @click="changeNames1('张家界')">张家界</div>
                    <div class="name" @click="changeNames1('舟山')">舟山</div>
                    <div class="name" @click="changeNames1('郑州')">郑州</div>
                    <div class="name" @click="changeNames1('中卫')">中卫</div>
                    <div class="name" @click="changeNames1('芷江')">芷江</div>
                    <div class="name" @click="changeNames1('湛江')">湛江</div>
                    <div class="name" @click="changeNames1('遵义新舟')">遵义新舟</div>
                    <div class="name" @click="changeNames1('遵义茅台')">遵义茅台</div>
                </div>
                </div>

               </el-tab-pane>
            </el-tabs>
        </div>
    <div  v-show="posSearch" style="
    border-left:12px solid transparent;
    border-right:12px solid transparent;
    border-top:12px solid transparent;
    border-bottom:12px solid;
    position:absolute;left:66px;top:200px"></div>
    <div  v-show="posSearch1" style="
    border-left:12px solid transparent;
    border-right:12px solid transparent;
    border-top:12px solid transparent;
    border-bottom:12px solid;
    position:absolute;left:642px;top:200px"></div>
     <div  v-show="posSearch2" style="
    border-left:12px solid transparent;
    border-right:12px solid transparent;
    border-top:12px solid transparent;
    z-index:10;
    border-bottom:12px solid;
    position:absolute;left:642px;top:300px"></div>
    </div>
    <!-- 对底部日期的提示 -->
    <div class="alert"><p>出发日期</p><p v-if="oneOrTwo!=='3'">返程日期</p>
    <p v-if="oneOrTwo==='3'">指定中转城市</p></div>
    <!-- 底部的日期选择 -->
    <div class="bt">
        <el-date-picker
        v-model="day1"
        type="date"
        size="large"
        style="width: 240px; height:60px;font-size:32px;cursor:pointer"
        :clearable="false"
        :editable="false"
        @change="date(day1)"
        />
        <div  style="font-size:28px;margin-top:14px;width:90px;margin-left:6px">{{ Day }}</div>
         <el-date-picker
        v-if="oneOrTwo!=='3'"
        v-model="day2"
        type="date"
        placeholder="添加返程"
        size="large"
        style="width: 240px; height:60px;font-size:32px;cursor:pointer"
        @change="notOne"
        :editable="false"
        :clearable="false"
         />
         <div v-if="oneOrTwo!=='3'&&Day1" style="font-size:28px;margin-top:14px;width:90px;margin-left:6px">{{ Day1 }}</div>
         <!-- 中转城市 -->
         <div @click="stop">
             <el-input v-model="city3"  v-show="oneOrTwo==='3'" style="direction:rtl;width: 300px;height:60px;font-size:25px;" placeholder="中转城市" @focus="posSearch2=true;posSearch1=false;posSearch=false;"/>
         <!-- 搜索提示 -->
        <div class="posSearch2" v-show="posSearch2">
        <div style="background: gray;padding:10px">热门城市/国家（支持汉字/拼音/英文字母</div>
            <el-tabs type="border-card">
               <el-tab-pane label="热门城市" class="hot">
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
                    <div style="margin-right: 1px;">Y</div>
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
                    <div class="name" @click="changeNames2('玉树')">玉树</div>
                    </div>
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
         </div>
        
    </div>
    <div>
    <el-checkbox v-model="student" label="学生票" size="large" />
    <el-checkbox v-model="hightWay" label="高铁动车" size="large" />
    </div>
        <el-button :color="color" style="width: 200px;height:60px;margin-left:225px;border-radius:20px">搜索火车票</el-button>
      </el-card>
      <el-card class="poetry" body-style=" width: 220px;height:220px">
        <div class="right">
        <div class="r-t"> 
            <h1 style="font-size:80px">{{time1}}</h1>
            <div style="border: 6px solid white;padding:10px;width:80px;font-size:20px">{{time}}</div>
        </div>
        <div class="r-b"> 
            <div>冰雪奇缘的现实画卷</div>
            <div style="font-size: 12px;"><el-icon><Location /></el-icon>中国.哈尔滨.哈尔滨冰雪大世界</div>
         </div>
         <div class="cover"></div>
        </div>
      
      </el-card>
    </div>
 
   <RightestComponent style="position: absolute;right:20px;top:20px;z-index:-1;"></RightestComponent>
    <TicketRecommon></TicketRecommon>
     <BottomComponent></BottomComponent>
    </div>
   
</template>

<script setup lang="ts">
import BottomComponent from '@/components/bottomComponent.vue';
import RightestComponent from '@/components/topBar/RightestComponent.vue';
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
//星期几
let Day=ref()
let Day1=ref('')
//单程还是往返
let oneOrTwo=ref('1')
//往返程时间
let day1=ref(moment().format("YYYY.MM.DD"))
let day2=ref('')
//出发城市和返回城市
let city1=ref('北京')
let city2=ref('杭州')
//中转城市
let city3=ref('')
//学生票和高铁动车
let student=ref()
let hightWay=ref()
//搜索提示
let posSearch=ref()
let posSearch1=ref()
let posSearch2=ref()
//出发城市和返回城市互换
const change=()=>{
    const between=city1.value
    city1.value=city2.value
    city2.value=between
}
//单程模式下添加了返程就是返程模式
function notOne(){   
//如果有返程票就不再是单程旅行了
if(day2.value)oneOrTwo.value='2'
//更新一下日期
const date=new Date(day2.value);
    const dayNum=date.getDay()
    const dayOfWeek=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
    const dayl=dayOfWeek[dayNum]
    Day1.value=dayl
}
//切换到往返模式后要把返程时间填上
function isTwo(){
    day2.value=moment().format("YYYY.MM.DD")
    //切到往返模式时把星期数给他
    const date=new Date(day2.value);
    const dayNum=date.getDay()
    const dayOfWeek=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
    const dayl=dayOfWeek[dayNum]
    Day1.value=dayl
}
//切换到单程要把返程时间置空
function isOne(){
    day2.value=''
    //切到单程模式时把星期数置空
    Day1.value=''
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
//点击其他地方提示消失
const outSearch=()=>{
    posSearch1.value=false
    posSearch.value=false
    posSearch2.value=false
}
//取消事件委托防止点输入框时他也消失
const stop=(e)=>{
e.stopPropagation()
}
const date=(day:string)=>{
    const date=new Date(day);
    const dayNum=date.getDay()
    const dayOfWeek=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
    const dayl=dayOfWeek[dayNum]
    Day.value=dayl
    return dayl
}
onMounted(()=>{
//加载时调用一下日期
Day.value=date(day1.value)
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
    width: 700px;
    height: 400px;
    border-radius: 18px;
    .top{
        display: flex;
        justify-content: space-between;
    }
    .alert{
        margin-top: 40px;
            width: 650px;
            height: 30px;
            display: flex;
            justify-content: space-between;
        }
    .city{
            width: 650px;
            height: 30px;
            display: flex;
            justify-content: space-between;
    }
    .bt{
        display: flex;
        justify-content: space-between;
        
    }
}
.poetry{
    user-select: none;
    margin-left: 20px;
    position: absolute;
    left:720px;
    top:20px;
    width: 500px;
    height: 400px;
    background: url('@/assets/train/snow.png') no-repeat;
    background-position-y: -230px;
    background-size:cover;
    border-radius: 18px;
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
             top: 270px;
             right: 60px;
              z-index: 2;
            margin-top: 65px;
            line-height: 25px;
        }
        .cover{     
    position: absolute;
    top: -1px;
    right: 0px;
    z-index: 1;
    width: 298px;
    height: 402px;
    border-radius: 18px;
    opacity: 1;
    background: linear-gradient(270deg, rgba(0, 0, 0, .8), transparent 100%);
        }
    }
}
.posSearch{
    width: 550px;
    height: 300px;
    position: absolute;
    left: 40px;
    cursor: pointer;
    top: 224px;
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
    width: 550px;
    height: 300px;
    position: absolute;
    left: 142px;
    cursor: pointer;
    top: 224px;
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
    width: 550px;
    height: 300px;
    position: absolute;
    left: 148px;
    cursor: pointer;
    top: 324px;
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
</style>