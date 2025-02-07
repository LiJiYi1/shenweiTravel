<template>
    <div>
             <div class="countCompare">
                  <div class="title">
                    <p>年度客流量对比</p>
                    <p class="bg"></p>
                </div>
             </div>
    </div>
</template>

<script setup lang="ts">
  
</script>

<style lang="less" scoped>
    .countCompare{
        height: 262px;
        width: 350px;
        background: url('@/assets/bigScreen/images/dataScreen-main-rc.png') ;
        background-size: cover;
        .title{
            color: white;
            .bg{
                width: 80px;
                height: 10px;
                background: url('@/assets/bigScreen/images/dataScreen-title.png') no-repeat;
                margin-top: 10px;
            }
        }
    }

</style>