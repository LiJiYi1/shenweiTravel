<template>
         <div class="input">
            <ul>
            <li>
              <span><i style="color: red;">*</i>出游性质:</span>
              <div style="display:inline-block;cursor:pointer">
                <div class="type1" ref="type1" @click="border1">个人定制<i v-show="gou1"></i></div>
                <div class="type2" ref="type2" @click="border2">公司定制<i v-show="gou2"></i></div>
              </div>
            </li>
            <li style="z-index:-1"><span><i style="color: red;">*</i>目的地:</span>
              <SearchAlert></SearchAlert>
     
            </li>
            <li style="z-index:-10"><span><i style="color: red;">*</i>预估出行日期:</span>
            <el-date-picker
             v-model="date"
             type="daterange"
             range-separator="-"
             start-placeholder="起始日期"
             end-placeholder="结束日期"
             size="large"
             :clearable="false"
             @change="Dates"
              />
            </li>
            <li><span><i style="color: red;">*</i>预估出行人数:</span>
              <el-input-number style="width: 100px;margin-right:4px" v-model="num1" :min="1" :max="9999" @change="adult" />成人
              <el-input-number style="width: 100px;margin-right:4px" v-model="num2" :min="0" :max="9999" @change="children" />儿童
              <el-input-number style="width: 100px;margin-right:4px" v-model="num3" :min="0" :max="9999" @change="baby" />婴儿
            </li>
            <li><span><i style="color: red;">*</i>预估人均预算:</span>
            <el-input @input="budget" type="text" :formatter="Formatter" :parser="Parser"  :maxlength="9" :min="0" :max="999999999" v-model="yusuan" style="width: 180px" placeholder="如暂时不明确可不填写" />
            <span style="width: 200px;"><i class="tip"></i>请输入0-999999999之间的数字</span>
            </li>
            <li>
              <span style="margin-left:120px;font-size: 12px;width:400px;color: #999;text-align:left">*请您在提交前仔细阅读个人信息授权声明，提交需求后会有专业定制师联系您，为您免费制作方案，可根据实际情况调整细节</span>
            </li>
        </ul>
      
         </div>
</template>

<script lang="ts" setup>
   import { onMounted, ref } from 'vue';
   import bus from '@/bus/bus'
import SearchAlert from './searchAlert.vue';
   //拿到出游性质的两个DOM
   let type1=ref()
   let type2=ref()
   //对钩是否显示
   let gou1=ref(true)
   let gou2=ref(false)
   //出行日期
   let date=ref('')
   //成人
   let num1=ref(1)
   //儿童
   let num2=ref(0)
   //婴儿
   let num3=ref(0)
   //预算
   let yusuan=ref()
   //点击事件实现边框效果,并传给右边组件数据
   const border1=()=>{
       type1.value.style.borderColor='#19a0f0'
       type1.value.style.color='#19a0f0'
       type2.value.style.borderColor=''
       type2.value.style.color=''
       gou2.value=false
       gou1.value=true
       bus.emit('type',{
         type:'个人定制'
       })
   }
   const border2=()=>{
       type2.value.style.borderColor='#19a0f0'
       type2.value.style.color='#19a0f0'
       type1.value.style.borderColor=''
       type1.value.style.color=''
       gou2.value=true
       gou1.value=false
        bus.emit('type',{
         type:'公司定制'
       })
   }
   const Dates=()=>{
   console.log(new Date(date.value[0]));
   let start=new Date(date.value[0])
   let end=new Date(date.value[1])
   //开始的年月日
   let [startYear,startMonth,startDay]=[start.getFullYear(),start.getMonth()+1,start.getDate()]
   //结束的年月日
   let [endYear,endMonth,endDay]=[end.getFullYear(),end.getMonth()+1,end.getDate()]
    bus.emit('Date',{
         date:startYear+'/'+startMonth+'/'+startDay+'-'+endYear+'/'+endMonth+'/'+endDay
       })
   }
   //成人
   const adult=()=>{
    bus.emit('adult',{adult:num1.value})
   }
   //儿童
   const children=()=>{
      bus.emit('children',{children:num2.value})
   }
   //婴儿
   const baby=()=>{
      bus.emit('baby',{baby:num3.value})
   }
   //预算
   const budget=()=>{
    bus.emit('budget',{budget:yusuan.value})
   }
   //限制数字
   const Formatter=(value:string)=>{
       if(!value)return ''
       return value.replace(/[^\d]/g,'')
   }
   const Parser=(value:string)=>{
    const numVal=value.replace(/[^\d]/g,'')
    return numVal.replace(/^0+/,'')||'0'
   }
   onMounted(()=>{
       type1.value.style.borderColor='#19a0f0';
       type1.value.style.color='#19a0f0';
    
   })
</script>

<style lang="less" scoped>
 .input{
        width: 546px;
        ul{
            margin-top: 20px;
          li{
            height: 60px;
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
 .type1{
display:inline-block;
position: relative;
padding:10px;
width: 70px;
border:1px solid;
margin-right:20px;
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
 .type2{
display:inline-block;
position: relative;
padding:10px;
width: 70px;
border:1px solid;
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
  .tip{
    border-radius: 50%;
width: 12px;
height:12px;
background:url('@/assets/travel/customizedTravel/bottom.png');
background-position: -100px -360px;
    }
</style>