<template>
    <div >
    <div  ref="containerRef" style="height:100vh;overflow-y: auto;">
       <div class="top" id="神威旅行简介">
             <div style="display:flex" flex="1" >
            <img src="@/assets/home/logo.webp" alt="" style="width: 60px;" >
            <h1 style="font-size: 30px;margin-top:15px;color:burlywood">神威旅行</h1>
             </div>
              
            <div flex="1" style="margin-left: 20%;display:flex;">
                <el-popover
                placement="top-start"
                title="访问客服中心"
                :width="200"
                trigger="hover"
                content="境内：95010&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp或 400-830-6666&nbsp
                    中国香港：+852-3008-3295&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    中国澳门：+86-21 3406-4888&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    中国台湾：+86-21 3406-4888&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    其他国家和地区：+86-21-3406-4888"
                >
                <template #reference>
                <div class="m-2" style="margin-top: 12px;padding-right:22px;line-height:38px;height:38px;margin-left: 120px;border-right:1px solid"><el-icon><PhoneFilled /></el-icon>联系客服</div>
                </template>
                </el-popover>
                <el-button  @click="back" style="margin-top: 12px;height:40px;margin-left: 40px;">
                    <el-icon size="20"><HomeFilled/></el-icon>
                    <p style="line-height:20px;font-size:20px">返回首页</p>
                </el-button>
            </div>
       </div>
       <div class="header">
        <h1>关于神威</h1>
       </div>
       <div class="recommon">
         <h1>神威旅行简介</h1>
        <p>
            神威旅行不是中国知名的旅游品牌，致力于为旅客提供一站式全球旅行服务，包含住宿预订、交通票务预订、旅游度假预订
理服务等，服务范围覆盖旅行前、行中、行后、及目的地服务等旅游全流程。通过APP、网站和24/7客户服务中心组成的交易网
络，实现用户与产品的完美连接，每年为数亿旅客提供旅行服务。<br>
<br>

神威积极承担社会责任，将社会价值与ESG可持续发展结合，推动企业承担更大的社会责任，也助力合作伙伴坚持可持旅行。
<br><br>使命:追求完美旅程，共建美好世界
<br>愿景:成为世界领先、最可信赖的线上旅行品牌系列，致力为旅行者提供性价比高的完美旅程。
        </p>
       </div>
       <div class="ESG" id="ESG可持续发展"></div>
       <div class="community" id="社区友好">
        <h1 id="社区友好">社区友好<a href="#社区友好"></a></h1>
        <p>推出带动乡村共富的神威度假农庄，以及保障全球旅客旅行安全的全球旅行SOS平台，让更多的社会大众受益</p>
        <h2>神威度假庄</h2>
        <p>为积极践行国家乡村振兴战略，神威带着旅游共富的使命出发，探索发展乡村旅游产业、推动乡村振兴的切实路径，29家神威度假
         农庄已在国内13个省(自治区、直辖市)落地。
        </p>
        <img src="@/assets/about/travel.png" alt="" style="width: 100%;">
        <h2>全球旅行SOS平台</h2>
        <p>全面上线24小时在线的“全球旅行SOS平台”，免费提供旅游行程中的紧急援助，保障亿万旅客的旅行安全。已覆盖旅客总数超过
        3.5亿，救援成功率达98%。</p>
        <div style="display: flex;justify-content:space-around;margin-top:80px">
            <div><h4>3.5亿</h4><h3>覆盖旅客总数</h3></div>
            <div><h4>1.4w+</h4><h3>全球求助量</h3></div>
            <div><h4>98%</h4><h3>救援成功率</h3></div>
        </div>
       </div>
       <div class="environment">
            <div>
                 <h1 id="环境友好">环境友好</h1>
           <p>推出“神威低碳酒店标准”，助力酒店行业共同达成《巴黎协定》控混目标，同时，通过低碳酒店、低碳航班、低碳用车、低碳商旅
           等产品已带动超6000万人次选择低碳旅行。</p>
           <img src="@/assets/about/env.png" alt="" style="width: 100%;margin-top:40px">
           <h2>低碳酒店标准</h2>
           <p>推出《神威低碳酒店标准》，带动酒店行业共同减碳，相比此前的行业标准，该标准具备可量化、可检测、可提升等显著特征
