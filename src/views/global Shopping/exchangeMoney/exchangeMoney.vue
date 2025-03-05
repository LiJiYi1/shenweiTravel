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
   <img src="@/assets/global/exchangeMoney/ma.png" alt="" style="position: absolute;top:22px;width:280px;">
  
         </div>
         <el-card style="min-width: 1217px;">
        <ul class="recommond" style="min-width: 1210px;">
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
           <el-card style="margin-top: 20px;width:100%;height:200px">
            <img src="@/assets/global/exchangeMoney/exchange.png" style="width: 550px;" alt="" >
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
],
[
{name:"新台币",name1:"TWD",buy:"21.22",out:"24.18",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/twd.png"},
{name:"澳门元",name1:"MOP",buy:"86.57",out:"92.31",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/mop.png"},
{name:"澳大利亚元",name1:"AUD",buy:"437.84",out:"488.37",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/aud.png"},
{name:"马来西亚林吉特",name1:"MYR",buy:"156.14",out:"179.15",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/myr.png"},
{name:"英镑",name1:"GBP",buy:"859.67",out:"961.92",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/gbp.png"},
{name:"加元",name1:"CAD",buy:"485.08",out:"543.73",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/cad.png"},
{name:"菲律宾比索",name1:"PHP",buy:"11.67",out:"12.98",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/php.png"},
],
[
{name:"瑞士法郎",name1:"CHF",buy:"787.2",out:"856.9",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/chf.png"},
{name:"丹麦克朗",name1:"DKK",buy:"99.3",out:"109.7",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/dkk.png"},
{name:"瑞典克朗",name1:"SEK",buy:"67.95",out:"76.62",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/sek.png"},
{name:"挪威克朗",name1:"NOK",buy:"63.88",out:"72.37",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/nok.png"},
{name:"阿联酋迪拉姆",name1:"AED",buy:"185.52",out:"223.14",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/aed.png"},
{name:"巴西雷亚尔",name1:"BRL",buy:"113.5",out:"146.88",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/brl.png"},
{name:"俄罗斯卢布",name1:"RUB",buy:"7.24",out:"8.88",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/rub.png"},
],
[
{name:"卡塔尔里亚尔",name1:"QAR",buy:"162.15",out:"210.04",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/qar.png"},
{name:"南非兰特",name1:"ZAR",buy:"33.69",out:"43.72",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/zar.png"},
{name:"斯里兰卡卢比",name1:"LKR",buy:"2",out:"2.99",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/lkr.png"},
{name:"新西兰元",name1:"NZD",buy:"399.68",out:"439.73",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/nzd.png"},
{name:"印度卢比",name1:"INR",buy:"6.1283",out:"9.3307",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/inr.png"},
{name:"印尼盾",name1:"IDR",buy:"0.042",out:"0.051",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/idr.png"},
{name:"越南盾",name1:"VND",buy:"0.0263",out:"0.0312",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/vnd.png"},
],
[
{name:"老挝基普",name1:"LAK",buy:"0.0303",out:"0.0426",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/lak.png"},
{name:"墨西哥比索",name1:"MXN",buy:"31.22",out:"40.43",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/mxn.png"},
{name:"土耳其里拉",name1:"TRY",buy:"17.64",out:"24.82",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/try.png"},
{name:"秘鲁索尔",name1:"PEN",buy:"180.74",out:"234.11",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/pen.png"},
{name:"埃及镑",name1:"EGP",buy:"5",out:"17.25",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/egp.png"},
{name:"巴基斯坦卢比",name1:"PKR",buy:"1.8531",out:"3.2259",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/pkr.png"},
{name:"捷克克朗",name1:"CZK",buy:"27.84",out:"36.06",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/czk.png"},
],
[
{name:"波兰兹罗提",name1:"PLN",buy:"165.61",out:"214.52",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/pln.png"},
{name:"匈牙利福林",name1:"HUF",buy:"1.6737",out:"2.168",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/huf.png"},
{name:"沙特里亚尔",name1:"SAR",buy:"184.59",out:"216.48",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/sar.png"},
{name:"尼泊尔卢比",name1:"NPR",buy:"1.7631",out:"6.0776",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/npr.png"},
{name:"缅甸缅元",name1:"MMK",buy:"0.2346",out:"0.2869",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/mmk.png"},
{name:"哈萨克斯坦金戈",name1:"KZT",buy:"1.4",out:"1.6735",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/kzt.png"},
{name:"阿曼里亚尔",name1:"OMR",buy:"1703.52",out:"2206.55",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/omr.png"},
],
[
{name:"柬埔寨瑞尔",name1:"KHR",buy:"0",out:"0.33",img:"https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/khr.png"},
{name:"以色列谢克尔",name1:"ILS",buy:"182.24",out:"232.86",img:"	https://webresource.c-ctrip.com/ares/FinancialServices/ForexOnline/*/default/images/flags/ils.png"},
]])
 
</script>

<style lang="less" scoped>
.scroll{
    min-width: 1217px;
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
    min-width: 1210px;
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
    min-width: 560px;
    width: 70%;
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
    min-width: 600px;
    width: 60%;
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