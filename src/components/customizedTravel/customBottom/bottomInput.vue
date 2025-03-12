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
            <Step3Left @getVal1="val1" v-show="active===2"></Step3Left>
            <FinishLeft v-show="active===3"></FinishLeft>
            <el-button :color="color" style="width:140px;border-radius:18px;margin-left:120px" @click="pre" v-show="active!==0&&active!==3">上一步</el-button>
            <el-button :color="color" style="width:140px;height:40px;border-radius:18px;margin-left:120px" @click="next" v-show="active!==2&&active!==3">下一步</el-button>
            <el-button :color="color" style="width:140px;border-radius:18px;margin-left:120px" @click="forme" v-show="active===2">马上为我定制</el-button>
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
import { ElMessage,ElMessageBox } from 'element-plus';
import bus from '@/bus/bus'
import { storeToRefs } from 'pinia';
import { ElLoading } from 'element-plus'
import { useShoppingStore } from '@/store/modules/shoppingStore';
import FinishLeft from './step/FinishLeft.vue';
const shoppingStore=useShoppingStore()
//按钮颜色
let {color}=storeToRefs(useColorStore())
//表单目的地数据
let pos=ref()
//表单日期数据
let date=ref()
//表单预算数据
let budget=ref()
//联系人
let name=ref()
//手机号码
let phoneNum=ref()
//公司名称
let company=ref()
//公司还是私人
let types=ref('个人定制')
//子组件传来对象的接口
interface input{
    date:string,
    budget:string
}
interface input1{
    name:string,
    phoneNum:string,
    company:string
}
//子组件输入时,调用emit把表单数据传给父组件
const val=(inputVal:input)=>{
date.value=inputVal.date
budget.value=inputVal.budget
}
const val1=(inputVal:input1)=>{
name.value=inputVal.name
phoneNum.value=inputVal.phoneNum
company.value=inputVal.company
}
const active = ref(0)
//下一步
const next = () => {
    if(pos.value&&date.value){
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
//上一步
const pre=()=>{
     if(active.value===1){
   ElMessageBox.confirm(
    ' ',
    '只差一点就可以提交了，您真的要离开吗？',
    {
      confirmButtonText: '继续操作',
      cancelButtonText: '去意已决',
      type: 'warning',
      center: true,
    }
  )
 .then(() => {
  

    })
    .catch(() => {
       active.value--
    if (active.value<=0) active.value = 0
      
    })
        
    }
    else{
         active.value--
    if (active.value<=0) active.value = 0
    }
   
   
}
//为我定制
const forme=()=>{
  
    
    if(types.value==='个人定制'){
       if(name.value&&phoneNum.value){
          const loading = ElLoading.service({
    lock: true,
    text: '正在提交表单。。。',
    background: 'rgba(0, 0, 0, 0.7)',
                  })
      console.log(budget.value);
      
          setTimeout(() => {
                //订单数据放进购物车
                shoppingStore.add({name:`${pos.value} — ${types.value}`,price:`¥${budget.value||'未定'}`})
                loading.close()
                ElMessageBox.alert('您的订单已提交,在24小时内会有定制师联系您!', '订单提交完成', {
                // autofocus: false,
                confirmButtonText: '确定',
  })
      active.value++
          }, 2000)
      }
      else{
        ElMessage({
        showClose: true,
        message: '缺少必填数据!',
        type: 'warning',
         })
      }
    }
    else{
      if(name.value&&phoneNum.value&&company.value){
 const loading = ElLoading.service({
    lock: true,
    text: '正在提交表单。。。',
    background: 'rgba(0, 0, 0, 0.7)',
                  })
          setTimeout(() => {
                //订单数据放进购物车
                shoppingStore.add({name:`${pos.value} — ${types.value}`,price:`¥${budget.value||'未定'}`})
                loading.close()
                ElMessageBox.alert('您的订单已提交,在24小时内会有定制师联系您!', '订单提交完成', {
                // autofocus: false,
                confirmButtonText: '确定',
  })
     active.value++
          }, 2000)
       }
       else{
        ElMessage({
        showClose: true,
        message: '缺少必填数据!',
        type: 'warning',
         })
       }
    }
   
}
onMounted(()=>{
    //通过事件总线拿到孙子组件表单数据
  bus.on('position',(position:any)=>{
       pos.value=position.position.join('、')  
    })
  bus.on('type',(type:any)=>{
    
         types.value=type.type
       })
  bus.on('budget',(Budget:any)=>{
         budget.value=Budget.budget
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