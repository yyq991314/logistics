<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">物流管理系统</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="请输入用户名">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="telephone">
                    <el-input v-model="param.telephone" placeholder="请输入手机号">
                        <el-button slot="prepend" icon="el-icon-message"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="email">
                    <el-input v-model="param.email" placeholder="请输入邮箱">
                        <el-button slot="prepend" icon="el-icon-message"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                            type="password"
                            placeholder="请输入密码"
                            v-model="param.password"
                            @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">注 册</el-button>
                </div>
                <p class="login-tips">已经有账号？<span class="login" @click="login()">返回登录</span></p>
            </el-form>
        </div>
    </div>
</template>

<script>

    import {validatePhone, validateEMail, checkLength} from '../../../api/validator';
    import Qs from 'qs';

    export default {
        data: function () {
            return {
                param: {
                    username: '',
                    telephone: '',
                    password: '',
                    email: '',
                },
                rules: {
                    username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                    telephone: [
                        {required: true, message: '请输入手机号', trigger: 'blur'},
                        {validator: validatePhone, message: '请输入正确的手机号', trigger: 'blur'}
                    ],
                    email: [
                        {required: true, message: '请输入邮箱', trigger: 'blur'},
                        {validator: validateEMail, message: '请输入正确的邮箱', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {validator: checkLength, message: '请输入至少6位数的密码', trigger: 'blur'}
                    ],
                },
            };
        },
        methods: {
            submitForm() {
                this.$refs.login.validate(valid => {
                    if (valid) {
                        let v1 = this;
                        this.$axios({
                            method: "post",
                            url: "/register/check.html",
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },
                            transformRequest: [function (data) {
                                return Qs.stringify(data)
                            }],
                            data: v1.param
                        }).then(function (res) {
                            if (res.data.status === 1) {
                                console.log(res);
                                v1.$message.success('注册成功');
                                v1.$router.push('/login');
                            } else {
                                v1.$message.error(res.data.msg);
                            }
                        })
                    }
                });
            },
            login() {
                this.$router.push('/login');
            },
        },
    };
</script>

<style scoped>
    .login-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        /*background-image: url(../../assets/img/login-bg.jpg);*/
        background-size: 100%;
    }

    .ms-title {
        width: 100%;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        color: #fff;
        border-bottom: 1px solid #ddd;
    }

    .ms-login {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 350px;
        margin: -190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.3);
        overflow: hidden;
    }

    .ms-content {
        padding: 30px 30px;
    }

    .login-btn {
        text-align: center;
    }

    .login-btn button {
        width: 100%;
        height: 36px;
        margin-bottom: 10px;
    }

    .login-tips {
        font-size: 12px;
        line-height: 30px;
        color: #fff;
    }

    .login {
        cursor: pointer;
        color: red;
    }
</style>