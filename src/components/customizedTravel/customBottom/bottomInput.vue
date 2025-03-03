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
            <Step1Left v-show="active===0"></Step1Left>
            <Step2Left v-show="active===1"></Step2Left>
            <el-button style="width:140px;border-radius:18px" @click="pre" v-show="active!==0">上一步</el-button>
            <el-button style="width:140px;border-radius:18px" @click="next">下一步</el-button>
         </div>
        <StepRight></StepRight>
    </div>
</el-card>
 

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Step1Left from './step/step1Left.vue';
import Step2Left from './step/step2Left.vue';
import StepRight from './step/stepRight.vue';

const active = ref(0)

const next = () => {
  if (active.value++ > 2) active.value = 0
}
const pre=()=>{
    active.value--
    if (active.value<=0) active.value = 0
}
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