商家在获得认证之后，清晰明了的“低碳酒店”标签拉高了用户点击量，订单量也在稳步提升</p>
            </div>
       </div>
       <div class="home" id="家庭友好">
        <h1 >家庭友好</h1>
        <p>通过赋能员工成长和为女性提供更好的生育和职场发展环境。推出10亿元生育补贴，以及“混合办公制度"。</p>
        <img src="@/assets/about/home.png" alt="" style="width: 100%;margin-top:80px">
        <div style="display: flex;">
            <div style="flex: 1;margin-right:20px">
                <h1>生育补贴</h1>
                <p>神威已推出针对全球员工的生育补贴政策--“神二代成长礼
金”，每位新生“神二代”可获得5万元现金补贴。我们计划将
投入10亿元生育补贴，用于激励员工生育。</p>
                </div>
            <div style="flex: 1;">
                <h1>混合办公</h1>
                  <p>神威已全面推行混合办公制度，员工每周1-2天可以在家远程办
公。这是中国首家推出混合办公制的大型企业。</p>
            </div>
        </div>
       </div>
       <img src="@/assets/about/env1.png" alt="" style="width: 100%;margin-top:80px">
       <BottomComponent></BottomComponent>
    </div>
    
  
    
    </div>
    <el-card style="position: fixed;top:100px;right:100px;">
    <el-anchor
          :container="containerRef"
          direction="vertical"
          type="default"
          @click="handleClick"
        >
          <el-anchor-link href="#神威旅行简介" title="神威旅行简介"/>
          <el-anchor-link href="#ESG可持续发展" title="ESG可持续发展"/>
          <el-anchor-link href="#社区友好" title="社区友好" />
          <el-anchor-link href="#环境友好" title="环境友好" />
          <el-anchor-link href="#家庭友好" title="家庭友好" />
    </el-anchor>
    </el-card>
    
   
      
</template>

<script setup lang="ts">
import { HomeFilled } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue'
import BottomComponent from '@/components/bottomComponent.vue';

const containerRef = ref<HTMLElement | null>(null)

const handleClick = (e: MouseEvent) => {
  e.preventDefault()
}

const $router=useRouter()
const back=()=>{
$router.push('/home')
}
  
</script>

<style lang="less" scoped>
   div{
    user-select: none;
    .top{
        width: 80%;
        display: flex;
        justify-content: space-between;
        margin-left: 11%;
       
    }
    .header{
        width: 100%;
        height: 317px;
        background: url('@/assets/about/header_web.png') no-repeat;
        background-size: contain;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        h1{
            font-size: 50px;
        }
    }
    .recommon{
        width: 80%;
        margin:0 auto;
        margin-top:80px;
        text-align: left;
        p{
            margin-top: 40px;
            font-size: 20px;
            line-height: 50px;
            color: rgb(87, 90, 90);
        }
    }
    .ESG{
        width: 100%;
        height: 400px;
        margin-top: 40px;
        background: url('@/assets/about/ESG.png') no-repeat;
        background-size:cover;
    }
    .community{
        width: 80%;
        margin:0 auto;
        margin-top:80px;
        text-align: left;
        p{
            margin-top: 40px;
            font-size: 20px;
            line-height: 30px;
            color: rgb(87, 90, 90);
        }
        h2{
            margin-top: 40px;
        }
        img{
            margin-top: 40px;
        }
        h4{
            color: rgb(0, 136, 255);
            font-size: 60px;
        }
        h3{
            text-align: center;
            color: grey;
        }
    }
    .environment{
        margin-top: 80px;
        padding-top: 20px;
        padding-bottom: 40px;
        width: 100%;
        div{
        width:80%;
        margin:0 auto;
        margin-top:80px;
        text-align: left;
        p{
            margin-top: 40px;
            font-size: 20px;
            line-height: 30px;
            color: rgb(87, 90, 90);
        }
        }
        h2{
            margin-top: 80px;
        }
      
       
    }
    .home{
            width: 80%;
        margin:0 auto;
        margin-top:80px;
        text-align: left;
        p{
            margin-top: 40px;
            font-size: 20px;
            line-height: 50px;
            color: rgb(87, 90, 90);
        }
        h1{
            margin-top: 40px;
        }
    }
  
   }
</style>