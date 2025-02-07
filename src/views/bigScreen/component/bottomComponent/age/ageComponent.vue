<template>
    <div>
             <div class="age">
                <div class="title">
                    <p>年龄比例</p>
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
let peopleList = [
   { name: '60岁以下', value: 3320, percent: 0 },
   { name: '65~75岁', value: 1120, percent: 0 },
   { name: '80~89岁', value: 1258, percent: 0 },
   { name: '90岁以上', value: 2540, percent: 0 },
]
let total = peopleList.reduce((pre, next) => {
   return pre + next.value;
}, 0);

let numberWidth = String(total).length * 8 + 8;

peopleList.forEach((item) => {
   item.percent = total == 0 ? 0 : ((item.value / total) * 100).toFixed(2);
});

let color = ['rgba(113, 226, 135, 1)', 'rgba(119, 247, 253, 1)', 'rgba(44, 104, 231, 1)', 'rgba(93, 202, 250, 1)']

let option = {
   color: color,
   tooltip: {
      trigger: 'item',
   },
   legend: {
      show: true,
      orient: 'vertical',
      top: '-2%',
      right: '5%',
      icon: 'rect',
      itemGap: 20,
      itemWidth: 10,
      itemHeight: 10,
      color: '#fff',
      formatter: function (name) {
         let items = peopleList.find((item) => item.name == name);
         return `{name|${name}}\n{number| ${items?.value || ''}} {unit|人}  {percent|${items?.percent + '%' || ''
            }}`;
      },
      itemStyle: {
         borderWidth: 1,
      },
      textStyle: {
         rich: {
            number: {
               width: numberWidth,
               color: '#DDF6FD',
               align: 'left',
               fontSize: 16,
               fontWeight: 'bold',
               padding: [8, 0, 0, 0]
            },
            name: {
               color: 'rgba(255,255,255,0.8)',
               fontSize: 14,
               fontWeight: 400,
               fontFamily: 'Source Han Sans CN',
               padding: [28, 0, 0, 4]
            },
            unit: {
               color: 'rgba(255,255,255,0.8)',
               fontSize: 12,
               fontWeight: 400,
               fontFamily: 'Source Han Sans CN',
               padding: [0, 0, -8, 0]
            },
            percent: {
               color: '#DDF6FD',
               align: 'left',
               fontSize: 16,
               fontWeight: 'bold',
               padding: [6, 0, 0, 0]
            },
         },
      },
   },
   title: [
      {
         text: '{title|本日比例}',
         left: '29%',
         top: '45%',
         textAlign: 'center',
         textStyle: {
            rich: {
               title: {
                  color: '#fff',
                  fontSize: 18,
                  fontWeight: '400',
               },

            }
         },
      },
      {
         left: '26%',
         top: '47%',
         textStyle: {
            rich: {
               num: {
                  fontSize: 32,
                  color: '#9DDBFB',
                  fontFamily: 'DIN Alternate',
                  fontWeight: 'bold',
               },
               unit: {
                  color: '#9DDBFB',
                  fontSize: 14,
                  fontWeight: '400',
                  padding: [0, 0, -8, 8]
               }
            }
         },
      },
   ],

   series: [
      {
         type: 'pie',
         radius: ['50%', '60%'],
         center: ['30%', '50%'],
         padAngle: 5,
         label: {
            show: false,
         },
         itemStyle: {
            shadowColor: 'rgba(255, 255, 255, 0.5)',
            shadowBlur: 20,
            borderWidth: 5,
            borderRadius: 5,

         },
         emphasis: {
            scale: false
         },
         data: peopleList,
      },
      {
         type: 'pie',
         radius: ['40%', '50%'],
         center: ['30%', '50%'],
         padAngle: 5,
         label: {
            show: false,
         },
         itemStyle: {
            shadowColor: 'rgba(255, 255, 255, 0.5)',
            shadowBlur: 20,
            borderWidth: 5,
            opacity: 0.3,
         },
         emphasis: {
            scale: false
         },
         data: peopleList,
      },
      {
         name: "黄线",
         type: "pie",
         startAngle: 85,
         radius: ['35%', '38%'],
         center: ['30%', '50%'],
         hoverAnimation: false,
         
         padAngle: 5,
         tooltip: {
            // show: false,
         },
         itemStyle: {
            borderCap: 'round',
            normal: {
               color: function (data) {
                  let tempColor = data.data == 10 ? "rgba(240, 197, 67, 0)" : "rgba(240, 197, 67, 1)"
                  return tempColor
               },
            },
         },
         zlevel: 4,
         labelLine: {
            show: false,
         },
         data: [100, 100, 100, 100],
      },
   ],
}


let rotate = 0
let deg = 50



  function initEchart(){
     const myChart=echarts.init(container.value)
     run()

function run() {
   option.series[1].radius[1] = `${deg}%`
   option.series[2].startAngle = rotate
   myChart.setOption(option)
   myChart.resize()
   rotate += 1
   if (deg > 80) {
      deg = 50
   }
   deg += 0.1
   requestAnimationFrame(run)
}
     myChart.setOption(option)
  }
</script>

<style lang="less" scoped>
    .age{
        height: 240px;
        width: 350px;
        background: url('@/assets/bigScreen/images/dataScreen-main-lb.png') ;
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