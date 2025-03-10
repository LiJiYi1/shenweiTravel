<template>
            <el-card class="card" body-style="padding:0">
                <div v-for="(item,index) in data" :key="index" class="container" @mouseover="isShow(item.title)" @mouseleave="notShow">
                    <div style="display:flex">
                                <i class="nav-section-h3-i" data-spm-anchor-id="181.15077045.1398723350.i6.7f1d620dQJ5y9d"></i>
                <h3>{{item.title}}</h3>
                    </div>
                    <ul>
                        <li v-for="(item1,index) in item.city" :key="index" @click="search(item1)">{{item1}}</li>
                    </ul>
                </div>
                
            </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

//数据
let data=ref([
    {title:"热门推荐",city:['威海','北京','日本','青岛','韩国','南京','香港']},
    {title:"澳新/中东非",city:['新西兰','澳大利亚','悉尼','大堡礁','凯恩斯']},
    {title:"欧洲/美洲",city:['英国','意大利','法国','俄罗斯','冰岛','巴黎']},
    {title:"东南亚/日韩",city:['新加坡','泰国','印度尼西亚','马来西亚','越南']},
    {title:"黑龙江/吉林/辽宁",city:['哈尔滨','漠河','雪乡','伊春','黑河','大兴安岭']},
    {title:"云南/四川",city:['丽江','西双版纳','大理市','昆明','芒市']},
    {title:"海南/北京",city:['三亚','三沙','西沙群岛','海口','万宁','陵水']},
    {title:"广东/广西",city:['广州','深圳','珠海','揭阳']},
])
let emit=defineEmits(['show'])
//用emit传给父组件
//是否显示
let show1=ref(false)
let show2=ref(false)
let show3=ref(false)
let show4=ref(false)
let show5=ref(false)
let show6=ref(false)
let show7=ref(false)
let show8=ref(false)
const isShow=(name:string)=>{
if((name==='热门推荐')&&!show1.value) {
    show1.value=true
    emit('show',[show1,show2,show3,show4,show5,show6,show7,show8])
}
else if((name==='澳新/中东非')&&!show2.value) {
    show2.value=true
    emit('show',[show1,show2,show3,show4,show5,show6,show7,show8])
}
else if((name==='欧洲/美洲')&&!show3.value) {
    show3.value=true
    emit('show',[show1,show2,show3,show4,show5,show6,show7,show8])
}
else if((name==='东南亚/日韩')&&!show4.value) {
    show4.value=true
    emit('show',[show1,show2,show3,show4,show5,show6,show7,show8])
}
else if((name==='黑龙江/吉林/辽宁')&&!show5.value) {
    show5.value=true
    emit('show',[show1,show2,show3,show4,show5,show6,show7,show8])
}
else if((name==='云南/四川')&&!show6.value) {
    show6.value=true
    emit('show',[show1,show2,show3,show4,show5,show6,show7,show8])
}
else if((name==='海南/北京')&&!show7.value) {
    show7.value=true
    emit('show',[show1,show2,show3,show4,show5,show6,show7,show8])
}
else if((name==='广东/广西')&&!show8.value) {
    show8.value=true
    emit('show',[show1,show2,show3,show4,show5,show6,show7,show8])
}
}
const notShow=()=>{ 
show1.value=false
show2.value=false
show3.value=false
show4.value=false
show5.value=false
show6.value=false
show7.value=false
show8.value=false
emit('show',[show1,show2,show3,show4,show5,show6,show7,show8])
}
const search=(pos:string)=>{
    window.open(`https://travelsearch.fliggy.com/index.htm?searchType=product&keyword=${pos}&category=MULTI_SEARCH&pagenum=1`)
}
</script>

<style lang="less" scoped>
    .card{
        height: 560px;
        position: relative;
        ul{ 
            width: 320px;
            margin-top: 10px;
            li{
                font-size: 12px;
                float: left;
                margin-left: 14px;
            }
        }
        .container{
            cursor: pointer;
            padding: 16px;
            padding-left:0;
            padding-left:17px;
            width:300px;
            padding-bottom: 25px;
            border-bottom: 1px solid grey;
            
        }
         .container:hover{
           background-color: rgb(138, 136, 136);
        }
    }
.nav-section-h3-i {
    display: block;
    line-height: 0;
    margin-top: 8px;
    width: 8px;
    height: 8px;
    margin-right: 6px;
    opacity: 1;
    background: #ffe033;
}
</style>