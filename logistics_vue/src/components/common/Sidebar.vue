<template>
    <div class="sidebar">
        <el-menu
                class="sidebar-el-menu"
                :default-active="onRoutes"
                :collapse="collapse"
                background-color="#324157"
                text-color="#bfcbd9"
                active-text-color="#20a0ff"
                unique-opened
                router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                    v-if="subItem.subs"
                                    :index="subItem.index"
                                    :key="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                        v-for="(threeItem,i) in subItem.subs"
                                        :key="i"
                                        :index="threeItem.index"
                                >{{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                    v-else
                                    :index="subItem.index"
                                    :key="subItem.index"
                            >{{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';

    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-lx-home',
                        index: 'dashboard',
                        title: '系统首页'
                    },
                    {
                        icon: 'el-icon-user',
                        index: '1',
                        title: '用户管理',
                        permission: true,
                        subs: [
                            {
                                index: 'add_user',
                                title: '添加用户',
                                permission: true
                            },
                            {
                                index: 'list_user',
                                title: '查看用户',
                                permission: true
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-truck',
                        index: '2',
                        title: '寄件管理',
                        permission: true,
                        subs: [
                            {
                                index: 'out_logistics',
                                title: '立即寄件',
                                permission: true
                            },
                            {
                                index: 'out_list',
                                title: '寄件查询',
                                permission: true
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-lx-calendar',
                        index: '3',
                        title: '快递代发',
                        subs: [
                            {
                                index: 'add_logistics',
                                title: '代发派单'
                            },
                            {
                                index: 'order_logistics',
                                title: '代发抢单'
                            },
                            {
                                index: 'list_logistics',
                                title: '待送达'
                            },
                            {
                                index: 'listed_logistics',
                                title: '已送达'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-document-checked',
                        index: '6',
                        title: '预约取件',
                        subs: [
                            {
                                index: 'pick_logistics',
                                title: '待预约'
                            },
                            {
                                index: 'picked_logistics',
                                title: '已预约'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-picture-outline',
                        index: '8',
                        title: '快递代取',
                        subs: [
                            {
                                index: 'take_lists',
                                title: '派单中'
                            },
                            {
                                index: 'taked_lists',
                                title: '已接单'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-s-promotion',
                        index: '10',
                        title: '我的快递',
                        subs: [
                            {
                                index: 'take_all',
                                title: '全部快递'
                            },
                            {
                                index: 'take_logistics',
                                title: '待取快递'
                            },
                            {
                                index: 'taked_logistics',
                                title: '待送达'
                            },
                            {
                                index: 'end_logistics',
                                title: '已签收'
                            }
                        ]
                    }
                ]
            };
        },
        computed: {
            onRoutes() {
                return this.$route.path.replace('/', '');
            }
        },
        created() {
            const role = localStorage.getItem('ms_role');
            if (role === "2") {
                this.items.splice(1, 1);
                this.items.splice(1, 1);
            }
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
                bus.$emit('collapse-content', msg);
            });
        }
    };
</script>

<style scoped>
    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom: 0;
        overflow-y: scroll;
    }

    .sidebar::-webkit-scrollbar {
        width: 0;
    }

    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 250px;
    }

    .sidebar > ul {
        height: 100%;
    }
</style>
