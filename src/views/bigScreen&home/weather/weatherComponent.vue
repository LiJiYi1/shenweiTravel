<template>
    <div>
         <!-- 天气预报 -->
    <div class="weatherTitle">
        <!-- 遍历省 -->
        <el-select
        v-model="Region"
        placeholder="山东省"
        style="width: 100px;margin-top:20px;"

        >
        <el-option @click="set()" :label="item.name" :value="item.name" v-for="(item,index) in city" :key="index"/>
        </el-select>
        <!--遍历市-->
        <div v-for="(item,index) in city" :key="index" >
            <el-select
            v-model="region"
            style="width: 100px;margin-top:20px;margin-left:20px"
            v-if="item.name===Region">
               <el-option @click="getData(item1.name)" :label="item1.name" :value="item1.name" v-for="(item1,index1) in item.city" :key="index1"/> 
            </el-select>
        </div>
        <h1 style="margin-left:20px">天气预报</h1>
    </div>

<el-card body-style="padding:0px;text-align:start" class="box">  
            <!-- 天气预报内容 -->
    <div class="innerBox">
            <div class="topTime">
                <p>{{time}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{Day1}}</p>
                <p>最近更新:{{lastUpdate}}</p>
            </div>
            <div class="centerWeather">
                <div class="img3"></div>
                <div style="display: flex;">
                <h1>{{temputureNow}}</h1>
                <sup>℃</sup>
                </div>
                <p>最低:{{ low1 }}℃</p>
                <p>最高:{{ high1 }}℃</p>
                <h1 style="margin-right: 4vh; font-size:38px">{{weatherNow}}</h1>
            </div>
            <div class="bottomWeather">
                <p>风向:{{direction1}}风</p>
                <p>降水量:{{ rainfall }}mm</p>
                <p>风速:{{speed1}}10km/h</p>
                <p>相对湿度:{{humidity}}%rh</p>

            </div>
            <p>{{location}}{{time1}}天气预报,今天{{low1}}℃-{{high1}}℃,{{ weatherNow }}, 风向情况:{{ direction1 }}风,总降水量:{{rainfall}}mm,相对湿度:{{humidity}}%。{{location}}
            今日生活指数: 交通指数,{{traffic}} ({{trafficDetail}}),运动指数,{{sport}} ({{sportDetail}}),
            未来3天,最低温度{{low2}}℃，最高温度{{high2}}℃,查询{{location}}实时、3天天气预报,上神威天气预报频道。</p>
        </div> 
    <!-- canvas画布-->
 
    <canvas style="z-index: 1;margin-top:-390px"   ref="webgl"  width="1218" height="430"></canvas>
   



</el-card>
       <!-- 三天天气预测 -->
        <h1>三天天气预测</h1>
        <el-card shadow="always" class="day3">
            <div>
            <div class="img"></div>
            <div class="first">
                <p>日期:{{date1}}</p>
                <p>最高温度:{{high1}}<sup>℃</sup></p>
                <p>最低温度:{{low1}}<sup>℃</sup></p>
                <p>风向:{{direction1}}</p>
                <p>风速:{{speed1}}</p>
                <p>白天天气:{{weatherday1}}</p>
                <p>夜晚天气:{{weathernight1}}</p>
            </div>
            <div class="img1"></div>
             <div class="second">
               <div>日期:{{date2}}</div>
                <p>最高温度:{{high2}}<sup>℃</sup></p>
                <p>最低温度:{{low2}}<sup>℃</sup></p>
                <p>风向:{{direction2}}</p>
                <p>风速:{{speed2}}</p>
                <p>白天天气:{{weatherday2}}</p>
                <p>夜晚天气:{{weathernight2}}</p>
            </div>
            <div class="img2"></div>
            <div class="third">
               <div>日期:{{date3}}</div>
                <p>最高温度:{{high3}}<sup>℃</sup></p>
                <p>最低温度:{{low3}}<sup>℃</sup></p>
                <p>风向:{{direction3}}</p>
                <p>风速:{{speed3}}</p>
                <p>白天天气:{{weatherday3}}</p>
                <p>夜晚天气:{{weathernight3}}</p>
            </div>
            </div>
        </el-card>
        <!-- 穿衣指数 -->
        <h1>出行穿衣指数</h1>
        <el-card shadow="always" class="dressing">
            <h3 >{{ dressing }}</h3>
            <p style="margin-top:30px">{{ suggest }}</p>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { onMounted, ref,onBeforeUnmount} from 'vue';
