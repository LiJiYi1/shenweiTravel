<template>
  
<el-card style="margin-top: -4px;" body-style="padding:0px">
    <div class="container">
        <div class="left">
            <div class="step">
             <span style="font-size: 20px;">快速填写定制需求</span>
             <el-steps style="max-width:460px;" :active="active"  finish-status="success"  simple>
                <el-step title="基本信息"/>
                <el-step title="特色定制" />
                <el-step title="联系人信息" />
             </el-steps>
            </div>
            <hr>
            <Step1Left @getVal="val" v-show="active===0"></Step1Left>
            <Step2Left v-show="active===1"></Step2Left>
            <Step3Left v-show="active===2"></Step3Left>
            <el-button :color="color" style="width:140px;border-radius:18px;margin-left:120px" @click="pre" v-show="active!==0">上一步</el-button>
            <el-button :color="color" style="width:140px;height:40px;border-radius:18px;margin-left:120px" @click="next" v-show="active!==2">下一步</el-button>
            <el-button :color="color" style="width:140px;border-radius:18px" v-show="active===2">马上为我定制</el-button>
         </div>
        <StepRight :Active="active"></StepRight>
    </div>
</el-card>
 

</template>

<script lang="ts" setup>
import {onMounted, ref } from 'vue'
import Step1Left from './step/step1Left.vue';
import Step2Left from './step/step2Left.vue';
import Step3Left from './step/step3Left.vue';
import StepRight from './step/stepRight.vue';
import { useColorStore } from '@/store/modules/color';
import { ElMessage } from 'element-plus';
import bus from '@/bus/bus'
import { storeToRefs } from 'pinia';
//按钮颜色
let {color}=storeToRefs(useColorStore())
//表单目的地数据
let pos=ref()
//表单日期数据
let date=ref()
//表单预算数据
let budget=ref()

//子组件传来对象的接口
interface input{
    date:string,
    budget:string
}
//子组件输入时,调用emit把表单数据传给父组件
const val=(inputVal:input)=>{
console.log(inputVal);
date.value=inputVal.date
budget.value=inputVal.budget
}
const active = ref(0)
//下一步
const next = () => {
    if(pos.value&&date.value&&budget.value){
        active.value++
    }
    else{
         ElMessage({
        showClose: true,
        message: '缺少必填数据!',
        type: 'warning',
         })
    }
    if (active.value > 2) active.value = 0
    }

const pre=()=>{
    active.value--
    if (active.value<=0) active.value = 0
}
onMounted(()=>{
    //通过事件总线拿到孙子组件表单数据
  bus.on('position',(position:any)=>{
       pos.value=position.position.join('、')  
    })
})
</script>

<style lang="less" scoped>
.container{
display: flex;
.left{
    width: 600px;
    height: 200px;
    padding: 20px;
   
}

}

</style>