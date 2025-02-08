<template>
    <div>
             <div class="count">
                <div class="title">
                    <p>未来一年客流量趋势图</p>
                    <p class="bg"></p>
                </div>
                <div  ref="container" class="container">

                </div>
             </div>
    </div>
</template>

<script setup lang="ts">
  import * as echarts from 'echarts'
  import {onMounted, ref} from 'vue'
  const container=ref(null)
  onMounted(()=>{
     initEchart()
  })
let dataList = [{
    name: '12月',
    value: '70000'
}, {
    name: '1月',
    value: '90000'
}, {
    name: '2月',
    value: '20000'
}, {
    name: '3月',
    value: '90000'
}, {
    name: '4月',
    value: '30000'
}, {
    name: '5月',
    value: '80000'
}, {
    name: '6月',
    value: '70000'
},
{
    name: '7月',
    value: '90000'
}, {
    name: '8月',
    value: '60000'
}, {
    name: '9月',
    value: '55000'
}, {
    name: '10月',
    value: '93000'
}, {
    name: '11月',
    value: '6000'
}, {
    name: '12月',
    value: '52000'
}, {
    name: '1月',
    value: '90000'
},


]
  function initEchart(){
        const myChart=echarts.init(container.value)
        myChart.setOption( {
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(17,95,182,0.0)',
        textStyle: {
            color: "#fff"
        },
        triggerOn: "mousemove",
        showContent: true,
    },
    title: {
        left: 26,
        top: 26,
        textStyle: {
            color: '#FFFFFF',
            fontSize: 15,
            fontWeight: 50000,
            fontFamily: 'PingFang SC'
        }
    },
    grid: {
        left: '1%',
        right: '1%',
        bottom: '24%',
        top: '20%',
        containLabel: true
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: dataList.length > 15 ? 35 : 100
    }],
    xAxis: {
        axisLine: {
            
            lineStyle: {
                color: '#397cbc'
            }
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        //轴线上的字
        axisLabel: {
            show: true,
            textStyle: {
                color: 'rgba(255,255,255,0.8)',
                fontSize: '14'
            }
        },
        data: [
        '12月', '1月', '2月', '3月', '4月', '5月', '6月',
        '7月', '8月', '9月', '10月', '11月', '12月', '1月',
    
              ]
    },
    yAxis: [{
        name: '(访问量)',
        nameTextStyle: {
            color: 'rgba(255,255,255,0.8)'
        },
        type: 'value',
        splitNumber: 4,
        axisTick: {
            show: false
        },
        //轴线上的字
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: '14',
                color: 'rgba(255,255,255,0.8)'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#397cbc'
            }
        },
        //网格线
        splitLine: {
            lineStyle: {
                color: '#11366e'
            },
            show:false
        }
    }],
    series: [{
        name: '数量',
        type: 'line',
        smooth: true, //是否平滑曲线显示
        showSymbol: false,
        itemStyle: {
            color: '#F3A22D',
            borderColor: '#F3A22D',
            borderWidth: 1
        },
        lineStyle: {
            normal: {
                width: 2,
                color: {
                    type: 'linear',
                    colorStops: [{
                        offset: 0,
                        color: '#F3A22D' // 0% 处的颜色
                    },
                    {
                        offset: 1,
                        color: '#F3A22D' // 100% 处的颜色
                    }
                    ],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: '#F3A22D',
                shadowBlur: 30,
                shadowOffsetY: 5
            }
        },
        areaStyle: {
            //区域填充样式
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                        offset: 0,
                        color: "rgba(243,162,45, 0.6)"
                    }, {
                        offset: 0.6,
                        color: "rgba(243,162,45, 0.2)"
                    },
                    {
                        offset: 0.8,
                        color: "rgba(243,162,45, 0.1)"
                    }
                    ],
                    false
                ),
                shadowColor: "rgba(243,162,45, 0.1)",
                shadowBlur: 6
            }
        },
        data: dataList
    }]
}
)
  }
</script>

<style lang="less" scoped>
    .count{
      
        height: 250px;
        width: 1070px;
        background: url('@/assets/bigScreen/images/dataScreen-main-cb.png') ;
        background-size: cover;
        .title{
            padding-top: 10px;
            color: white;
            .bg{
                width: 80px;
                height: 10px;
                background: url('@/assets/bigScreen/images/dataScreen-title.png') no-repeat;
                margin-top: 10px;
            }
        }
        .container{
            width: 100%;
            height: 100%;
        }
    }

</style>