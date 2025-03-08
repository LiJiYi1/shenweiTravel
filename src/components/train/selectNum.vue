<template>
  <div style="display: flex;justify-content:space-between">
     <el-select
    :style="{backgroundColor:color,borderRadius:'6px',padding:'10px',}"
      v-model="value"
      placeholder="Select"
      size="large"
      style="width: 180px;"
      @change="change"
    >
      <el-option
        key="1"
        label="1成人"
        value="1成人"
      />
        <el-option
        key="2"
       label="2成人"
        value="2成人"
      />
      <el-option
        key="3"
       label="3成人"
        value="3成人"
      />
      <el-option
        key="4"
       label="4成人"
        value="4成人"
      />
      <el-option
        key="5"
       label="5成人"
        value="5成人"
      />
    </el-select>
     <el-select
    :style="{backgroundColor:color,borderRadius:'6px',padding:'10px',}"
      v-model="value1"
      placeholder="Select"
      size="large"
      style="width: 180px;"
      @change="change"
    >
      <el-option
        key="1"
        label="1青年"
        value="1青年"
      />
        <el-option
        key="2"
       label="2青年"
        value="2青年"
      />
      <el-option
        key="3"
       label="3青年"
        value="3青年"
      />
      <el-option
        key="4"
       label="4青年"
        value="4青年"
      />
      <el-option
        key="5"
       label="5青年"
        value="5青年"
      />
    </el-select>
     <el-select
    :style="{backgroundColor:color,borderRadius:'6px',padding:'10px',}"
      v-model="value2"
      placeholder="Select"
      size="large"
      style="width: 180px;"
      @change="change"
    >
      <el-option
        key="1"
        label="1老人"
        value="1老人"
      />
        <el-option
        key="2"
       label="2老人"
        value="2老人"
      />
      <el-option
        key="3"
       label="3老人"
        value="3老人"
      />
      <el-option
        key="4"
       label="4老人"
        value="4老人"
      />
      <el-option
        key="5"
       label="5老人"
        value="5老人"
      />
    </el-select>
  </div>
   
</template>

<script setup>
import { ref } from 'vue'
import { useColorStore } from '@/store/modules/color';
import { storeToRefs } from 'pinia';
let {color}=storeToRefs(useColorStore())
const $emit=defineEmits(['getNum'])
const value = ref('1成人')
const value1 = ref('0青年')
const value2 = ref('0老人')
const change=()=>{
  $emit('getNum',[value.value,value1.value,value2.value])
}
</script>

<style lang="less" scoped>

</style>