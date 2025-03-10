<template>
  <div>
        <!-- 最顶导航栏-->
        <div class="top" id="神威旅行简介">
            <div style="display:flex" flex="1" >
            <img src="@/assets/home/logo.png" alt="" style="width: 60px;" >
            <h1 style="font-size: 30px;margin-top:10px">神威旅行</h1>
             </div>
              
            <div flex="1" style="display:flex;margin-top:16px;">
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

        <!-- 顶部标题区-->
        <div class="title">
            <p style="min-width: 140px;font-size:12px;width:140px">
            <span>神威旅行</span>
            <el-icon><ArrowRight /></el-icon>
            <span>{{$route.params['head']}}</span>
            <el-icon><ArrowRight /></el-icon>
            </p>
            <p style="color:#999;display: inline-block;width:600px;min-width:700px;font-size:12px;overflow:hidden; text-overflow: ellipsis;white-space:nowrap"> 
            {{$route.params['title']}}{{$route.params['about']}}
            </p>             
            <div style="display: flex;">
              <h5 style="width: 120px;margin-left:280px">编号：47002065</h5>
              <h5 style="width: 100px;">出发地:威海</h5>
              </div>
         </div>
         <!-- 中间内容区 -->
         <div class="center">
       
        <div class="cl">
                   <p style="font-size: 30px;">{{$route.params["title"]}}</p>
                   <p   style="color:#999;font-size:14px;margin-top:10px">{{$route.params["about"]}}</p>
                   <div class="box">
                   <p>{{$route.params["price"]}}</p>/人起
                   <el-popover 
                   title="起价说明"
                   :width="400"
      trigger="hover"
      content="1、本起价为近24小时内，查询出发日为2025-04-14 2位成人出行，选择威海希尔维亚酒店[豪华商务大床房-地暖]1间入住2晚、丽景海岸酒店(烟台火车站汽车总站店)[双窗舒适大床房(干湿分离）]1间入住2晚、经济5座专车的情况下预估的单人价格。因酒店和机票等资源价格会实时变化，故查询日期、出发时间不同，选择的线路、入住酒店/房型、航班及附加服务不同，以及用户可参与的促销活动不同，价格都有可能变化，预订价格以下单时实际支付的价格为准。本起价为神威网【2025/03/11】到【2025/05/05】出发班期的最低价。"
      >
    <template #reference>
      <span style="border-bottom:1px dashed;">起价说明</span>
    </template>
                   </el-popover>
                   <span style="font-size:20px;color:#0086f6;display:inline-block;border-bottom:1px solid #0086f6">4.9分</span>
                   <span style="font-size:12px;color:#0086f6;display:inline-block;border-bottom:1px solid #0086f6">15条点评</span>
                   <span style="font-size:12px;">39人出游</span>
                   <div style="margin-top: 10px;">
                            <span style="font-size: 12px;color:#999;margin-left:0px">优惠活动</span>
                            <span style="font-size: 12px;color:rgb(255 85 0/var(--tw-text-opacity,1));padding:2px;border:1px solid rgb(255 85 0/var(--tw-text-opacity,1))">限时促销</span>
                            <span style="font-size: 12px;">每单减¥30</span>
                   <el-popover
   
    title="限时促销"
    :width="250"
    trigger="hover"
    content="
系统将默认按最大可享优惠结算
318大促
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
每单减¥30
适用于2025-02-10至2025-05-10出发的班期;库存有限，先到先得&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
*
对于以不正当方式参与优惠活动的用户，包括但不限于恶意套现、恶意下单、恶意注册、利用程序漏洞等，携程旅行网有权在不事先通知的情况下取消其参与优惠活动的资格"
  >
    <template #reference>
               <span style="font-size: 12px;padding:2px;display:inline-block;border-bottom:1px dashed">查看详情</span>
    </template>
                     </el-popover>
                            
                     </div>
                   </div>
                   
                   <img :src="$route.params['img'] as any" alt="">
                   <footer style="display:flex;margin-top:10px">
                    <p style="font-size: 12px;color:#999;margin-right:40px;;padding:2px">产品特色</p>
                   <p style="font-size: 12px;border:1px solid #999;margin-left:30px;padding:2px">亲子甄选</p>
                   <p style="font-size: 12px;border:1px solid #999;margin-left:30px;padding:2px">包车游</p>
                   <p style="font-size: 12px;border:1px solid #999;margin-left:30px;padding:2px">海滨/沙滩</p>
                   <p style="font-size: 12px;border:1px solid #999;margin-left:30px;padding:2px">海岛</p>
                   <p style="font-size: 12px;border:1px solid #999;margin-left:30px;padding:2px">自选酒店</p>
                   <p style="font-size: 12px;border:1px solid #999;margin-left:30px;padding:2px">车型可选</p>
                   </footer>
                    <footer style="display: flex;cursor:pointer;margin-top:4px" @click="show">
                    <p style="font-size: 12px;color:#999;margin-right:80px;;padding:2px">服务保障</p>
                    <p class="spirit"></p>
                    <p style="font-size: 12px;margin-right:10px">放心游</p>
                    <p style="font-size: 12px;color:#0086f6;">查看详情></p>
                    
                   </footer>
                    <footer style="display: flex;cursor:pointer" @click="show">
                    <p style="font-size: 12px;color:#999;margin-right:80px;;padding:2px;width:90px">产品特色</p>
                    <p style="font-size: 12px;margin-right:10px;line-height:20px;margin-left:-10px">
                        ★ 【服务保障】🔷2-6人精品轻奢小团，真纯玩0购物<br>
