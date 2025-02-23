export function getWeek(day: string){
    const date = new Date(day);
    const dayNum = date.getDay()
    const dayOfWeek = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    const dayl = dayOfWeek[dayNum]
    return dayl
}