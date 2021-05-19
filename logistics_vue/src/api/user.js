import request from '../utils/request';
import Qs from 'qs';

// 待预约取件列表
export const fetchList = query => {
    return request({
        url: '/user/lists.html',
        method: 'get',
        params: query
    });
};

// 找人代取
export const upUser = query => {
    return request({
        url: '/user/update.html',
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