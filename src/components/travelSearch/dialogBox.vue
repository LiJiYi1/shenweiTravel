<template>
    <div>
  <img src="@/assets/TravelSearch/top.png" alt="" style="width:1155px;margin-top:-20px">
   <div style="padding: 60px;">
    <div style="margin-bottom: 80px;">
        <h2>特殊原因退订保障</h2>
        <div ref="p6" style="height: 40px;overflow:hidden;">
                         <p style="margin-top: 10px;line-height:20px;overflow:hidden;">
怀孕，骨折，生病住院；拒签，中止，延期出签；您的无法控制，我为您暖心保障。<br><br>
为了分担神威旅游客户因为自身不能预期和控制的特殊原因退订产生的损失，神威率先在业内设立“特殊原因退订保障”。<br>
若您的情况在下方特殊原因保障范围内的，请您最晚于出行日前联系我司申请，并在提出申请后七天内交齐下方要求的必备申请材料（如因特殊情况材料无法按期提供，请您予以告知），若您有购买保险需您第一时间联系保险公司先行申请保险理赔或通过神威协助您进行保险理赔，得到保理赔结果固定订单最终实际损失后才可进行特殊原因保障的申请操作，您的情况与材料经神威审核确认完全符合“特殊原因退订保障政策要求”后，神威将补贴给您：与订单最终实际损失等额的神威“任我游”礼品卡（订单最终实际损失=订单实际损失-保险可理赔金额；已生效的保险费用及已送签并已产生的签证可选项费用不算入订单实际损失）<br><br>
“任我游”礼品卡有效期：三年，此礼品卡无法延期，请您务必关注好您帐户下礼品卡有效期限，以免过期。<br><br>
“任我游”礼品卡使用范围：神威网上部分预付酒店、自由行套餐（机+酒、景+酒）、旅游度假、邮轮、旅游类团购、签证、用车、租车、预付门票等产品订单。（注：部分门票、部分用车产品、团购中非旅游类产品、零售商旅游产品、银行专享类旅游产品及其他特殊产品等暂不支持任我游礼品卡支付））。<br>
        </p>
  <el-table :data="tableData" border style="width: 100%" :span-method="spanMethod">
    <el-table-column prop="condition" label="状况当事人" width="180" />
    <el-table-column prop="incident" label="突发状况" width="180" />
    <el-table-column prop="beneficiary" label="特殊原因退订受益人" width="220" />
    <el-table-column prop="materials" label="材料及说明" />
    <template #append>
      <div style="padding: 20px;line-height:20px">
        <p><strong>特别说明：</strong></p>
        <p>1. 旅游者购买、接受旅游服务前，需重点阅读旅游产品的预订须知全部内容，特别是《预订限制》、《出行指南及法规》，并自行结合自身身体状况做出是否预订，是否适合出行的评估。</p>
        <p>2. 逾期未联系神威提交申请并按要求递交保障所需材料的视为自行放弃，神威有权不予保障。</p>
        <p>3. 有购买保险必须先行就损失进行保险理赔，不先行进行保险理赔的，神威有权不予保障。</p>
        <p>4. 特殊原因退订所需申请材料当事人需保证材料真实有效，若提供材料存在真实性等问题，神威有权不予保障，并有权收回已发放的保障。</p>
        <p>5. 受理条件以受理当日公示的受理条件为准，神威保留在适当时候修订受理条件而不另外通知的权利。</p>
      </div>
    </template>
  </el-table>

        </div>
         
                        <p style="color: #0086f6;font-size:16px;cursor:pointer;user-select:none" v-show="!expand6" @click="isExpand6">展开详情<el-icon><ArrowDownBold /></el-icon></p>
        <p style="color: #0086f6;font-size:16px;cursor:pointer;user-select:none" v-show="expand6" @click="notExpand6">收起详情<el-icon><ArrowUpBold /></el-icon></p>
    </div>
    <div style="margin-bottom: 80px;">
        <h2>重大灾害旅游体验保障金</h2>
                       <p style="margin-top: 10px;line-height:20px;overflow:hidden;height:20px" ref="p5">
