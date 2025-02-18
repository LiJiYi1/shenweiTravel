<template>
    <div>
         <div class="scroll">
    <el-carousel height="300px" motion-blur>
      <el-carousel-item>
            <div class="first"></div>
      </el-carousel-item>
      <el-carousel-item>
            <div class="second"></div>
      </el-carousel-item>
      <el-carousel-item>
            <div class="third"></div>
      </el-carousel-item>
    </el-carousel>
   <img src="@/assets/global/exchangeMoney/ma.png" alt="" style="position: fixed;top:96px;width:300px;">
  
         </div>
         <el-card >
        <ul class="recommond">
        <li style="display: flex;">
                <div class="pic1"></div>
                <div class="advant-word">
                <div class="advant-title">专业合作有保障</div>
                <div class="advant-explain">接入多家银行、特许机构<br>服务更专业</div>
            </div>
        </li>
         <li style="display: flex;">
                <div class="pic2"></div>
             <div class="advant-word">
                <div class="advant-title">专属外币零钱包</div>
                <div class="advant-explain">无需提前预约<br>提供45种外币兑换</div>
            </div>
        </li>
        <li style="display: flex;">
                <div class="pic3"></div>
              <div class="advant-word">
                <div class="advant-title">机场快速取钞</div>
                <div class="advant-explain">网点覆盖机场、口岸<br>免排队立等可取</div>
            </div>
        </li>
        <li style="display: flex;">
                <div class="pic4"></div>
                <div class="advant-word">
                <div class="advant-title">线上下单更划算</div>
                <div class="advant-explain">天天精彩活动<br>畅享优惠</div>
               </div>
        </li>   
        </ul>
         </el-card>
         <div style="display: flex;">
            <el-card class="huilv">
                <h1>今日汇率</h1>
                <el-carousel
                  height="400px"
                  direction="vertical"
                  motion-blur>
                  <el-carousel-item v-for="(item,index) in data" :key="index">
                    <dl class="list" v-for="(item1,index1) in item" :key="index1" >
                        <dt>
                        <img class="cur-img" :src="item1.img">&nbsp;&nbsp;{{item1.name}}&nbsp;{{ item1.name1 }}
                        </dt>
                        <dd class="buy">买入&nbsp;<span>{{item1.buy}}</span></dd>
                        <dd class="sale">卖出&nbsp;<span>{{item1.out}}</span></dd>
                    </dl>
                  </el-carousel-item>
               </el-carousel>
            </el-card>
              <div class="bottom-r">
               <el-card class="ex-steps">
                <h2>兑换流程</h2>
                <ul class="steps-list">
                    <li class="list">
                        <div class="icon pic1"></div>
                        <p class="step1">第一步 填写订单</p>
                    </li>
                    <li class="arrow-r">
                        <div class="icon arrow-right"></div>
                    </li>
                    <li class="list">
                        <div class="icon pic2"></div>
                        <p class="step2">第二步 网上支付</p>
                    </li>
                    <li class="arrow-r">
                        <div class="icon arrow-right"></div>
                    </li>
                    <li class="list">
                        <div class="icon pic3"></div>
                        <p class="step3">第三步 网点取钞</p>
                    </li>
                </ul>
           </el-card>
           <el-card style="margin-top: 20px;width:636px;height:200px">
            <img src="@/assets/global/exchangeMoney/exchange.png" alt="" >
            </el-card>
              </div>
         </div>
        
  
  
    </div> 
 
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const data=reactive([
[
{name:"美元",name1:"USD",buy:"723.81",out:"763.82",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/usd.png"},
{name:"日元",name1:"JPA",buy:"4.6",out:"5.112",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/jpy.png"},
{name:"韩元",name1:"KRW",buy:"4.6",out:"5.112",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/krw.png"},
{name:"泰铢",name1:"THB",buy:"20.2",out:"23.48",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/thb.png"},
{name:"欧元",name1:"EUR",buy:"729.05",out:"801.8",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/eur.png"},
{name:"港元",name1:"HKD",buy:"92.86",out:"97.74",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/hkd.png"},
{name:"新加坡元",name1:"SGD",buy:"519.83",out:"575.12",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/sgd.png"},
{name:"日元",name1:"JPA",buy:"4.6",out:"5.112",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/jpy.png"},

],[
{name:"美元",name1:"USD",buy:"723.81",out:"763.82",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/usd.png"},
{name:"日元",name1:"JPA",buy:"4.6",out:"5.112",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/jpy.png"},
{name:"韩元",name1:"KRW",buy:"4.6",out:"5.112",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/krw.png"},
{name:"泰铢",name1:"THB",buy:"20.2",out:"23.48",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/thb.png"},
{name:"欧元",name1:"EUR",buy:"729.05",out:"801.8",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/eur.png"},
{name:"港元",name1:"HKD",buy:"92.86",out:"97.74",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/hkd.png"},
{name:"新加坡元",name1:"SGD",buy:"519.83",out:"575.12",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/sgd.png"},
{name:"日元",name1:"JPA",buy:"4.6",out:"5.112",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/jpy.png"},
],[
{name:"美元",name1:"USD",buy:"723.81",out:"763.82",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/usd.png"},
{name:"日元",name1:"JPA",buy:"4.6",out:"5.112",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/jpy.png"},
{name:"韩元",name1:"KRW",buy:"4.6",out:"5.112",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/krw.png"},
{name:"泰铢",name1:"THB",buy:"20.2",out:"23.48",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/thb.png"},
{name:"欧元",name1:"EUR",buy:"729.05",out:"801.8",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/eur.png"},
{name:"港元",name1:"HKD",buy:"92.86",out:"97.74",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/hkd.png"},
{name:"新加坡元",name1:"SGD",buy:"519.83",out:"575.12",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/sgd.png"},
{name:"日元",name1:"JPA",buy:"4.6",out:"5.112",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/jpy.png"},
],[
{name:"美元",name1:"USD",buy:"723.81",out:"763.82",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/usd.png"},
{name:"日元",name1:"JPA",buy:"4.6",out:"5.112",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/jpy.png"},
{name:"韩元",name1:"KRW",buy:"4.6",out:"5.112",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/krw.png"},
{name:"泰铢",name1:"THB",buy:"20.2",out:"23.48",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/thb.png"},
{name:"欧元",name1:"EUR",buy:"729.05",out:"801.8",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/eur.png"},
{name:"港元",name1:"HKD",buy:"92.86",out:"97.74",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/hkd.png"},
{name:"新加坡元",name1:"SGD",buy:"519.83",out:"575.12",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/sgd.png"},
{name:"日元",name1:"JPA",buy:"4.6",out:"5.112",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/jpy.png"},
],[
{name:"美元",name1:"USD",buy:"723.81",out:"763.82",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/usd.png"},
{name:"日元",name1:"JPA",buy:"4.6",out:"5.112",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/jpy.png"},
{name:"韩元",name1:"KRW",buy:"4.6",out:"5.112",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/krw.png"},
{name:"泰铢",name1:"THB",buy:"20.2",out:"23.48",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/thb.png"},
{name:"欧元",name1:"EUR",buy:"729.05",out:"801.8",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/eur.png"},
{name:"港元",name1:"HKD",buy:"92.86",out:"97.74",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/hkd.png"},
{name:"新加坡元",name1:"SGD",buy:"519.83",out:"575.12",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/sgd.png"},
{name:"日元",name1:"JPA",buy:"4.6",out:"5.112",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/jpy.png"},
],[
{name:"美元",name1:"USD",buy:"723.81",out:"763.82",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/usd.png"},
{name:"日元",name1:"JPA",buy:"4.6",out:"5.112",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/jpy.png"},
{name:"韩元",name1:"KRW",buy:"4.6",out:"5.112",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/krw.png"},
{name:"泰铢",name1:"THB",buy:"20.2",out:"23.48",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/thb.png"},
{name:"欧元",name1:"EUR",buy:"729.05",out:"801.8",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/eur.png"},
{name:"港元",name1:"HKD",buy:"92.86",out:"97.74",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/hkd.png"},
{name:"新加坡元",name1:"SGD",buy:"519.83",out:"575.12",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/sgd.png"},
{name:"日元",name1:"JPA",buy:"4.6",out:"5.112",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/jpy.png"},
],[
{name:"美元",name1:"USD",buy:"723.81",out:"763.82",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/usd.png"},
{name:"日元",name1:"JPA",buy:"4.6",out:"5.112",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/jpy.png"},
{name:"韩元",name1:"KRW",buy:"4.6",out:"5.112",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/krw.png"},
{name:"泰铢",name1:"THB",buy:"20.2",out:"23.48",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/thb.png"},
{name:"欧元",name1:"EUR",buy:"729.05",out:"801.8",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/eur.png"},
{name:"港元",name1:"HKD",buy:"92.86",out:"97.74",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/hkd.png"},
{name:"新加坡元",name1:"SGD",buy:"519.83",out:"575.12",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/sgd.png"},
{name:"日元",name1:"JPA",buy:"4.6",out:"5.112",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/jpy.png"},
]])
 
</script>

<style lang="less" scoped>
.scroll{
    .first{
        width: 100%;
        height: 250px;
        background: url('@/assets/global/exchangeMoney/scroll.png') no-repeat;
        background-size: cover;
    }
    .second{
          width: 100%;
        height: 250px;
        background: url('@/assets/global/exchangeMoney/scroll1.png') no-repeat;
        background-size: cover;
    }
    .third{
        width: 100%;
        height: 250px;
        background: url('@/assets/global/exchangeMoney/scroll2.png') no-repeat;
        background-size: cover;
    }
}
.recommond{
    display: flex;
   width: 100%;
   height: 100px;
   .pic1{
    width: 100px;
    height: 100px;
    background: url("@/assets/global/exchangeMoney/sprite.png");
    background-position: 0px -20px;
   }
   .pic2{
    width: 100px;
    height: 100px;
    background: url("@/assets/global/exchangeMoney/sprite.png");
    background-position: -102px -22px;
   }
   .pic3{
    width: 100px;
    height: 100px;
    background: url("@/assets/global/exchangeMoney/sprite.png");
    background-position: -204px -22px;
   }
   .pic4{
    width: 100px;
    height: 100px;
    background: url("@/assets/global/exchangeMoney/sprite.png");
    background-position: -306px -22px;
   }
   .advant-word{
    padding: 25px;
   }
   .advant-title{
    font-size: 20px;
   }
   .advant-explain{
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px;
   }
      
}
.ex-steps{
    width: 600px;
    margin-top: 20px;
    padding: 16px 18px 18px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
    margin-bottom: 10px;
    .steps-list{
         display: flex;
         justify-content: space-between;
         margin-top: 40px;
    }
    .pic1{
          width: 72px;
          height: 80px;
          background-position: 0px -124px;
    }
    .pic2{
          width: 72px;
          height: 80px;
          background-position: -74px -124px;
    }
    .pic3{
          width: 72px;
          height: 80px;
          background-position: -148px -124px;
    }
    .icon{
        background-image: url('@/assets/global/exchangeMoney/sprite.png');
    }
    .arrow-right{
    width: 7px;
    height: 13px;
    margin: 0 auto;
    margin-top: 30px;
    background-position: -226px 0;
    }
    .arrow-r{
        width: 86px;
        height: 72px;
    }

}
.huilv{
    margin-top: 20px;
    width: 600px;
    .list{
    display: flex;
    margin-top: 38px;
    justify-content: space-between;
    dt{
        width: 200px;
    }
    .cur-img{
    width: 26px;
    height: 16px;
    }
    .buy{
    width: 180px;
    text-align: left;
    }
    .sale{
        width: 180px;
    }
}
}
.bottom-r{
display: flex;
flex-direction:column;
margin-left:20px
}


</style>