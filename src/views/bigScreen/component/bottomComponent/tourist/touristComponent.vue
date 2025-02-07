<template>
    <div>
             <div class="tourist">
                <div class="title">
                    <p>实时游客统计</p>
                    <p class="bg"></p>
                </div>
                <div class="total">
                   可预约总量<span>99999</span>人
                </div>
                <div class="count">
                     <span v-for="(item,index) in count" :key="index">{{item}}</span>
                </div>
                <div class="chart" ref="chart">
                </div>
            </div>
    </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import * as echarts from 'echarts'
  import 'echarts-liquidfill'
  const count=ref('216908人')
  //拿到盛放echart的dom元素
  const chart=ref(null)
  onMounted(()=>{
   initEchart()
  })
function initEchart(){
//初始化echart
  const myChart= echarts.init(chart.value);
  myChart.setOption(
{
    series: [{
        type: 'liquidFill',
        data: [0.5, 0.4, 0.3, 0.2],
        radius: '55%',
        backgroundStyle: {
            borderWidth: 0.1,
            shadowColor: 'rgba(0, 1.0, 1.0, 0.8)',
            shadowBlur: 3
        },
        //shape: 'diamond',
        outline: {//外层边框颜色设置
                show: true,
                borderDistance: 1,
                itemStyle: {
                    color: 'skyblue',
                    borderColor: '#294D99',
                    borderWidth: 1,
                    shadowBlur: 2,
                    shadowColor: 'rgba(0, 0, 0, 0.25)'
                }
            },
         label: {
                        formatter: '21.7%',
                        textStyle: {
                            fontSize: 35,
                            fontFamily: 'Lobster Two'
                        }
                    }
               
    }],
 
}
  )
}
</script>

<style lang="less" scoped>
    .tourist{
        height: 350px;
        width: 350px;
        background: url('@/assets/bigScreen/images/dataScreen-main-lt.png') ;
        background-size: cover;
        margin-top: 20px;
        .title{
            color: white;
            .bg{
                width: 80px;
                height: 10px;
                background: url('@/assets/bigScreen/images/dataScreen-title.png') no-repeat;
                margin-top: 10px;
            }
        }
        .total{
            color: white;
            float: right;
            padding-right: 10px;
            font-size:15px;
            span{
                color: coral;
            }
        }
        .count{
            margin-top: 40px;
            margin-left: 20px;
            span{
            color: aqua;
            font-size:38px;
            padding: 10px;
            background: url('@/assets/bigScreen/images/total.png');
            }
        }
    }
   .chart{
    margin-top: -50px;
    width: 100%;
    height: 100%;
   }
</style>