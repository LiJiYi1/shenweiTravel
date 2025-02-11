export function getTime(){
let message=''
let message1=''
const time=new Date().getHours()

if(time>0&&time<=6){
    message='凌晨好'
    message1 = 'Good early morning'
}
else if(time>6&&time<=12){
    message='上午好'
    message1 = 'Good morning'
}
else if(time>12&&time<=13){
    message='中午好'
    message1 = 'Good afternoon'
}
else if (time > 13 && time <= 18) {
    message = '下午好'
    message1 = 'Good afternoon'
}
else{
    message = '晚上好'
    message1 = 'Good evening'
}
return {message,message1}
}