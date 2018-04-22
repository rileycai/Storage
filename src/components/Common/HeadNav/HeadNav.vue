<template>
<header class="head-nav">
  <el-row>
    <el-col :span="4" class='logo-container'>
      <img src="../../../assets/logo-sm.png" class='logo' alt="">
    </el-col>
            <el-col :span="4" :offset="16" class="userinfo">
                <span class='username'>
                    <el-dropdown trigger="click" @command='setDialogInfo'>
                        <span class="el-dropdown-link">
                            {{this.$store.state.user.userinfo.username==NULL?"admin":this.$store.state.user.userinfo.username}}<i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command='pass'>修改密码</el-dropdown-item>
                          </el-dropdown-menu>
                    </el-dropdown>
                </span>
                <i class="fa fa-sign-out logout" @click='logout'></i>
            </el-col>
        </el-row>

        <el-dialog size="tiny" :title="dialog.title"
            v-model="dialog.show_pass">
            <el-form style="margin:20px;width:80%;"
                label-width="100px"
                :model="dialog.user_info"
                :rules="dialog.user_info_rules"
                ref='user_info'>
                <el-form-item class='edit-form'
                    label="邮箱"
                    prop='email'>
                    <el-input v-model="dialog.user_info.email" disabled placeholder='常用邮箱'></el-input>
                </el-form-item>
                <el-form-item class='edit-form'
                    label="用户名称"
                    prop='username'>
                    <el-input v-model="dialog.user_info.username" disabled placeholder='用户名'></el-input>
                </el-form-item>
                <el-form-item class='edit-form'
                    label="当前密码"
                    prop='old_password'>
                    <el-input
                        type='password'
                        placeholder='当前密码'
                        auto-complete='off'
                        v-model="dialog.user_info.old_password"></el-input>
                </el-form-item>
                <el-form-item class='edit-form'
                    label="新密码"
                    prop='password'>
                    <el-input
                        type='password'
                        placeholder='新密码'
                        auto-complete='off'
                        v-model="dialog.user_info.password"></el-input>
                </el-form-item>
                <el-form-item class='edit-form'
                    label="确认密码"
                    prop='confirmPass'>
                    <el-input
                        type='password'
                        placeholder='确认密码'
                        auto-complete='off'
                        v-model="dialog.user_info.confirmPass"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialog.show_pass = false">取 消</el-button>
                <el-button type="primary" @click="updUserPass('user_info')">确 定</el-button>
            </span>
        </el-dialog>

    </header>
</template>

<script>
import HeadNavJs from './HeadNav.js';
export default HeadNavJs;
</script>

<style scoped lang='less'>
// .v-modal{
//     z-index:0 !important;
//     opacity: 0.0;
// }
.logo-container {
    height: 60px;
    vertical-align: middle;
    line-height: 36px;
    font-size: 18px;
    padding: 12px;
}
.logo {
    height: 36px;
    width: auto;
    // margin-left: 12px;
    // margin-top: 12px;
}

.fa-user {
    position: relative;
    top: -2px;
    margin-right: 4px;
}
.head-nav {
    width: 100%;
    height: 60px;
    background: #324057;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    color: #FFF;
    border-bottom: 1px solid #1F2D3D;

    .logout {
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        float: right;
        cursor: pointer;
    }
}
.userinfo {
    text-align: right;
}
.username {
    height: 60px;
    line-height: 60px;
    cursor: pointer;

    .el-dropdown {
        color: #FFF;
    }
}
</style>
