<template>
   <div class="captcha-container">
            <!-- 用户输入框 -->
            <el-input @input="test" v-model="userInput" type="text" :maxlength="4" placeholder="请输入验证码" class="captcha-input"/>
            <!-- 显示验证码 -->
            <div class="captcha-display" v-html="captchaHTML" @click="generateCaptcha" ></div>
            <el-button style="margin-left:18px;margin-top:15px" color='#ffd900' @click="generateCaptcha">{{props.language}}</el-button>
    </div>
</template>

<script setup lang="ts">
import { ref,computed, onMounted } from 'vue';
//自定义事件
const $emit=defineEmits(['isEqual'])
//语言
const props=defineProps(["language"])
// 验证码文本
const captchaText = ref('');
// 用户输入
const userInput = ref('');
// 随机字体列表
const fonts = [
  'Arial', 'Verdana', 'Helvetica', 'Tahoma', 'Trebuchet MS', 'Times New Roman',
  'Georgia', 'Garamond', 'Courier New', 'Brush Script MT', 'Comic Sans MS'
];
// 生成随机颜色
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
// 生成随机旋转角度
function getRandomRotation() {
  return Math.floor(Math.random() * 60) - 30; // -30° 到 30°
}
// 生成随机字体
function getRandomFont() {
  return fonts[Math.floor(Math.random() * fonts.length)];
}
// 生成随机干扰线
function generateInterferenceLines() {
  const lines = [];
  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    const x1 = Math.floor(Math.random() * 100);
    const y1 = Math.floor(Math.random() * 100);
    const x2 = Math.floor(Math.random() * 100);
    const y2 = Math.floor(Math.random() * 100);
    lines.push(
      `<line x1="${x1}%" y1="${y1}%" x2="${x2}%" y2="${y2}%" stroke="${color}" stroke-width="2" />`
    );
  }
  return lines.join('');
}
// 生成随机噪点
function generateNoise() {
  const noise = [];
  for (let i = 0; i < 50; i++) {
    const color = getRandomColor();
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    noise.push(
      `<circle cx="${x}%" cy="${y}%" r="1" fill="${color}" />`
    );
  }
  return noise.join('');
}
// 生成随机曲线
function generateCurves() {
  const curves = [];
  for (let i = 0; i < 8; i++) {
    const color = getRandomColor();
    const x1 = Math.floor(Math.random() * 100);
    const y1 = Math.floor(Math.random() * 100);
    const x2 = Math.floor(Math.random() * 100);
    const y2 = Math.floor(Math.random() * 100);
    const cx1 = Math.floor(Math.random() * 100);
    const cy1 = Math.floor(Math.random() * 100);
    const cx2 = Math.floor(Math.random() * 100);
    const cy2 = Math.floor(Math.random() * 100);
    curves.push(
      `<path d="M ${x1}% ${y1}% C ${cx1}% ${cy1}%, ${cx2}% ${cy2}%, ${x2}% ${y2}%" stroke="${color}" stroke-width="6" fill="none" />`
    );
  }
  return curves.join('');
}
// 生成验证码的函数
function generateCaptcha() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 4; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  captchaText.value = captcha;
   //用户输入验证码是不是和显示的验证码一样
   const isEqual=userInput.value===captchaText.value;
   $emit('isEqual',isEqual)
}
// 生成带样式的验证码 HTML
const captchaHTML = computed(() => {
  const characters = captchaText.value
    .split('')
    .map(
      (char) =>
        `<span style="
          color: ${getRandomColor()};
          transform: rotate(${getRandomRotation()}deg);
          display: inline-block;
          font-size: ${Math.floor(Math.random() * 10) + 24}px;
          font-family: ${getRandomFont()};
          font-weight: bold;
          margin: 0 2px;
        ">${char}</span>`
    )
    .join('');

  const lines = generateInterferenceLines();
  const noise = generateNoise();
  const curves = generateCurves();

  return `
    <div style="position: relative;">
      <svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.3;">
        ${lines}
        ${noise}
        ${curves}
      </svg>
      <div style="position: relative; z-index: 1;">
        ${characters}
      </div>
    </div>
  `;
});
//输入时验证验证码
const test=()=>{
//用户输入验证码是不是和显示的验证码一样
const isEqual=userInput.value===captchaText.value;
$emit('isEqual',isEqual)

}

// 初始化时生成验证码
onMounted(()=>{
generateCaptcha();
})
</script>

<style lang="scss" scoped>
.captcha-container {
  display: flex;
}

.captcha-display {
  cursor: pointer;
  font-size: 24px;
  width: 110px;
  text-align: center;
  height: 45px;
  line-height: 45px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  user-select: none;
  background-color: white;
  border: 1px solid white;

}


.captcha-input {
  width: 130px;
  margin-right: 30px;
  font-size: 18px;
  height: 45px;
  border-radius: 4px;
}
</style>