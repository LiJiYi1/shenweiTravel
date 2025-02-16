<template>
    <div class="right">
    <canvas   ref="webgl"  wdith="800" hight="450"></canvas>
    <div class="rb"></div>
    </div>
  
</template>

<script setup>

import { onMounted,ref } from 'vue';
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
    float t = (u_time+u_mouse.x)/5.;
    uv.y -= t/60.; // clouds pass by
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
//设置纹素格式，jpg格式对应gl.RGB
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
//设置纹素格式，jpg格式对应gl.RGB
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
gl.uniform1i(iChannel1, 1);//纹理缓冲区单元TEXTURE0中的颜色数据传入片元着色器
// gl.getProgramInfoLog(program);
//开启深度测试
gl.enable(gl.DEPTH_TEST)
gl.drawArrays(gl.TRIANGLES,0,6)
}
//把画布坐标传给他
const xy=gl.getUniformLocation(gl.program,'st')
gl.uniform2f(xy,180,140)
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
.right{
  margin-left: 1277px;
}
.rb{
    width: 200px;
    height: 498px;
    background: linear-gradient(0.25turn, #002141, #2A937E, #002141);
    margin-top:-1px
}
</style>