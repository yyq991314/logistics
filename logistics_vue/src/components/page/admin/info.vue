<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 用户
                </el-breadcrumb-item>
                <el-breadcrumb-item>基本信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form :model="form" :rules="rules" ref="info" label-width="80px">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="form.username" disabled=""></el-input>
                    </el-form-item>
                    <el-form-item label="昵称" prop="nickname">
                        <el-input v-model="form.nickname"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="form.email"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号" prop="telephone">
                        <el-input v-model="form.telephone"></el-input>
                    </el-form-item>
                    <el-form-item label="微信号" prop="wechat">
                        <el-input v-model="form.wechat"></el-input>
                    </el-form-item>
                    <el-form-item label="QQ号" prop="qq">
                        <el-input v-model="form.qq"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="gender">
                        <el-radio-group v-model="form.gender">
                            <el-radio label="1">男</el-radio>
                            <el-radio label="2">女</el-radio>
                            <el-radio label="3">保密</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="描述">
                        <el-input type="textarea" rows="5" v-model="form.mark"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">保存信息</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>

    import {validateEMail, validatePhone} from '../../../api/validator';

    import Qs from 'qs';

    export default {
        name: 'baseform',
        data() {
            return {
                form: {
                    id: '',
                    username: '',
                    nickname: '',
                    gender: '',
                    email: '',
                    telephone: '',
                    wechat: '',
                    qq: '',
                    mark: ''
                },
                rules: {
                    username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                    nickname: [{required: true, message: '请输入昵称', trigger: 'blur'}],
                    gender: [{required: true, message: '请选择性别', trigger: 'blur'}],
                    email: [
                        {required: true, message: '请输入邮箱', trigger: 'blur'},
                        {validator: validateEMail, message: '请输入正确的邮箱', trigger: 'blur'}
                    ],
                    telephone: [
                        {required: true, message: '请输入手机号', trigger: 'blur'},
                        {validator: validatePhone, message: '请输入正确的手机号', trigger: 'blur'}
                    ],
                    wechat: [{required: true, message: '请输入微信号', trigger: 'blur'}],
                    qq: [{required: true, message: '请输入QQ号', trigger: 'blur'}],
                },
            };
        },
        created() {
            this.userInfo();
        },
        methods: {
            onSubmit() {
                this.$refs.info.validate(valid => {
                    if (valid) {
                        let v1 = this;
                        this.$axios({
                            method: "post",
                            url: "/user/update.html",
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
                        v1.form.gender = v1.form.gender + "";
                        console.log(v1.form.gender);
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