<template>
  <div class="right">
            <h1>我的需求单</h1>
            <hr style="margin-top: 25px;">
            <div style="height: 450px;overflow:auto">
                <ul>
                    <li><span>出游性质：</span>{{types}}</li>
                    <li><span>目的地：</span></li>
                    <li><span>预估出行日期：</span>{{dates}}</li>
                    <li><span>预估出行人数：</span>{{ adults }}成人&nbsp;{{childrens}}儿童&nbsp;{{babies}}婴儿&nbsp;</li>
                    <li><span>预估人均预算：</span>{{budgets}}</li>
                    <li><span>需要提供什么：</span></li>
                    <li><span>几位定制师联系：	</span></li>
                    <li><span>其他需求：</span>{{Needs}}</li>
                    <li><span>姓名：</span></li>
                    <li><span>手机号：	</span></li>
                    <li v-show="types==='公司定制'"><span>公司名称：	</span></li>
                    <li><span>邮箱：	</span></li>
                    <li v-show="types==='公司定制'"><span>微信号：	</span></li>
                </ul>
            </div>
            <div class="trangle"></div>
    </div>
     
</template>

<script lang="ts" setup>
import bus from '@/bus/bus'
import { onMounted,ref } from 'vue';
let types=ref('个人定制')
let dates=ref('')
let adults=ref('1')
let childrens=ref('0')
let babies=ref('0')
const budgets=ref()
let Needs=ref('')
onMounted(()=>{
//定制类型
bus.on('type',(type:any)=>{
       console.log(type);
       types.value=type.type
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
//预算
bus.on('needs',(needs:any)=>{
       Needs.value=needs.needs
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