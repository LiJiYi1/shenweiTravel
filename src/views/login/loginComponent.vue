<template>
<video style="position: absolute;width:100%;min-width:1218px"  loop muted autoplay>
  <source src="@/assets/login/index.mp4" type="video/webm" />
</video>
 <div id="container">
<!-- 用layout布局 -->
<el-row>
    <el-col :span="12" :xs=0 style="position: relative;top:25vh">
      <h1 style="font-size: 80px;margin-left:100px;letter-spacing: 10px;width:400px" >神威旅行</h1>
      <h2 style="font-size: 52px;margin-top:30px;margin-left:100px;letter-spacing: 10px;width:480px">下一站 海阔天空</h2>
    </el-col>
    <!-- 登录的模块 -->
    <el-col :span="12" :xs=24>
      <el-form class="login_form" :model="login" :rules="rules" ref="logins">
        <h1>Hellow!</h1>
        <h2 style="margin-top:12px;">{{language.sayHellow}}</h2>
        <!-- 账号 -->
        <el-form-item prop="username">
        <el-input :prefix-icon="User" v-model="login.username"/>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
      <el-input type="password" class="login_password" :prefix-icon="Lock" v-model="login.password" :show-password="true"/>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="captcha">
        <Captcha :language="language.refresh" @isEqual="equal"></Captcha>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
            <el-button :loading="loading" size="large" color="#ff9300" class="login" @click="userLogin">{{language.login}}</el-button>
        </el-form-item>
      </el-form>
    </el-col>
</el-row>

</div>

  
</template>

<script lang="ts" setup>
import { User,Lock} from '@element-plus/icons-vue'
import { reactive } from 'vue';
import { useUserStore } from '@/store/modules/user';
import { useRouter,useRoute} from 'vue-router';
import { ElNotification } from 'element-plus';
import { ref,computed } from 'vue';
import { getTime } from '@/utils/time';
//引入能切换语言的文字
import { useI18n } from 'vue-i18n'
import Captcha from './captcha.vue';
import {ElMessage} from 'element-plus';
//当前时间
const time=getTime()
//使用语言切换
const { t } = useI18n({
legacy: false,
locale:'zh-cn',
fallbackLocale:"zh-cn",
messages:{
    en: {
        time:time.message1,
        login:'login',
        sayHellow:'Welcome to the Shengwei Travel Platform!',
        refresh:"Refresh captcha"
    },
    'zh-cn': {
        time:time.message,
        login:'登录',
        sayHellow:'欢迎来到神威旅行平台!',
        refresh:"刷新验证码"
    }
}
})
const language={
  time:computed(() => t('time')),
  login:computed(() => t('login')),
  sayHellow:computed(() => t('sayHellow')),
  refresh:computed(() => t('refresh')),
}
//获取路由
const $route:string=useRoute().query.redirect  as string
//表单信息收集
const login=reactive({username:'shenweiBoy',password:'666666'})
//表单校验
const rules = reactive({
  username: [
   { required: true, message: '用户名不能为空!', trigger: 'change' },
   { min: 3, max: 11, message: '用户名长度要在3-5位之间!', trigger: 'change' },
  ],
  password:[
   { required: true, message: '密码不能为空!', trigger: 'change' },
   { min: 6, max: 12, message: '密码长度要在6-12位之间!', trigger: 'change' },
  ]
})
//拿到el-form的dom元素
let logins=ref()
//控制登录按钮加载开始
let loading=ref(false)
//把仓库实例化一下
const store = useUserStore()
const $router=useRouter()
//点击事件,点击后往仓库里发请求
const userLogin=async()=>{
//在请求之前做一次验证码校验
if(!flag.value){
  ElMessage.error('验证码错误!')
  return 
}
//校验表单里的账号密码符不符合规范
await logins.value.validate()
loading.value=true
//发送请求后,会返回一个带结果的promise
const result=store.loginPost(login)
result.then(()=>{
$router.push({path:$route||'home'})
//根据状态实现路由里面标题的语言切换
const languageType=localStorage.getItem('language')||'zh-cn'
const welcome=ref();
const welcome1=ref('欢迎回来!');
if (languageType === 'en') {
    welcome.value = getTime().message1
    welcome1.value='Welcome back!'
}
else {
    welcome.value = getTime().message
    welcome1.value='欢迎回来!'
}
ElNotification({
    type: 'success',
    title:`${welcome.value||getTime()},神威难藏泪!`,
    message:welcome1.value,
  })
//登录成功,加载效果消失
loading.value=false
}).catch((error)=>{
  //登录失败,加载效果消失
loading.value=false
  console.log(error);
  ElNotification({
    type: 'error',
    message:error.message,
  })

})


}

//是否相等变量
const flag=ref()
const equal=(Flag:boolean)=>{
flag.value=Flag
}



</script>

<style scoped lang="less">
#container{
    width: 100%;
    height: 100vh;
    background: url('../../assets/login/backgroundImage.jpg') no-repeat;
    background-size: cover;
    h1{
      color: white;
      letter-spacing: 6px;
    }
    h2{
        color: white;
        padding-bottom: 20px;
        letter-spacing: 10px;
    }
    .login_form{
        position:relative;
        padding: 40px;
        width: 60%;
        min-width: 400px;
        top:25vh;
        right:-5vw;
        border: 1px white solid;
        background-color: rgba(132, 132, 132, 0.1);
        backdrop-filter: blur(4px);
    }
    .login{
        width: 80vw;
    }
  
}



</style>