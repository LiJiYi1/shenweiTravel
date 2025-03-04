<template>
      <div class="input">
          <ul>
            <li>
              <span style="display:inline-block;padding-top:10px;  vertical-align: top;"><i style="color: red;">*</i>联系人: </span>
              <el-input v-model="name" style="display:inline-block;width: 240px" placeholder="必填,定制师怎么称呼您" @input="Name"/>
            </li>
             <li>
              <span style="padding-top:10px;vertical-align: top;"><i style="color: red;">*</i>手机号码:</span>
              <PrePhoneNum></PrePhoneNum>
              <el-input @input="phone" v-model="phoneNum"  style="display:inline-block;width: 240px" placeholder="必填,方便定制师与您联络"/>
            </li>
             <li v-show="types==='公司定制'">
              <span style="padding-top:10px;  vertical-align: top;"><i style="color: red;">*</i>公司名称:</span>
              <el-input v-model="company" @input="Company" style="display:inline-block;width: 240px" placeholder="必填,享受公司客户专享服务"/>
            </li>
             <li>
              <span style="padding-top:10px;  vertical-align: top;"><i style="color: red;">*</i>电子邮箱:</span>
              <el-input v-model="email" type="email" style="display:inline-block;width: 240px" placeholder="选填,方便接收行程相关资料" @input="Email"/>
            </li>
             <li v-show="types==='公司定制'">
              <span style="padding-top:10px;  vertical-align: top;"><i style="color: red;">*</i>微信号:</span>
              <el-input v-model="weChat" @input="WeChat" style="display:inline-block;width: 240px" placeholder="选填,方便定制师与您联络"/>
            </li>
            <span style="display:inline-block;margin-left:120px;font-size: 12px;width:420px;color: #999;text-align:left;margin-top:20px">*提交需求后会有专业定制师联系您，为您免费制作方案，可根据实际情况调整细节</span>
            <span style="display:inline-block;margin-left:120px;font-size: 12px;width:420px;color: #999;text-align:left;margin-top:25px;margin-bottom: 30px;">*神威旅行网定制旅游平台展示的定制产品均由具备相关资质的合作商家直接提供，神威旅行网仅作为网络预订平台。合作商家充分借用神威旅行网定制旅游平台，推出全方位的定制旅游产品，并负责产品销售、资源确认、合同签署、发票开具、行程安排等全部环节的旅游服务。神威旅行网作为定制旅游产品的展示平台。</span>
          </ul>
      
         </div>
</template>

<script setup lang="ts">
   import { onMounted, ref } from 'vue';
   import bus from '@/bus/bus'
import PrePhoneNum from './prePhoneNum.vue';
   //定制形式
   let types=ref()
   let name=ref()
   let email=ref()
   let company=ref()
   let weChat=ref()
   let phoneNum=ref()

   const Name=()=>{
      bus.emit('Name',{Name:name.value})
   }
   const Email=()=>{
      bus.emit('Email',{Email:email.value})
   }
   const Company=()=>{
    bus.emit('Company',{company:company.value})
   }
    const WeChat=()=>{
    bus.emit('weChat',{wechat:weChat.value})
   }
  const phone=()=>{
    bus.emit('phone',{phone:phoneNum.value})
   }
   onMounted(()=>{
     bus.on('type',(type:any)=>{
         types.value=type.type
       })
   })
</script>

<style lang="less" scoped>
 .input{
        width: 546px;
      
        ul{
            margin-top: 20px;
          li{
            margin-top: 10px;
            
          i{
            display: inline-block;
            margin-right: 2px;
          }
          span{
            display: inline-block;
            width: 100px;
            font-size: 12px;
            text-align: right;
             margin-right:20px;
        }
            }
        }
       
       
    }
</style>