业内首创的灾害保障，灾害面前咱不慌，只因神威有担当。<br><br>
2005年神威在业内首家设立重大灾害旅游体验保障金，神威旅游客人如果遇到不可预测的自然灾害（政府官方机构发布橙色或红色预警级别）、政治或社会卫生事件（政府官方机构发布暂勿或禁止前往预警）造成旅游体验受实质损害的，神威将视具体情况启动重大灾害旅游体验保障金，对行程受直接影响而取消所产生的订单最终损失予以承担.（订单最终实际损失=订单实际损失—保险可理赔金额），对游客滞留期间产生的必要新增费用进行相应补贴（旅行滞留住宿补贴金为300元/间/夜，若神威已额外承担或垫付的则不再额外赠予）。
<br>特别说明：<br>
若您有购买保险需您第一时间联系保险公司先行申请保险理赔或通过神威协助您进行保险理赔，得到保理赔结果固定订单最终实际损失后才可享受重大灾害旅游体验保障金保障，有购买保险不先行进行保险理赔的，神威有权不予保障。
        </p>
                <p style="color: #0086f6;font-size:16px;cursor:pointer;user-select:none" v-show="!expand5" @click="isExpand5">展开详情<el-icon><ArrowDownBold /></el-icon></p>
        <p style="color: #0086f6;font-size:16px;cursor:pointer;user-select:none" v-show="expand5" @click="notExpand5">收起详情<el-icon><ArrowUpBold /></el-icon></p>
    </div>
      <div style="margin-bottom: 80px;">
        <h2>应急援助体系</h2>
               <p style="margin-top: 10px;line-height:20px;overflow:hidden;height:20px" ref="p4">您的背后有一个强大的组织，他叫“神威重大灾害预警中心“。<br><br>
神威在业内率先建立旅游预警机制并设立行业首家“重大灾害预警中心”，在自然灾害、病疫灾害、政治变动、突发事件等情况下，及时向即将出行及行程中的神威旅游客人传递信息和发布旅游提示建议或预警，配合”重大灾害旅游体验保障金“，尽力保障神威旅游客人的安全和权益。
        </p>
                <p style="color: #0086f6;font-size:16px;cursor:pointer;user-select:none" v-show="!expand4" @click="isExpand4">展开详情<el-icon><ArrowDownBold /></el-icon></p>
        <p style="color: #0086f6;font-size:16px;cursor:pointer;user-select:none" v-show="expand4" @click="notExpand4">收起详情<el-icon><ArrowUpBold /></el-icon></p>
    </div>
    <div style="margin-bottom: 80px;">
        <h2>应急援助体系</h2>
               <p style="margin-top: 10px;line-height:20px;overflow:hidden;height:20px" ref="p3">无论是旅行证件遗失误机误车，还是就诊协助急翻译服务，7*24小时为您待命！
            <br><br>
            在旅途中，无论遇到行李或证件遗失，还是误机、误车，抑或受伤或生病等紧急突发情况，致电神威或通过神威微领队全球SOS紧急支援服务联系神威，您第一时间均可得到我们神威工作人员的及时响应及积极协助，包括：行李遗失找回后的境内外带回服务、证件遗失后的“指导补办”服务、误机误车15分钟响应处置服务、送医就诊协助及翻译服务等。如遇到意外事故导致旅行难以为继，客人也将得到我们力所能及的必要援助。
        </p>
                <p style="color: #0086f6;font-size:16px;cursor:pointer;user-select:none" v-show="!expand3" @click="isExpand3">展开详情<el-icon><ArrowDownBold /></el-icon></p>
        <p style="color: #0086f6;font-size:16px;cursor:pointer;user-select:none" v-show="expand3" @click="notExpand3">收起详情<el-icon><ArrowUpBold /></el-icon></p>
    </div>
    <div style="margin-bottom: 80px;">
        <h2>一站式旅游保险</h2>
        <p style="margin-top: 10px;line-height:20px;overflow:hidden;height:20px" ref="p2">“量身定制“的保险推荐，丰富贴心的保障选择，优先专属的理赔通道，方便快捷的理赔服务。
            <br><br>
            神威根据客人的出行特征和目的地属性，携手知名救援公司和保险公司，为境内和出境旅行客人量身提供全面、优质的旅行保障，突破了传统旅行保险保障范围小、保障额度低的瓶颈。神威旅行保障计划包含基本的人身、医疗保障，还提供航班延误、旅行变更、行李丢失、高风险运动、境外医疗费用垫付等保障项目，同时还从救援时效、保障内容、游客受益等多方面、多层次提高保障水平。神威旅行保障计划的客人可通过保险公司的电话专线和网站进行保单实时验真；还可使用“在线自助理赔”享受方便快捷的理赔服务；并专享绿色理赔通道等服务，神威用户可优先享受理赔。
        </p>
                <p style="color: #0086f6;font-size:16px;cursor:pointer;user-select:none" v-show="!expand2" @click="isExpand2">展开详情<el-icon><ArrowDownBold /></el-icon></p>
        <p style="color: #0086f6;font-size:16px;cursor:pointer;user-select:none" v-show="expand2" @click="notExpand2">收起详情<el-icon><ArrowUpBold /></el-icon></p>
    </div>
    <div style="margin-bottom: 80px;">
        <h2>服务保障</h2>
        <p style="margin-top: 10px;color:black">7*24小时专业客服：为您提供便捷的自助和人工服务。</p>
    </div>
    <div style="margin-bottom: 80px;">
        <h2>价格保障</h2>
        <p style="margin-top: 10px;color:black">承诺不加价：订单确认后，神威/商家不得因自身原因要求加价。</p>
    </div>
    <div style="margin-bottom: 80px;">
        <h2>出行保障</h2>
        <p style="margin-top: 10px;color:black">确认后推翻：订单确认后，因神威/商家原因导致订单取消，按产品披露的退改规则赔付，如未披露按订单金额20%赔付。</p>

    </div>
    <div style="margin-bottom: 80px;">
        <h2>航变无忧</h2>
        <p style="line-height:20px;margin-top: 10px;height:20px;overflow:hidden" ref="p1">当自由行订单发生航班变动或取消，且航空公司或神威为您做出的补救出行措施，仍无法让您在原定出行时间后48小时内继续前往目的地，您自由行产品订单内最终未入住的酒店取消最终损失由神威为您承担。<br><br>
