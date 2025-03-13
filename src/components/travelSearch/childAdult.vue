<template>
    <div>
         <h3>费用包含</h3>
    <el-radio-group v-model="isChild" size="large">
      <el-radio-button label="成人&nbsp; " value="adult" style="margin-right: 60px;" />
      <el-radio-button label="儿童/婴儿" value="child" />
    </el-radio-group>
  <table class="custom-table" v-show="isChild==='adult'">
    <tbody>
    <tr>
      <td colspan="2">成人【18周岁及以上】</td>
    </tr>
    <tr>
      <td>交通</td>
      <td>机票：往返机票（已含机建、燃油税）</td>
    </tr>
    <tr>
      <td>住宿</td>
      <td>自选酒店住宿费用</td>
    </tr>
    <tr>
      <td>餐食</td>
      <td>自选酒店段早餐信息请参考您入住的房型和酒店政策</td>
    </tr>
    <tr>
      <td>门票及地面项目</td>
      <td>成人不含</td>
    </tr>
    </tbody>
  </table>
  <div  v-show="isChild==='child'">
    <el-icon style="color: orange;"><WarningFilled /></el-icon>
为成人/儿童差异项目，请特别留意
  <table class="custom-table">
    <tbody>
    <tr>
      <td colspan="2">儿童/婴儿【14天-18周岁(不含)】</td>
    </tr>
    <tr>
      <td>交通</td>
      <td>机票：往返机票（已含机建、燃油税）</td>
    </tr>
    <tr>
      <td><el-icon style="color: orange;"><WarningFilled /></el-icon>住宿</td>
      <td>自选酒店段婴儿占床信息请参考您入住的房型和酒店政策
自选酒店段儿童占床信息请参考您入住的房型和酒店政策</td>
    </tr>
    <tr>
      <td><el-icon style="color: orange;"><WarningFilled /></el-icon>餐食</td>
      <td>自选酒店段早餐信息请参考您入住的房型和酒店政策</td>
    </tr>
    <tr>
      <td><el-icon style="color: orange;"><WarningFilled /></el-icon>门票及地面项目</td>
      <td>因景区/场馆标准不一样，婴儿价不含景区/场馆门票费用，如产生门票费用，游客可自行到景区/场馆购买门票或由服务人员代为购买</td>
    </tr>
    </tbody>
  </table>
  </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isChild=ref('adult')


</script>

<style lang="less" scoped>
h3{
    margin-bottom: 20px;
    font-size: 16px;
}
.custom-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.custom-table td {
  border: 1px solid #ebeef5;
  padding: 12px;
  text-align: left;
}

.custom-table tr:first-child td {
  font-weight: bold;

}
</style>