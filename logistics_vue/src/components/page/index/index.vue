<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="24">
                <el-row :gutter="20" class="mgb20">
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-wallet grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{form.incount}}</div>
                                    <div>今日入库</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-truck grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{form.outcount}}</div>
                                    <div>今日出库</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-bicycle grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{form.arrcount}}</div>
                                    <div>今日揽收</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="24">
                <el-card shadow="hover">
                    <schart ref="line" class="schart" canvasId="line" :options="options"></schart>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Schart from 'vue-schart';
    import Qs from 'qs';

    export default {
        name: 'dashboard',
        data() {
            return {
                name: localStorage.getItem('ms_username'),
                form:{},
                options: {
                    type: 'line',
                    title: {
                        text: '今日出入库趋势图'
                    },
                    labels: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
                    datasets: [
                        {
                            label: '入库',
                            data: [0]
                        },
                        {
                            label: '出库',
                            data: [0]
                        },
                        {
                            label: '揽收',
                            data: [0]
                        }
                    ]
                }
            };
        },
        components: {
            Schart
        },
        computed: {
            role() {
                return this.name === 'admin' ? '超级管理员' : '普通用户';
            }
        },
        created() {
            this.userInfo();
            this.getData();
            this.getTrend();
        },
        methods: {
            userInfo() {
                let v1 = this;
                this.$axios({
                    method: "post",
                    url: "/login/info.html",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: [function (data) {
                        return Qs.stringify(data)
                    }],
                    data: {username: v1.name}
                }).then(function (res) {
                    if (res.data.status === 0) {
                        localStorage.removeItem('ms_username');
                        localStorage.removeItem('token');
                        v1.$message.error("登录过期");
                        v1.$router.push('/login');
                    }
                })
            },
            getData() {
                let v1 = this;
                this.$axios({
                    method: "post",
                    url: "/datas/index.html",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: [function (data) {
                        return Qs.stringify(data)
                    }],
                    data: {username: v1.name}
                }).then(function (res) {
                    if (res.data.code === 0) {
                        v1.form = res.data;
                    }
                })
            },
            getTrend(){
                let v1 = this;
                this.$axios({
                    method: "post",
                    url: "/datas/trend.html",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: [function (data) {
                        return Qs.stringify(data)
                    }],
                    data: {username: v1.name}
                }).then(function (res) {
                    v1.options.datasets[0].data = res.data.incountarr;
                    v1.options.datasets[1].data = res.data.outcountarr;
                    v1.options.datasets[2].data = res.data.arrcountarr;
                })
            }
        }
    };
</script>


<style scoped>
    .el-row {
        margin-bottom: 20px;
    }

    .grid-content {
        display: flex;
        align-items: center;
        height: 100px;
    }

    .grid-cont-right {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #999;
    }

    .grid-num {
        font-size: 30px;
        font-weight: bold;
    }

    .grid-con-icon {
        font-size: 50px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: #fff;
    }

    .grid-con-1 .grid-con-icon {
        background: rgb(45, 140, 240);
    }

    .grid-con-1 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-2 .grid-con-icon {
        background: rgb(100, 213, 114);
    }

    .grid-con-2 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-3 .grid-con-icon {
        background: rgb(242, 94, 67);
    }

    .grid-con-3 .grid-num {
        color: rgb(242, 94, 67);
    }

    .user-info {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 2px solid #ccc;
        margin-bottom: 20px;
    }

    .user-avator {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    .user-info-cont {
        padding-left: 50px;
        flex: 1;
        font-size: 14px;
        color: #999;
    }

    .user-info-cont div:first-child {
        font-size: 30px;
        color: #222;
    }

    .user-info-list {
        font-size: 14px;
        color: #999;
        line-height: 25px;
    }

    .user-info-list span {
        margin-left: 70px;
    }

    .mgb20 {
        margin-bottom: 20px;
    }

    .todo-item {
        font-size: 14px;
    }

    .todo-item-del {
        text-decoration: line-through;
        color: #999;
    }

    .schart {
        width: 100%;
        height: 300px;
    }
</style>
