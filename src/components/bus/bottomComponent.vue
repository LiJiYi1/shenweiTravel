<template>
    <div>
    <el-date-picker
        v-model="date1"
        type="date"
        placeholder="选择日期"
        size="large"
        style="width: 220px;height:55px;font-size:25px"
        :clearable="false"
        :editable="false"
      />
    <el-date-picker
        v-model="date2"
        type="date"
        placeholder="返程日期"
        size="large"
        style="width: 220px;height:55px;font-size:25px"
        :clearable="false"
        :editable="false"
      />
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import moment from 'moment';
//出发日期
let date1=ref(moment().format("YYYY.MM.DD"))
//返程日期
let date2=ref('')
onMounted(()=>{
    date1.value=moment().format("YYYY.MM.DD")
})
   
</script>

<style lang="less" scoped>
div{
    display: flex;
    justify-content: space-between;
}
</style>