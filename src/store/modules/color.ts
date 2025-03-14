import { defineStore } from "pinia"
export const useColorStore = defineStore('color', {
    state: () => ({ 
       //是否刷新
        color: localStorage.getItem('color') ||'#FFD800'
    }),
    getters: {
       
    },
    actions: {
        change(Color:string){
            this.color = Color
            //本地如果有颜色我们删除
            if(localStorage.getItem('color'))localStorage.removeItem('color')
            //把颜色存到本地方便从本地拿颜色,进行一个颜色持久化
            localStorage.setItem('color',Color)
        }
    },
})