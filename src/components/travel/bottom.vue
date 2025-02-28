<template>
    <div style="display: flex;justify-content:space-between;min-width:1217px">
<el-card class="card">
    <div>
        <div class="title">
            <p></p><span>6重旅游保障</span>
        </div>
        <ul class="list">
            <li>团队游体验保障</li>
            <li>特殊原因退订保障</li>
            <li>灾害旅游体验保障金</li>
            <li>旅游预警机制</li>
            <li>应急援助体系</li>
            <li>一站式旅游保险</li>
        </ul>
    </div>
</el-card>
<el-card class="card">
    <div>
        <div class="title1">
            <p></p><span>商家入驻</span>
        </div>
        <ul class="list1">
            <li>海量资源</li>
            <li>精准营销</li>
            <li>金牌服务</li>
            <li>增加曝光度</li>
            <li>提升销售额</li>
            <li>技术雄厚</li>
        </ul>
    </div>
</el-card>
    </div>
</template>

<script lang="ts" setup>
  
</script>

<style lang="less" scoped>
.card{
    margin-top: 80px;
    width: 48%;
    height: 150px;
    min-width: 500px;
}
.title{
    height: 30px;
       text-align: center;
  span{
    font-size: 22px;
   width: 100%; 
     
  } 

   p{
   vertical-align: -2px;
    display: inline-block;
    margin-right: 10px;
    width: 22px;
    height: 22px;
    background: url("@/assets/travel/bottom/image1.png") no-repeat;
    background-size:contain;
   }
}
.list{
 margin: 0 auto;
    width: 500px;
    li{
        float: left;
        width: 150px;
        font-size: 14px;
        margin-top: 20px;
    
    }
}
.title1{
    height: 30px;
       text-align: center;
  span{
    font-size: 22px;
   width: 100%; 
     
  } 

   p{
    display: inline-block;
    margin-right: 10px;
    width: 22px;
    height: 20px;
    background: url("@/assets/travel/bottom/image2.png") no-repeat;
    vertical-align: -3px;
    background-size: contain;
   }
}
.list1{
 margin: 0 auto;
    width: 500px;
    li{
        float: left;
        width: 150px;
        font-size: 14px;
        margin-top: 20px;
    
    }
}
</style>