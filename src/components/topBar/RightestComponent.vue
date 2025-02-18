<template>
    <div class="right">
<div>  
    <canvas style="border-radius:18px" ref="webgl"  width="180" hight="400"></canvas>
        <p style="font-family:ZCOOL KuaiLe,cursive; font-size:26.99px;color:#6D224F;width:180px;line-height:40px;margin-top:20px">血染沧海千层浪,红霞映水万点光!</p>

</div>
  
    
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
uniform vec2 u_mouse;

// Set to 2.0 for AA
#define AA 2.0

#define STEPS 80.0
#define MDIST 35.0
#define pi 3.1415926535
#define rot(a) mat2(cos(a),sin(a),-sin(a),cos(a))
#define sat(a) clamp(a,0.0,1.0)

#define ITERS_TRACE 9
#define ITERS_NORM 20

#define HOR_SCALE 1.1
#define OCC_SPEED 1.4
#define DX_DET 0.65

#define FREQ 0.6
#define HEIGHT_DIV 2.5
#define WEIGHT_SCL 0.8
#define FREQ_SCL 1.2
#define TIME_SCL 1.095
#define WAV_ROT 1.21
#define DRAG 0.9
#define SCRL_SPEED 1.5
vec2 scrollDir = vec2(1,1);


vec2 wavedx(vec2 wavPos, int iters, float t){
     vec2 dx = vec2(0);
     vec2 wavDir = vec2(1,0);
     float wavWeight = 1.0; 
    wavPos+= t*SCRL_SPEED*scrollDir;
    wavPos*= HOR_SCALE;
    float wavFreq = FREQ;
    float wavTime = OCC_SPEED*t;
     for(int i=0;i<20;i++){
        wavDir*=rot(WAV_ROT);
        float x = dot(wavDir,wavPos)*wavFreq+wavTime; 
        float result = exp(sin(x)-1.)*cos(x);
        // if(result>0.) foam+=result*0.3;
        result*=wavWeight;
        dx+= result*wavDir/pow(wavWeight,DX_DET); 
        wavFreq*= FREQ_SCL; 
        wavTime*= TIME_SCL;
        wavPos-= wavDir*result*DRAG; 
        wavWeight*= WEIGHT_SCL;
     }
    float wavSum = -(pow(WEIGHT_SCL,float(iters))-1.)*HEIGHT_DIV; 
    return dx/pow(wavSum,1.-DX_DET);
}

float wave(vec2 wavPos, int iters, float t){
    float wav = 0.0;
    vec2 wavDir = vec2(1,0);
    float wavWeight = 1.0;
    wavPos+= t*SCRL_SPEED*scrollDir;
    wavPos*= HOR_SCALE; 
    float wavFreq = FREQ;
    float wavTime = OCC_SPEED*t;
    for(int i = 0;i<9;i++){
        wavDir*=rot(WAV_ROT);
        float x = dot(wavDir,wavPos)*wavFreq+wavTime;
        float wave = exp(sin(x)-1.0)*wavWeight;
        wav+= wave;
        wavFreq*= FREQ_SCL;
        wavTime*= TIME_SCL;
        wavPos-= wavDir*wave*DRAG*cos(x);
        wavWeight*= WEIGHT_SCL;
    }
    float wavSum = -(pow(WEIGHT_SCL,float(iters))-1.)*HEIGHT_DIV; 
    return wav/wavSum;
}

vec3 norm(vec3 p){
    vec2 wav = -wavedx(p.xz, ITERS_NORM, u_time);
    return normalize(vec3(wav.x,1.0,wav.y));
}

float map(vec3 p){
    float a = 0.;
    int steps = ITERS_TRACE;
    p.y-= wave(p.xz,steps,u_time);
     a = p.y;
    return a;
}

vec3 pal(float t, vec3 a, vec3 b, vec3 c, vec3 d){
    return a+b*cos(2.0*pi*(c*t+d));
}
vec3 spc(float n,float bright){
    return pal(n,vec3(bright),vec3(0.5),vec3(1.0),vec3(0.0,0.33,0.67));
}
 vec2 sunrot = vec2(-0.3,-0.25);

// Change the color of the scene here, it better withs some colors than others
float spec = 0.13;

