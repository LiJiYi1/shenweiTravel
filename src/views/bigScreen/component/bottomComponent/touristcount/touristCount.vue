<template>
    <div>
             <div class="count">
                  <div class="title">
                    <p>未来三十天客流量趋势图</p>
                    <p class="bg"></p>
                </div>
             </div>
    </div>
</template>

<script setup lang="ts">
  
</script>

<style lang="less" scoped>
    .count{
      
        height: 250px;
        width: 1070px;
        background: url('@/assets/bigScreen/images/dataScreen-main-cb.png') ;
        background-size: cover;
        .title{
            padding-top: 10px;
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