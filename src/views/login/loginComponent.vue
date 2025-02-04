<template>
 <div id="container">
<!-- 用layout布局 -->
<el-row>
    <el-col :span="12" :xs=0>
    </el-col>
    <!-- 登录的模块 -->
    <el-col :span="12" :xs=24>
      <el-form class="login_form">
        <h1>Hellow!</h1>
        <h2>欢迎来到,智慧物流管理系统。</h2>
        <el-form-item>
        <el-input :prefix-icon="User" v-model="login.uname"/>
        </el-form-item>
        <el-form-item>
      <el-input type="password" class="login_password" :prefix-icon="Lock" v-model="login.password" :show-password="true"/>
        </el-form-item>
        <el-form-item>
            <el-button size="large" color="#ff9300" class="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>

</div>

  
</template>

<script lang="ts" setup>
import { User,Lock} from '@element-plus/icons-vue'
import { reactive } from 'vue';
const login=reactive({uname:'admin',password:'666666'})
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