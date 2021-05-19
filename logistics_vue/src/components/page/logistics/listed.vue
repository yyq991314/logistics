<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 已送达快递列表
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-input v-model="query.keywords" placeholder="请输入寄件物品" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
            </div>
            <el-table
                    :data="tableData"
                    border
                    class="table"
                    ref="multipleTable"
                    header-cell-class-name="table-header"
                    @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
                <el-table-column prop="goods" label="物品" align="center"></el-table-column>
                <el-table-column prop="weight" label="重量（kg）" width="100" align="center"></el-table-column>
                <el-table-column prop="number" label="数量" width="60" align="center"></el-table-column>
                <el-table-column prop="mname" label="寄件人" width="80" align="center"></el-table-column>
                <el-table-column prop="mtelephone" label="寄件人电话" width="120" align="center"></el-table-column>
                <el-table-column label="状态" width="80" align="center">
                    <template slot-scope="scope">
                        <el-tag type="success" plain v-if="scope.row.orders==0">抢单中</el-tag>
                        <el-tag type="danger" plain v-if="scope.row.orders==1">已接单</el-tag>
                        <el-tag type="danger" plain v-if="scope.row.orders==2">待入库</el-tag>
                        <el-tag type="danger" plain v-if="scope.row.orders==3">待出库</el-tag>
                        <el-tag type="danger" plain v-if="scope.row.orders==4">运输中</el-tag>
                        <el-tag type="danger" plain v-if="scope.row.orders==5">派单中</el-tag>
                        <el-tag type="danger" plain v-if="scope.row.orders==6 && scope.row.outtypes==0">待取件</el-tag>
                        <el-tag type="danger" plain v-if="scope.row.orders==6 && scope.row.outtypes==1">派单中</el-tag>
                        <el-tag type="danger" plain v-if="scope.row.orders==7 && scope.row.outtypes==0">预约取件</el-tag>
                        <el-tag type="danger" plain v-if="scope.row.orders==7 && scope.row.outtypes==1">派单中</el-tag>
                        <el-tag type="danger" plain v-if="scope.row.orders==8">待送达</el-tag>
                        <el-tag type="danger" plain v-if="scope.row.orders==9">已签收</el-tag>
                    </template>
                </el-table-column>

                <el-table-column prop="addtime" label="订单时间" :formatter='handleDate'></el-table-column>
                <el-table-column label="操作" width="90" align="center">
                    <template slot-scope="scope">
                        <el-button
                                type="text"
                                icon="el-icon-view"
                                @click="handleView(scope.$index, scope.row)"
                        >详情
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                        background
                        layout="total, prev, pager, next"
                        :current-page="query.pageIndex"
                        :page-size="query.pageSize"
                        :total="pageTotal"
                        @current-change="handlePageChange"
                ></el-pagination>
            </div>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="订单详情" :visible.sync="editVisible" width="50%">
            <el-form ref="form" :model="form" label-width="120px">
                <div class="crumbs">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item>
                            <i class="el-icon-lx-notice" style="color:#409EFF;"></i> 提示
                        </el-breadcrumb-item>
                        <el-breadcrumb-item>添加人信息</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <el-form-item label="添加人">
                    <el-input v-model="form.username" readonly=""></el-input>
                </el-form-item>
                <el-form-item label="添加人手机">
                    <el-input v-model="form.usertelephone" readonly=""></el-input>
                </el-form-item>
                <div class="crumbs">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item>
                            <i class="el-icon-lx-notice" style="color:#409EFF;"></i> 提示
                        </el-breadcrumb-item>
                        <el-breadcrumb-item>寄件基础信息</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <el-form-item label="寄件物品">
                    <el-input v-model="form.goods" readonly=""></el-input>
                </el-form-item>
                <el-form-item label="物品重量（kg）">
                    <el-input v-model="form.weight" placeholder="单位为kg" readonly=""></el-input>
                </el-form-item>

                <el-form-item label="物品数量">
                    <el-input v-model="form.number" readonly=""></el-input>
                </el-form-item>

                <el-form-item label="寄件价格（元）">
                    <el-input v-model="form.price" readonly=""></el-input>
                </el-form-item>

                <div class="crumbs">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item>
                            <i class="el-icon-lx-notice" style="color:#E6A23C;"></i> 提示
                        </el-breadcrumb-item>
                        <el-breadcrumb-item>寄件人信息</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <el-form-item label="寄件人姓名">
                    <el-input v-model="form.mname" readonly=""></el-input>
                </el-form-item>
                <el-form-item label="寄件人电话">
                    <el-input v-model="form.mtelephone" readonly=""></el-input>
                </el-form-item>
                <el-form-item label="寄件人地址">
                    <el-input v-model="form.maddress" readonly=""></el-input>
                </el-form-item>
                <div class="crumbs">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item>
                            <i class="el-icon-lx-notice" style="color: #F56C6C;"></i> 提示
                        </el-breadcrumb-item>
                        <el-breadcrumb-item>收件人信息</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <el-form-item label="收件人姓名">
                    <el-input v-model="form.rname" readonly=""></el-input>
                </el-form-item>
                <el-form-item label="收件人电话">
                    <el-input v-model="form.rtelephone" readonly=""></el-input>
                </el-form-item>
                <el-form-item label="收件人地址">
                    <el-input v-model="form.raddress" readonly=""></el-input>
                </el-form-item>
                <div class="crumbs">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item>
                            <i class="el-icon-lx-notice" style="color:#67C23A;"></i> 提示
                        </el-breadcrumb-item>
                        <el-breadcrumb-item>寄件方式</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <el-form-item label="代发价格（元）">
                    <el-input v-model="form.service_price" readonly=""></el-input>
                </el-form-item>
                <el-form-item label="寄件备注">
                    <el-input type="textarea" rows="5" v-model="form.mark" readonly=""></el-input>
                </el-form-item>
                <div class="crumbs">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item>
                            <i class="el-icon-lx-notice" style="color:#67C23A;"></i> 提示
                        </el-breadcrumb-item>
                        <el-breadcrumb-item>代取代发信息</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <el-form-item label="代发人">
                    <el-input v-model="form.daifa" readonly=""></el-input>
                </el-form-item>
                <el-form-item label="代发人电话">
                    <el-input v-model="form.daifaphone" readonly=""></el-input>
                </el-form-item>
                <el-form-item label="代取人">
                    <el-input v-model="form.daiqu" readonly=""></el-input>
                </el-form-item>
                <el-form-item label="代取人电话">
                    <el-input v-model="form.daiquphone" readonly=""></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import Qs from 'qs';
    import {fetchListed, revOrder} from '../../../api/logistics';

    export default {
        name: 'basetable',
        data() {
            return {
                query: {
                    username: localStorage.getItem('ms_username'),
                    keywords: '',
                    pageIndex: 1,
                    pageSize: 10
                },
                tableData: [],
                multipleSelection: [],
                delList: [],
                editVisible: false,
                pageTotal: 0,
                form: {},
                idx: 0,
                id: 0,
                role: 0
            };
        },
        created() {
            this.getData();
            // this.handleSearch();
        },
        methods: {
            // 获取 easy-mock 的模拟数据
            getData() {
                fetchListed(this.query).then(res => {
                    this.tableData = res.data;
                    this.pageTotal = res.count;
                });
            },
            // 触发搜索按钮
            handleSearch() {
                this.$set(this.query, 'pageIndex', 1);
                this.getData();

                // let v1 = this
                //
                // this.$axios({
                //     method: "get",
                //     url: "/api/admin/GetLists.html",
                //     headers: {
                //       'Content-Type':'application/x-www-form-urlencoded'
                //     },
                //     transformRequest: [function (data) {
                //        return Qs.stringify(data)
                //     }],
                //     params: {pageIndex:1,pageSize:10}
                // }).then(function(res){
                //     if (res.status === 200){
                //         console.log(res);
                //         v1.tableData = res.data.data
                //     }else{
                //         v1.$message.error(res.data.msg);
                //     }
                // })
            },
            // 抢单操作
            ordersRop(index, row) {
                this.idx = index;
                this.id = row.id;
                this.form = row;
                this.$confirm('确定该快递物品已经送达快递网点？', '温馨提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    if (this.form.orders == 2) {
                        this.$message.error("该订单物品已经送达快递网点");
                        return false;
                    }
                    this.form.username = localStorage.getItem('ms_username');
                    revOrder(this.form).then(res => {
                        if (res.status == 1) {
                            this.$message.success(res.msg);
                            this.form.orders = 2;
                            this.tableData.splice(index, 1);
                            // this.$set(this.tableData, this.idx, this.form);
                        } else {
                            this.$message.error(res.msg);
                        }

                    });
                }).catch(() => {
                });
            },
            // 多选操作
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            delAllSelection() {
                const length = this.multipleSelection.length;
                let str = '';
                this.delList = this.delList.concat(this.multipleSelection);
                for (let i = 0; i < length; i++) {
                    str += this.multipleSelection[i].username + ' ';
                }
                this.$message.error(`删除了${str}`);
                this.multipleSelection = [];
            },
            // 详情操作
            handleView(index, row) {
                this.idx = index;
                this.id = row.id;
                this.form = row;
                this.editVisible = true;

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
                    console.log(res);
                    if (res.data.status === 1) {
                        v1.role = res.data.info.role_id;
                    } else {
                        if (res.data.msg == 'Signature has expired') {
                            v1.$message.error("登录过期");
                            v1.$router.push('/login');
                        } else {
                            v1.$message.error(res.data.msg);
                        }
                    }
                })
            },
            // 保存编辑
            saveEdit() {
                this.editVisible = false;
                // postData(this.form).then(res => {
                //     if (res.status == 1) {
                //         this.$message.success(res.msg);
                //         this.$set(this.tableData, this.idx, this.form);
                //     } else {
                //         this.$message.error(res.msg);
                //     }
                //
                // });

            },
            // 分页导航
            handlePageChange(val) {
                this.$set(this.query, 'pageIndex', val);
                this.getData();
                // let v1 = this
                // this.$axios({
                //     method: "get",
                //     url: "/api/admin/GetLists.html",
                //     headers: {
                //         'Content-Type':'application/x-www-form-urlencoded'
                //     },
                //     transformRequest: [function (data) {
                //         return Qs.stringify(data)
                //     }],
                //     params: {pageIndex:val,pageSize:10}
                // }).then(function(res){
                //     if (res.status === 200){
                //         console.log(res);
                //         v1.tableData = res.data.data
                //     }else{
                //         v1.$message.error(res.data.msg);
                //     }
                // })
            },
            //格式化时间戳
            handleDate(row, cellValue) {
                if (cellValue.property == "addtime") {
                    var date = new Date(row.addtime * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                } else {
                    var date = new Date(row.updatetime * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                }
                var Y = date.getFullYear() + '-';
                var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
                var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
                var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
                var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
                return Y + M + D + h + m + s;
            }
        }
    };
</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }

    .table {
        width: 100%;
        font-size: 14px;
    }

    .red {
        color: #ff0000;
    }

    .mr10 {
        margin-right: 10px;
    }

    .table-td-thumb {
        display: block;
        margin: auto;
        width: 40px;
        height: 40px;
    }
</style>
