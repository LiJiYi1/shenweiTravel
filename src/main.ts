import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index.ts'
import '@/style/index.less'
//全局引入这个路由鉴权文件
import '@/router/permission.ts'
//引入element-plus的所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入pina仓库
import pinia from './store/index.ts'
//引入语言切换
import {createI18n} from 'vue-i18n'
//引入elementPlus语言包
import { zhCn } from 'element-plus/es/locales.mjs'
//引入暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'
const i18n=createI18n({
legacy: false,
locale:'zh-cn',
messages:{
    en: {
        name:'Shenwei Travel',
        home:'Home',
        BigScreen: ' Large screen visualization',
        logout:'Log out',
        dark: 'Dark mode',
        themes: "Theme settings",
        language:'Language settings',
        hotel: "Hotel",
        air:'Air ticket',
        train:"Train ticket",
        carShip: "Bus ticket/Boat ticket",
        ticket:"Tickets.Events",
        RentCar:"Rent a car",
        Travel:'Travel',
        about: "About Us",
        shopping: "Global shopping",
        money:"Foreign exchange",
        UnionPay:"UnionPay special offers",
        purchase:"Famous store purchase",
        Domestic:"Domestic hotel",
        Overseas:"Overseas hotel",
        DomesticAir:"Domestic",
        International:"International/China Hong Kong Macao Taiwan",
        color:"Theme color settings",
        Train:"Domestic train ticket",
        OverseasTrain:"Overseas train ticket",
        bus:"Bus ticket",
        boat:"Boat ticket",
    },
    'zh-cn': {
        name:'神威旅行',
        home:'首页',
        BigScreen:'大屏可视化',
        logout:'退出登录',
        dark:'暗黑模式',
        themes:'主题设置',
        language:'语言设置',
        hotel:"酒店",
        air:'机票',
        train:"火车票",
        carShip:"汽车票/船票",
        ticket:"门票.活动",
        RentCar:"用车",
        Travel:"旅游",
        about:"关于神威",
        shopping: "全球购",
        money:"外币兑换",
        UnionPay:"银联特惠",
        purchase:"名店购",
        Domestic:"国内酒店",
        Overseas:"海外酒店",
        DomesticAir:"国内",
        International:"国际/中国港澳台",
        color:"主题颜色设置",
        Train:"国内火车票",
        OverseasTrain:"境外火车票",
        bus:"汽车票",
        boat:"船票"
    }
}
})

const app = createApp(App)
app.use(router)
app.use(ElementPlus,{
    locale:zhCn
})
app.use(i18n)
app.use(pinia)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')
