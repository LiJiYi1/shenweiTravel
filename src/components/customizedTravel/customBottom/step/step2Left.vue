<template>
         <div class="input">
          <ul>
            <li>
              <span style="padding-top:10px;  vertical-align: top;"><i style="color: red;">*</i>需要提供什么:</span>
              <div class="parent">
                 <div class="provide" v-for="(item,index) in provide" :key="index" @click="isChoose(item,index)" v-if="types==='个人定制'">{{item}}<i></i></div>
                 <div class="provide1" v-for="(item1,index1) in company" :key="index1" @click="isChoose1(item1,index1)" v-if="types==='公司定制'" >{{item1}}<i></i></div>
              </div>
             
            </li>
            <li style="margin-top: 20px;">
              <span><i style="color: red;">*</i>最多几位定制师:</span>
                <el-radio-group v-model="num" size="large" style="display: inline-block;" @change="Num">
                  <el-radio-button class="radio" label="&nbsp;&nbsp;&nbsp;&nbsp;1位&nbsp;&nbsp;&nbsp;&nbsp;" value="1位" />
                  <el-radio-button class="radio" label="&nbsp;&nbsp;&nbsp;&nbsp;2位&nbsp;&nbsp;&nbsp;&nbsp;" value="2位" />
                  <el-radio-button class="radio" label="&nbsp;&nbsp;&nbsp;&nbsp;3位&nbsp;&nbsp;&nbsp;&nbsp;" value="3位" />
                </el-radio-group>
              <span style="margin-left:120px;font-size: 12px;width:400px;color: #999;text-align:left;margin-top:10px"><i class="tip"></i>你可以选择多位来自不同旅行社的定制师为您提供方案和报价，货比三家，选择最满意的一位为您服务。</span>

            </li>
            <li>
              <span style="padding-top:10px;  vertical-align: top;"><i style="color: red;">*</i>其他需求:</span>
              <el-input
              v-model="textarea"
              style="width: 412px;display:inline-block;"
              maxlength="1000"
              type="textarea"
              :rows="4"
              show-word-limit
              placeholder="选填,可在此输入个性化需求,如:同行人中是否含婴儿、老人,希望定制师何时联系您,对酒店、景点、出行方式的具体要求等"
              @input="Input"
              />
              <span style="margin-left:120px;font-size: 12px;width:400px;color: #999;text-align:left;margin-top:20px">*提交需求后会有合作商家指定的专业定制师联系您，为您免费制作方案，可根据实际情况调整细节</span>

            </li>
          </ul>
      
         </div>
</template>

<script lang="ts" setup>
   import { onMounted, ref } from 'vue';
   import bus from '@/bus/bus'
   //文本
   let textarea=ref('')
   //定制类型
   let types=ref('个人定制')
   //需要提供什么
   //渲染模板用的
   let provide=ref(['线路设计','机票','用车','导游','酒店','签证','门票','用餐'])
   let company=ref(['团建拓展','公司旅游','会议会务','商务考察'])
   //传参用的
   let provide1=ref('线路设计 机票 用车 导游 酒店 签证 门票 用餐')
   let company1=ref('')
   //定制师数量
   let num=ref('1位')

   const Input=()=>{
    bus.emit('needs',{needs:textarea.value})
   }
   const Num=()=>{
    bus.emit('Num',{Num:num.value})
   }
   const isChoose=(choose:string,index:number)=>{
    let dom=document.querySelector(`.parent :nth-child(${index+1})`)! as HTMLElement
    let dom1=document.querySelector(`.parent :nth-child(${index+1}) i`)! as HTMLElement
    if(dom.style.borderColor!=='grey'){
       dom.style.borderColor='grey'
       dom.style.color='grey'
       dom1.style.visibility='hidden'
      }
    else{
      dom.style.borderColor=''
      dom.style.color=''
      dom1.style.visibility='visible'
    }
    const str=provide1.value
    //点击时如果有这个字符串就删掉
    if(str.includes(choose)){
      provide1.value=str.replace(choose,'')
    }
    //如果没有再加上
    else{
      provide1.value+=' '+choose
      
    }
    
     bus.emit('needProvide',{provide:provide1})
   }
   const isChoose1=(choose:string,index:number)=>{
    let dom=document.querySelector(`.parent :nth-child(${index+1})`)! as HTMLElement
    let dom1=document.querySelector(`.parent :nth-child(${index+1}) i`)! as HTMLElement
    if(dom.style.borderColor!=='rgb(25, 160, 240)'){
       dom.style.borderColor='rgb(25, 160, 240)'
       dom.style.color='rgb(25, 160, 240)'
       dom1.style.visibility='visible'
      }
    else{
      dom.style.borderColor='grey'
      dom.style.color='grey'
      dom1.style.visibility='hidden'
    }
    const str=company1.value
    //点击时如果有这个字符串就删掉
    if(str.includes(choose)){
      company1.value=str.replace(choose,'')
    }
    //如果没有再加上
    else{
      company1.value+=' '+choose
    }
     bus.emit('companyProvide',{company:company1.value})
   }
   onMounted(()=>{
    bus.emit('needProvide',{provide:provide1})
    bus.emit('companyProvide',{company:company1})
    bus.emit('Num',{Num:num.value})
    bus.on('type',(type:any)=>{
       console.log(type);
       types.value=type.type
     })
   })
</script>

<style lang="less" scoped>
 .input{
        width: 546px;
        height: 360px;
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

  .tip{
    border-radius: 50%;
width: 12px;
height:12px;
background:url('@/assets/travel/customizedTravel/bottom.png');
background-position: -100px -360px;
    }
  .radio{
margin-right: 20px;border:1px solid #cfd3dc
    }
  .provide{
display:inline-block;
position: relative;
padding:10px;
width: 65px;
cursor: pointer;
border:1px solid rgb(25, 160, 240);
color: rgb(25, 160, 240);
text-align: center;
margin-right:10px;
i{
  position: absolute;
  background: url('@/assets/travel/customizedTravel/bottom.png');
  background-position: -140px -360px;
  right: -3px;
  bottom: -1px;
  width: 15px;
  height: 15px;
}
    }
  .provide1{
display:inline-block;
position: relative;
padding:10px;
width: 65px;
cursor: pointer;
border:1px solid ;
text-align: center;
margin-right:10px;
i{
  position: absolute;
  background: url('@/assets/travel/customizedTravel/bottom.png');
  background-position: -140px -360px;
  right: -3px;
  bottom: -1px;
  width: 15px;
  height: 15px;
  visibility: hidden
}
    }
  .parent{
       display: inline-block;
       width:400px
    }
  .parent :nth-child(n+4){
      margin-top: 10px;
     
    }
</style>