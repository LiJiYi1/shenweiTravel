export function getTime(){
let message=''
const time=new Date().getHours()
if(time>0&&time<6){
    message='凌晨'
}
else if(time>6&&time<12){
    message='上午'
}
else if(time>12&&time<13){
    message='中午'
}
else if (time > 13 && time < 18) {
    message = '下午'
}
else{
    message = '晚上'
}
return message
}