<template>
               <el-radio-group   @input="give"  v-model="val" style="display: flex;justify-content:space-between">
      <el-radio value="1" size="large" border style="width: 280px;">单程</el-radio>
      <el-radio value="2" size="large" border style="width: 280px;direction:rtl">往返</el-radio>
              </el-radio-group>
</template>

<script setup>
import { onMounted, ref } from 'vue';
//存储表单数据的变量
let val=ref('')
const prop=defineProps(['num'])
//通过自定义事件给父组件数据,方便父组件进行操作
let emit=defineEmits(['getVal'])
const give=()=>{
    emit('getVal',val.value)
}
onMounted(()=>{
//页面一加载表单的数据就是父组件拿来的数据
val.value=prop.num

})
</script>

<style lang="less" scoped>

</style>