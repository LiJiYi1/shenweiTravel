<template>
<el-input v-model="pos" style="width: 160px;" placeholder="选择想去的目的地" @focus="isShow=true" @click="stop"></el-input>
    <span style="font-size: 12px;"><i class="tip"></i>最多选择5个目的地</span>
<div class="underPos">
    <span v-for="(item,index) in underData" :key="index">
       <p>{{item}}</p>
      <el-icon @click="del(item)" style="position:absolute;top:9.6px;right:3px;cursor:pointer"><Close /></el-icon>
    </span>
</div>
<div style="position:absolute;z-index:10;margin-left:120px">
<el-card style="width: 400px;height:240px;" body-style="padding:8px" v-if="isShow" @click="stop">
  <el-tabs v-model="activeName"  style="width: 380px;" class="demo-tabs" >
    <el-tab-pane label="热门推荐" style="height:180px;overflow:auto" name="first" >
        <div v-for="(item,index) in data1" :key="index" >
            <h3>{{item.title}}</h3>
            <div style="margin-top: 6px;margin-bottom:8px;">
                <span class="city" v-for="(item1,index) in item.cities"  :key="index" @click="getCity(item1)">{{item1}}</span>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="出境畅游" style="height:180px;overflow:auto" name="second">
        <div v-for="(item,index) in data2" :key="index" >
            <h3>{{item.title}}</h3>
            <div style="margin-top: 6px;margin-bottom:8px;">
                <span class="city" v-for="(item1,index) in item.cities"  :key="index" @click="getCity(item1)">{{item1}}</span>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="中国港澳台" style="height:180px;overflow:auto"  name="third">
        <div v-for="(item,index) in data3" :key="index" >
            <h3>{{item.title}}</h3>
            <div style="margin-top: 6px;margin-bottom:8px;">
                <span class="city" v-for="(item1,index) in item.cities"  :key="index" @click="getCity(item1)">{{item1}}</span>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="云南/贵州" style="height:180px;overflow:auto" name="fourth">
        <div v-for="(item,index) in data4" :key="index" >
            <h3>{{item.title}}</h3>
            <div style="margin-top: 6px;margin-bottom:8px;">
                <span class="city" v-for="(item1,index) in item.cities"  :key="index" @click="getCity(item1)">{{item1}}</span>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="海南/福建" style="height:180px;overflow:auto" name="fifth">
         <div v-for="(item,index) in data5" :key="index" >
            <h3>{{item.title}}</h3>
            <div style="margin-top: 6px;margin-bottom:8px;">
                <span class="city" v-for="(item1,index) in item.cities"  :key="index" @click="getCity(item1)">{{item1}}</span>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="川渝藏" style="height:180px;overflow:auto" name="sixth">
         <div v-for="(item,index) in data6" :key="index" >
            <h3>{{item.title}}</h3>
            <div style="margin-top: 6px;margin-bottom:8px;">
                <span class="city" v-for="(item1,index) in item.cities"  :key="index" @click="getCity(item1)">{{item1}}</span>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="江浙沪" style="height:180px;overflow:auto"  name="seventh">
         <div v-for="(item,index) in data7" :key="index" >
            <h3>{{item.title}}</h3>
            <div style="margin-top: 6px;margin-bottom:8px;">
                <span class="city" v-for="(item1,index) in item.cities"  :key="index" @click="getCity(item1)">{{item1}}</span>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="广西/广东" style="height:180px;overflow:auto" name="eight">
        <div v-for="(item,index) in data8" :key="index" >
            <h3>{{item.title}}</h3>
            <div style="margin-top: 6px;margin-bottom:8px;">
                <span class="city" v-for="(item1,index) in item.cities"  :key="index" @click="getCity(item1)">{{item1}}</span>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="黑吉辽蒙" style="height:180px;overflow:auto" name="nineth">
           <div v-for="(item,index) in data9" :key="index" >
            <h3>{{item.title}}</h3>
            <div style="margin-top: 6px;margin-bottom:8px;">
                <span class="city" v-for="(item1,index) in item.cities"  :key="index" @click="getCity(item1)">{{item1}}</span>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="京津冀" style="height:180px;overflow:auto" name="tenth">  
        <div v-for="(item,index) in data10" :key="index" >
            <h3>{{item.title}}</h3>
            <div style="margin-top: 6px;margin-bottom:8px;">
                <span class="city" v-for="(item1,index) in item.cities"  :key="index" @click="getCity(item1)">{{item1}}</span>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="湖南/湖北" style="height:180px;overflow:auto" name="11">
         <div v-for="(item,index) in data11" :key="index" >
            <h3>{{item.title}}</h3>
            <div style="margin-top: 6px;margin-bottom:8px;">
                <span class="city" v-for="(item1,index) in item.cities"  :key="index" @click="getCity(item1)">{{item1}}</span>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="大西北" style="height:180px;overflow:auto" name="12">
         <div v-for="(item,index) in data12" :key="index" >
            <h3>{{item.title}}</h3>
            <div style="margin-top: 6px;margin-bottom:8px;">
                <span class="city" v-for="(item1,index) in item.cities"  :key="index" @click="getCity(item1)">{{item1}}</span>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="境内其他" style="height:180px;overflow:auto" name="13">
         <div v-for="(item,index) in data13" :key="index" >
            <h3>{{item.title}}</h3>
            <div style="margin-top: 6px;margin-bottom:8px;">
                <span class="city" v-for="(item1,index) in item.cities"  :key="index" @click="getCity(item1)">{{item1}}</span>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="海外" style="height:180px;overflow:auto" name="14">
         <div v-for="(item,index) in data14" :key="index" >
            <h3>{{item.title}}</h3>
            <div style="margin-top: 6px;margin-bottom:8px;">
                <span class="city" v-for="(item1,index) in item.cities"  :key="index" @click="getCity(item1)">{{item1}}</span>
            </div>
        </div>
    </el-tab-pane>
 </el-tabs>
 </el-card>

