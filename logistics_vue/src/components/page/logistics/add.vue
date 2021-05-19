<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 表单
                </el-breadcrumb-item>
                <el-breadcrumb-item>快递代发派单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="add" :rules="rules" :model="form" label-width="160px">
                    <div class="crumbs">
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item>
                                <i class="el-icon-lx-notice"></i> 提示
                            </el-breadcrumb-item>
                            <el-breadcrumb-item>寄件基础信息</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <el-form-item label="寄件物品" prop="goods">
                        <el-input v-model="form.goods"></el-input>
                    </el-form-item>
                    <el-form-item label="物品重量（kg）" prop="weight">
                        <el-input v-model="form.weight" placeholder="单位为kg"></el-input>
                    </el-form-item>

                    <el-form-item label="物品数量" prop="number">
                        <el-input v-model="form.number"></el-input>
                    </el-form-item>

                    <el-form-item label="寄件价格（元）">
                        <el-input v-model="form.weight*form.unit" disabled=""></el-input>
                    </el-form-item>

                    <div class="crumbs">
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item>
                                <i class="el-icon-lx-notice"></i> 提示
                            </el-breadcrumb-item>
                            <el-breadcrumb-item>寄件人信息</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <el-form-item label="寄件人姓名" prop="mname">
                        <el-input v-model="form.mname"></el-input>
                    </el-form-item>
                    <el-form-item label="寄件人电话" prop="mtelephone">
                        <el-input v-model="form.mtelephone"></el-input>
                    </el-form-item>
                    <el-form-item label="寄件人地址" prop="maddress">
                        <el-input v-model="form.maddress"></el-input>
                    </el-form-item>
                    <div class="crumbs">
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item>
                                <i class="el-icon-lx-notice"></i> 提示
                            </el-breadcrumb-item>
                            <el-breadcrumb-item>收件人信息</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <el-form-item label="收件人姓名" prop="rname">
                        <el-input v-model="form.rname"></el-input>
                    </el-form-item>
                    <el-form-item label="收件人电话" prop="rtelephone">
                        <el-input v-model="form.rtelephone"></el-input>
                    </el-form-item>
                    <el-form-item label="收件人地址" prop="raddress">
                        <el-input v-model="form.raddress"></el-input>
                    </el-form-item>
                    <div class="crumbs">
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item>
                                <i class="el-icon-lx-notice"></i> 提示
                            </el-breadcrumb-item>
                            <el-breadcrumb-item>寄件方式</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <el-form-item label="寄件方式">
                        <el-radio-group v-model="form.intypes">
                            <el-radio label="1">派单代发</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="代发价格（元）" prop="service_price">
                        <el-input v-model="form.service_price"></el-input>
                    </el-form-item>
                    <el-form-item label="寄件备注">
                        <el-input type="textarea" rows="5" v-model="form.mark"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">表单提交</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import {validatePhone} from '../../../api/validator';
    import Qs from 'qs';

    export default {
        name: 'baseform',
        data() {
            return {
                form: {
                    unit: 0,
                    username: localStorage.getItem('ms_username'),
                    goods: '',
                    weight: '',
                    number: '',
                    price: '',
                    mname: '',
                    mtelephone: '',
                    maddress: '',
                    rname: '',
                    rtelephone: '',
                    raddress: '',
                    intypes: '1',
                    service_price: '',
                    orders: 0,
                    mark: ''
                },
                rules: {
                    goods: [{required: true, message: '请输入寄件物品', trigger: 'blur'}],
                    weight: [{required: true, message: '请输入物品重量', trigger: 'blur'}],
                    number: [{required: true, message: '请输入物品数量', trigger: 'blur'}],
                    mname: [{required: true, message: '请输入寄件人姓名', trigger: 'blur'}],
                    mtelephone: [
                        {required: true, message: '请输入寄件人电话', trigger: 'blur'},
                        {validator: validatePhone, message: '请输入正确的寄件人电话', trigger: 'blur'}
                    ],
                    maddress: [{required: true, message: '请输入寄件人地址', trigger: 'blur'}],
                    rname: [{required: true, message: '请输入收件人姓名', trigger: 'blur'}],
                    rtelephone: [
                        {required: true, message: '请输入收件人电话', trigger: 'blur'},
                        {validator: validatePhone, message: '请输入正确的收件人电话', trigger: 'blur'}
                    ],
                    raddress: [{required: true, message: '请输入收件人地址', trigger: 'blur'}],
                    service_price: [{required: true, message: '请输入代发价格', trigger: 'blur'}],
                },
            };
        },
        created() {
            this.unitInfo();
        },
        methods: {
            onSubmit() {
                this.$refs.add.validate(valid => {
                    if (valid) {
                        let v1 = this;
                        v1.form.price = v1.form.weight * v1.form.unit;
                        this.$axios({
                            method: "post",
                            url: "/logistics/save.html",
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
                                v1.$router.go(0);
                            } else {
                                v1.$message.error(res.data.msg);
                            }
                        });
                    }
                });
            },
            unitInfo() {
                let v1 = this;
                this.$axios({
                    method: "post",
                    url: "/logistics/unit.html",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: [function (data) {
                        return Qs.stringify(data)
                    }],
                    data: {username: localStorage.getItem('ms_username')}
                }).then(function (res) {
                    if (res.data.status === 1) {
                        v1.form.unit = res.data.info.unit;
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