vec3 sky(vec3 rd){
     float px = 1.5/min(st.x,st.y);
     vec3 rdo = rd;
     float rad = 0.075;
     vec3 col = vec3(0);

    //Sun
    rd.yz*=rot(sunrot.y);
    rd.xz*=rot(sunrot.x);
    float sFade = 2.5/min(st.x,st.y);
    float zFade = rd.z*0.5+0.5;
    
    vec3 sc = spc(spec-0.1,0.6)*0.85;
    float a = length(rd.xy);
    vec3 sun=smoothstep(a-px-sFade,a+px+sFade,rad)*sc*zFade*2.;
    col+=sun;
    col+=rad/(rad+pow(a,1.7))*sc*zFade;
    col=col+mix(col,spc(spec+0.1,0.8),sat(1.0-length(col)))*0.2;
    
    // This code provides the implication of clouds :)
    float e = 0.;
    vec3 p = rdo;
    p.xz*=0.4;
    p.x+=u_time*0.007;
    for(float s=200.0;s>10.;s-=.8){
        p.xz*=rot(s);
        p+=s;
        e+=abs(dot(sin(p*s+u_time*0.02)/s,vec3(1.65)));
    }
    e*=smoothstep(0.5,0.4,e-0.095);
    
    col += (e)*smoothstep(-0.02,0.3,rdo.y)*0.8*(1.0-sun*3.75)*mix(sc,vec3(1),0.4);
    
    return (col);
   
}
void render(out vec4 fragColor, in vec2 fragCoord){
    vec2 uv = (fragCoord.xy-0.5*st.xy)/min(st.y,st.x);
    vec3 col = vec3(0);
    vec3 ro = vec3(0,2.25,-3)*1.1;
    bool click = u_mouse.y>0.;
    if(click){
    ro.yz*=rot(2.0*min(u_mouse.y/st.y-0.5,0.15));
    ro.zx*=rot(-7.0*(u_mouse.x/st.x-0.5));
    }
    vec3 lk = vec3(0,2,0);
    vec3 f = normalize(lk-ro);
    vec3 r = normalize(cross(vec3(0,1,0),f));
    vec3 rd = normalize(f*(0.9)+uv.x*r+uv.y*cross(f,r));

    float dO = 0.;
    bool hit = false;
    float d = 0.;
    vec3 p = ro;

    float tPln = -(ro.y-1.86)/rd.y;
    if(tPln>0.||click){
        if(!click)dO+=tPln;
        for(float i = 0.; i<STEPS; i++){
             p = ro+rd*dO;d = map(p);dO+=d;
            if(abs(d)<0.005||i>STEPS-2.0){
                hit = true;
                break;
            }
            if(dO>MDIST){
                dO = MDIST;
                break;
            }
        }
    }
    vec3 skyrd = sky(rd);
    if(hit){
    vec3 n = norm(p);
    vec3 rfl = reflect(rd,n);
    rfl.y = abs(rfl.y);
    vec3 rf = refract(rd,n,1./1.33); 
    vec3 sd = normalize(vec3(0,0.3,-1.0));
    float fres = clamp((pow(1. - max(0.0, dot(-n, rd)), 5.0)),0.0,1.0);

    vec3 sunDir = vec3(0,0.15,1.0);
    sunDir.xz*=rot(-sunrot.x);
    col += sky(rfl)*fres*0.9;
    float subRefract =pow(max(0.0, dot(rf,sunDir)),35.0);
    // This effect is exaggerated much more than is realistic because I like it :) 
    col += pow(spc(spec-0.1,0.5),vec3(2.2))*subRefract*2.5;
    vec3 rd2 = rd;
    rd2.xz*=rot(sunrot.x);
    vec3 waterCol = min(sat(spc(spec-0.1,0.4))*0.05*pow(min(p.y+0.5,1.8),4.0)*length(skyrd)*(rd2.z*0.3+0.7),1.0);
   
     waterCol = sat(spc(spec-0.1,0.4))*(0.4*pow(min(p.y*0.7+0.9,1.8),4.)*length(skyrd)*(rd2.z*0.15+0.85));
     col += waterCol*0.17;
     col+=smoothstep(0.95,1.55,wave(p.xz,25,u_time))*mix(waterCol*0.3,vec3(1),0.2)*0.2;

     col = mix(col,skyrd,dO/MDIST);
    }
     else{
         col += skyrd;
     }
    col = sat(col);
    col = pow(col,vec3(0.87));
    col *=1.0-0.8*pow(length(uv*vec2(0.8,1.)),2.7);
    fragColor = vec4(col,1.0);
    
}

#define ZERO min(0.0,u_time)
void main(){
     float px = 1.0/AA;
     vec4 col = vec4(0);
     vec4 fragColor;
    //  if(AA==1.0) {
    //  //render(col,gl_FragCoord.xy); 
    //  fragColor = col;
    //  return;
    //  }
    
    for(float i = 0.; i <AA; i++){
        for(float j = 0.; j <AA; j++){
             vec4 col2;
             vec2 coord = vec2(gl_FragCoord.x+px*i,gl_FragCoord.y+px*j);
             render(col2,coord);
             col.rgb+=col2.rgb;
        }
    }
    col/=AA*AA;
    gl_FragColor = vec4(col.xyz,1.);
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
//把画布坐标传给他
const xy=gl.getUniformLocation(gl.program,'st')
gl.uniform2f(xy,125,125)
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

</style>