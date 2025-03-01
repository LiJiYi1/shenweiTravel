<template>
    <div style="  display: flex;justify-content: center;width:99%;min-width:1217px">
        <div>
         <TopAlert></TopAlert>
         <BottomInput></BottomInput>
     </div>
    </div>
   
</template>

<script lang="ts" setup>
import BottomInput from './customBottom/bottomInput.vue';
import TopAlert from './customBottom/topAlert.vue';

   
</script>

<style lang="less" scoped>
div{
    width: 88%;
    min-width: 960px;
    
}
</style>