from django.http import HttpResponse

import json
import time

from django.views.decorators.csrf import csrf_exempt

from api.models import Admin, Logistics, LogisticsRecord


@csrf_exempt
def lists(request):
    """快递列表接口"""
    keywords = request.GET.get('keywords')
    searchType = request.GET.get('searchType')
    username = request.GET.get('username')
    admin_info = Admin.objects.get(username=username)
    offset = request.GET.get('pageIndex') if request.GET.get('pageIndex') is not None else 1
    offset = int(offset)
    limit = request.GET.get('pageSize') if request.GET.get('pageSize') is not None else 10
    limit = int(limit)
    start = (int(offset) - 1) * limit
    end = offset * limit
    if searchType is None or keywords is None or searchType == "" or keywords == "":
        if admin_info.role_id == 1:
            total = Logistics.objects.filter(orders__gt=0)
            rows = Logistics.objects.filter(orders__gt=0).order_by('-id')[start:end].values()
        else:
            total = Logistics.objects.filter(orders__gt=0, logistics_id=admin_info.id)
            rows = Logistics.objects.filter(orders__gt=0, logistics_id=admin_info.id).order_by('-id')[
                   start:end].values()
    else:
        total = None
        rows = None
        if admin_info.role_id == 1:
            if searchType == "1":
                total = Logistics.objects.filter(sn__icontains=keywords, orders__gt=0)
                rows = Logistics.objects.filter(sn__icontains=keywords, orders__gt=0).order_by('-id')[
                       start:end].values()

            if searchType == "2":
                total = Logistics.objects.filter(rname__contains=keywords, orders__gt=0)
                rows = Logistics.objects.filter(rname__contains=keywords, orders__gt=0).order_by('-id')[
                       start:end].values()

            if searchType == "3":
                total = Logistics.objects.filter(rtelephone__contains=keywords, orders__gt=0)
                rows = Logistics.objects.filter(rtelephone__contains=keywords, orders__gt=0).order_by('-id')[
                       start:end].values()
        else:
            if searchType == "1":
                total = Logistics.objects.filter(sn__icontains=keywords, orders__gt=0, logistics_id=admin_info.id)
                rows = Logistics.objects.filter(sn__icontains=keywords, orders__gt=0,
                                                logistics_id=admin_info.id).order_by('-id')[start:end].values()
            if searchType == "2":
                total = Logistics.objects.filter(rname__contains=keywords, orders__gt=0, logistics_id=admin_info.id)
                rows = Logistics.objects.filter(rname__contains=keywords, orders__gt=0,
                                                logistics_id=admin_info.id).order_by('-id')[start:end].values()
            if searchType == "3":
                total = Logistics.objects.filter(rtelephone__contains=keywords, orders__gt=0,
                                                 logistics_id=admin_info.id)
                rows = Logistics.objects.filter(rtelephone__contains=keywords, orders__gt=0,
                                                logistics_id=admin_info.id).order_by('-id')[start:end].values()
    rows = list(rows)
    count = len(total)
    for i, value in enumerate(rows):
        # 添加人
        rows[i]['username'] = ''
        # 添加人电话
        rows[i]['usertelephone'] = ''
        try:
            userinfo = Admin.objects.get(id=rows[i]['admin_id'])
            rows[i]['username'] = userinfo.username
            rows[i]['usertelephone'] = userinfo.telephone
        except:
            pass
        # 代取代发人
        rows[i]['daiqu'] = ''
        rows[i]['daifa'] = ''
        rows[i]['daiquphone'] = ''
        rows[i]['daifaphone'] = ''
        if rows[i]['outtypes'] == 1:
            try:
                daquinfo = Admin.objects.get(id=rows[i]['take_id'])
                rows[i]['daiqu'] = daquinfo.username
                rows[i]['daiquphone'] = daquinfo.telephone
            except:
                pass

        # 代发人
        if rows[i]['intypes'] == 1:
            try:
                daifainfo = Admin.objects.get(id=rows[i]['logistics_id'])
                rows[i]['daifa'] = daifainfo.username
                rows[i]['daifaphone'] = daifainfo.telephone
            except:
                pass
    data = {"code": 0, "msg": "", "count": count, "data": rows}
    return HttpResponse(json.dumps(data))


@csrf_exempt
def in_order(request):
    """快递入库"""
    if request.method == 'POST':
        state = 0
        msg = '入库失败'
        id = request.POST.get('id')
        updatetime = time.time()
        update = Logistics.objects.filter(id=id).update(
            orders=3,
            intime=updatetime,
            updatetime=updatetime
        )
        if update:
            state = 1
            msg = '入库成功'

        info = {"status": state, "msg": msg}
        return HttpResponse(json.dumps(info))


@csrf_exempt
def out_order(request):
    """快递出库"""
    if request.method == 'POST':
        state = 0
        msg = '出库失败'
        id = request.POST.get('id')
        updatetime = time.time()
        update = Logistics.objects.filter(id=id).update(
            orders=4,
            outtime=updatetime,
            updatetime=updatetime
        )
        if update:
            state = 1
            msg = '出库成功'

        info = {"status": state, "msg": msg}
        return HttpResponse(json.dumps(info))


@csrf_exempt
def arr_order(request):
    """网点揽收入库"""
    if request.method == 'POST':
        state = 0
        msg = '揽收失败'
        id = request.POST.get('id')
        updatetime = time.time()
        update = Logistics.objects.filter(id=id).update(
            orders=6,
            arrtime=updatetime,
            updatetime=updatetime
        )
        if update:
            state = 1
            msg = '揽收成功'

        info = {"status": state, "msg": msg}
        return HttpResponse(json.dumps(info))


@csrf_exempt
def logs(request):
    """更新物流"""
    if request.method == 'POST':
        state = 0
        msg = '更新失败'
        id = request.POST.get('id')
        logs = request.POST.get('logs')
        logtypes = request.POST.get('logtypes')
        addtime = time.time()
        updatetime = addtime
        insert = LogisticsRecord.objects.create(
            logistics_id=id,
            title=logs,
            addtime=addtime,
            updatetime=updatetime
        )
        if insert:
            # 判断是否在派件中
            if logtypes == "2":
                update = Logistics.objects.filter(id=id).update(
                    orders=5,
                    updatetime=updatetime
                )
                if update:
                    state = 1
                    msg = '更新成功'
            else:
                state = 1
                msg = '更新成功'

        info = {"status": state, "msg": msg}
        return HttpResponse(json.dumps(info))


@csrf_exempt
def loglists(request):
    """物流列表接口"""
    logistics_id = request.POST.get('id')
    rows = LogisticsRecord.objects.filter(logistics_id=logistics_id).order_by('-id').values('title', 'addtime')
    rows = list(rows)
    for i, value in enumerate(rows):
        rows[i]['addtime'] = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(float(rows[i]['addtime'])))
    data = {"code": 0, "msg": "", "data": rows}
    return HttpResponse(json.dumps(data))
