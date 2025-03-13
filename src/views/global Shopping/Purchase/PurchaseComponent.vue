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
      <el-icon style="cursor: pointer;" class="el-input__icon" @click="handleIconClick" >
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
        <el-tabs v-model="activeName" class="demo-tabs" >
         <el-tab-pane label="热门目的地" name="hot" :disabled=true></el-tab-pane>
         <el-tab-pane :label="item.label" :name="item.name"  class="v-f" v-for="(item,index) in length" :key="index">
         <div  class="total">
         <div class="place_shoplist_one" @click="hotSearch(item1.pos,item1.name)" v-for="(item1,index1) in item.inner" :key="index1">
                <div class="place_one_img">
                    
                          <img :src='item1.image' :alt="item1.name">                    
      
                </div>
                <div class="shop_one_word">
                <div class="list_shop_name">
                    <p class="ellips ">
                        {{item1.name}}
                    </p>
                    <p class="ellips">
                        {{item1.pos}}
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
        <span @click="searchBottom(item)" style="line-height: 20px;cursor:pointer" v-for="(item,index) in bottomData" :key="index">{{item}}</span>
       
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
[{image:'/hot/xianggang/image.png',name:'Tiffany & Co. (One Peking Road)',pos:"蒂芙尼（香港北京道1号旗舰店）"},
{image:'/hot/xianggang/image1.png',name:'DFS Hong Kong, Canton Road',pos:"DFS迪斐世香港广东道店"},
{image:'/hot/xianggang/image2.png',name:'Tiffany & Co.(Harbour City)',pos:"蒂芙尼（香港海港城店）"},
{image:'/hot/xianggang/image3.png',name:'Chopard(Ocean Terminal Boutique)',pos:"萧邦（海运大厦专卖店）"},
{image:'/hot/xianggang/image4.png',name:'ELEMENTS',pos:"ELEMENTS 圆方"},
{image:'/hot/xianggang/image5.png',name:'Tiffany & Co. (The Peninsula Hotel)',pos:"蒂芙尼（香港半岛酒店）"},
{image:'/hot/xianggang/image6.png',name:'Tiffany & Co.(Times Square)',pos:"蒂芙尼（香港时代广场店）"},
{image:'/hot/xianggang/image7.png',name:'Tiffany & Co. (Elements)',pos:"蒂芙尼（香港圆方店）"}]
},
{label:"澳门",name:"second",inner:
[{image:'/hot/aomen/image.jpg',name:'DFS Macau, Shoppes',pos:"DFS迪斐世澳门四季名店"},
{image:' /hot/aomen/image1.jpg',name:'Tiffany & Co.(Four Seaso',pos:"蒂芙尼（澳门四季名店）"},
{image:' /hot/aomen/image2.jpg',name:'DFS Macau, City of Dre',pos:"DFS迪斐世澳门新濠天地店"},
{image:' /hot/aomen/image3.jpg',name:'Chaumet Galaxy',pos:"尚美巴黎（澳门银河店）"},
{image:' /hot/aomen/image4.jpg',name:'Chaumet (Venetian Macau)',pos:"Macau尚美巴黎（澳门威尼斯"},
{image:' /hot/aomen/image5.jpg',name:'Tiffany & Co. (The Peninsula Hotel)',pos:"蒂芙尼（香港半岛酒店）"},
{image:' /hot/aomen/image6.jpg',name:'Jaeger-LeCoultre(Wynn Palace',pos:"积家（永利皇宫）"},
{image:' /hot/aomen/image7.jpg',name:'Jaeger-LeCoultre (Macau',pos:"积家（澳门银河）"}]
},
{label:"东京",name:"third",inner:
[{image:'/hot/dongjing/image.jpg',name:'Takashimaya (Shinjuku Store)',pos:"高岛屋（新宿店）"},
{image:' /hot/dongjing/image1.jpg',name:'Takashimaya(Nihombashi Store)',pos:"高岛屋（日本桥店）"},
{image:' /hot/dongjing/image2.jpg',name:'DAIMARU (Tokyo)',pos:"大丸百货（东京店）"},
{image:' /hot/dongjing/image3.jpg',name:'Tiffany & Co. (Flagship Store Ginza)',pos:"蒂芙尼（银座店）"},
{image:' /hot/dongjing/image4.jpg',name:'Tiffany & Co. (GINZA SIX)',pos:"蒂芙尼（GINZA SIX店"},
{image:' /hot/dongjing/image5.jpg',name:'Japan Duty Free GINZA (Ginza Mitsukoshi main billding 8F)',pos:"Japan Duty Free GI"},
{image:' /hot/dongjing/image6.jpg',name:'KOMEHYO(Ginza store)',pos:"KOMEHYO（银座店）"},
{image:' /hot/dongjing/image7.jpg',name:'Tiffany & Co. (Omotesando Store)',pos:"蒂芙尼（表参道店）"}]
},
{label:"巴黎",name:"fourth",inner:
[{image:'/hot/bali/image.jpg',name:'La Vallée Village',pos:"巴黎河谷购物村"},
{image:' /hot/bali/image1.jpg',name:'Galeries Lafayette Haussmann',pos:"巴黎老佛爷百货（奥斯曼旗舰"},
{image:' /hot/bali/image2.jpg',name:'Tiffany & Co. (Galeries Lafayette)）',pos:"蒂芙尼（巴黎老佛爷"},
{image:' /hot/bali/image3.jpg',name:'BENLUX (Louvre)',pos:"巴黎斑丽丝精品百货"},
{image:' /hot/bali/image4.jpg',name:'Tiffany & Co. (Champs-Élysées)',pos:"蒂芙尼（香榭丽舍大道"},
{image:' /hot/bali/image5.jpg',name:'Tiffany & Co. (Printemps Haussmann)',pos:"蒂芙尼（巴黎春天店）"},
{image:' /hot/bali/image6.jpg',name:'Tiffany & Co.(Le Bon Marché)',pos:"蒂芙尼（乐蓬马歇百货）"},
{image:' /hot/bali/image7.jpg',name:'KAMS PARIS',pos:"巴黎卢浮KAMS免"}]
},
{label:"大阪",name:"fifth",inner:
[{image:' /hot/daban/image.jpg',name:'DAIMARU (Shinsaibashi)',pos:"大丸百货（心斋桥店）"},
{image:' /hot/daban/image1.jpg',name:'Takashimaya(Osaka Store)',pos:"高岛屋（大阪店）"},
{image:' /hot/daban/image2.jpg',name:'DAIMARU (Umeda)',pos:"大丸百货（梅田店）"},
{image:' /hot/daban/image3.jpg',name:'Kintetsu Department Store(Main Store Abeno Haruhas)',pos:"近铁百货（海阔天空总"},
{image:' /hot/daban/image4.jpg',name:'Tiffany & Co.(Parco Shinsaibashi)',pos:"蒂芙尼（心斋桥PARCO店"},
{image:' /hot/daban/image5.jpg',name:'Edion Corporation(NAMBA STORE)',pos:"爱电王（难波总店）"},
{image:' /hot/daban/image6.jpg',name:'Sugi Pharmacy (Takatsukihondori Store)',pos:"SUGI杉药局（ 高槻本通"},
{image:' /hot/daban/image7.jpg',name:'Yamada Denki LABI1 Namba',pos:"山田电机（LABI1难波店"}]
},
{label:"新加坡",name:"sixth",inner:
[{image:' /hot/xinjiapo/image.jpg',name:'Tiffany & Co. (The Shoppes at Marina Bay Sands)',pos:"蒂芙尼（滨海湾金沙购物商城店"},
{image:' /hot/xinjiapo/image1.jpg',name:'Tiffany & Co. (Changi Airport Terminal 1)',pos:"蒂芙尼（新加坡樟宜机"},
{image:' /hot/xinjiapo/image2.jpg',name:'Qeelin (Marina Bay Sands)',pos:"Qeelin （滨海湾金沙购"},
{image:' /hot/xinjiapo/image3.jpg',name:'Tiffany & Co. (Changi Airport Terminal 3)',pos:"蒂芙尼（新加坡樟宜机场"},
{image:' /hot/xinjiapo/image4.jpg',name:'Tiffany & Co. (ION Orchard)',pos:"蒂芙尼（爱雍·乌节购物"},
{image:' /hot/xinjiapo/image5.jpg',name:'FRED (Singapore Marina Bay Sands)',pos:"斐登（滨海湾金沙）"},
{image:' /hot/xinjiapo/image6.jpg',name:'Jimmy Choo (Marina Bay Sands Store)',pos:"Jimmy Choo（滨海湾金"},
{image:' /hot/xinjiapo/image7.jpg',name:'MARNI (Marina Bay Sands)',pos:"MARNI（滨海湾金沙）"}]
},
{label:"洛杉矶",name:"seventh",inner:
[{image:' /hot/luoshanji/image.jpg',name:"Macy's (Downtown LA）",pos:"梅西百货（洛杉矶市中心店）"},
{image:' /hot/luoshanji/image1.jpg',name:'Bloomingdales (South Coast Plaza)',pos:"博洛茗百货（南海岸店"},
{image:' /hot/luoshanji/image2.jpg',name:"Bloomingdale's (Beverly Center)",pos:"博洛茗百货（比弗利购物中"},
{image:' /hot/luoshanji/image3.jpg',name:"Macy's (South Coast Plaza)",pos:"梅西百货（南海岸广场购物中"},
{image:' /hot/luoshanji/image4.jpg',name:'Bloomingdales(Century City)',pos:"博洛茗百货（世纪之城店）"},
{image:' /hot/luoshanji/image5.jpg',name:"Macy's (Los Cerritos Center)",pos:"梅西百货（洛杉矶喜瑞都店）"},
{image:' /hot/luoshanji/image6.jpg',name:"Macy's (Sherman Oaks Fashion Square)梅西百货",pos:"（谢尔曼奥克"},
{image:' /hot/luoshanji/image7.jpg',name:"Macy's(Puente Hills)",pos:"梅西百货（洛杉矶罗兰岗"}]
},
{label:"伦敦",name:"eigth",inner:
[{image:' /hot/lundun/image.jpg',name:'Bicester Village',pos:"伦敦比斯特购物村"},
{image:' /hot/lundun/image1.jpg',name:'Kiltane (Cambridge)',pos:"Kiltane（剑桥国王大道）"},
{image:' /hot/lundun/image2.jpg',name:'Tiffany & Co.(Old Bond Street)',pos:"蒂芙尼（老邦德街店）"},
{image:' /hot/lundun/image3.jpg',name:'Tiffany & Co. (Harrods)',pos:"蒂芙尼（Harrods）"},
{image:' /hot/lundun/image4.jpg',name:'Tiffany & Co. (Selfridges)',pos:"蒂芙尼（Selfridges）"},
{image:' /hot/lundun/image5.jpg',name:'Kiltane (London)',pos:"Kiltane（伦敦博物馆街"},
{image:' /hot/lundun/image6.jpg',name:'Elie Saab (London Mayfair)',pos:"Elie Saab（梅弗尔）"},
{image:' /hot/lundun/image7.jpg',name:'Kiltane (Covent Garden)',pos:"Kiltane（考文特花园"}]
},]
const activeName = ref('first')

