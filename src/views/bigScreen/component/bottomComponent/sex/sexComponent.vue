<template>
    <div>
             <div class="sex">
                  <div class="title">
                    <p>男女比例</p>
                    <p class="bg"></p>
                  </div>
                  <div class="sexy">
                     <div class="man"><div>男性</div></div>
                     <div class="woman"><div>女性</div></div>
                  </div>
                 
                  <div class="bar">
                    <div class="man"></div>
                   <div class="title1">
                    <span>男性60%</span>
                    <span>女性40%</span>
                  </div>
                  </div>
             </div>
    </div>
</template>

<script setup lang="ts">
  
</script>

<style lang="less" scoped>
    .sex{
        height: 262px;
        width: 350px;
        background: url('@/assets/bigScreen/images/dataScreen-main-lc.png') ;
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
        .sexy{
            width: 100%;
            height: 60%;
            padding: 40px;
            display: flex;
            color: white;
            text-align: center;
            .man{
            width: 100px;
            height: 100px;
            background: url('@/assets/bigScreen/images/man-bg.png') no-repeat;
            background-size: cover;
            margin-right: 70px;
            div{
            width: 100%;
            height: 100%;
            background: url('@/assets/bigScreen/images/man.png') no-repeat;
            background-size: cover;  
            }
            }
            .woman{
            width: 100px;
            height: 100px;
            background: url('@/assets/bigScreen/images/woman-bg.png') no-repeat;
            background-size: cover;
             div{
            width: 100%;
            height: 100%;
            background: url('@/assets/bigScreen/images/woman.png') no-repeat;
            background-size: cover;  
            }
            }
        }
         .bar{
            width: 80%;
            height: 30px;
            border-radius: 20px;
            margin-left: 40px;
            margin-top:-70px;
            background-color: #ff009d;
            .man{
                width: 60%;
                height: 30px;
                border-radius: 20px;
                background-color: #3845ff;
            }
            .title1{
            color: white;
            display: flex;
            justify-content: space-between;
            margin-top:-50px
        }
        }
        
       
    }

</style>