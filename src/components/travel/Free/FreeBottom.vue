<template>
    <el-card style="margin-top: 40px;width:99%;min-width:1217px">
        <div class="advantage">
            <dl style="width:292px;display:flex">
                <dt><i class="adv_icon"></i></dt>
                <dd><h5>自由配</h5>机票酒店自由搭配</dd>
            </dl>
            <dl style="width:292px;display:flex">
                <dt><i class="adv_icon1"></i></dt>
                <dd><h5>资源全</h5>全球10万条路线任意选</dd>
            </dl>
            <dl style="width:292px;display:flex">
                <dt><i class="adv_icon2"></i></dt>
                <dd><h5>预订快</h5>机票酒店一键预订</dd>
            </dl>
            </div>
    </el-card>
        
</template>

<script lang="ts" setup>
  
</script>

<style lang="less" scoped>

.advantage{
    display: flex;
    justify-content: space-between;
    dt .adv_icon{
        display: inline-block;
        width: 50px;
        height: 50px;
        background: url('@/assets/travel/Free/spirite.png');
        background-position: 0 -706px;
    }
    dt .adv_icon1{
        display: inline-block;
        width: 50px;
        height: 50px;
        background: url('@/assets/travel/Free/spirite.png');
        background-position: 0 -766px;
    }
    dt .adv_icon2{
        display: inline-block;
        width: 50px;
        height: 50px;
        background: url('@/assets/travel/Free/spirite.png');
        background-position: -60px -706px;
    }
     dl dd {
    font: 14px / 22px Microsoft Yahei;
    color: #b0bfcc;
      }
      h5{
        font-size: 20px;
      }
}
</style>