<template>
    <div>
             <div class="tourist">
                <div class="title">
                    <p>热门景区排行</p>
                    <p class="bg"></p>
                </div>
                <div class="total">
                   可预约总量<span>99999</span>人
                </div>
                <div class="count">
                     <span v-for="(item,index) in count" :key="index">{{item}}</span>
                </div>
            </div>
    </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const count=ref('216908人')
</script>

<style lang="less" scoped>
    .tourist{
        height: 350px;
        width: 350px;
        background: url('@/assets/bigScreen/images/dataScreen-main-lt.png') ;
        background-size: cover;
        margin-top: 20px;
        .title{
            color: white;
            .bg{
                width: 80px;
                height: 10px;
                background: url('@/assets/bigScreen/images/dataScreen-title.png') no-repeat;
                margin-top: 10px;
            }
        }
        .total{
            color: white;
            float: right;
            padding-right: 10px;
            font-size:15px;
            span{
                color: coral;
            }
        }
        .count{
            margin-top: 40px;
            margin-left: 20px;
            span{
            color: aqua;
            font-size:38px;
            padding: 10px;
            background: url('@/assets/bigScreen/images/total.png');
            }
        }
    }

</style>