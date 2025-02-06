import { defineStore } from "pinia"
export const useRefreshStore = defineStore('refresh', {
    state: () => ({ 
       //是否刷新
       refresh:false 
    }),
    getters: {
    },
    actions: {
    },
})