<template>
    <div>
      <CustomTop></CustomTop>
      <CustomBottom></CustomBottom>
      <bottomRecommon></bottomRecommon>
      <BottomComponent></BottomComponent>
    </div>
</template>

<script setup lang="ts">
import CustomBottom from '@/components/customizedTravel/customBottom.vue';
import CustomTop from '@/components/customizedTravel/customTop.vue';
import bottomRecommon from '@/components/customizedTravel/bottomRecommon.vue';
import BottomComponent from '@/components/bottomComponent.vue';
</script>

<style lang="less" scoped>

</style>