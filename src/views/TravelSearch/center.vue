<template>
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
对于以不正当方式参与优惠活动的用户，包括但不限于恶意套现、恶意下单、恶意注册、利用程序漏洞等，神威旅行网有权在不事先通知的情况下取消其参与优惠活动的资格"
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
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>

</style>