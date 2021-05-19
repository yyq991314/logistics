<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 用户列表
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-input v-model="query.keywords" placeholder="请输入用户名" class="handle-input mr10"></el-input>
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
                <el-table-column prop="username" label="用户名" align="center"></el-table-column>
                <el-table-column prop="nickname" label="昵称" width="100" align="center"></el-table-column>
                <el-table-column prop="role" label="角色" width="80" align="center"></el-table-column>
                <el-table-column prop="telephone" label="电话" width="120" align="center"></el-table-column>
                <el-table-column label="状态" width="80" align="center">
                    <template slot-scope="scope">
                        <el-tag type="success" plain v-if="scope.row.status==0">禁用</el-tag>
                        <el-tag type="danger" plain v-if="scope.row.status==1">正常</el-tag>
                    </template>
                </el-table-column>

                <el-table-column prop="addtime" label="加入时间" :formatter='handleDate'></el-table-column>
                <el-table-column label="操作" width="160" align="center">
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
        <el-dialog title="用户详情" :visible.sync="editVisible" width="50%">
            <el-form ref="form" :model="form" label-width="120px">
                <div class="crumbs">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item>
                            <i class="el-icon-lx-notice" style="color:#409EFF;"></i> 提示
                        </el-breadcrumb-item>
                        <el-breadcrumb-item>用户信息</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <el-form-item label="用户名">
                    <el-input v-model="form.username" disabled=""></el-input>
                </el-form-item>
                <el-form-item label="昵称">
                    <el-input v-model="form.nickname"></el-input>
                </el-form-item>

                <el-form-item label="邮箱">
                    <el-input v-model="form.email"></el-input>
                </el-form-item>

                <el-form-item label="手机号">
                    <el-input v-model="form.telephone"></el-input>
                </el-form-item>
                <el-form-item label="微信号" prop="wechat">
                    <el-input v-model="form.wechat"></el-input>
                </el-form-item>
                <el-form-item label="QQ号" prop="qq">
                    <el-input v-model="form.qq"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio-group v-model="form.gender">
                        <el-radio label="1">男</el-radio>
                        <el-radio label="2">女</el-radio>
                        <el-radio label="3">保密</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="状态">
                    <el-radio-group v-model="form.status">
                        <el-radio label="1">正常</el-radio>
                        <el-radio label="0">禁用</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="描述">
                    <el-input type="textarea" rows="5" v-model="form.mark"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即更新</el-button>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="editVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import {fetchList, upUser} from '../../../api/user';

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
                id: 0
            };
        },
        created() {
            this.getData();
        },
        methods: {
            // 获取数据
            getData() {
                fetchList(this.query).then(res => {
                    this.tableData = res.data;
                    this.pageTotal = res.count;
                });
            },
            // 触发搜索按钮
            handleSearch() {
                this.$set(this.query, 'pageIndex', 1);
                this.getData();
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
                this.form.gender = this.form.gender + "";
                this.form.status = this.form.status + "";
                this.editVisible = true;
            },
            // 保存编辑
            saveEdit() {
                this.editVisible = false;
            },
            onSubmit() {
                this.$confirm('确定更新用户信息？', '温馨提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.form.username = localStorage.getItem('ms_username');
                    upUser(this.form).then(res => {
                        if (res.status == 1) {
                            this.$message.success(res.msg);
                        } else {
                            this.$message.error(res.msg);
                        }
                    });
                }).catch(() => {
                });
            },
            // 分页导航
            handlePageChange(val) {
                this.$set(this.query, 'pageIndex', val);
                this.getData();
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
