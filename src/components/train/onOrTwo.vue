<template>
               <el-radio-group @focus="give"   @change="bus.emit('oneOrTwo',{oneOrTwo:val})"  v-model="val" style="display: flex;justify-content:space-between">
      <el-radio  value="1" size="large" border style="width: 280px;margin-left:30px">单程</el-radio>
      <el-radio value="2" size="large" border style="width: 280px;direction:rtl;margin-right:30px">往返</el-radio>
              </el-radio-group>
</template>

<script setup>
import { onMounted, ref} from 'vue';
import bus from '@/bus/bus'
const prop=defineProps(['num'])
//存储表单数据的变量
let val=ref(prop.num)

//通过自定义事件给父组件数据,方便父组件进行操作
let emit=defineEmits(['getVal'])
const give=()=>{
    emit('getVal',val.value)
    bus.emit('oneOrTwo',{oneOrTwo:val})
}
onMounted(()=>{
//页面一加载表单的数据就是父组件拿来的数据
//val.value=prop.num
//把数据传到事件总线上
bus.emit('oneOrTwo',{oneOrTwo:val})
})
</script>

<style lang="less" scoped>

</style>