const hotSearch=(pos:string,name:string)=>{
window.open(`https://www.baidu.com/s?wd=${name}${pos}`)
}

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
let bottomData=['海淘攻略','海购索引','返礼码','神威信用卡','雅典海淘','米兰海淘','巴黎海淘','伦敦海淘纽约海淘','首尔海淘','罗马海淘','DFS海淘','Chic outlet海淘', 'Zegna海淘' ,'Tiffany海淘','Micheal Kors海淘' ,'Coach海淘' ,"Tod's海淘", 'De Beers海淘','Theory海淘' ,'Morgan海淘' ,'信用卡返礼' ,'万事达电子旅行支票','MasterCard电子旅行支票 ', '境外消费返礼' ,'消费返礼','境外消费返现']
const searchBottom=(name:string)=>{
  window.open(`https://www.baidu.com/s?wd=${name}`)
}
const handleSelect = (item: Record<string,number>) => {
  console.log(item)
    window.open(`https://www.baidu.com/s?wd=${state.value}`)
}

const handleIconClick = (ev: Event) => {
  window.open(`https://www.baidu.com/s?wd=${state.value}`)
  
}

onMounted(() => {
  links.value = loadAll()
})
</script>

<style lang="less" scoped>
div{
    .demo-tabs{
        width: 80%;
        min-width: 1218px;
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
    .footer_box {
    width:100%;
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
  .ellips{
      width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
</style>