<template>
    <el-input style="width: 160px;" placeholder="选择想去的目的地"></el-input>
    <span style="font-size: 12px;"><i class="tip"></i>最多选择5个目的地</span>
<div style="position:relative;z-index:10;width:200px;height:240px;margin-left:120px">
<el-card style="width: 400px;height:240px;" body-style="padding:8px">
  <el-tabs v-model="activeName"  style="width: 380px;" class="demo-tabs" >
    <el-tab-pane label="热门推荐" style="height:180px;overflow:auto" name="first" >
        <div v-for="(item,index) in data1" :key="index" >
            <h3>{{item.title}}</h3>
            <div style="margin-top: 6px;margin-bottom:8px;">
                <span class="city" v-for="(item1,index) in item.cities"  :key="index">{{item1}}</span>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="出境畅游" style="height:180px;overflow:auto" name="second">
        <div v-for="(item,index) in data2" :key="index" >
            <h3>{{item.title}}</h3>
            <div style="margin-top: 6px;margin-bottom:8px;">
                <span class="city" v-for="(item1,index) in item.cities"  :key="index">{{item1}}</span>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="中国港澳台" style="height:180px;overflow:auto"  name="third">
        <div v-for="(item,index) in data3" :key="index" >
            <h3>{{item.title}}</h3>
            <div style="margin-top: 6px;margin-bottom:8px;">
                <span class="city" v-for="(item1,index) in item.cities"  :key="index">{{item1}}</span>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="云南/贵州" style="height:180px;overflow:auto" name="fourth">
        <div v-for="(item,index) in data4" :key="index" >
            <h3>{{item.title}}</h3>
            <div style="margin-top: 6px;margin-bottom:8px;">
                <span class="city" v-for="(item1,index) in item.cities"  :key="index">{{item1}}</span>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="海南/福建" style="height:180px;overflow:auto" name="fifth">
         <div v-for="(item,index) in data5" :key="index" >
            <h3>{{item.title}}</h3>
            <div style="margin-top: 6px;margin-bottom:8px;">
                <span class="city" v-for="(item1,index) in item.cities"  :key="index">{{item1}}</span>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="川渝藏" style="height:180px;overflow:auto" name="sixth">Task</el-tab-pane>
    <el-tab-pane label="江浙沪" style="height:180px;overflow:auto"  name="seventh">Task</el-tab-pane>
    <el-tab-pane label="广西/广东" style="height:180px;overflow:auto" name="eight">Task</el-tab-pane>
    <el-tab-pane label="黑吉辽蒙" style="height:180px;overflow:auto" name="nineth">Task</el-tab-pane>
    <el-tab-pane label="京津冀" style="height:180px;overflow:auto" name="tenth">Task</el-tab-pane>
    <el-tab-pane label="湖南/湖北" style="height:180px;overflow:auto" name="11">Task</el-tab-pane>
    <el-tab-pane label="大西北" style="height:180px;overflow:auto" name="12">Task</el-tab-pane>
    <el-tab-pane label="境内其他" style="height:180px;overflow:auto" name="13">Task</el-tab-pane>
    <el-tab-pane label="海外" style="height:180px;overflow:auto" name="14">Task</el-tab-pane>
 </el-tabs>
 </el-card>

</div>
    


   
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const activeName = ref('first')
let data1=ref([
    {title:"国内热门",cities:['丽江','北京','三亚','重庆','成都','九寨沟','上海','西安','大理市']},
    {title:"海外热门",cities:['马尔代夫','日本','泰国','马来西亚','印度尼西亚']},
    {title:"周边热门目的地",cities:['杭州','苏州','舟山','扬州','无锡','台州','绍兴','嵊泗','宁波']},
])
let data2=ref([
    {title:"亚洲",cities:['马尔代夫','斯里兰卡','泰国','马来西亚','印度尼西亚','柬埔寨','老挝','菲律宾']},
    {title:"大洋洲",cities:['新西兰','斐济']},
    {title:"中东非",cities:['埃及','肯尼亚','南非','阿联酋']},
    {title:"欧洲美洲",cities:['瑞士','俄罗斯','匈牙利','古巴','阿根廷']},
])
let data3=ref([
    {title:"热门目的地",cities:['香港','澳门']},
])
let data4=ref([
    {title:"热门目的地",cities:['丽江','大理市','西双版纳','贵阳','昆明','香格里拉']},
    {title:"云南",cities:['丽江','大理市','西双版纳','昆明','香格里拉','腾冲']},
    {title:"贵州",cities:['贵阳','荔波','兴义','毕节','六盘水','遵义']},
])
let data5=ref([
    {title:"热门目的地",cities:['三亚','厦门','泉州','万宁','福州','霞浦']},
    {title:"海南",cities:['三亚','万宁','海口','陵水','三沙','文昌']},
    {title:"福建",cities:['厦门','泉州','福州','霞浦','武夷山','平潭']},
])
let data6=ref([])
let data7=ref([])
let data8=ref([])
let data9=ref([])
let data10=ref([])
let data11=ref([])
let data12=ref([])
let data13=ref([])
let data14=ref([])
</script>

<style lang="less" scoped>
.tip{
margin-left: 10px;
display: inline-block;
border-radius: 50%;
width: 12px;
height:12px;
background:url('@/assets/travel/customizedTravel/bottom.png');
background-position: -100px -360px;
    }
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #ededed;
  font-size: 32px;
  font-weight: 600;
}
h3{
    font-size: 12px;
}
.city{
    display: inline-block;
    margin-right: 10px;
    width: 60px;
    font-size: 12px;
    cursor: pointer;
    line-height: 25px;
}

</style>