<template>
    <div :style="{backgroundColor:color,borderRadius:'6px',padding:'10px',height:'55px'}">
    <div style="display: flex;justify-content:space-between">
        <p style="font-size: 14px;margin-left:12px">出发城市</p>
        <p style="font-size: 14px;margin-right:12px">到达城市</p>
      </div>
   <!-- 城市选择 -->
    <div class="city"  >
        <el-input v-model="city1" @input="City"  style="width: 300px;height:40px;font-size:25px;" placeholder="出发城市" @focus="posSearch=true;posSearch1=false;"/>
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
        <el-icon style="font-size: 40px;" @click="change"><Switch /></el-icon>
        <el-input v-model="city2" @input="City" style="width: 300px; height:40px;font-size:25px;direction:rtl" placeholder="到达城市" @focus="posSearch1=true;posSearch=false;"/>
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
    position:absolute;left:20px;top:50px"></div>
    <div  v-show="posSearch1" style="
    border-left:12px solid transparent;
    border-right:12px solid transparent;
    border-top:12px solid transparent;
    border-bottom:12px solid;
    position:absolute;right:20px;top:50px"></div>
    </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useColorStore } from '@/store/modules/color';
import { storeToRefs } from 'pinia';
let {color}=storeToRefs(useColorStore())

//出发城市和返回城市
let city1=ref('北京')
let city2=ref('')

//搜索提示1搜索提示2
let posSearch=ref()
let posSearch1=ref()
const $emit=defineEmits(['getCity'])
//点击搜索提示改名
function changeNames(name:string){
city1.value=name
posSearch.value=false;
$emit('getCity',[city1.value,city2.value])
}
//点击搜索提示改名
function changeNames1(name:string){
city2.value=name
posSearch1.value=false;
$emit('getCity',[city1.value,city2.value])
}
//出发城市和返回城市互换
const change=()=>{
    if(city1.value&&city2.value){
 const between=city1.value
    city1.value=city2.value
    city2.value=between
    }
   
}

const City=()=>{
    $emit('getCity',[city1.value,city2.value])
}
onMounted(()=>{
    document.addEventListener('click',()=>{
          posSearch.value=false
          posSearch1.value=false
    })
})
</script>

<style lang="less" scoped>
div{
.city{      position: relative;
            width: 100%;
            height: 30px;
            display: flex;
            justify-content: space-between;
    }
.posSearch{
    width: 550px;
    height: 300px;
    position: absolute;
    left: 0px;
    cursor: pointer;
    top: 74px;
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
    right: 0px;
    cursor: pointer;
    top: 74px;
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
}
</style>