</div>
    


   
</template>

<script lang="ts" setup>
import { onMounted, ref, type Ref} from 'vue'
import bus from '@/bus/bus'
const activeName = ref('first')
//控制选择表单显示
let isShow=ref(false)
//目的地
let pos=ref()
//表单下面显示目的地的数据
let underData:Ref<string[]>=ref([])
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
let data6=ref([
    {title:"热门目的地",cities:['重庆','成都','九寨沟','拉萨','林芝','都江堰']},
    {title:"四川",cities:['成都','九寨沟','都江堰','甘孜藏族自治州','乐山','色达']},
    {title:"重庆",cities:['重庆','彭水','云阳']},
    {title:"西藏",cities:['拉萨','林芝','阿里','日喀则','墨脱','波密']},
])
let data7=ref([
    {title:"热门目的地",cities:['上海','杭州','苏州','南京','舟山','扬州']},
    {title:"浙江",cities:['杭州','舟山','丽水','台州','绍兴','嵊泗','宁波','安吉','桐庐','湖州','温州','仙居','嘉兴','金华','海宁','海盐','嵊州','云和','苍南','景宁','兰溪']},
    {title:"江苏",cities:['苏州','南京','扬州','无锡','常州','溧阳','宜兴']},
    {title:"上海",cities:['上海']},
])
let data8=ref([
    {title:"热门目的地",cities:['桂林','北海','南宁','阳朔','崇左','巴马']},
    {title:"广西",cities:['桂林','北海','南宁','阳朔','崇左','巴马']},
    {title:"广东",cities:['广州','汕头','珠海','深圳','潮州','惠州']},
])
let data9=ref([
    {title:"热门目的地",cities:['呼伦贝尔','哈尔滨','大连','延吉','沈阳','漠河']},
    {title:"黑龙江",cities:['哈尔滨','漠河','伊春','大兴安岭','黑河','齐齐哈尔']},
    {title:"吉林",cities:['延吉','长春','吉林市','珲春','白山','集安']},
    {title:"辽宁",cities:['大连','沈阳','丹东','本溪','锦州','葫芦岛']},
    {title:"内蒙古",cities:['呼伦贝尔','呼和浩特','满洲里','鄂尔多斯','阿尔山','乌兰察布']},
])
let data10=ref([
    {title:"热门目的地",cities:['北京','天津','秦皇岛','承德','石家庄','邯郸']},
    {title:"北京",cities:['北京']},
    {title:"天津",cities:['天津']},
    {title:"河北",cities:['秦皇岛','承德','石家庄','邯郸','保定','唐山']},
])
let data11=ref([
    {title:"热门目的地",cities:['张家界','长沙','武汉','宜昌','神农架','郴州']},
    {title:"湖南",cities:['张家界','长沙','郴州','韶山','岳阳','湘西土家族苗族自治州']},
    {title:"湖北",cities:['武汉','宜昌','神农架','襄阳','十堰','黄石']},

])
let data12=ref([
    {title:"热门目的地",cities:['西安','乌鲁木齐','西宁','敦煌','兰州','银川']},
    {title:"陕西",cities:['西安','延安','华山','汉中','宝鸡','榆林']},
    {title:"新疆",cities:['乌鲁木齐','北疆','伊犁','喀什市','南疆','阿勒泰地区']},
    {title:"甘肃",cities:['敦煌','兰州','甘南','张掖','天水','嘉峪关']},
    {title:"青海",cities:['西宁','格尔木','祁连','德令哈','茫崖','果洛']},
    {title:"宁夏",cities:['银川','中卫','贺兰','石嘴山','固原','吴忠']},
  
])
let data13=ref([
    {title:"热门目的地",cities:['婺源','青岛','洛阳','景德镇','大同','庐山']},
    {title:"山东",cities:['青岛','烟台','济南','日照','荣成','淄博]']},
    {title:"安徽",cities:['宣城','合肥','歙县','绩溪','芜湖','石台']},
    {title:"山西",cities:['大同','太原','临汾','运城','长治','阳城']},
    {title:"江西",cities:['婺源','景德镇','庐山','南昌','上饶','九江']},
    {title:"河南",cities:['洛阳','郑州','开封','安阳','新乡','许昌']},
])
let data14=ref([
    {title:"热门目的地",cities:['马尔代夫','日本','土耳其','瑞士','冰岛','意大利']},
    {title:"亚洲",cities:['马尔代夫','日本','土耳其','斯里兰卡','泰国','韩国','马来西亚','格鲁吉亚','印度尼西亚']},
    {title:"欧洲",cities:['土耳其','瑞士','冰岛','意大利','塞尔维亚','英国']},
    {title:"美洲",cities:['美国','加拿大','古巴','秘鲁','墨西哥','巴西']},
    {title:"大洋洲",cities:['新西兰','澳大利亚','斐济']},
    {title:"中东非/南极洲",cities:['土耳其','埃及','肯尼亚','毛里求斯','阿联酋','南极洲']},
])
const stop=(e:any)=>{
e.stopPropagation()
}
const getCity=(city:string)=>{
    if(underData.value.length<5&&!underData.value.includes(city)){
        underData.value.push(city)
        bus.emit('position',{
         position:underData.value
        })
        isShow.value=false
    }
}
const del=(del:string)=>{
if(underData.value.includes(del)){
        const index=underData.value.indexOf(del)
        underData.value.splice(index,1)
        bus.emit('position',{
         position:underData.value
        })
        isShow.value=false
    }
}
onMounted(()=>{
    document.addEventListener('click',()=>{
       isShow.value=false
    })
})
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
    width: 65px;
    white-space: nowrap;
    font-size: 12px;
    cursor: pointer;
    line-height: 25px;
}
.underPos{
    margin-left: 120px;
    margin-top: 20px;
    span{
        font-size: 12px;
        position: relative;
        display: inline-block;
        text-align: center;
        line-height: 30px;
        width: 66px;
        height: 30px;
        border: 1px solid #19a0f0;
        color:#19a0f0;
        margin-right: 8px;
    }
    p{  
        padding-left: 5px;
        width: 46px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>