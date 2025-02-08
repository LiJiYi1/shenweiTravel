<template>
    <div>
        <div class="bottom-center">
            <!-- 警告组件 -->
            <div class="alert">
              <div>
                <p></p>
                <span>平台高峰预警信息&nbsp;&nbsp;&nbsp;(2条)</span>
              </div>
               <div class="bar"></div>
            </div>
            <!--景区实时客流量组件 -->
            <RealTimeCount style="flex: 3;" class="number"></RealTimeCount>
           <!-- 客流量趋势图组件 -->
           <Touristcount style="flex: 1.69;"></Touristcount>

        </div>
    </div>
</template>

<script setup lang="ts">
import RealTimeCount from './realTimeCount/realTimeCount.vue';
import Touristcount from './touristcount/touristCount.vue';



</script>

<style lang="less" scoped>
    .bottom-center{
        margin-top: 24px;
        height: calc(1080px - 40px);
        display: flex;
        flex-direction: column;
        margin-left:30px;
        .alert{
            height: 50px;
            line-height: 50px;
            flex: 0.3;
            font-size: 20px;
            color: white;
            background: url('@/assets/bigScreen/images/dataScreen-header-warn-bg.png') no-repeat;
            background-size: cover;
            text-align: center;
            margin-top: 15px;
            div{
                 display: flex;
            justify-content: center;
                p{ 
                margin-top: 25px;
                width: 20px;
                height: 20px;
                background: url('@/assets/bigScreen/images/dataScreen-alarm.png') no-repeat;
                background-size: cover;
              }
               span{
                margin-top: 7px;
               }
            }
            .bar{
                width: 200px;
                height: 7px;
                background: url('@/assets/bigScreen/images/dataScreen-title.png');
                margin-left: 450px;
            }
        }
    }
   
</style>