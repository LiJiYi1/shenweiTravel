<template>
    <div>
   <!-- 城市选择 -->
    <div class="city"  >
        <el-input v-model="city1"  style="width: 300px;height:60px;font-size:25px;" placeholder="出发城市" @focus="posSearch=true;posSearch1=false;"/>
           <!-- 搜索提示 -->
        <div class="posSearch" v-show="posSearch">
        <div style="background: gray;padding:10px">热门港口（支持汉字/拼音/英文字母）</div>
            <el-tabs type="border-card">
               <el-tab-pane label="热门港口" class="hot">
                     <span @click="changeNames('北海')">北海</span>
                     <span @click="changeNames('涠洲岛')">涠洲岛</span>
                     <span @click="changeNames('厦门')">厦门</span>
                     <span @click="changeNames('鼓浪屿')">鼓浪屿</span>
                     <span @click="changeNames('朱家尖')">朱家尖</span>
                     <span @click="changeNames('普陀山')">普陀山</span>
                     <span @click="changeNames('海口')">海口</span>
                     <span @click="changeNames('徐闻')">徐闻</span>
                     <span @click="changeNames('深圳')">深圳</span>
                     <span @click="changeNames('珠海')">珠海</span>
                     <span @click="changeNames('澳门')">澳门</span>
                     <span @click="changeNames('大连')">大连</span>
                     <span @click="changeNames('烟台')">烟台</span>
                     <span @click="changeNames('上海')">上海</span>
                     <span @click="changeNames('嵊泗')">嵊泗</span>
                     <span @click="changeNames('外伶仃岛')">外伶仃岛</span>
               </el-tab-pane>
               <el-tab-pane label="ABCDE">
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">A</div>
                    <div>
                    <div class="name" @click="changeNames('澳门')">澳门</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">B</div>
                    <div>
                    <div class="name" @click="changeNames('北海')">北海</div>
                    <div class="name" @click="changeNames('白沙岛')">白沙岛</div>
               </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">C</div>
                    <div>
                     <div class="name" @click="changeNames('长岛')">长岛</div>
                     <div class="name" @click="changeNames('重庆')">重庆</div>
                     <div class="name" @click="changeNames('长沙')">长沙</div>
                </div>
                </div>
                   <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">D</div>
                    <div>
                     <div class="name" @click="changeNames('大连')">大连</div>
                     <div class="name" @click="changeNames('烟台')">烟台</div>
                     <div class="name" @click="changeNames('东澳岛')">长沙</div>
                     <div class="name" @click="changeNames('大长山鸳鸯港')">大长山鸳鸯港</div>
                     <div class="name" @click="changeNames('东极岛')">东极岛</div>
                     <div class="name" @click="changeNames('大理')">大理</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">E</div>
                    <div>
                    <div class="name" @click="changeNames('恩施')">恩施</div>
                </div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="FGHJ">
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">F</div>
                    <div>
                    <div class="name" @click="changeNames('奉节')">奉节</div>
                    <div class="name" @click="changeNames('佛山')">佛山</div>
            </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">G</div>
                    <div>
                    <div class="name" @click="changeNames('桂山岛')">桂山岛</div>
                    <div class="name" @click="changeNames('广鹿岛')">广鹿岛</div>
                    <div class="name" @click="changeNames('桂林')">桂林</div>
                    <div class="name" @click="changeNames('枸杞岛')">枸杞岛</div>
                     <div class="name" @click="changeNames('广州')">广州</div>
                     <div class="name" @click="changeNames('格仙港')">格仙港</div>
                     <div class="name" @click="changeNames('瓜皮岛')">瓜皮岛</div>
                     <div class="name" @click="changeNames('港珠澳大桥上游')">港珠澳大桥上游</div>


                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">H</div>
                    <div>
                    <div class="name" @click="changeNames('海口')">海口</div>
                    <div class="name" @click="changeNames('虎门')">虎门</div>
                    <div class="name" @click="changeNames('花鸟岛')"> 花鸟岛</div>
                    <div class="name" @click="changeNames('杭州')"> 杭州</div>
                    <div class="name" @click="changeNames('哈仙岛')"> 哈仙岛</div>

                </div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="KLMNP">
                      <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">K</div>
                    <div>
                    <div class="name" @click="changeNames('昆明')">昆明</div>
                  </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">L</div>
                    <div>
                    <div class="name" @click="changeNames('两坝一峡')">两坝一峡</div>
                    <div class="name" @click="changeNames('旅顺')">旅顺</div>
                    <div class="name" @click="changeNames('龙口')">龙口</div>
                    <div class="name" @click="changeNames('柳州')">柳州</div>
                    <div class="name" @click="changeNames('刘公岛')">刘公岛</div>

                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">M</div>
                    <div>
                     <div class="name" @click="changeNames('茂名')">茂名</div>
                     <div class="name" @click="changeNames('蚂蚁岛')">蚂蚁岛</div>

               
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">N</div>
                    <div>
                    <div class="name" @click="changeNames('宁波')">宁波</div>
                    <div class="name" @click="changeNames('南沙')">南沙</div>

                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">P</div>
                    <div>
                    <div class="name" @click="changeNames('皮口港')">皮口港</div>
                    <div class="name" @click="changeNames('琶洲')">琶洲</div>
                    <div class="name" @click="changeNames('蓬莱')">蓬莱</div>
                    <div class="name" @click="changeNames('普陀山')">普陀山</div>

                    </div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="QRSTW">
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">S</div>
                    <div>
                     <div class="name" @click="changeNames('深圳')"> 深圳</div>
                     <div class="name" @click="changeNames('沈家门')"> 沈家门</div>
                     <div class="name" @click="changeNames('沈家湾')"> 沈家湾</div>
                     <div class="name" @click="changeNames('上海')"> 上海</div>
                     <div class="name" @click="changeNames('上川岛')">上川岛</div>
                     <div class="name" @click="changeNames('三江')"> 三江</div>
                     <div class="name" @click="changeNames('汕尾')"> 汕尾</div>
                     <div class="name" @click="changeNames('三亚')"> 三亚</div>
                     <div class="name" @click="changeNames('嵊泗')"> 嵊泗</div>

                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">T</div>
                    <div>
                    <div class="name" @click="changeNames('台山市')">台山市</div>
                    <div class="name" @click="changeNames('桃花岛')">桃花岛</div>

                    </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">W</div>
                    <div>
                 <div class="name" @click="changeNames('涠洲岛')">涠洲岛</div>
                 <div class="name" @click="changeNames('武汉')">武汉</div>
                 <div class="name" @click="changeNames('威海')">威海</div>
                 <div class="name" @click="changeNames('巫山')">巫山</div>
                 <div class="name" @click="changeNames('文甲村')">文甲村</div>
                 <div class="name" @click="changeNames('外伶仃岛')">外伶仃岛</div>
                 <div class="name" @click="changeNames('万山岛')">万山岛</div>
                 <div class="name" @click="changeNames('万州')">万州</div>



                 </div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="XYZ">
                 <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">X</div>
                    <div>
                    <div class="name" @click="changeNames('香港')">香港</div>
                    <div class="name" @click="changeNames('小长山岛')">小长山岛</div>
                    <div class="name" @click="changeNames('虾峙')">虾峙</div>
                    <div class="name" @click="changeNames('西岛')">西岛</div>
                    <div class="name" @click="changeNames('下川岛')">下川岛</div>
                    <div class="name" @click="changeNames('象鼻山')">象鼻山</div>
                    <div class="name" @click="changeNames('西双版纳')">西双版纳</div>
                    <div class="name" @click="changeNames('徐闻')">徐闻</div>
                    <div class="name" @click="changeNames('杏树港')">杏树港</div>


                   </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 1px;">Y</div>
                    <div>
                    <div class="name" @click="changeNames('烟台')">烟台</div>
                     <div class="name" @click="changeNames('宜昌')">宜昌</div>
                     <div class="name" @click="changeNames('阳朔')">阳朔</div>
                     <div class="name" @click="changeNames('一江四湖游')">一江四湖游</div>
                    </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">Z</div>
                    <div>
                     <div class="name" @click="changeNames('珠海')">珠海</div>
                    <div class="name" @click="changeNames('中山')">中山</div>
                    <div class="name" @click="changeNames('獐子岛')">獐子岛</div>
                    <div class="name" @click="changeNames('湛江')">湛江</div>


           
                </div>
                </div>

               </el-tab-pane>
            </el-tabs>
        </div>
         <div class="posSearch1" v-show="posSearch1">
        <div style="background: gray;padding:10px">热门港口（支持汉字/拼音/英文字母）</div>
            <el-tabs type="border-card">
               <el-tab-pane label="热门港口" class="hot">
                     <span @click="changeNames1('北海')">北海</span>
                     <span @click="changeNames1('涠洲岛')">涠洲岛</span>
                     <span @click="changeNames1('厦门')">厦门</span>
                     <span @click="changeNames1('鼓浪屿')">鼓浪屿</span>
                     <span @click="changeNames1('朱家尖')">朱家尖</span>
                     <span @click="changeNames1('普陀山')">普陀山</span>
                     <span @click="changeNames1('海口')">海口</span>
                     <span @click="changeNames1('徐闻')">徐闻</span>
                     <span @click="changeNames1('深圳')">深圳</span>
                     <span @click="changeNames1('珠海')">珠海</span>
                     <span @click="changeNames1('澳门')">澳门</span>
                     <span @click="changeNames1('大连')">大连</span>
                     <span @click="changeNames1('烟台')">烟台</span>
                     <span @click="changeNames1('上海')">上海</span>
                     <span @click="changeNames1('嵊泗')">嵊泗</span>
                     <span @click="changeNames1('外伶仃岛')">外伶仃岛</span>
               </el-tab-pane>
               <el-tab-pane label="ABCDE">
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">A</div>
                    <div>
                    <div class="name" @click="changeNames1('澳门')">澳门</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">B</div>
                    <div>
                    <div class="name" @click="changeNames1('北海')">北海</div>
                    <div class="name" @click="changeNames1('白沙岛')">白沙岛</div>
               </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">C</div>
                    <div>
                     <div class="name" @click="changeNames1('长岛')">长岛</div>
                     <div class="name" @click="changeNames1('重庆')">重庆</div>
                     <div class="name" @click="changeNames1('长沙')">长沙</div>
                </div>
                </div>
                   <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">D</div>
                    <div>
                     <div class="name" @click="changeNames1('大连')">大连</div>
                     <div class="name" @click="changeNames1('烟台')">烟台</div>
                     <div class="name" @click="changeNames1('东澳岛')">长沙</div>
                     <div class="name" @click="changeNames1('大长山鸳鸯港')">大长山鸳鸯港</div>
                     <div class="name" @click="changeNames1('东极岛')">东极岛</div>
                     <div class="name" @click="changeNames1('大理')">大理</div>
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">E</div>
                    <div>
                    <div class="name" @click="changeNames1('恩施')">恩施</div>
                </div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="FGHJ">
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">F</div>
                    <div>
                    <div class="name" @click="changeNames1('奉节')">奉节</div>
                    <div class="name" @click="changeNames1('佛山')">佛山</div>
            </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">G</div>
                    <div>
                    <div class="name" @click="changeNames1('桂山岛')">桂山岛</div>
                    <div class="name" @click="changeNames1('广鹿岛')">广鹿岛</div>
                    <div class="name" @click="changeNames1('桂林')">桂林</div>
                    <div class="name" @click="changeNames1('枸杞岛')">枸杞岛</div>
                     <div class="name" @click="changeNames1('广州')">广州</div>
                     <div class="name" @click="changeNames1('格仙港')">格仙港</div>
                     <div class="name" @click="changeNames1('瓜皮岛')">瓜皮岛</div>
                     <div class="name" @click="changeNames1('港珠澳大桥上游')">港珠澳大桥上游</div>


                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">H</div>
                    <div>
                    <div class="name" @click="changeNames1('海口')">海口</div>
                    <div class="name" @click="changeNames1('虎门')">虎门</div>
                    <div class="name" @click="changeNames1('花鸟岛')"> 花鸟岛</div>
                    <div class="name" @click="changeNames1('杭州')"> 杭州</div>
                    <div class="name" @click="changeNames1('哈仙岛')"> 哈仙岛</div>

                </div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="KLMNP">
                      <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">K</div>
                    <div>
                    <div class="name" @click="changeNames1('昆明')">昆明</div>
                  </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">L</div>
                    <div>
                    <div class="name" @click="changeNames1('两坝一峡')">两坝一峡</div>
                    <div class="name" @click="changeNames1('旅顺')">旅顺</div>
                    <div class="name" @click="changeNames1('龙口')">龙口</div>
                    <div class="name" @click="changeNames1('柳州')">柳州</div>
                    <div class="name" @click="changeNames1('刘公岛')">刘公岛</div>

                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">M</div>
                    <div>
                     <div class="name" @click="changeNames1('茂名')">茂名</div>
                     <div class="name" @click="changeNames1('蚂蚁岛')">蚂蚁岛</div>

               
                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">N</div>
                    <div>
                    <div class="name" @click="changeNames1('宁波')">宁波</div>
                    <div class="name" @click="changeNames1('南沙')">南沙</div>

                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">P</div>
                    <div>
                    <div class="name" @click="changeNames1('皮口港')">皮口港</div>
                    <div class="name" @click="changeNames1('琶洲')">琶洲</div>
                    <div class="name" @click="changeNames1('蓬莱')">蓬莱</div>
                    <div class="name" @click="changeNames1('普陀山')">普陀山</div>

                    </div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="QRSTW">
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">S</div>
                    <div>
                     <div class="name" @click="changeNames1('深圳')"> 深圳</div>
                     <div class="name" @click="changeNames1('沈家门')"> 沈家门</div>
                     <div class="name" @click="changeNames1('沈家湾')"> 沈家湾</div>
                     <div class="name" @click="changeNames1('上海')"> 上海</div>
                     <div class="name" @click="changeNames1('上川岛')">上川岛</div>
                     <div class="name" @click="changeNames1('三江')"> 三江</div>
                     <div class="name" @click="changeNames1('汕尾')"> 汕尾</div>
                     <div class="name" @click="changeNames1('三亚')"> 三亚</div>
                     <div class="name" @click="changeNames1('嵊泗')"> 嵊泗</div>

                </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">T</div>
                    <div>
                    <div class="name" @click="changeNames1('台山市')">台山市</div>
                    <div class="name" @click="changeNames1('桃花岛')">桃花岛</div>

                    </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">W</div>
                    <div>
                 <div class="name" @click="changeNames1('涠洲岛')">涠洲岛</div>
                 <div class="name" @click="changeNames1('武汉')">武汉</div>
                 <div class="name" @click="changeNames1('威海')">威海</div>
                 <div class="name" @click="changeNames1('巫山')">巫山</div>
                 <div class="name" @click="changeNames1('文甲村')">文甲村</div>
                 <div class="name" @click="changeNames1('外伶仃岛')">外伶仃岛</div>
                 <div class="name" @click="changeNames1('万山岛')">万山岛</div>
                 <div class="name" @click="changeNames1('万州')">万州</div>



                 </div>
                </div>
               </el-tab-pane>
               <el-tab-pane label="XYZ">
                 <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">X</div>
                    <div>
                    <div class="name" @click="changeNames1('香港')">香港</div>
                    <div class="name" @click="changeNames1('小长山岛')">小长山岛</div>
                    <div class="name" @click="changeNames1('虾峙')">虾峙</div>
                    <div class="name" @click="changeNames1('西岛')">西岛</div>
                    <div class="name" @click="changeNames1('下川岛')">下川岛</div>
                    <div class="name" @click="changeNames1('象鼻山')">象鼻山</div>
                    <div class="name" @click="changeNames1('西双版纳')">西双版纳</div>
                    <div class="name" @click="changeNames1('徐闻')">徐闻</div>
                    <div class="name" @click="changeNames1('杏树港')">杏树港</div>


                   </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 1px;">Y</div>
                    <div>
                    <div class="name" @click="changeNames1('烟台')">烟台</div>
                     <div class="name" @click="changeNames1('宜昌')">宜昌</div>
                     <div class="name" @click="changeNames1('阳朔')">阳朔</div>
                     <div class="name" @click="changeNames1('一江四湖游')">一江四湖游</div>
                    </div>
                </div>
                <div style="display: flex; margin-top: 20px;line-height: 30px;">
                    <div style="margin-right: 10px;">Z</div>
                    <div>
                     <div class="name" @click="changeNames1('珠海')">珠海</div>
                    <div class="name" @click="changeNames1('中山')">中山</div>
                    <div class="name" @click="changeNames1('獐子岛')">獐子岛</div>
                    <div class="name" @click="changeNames1('湛江')">湛江</div>


           
                </div>
                </div>

               </el-tab-pane>
            </el-tabs>
        </div>
        <el-icon style="font-size: 52px;" @click="change"><Switch /></el-icon>
        <el-input v-model="city2" style="width: 300px; height:60px;font-size:25px;direction:rtl" placeholder="到达城市" @focus="posSearch1=true;posSearch=false;"/>
          <!-- 搜索提示 -->
       
    <div  v-show="posSearch" style="
    border-left:12px solid transparent;
    border-right:12px solid transparent;
    border-top:12px solid transparent;
    border-bottom:12px solid;
    position:absolute;left:66px;top:90px"></div>
    <div  v-show="posSearch1" style="
    border-left:12px solid transparent;
    border-right:12px solid transparent;
    border-top:12px solid transparent;
    border-bottom:12px solid;
    position:absolute;left:642px;top:90px"></div>
    </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
//出发城市和返回城市
let city1=ref('威海')
let city2=ref('')
//搜索提示1搜索提示2
let posSearch=ref()
let posSearch1=ref()

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
//出发城市和返回城市互换
const change=()=>{
    if(city1.value&&city2.value){
 const between=city1.value
    city1.value=city2.value
    city2.value=between
    }
   
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
.city{
            width: 642px;
            height: 30px;
            display: flex;
            justify-content: space-between;
    }
.posSearch{
    width: 550px;
    height: 300px;
    position: absolute;
    left: 40px;
    cursor: pointer;
    top: 114px;
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
    top: 114px;
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