<template>
    <div>
             <div class="countCompare">
                  <div class="title">
                    <p>年度客流量对比</p>
                    <p class="bg"></p>
                </div>
                <!-- 图表容器 -->
                <div class="container" ref="container"></div>
             </div>
    </div>
</template>

<script setup >
  import * as echarts from 'echarts'
  import { ref,onMounted } from 'vue';
  const container=ref(null)
  onMounted(()=>{
    initEchart()
  })





  function initEchart(){
     const myChart=echarts.init(container.value)
     myChart.setOption({
				    
				    title: {
				        
				        textStyle: {
				            align: 'center',
				            color: '#fff',
				            fontSize: 20,
				        },
				        top: '5%',
				        left: 'center',
				    },
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            lineStyle: {
				                color: {
				                    type: 'linear',
				                    x: 0,
				                    y: 0,
				                    x2: 0,
				                    y2: 1,
				                    colorStops: [{
				                        offset: 0,
				                        color: 'rgba(0, 255, 233,0)'
				                    }, {
				                        offset: 0.5,
				                        color: 'rgba(255, 255, 255,1)',
				                    }, {
				                        offset: 1,
				                        color: 'rgba(0, 255, 233,0)'
				                    }],
				                    global: false
				                }
				            },
				        },
				    },
				    grid: {
				        top: '20%',
				        left: '5%',
				        right: '7%',
				        bottom: '15%',
				         containLabel: true
				    },
				    xAxis: [{
				        type: 'category',
				        axisLine: {
				            show: true
				        },
				        splitArea: {
				            // show: true,
				            color: '#f00',
				            lineStyle: {
				                color: '#f00'
				            },
				        },
				        axisLabel: {
				            color: '#fff'
				        },
				        splitLine: {
				            show: false
				        },
				        boundaryGap: false,
				        data: ['', '1月1日','2月1日', '3月1日', '4月1日', '5月1日', '6月1日', '7月1日', '8月1日'],
				
				    }],
				
				    yAxis: [{
				        type: 'value',
						name: "万次",
						 nameTextStyle:{
							 color:"#fff", 
							 fontSize:12,  
						 },
				        min: 15,
				        max: 60,
				        splitNumber: 4,
				        splitLine: {
				            show: true,
				            lineStyle: {
				                color: 'rgba(255,255,255,0.1)'
				            }
				        },
				        axisLine: {
				            show: true,
				        },
				        axisLabel: {
				            show: true,
				            margin: 10,
							color: '#fff',
				            textStyle: {
				                color: '#d1e6eb',
				
				            },
							width: 40,
				        },
				        axisTick: {
				            show: false,
				        },
				    }],
				    series: [{
				            name: '注册总量',
				            type: 'line',
				            smooth: true, //是否平滑
				            showAllSymbol: true,
				            // symbol: 'image://./static/images/guang-circle.png',
				            symbol: 'circle',
				            symbolSize: 5,
				            lineStyle: {
				                normal: {
				                    color: "#00b3f4",
				                    shadowColor: 'rgba(0, 0, 0, .3)',
				                    shadowBlur: 0,
				                    shadowOffsetY: 5,
				                    shadowOffsetX: 5,
				                },
				            },
				            label: {
				                show: true,
				                position: 'top',
				                textStyle: {
				                    color: '#00b3f4',
				                }
				            },
				            itemStyle: {
				                color: "#00b3f4",
				                borderColor: "#fff",
				                borderWidth: 3,
				                shadowColor: 'rgba(0, 0, 0, .3)',
				                shadowBlur: 0,
				                shadowOffsetY: 2,
				                shadowOffsetX: 2,
				            },
				            tooltip: {
				                show: false
				            },
				            areaStyle: {
				                normal: {
				                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				                            offset: 0,
				                            color: 'rgba(0,179,244,0.3)'
				                        },
				                        {
				                            offset: 1,
				                            color: 'rgba(0,179,244,0)'
				                        }
				                    ], false),
				                    shadowColor: 'rgba(0,179,244, 0.9)',
				                    shadowBlur: 20
				                }
				            },
				            data: [15, 25, 32, 50, 16, 43,55,22,43]
				        },
				        {
				            name: '注册总量',
				            type: 'line',
				            smooth: true, //是否平滑
				            showAllSymbol: true,
				            // symbol: 'image://./static/images/guang-circle.png',
				            symbol: 'circle',
				            symbolSize: 5,
				            lineStyle: {
				                normal: {
				                    color: "#00ca95",
				                    shadowColor: 'rgba(0, 0, 0, .3)',
				                    shadowBlur: 0,
				                    shadowOffsetY: 5,
				                    shadowOffsetX: 5,
				                },
				            },
				            label: {
				                show: true,
				                position: 'top',
				                textStyle: {
				                    color: '#00ca95',
				                }
				            },
				
				            itemStyle: {
				                color: "#00ca95",
				                borderColor: "#fff",
				                borderWidth: 3,
				                shadowColor: 'rgba(0, 0, 0, .3)',
				                shadowBlur: 0,
				                shadowOffsetY: 2,
				                shadowOffsetX: 2,
				            },
				            tooltip: {
				                show: false
				            },
				            areaStyle: {
				                normal: {
				                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				                            offset: 0,
				                            color: 'rgba(0,202,149,0.3)'
				                        },
				                        {
				                            offset: 1,
				                            color: 'rgba(0,202,149,0)'
				                        }
				                    ], false),
				                    shadowColor: 'rgba(0,202,149, 0.9)',
				                    shadowBlur: 20
				                }
				            },
				            data: [54, 18, 42, 27, 35, 40,38,20,23]
				        },
						{
						    name: '注册总量',
						    type: 'line',
						    smooth: true, //是否平滑
						    showAllSymbol: true,
						    // symbol: 'image://./static/images/guang-circle.png',
						    symbol: 'circle',
						    symbolSize: 5,
						    lineStyle: {
						        normal: {
						            color: "#f59a23",
						            shadowColor: 'rgba(0, 0, 0, .3)',
						            shadowBlur: 0,
						            shadowOffsetY: 5,
						            shadowOffsetX: 5,
						        },
						    },
						    label: {
						        show: true,
						        position: 'top',
						        textStyle: {
						            color: '#f59a23',
						        }
						    },
										
						    itemStyle: {
						        color: "#f59a23",
						        borderColor: "#fff",
						        borderWidth: 3,
						        shadowColor: 'rgba(0, 0, 0, .3)',
						        shadowBlur: 0,
						        shadowOffsetY: 2,
						        shadowOffsetX: 2,
						    },
						    tooltip: {
						        show: false
						    },
						    areaStyle: {
						        normal: {
						            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						                    offset: 0,
						                    color: 'rgba(0,202,149,0.3)'
						                },
						                {
						                    offset: 1,
						                    color: 'rgba(0,202,149,0)'
						                }
						            ], false),
						            shadowColor: 'rgba(0,202,149, 0.9)',
						            shadowBlur: 20
						        }
						    },
						    data: [25, 30, 36, 41, 37, 33,51,27,20]
						},
				    ],
                    
				}
)
  }
</script>

<style lang="less" scoped>
    .countCompare{
        height: 262px;
        width: 350px;
        background: url('@/assets/bigScreen/images/dataScreen-main-rc.png') ;
        background-size: cover;
        .title{
            color: white;
            .bg{
                width: 80px;
                height: 10px;
                background: url('@/assets/bigScreen/images/dataScreen-title.png') no-repeat;
                margin-top: 10px;
            }
        }
         .container{
            width: 350px;
            height: 100%;
            margin-top: -10px;
            
        }
    }

</style>