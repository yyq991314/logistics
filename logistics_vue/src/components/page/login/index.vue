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
                    <el-button type="primary" @click="submitForm()">登 录</el-button>
                </div>
                <p class="login-tips">没有账号？<span class="register" @click="register()">立即注册</span></p>
            </el-form>
        </div>
    </div>
</template>

<script>

    import {checkLength} from '../../../api/validator';
    import Qs from 'qs';

    export default {
        data: function () {
            return {
                param: {
                    username: '',
                    password: '',
                },
                rules: {
                    username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
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
                        // this.$axios.post("/login/check.html", this.param, {headers: {'X-CSRFToken': this.getCookie('csrftoken')}})
                        //     .then(response => {
                        //         console.log(response)
                        //     })
                        //     .catch(error => {
                        //         console.log(error);
                        //     });

                        let v1 = this;
                        this.$axios({
                            method: "post",
                            url: "/login/check.html",
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'X-CSRFToken': this.getCookie("csrftoken")
                            },
                            transformRequest: [function (data) {
                                return Qs.stringify(data)
                            }],
                            data: v1.param
                        }).then(function (res) {
                            if (res.data.status === 1) {
                                v1.$message.success('登录成功');
                                localStorage.setItem('ms_username', v1.param.username);
                                localStorage.setItem('ms_role', res.data.role);
                                localStorage.setItem('token', res.data.token);
                                document.cookie = 'csrftoken' + "=" + res.data.token;
                                v1.$router.push('/');
                            } else {
                                v1.$message.error(res.data.msg);
                            }
                        })
                    }
                });
            },
            register() {
                this.$router.push('/register');
            },
            getCookie(name) {
                var value = '; ' + document.cookie;
                var parts = value.split('; ' + name + '=');
                if (parts.length === 2) return parts.pop().split(';').shift()
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

    .register {
        cursor: pointer;
        color: red;
    }
</style>