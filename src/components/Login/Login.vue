<template>
<div class="login" :style="winSize">
  <el-row>
    <h2 id="title">登录</h2>
  </el-row>
  <el-row>
    <el-col :span='24'>
      <div class="content">
        <el-form label-position="left" label-width="0px" class="demo-ruleForm card-box loginform" v-loading="login_actions.disabled" element-loading-text="正在登录..." :style="formOffset" :model='data' :rules="rule_data" ref='data'>
          <img src="../../assets/icon.png" class='icon' alt="">
          <el-form-item prop='username'>
            <el-input type="text" auto-complete="off" placeholder="账号" v-model='data.username' @keyup.native.enter="login('data')" class="input"></el-input>
          </el-form-item>
          <el-form-item prop='password'>
            <el-input type="password" auto-complete="off" placeholder="密码" v-model='data.password' @keyup.native.enter="login('data')"></el-input>

          </el-form-item>
          <el-form-item>
            <el-checkbox style="margin:0px;float:left" :checked='remumber.remumber_flag' v-model='remumber.remumber_flag'>记住密码</el-checkbox>
            <!-- <span id="register">没有账号？<a href="javascript:void(0)" onclick="toregister()">注册</a></span> -->
            <span id="forget">忘记密码？<el-button @click='toretrieve("data")' :plain="true" type="info" style="background-color:#F8F8F8;border:none;padding-left:5px;padding-right:5px;">找回</el-button></span>

          </el-form-item>

          <el-form-item style="width:100%;margin-bottom:12px;">
            <el-button @click='resetForm("data")' style="width:45%; magrin-left:20px;">重置</el-button>
            <el-button type="primary" @click='login("data")' style="width:45%;">登录</el-button>
          </el-form-item>
          <el-form-item style="margin-bottom:0px;">
              <span id="register">没有账号？<el-button @click='toregister("data")' :plain="true" type="info" style="background-color:#F8F8F8;border:none;padding-left:5px;padding-right:5px;color:#20A0FF;">点此注册</el-button></span>
          </el-form-item>
        </el-form>


      </div>
    </el-col>
  </el-row>
  <el-dialog size="tiny" :title="dialog2.title"   :visible.sync="dialog2.show_pass">
    <el-form style="margin:20px;width:80%;" label-width="100px" :model="dialog2.user_info" :rules="dialog2.user_info_rules" ref='user_info'>
      <el-form-item class='edit-form' label="邮箱" prop='email'>
        <el-input v-model="dialog2.user_info.email" placeholder='常用邮箱'></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
                <el-button @click="dialog2.show_pass = false">取 消</el-button>
                <el-button type="primary" @click="retrieve('user_info')">找  回</el-button>
    </span>
  </el-dialog>
  <el-dialog size="tiny" :title="dialog.title" :visible.sync="dialog.show_pass">
    <el-form style="margin:20px;width:80%;" label-width="100px" :model="dialog.user_info" :rules="dialog.user_info_rules" ref='user_info'>
      <el-form-item class='edit-form' label="邮箱" prop='email'>
        <el-input v-model="dialog.user_info.email" placeholder='常用邮箱'></el-input>
      </el-form-item>
      <el-form-item class='edit-form' label="用户名" prop='username'>
        <el-input v-model="dialog.user_info.username" placeholder='用户名'></el-input>
      </el-form-item>
      <el-form-item class='edit-form' label="新密码" prop='password'>
        <el-input type='password' placeholder='新密码' auto-complete='off' v-model="dialog.user_info.password"></el-input>
      </el-form-item>
      <el-form-item class='edit-form' label="确认密码" prop='confirmPass'>
        <el-input type='password' placeholder='确认密码' auto-complete='off' v-model="dialog.user_info.confirmPass"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
                <el-button @click="dialog.show_pass = false">取 消</el-button>
                <el-button type="primary" @click="register('user_info')">提 交</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script>
import LoginJs from './Login.js';
module.exports = LoginJs;
</script>

<style scoped lang='less'>
.login {
    background: #1F2D3D;

    #title {
        text-align: center;
        margin-top: 100px;
        color: #ffffff;
    }
    .card-box {
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.02);
        -webkit-border-radius: 10px;
        border-radius: 10px;
        -moz-border-radius: 10px;
        background-clip: padding-box;
        margin-bottom: 20px;
        background-color: #F8F8F8;
        border: 2px solid #8492A6;
    }

    .title {
        margin: 0 auto 40px;
        text-align: center;
        color: #505458;
    }

    .loginform {
        width: 350px;
        padding: 35px 35px 15px;
        top: 35px !important;
    }
    .content {
        text-align: center;
    }

    .icon {
        width: 120px;
        height: auto;
        margin: 0 auto 20px;

    }
    #forget{
        float: right;
        clean: right;
        color: #9a9a9a;
        line-height: 19px;
    }

    #register {
        text-align: center;
        color: #9a9a9a;
        line-height: 19px;
    }


}
</style>
