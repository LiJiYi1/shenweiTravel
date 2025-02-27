<template>
    <div style="position: relative;cursor:pointer">
         <el-card class="hot" body-style="padding:0px" min="200">
            <div class="Hot" style="position: relative;" @mouseover="show" @mouseleave="noShow">
                <div style="display: flex;">
                <i class="nav-section-h3-i" data-spm-anchor-id="181.15077045.1398723350.i6.7f1d620dQJ5y9d"></i>
                <p>热门目的地</p>
                <el-icon style="width:200px;margin-top:5px;position:absolute;right:-60px"><ArrowRight /></el-icon>
            
                </div>
                <div style="margin-top: 10px;">
                    <span v-for="(item,index) in data" :key="index">{{item}}</span>
                </div>
            </div>
            <div class="Domestic">
                <div style="display: flex;">
                <i class="nav-section-h3-i" data-spm-anchor-id="181.15077045.1398723350.i6.7f1d620dQJ5y9d"></i>
                <p>旅游主题</p>
                </div>
                <div style="margin-top: 10px;">
                    <span style="width: 80px;" v-for="(item,index) in data1" :key="index">{{item}}</span>
                </div>
            </div>
            <div class="overseas">
                   <div style="display: flex;">
                <i class="nav-section-h3-i" data-spm-anchor-id="181.15077045.1398723350.i6.7f1d620dQJ5y9d"></i>
                <p>热门景点</p>
                   </div>
                   <div style="margin-top: 10px;">
                    <span style="width: 120px;"  v-for="(item,index) in data2" :key="index">{{item}}</span>
                    </div>
            </div>
          </el-card>
          <searchAlert  @mouseover="show" @mouseleave="noShow" v-show="isShow"  style="position: absolute;right:-726px;top:0px;z-index:10"></searchAlert>
    </div>
        
</template>

<script setup lang="ts">
import searchAlert from '@/components/ticket/searchAlert.vue'
import { ref } from 'vue';
//本季热门
let data=ref(["香港",
"北京",
"上海",
"广州",
"深圳",
"杭州",
"桂林",
"厦门",
])
//境内游
let data1=ref(["主题乐园",
"自然风景",
"表演秀票",
"环球影城",
"迪士尼",
"乐高乐园",
])
//出境游
let data2=ref(["故宫博物馆",
"香港迪士尼",
"长隆主题乐园",
"上海迪士尼",
])
//是否显示
let isShow=ref(false)
//显示搜索提示
const show=()=>{
    isShow.value=true
}
const noShow=()=>{
    isShow.value=false
}
</script>

<style lang="less" scoped>
.hot{
    user-select: none;
    width: 290px;
    min-width:290px;
    height: 400px;
    border-radius: 16px;
    p{
        font-size: 20px;
    }
    span{
        font-size: 14px;
        display: inline-block;
        width: 60px;
        line-height: 40px;
    }
    .Hot{
        padding:20px;
        padding-bottom: 0;
    }
    .Hot:hover{
      
        background-color: rgb(138, 136, 136);
        padding-bottom: 0;
    }
    .Domestic{
        padding:20px;
        padding-bottom: 0;
    }
   
    .overseas{
        padding:20px;
    }
}
.nav-section-h3-i {
    display: block;
    line-height: 0;
    margin-top: 2px;
    width: 12px;
    height: 12px;
    margin-right: 6px;
    opacity: 1;
    background: #ffe033;
}
</style>