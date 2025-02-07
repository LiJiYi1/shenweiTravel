<template>
    <div>
        <img src="@/assets/home/logo.webp" alt="">
        <h3>神威物流管理平台</h3>
    </div>
</template>

<script setup lang="ts">
 
</script>

<style lang="less" scoped>
div{
cursor: pointer;
user-select: none;
width:@left_bar_width;
height:@left_logo_height;

display: flex;
justify-content: space-between;
align-items: start;
  img{   
        width: 40px;
        height:40px;
        margin-left: 15px;
    }
  h3{
    margin-top: 10px;
    margin-right: 20px;
    margin-left:20px;

  }
}
  
</style>