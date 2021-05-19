import request from '../utils/request';
import Qs from 'qs';

// 待预约取件列表
export const fetchList = query => {
    return request({
        url: '/pick/lists.html',
        method: 'get',
        params: query
    });
};

// 已预约取件列表
export const fetchListed = query => {
    return request({
        url: '/pick/listsed.html',
        method: 'get',
        params: query
    });
};