import moment from 'moment';
import data from '@/assets/home/china.json'
import { citys } from '@/assets/home/name';
const city=data
//持久化数据
const Region=ref(localStorage.getItem('province'))||ref('山东省')
//持久化数据
const region=ref(localStorage.getItem('city'))||ref('威海市')
//当前时间
let time=ref(moment().format("YYYY年MM月DD日 hh:mm:ss"))
let time1=ref(moment().format("YYYY年MM月DD日"))
//星期几
let Day1=ref(moment().format("YYYY.MM.DD"))
//计时器
let timer=ref()
//天气最后更新时间
let lastUpdate=ref();
//三天
//今天
let date1=ref()
let high1=ref()
let low1=ref()
//风向
let direction1=ref()
//风速
let speed1=ref()
//天气
let weatherday1=ref()
let weathernight1=ref()
//明天
let date2=ref()
let high2=ref()
let low2=ref()
//风向
let direction2=ref()
//风速
let speed2=ref()
//天气
let weatherday2=ref()
let weathernight2=ref()
//后天
let date3=ref()
let high3=ref()
let low3=ref()
//风向
let direction3=ref()
//风速
let speed3=ref()
//天气
let weatherday3=ref()
let weathernight3=ref()
//穿指数
let dressing=ref()
//建议穿的衣服
let suggest=ref()
//当前温度
let temputureNow=ref()
//当前天气
let weatherNow=ref()
//降水量
let rainfall=ref()
//空气湿度
let humidity=ref()
//地点
let location=ref()
//交通指数
let traffic=ref()
let trafficDetail=ref()
//旅游指数
let sport=ref()
let sportDetail=ref()
onMounted(()=>{
//获取星期几
const date=new Date(moment().format("YYYY.MM.DD"));
const dayNum=date.getDay()
const dayOfWeek=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
const dayl=dayOfWeek[dayNum]
Day1.value=dayl
//请求城市数据
getData(localStorage.getItem('city')||'威海市')
//页面挂载红请求数据
timer.value=setInterval(()=>{
    time.value=moment().format("YYYY年MM月DD日 hh:mm:ss")
    time1.value=moment().format("YYYY年MM月DD日")
},1000)
})
//点击省份选择的时候让市选择变成省会
const set=()=>{
city.forEach((e)=>{
    if(e.name===Region.value){
         if(localStorage.getItem('province'))localStorage.removeItem('province')
         localStorage.setItem('province',e.name)
         region.value=e.city[0].name
         getData(region.value)
    }
})
}
//封装一个方法请求数据
async function getData(name:string){
let KEY;
for(let key in citys){
    let name1:string=citys[key]
    if(name===name1){
        KEY=key
        if (localStorage.getItem('city'))localStorage.removeItem('city')
        localStorage.setItem('city',citys[key])
    }
}
//请求生活指数
const date =await axios.get(`https://api.seniverse.com/v3/life/suggestion.json?key=S2iuEfpXM1ml93Gau&location=${KEY}&language=zh-Hans&days=5`)
dressing.value=date.data.results[0].suggestion[0].dressing.brief
suggest.value=date.data.results[0].suggestion[0].dressing.details
traffic.value=date.data.results[0].suggestion[0].traffic.brief
trafficDetail.value=date.data.results[0].suggestion[0].traffic.details
sport.value=date.data.results[0].suggestion[0].sport.brief
sportDetail.value=date.data.results[0].suggestion[0].sport.details
console.log(date.data.results[0].suggestion[0]);
//请求3天天气
const weather3 =await axios.get(`https://api.seniverse.com/v3/weather/daily.json?key=S2iuEfpXM1ml93Gau&location=${KEY}&language=zh-Hans&unit=c&start=-1&days=5`)
//今天
date1.value=weather3.data.results[0].daily[0].date
high1.value=weather3.data.results[0].daily[0].high
low1.value=weather3.data.results[0].daily[0].low
direction1.value=weather3.data.results[0].daily[0].wind_direction
speed1.value=weather3.data.results[0].daily[0].wind_speed
weatherday1.value=weather3.data.results[0].daily[0].text_day
weathernight1.value=weather3.data.results[0].daily[0].text_night
rainfall.value=weather3.data.results[0].daily[0].rainfall
humidity.value=weather3.data.results[0].daily[0].humidity
//明天
date2.value=weather3.data.results[0].daily[1].date
high2.value=weather3.data.results[0].daily[1].high
low2.value=weather3.data.results[0].daily[1].low
direction2.value=weather3.data.results[0].daily[1].wind_direction
speed2.value=weather3.data.results[0].daily[1].wind_speed
weatherday2.value=weather3.data.results[0].daily[1].text_day
weathernight2.value=weather3.data.results[0].daily[1].text_night
//后天
date3.value=weather3.data.results[0].daily[2].date
high3.value=weather3.data.results[0].daily[2].high
low3.value=weather3.data.results[0].daily[2].low
direction3.value=weather3.data.results[0].daily[2].wind_direction
speed3.value=weather3.data.results[0].daily[2].wind_speed
weatherday3.value=weather3.data.results[0].daily[2].text_day
weathernight3.value=weather3.data.results[0].daily[2].text_night
//请求天气情况
const data =await axios.get(`https://api.seniverse.com/v3/weather/now.json?key=S2iuEfpXM1ml93Gau&location=${KEY}&language=zh-Hans&unit=c`)
lastUpdate.value=data.data.results[0].last_update.substr(11,8)
location.value=data.data.results[0].location.name
temputureNow.value=data.data.results[0].now.temperature
weatherNow.value=data.data.results[0].now.text
}
onBeforeUnmount(()=>{
clearInterval(timer.value)
})
const webgl=ref(null)
onMounted(()=>{
const gl=webgl.value.getContext('webgl')
//顶点着色器
const vertexSource=`
attribute vec4 a_pos;
attribute vec2 a_coord;
varying vec2 v_coord;
void main(){
v_coord=a_coord;
gl_Position=a_pos;
}`
//片元着色器
const fragSource=`
// 所有float类型数据的精度是lowp
precision mediump float;
varying vec2 v_coord;
uniform vec2 st;
uniform float u_time;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform vec2 u_mouse;
const vec3 sunColor = vec3(1.5,.9,.7);
const vec3 lightColor = vec3(1.,.8,.7);
const vec3 darkColor = vec3(.2,.2,.3);
const vec3 baseSkyColor = vec3(.6,.7,.8);
const vec3 seaColor = vec3(.1,.3,.5);
const vec3 seaLight = vec3(.1,.45,.55);
//---------------------------------------

vec3 gamma( vec3 col, float g){
    return pow(col,vec3(g));
}
    
    
//clouds layered noise
float noiseLayer(vec2 uv){    
    float t = (u_time+u_mouse.x)/2.;
    uv.y -= t/5.; // clouds pass by
    float e = 0.;
    for(float j=1.; j<9.; j++){
        // shift each layer in different directions
        float timeOffset = t*mod(j,2.989)*.02 - t*.015;
        e += 1.-texture2D(iChannel0, uv * (j*1.789) + j*159.45 + timeOffset).r / j ;
    }
    e /= 3.5;
    return e;
}

//waves layered noise
float waterHeight(vec2 uv){
 float t = (u_time+u_mouse.x);
    float e = 0.;
    for(float j=1.; j<6.; j++){
        // shift each layer in different directions
        float timeOffset = t*mod(j,.789)*.1 - t*.05;
        e += texture2D(iChannel0, uv * (j*1.789) + j*159.45 + timeOffset).r / j ;
    }
    e /= 6.;
    return e;
}

vec3 waterNormals(vec2 uv){
    uv.x *= .25;
    float eps = 0.008;    
    vec3 n=vec3( waterHeight(uv) - waterHeight(uv+vec2(eps,0.)),
                 1.,
                 waterHeight(uv) - waterHeight(uv+vec2(0.,eps)));
   return normalize(n);
}	


vec3 drawSky( vec2 uv, vec2 uvInit){ 
        
	float clouds = noiseLayer(uv);
    
    // clouds normals
    float eps = 0.1;
    vec3 n = vec3(	clouds - noiseLayer(uv+vec2(eps,0.)),
            		-.3,
             		clouds - noiseLayer(uv+vec2(0.,eps)));
    n = normalize(n);
    
    // fake lighting
    float l = dot(n, normalize(vec3(uv.x,-.2,uv.y+.5)));
    l = clamp(l,0.,1.);
    
    // clouds color	(color gradient from light)
    vec3 cloudColor = mix(baseSkyColor, darkColor, length(uvInit)*1.7);
    cloudColor = mix( cloudColor,sunColor, l );
    
    // sky color (color gradient on Y)
    vec3 skyColor = mix(lightColor , baseSkyColor, clamp(uvInit.y*2.,0.,1.) );
    skyColor = mix ( skyColor, darkColor, clamp(uvInit.y*3.-.8,0.,1.) );
    skyColor = mix ( skyColor, sunColor, clamp(-uvInit.y*10.+1.1,0.,1.) );
    
	// draw sun
    if(length(uvInit-vec2(0.,.04) )<.03){
     	skyColor += vec3(2.,1.,.8);
    }
       
   	// mix clouds and sky
    float cloudMix = clamp(0.,1.,clouds*4.-8.);
    vec3 color = mix( cloudColor, skyColor, clamp(cloudMix,0.,1.) );
    
    // draw islands on horizon
    uvInit.y = abs(uvInit.y);
    float islandHeight = texture2D(iChannel0, uvInit.xx/2.+.97).r/15. - uvInit.y + .978;
    islandHeight += texture2D(iChannel0, uvInit.xx*2.).r/20.;
    islandHeight = clamp(floor(islandHeight),0.,1.);    
    vec3 landColor = mix(baseSkyColor, darkColor, length(uvInit)*1.5);
    color = mix(color, landColor, islandHeight);

    return color;
}

void main(){
    // center uv around horizon and manage ratio
	  vec2 uvInit = gl_FragCoord.xy / st.xy;
    uvInit.x -= .5;
    uvInit.x *= st.x/st.y;	
    uvInit.y -= 0.35;
    
    // perspective deform 
    vec2 uv = uvInit;
    uv.y -=.01;
	uv.y = abs(uv.y);
    uv.y = log(uv.y)/2.;
    uv.x *= 1.-uv.y;
    uv *= .2;
    
    vec3 col = vec3(1.,1.,1.);
    
     // draw water
    if(uvInit.y < 0.){       
       
         vec3 n = waterNormals(uv);
        
         // draw reflection of sky into water
         vec3 waterReflections = drawSky(uv+n.xz, uvInit+n.xz);

        // mask for fore-ground green light effect in water
         float transparency = dot(n, vec3(0.,.2,1.5));        
         transparency -= length ( (uvInit - vec2(0.,-.35)) * vec2(.2,1.) );
	      	transparency = (transparency*12.+1.5);
        
         // add foreground water effect
         waterReflections = mix( waterReflections, seaColor, clamp(transparency,0.,1.) );
         waterReflections = mix( waterReflections, seaLight, max(0.,transparency-1.5) );

        	col = waterReflections;
        
         // darken sea near horizon
        	col = mix(col, col*vec3(.6,.8,1.), -uv.y);
        
         //sun specular
         col += max(0.,.02-abs(uv.x+n.x))* 8000. * vec3(1.,.7,.3) * -uv.y * max(0.,-n.z);
        
     }else{      
        
         // sky
         col = drawSky(uv, uvInit);
     }
    
     // sun flare & vignette
     col += vec3(1.,.8,.6) * (0.55-length(uvInit)) ;
    
     // "exposure" adjust
     col *= .75;
     col = gamma(col,1.3);
    
    gl_FragColor = vec4(col,1.);
}


`
//初始化着色器
const program=initShader(gl,vertexSource,fragSource)
//加载纹理
const data=new Float32Array([
    1.0,1.0,1.0,  1.0,1.0,
    -1.0,1.0,1.0, 0.0,1.0,
    -1.0,-1.0,.5,0.0,0.0,
    1.0,1.0,1.0,  1.0,1.0,
    -1.0,-1.0,1.0,0.0,0.0,
    1.0,-1.0,.5, 1.0,0.0   //面1
])
console.log(data.BYTES_PER_ELEMENT);
const pos=gl.getAttribLocation(program,'a_pos')
const uv=gl.getAttribLocation(program,'a_coord')
const iChannel0=gl.getUniformLocation(program,'iChannel0')
const iChannel1=gl.getUniformLocation(program,'iChannel1')
const buffer=gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER,buffer)
gl.bufferData(gl.ARRAY_BUFFER,data,gl.STATIC_DRAW)
gl.vertexAttribPointer(pos,3,gl.FLOAT,false,4*5,0)
gl.enableVertexAttribArray(pos)
gl.vertexAttribPointer(uv,2,gl.FLOAT,false,4*5,4*3)
gl.enableVertexAttribArray(uv)
//创建纹理图片
const img=new Image()
img.src='../../../public/canvas/iChannel0.png'
img.onload=()=>{
const texture=gl.createTexture()
gl.activeTexture(gl.TEXTURE0)
gl.bindTexture(gl.TEXTURE_2D,texture)
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
//设置纹理贴图填充方式(纹理贴图像素尺寸大于顶点绘制区域像素尺寸)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
//设置纹理贴图填充方式(纹理贴图像素尺寸小于顶点绘制区域像素尺寸)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
//设置纹素格式,jpg格式对应gl.RGB
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
gl.uniform1i(iChannel0, 0);//纹理缓冲区单元TEXTURE0中的颜色数据传入片元着色器
// gl.getProgramInfoLog(program);
//开启深度测试
gl.enable(gl.DEPTH_TEST)
gl.drawArrays(gl.TRIANGLES,0,6)
}
const img1=new Image()
img1.src='../../../public/canvas/iChannel1.png'
img1.onload=()=>{
const texture=gl.createTexture()
gl.activeTexture(gl.TEXTURE0)
gl.bindTexture(gl.TEXTURE_2D,texture)
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
//设置纹理贴图填充方式(纹理贴图像素尺寸大于顶点绘制区域像素尺寸)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
//设置纹理贴图填充方式(纹理贴图像素尺寸小于顶点绘制区域像素尺寸)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
//设置纹素格式,jpg格式对应gl.RGB
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
gl.uniform1i(iChannel1, 1);//纹理缓冲区单元TEXTURE0中的颜色数据传入片元着色器
// gl.getProgramInfoLog(program);
//开启深度测试
gl.enable(gl.DEPTH_TEST)
gl.drawArrays(gl.TRIANGLES,0,6)
}
//把画布坐标传给他
const xy=gl.getUniformLocation(gl.program,'st')
gl.uniform2f(xy,1218,500)
//鼠标位置
webgl.value.addEventListener('mousemove',(e)=>{
const X=e.offsetX
const Y=-e.offsetY+670
//把X,Y坐标传给着色器
const mouse=gl.getUniformLocation(gl.program,'u_mouse')
gl.uniform2f(mouse,X,Y)

})
//传入时间
const time=gl.getUniformLocation(gl.program,'u_time')
let Time=0;
function loop(){
    Time+=0.01;
    gl.uniform1f(time,Time)
    requestAnimationFrame(loop)
    gl.drawArrays(gl.TRIANGLES,0,6)
}
loop()
})
function initShader(gl,vertexSource,fragSource){
const program=gl.createProgram()
const vsShader=gl.createShader(gl.VERTEX_SHADER)
const fsShader=gl.createShader(gl.FRAGMENT_SHADER)
gl.shaderSource(vsShader,vertexSource)
gl.shaderSource(fsShader,fragSource)
gl.compileShader(vsShader)
gl.compileShader(fsShader)
gl.attachShader(program,vsShader)
gl.attachShader(program,fsShader)
gl.linkProgram(program)
gl.useProgram(program)
gl.program=program
return program
}
</script>

