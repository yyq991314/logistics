<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 快递列表
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-select v-model="query.searchType" placeholder="请选择搜索条件">
                    <el-option key="1" label="按收运单号" value="1"></el-option>
                    <el-option key="2" label="按收件人姓名" value="2"></el-option>
                    <el-option key="3" label="按收件人电话" value="3"></el-option>
                </el-select>
                <el-input v-model="query.keywords" placeholder="请输入关键字" class="handle-input mr10"></el-input>
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
                <el-table-column prop="sn" label="运单号" align="center"></el-table-column>
                <el-table-column prop="goods" label="物品" align="center"></el-table-column>
                <el-table-column prop="price" label="运费（元）" width="100" align="center"></el-table-column>
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

                <el-table-column label="操作" width="160" align="center">
                    <template slot-scope="scope">
                        <el-button
                                type="text"
                                icon="el-icon-view"
                                @click="handleView(scope.$index, scope.row)"
                        >详情
                        </el-button>
                        <el-button
                                type="text"
                                icon="el-icon-location-information"
                                @click="logOrder(scope.$index, scope.row)"
                        >查看物流
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
        <el-dialog :title="form._sn" :visible.sync="editVisible" width="50%">
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

        <!-- 物流弹出框 -->
        <el-dialog :title="form._sn" :visible.sync="logVisible" width="50%">
            <div class="crumbs">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>
                        <i class="el-icon-lx-notice" style="color:#E6A23C;"></i> 提示
                    </el-breadcrumb-item>
                    <el-breadcrumb-item>物流历史记录</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="block">
                <el-timeline>
                    <el-timeline-item v-for="(activity, index) in activities"
                                      :key="index"
                                      :timestamp="activity.addtime" placement="top">
                        <el-card>
                            <h4>{{activity.title}}</h4>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="logVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import {allList, arrOrder} from '../../../api/take';
    import Qs from 'qs';

    export default {
        name: 'basetable',
        data() {
            return {
                query: {
                    searchType: '',
                    username: localStorage.getItem('ms_username'),
                    keywords: '',
                    pageIndex: 1,
                    pageSize: 10
                },
                tableData: [],
                multipleSelection: [],
                delList: [],
                editVisible: false,
                logVisible: false,
                pageTotal: 0,
                form: {},
                idx: 0,
                id: 0,
                activities: []
            };
        },
        created() {
            this.getData();
        },
        methods: {
            // 获取 easy-mock 的模拟数据
            getData() {
                allList(this.query).then(res => {
                    this.tableData = res.data;
                    this.pageTotal = res.count;
                });
            },
            // 触发搜索按钮
            handleSearch() {
                if (this.query.searchType == '') {
                    this.$message.error("请选择搜索条件");
                    return false;
                }
                if (this.query.keywords == '') {
                    this.$message.error("请输入关键字");
                    return false;
                }
                this.$set(this.query, 'pageIndex', 1);
                this.getData();
            },
            // 多选操作
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            // 详情操作
            handleView(index, row) {
                this.idx = index;
                this.id = row.id;
                this.form = row;
                this.form._sn = "快递详情 " + this.form.sn;
                this.editVisible = true;
            },
            // 更新物流
            logOrder(index, row) {
                this.idx = index;
                this.id = row.id;
                this.form = row;
                this.form._sn = "物流信息 " + this.form.sn;
                this.logVisible = true;
                this.getLogLists();
            },
            // 获取物流信息
            getLogLists() {
                let v1 = this;
                this.$axios({
                    method: "post",
                    url: "/out/loglists.html",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: [function (data) {
                        return Qs.stringify(data)
                    }],
                    data: v1.form
                }).then(function (res) {
                    console.log(res);
                    if (res.data.code === 0) {
                        if (res.data.data.length == 0) {
                            res.data.data = [{
                                title : "暂无物流信息",
                                addtime : ""
                            }];
                        }
                        v1.activities = res.data.data;
                    } else {
                        v1.$message.error(res.data.msg);
                    }
                });
            },
            // 保存编辑
            saveEdit() {
                this.editVisible = false;
                this.logVisible = false;
            },
            // 分页
            handlePageChange(val) {
                this.$set(this.query, 'pageIndex', val);
                this.getData();
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
