<template>
  <div class="right">
            <h1>我的需求单</h1>
            <hr style="margin-top: 25px;">
            <div style="height: 450px;overflow:auto">
                <ul>
                    <li><span>出游性质：</span>{{types}}</li>
                    <li><span>目的地：</span>{{Position}}</li>
                    <li><span>预估出行日期：</span>{{dates}}</li>
                    <li><span>预估出行人数：</span>{{ adults }}成人&nbsp;{{childrens}}儿童&nbsp;{{babies}}婴儿&nbsp;</li>
                    <li><span>预估人均预算：</span>{{budgets}}</li>
                    <li><span style="vertical-align: top;">需要提供什么：</span>
                        <div style="width: 175px;display:inline-block;" v-show="types==='个人定制'">
                            <p v-show="props.Active!==0" style="line-height: 20px;display:inline-block;margin-top:-5px">{{needProvide}}</p>
                        </div>
                        <div style="width: 175px;display:inline-block;" v-show="types==='公司定制'">
                            <p v-show="props.Active!==0" style="line-height: 20px;display:inline-block;margin-top:-5px">{{companyProvide}}</p>
                        </div>
                    </li>
                    <li><span>几位定制师联系：</span>
                        <p style="display: inline-block;" v-show="props.Active!==0">{{Num}}</p>
                    </li>
                    <li><span style="vertical-align:top">其他需求：</span>
                        <p style="overflow: hidden;display:inline-block;width:160px;" v-show="props.Active!==0">{{Needs}}</p>
                    </li>
                    <li><span>姓名：</span><p style="display: inline-block;" v-show="props.Active===2">{{Name}}</p></li>
                    <li><span style="vertical-align: top;">手机号：</span><p style="display: inline-block;width:150px">{{prePhoneNum}}-{{phoneNum}}</p></li>
                    <li v-show="types==='公司定制'"><span>公司名称：</span><p style="display: inline-block;" v-show="props.Active===2">{{Company}}</p></li>
                    <li><span>邮箱：</span>
                     <p style="overflow: hidden;display:inline-block;width:160px;" v-show="props.Active===2">{{ Email }}</p> </li>
                    <li v-show="types==='公司定制'"><span>微信号：</span> <p style="display: inline-block;" v-show="props.Active===2">{{weChat}}</p></li>
                </ul>
            </div>
            <div class="trangle"></div>
    </div>
     
</template>

<script lang="ts" setup>
import bus from '@/bus/bus'
import { onMounted,ref } from 'vue';
let types=ref('个人定制')
let Position=ref()
let dates=ref('')
let adults=ref('1')
let childrens=ref('0')
let babies=ref('0')
let budgets=ref()
let needProvide=ref('')
let companyProvide=ref('')
let Num=ref('1位')
let Needs=ref('')
let Name=ref('')
let Company=ref('')
let Email=ref('')
let weChat=ref('')
let props=defineProps(['Active'])
let phoneNum=ref()
let prePhoneNum=ref('86 中国')
bus.on('needProvide',(need:any)=>{
       needProvide.value=need.provide
})
bus.on('companyProvide',(company:any)=>{
       companyProvide.value=company.company
})
onMounted(()=>{
//定制类型
bus.on('type',(type:any)=>{
       console.log(type);
       types.value=type.type
})
//目的地
bus.on('position',(position:any)=>{
       Position.value=position.position.join('、')
})
//旅游日期
bus.on('Date',(date:any)=>{
       console.log(date);
       dates.value=date.date
})
//旅游成年人数
bus.on('adult',(adult:any)=>{
       adults.value=adult.adult
})
//旅游儿童人数
bus.on('children',(children:any)=>{
       childrens.value=children.children
})
//旅游婴儿人数
bus.on('baby',(baby:any)=>{
       babies.value=baby.baby
})
//预算
bus.on('budget',(budget:any)=>{
       budgets.value=budget.budget
})
//其他需求
bus.on('needs',(needs:any)=>{
       Needs.value=needs.needs
})
//定制师数量
bus.on('Num',(num:any)=>{
       Num.value=num.Num
})
//需要提供什么
bus.on('needProvide',(need:any)=>{
       needProvide.value=need.provide
})
//公司需要提供什么
bus.on('companyProvide',(company:any)=>{
       companyProvide.value=company.company
})
//姓名
bus.on('Name',(name:any)=>{
       Name.value=name.Name
})
//公司名
bus.on('Company',(company:any)=>{
       Company.value=company.company
})
//电子邮箱
bus.on('Email',(email:any)=>{
       Email.value=email.Email
})
//微信号
bus.on('weChat',(wechat:any)=>{
 
    
       weChat.value=wechat.wechat
})
//手机号前
bus.on('prePhoneNum',(PrePhoneNum:any)=>{
       prePhoneNum.value=PrePhoneNum.PrePhoneNum
})
//手机号
bus.on('phone',(phone:any)=>{
       phoneNum.value=phone.phone
})
   })
</script>

<style lang="less" scoped>
.right{
    position: relative;
    padding: 25px;
    padding-top: 38px;
    width: 540px;
    height: 540px;
    background-color: #404972;
    color: white;
}
ul{
    li{
        margin-top:20px;
        span{
            display: inline-block;
            width: 120px;
            text-align: right;
            font-size: 12px;
            color: #9fa4b8;
            margin-right: 10px;
        }
    }
}
.trangle{
    position: absolute;
    top:300px;
   right: 100%;
height: 0px;
border: 26px solid #404972;
border-left:20px solid transparent;
border-top:20px solid transparent;
border-bottom:20px solid transparent;
}
</style>