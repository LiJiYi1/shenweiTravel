<template>
    <div>
             <div class="reservation">
                <div class="title">
                    <p>预约渠道数据统计</p>
                    <p class="bg"></p>
                </div>
            </div>
    </div>
</template>

<script setup lang="ts">
  
</script>

<style lang="less" scoped>
    .reservation{
        height: 240px;
        width: 350px;
        background: url('@/assets/bigScreen/images/dataScreen-main-rb.png') ;
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