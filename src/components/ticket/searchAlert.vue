<template>
    <div style="display: flex;cursor:pointer">
         <el-card class="search">
       <div v-for="(item,index) in data" :key="index" style="width: 280px;padding:20px;border-bottom:0.5px solid gray">
        <h3>{{item.title}}</h3>
        <ul style="margin-top:15px">
            <li v-for="(item1,index) in item.cities" :key="index" @click="searchPos(item1)"><p>{{item1}}</p></li>
        </ul>
       </div>
    </el-card>
        <el-card class="search1">
       <div v-for="(item,index) in data1" :key="index" style="width: 280px;padding:20px;border-bottom:0.5px solid gray">
        <h3>{{item.title}}</h3>
        <ul style="margin-top:15px">
            <li v-for="(item1,index) in item.cities" :key="index" @click="searchPos(item1)"><p>{{item1}}</p></li>
        </ul>
       </div>
    </el-card>
    </div>
   
</template>

<script setup lang="ts">
import { ref } from 'vue';
  //数据
  let data=ref([
    {title:'A B C D E',cities:['阿坝','澳门','鞍山','北海','本溪','保定','白山','常州','成都','池州','重庆','承德','长春','长沙','郴州','东莞','大连','大理','大庆']},
    {title:'K L N M O',cities:['开封','昆明','丽水','连云港','宁德','龙岩','乐山','临沂','廊坊','洛阳','丽江','茂名','绵阳','宁波','南京','南通','南宁','南平','南昌']},
   {title:'U V W X Y Z',cities:['温州','无锡','武汉','芜湖','徐州','厦门','咸宁','新乡','西双版纳','湘西','扬州','宜昌','烟台','运城','阳泉','宜春','珠海','中山','舟山','镇江','漳州','郑州','张家界']},

  ])
  let data1=ref([
   {title:'F G H I J',cities:['佛山','福州','抚顺','广州','桂林','甘孜','河源','杭州','湖州','淮安','海口','黄山','合肥','邯郸','哈尔滨','江门','嘉兴','金华','济南','锦州','晋城','晋中','焦作','九江','景德镇']},
   {title:'P Q R S T',cities:['平顶山','清远','衢州','千岛湖','青岛','秦皇岛','深圳','韶关','绍兴','苏州','三亚','三明','沈阳','石家庄','上饶','台州','泰州','泰安','天津']},
   {title:'海外热门目的地',cities:['东京','大阪','新加坡','洛杉矶','拉斯维加斯','纽约','曼谷','芭提雅','首尔','济州岛','法国','马来西亚','英国','澳大利亚']}
   
 

  ])
  const searchPos=(city:string)=>{
    window.open(`https://travelsearch.fliggy.com/index.htm?spm=181.61408.a1z7d.33.11dc5e9er4HyiA&searchType=product&keyword=${city}&category=SCENIC`)
  }
</script>

<style lang="less" scoped>
.search{
border-radius:0px;

   
}
.search1{
  border-radius:0px
}
ul li{
  display: inline-block;
 
  height: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
  p{  
  width: 36px;
 
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;}
}
ul :last-child{
  border-right: none;
}
</style>