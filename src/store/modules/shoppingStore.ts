import { defineStore } from "pinia"
interface Data{
    name:string,
    price:string
}
export const useShoppingStore = defineStore('shopping', {
    state: () => ({ 
       //购物车数组
        shopData:JSON.parse(localStorage.getItem('shoppingData')!)||[] as Data[] 
    }),
    getters: {
       
    },
    actions: {
       //购物车数据增加的办法
       add(data:Data){
             this.shopData.push(data)
             const shop=JSON.stringify(this.shopData)
             localStorage.setItem('shoppingData',shop)
       },
       remove(index:number){
           this.shopData.splice(index,1)
           localStorage.setItem('shoppingData', JSON.stringify(this.shopData))
       }
    },
})