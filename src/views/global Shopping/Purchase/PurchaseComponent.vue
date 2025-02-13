<template>
    <div> 
        <!-- 搜索 -->
        <el-autocomplete
    v-model="state"
    :fetch-suggestions="querySearch"
    popper-class="my-autocomplete"
    placeholder="请输入商户中/英文名称"
    @select="handleSelect"
  >
    <template #suffix>
      <el-icon class="el-input__icon" @click="handleIconClick">
        <Search />
      </el-icon>
    </template>
    <template #default="{ item }">
      <div class="value">{{ item.value }}</div>
    </template>
        </el-autocomplete>
        <!-- 奢品大牌 -->
        <div style="margin-top: 20px;">
            <h3>奢品大牌</h3>
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item >
            <img src="@/assets/global/shopping/image.png" alt="" style="width: 100%;height:100%">
          </el-carousel-item>
           <el-carousel-item>
            <img src="@/assets/global/shopping/image1.png" alt="" style="width: 100%;height:100%">
          </el-carousel-item>
           <el-carousel-item>
            <img src="@/assets/global/shopping/image2.png" alt="" style="width: 100%;height:100%">
          </el-carousel-item>
       </el-carousel>
        </div>
        <!-- 精品反礼 -->
        <div style="margin-top: 20px;">
            <h3>精选享返礼</h3>
            <div class="choose_shopping_img">
                <div class="choose_shoppingL">
                        <div class="choose_shoppingL_top">
                        <div class="shoppingL_top_left"> 
                                        <img src="https://dimg04.c-ctrip.com/images/0zd4w12000b8xgrx7A4F1.jpg">
                        </div>
                        <div class="shoppingL_top_right">
                                        <img src="https://dimg04.c-ctrip.com/images/0zd5112000cvwo2ft455E.jpg">          
                        </div>
                        </div>
                        <div class="choose_shoppingL_bottom">
                        <div class="shoppingL_top_left">
                                        <img src="https://dimg04.c-ctrip.com/images/0zd1h12000ho811uy2C5A.jpg">
                        </div>
                        <div class="shoppingL_top_right">
                                        <img src="https://dimg04.c-ctrip.com/images/0zd2712000ddij8r64ADE.jpg">
                        </div>
                      </div>
                </div>
                <div class="choose_shoppingR">
                                <img src="https://dimg04.c-ctrip.com/images/0zd6d12000etfwy9g8F8E.jpg">
                </div>
            </div>
        </div>
        <!-- 热门目的地 -->
        <el-tabs v-model="activeName" class="demo-tabs">
         <el-tab-pane label="热门目的地" name="hot" :disabled=true></el-tab-pane>
         <el-tab-pane :label="item.label" :name="item.name"  class="v-f" v-for="(item,index) in length" :key="index">
         <div  class="total">
         <div class="place_shoplist_one" v-for="(item1,index1) in item.inner" :key="index1">
                <div class="place_one_img">
                    <a href="/merchant/detail/8554?gsourcetype=6" target="_blank">
                                    <img :src='item1.image' :alt="item1.name">                    
                    </a>
                </div>
                <div class="shop_one_word">
                <div class="list_shop_name">
                    <p class="ellips  list_shop_top">
                        <a href="/merchant/detail/8554?gsourcetype=6" target="_blank">{{item1.name}}</a>
                    </p>
                    <p class="ellips list_shop_under">
                        <a href="/merchant/detail/8554?gsourcetype=6" target="_blank">{{item1.pos}}</a>
                    </p>
                </div>
                <div class="list_shop_fan">
                    
                </div>
                </div>
         </div>
            
        </div>
          </el-tab-pane>
        
        </el-tabs>
        <!-- 页脚 -->
        <div class="footer">
            <div>
    <div class="footer_box clear_both">
        <span>海淘攻略</span> <span>海购索引</span> <span>返礼码</span> <span>携程信用卡</span>
        <span>雅典海淘</span> <span>米兰海淘</span> <span>巴黎海淘</span> <span>伦敦海淘</span>
        <span>纽约海淘</span> <span>首尔海淘</span> <span>罗马海淘</span>
        <span>DFS海淘</span> <span>Chic outlet海淘</span> <span>Zegna海淘</span> <span>Tiffany海淘</span>
        <span>Micheal Kors海淘</span> <span>Coach海淘</span> <span>Tod's海淘</span> <span>De Beers海淘</span>
        <span>Theory海淘</span> <span>Morgan海淘</span> <span>信用卡返礼</span> <span>万事达电子旅行支票</span>
        <span>MasterCard电子旅行支票</span> <span>携程电子旅支</span> <span>境外消费返礼</span> <span>消费返礼</span>
        <span>境外消费返现</span>
    </div>
