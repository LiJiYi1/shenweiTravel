<template>
          <el-card class="hot" body-style="padding:0px">
            <div class="Hot">
                <div style="display: flex;">
                <i class="nav-section-h3-i" data-spm-anchor-id="181.15077045.1398723350.i6.7f1d620dQJ5y9d"></i>
                <h2>本季热门</h2>
            
                </div>
                <div style="margin-top: 10px;">
                    <span v-for="(item,index) in data" :key="index">{{item}}</span>
                </div>
            </div>
            <div class="Domestic">
                <div style="display: flex;">
                <i class="nav-section-h3-i" data-spm-anchor-id="181.15077045.1398723350.i6.7f1d620dQJ5y9d"></i>
                <h2>境内游</h2>
                </div>
                <div style="margin-top: 10px;">
                     <div v-for="(item,index) in data1" :key="index" style="width:100%;display: flex;justify-content:space-between;margin-top:10px">
                        <div style="width: 80px;margin-top:6px;color:#ffe033">{{item.province}}</div>
                        <div style="width: 99%;"><span style="display: inline-block;width:64px;line-height:30px" v-for="(item1,index) in item.pos" :key="index">{{item1}}</span></div>
                     </div>
                </div>
            </div>
            <div class="overseas">
                   <div style="display: flex;">
                <i class="nav-section-h3-i" data-spm-anchor-id="181.15077045.1398723350.i6.7f1d620dQJ5y9d"></i>
                <h2>出境游</h2>
                   </div>
                    <div style="margin-top: 10px;">
                     <div v-for="(item,index) in data2" :key="index" style="width:100%;display: flex;justify-content:space-between;margin-top:10px">
                        <div style="width: 80px;margin-top:6px;color:#ffe033">{{item.province}}</div>
                        <div style="width: 99%;"><span style="display: inline-block;width:64px;line-height:30px" v-for="(item1,index) in item.pos" :key="index">{{item1}}</span></div>
                     </div>
                </div>
            </div>
          </el-card>
  
</template>

<script setup lang="ts">
import { ref } from 'vue';
//本季热门
let data=ref(["丽江",
"桂林",
"巴厘岛",
"西北",
"西安",
"塞班岛",
"三亚",
"杭州",
"欧洲",
"拉萨",
"厦门",
"重庆"])
//境内游
let data1=ref(
    [
    {province:"云南",pos:['丽江','大理','泸沽湖','香格里拉']},
    {province:"海南",pos:['三亚','海口','亚龙湾']},
    {province:"西南",pos:['成都','重庆','贵州','拉萨']},
    {province:"华中",pos:['张家界','凤凰','洛阳','长沙']},
    {province:"华南",pos:['桂林','广州','深圳','北海']},
    {province:"西北",pos:['敦煌','茶卡盐湖','西安','新疆']},
    {province:"华北",pos:['北京','呼伦贝尔','平遥']},
    {province:"华东",pos:['杭州','乌镇','上海','黄山']},

    ]
)
//出境游
let data2=ref(
    [
    {province:"泰国",pos:['曼谷','清迈','普吉岛','苏梅岛']},
    {province:"日本",pos:['东京','大阪','京都','冲绳']},
    {province:"海岛",pos:['马尔代夫','毛里求斯']},


    ]
)
</script>

<style lang="less" scoped>
.hot{
    user-select: none;
    cursor: pointer;
    width: 630px;
    border-radius: 16px;
    span{
        display: inline-block;
        width: 40px;
        font-size: 13px;
        margin-right: 0px;
        line-height: 40px;
    }
    .Hot{
        padding:20px;
        padding-bottom: 0;
    }
    .Hot:hover{
        padding:20px;
         background-color: rgb(138, 136, 136);
        padding-bottom: 0;
    }
    .Domestic{
        padding:20px;
        padding-bottom: 0;
    }
    .Domestic:hover{
        padding:20px;
        background-color: rgb(138, 136, 136);
        padding-bottom: 0;
    }
    .overseas{
        padding:20px;
        padding-bottom: 30px;
    }
    .overseas:hover{
        padding:20px;
          background-color: rgb(138, 136, 136);
          padding-bottom: 30px;
    }

}
.nav-section-h3-i {
    display: block;
    line-height: 0;
    margin-top: 2px;
    width: 3px;
    height: 22px;
    margin-right: 6px;
    border-radius: 103px;
    opacity: 1;
    background: #ffe033;
}
</style>