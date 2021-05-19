import request from '../utils/request';
import Qs from 'qs';

// 快递列表
export const fetchList = query => {
    return request({
        url: '/out/lists.html',
        method: 'get',
        params: query
    });
};

// 送达网点
export const revOrder = query => {
    return request({
        url: '/logistics/rev_order.html',
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

// 入库
export const inOrder = query => {
    return request({
        url: '/out/in_order.html',
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

// 出库
export const outOrder = query => {
    return request({
        url: '/out/out_order.html',
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

// 网点揽收入库
export const arrOrder = query => {
    return request({
        url: '/out/arr_order.html',
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
