<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 用户
                </el-breadcrumb-item>
                <el-breadcrumb-item>修改密码</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form :model="form" :rules="rules" ref="password" label-width="80px">
                    <el-form-item label="用户名">
                        <el-input v-model="form.username" disabled=""></el-input>
                    </el-form-item>
                    <el-form-item label="原密码" prop="password">
                        <el-input v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="newpassword">
                        <el-input v-model="form.newpassword"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="repassword">
                        <el-input v-model="form.repassword"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即修改</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>

    import {checkLength} from '../../../api/validator';
    import Qs from 'qs';

    export default {
        name: 'baseform',
        data() {
            return {
                form: {
                    id: '',
                    username: '',
                    password: '',
                    newpassword: '',
                    repassword: ''
                },
                rules: {
                    password: [
                        {required: true, message: '请输入原始密码', trigger: 'blur'},
                        {validator: checkLength, message: '原始密码长度至少6位', trigger: 'blur'}
                    ],
                    newpassword: [
                        {required: true, message: '请输入新密码', trigger: 'blur'},
                        {validator: checkLength, message: '新密码长度至少6位', trigger: 'blur'}
                    ],
                    repassword: [
                        {required: true, message: '请输入确认密码', trigger: 'blur'},
                        {validator: checkLength, message: '确认密码长度至少6位', trigger: 'blur'}
                    ],
                },
            };
        },
        created() {
            this.userInfo();
        },
        methods: {
            onSubmit() {
                this.$refs.password.validate(valid => {
                    if (valid) {
                        let v1 = this;
                        this.$axios({
                            method: "post",
                            url: "/user/password.html",
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },
                            transformRequest: [function (data) {
                                return Qs.stringify(data)
                            }],
                            data: v1.form
                        }).then(function (res) {
                            if (res.data.status === 1) {
                                v1.$message.success(res.data.msg);
                                localStorage.removeItem('ms_username');
                                localStorage.removeItem('token');
                                v1.$router.push('/login');
                            } else {
                                v1.$message.error(res.data.msg);
                            }
                        });
                    }
                });


            },
            userInfo() {
                let v1 = this;
                this.$axios({
                    method: "post",
                    url: "/user/info.html",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: [function (data) {
                        return Qs.stringify(data)
                    }],
                    data: {username: localStorage.getItem('ms_username')}
                }).then(function (res) {
                    if (res.data.status === 1) {
                        v1.form = res.data.info;
                    } else {
                        if (res.data.msg == 'Signature has expired') {
                            v1.$message.error("登录过期");
                            v1.$router.push('/login');
                        } else {
                            v1.$message.error(res.data.msg);
                        }
                    }
                })
            }
        }
    };
</script>