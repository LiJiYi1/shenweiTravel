<template>
    <div>
        <!-- 顶部 -->
        <div class="top" id="神威旅行简介">
            <div style="display:flex" flex="1" >
            <img src="@/assets/home/logo.png" alt="" style="width: 60px;" >
            <h1 style="font-size: 30px;margin-top:10px">神威旅行</h1>
             </div>
              
            <div flex="1" style="display:flex;margin-top:16px">
                <el-popover
                placement="top-start"
                title="访问客服中心"
                :width="200"
                trigger="hover"
                content="境内：95010&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp或 400-830-6666&nbsp
                    中国香港：+852-3008-3295&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    中国澳门：+86-21 3406-4888&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    中国台湾：+86-21 3406-4888&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    其他国家和地区：+86-21-3406-4888"
                >
                <template #reference>
                <div style="padding-right:22px;border-right:1px solid;height:25px"><el-icon><PhoneFilled /></el-icon>联系客服</div>
                </template>
                </el-popover>
                <div  @click="back" style="margin-left: 18px;display:flex;cursor:pointer">
                    <el-icon size="20"><HomeFilled/></el-icon>
                    <p style="line-height:20px;font-size:20px">首页</p>
                </div>
            </div>
       </div>
       <div class="title">
        <p>
            <span>神威旅行</span> <el-icon><ArrowRight /></el-icon><span>{{$route.params['head']}}</span><el-icon><ArrowRight /></el-icon>
            {{$route.params["include"]}}
        </p>
        <div style="display: flex;">
            <h5>编号：47002065</h5>
            <h5>出发地:威海</h5>
        </div>
       </div>
       <!-- 内容区 -->
       <div class="center">
          
        <div class="cl">
                   <h2>{{$route.params['head']}}</h2>
                   <p>{{$route.params["include"]}}</p>
                   <div>
                     <p>{{$route.params["price"]}}</p>/人
                     
                     <el-popover
   
    title="起价说明"
    :width="400"
    trigger="hover"
    content="

1、本起价为近24小时内，查询出发日为2025-04-14 2位成人出行，选择威海希尔维亚酒店[豪华商务大床房-地暖]1间入住2晚、丽景海岸酒店(烟台火车站汽车总站店)[双窗舒适大床房(干湿分离）]1间入住2晚、经济5座专车的情况下预估的单人价格。因酒店和机票等资源价格会实时变化，故查询日期、出发时间不同，选择的线路、入住酒店/房型、航班及附加服务不同，以及用户可参与的促销活动不同，价格都有可能变化，预订价格以下单时实际支付的价格为准。本起价为神威网【2025/03/11】到【2025/05/05】出发班期的最低价。"
  >
    <template #reference>
      <span style="border-bottom:1px dashed;">起价说明</span>
    </template>
                     </el-popover>
                     <span>两人出游</span>
                   </div>
                   <img :src="$route.params['img'] as any" alt="">
                   <footer style="display: flex;">
                    <p style="font-size: 12px;color:#999;margin-right:40px;;padding:2px">产品特色</p>
                   <p style="font-size: 12px;border:1px solid #999;margin-left:30px;padding:2px">亲子甄选</p>
                   <p style="font-size: 12px;border:1px solid #999;margin-left:30px;padding:2px">包车游</p>
                   <p style="font-size: 12px;border:1px solid #999;margin-left:30px;padding:2px">海滨/沙滩</p>
                   <p style="font-size: 12px;border:1px solid #999;margin-left:30px;padding:2px">海岛</p>
                   <p style="font-size: 12px;border:1px solid #999;margin-left:30px;padding:2px">自选酒店</p>
                   <p style="font-size: 12px;border:1px solid #999;margin-left:30px;padding:2px">车型可选</p>
                   </footer>
                    <footer style="display: flex;cursor:pointer" @click="show">
                    <p style="font-size: 12px;color:#999;margin-right:80px;;padding:2px">服务保障</p>
                    <p class="spirit"></p>
                    <p style="font-size: 12px;margin-right:10px">放心游</p>
                    <p style="font-size: 12px;color:#0086f6;">查看详情></p>
                    
                   </footer>
                   
               
        </div>
        <div class="cr">
            <el-calendar>
                   <template #date-cell="{ data }">
                   <p :class="data.isSelected ? 'is-selected' : ''">
                   {{ data.day.split('-').slice(1).join('-') }}
                            {{ data.isSelected ? '✔️' : '' }}
      </p>
    </template>
              </el-calendar>
        </div>
            
       </div>
  
    </div>
  <el-dialog v-model="dialogTableVisible"  width="1170" style="padding: 0;height:645px;margin-top:30px;overflow:auto">
          <DialogBox></DialogBox>
  </el-dialog>
  <footer style="width:1520px;height:100px;margin-top:252px;padding:140px;padding-top:20px">
        <div style="width: 1340px;height:20px;background-color:#fffcf6;border: #ffd2b8 1px solid;height:180px"></div>
  </footer>
  <BottomComponent></BottomComponent>
</template>

<script lang="ts" setup>
import BottomComponent from '@/components/bottomComponent.vue';
import DialogBox from '@/components/travelSearch/dialogBox.vue';
import { onMounted,ref } from 'vue';
import { useRouter,useRoute } from 'vue-router';
const $router=useRouter()
const $route=useRoute()
const dialogTableVisible=ref(false)

const back=()=>{
$router.push('/travel/travelHome')
}
const show=()=>{
dialogTableVisible.value=true
}

onMounted(()=>{

    
})
</script>

<style lang="less" scoped>
.top{
    width: 1218px;
    padding: 140px;
    padding-top:0px;
    padding-bottom:35px;
    display: flex;
    justify-content: space-between;
}
.title{
    font-size: 16px;
    line-height: 15px;
     padding-left: 140px;
     padding-right: 80px;
     display: flex;
     justify-content: space-between;
     span{
        color: chocolate;
     }
     h5{
        margin-left:40px;
     }
    
}
.center{
    margin-top: 20px;
    width: 1500px;
    display: flex;
    .cl{
        padding-left: 140px;
        width: 1000px;
        height: 400px;
        p{
        margin-top:12px
        }
        div{
            color: black;
            padding: 20px;
            padding-top: 0;
            margin-top: 12px;
            width: 670px;
            height: 28px;
            background-color: #fef9ee;
            p{ 
                display: inline-block;
                color: #f70;
                font-weight: 700;
                font-size: 20px;
            }
            span{
                display: inline-block;
                font-size: 12px;
                margin-left: 20px;
            }
        }
        img{
            margin-top: 10px;
            width: 710px;
        }
    }
    .cr{
         width: 800px;
        height: 400px;
   
    }
}
h2{
    color: black;
}
.spirit{
    margin-left: -10px;
width:18px;
height:18px;
background:url('@/assets/TravelSearch/spirit.png');
background-position: 0 -58px;
background-repeat: no-repeat;
}
</style>