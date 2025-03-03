<template>
         <div class="input">
          <ul>
              <li>
              <span><i style="color: red;">*</i>最多几位定制师:</span>
                <el-radio-group v-model="num" size="large" style="display: inline-block;">
                  <el-radio-button style="margin-right: 20px;" label="&nbsp;&nbsp;&nbsp;&nbsp;1位&nbsp;&nbsp;&nbsp;&nbsp;" value="1位" />
                  <el-radio-button style="margin-right: 20px;" label="&nbsp;&nbsp;&nbsp;&nbsp;2位&nbsp;&nbsp;&nbsp;&nbsp;" value="2位" />
                  <el-radio-button  label="&nbsp;&nbsp;&nbsp;&nbsp;3位&nbsp;&nbsp;&nbsp;&nbsp;" value="3位" />
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
              rows="4"
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
   let textarea=ref('')
   //定制师数量
   let num=ref()
   const Input=()=>{
    bus.emit('needs',{needs:textarea.value})
   }
   onMounted(()=>{

    
   })
</script>

<style lang="less" scoped>
 .input{
        width: 546px;
        height: 400px;
        ul{
            margin-top: 20px;
          li{
            margin-top: 10px;
            height: 90px;
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
</style>