<style lang="less" scoped>
div{
    .weatherTitle{
        display: flex;
    }
    h1{
          margin-top: 20px;
    }
    .box{
        position: relative;
        color:white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        padding: 0ch;
        border-radius:5px;
        .innerBox{
            width: 1160px;
            height: 390px;
            position: relative;
            z-index: 2;
            .topTime{
                display: flex;
                justify-content: space-between;
            }
            .centerWeather{
                display: flex;
                justify-content: space-between;
                margin-top: 40px;
                h1{
                    font-size: 80px;
                }
                sup{
                    font-size:40px
                }
                p{
                   font-size:30px
                }
            }
            .bottomWeather{
                  display: flex;
                  justify-content: space-between;
                  padding: 0px;
            }
            p{ 
                margin-top: 20px;
                margin-left: 32px;
                line-height: 25px;
            }
            
        }
       
    }
    .dressing{
        padding: 20px;
        margin-top: 20px;
    }
    .day3{
         padding: 20px;
        margin-top: 20px;
        div{
        display: flex;
        justify-content: space-between;
        .first{
            display: flex;
            flex-direction: column;
            margin-top: -20px;
            p{  
                padding-top: 20px;
            }
        }
        .second{
            display: flex;
            flex-direction: column;
            p{
                padding-top: 20px;
            }
        }
        .third{
            display: flex;
            flex-direction: column;
            p{
                padding-top: 20px;
            }
        }
        }
     
         
    }
}
.img{
width: 200px;
height:130px;
margin-top:40px;
background:url('@/assets/home/weather.png') no-repeat;
background-size: cover;
}
.img1{
width: 200px;
height:130px;
margin-top:40px;
background:url('@/assets/home/weather1.png') no-repeat;
background-size: cover;
}
.img2{
width: 200px;
height:130px;
margin-top:40px;
background:url('@/assets/home/weather2.png') no-repeat;
background-size: cover;
}
.img3{
width: 18%;
height:120px;
background:url('@/assets/home/weather1.png') no-repeat;
background-size: cover;
margin-left: -20px;
}

</style>