特别说明：<br>
1. 此保障所指的自由行产品是在神威旅游自由行频道内预订的自由行产品。<br>
2. 航空公司或神威为您做出的补救出行措施（包括但不限于：更改其他时间航班、直飞改转机、延期出行等）请您理解并配合。若此补救出行措施可以让您48小时内继续出行的但您因自身原因放弃出行的，所产生的未入住酒店取消最终损失神威不予承担。<br>
3. 符合保障的受直接影响导致未入住的酒店最终损失计算方式为：未入住酒店实际损失-订单内保险可理赔金额（若有）。
        </p>
        <p style="color: #0086f6;font-size:16px;cursor:pointer;user-select:none" v-show="!expand" @click="isExpand1">展开详情<el-icon><ArrowDownBold /></el-icon></p>
        <p style="color: #0086f6;font-size:16px;cursor:pointer;user-select:none" v-show="expand" @click="notExpand1">收起详情<el-icon><ArrowUpBold /></el-icon></p>
    </div>
    <div style="margin-bottom: 80px;">
        <h2>15分钟快速响应</h2>
        <p style="margin-top: 10px;color:black">一旦发生到店无房，到场无票，到场无车，除不可抗力外，神威均会在15分钟内有效响应并尽力解决。</p>
    </div>
    


   </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const expand=ref(false)
const expand2=ref(false)
const expand3=ref(false)
const expand4=ref(false)
const expand5=ref(false)
const expand6=ref(false)
const p1=ref()
const p2=ref()
const p3=ref()
const p4=ref()
const p5=ref()
const p6=ref()
const isExpand1=()=>{
expand.value=!expand.value
p1.value.style.height='160px'
}
const notExpand1=()=>{
expand.value=!expand.value
p1.value.style.height='20px'    
}
const isExpand2=()=>{
expand2.value=!expand2.value
p2.value.style.height='120px'
}
const notExpand2=()=>{
expand2.value=!expand2.value
p2.value.style.height='20px'    
}
const isExpand3=()=>{
expand3.value=!expand3.value
p3.value.style.height='100px'
}
const notExpand3=()=>{
expand3.value=!expand3.value
p3.value.style.height='20px'    
}
const isExpand4=()=>{
expand4.value=!expand4.value
p4.value.style.height='80px'
}
const notExpand4=()=>{
expand4.value=!expand4.value
p4.value.style.height='20px'    
}
const isExpand5=()=>{
expand5.value=!expand5.value
p5.value.style.height='180px'
}
const notExpand5=()=>{
expand5.value=!expand5.value
p5.value.style.height='20px'    
}
const isExpand6=()=>{
expand6.value=!expand6.value
p6.value.style.height='1190px'
}
const notExpand6=()=>{
expand6.value=!expand6.value
p6.value.style.height='40px'    
}

