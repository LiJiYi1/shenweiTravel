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
import pinia from './store/index.ts'
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(pinia)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')
