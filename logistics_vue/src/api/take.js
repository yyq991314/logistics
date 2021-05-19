import request from '../utils/request';
import Qs from 'qs';

// 待预约取件列表
export const allList = query => {
    return request({
        url: '/take/all.html',
        method: 'get',
        params: query
    });
};

// 待预约取件列表
export const fetchList = query => {
    return request({
        url: '/take/lists.html',
        method: 'get',
        params: query
    });
};

// 待预约取件列表
export const fetchListed = query => {
    return request({
        url: '/take/listsed.html',
        method: 'get',
        params: query
    });
};

export const orderListed = query => {
    return request({
        url: '/take/ordered.html',
        method: 'get',
        params: query
    });
};

// 待预约取件列表
export const endList = query => {
    return request({
        url: '/take/end.html',
        method: 'get',
        params: query
    });
};

// 找人代取
export const takeOrder = query => {
    return request({
        url: '/take/take_order.html',
        method: 'post',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        },
        transformRequest: [function (query) {
           return Qs.stringify(query)
        }],
        data: query
    });
};

export const endOrder = query => {
    return request({
        url: '/take/end_order.html',
        method: 'post',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        },
        transformRequest: [function (query) {
           return Qs.stringify(query)
        }],
        data: query
    });
};

// 待预约取件列表
export const takeList = query => {
    return request({
        url: '/take/take_lists.html',
        method: 'get',
        params: query
    });
};

// 立即抢单
export const takeOut = query => {
    return request({
        url: '/take/take_out.html',
        method: 'post',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        },
        transformRequest: [function (query) {
           return Qs.stringify(query)
        }],
        data: query
    });
};