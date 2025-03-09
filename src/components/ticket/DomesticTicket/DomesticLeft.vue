<template>
    <div>
         <h5>热卖排行榜</h5>
         <ul>
            <li @click="searchTicket(item.name)" v-for="(item,index) in data" :key="index" style="display: flex;justify-content:space-between;">
                <span class="Id" :class="{third:item.id===('1')||item.id==='2'||item.id==='3'?true:false}">{{item.id}}</span>                  
                <div style="display: flex;justify-content:space-between">
                    <p class="name">{{item.name}}</p>
                     <p class="money">{{item.money}}</p>
                </div>
               
               
                
            </li>
         </ul>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
//数据
let data=ref([
    {id:'1',name:"灵隐飞来峰",money:"¥45"},
    {id:'2',name:"上海迪士尼度假区",money:"¥458"},
    {id:'3',name:"北京环球度假区",money:"¥379"},
    {id:'4',name:"香港迪士尼乐园",money:"¥515"},
    {id:'5',name:"乌镇",money:"¥150"},
    {id:'6',name:"广州长隆野生动物世界",money:"¥296"},
    {id:'7',name:"普陀山风景区",money:"¥225"},
    {id:'8',name:"黄山风景区",money:"¥65"},

    ])
const searchTicket=(name:string)=>{
window.open(`https://travelsearch.fliggy.com/index.htm?searchType=product&keyword=${name}&category=SCENIC&pagenum=1`)
}
</script>

<style lang="less" scoped>
div{
    width:100%;
    min-width: 200px;
    h5{
        margin-top: 20px;
        font-size: 16px;
    }
    ul{ 
        min-width: 200px;
        margin-top:25px;
        padding-right: 70px;
        border-right: 1px solid;
        li{
            margin-top:10px;
            height: 40px;
            line-height: 40px;   
        }
    }
}

.Id{
    display: inline-block;
    font-size:18px;
    padding: 6px;
    padding-top: 0px;
    margin-right: 10px;
    padding-right: 12px;
    padding-left: 12px;
    border-radius: 6px;
}
.name{
    font-size:18px;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.money{
    font-size:30px;
    color:rgb(224, 97, 33);
   
}
.third{
    background-color: #6666ff;
    color:white
}

</style>