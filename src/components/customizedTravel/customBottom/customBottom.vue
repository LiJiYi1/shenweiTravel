<template>
    <div class="container" style="padding-bottom:35px;display: flex;justify-content:center;width:99.9%;min-width:1217px;background-color:#acacac;">
      <div>
         <TopAlert></TopAlert>
         <BottomInput></BottomInput>
      </div>
    </div>
   
</template>

<script lang="ts" setup>
import BottomInput from './bottomInput.vue';
import TopAlert from './topAlert.vue';

   
</script>

<style lang="less" scoped>
div{
    width: 87%;
    min-width: 960px;
}
</style>