</div>
        </div>
      <BottomComponent></BottomComponent>
    </div>
</template>

<script setup lang="ts">
import BottomComponent from '@/components/bottomComponent.vue';
import { onMounted, ref } from 'vue'
const length=[
{label:"香港",name:"first",inner:
[{image:'../../../../public/hot/xianggang/image.png',name:'Tiffany & Co. (One Peking Road)',pos:"蒂芙尼（香港北京道1号旗舰店）"},
{image:'../../../../public/hot/xianggang/image1.png',name:'DFS Hong Kong, Canton Road',pos:"DFS迪斐世香港广东道店"},
{image:'../../../../public/hot/xianggang/image2.png',name:'Tiffany & Co.(Harbour City)',pos:"蒂芙尼（香港海港城店）"},
{image:'../../../../public/hot/xianggang/image3.png',name:'Chopard(Ocean Terminal Boutique)',pos:"萧邦（海运大厦专卖店）"},
{image:'../../../../public/hot/xianggang/image4.png',name:'ELEMENTS',pos:"ELEMENTS 圆方"},
{image:'../../../../public/hot/xianggang/image5.png',name:'Tiffany & Co. (The Peninsula Hotel)',pos:"蒂芙尼（香港半岛酒店）"},
{image:'../../../../public/hot/xianggang/image6.png',name:'Tiffany & Co.(Times Square)',pos:"蒂芙尼（香港时代广场店）"},
{image:'../../../../public/hot/xianggang/image7.png',name:'Tiffany & Co. (Elements)',pos:"蒂芙尼（香港圆方店）"}]
},
{label:"澳门",name:"second",inner:
[{image:'../../../../public/hot/xianggang/image1.png',name:'Tiffany & Co. (One Peking Road)',pos:"蒂芙尼（香港北京道1号旗舰店）"},
{image:'../../../../public/hot/xianggang/image2.png',name:'DFS Hong Kong, Canton Road',pos:"DFS迪斐世香港广东道店"},
{image:'../../../../public/hot/xianggang/image3.png',name:'Tiffany & Co.(Harbour City)',pos:"蒂芙尼（香港海港城店）"},
{image:'../../../../public/hot/xianggang/image4.png',name:'Chopard(Ocean Terminal Boutique)',pos:"萧邦（海运大厦专卖店）"},
{image:'../../../../public/hot/xianggang/image5.png',name:'ELEMENTS',pos:"ELEMENTS 圆方"},
{image:'../../../../public/hot/xianggang/image6.png',name:'Tiffany & Co. (The Peninsula Hotel)',pos:"蒂芙尼（香港半岛酒店）"},
{image:'../../../../public/hot/xianggang/image.png',name:'Tiffany & Co.(Times Square)',pos:"蒂芙尼（香港时代广场店）"},
{image:'../../../../public/hot/xianggang/image7.png',name:'Tiffany & Co. (Elements)',pos:"蒂芙尼（香港圆方店）"}]
},
{label:"东京",name:"third",inner:
[{image:'../../../../public/hot/xianggang/image2.png',name:'Tiffany & Co. (One Peking Road)',pos:"蒂芙尼（香港北京道1号旗舰店）"},
{image:'../../../../public/hot/xianggang/image.png',name:'DFS Hong Kong, Canton Road',pos:"DFS迪斐世香港广东道店"},
{image:'../../../../public/hot/xianggang/image7.png',name:'Tiffany & Co.(Harbour City)',pos:"蒂芙尼（香港海港城店）"},
{image:'../../../../public/hot/xianggang/image6.png',name:'Chopard(Ocean Terminal Boutique)',pos:"萧邦（海运大厦专卖店）"},
{image:'../../../../public/hot/xianggang/image5.png',name:'ELEMENTS',pos:"ELEMENTS 圆方"},
{image:'../../../../public/hot/xianggang/image4.png',name:'Tiffany & Co. (The Peninsula Hotel)',pos:"蒂芙尼（香港半岛酒店）"},
{image:'../../../../public/hot/xianggang/image3.png',name:'Tiffany & Co.(Times Square)',pos:"蒂芙尼（香港时代广场店）"},
{image:'../../../../public/hot/xianggang/image1.png',name:'Tiffany & Co. (Elements)',pos:"蒂芙尼（香港圆方店）"}]
},
{label:"巴黎",name:"fourth",inner:
[{image:'../../../../public/hot/xianggang/image4.png',name:'Tiffany & Co. (One Peking Road)',pos:"蒂芙尼（香港北京道1号旗舰店）"},
{image:'../../../../public/hot/xianggang/image2.png',name:'DFS Hong Kong, Canton Road',pos:"DFS迪斐世香港广东道店"},
{image:'../../../../public/hot/xianggang/image1.png',name:'Tiffany & Co.(Harbour City)',pos:"蒂芙尼（香港海港城店）"},
{image:'../../../../public/hot/xianggang/image7.png',name:'Chopard(Ocean Terminal Boutique)',pos:"萧邦（海运大厦专卖店）"},
{image:'../../../../public/hot/xianggang/image5.png',name:'ELEMENTS',pos:"ELEMENTS 圆方"},
{image:'../../../../public/hot/xianggang/image3.png',name:'Tiffany & Co. (The Peninsula Hotel)',pos:"蒂芙尼（香港半岛酒店）"},
{image:'../../../../public/hot/xianggang/image6.png',name:'Tiffany & Co.(Times Square)',pos:"蒂芙尼（香港时代广场店）"},
{image:'../../../../public/hot/xianggang/image.png',name:'Tiffany & Co. (Elements)',pos:"蒂芙尼（香港圆方店）"}]
},
{label:"大阪",name:"fifth",inner:
[{image:'../../../../public/hot/xianggang/image1.png',name:'Tiffany & Co. (One Peking Road)',pos:"蒂芙尼（香港北京道1号旗舰店）"},
{image:'../../../../public/hot/xianggang/image2.png',name:'DFS Hong Kong, Canton Road',pos:"DFS迪斐世香港广东道店"},
{image:'../../../../public/hot/xianggang/image3.png',name:'Tiffany & Co.(Harbour City)',pos:"蒂芙尼（香港海港城店）"},
{image:'../../../../public/hot/xianggang/image4.png',name:'Chopard(Ocean Terminal Boutique)',pos:"萧邦（海运大厦专卖店）"},
{image:'../../../../public/hot/xianggang/image5.png',name:'ELEMENTS',pos:"ELEMENTS 圆方"},
{image:'../../../../public/hot/xianggang/image6.png',name:'Tiffany & Co. (The Peninsula Hotel)',pos:"蒂芙尼（香港半岛酒店）"},
{image:'../../../../public/hot/xianggang/image7.png',name:'Tiffany & Co.(Times Square)',pos:"蒂芙尼（香港时代广场店）"},
{image:'../../../../public/hot/xianggang/image.png',name:'Tiffany & Co. (Elements)',pos:"蒂芙尼（香港圆方店）"}]
},
{label:"新加坡",name:"sixth",inner:
[{image:'../../../../public/hot/xianggang/image4.png',name:'Tiffany & Co. (One Peking Road)',pos:"蒂芙尼（香港北京道1号旗舰店）"},
{image:'../../../../public/hot/xianggang/image5.png',name:'DFS Hong Kong, Canton Road',pos:"DFS迪斐世香港广东道店"},
{image:'../../../../public/hot/xianggang/image6.png',name:'Tiffany & Co.(Harbour City)',pos:"蒂芙尼（香港海港城店）"},
{image:'../../../../public/hot/xianggang/image7.png',name:'Chopard(Ocean Terminal Boutique)',pos:"萧邦（海运大厦专卖店）"},
{image:'../../../../public/hot/xianggang/image.png',name:'ELEMENTS',pos:"ELEMENTS 圆方"},
{image:'../../../../public/hot/xianggang/image1.png',name:'Tiffany & Co. (The Peninsula Hotel)',pos:"蒂芙尼（香港半岛酒店）"},
{image:'../../../../public/hot/xianggang/image2.png',name:'Tiffany & Co.(Times Square)',pos:"蒂芙尼（香港时代广场店）"},
{image:'../../../../public/hot/xianggang/image3.png',name:'Tiffany & Co. (Elements)',pos:"蒂芙尼（香港圆方店）"}]
},
{label:"洛杉矶",name:"seventh",inner:
[{image:'../../../../public/hot/xianggang/image1.png',name:'Tiffany & Co. (One Peking Road)',pos:"蒂芙尼（香港北京道1号旗舰店）"},
{image:'../../../../public/hot/xianggang/image7.png',name:'DFS Hong Kong, Canton Road',pos:"DFS迪斐世香港广东道店"},
{image:'../../../../public/hot/xianggang/image6.png',name:'Tiffany & Co.(Harbour City)',pos:"蒂芙尼（香港海港城店）"},
{image:'../../../../public/hot/xianggang/image5.png',name:'Chopard(Ocean Terminal Boutique)',pos:"萧邦（海运大厦专卖店）"},
{image:'../../../../public/hot/xianggang/image.png',name:'ELEMENTS',pos:"ELEMENTS 圆方"},
{image:'../../../../public/hot/xianggang/image4.png',name:'Tiffany & Co. (The Peninsula Hotel)',pos:"蒂芙尼（香港半岛酒店）"},
{image:'../../../../public/hot/xianggang/image2.png',name:'Tiffany & Co.(Times Square)',pos:"蒂芙尼（香港时代广场店）"},
{image:'../../../../public/hot/xianggang/image3.png',name:'Tiffany & Co. (Elements)',pos:"蒂芙尼（香港圆方店）"}]
},
{label:"伦敦",name:"eigth",inner:
[{image:'../../../../public/hot/xianggang/image4.png',name:'Tiffany & Co. (One Peking Road)',pos:"蒂芙尼（香港北京道1号旗舰店）"},
{image:'../../../../public/hot/xianggang/image5.png',name:'DFS Hong Kong, Canton Road',pos:"DFS迪斐世香港广东道店"},
{image:'../../../../public/hot/xianggang/image7.png',name:'Tiffany & Co.(Harbour City)',pos:"蒂芙尼（香港海港城店）"},
{image:'../../../../public/hot/xianggang/image1.png',name:'Chopard(Ocean Terminal Boutique)',pos:"萧邦（海运大厦专卖店）"},
{image:'../../../../public/hot/xianggang/image2.png',name:'ELEMENTS',pos:"ELEMENTS 圆方"},
{image:'../../../../public/hot/xianggang/image3.png',name:'Tiffany & Co. (The Peninsula Hotel)',pos:"蒂芙尼（香港半岛酒店）"},
{image:'../../../../public/hot/xianggang/image.png',name:'Tiffany & Co.(Times Square)',pos:"蒂芙尼（香港时代广场店）"},
{image:'../../../../public/hot/xianggang/image6.png',name:'Tiffany & Co. (Elements)',pos:"蒂芙尼（香港圆方店）"}]
},]
const activeName = ref('first')


