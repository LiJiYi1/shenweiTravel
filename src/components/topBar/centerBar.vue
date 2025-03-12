<template>
    <div class="container" :style="{border:'1px solid ',borderColor:color}">
        <div>
    <el-autocomplete
    v-model="state"
    :fetch-suggestions="querySearch"
    popper-class="my-autocomplete"
    placeholder="搜索任何旅游相关"
    style="width: 100%;min-width:20px;border-radius:0;margin-top:-5px"
    @select="handleSelect"
  >
 
    <template #default="{ item }">
      <div class="value">{{ item.value }}</div>
      <span class="link">{{ item.link }}</span>
    </template>
             </el-autocomplete>
        </div>
       
        <div class="search" @click="search" :style="{backgroundColor: color}">
            <el-icon ><Search /></el-icon>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted,ref} from 'vue'
import { useColorStore } from '@/store/modules/color'
import { storeToRefs } from 'pinia'
import { Search } from '@element-plus/icons-vue'
import { ElIcon } from 'element-plus'
const {color}=storeToRefs(useColorStore())


interface LinkItem {
  value: string
  link: string
}

const state = ref('')
const links = ref<LinkItem[]>([])
const search=()=>{
  window.open(`https://travelsearch.fliggy.com/index.htm?searchType=product&keyword=${state.value}&category=MULTI_SEARCH&pagenum=1`)

}
const querySearch = (queryString: string, cb:any) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value
  // call callback function to return suggestion objects
  cb(results)
}
const createFilter = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}
const loadAll = () => {
  return [
    { value:'八达岭长城'},
    { value:'富士山'},
    { value:'日本大阪'},
    { value:'马尔代夫'},
    { value:'九寨沟' },
    { value:'神农架' },
    { value:'叙利亚' },
  ]
}
const handleSelect = (item: Record<string, any>) => {
  window.open(`https://travelsearch.fliggy.com/index.htm?searchType=product&keyword=${item.value}&category=MULTI_SEARCH&pagenum=1`)
}

onMounted(() => {
  links.value = loadAll() as any
})
</script>

<style lang="scss" scoped>
.container{
display: flex;
margin-top:24px;
border:2px solid red;
height:32.5px;
border-radius:2px;
.search{
   padding: 8px;
   padding-bottom: 0;
   height: 25px;
   margin-left:-3px;
   margin-top:-0.5px;
   z-index: 10;
   border-radius:0px 1px 1px 0px ;
}
}

:deep(.el-input__wrapper) {
  height: 40px !important;
  border: none !important;
  box-shadow: none !important;
  line-height: 80px;
  background-color: inherit !important;
  line-height:40px;
  font-size: 18px;
}

</style>