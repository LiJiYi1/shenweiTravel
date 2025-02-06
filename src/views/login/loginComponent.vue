<template>
 <div id="container">
<!-- 用layout布局 -->
<el-row>
    <el-col :span="12" :xs=0>
    </el-col>
    <!-- 登录的模块 -->
    <el-col :span="12" :xs=24>
      <el-form class="login_form" :model="login" :rules="rules" ref="logins">
        <h1>Hellow!</h1>
        <h2>欢迎来到,智慧物流管理系统。</h2>
        <el-form-item prop="username">
        <el-input :prefix-icon="User" v-model="login.username"/>
        </el-form-item>
        <el-form-item prop="password">
      <el-input type="password" class="login_password" :prefix-icon="Lock" v-model="login.password" :show-password="true"/>
        </el-form-item>
        <el-form-item>
            <el-button :loading="loading" size="large" color="#ff9300" class="login" @click="userLogin">登录</el-button>
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
import { ref } from 'vue';
import { getTime } from '@/utils/time';
//获取路由
const $route:string=useRoute().query.redirect  as string
//表单信息收集
const login=reactive({username:'admin',password:'666666'})
//表单校验
const rules = reactive({
  username: [
   { required: true, message: '用户名不能为空!', trigger: 'change' },
   { min: 3, max: 5, message: '用户名长度要在3-5位之间!', trigger: 'change' },
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
//校验表单里的账号密码符不符合规范
await logins.value.validate()
loading.value=true
//发送请求后,会返回一个带结果的promise
const result=store.loginPost(login)
result.then(()=>{
$router.push({path:$route||'home'})
ElNotification({
    type: 'success',
    title:`${getTime()}好,神威难藏泪!`,
    message:`欢迎回来!`,
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
</script>

<style scoped lang="less">
#container{
    width: 100%;
    height: 100vh;
    background: url('../../assets/login/backgroundImage.jpg') no-repeat;
    background-size: cover;
    h1{
      color: white;
    }
    h2{
        color: white;
        padding-bottom: 20px;
    }
    .login_form{
        position:relative;
        padding: 40px;
        width: 60%;
        top:30vh;
        right:-5vw;
        border: 1px white solid;
        background-color: rgba(255, 47, 6, 0.1);
    }
    .login{
        width: 80vw;
    }
  
}
</style>