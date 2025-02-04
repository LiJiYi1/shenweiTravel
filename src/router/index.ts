import { createRouter, createWebHashHistory } from 'vue-router'
import {route} from './route'
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: route,
    //滚动行为
    scrollBehavior(){
        return {
            left:0,
            top:0
        }
    }
})
export default router