<template>
    <el-card style="margin-top:20px;" body-style="padding:0">
    <ul class="mice_row3">
        <li class="row1">
            <h3 class="tit">在线提交需求</h3>
            <p class="text1">没找到喜欢的案例？</p>
            <p class="text2">不妨尝试免费提交需求单，定制师将为您量身定制</p>
            <p class="text2">立即定制</p>
        </li>
        <li class="row2">
                <h3 class="tit">咨询在线客服</h3>
                <p class="text1">还有疑问不清楚？</p>
                <p class="text2">定制客服将为你答疑解惑</p>
                <p class="text2">在线客服</p>
            </li>
        <li class="row3">
            <h3 class="tit">关注公众号</h3>
            <p class="text1">想了解更多咨询？</p>
            <p class="text2">关注「神威定制旅行」公众号<br>得到更多福利和玩法</p>
            
        </li>
        <div class="pic"><img src="//pic.c-ctrip.com/VacationOnlinePic/mice_v3/code02.jpg" alt="" style="border: 2px solid white;"></div>
    </ul>
    <div class="recommond">
       <p>携程定制旅行为客户提供各种旅行方式，包括独立包团、中高端定制旅游、个性旅游定制服务等，旅游定制专家根据客户需求灵活组合旅行要素，策划个性旅行方案，定制师管家式服务，享受私家定制旅行，并且可以根据您的人数、价位、目的地、出发日期、行程天数等需求为您定制合适的包团旅游方案，高效、方便、快捷地解决客户旅游人数多、旅游产品选择困难的问题。</p> 
    </div>
    </el-card>
</template>

<script lang="ts" setup>


   
</script>

<style lang="less" scoped>
div{
    margin-top: 220px;
    width: 99.9%;
    min-width: 1217px;
    margin: 0 auto;
    .mice_row3{
        margin:0 auto;
        margin-top:30px;
        width: 1000px;
        height: 140px;
        .tit{
            font-size: 28px;
        }
        .text1{
            font-size: 14px;
            line-height: 40px;
        }
        .text2{
            font-size: 14px;
            line-height: 40px;
        }
        .row1{
        float: left;
        width: 400px;
        
        }
        .row2{
        float: left;
        width: 300px;
         
        }
        .row3{
        float: left;
        width: 250px;
      
        }
        .pic{
            padding: 10px;
           
        }
      
    }
}
.recommond{
    margin-top: 40px;
    border: 5px solid gray;
    padding: 25px;
    width: 960px;
    min-width: 1158px;
    p{
    margin:0 auto;
    line-height: 25px;
    color: #999;
    text-align: center;
  }  
}
</style>