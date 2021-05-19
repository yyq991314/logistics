import request from '../utils/request';
import Qs from 'qs';

export const fetchOrder = query => {
    return request({
        url: '/logistics/index.html',
        method: 'get',
        params: query
    });
};

export const fetchList = query => {
    return request({
        url: '/logistics/lists.html',
        method: 'get',
        params: query
    });
};

export const fetchListed = query => {
    return request({
        url: '/logistics/listsed.html',
        method: 'get',
        params: query
    });
};

export const ropOrder = query => {
    return request({
        url: '/logistics/rop_order.html',
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

export const deleteAdmin = query => {
    return request({
        url: '/admin/AdminDelete.html',
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
