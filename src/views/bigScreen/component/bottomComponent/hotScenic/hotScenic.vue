<template>
    <div>
             <div class="hotScenic">
                <div class="title">
                    <p>热门景区排行</p>
                    <p class="bg"></p>
                </div>
                <div class="head">
                    <span>排名</span>
                    <span>景区</span>
                    <span>预约数量</span>
                </div>
                <div class="foot">
                    <!-- 排名 -->
                    <div class="rank">
                       <span style="color: red;">NO.1</span>
                       <span style="color: orange;">NO.2</span>
                       <span style="color: yellow;">NO.3</span>
                       <span style="color: green;">NO.4</span>
                       <span style="color: blue;">NO.5</span>
                    </div>
                    <!-- 景区名 -->
                    <div class="name">
                       <span >峨眉山</span>
                       <span>稻城亚丁</span>
                       <span>九寨沟</span>
                       <span>万里长城</span>
                       <span>北京故宫</span>
                    </div>
                    <!-- 预约数量 -->
                     <div class="count">
                       <span >8000</span>
                       <span>6120</span>
                       <span>5480</span>
                       <span>4000</span>
                       <span>3000</span>
                    </div>
                    <!-- 图表容器 -->
                     <div class="container" ref="container"></div>
                </div>
              
            </div>
    </div>
</template>

<script setup>
 import * as echarts from 'echarts'
  import { ref,onMounted } from 'vue';
  const container=ref(null)
  onMounted(()=>{
    initEchart()
  })
let nameList = [
    '峨眉山',
    '稻城亚丁',
    '九寨沟',
    '万里长城',
    '北京故宫',
];
let valueList = [3000, 4000,5480,6120, 8000];
let colorList = ['#008AFF', '#06CA70', 'yellow', '#ffb300', 'red'];
let total = 10000; // 数据总数
//let emue = ['blue', 'green', 'yellow', 'yellow', 'red'];
var category = nameList.map((item, index) => {
    return {
        value: valueList[index],
        itemStyle: {
            color: colorList[index],
        },
    };
});
var totalList = [];
var totalBorderList = [];
nameList.map((item, index) => {
    totalList.push({
        value: total,
        itemStyle: {
            color: colorList[index],
        },
    });
    totalBorderList.push({
        value: total,
        itemStyle: {
            borderColor: colorList[index],
            color: 'transparent',
        },
    });
});
var datas = [];
category.forEach((value) => {
    datas.push(value.value);
});
let option= {
    xAxis: {
        max: total,
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    grid: {
        left: '0%',
        top: '15%', // 设置条形图的边距
        right: '15%',
        bottom: '5%',
    },
    yAxis: [
        {
            type: 'category',
            inverse: false,
            //data: nameList,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
        },
    ],
    series: [
        {
            // 内
            type: 'bar',
            barWidth: 10,
            barGap: '20%',
            silent: true,
            //     normal: {
            //         formatter: (item) => {
            //             console.log(item);
            //             return `{${emue[item['dataIndex']]}|${item['name']}}`;
            //         },
            //         textStyle: {
            //             color: '#008AFF',
            //             fontSize: 14,
            //         },
            //         position: [0, '-25px'],
            //         show: true,
            //         rich: {
            //             green: {
            //                 color: '#06CA70',
            //             },
            //             blue: {
            //                 color: '#008AFF',
            //             },
            //             purple: {
            //                 color: '#867DFF',
            //             },
            //             red: {
            //                 color: '#FB6A66',
            //             },
            //             yellow: {
            //                 color: '#FFC949',
            //             },
            //         },
            //     },
            // },
            data: category,
            z: 1,
            animationEasing: 'elasticOut',
        },
        {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#020b3f',
                },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 1,
            symbol: 'rect',
            symbolClip: false,
            symbolSize: [1,17],
            symbolPosition: 'start',
            symbolOffset: [3, -2],
            symbolBoundingData: total,
            data: [total, total, total, total, total],
            z: 2,
            animationEasing: 'elasticOut',
        },
        {
            type: 'pictorialBar',
            symbolBoundingData: total,
            itemStyle: {
                normal: {
                    color: 'none',
                },
            },
            // label: {
            //     normal: {
            //         formatter: (params) => {
            //             console.log(params);
            //             var text;
            //             text = `{${emue[params['dataIndex']]}|${((params['data'] * 100) / total).toFixed(2)}%}`;
            //             return text;
            //         },
            //         rich: {
            //             green: {
            //                 color: '#06CA70',
            //             },
            //             blue: {
            //                 color: '#008AFF',
            //             },
            //             purple: {
            //                 color: '#867DFF',
            //             },
            //             red: {
            //                 color: '#FB6A66',
            //             },
            //             yellow: {
            //                 color: '#FFC949',
            //             },
            //         },
            //         position: 'right',
            //         offset: [0, -3],
            //         distance: 10, // 向右偏移位置
            //         show: true,
            //     },
            // },
            data: datas,
            z: 0,
        },

        {
            name: '外框',
            type: 'bar',
            barGap: '-130%', // 设置外框粗细
            data: totalBorderList,
            barWidth: 20,
            itemStyle: {
                normal: {
                    // barBorderRadius: [5, 5, 5, 5],
                    borderWidth: 1, // 边框宽度
                },
            },
            z: 0,
        },
        {
            type: 'scatter',
            name: '条形',
            symbol: 'roundRect',
            symbolSize: [4, 12],
            symbolOffset: [3, -3],
            symbolKeepAspect: true,
            data: totalList,
        },
    ],
};


  function initEchart(){
     const myChart=echarts.init(container.value)
    

     myChart.setOption(option)
  }
</script>

<style lang="less" scoped>
    .hotScenic{
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
        .head{
            color: rgb(255, 157, 0);
            margin-top: 20px;
            font-size: 15px;
            width: 320px;
            height: 14px;
            padding: 10px;
            margin-left: 2px;
            display: flex;
            justify-content: space-around;
            background: url('@/assets/bigScreen/images/rankingChart-bg.png') no-repeat;
            background-size: cover;
        }
        .foot{
            display: flex;
        .rank{
            color: #fff;
            display: flex;
            flex-direction: column;
            width: 20px;
            height: 20px;
            span{
                margin-left:30px;
                margin-top: 11px;
                text-align: center;
                width: 50px;
                padding: 10px;
        
                background: url('@/assets/bigScreen/images/man-bg.png') no-repeat;
                background-size: cover;
                flex: 1;
            }
        }
        .name{
             color: #fff;
            display: flex;
            flex-direction: column;
            width: 20px;
            height: 20px;
            span{
                margin-left:100px;
                margin-top: 12px;
                width: 70px;
                padding: 10px;
                background-size: cover;
                flex: 1;
            }
        }
        .count{
             color: #fff;
            display: flex;
            flex-direction: column;
            width: 20px;
            height: 20px;
            span{
                margin-left:190px;
                margin-top: 12px;
                width: 70px;
                padding: 10px;
                background-size: cover;
                flex: 1;
            }
        }
        .container{
            flex: 1;
            width: 100px;
            height: 300px;
            margin-top: -20px;
      
        }
        }
    }

</style>