const tableData = [
  {
    condition: '出行人本人及其子女、配偶、父母（含岳父母、公婆）',
    incident: '身故',
    beneficiary: '订单内本人及同行子女、配偶、父母（含岳父母、公婆）',
    materials: '死亡证明、户口本等关系证明材料。'
  },
  {
    condition: '',
    incident: '住院',
    beneficiary: '',
    materials: '出具三级甲等医院病历/诊断书，包含“不宜出行”字样的病假单、住院证明（住院期间须与出行期间重置）和收费证明。'
  },
  {
    condition: '',
    incident: '骨折',
    beneficiary: '',
    materials: '特别说明：1.仅保障因突发急性病的住院。（【突发急性病】指在本次产品预订后出行日期前突然发生的、在突发前未曾接受治疗或诊断的（首次罹患的突发性疾病或出现的）、必须立即接受治疗方能避免身体或生命伤害的疾病，不包括既往疾病、慢性病、精神病、精神分裂、艾滋病、性传播疾病、遗传性疾病、先天性疾病或缺陷、先天性畸形、牙齿治疗、预防性手术、非必须紧急治疗的手术或器官移植、因脊椎间盘突出症或错位的治疗、脑梗、心梗等。）'
  },
  {
    condition: '出行人本人',
    incident: '怀孕',
    beneficiary: '本人及同行子女、配偶',
    materials: '2.若病历/诊断书/病假单上证明病情/怀孕日期在产品预订日期之前则不做保障。3.当地若无二级甲等医院的以当地最高级别医院诊断为准。'
  },
  {
    condition: '出行人本人',
    incident: '拒签',
    beneficiary: '拒签/中止本人',
    materials: '拒签需出具使领馆拒签信（出具日期在出行日期前），中止以使领馆通知最终结果为界定标准（通知日期在出行日期前）。以下情况不在保障之列：1.旅游度假单签证产品。（若在预订旅游度假单签证产品的同时在旅游频道内预订同签证目的地的团队或自由行行程产品的，则可以整体享受保障）2.签证材料整理服务等需游客自行送签产品（此类产品神威未收取领馆签证费和领馆签证中心服务费）。3.您不能按照领馆要求或追加要求的材料清单提供充分真实有效的材料，或您在该国家/地区已经存在不良记录（例如境外滞留、当地违法、入境港澳护照有Delete Travel章等）。4.您未通过神威签证中心延期出签风险评估执意送签导致延期出签。5.您被拒签/中止日期在旅游产品预订日期之前。6.因领馆系统等原因导致的签证延迟出签。'
  },

  {
    condition: '出行人本人',
    incident: '中止',
    beneficiary: '本人',
    materials: '中止以使领馆通知最终结果为界定标准（通知日期在出行日期前）。'
  },
  {
    condition: '出行人本人',
    incident: '延期出签',
    beneficiary: '本人',
    materials: '因领馆系统等原因导致的签证延迟出签。'
  }
];

// 单元格合并方法
const spanMethod = ({ row, column, rowIndex, columnIndex }) => {
  if (columnIndex === 0) { // 合并第一列
    if (rowIndex === 1 || rowIndex === 2) {
      return { rowspan: 0, colspan: 0 }; // 隐藏单元格
    }
    if (rowIndex === 0) {
      return { rowspan: 3, colspan: 1 }; // 合并前 3 行
    }
  }
  if (columnIndex === 1) { // 合并第二列
    if (rowIndex === 3 || rowIndex === 4 || rowIndex === 5 || rowIndex === 6 || rowIndex === 7 || rowIndex === 8) {
      return { rowspan: 1, colspan: 1 }; // 不合并
    }
  }
  if (columnIndex === 2) { // 合并第三列
    if (rowIndex === 1 || rowIndex === 2) {
      return { rowspan: 0, colspan: 0 }; // 隐藏单元格
    }
    if (rowIndex === 0) {
      return { rowspan: 3, colspan: 1 }; // 合并前 3 行
    }
  }
};

</script>

<style lang="less" scoped>

</style>