import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
    return originalPush.call(this, location).catch(err => err)
};

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: {title: '自述文件'},
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/index/index.vue'),
                    meta: {title: '首页'}
                },
                {
                    path: '/avatar',
                    component: () => import(/* webpackChunkName: "avatar" */ '../components/page/admin/avatar.vue'),
                    meta: {title: '修改头像'}
                },
                {
                    path: '/info',
                    component: () => import(/* webpackChunkName: "info" */ '../components/page/admin/info.vue'),
                    meta: {title: '个人信息'}
                },
                {
                    path: '/password',
                    component: () => import(/* webpackChunkName: "password" */ '../components/page/admin/password.vue'),
                    meta: {title: '修改密码'}
                },
                {
                    path: '/add_user',
                    component: () => import(/* webpackChunkName: "add_user" */ '../components/page/admin/add.vue'),
                    meta: {title: '添加用户', permission: true}
                },
                {
                    path: '/list_user',
                    component: () => import(/* webpackChunkName: "list_user" */ '../components/page/admin/list.vue'),
                    meta: {title: '查看用户', permission: true}
                },
                {
                    path: '/add_logistics',
                    component: () => import(/* webpackChunkName: "add_logistics" */ '../components/page/logistics/add.vue'),
                    meta: {title: '代发派单'}
                },
                {
                    path: '/order_logistics',
                    component: () => import(/* webpackChunkName: "order_logistics" */ '../components/page/logistics/order.vue'),
                    meta: {title: '代发抢单'}
                },
                {
                    path: '/list_logistics',
                    component: () => import(/* webpackChunkName: "list_logistics" */ '../components/page/logistics/list.vue'),
                    meta: {title: '待送达'}
                },
                {
                    path: '/listed_logistics',
                    component: () => import(/* webpackChunkName: "listed_logistics" */ '../components/page/logistics/listed.vue'),
                    meta: {title: '已送达'}
                },
                {
                    path: '/out_logistics',
                    component: () => import(/* webpackChunkName: "out_logistics" */ '../components/page/out/add.vue'),
                    meta: {title: '立即寄件', permission: true},
                },
                {
                    path: '/out_list',
                    component: () => import(/* webpackChunkName: "out_logistics" */ '../components/page/out/list.vue'),
                    meta: {title: '寄件查询', permission: true}
                },
                {
                    path: '/pick_logistics',
                    component: () => import(/* webpackChunkName: "pick_logistics" */ '../components/page/pick/list.vue'),
                    meta: {title: '待预约'}
                },
                {
                    path: '/picked_logistics',
                    component: () => import(/* webpackChunkName: "picked_logistics" */ '../components/page/pick/listed.vue'),
                    meta: {title: '已预约'}
                },
                {
                    path: '/take_all',
                    component: () => import(/* webpackChunkName: "take_all" */ '../components/page/take/all.vue'),
                    meta: {title: '全部快递'}
                },
                {
                    path: '/take_logistics',
                    component: () => import(/* webpackChunkName: "take_logistics" */ '../components/page/take/list.vue'),
                    meta: {title: '待取快递'}
                },
                {
                    path: '/taked_logistics',
                    component: () => import(/* webpackChunkName: "taked_logistics" */ '../components/page/take/listed.vue'),
                    meta: {title: '待送达'}
                },
                {
                    path: '/end_logistics',
                    component: () => import(/* webpackChunkName: "end_logistics" */ '../components/page/take/end.vue'),
                    meta: {title: '已签收'}
                },
                {
                    path: '/take_lists',
                    component: () => import(/* webpackChunkName: "take_lists" */ '../components/page/take/take_lists.vue'),
                    meta: {title: '派单中'}
                },
                {
                    path: '/taked_lists',
                    component: () => import(/* webpackChunkName: "taked_lists" */ '../components/page/take/taked_lists.vue'),
                    meta: {title: '已接单'}
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: {title: '无权访问'}
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: {title: '页面不存在'}
                }
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/login/index.vue'),
            meta: {title: '登录中心'}
        }, {
            path: '/register',
            component: () => import(/* webpackChunkName: "register" */ '../components/page/register/index.vue'),
            meta: {title: '注册中心'}
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