🔷保证天天发（赠送24小时接站/送站）<br>
🔷含5A级景区刘公岛【商家独宠：赠送刘公岛电瓶车+潜艇参观】<br>
🔷幸福门登顶含门票【贴心赠送暖心咖啡】<br>
🔷4钻华夏大酒店2晚连住<br>
🔷赠送特色餐韩国料理<br>
★ 【度假首选】🔷企业宗旨：高品质服务+物美价廉<br>
🔷精心打磨产品+只为优化您的体验<br>
🔷品质方面：我们有足够的自信横扫市场，让您享受不一样的旅行！<br>
🔷车览山海画卷~步量浪漫诗筏~浪漫威海<br>
★ 【缤纷景点】3天2晚威海+荣成：<br>
🔷5A级景区+标志建筑+一站式打卡9大网红景点，威海之行不留遗憾~<br>
🔷5A级景区刘公岛：【刘公岛博览园】+【甲午战争博物馆】+【甲午战争陈列馆】+【定远舰】+【赠送刘公岛电瓶车+潜艇参观】<br>
🔷威海标志建筑：【幸福门登顶】<br>
🔷9大网红景点：【火炬八街】【那香海钻石沙滩浴场】+【搁浅货轮布鲁维斯号】+【小五队抱海驿站海草房】+【天鹅湖景区】+【悦海公园】+【大相框】+【海源公园】+【环海路，猫头山二号观景台】<br>
                    </p>
                   
                    
                   </footer>
                   
               
      </div>

      
        <div class="cr">
            <el-calendar v-model="date">
                   <template #date-cell="{ data }">
                   <p :class="data.isSelected ? 'is-selected' : ''" style="margin-top:10px;text-align:center">
                   {{ data.day.split('-').slice(2,3).join('') }}
                   
                    </p>
                     <p style="color:red;font-size:14px;margin-top:10px;text-align:center">{{$route.params['price']}}</p>
                    </template>
              </el-calendar>
        </div>
            
       </div>
  
  </div>
  <!-- 对话框 -->
  <el-dialog v-model="dialogTableVisible"  width="1170" style="padding: 0;height:645px;margin-top:30px;overflow:auto">
          <DialogBox></DialogBox>
  </el-dialog>
  <!-- 底部购票 -->
  <footer style="width:1200px;margin-top:22px;padding:20px;padding-top:20px;margin-left:118px" body-style="padding:0">
        <div style="padding:50px;width: 1240px;border: #ffd2b8 1px solid;height:80px;display:flex;justify-content:space-between">
             <div style="display: flex;">
                <div>
                    <p>出发</p>
        <el-date-picker
        v-model="date"
        type="date"
        placeholder="Pick a day"
        size="large"
        style="margin-top:20px;width:140px"
        :clearable="false"
      />
                    
                </div>
                <div style="margin-left:40px" width="20px">
                    <p style="display:inline-block">成人</p><span style="font-size: 12px;display:inline-block;margin-left:10px;border-bottom:1px dashed">12周岁及以上</span><br>
                      <el-select popper-class="custom-popper"  v-model="adult" placeholder="成人" size="large" style="width: 130px;margin-top:20px">
                              <el-option
      v-for="(item,index) in 8"
        :key="index"
        :label="item"
        :value="item"
                              />
                              <el-option
                              key="item"
                              label=">9"
                              value=">9"
                                />
                          </el-select>
                </div>
                <div style="margin-left:40px">
                    <p style="display:inline-block">儿童</p><span style="font-size: 12px;display:inline-block;margin-left:10px;border-bottom:1px dashed">2-12周岁(不含)</span><br>
                           <el-select  v-model="child" popper-class="custom-popper" placeholder="儿童" size="large" style="width: 130px;margin-top:20px">
                             <el-option
                              key="0"
                              label="0"
                              value="0"
                                />
                              <el-option
      v-for="(item,index) in 8"
        :key="index"
        :label="item"
        :value="item"
                              />
                              <el-option
                              key="item"
                              label=">9"
                              value=">9"
                                />
                          </el-select>
                </div>

             </div>
             <div>
              <p style="display: inline-block;margin-right:70px">总价:
                <span style="margin-left:10px;color:red">{{sum}}</span>
              </p>
              <div style="display: inline-block;">
                <p style="margin-left:20px">
                 <el-icon><Warning /></el-icon>
                 <span style="display:inline-block;border-bottom:1px dotted #999;color:#999;margin-bottom:6px;padding-bottom:4px">预订限制</span>
                </p>
              <el-button style="width: 120px;height:40px" color="red">加入购物车</el-button>
              </div>
          
             </div>

        </div>
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
//日期
let date=ref(new Date())
//成人数量
let adult=ref('1')
//儿童数量
let child=ref('0')
//总价
let sum=ref('—   —')
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
    width: 1328px;
    padding: 140px;
    
    padding-right: 0px;
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
   margin-top: 40px;
    width: 1500px;
    display: flex;
    .cl{
        padding-left: 140px;
        width: 1000px;
        overflow: auto;
        height:620px;
        .box{
            color: black;
            padding: 20px;
            margin-top: 10px;
            padding-top: 20px;
            width: 670px;
            height: 58px;
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
        height: 500px;
   
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
.is-selected {
  color: #ff9900;
}
.custom-popper {
  background-color:red;
  height: 80px; /* 设置下拉选项的高度 */
  line-height: 40px; /* 设置下拉选项的文字垂直居中 */
}
</style>