interface LinkItem {
  value: string
  link: string
}

const state = ref('')
const links = ref<LinkItem[]>([])

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
    { value: '高岛屋(大阪店)', link: 'https://github.com/vuejs/vue' },
    { value: '京都高岛屋S.C.', link: 'https://github.com/ElemeFE/element' },
    { value: '大丸百货(东京店)', link: 'https://github.com/ElemeFE/cooking' },
    { value: '迪拜国际机场T3航站楼A出发区(综合购物区店)', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: '高岛屋（新宿店）', link: 'https://github.com/vuejs/vuex' },
    { value: '大丸百货（心斋桥店）', link: 'https://github.com/vuejs/vue-router' },
    { value: '巴黎河谷购物村', link: 'https://github.com/babel/babel' },
  ]
}
const handleSelect = (item: Record<string,number>) => {
  console.log(item)
}

const handleIconClick = (ev: Event) => {
  console.log(ev)
}

onMounted(() => {
  links.value = loadAll()
})
</script>

<style lang="less" scoped>
div{
    .demo-tabs{
        width: 1200px;
        margin-top: 40px;
    }
    .v-f{
        
    margin-right: 20px;
    .total{
    float: left;
    margin-right: 20px;
    }
    .place_shoplist_one{
    float: left;
    margin-right: 15px;
    margin-top: 20px;
    }
    .place_one_img{
        img{
          width: 275px;
        }
       
    }
   .shop_one_word{
    width: 260px;
     white-space: nowrap;
     overflow: hidden;
    text-overflow: ellipsis;
    .ellipis{
    white-space: nowrap;
    overflow: hidden;
  
    }
  
    a{
    text-decoration: none;
    color: inherit;
   
    }
   
   }
    }
    .footer{
    margin-top: 120px;
    font-size: 13px;
    border-top: 1px;
    width: 100%;
    position: relative;
    .footer_box {
    width: 1180px;
    margin: 0 auto;
    border-top: 2px solid ;
    padding-top: 25px;
    padding-bottom: 10px;
    span{
        margin-right: 18px;
    }
}
    }
    .choose_shopping_img{
        display: flex;
          margin-top: 20px;
        .choose_shoppingL{
          
            display: flex;
            margin-right: 20px;
            .shoppingL_top_left{
                margin-right: 20px;
            }
             .shoppingL_top_right{
                margin-top: 20px;
            }
        }
    }
    .el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
    }
    .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
    }
   .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
    }
}
</style>