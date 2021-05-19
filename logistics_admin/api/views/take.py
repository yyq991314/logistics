from django.http import HttpResponse

import json
import time

from django.views.decorators.csrf import csrf_exempt

from api.models import Admin, Logistics, LogisticsRecord


@csrf_exempt
def all(request):
    """我的快递列表接口"""
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
            total = Logistics.objects.filter(orders__gt=0, admin_id=admin_info.id)
            rows = Logistics.objects.filter(orders__gt=0, admin_id=admin_info.id).order_by('-id')[
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
                total = Logistics.objects.filter(sn__icontains=keywords, orders__gt=0, admin_id=admin_info.id)
                rows = Logistics.objects.filter(sn__icontains=keywords, orders__gt=0,
                                                admin_id=admin_info.id).order_by('-id')[start:end].values()
            if searchType == "2":
                total = Logistics.objects.filter(rname__contains=keywords, orders__gt=0, admin_id=admin_info.id)
                rows = Logistics.objects.filter(rname__contains=keywords, orders__gt=0,
                                                admin_id=admin_info.id).order_by('-id')[start:end].values()
            if searchType == "3":
                total = Logistics.objects.filter(rtelephone__contains=keywords, orders__gt=0,
                                                 admin_id=admin_info.id)
                rows = Logistics.objects.filter(rtelephone__contains=keywords, orders__gt=0,
                                                admin_id=admin_info.id).order_by('-id')[start:end].values()
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
def lists(request):
    """待取快递列表接口"""
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
            total = Logistics.objects.filter(orders__in=[6, 7, 8])
            rows = Logistics.objects.filter(orders__in=[6, 7, 8]).order_by('-id')[start:end].values()
        else:
            total = Logistics.objects.filter(orders__in=[6, 7, 8], admin_id=admin_info.id)
            rows = Logistics.objects.filter(orders__in=[6, 7, 8], admin_id=admin_info.id).order_by('-id')[
                   start:end].values()
    else:
        total = None
        rows = None
        if admin_info.role_id == 1:
            if searchType == "1":
                total = Logistics.objects.filter(sn__icontains=keywords, orders__in=[6, 7, 8])
                rows = Logistics.objects.filter(sn__icontains=keywords, orders__in=[6, 7, 8]).order_by('-id')[
                       start:end].values()

            if searchType == "2":
                total = Logistics.objects.filter(rname__contains=keywords, orders__in=[6, 7, 8])
                rows = Logistics.objects.filter(rname__contains=keywords, orders__in=[6, 7, 8]).order_by('-id')[
                       start:end].values()

            if searchType == "3":
                total = Logistics.objects.filter(rtelephone__contains=keywords, orders__in=[6, 7, 8])
                rows = Logistics.objects.filter(rtelephone__contains=keywords, orders__in=[6, 7, 8]).order_by('-id')[
                       start:end].values()
        else:
            if searchType == "1":
                total = Logistics.objects.filter(sn__icontains=keywords, orders__in=[6, 7, 8], admin_id=admin_info.id)
                rows = Logistics.objects.filter(sn__icontains=keywords, orders__in=[6, 7, 8],
                                                admin_id=admin_info.id).order_by('-id')[start:end].values()
            if searchType == "2":
                total = Logistics.objects.filter(rname__contains=keywords, orders__in=[6, 7, 8],
                                                 admin_id=admin_info.id)
                rows = Logistics.objects.filter(rname__contains=keywords, orders__in=[6, 7, 8],
                                                admin_id=admin_info.id).order_by('-id')[start:end].values()
            if searchType == "3":
                total = Logistics.objects.filter(rtelephone__contains=keywords, orders__in=[6, 7, 8],
                                                 admin_id=admin_info.id)
                rows = Logistics.objects.filter(rtelephone__contains=keywords, orders__in=[6, 7, 8],
                                                admin_id=admin_info.id).order_by('-id')[start:end].values()
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
def listsed(request):
    """待送达快递列表接口"""
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
            total = Logistics.objects.filter(orders__in=[8, 9], outtypes=1)
            rows = Logistics.objects.filter(orders__in=[8, 9], outtypes=1).order_by('-id')[start:end].values()
        else:
            total = Logistics.objects.filter(orders__in=[8, 9], outtypes=1, take_id=admin_info.id)
            rows = Logistics.objects.filter(orders__in=[8, 9], outtypes=1, take_id=admin_info.id).order_by('-id')[
                   start:end].values()
    else:
        total = None
        rows = None
        if admin_info.role_id == 1:
            if searchType == "1":
                total = Logistics.objects.filter(sn__icontains=keywords, orders__in=[8, 9], outtypes=1)
                rows = Logistics.objects.filter(sn__icontains=keywords, orders__in=[8, 9], outtypes=1).order_by('-id')[
                       start:end].values()

            if searchType == "2":
                total = Logistics.objects.filter(rname__contains=keywords, orders__in=[8, 9], outtypes=1)
                rows = Logistics.objects.filter(rname__contains=keywords, orders__in=[8, 9], outtypes=1).order_by(
                    '-id')[
                       start:end].values()

            if searchType == "3":
                total = Logistics.objects.filter(rtelephone__contains=keywords, orders__in=[8, 9], outtypes=1)
                rows = Logistics.objects.filter(rtelephone__contains=keywords, orders__in=[8, 9], outtypes=1).order_by(
                    '-id')[
                       start:end].values()
        else:
            if searchType == "1":
                total = Logistics.objects.filter(sn__icontains=keywords, orders__in=[8, 9], outtypes=1,
                                                 take_id=admin_info.id)
                rows = Logistics.objects.filter(sn__icontains=keywords, orders__in=[8, 9], outtypes=1,
                                                take_id=admin_info.id).order_by('-id')[start:end].values()
            if searchType == "2":
                total = Logistics.objects.filter(rname__contains=keywords, orders__in=[8, 9], outtypes=1,
                                                 take_id=admin_info.id)
                rows = Logistics.objects.filter(rname__contains=keywords, orders__in=[8, 9], outtypes=1,
                                                take_id=admin_info.id).order_by('-id')[start:end].values()
            if searchType == "3":
                total = Logistics.objects.filter(rtelephone__contains=keywords, orders__in=[8, 9], outtypes=1,
                                                 take_id=admin_info.id)
                rows = Logistics.objects.filter(rtelephone__contains=keywords, orders__in=[8, 9], outtypes=1,
                                                take_id=admin_info.id).order_by('-id')[start:end].values()
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
def ordered(request):
    """待送达快递列表接口"""
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
            total = Logistics.objects.filter(orders=8, outtypes=1)
            rows = Logistics.objects.filter(orders=8, outtypes=1).order_by('-id')[start:end].values()
        else:
            total = Logistics.objects.filter(orders=8, outtypes=1, admin_id=admin_info.id)
            rows = Logistics.objects.filter(orders=8, outtypes=1, admin_id=admin_info.id).order_by('-id')[
                   start:end].values()
    else:
        total = None
        rows = None
        if admin_info.role_id == 1:
            if searchType == "1":
                total = Logistics.objects.filter(sn__icontains=keywords, orders=8, outtypes=1)
                rows = Logistics.objects.filter(sn__icontains=keywords, orders=8, outtypes=1).order_by('-id')[
                       start:end].values()

            if searchType == "2":
                total = Logistics.objects.filter(rname__contains=keywords, orders=8, outtypes=1)
                rows = Logistics.objects.filter(rname__contains=keywords, orders=8, outtypes=1).order_by('-id')[
                       start:end].values()

            if searchType == "3":
                total = Logistics.objects.filter(rtelephone__contains=keywords, orders=8, outtypes=1)
                rows = Logistics.objects.filter(rtelephone__contains=keywords, orders=8, outtypes=1).order_by('-id')[
                       start:end].values()
        else:
            if searchType == "1":
                total = Logistics.objects.filter(sn__icontains=keywords, orders=8, outtypes=1, admin_id=admin_info.id)
                rows = Logistics.objects.filter(sn__icontains=keywords, orders=8, outtypes=1,
                                                admin_id=admin_info.id).order_by('-id')[start:end].values()
            if searchType == "2":
                total = Logistics.objects.filter(rname__contains=keywords, orders=8, outtypes=1, admin_id=admin_info.id)
                rows = Logistics.objects.filter(rname__contains=keywords, orders=8, outtypes=1,
                                                admin_id=admin_info.id).order_by('-id')[start:end].values()
            if searchType == "3":
                total = Logistics.objects.filter(rtelephone__contains=keywords, orders=8, outtypes=1,
                                                 admin_id=admin_info.id)
                rows = Logistics.objects.filter(rtelephone__contains=keywords, orders=8, outtypes=1,
                                                admin_id=admin_info.id).order_by('-id')[start:end].values()
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
def end(request):
    """已送达快递列表接口"""
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
            total = Logistics.objects.filter(orders=9)
            rows = Logistics.objects.filter(orders=9).order_by('-id')[start:end].values()
        else:
            total = Logistics.objects.filter(orders=9, admin_id=admin_info.id)
            rows = Logistics.objects.filter(orders=9, admin_id=admin_info.id).order_by('-id')[
                   start:end].values()
    else:
        total = None
        rows = None
        if admin_info.role_id == 1:
            if searchType == "1":
                total = Logistics.objects.filter(sn__icontains=keywords, orders=9)
                rows = Logistics.objects.filter(sn__icontains=keywords, orders=9).order_by('-id')[
                       start:end].values()

            if searchType == "2":
                total = Logistics.objects.filter(rname__contains=keywords, orders=9)
                rows = Logistics.objects.filter(rname__contains=keywords, orders=9).order_by('-id')[
                       start:end].values()

            if searchType == "3":
                total = Logistics.objects.filter(rtelephone__contains=keywords, orders=9)
                rows = Logistics.objects.filter(rtelephone__contains=keywords, orders=9).order_by('-id')[
                       start:end].values()
        else:
            if searchType == "1":
                total = Logistics.objects.filter(sn__icontains=keywords, orders=9, admin_id=admin_info.id)
                rows = Logistics.objects.filter(sn__icontains=keywords, orders=9,
                                                admin_id=admin_info.id).order_by('-id')[start:end].values()
            if searchType == "2":
                total = Logistics.objects.filter(rname__contains=keywords, orders=9, admin_id=admin_info.id)
                rows = Logistics.objects.filter(rname__contains=keywords, orders=9,
                                                admin_id=admin_info.id).order_by('-id')[start:end].values()
            if searchType == "3":
                total = Logistics.objects.filter(rtelephone__contains=keywords, orders=9,
                                                 admin_id=admin_info.id)
                rows = Logistics.objects.filter(rtelephone__contains=keywords, orders=9,
                                                admin_id=admin_info.id).order_by('-id')[start:end].values()
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
def take_lists(request):
    """待取快递派单接口"""
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
        total = Logistics.objects.filter(orders__in=[6, 7], outtypes=1)
        rows = Logistics.objects.filter(orders__in=[6, 7], outtypes=1).order_by('-id')[start:end].values()
    else:
        rows = []
        total = []
        if searchType == "1":
            total = Logistics.objects.filter(sn__icontains=keywords, orders__in=[6, 7], outtypes=1)
            rows = Logistics.objects.filter(sn__icontains=keywords, orders__in=[6, 7], outtypes=1).order_by('-id')[
                   start:end].values()

        if searchType == "2":
            total = Logistics.objects.filter(rname__contains=keywords, orders__in=[6, 7], outtypes=1)
            rows = Logistics.objects.filter(rname__contains=keywords, orders__in=[6, 7], outtypes=1).order_by('-id')[
                   start:end].values()

        if searchType == "3":
            total = Logistics.objects.filter(rtelephone__contains=keywords, orders__in=[6, 7], outtypes=1)
            rows = Logistics.objects.filter(rtelephone__contains=keywords, orders__in=[6, 7], outtypes=1).order_by(
                '-id')[
                   start:end].values()
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
def apptime(request):
    """预约取件"""
    if request.method == 'POST':
        state = 0
        msg = '预约失败'
        id = request.POST.get('id')
        apptime = request.POST.get('apptime')
        timeArray = time.strptime(apptime, "%Y-%m-%d %H:%M:%S")
        timeStamp = float(time.mktime(timeArray))
        appmark = request.POST.get('appmark')
        updatetime = time.time()
        update = Logistics.objects.filter(id=id).update(
            orders=7,
            apptime=timeStamp,
            appmark=appmark,
            updatetime=updatetime
        )
        if update:
            state = 1
            msg = '预约成功'

        info = {"status": state, "msg": msg}
        return HttpResponse(json.dumps(info))


@csrf_exempt
def take_order(request):
    """找人代取"""
    if request.method == 'POST':
        state = 0
        msg = '操作失败'
        id = request.POST.get('id')
        take_price = float(request.POST.get('take_price'))
        updatetime = time.time()
        update = Logistics.objects.filter(id=id).update(
            outtypes=1,
            take_price=take_price,
            updatetime=updatetime
        )
        if update:
            state = 1
            msg = '操作成功'
        info = {"status": state, "msg": msg}
        return HttpResponse(json.dumps(info))


@csrf_exempt
def take_out(request):
    """找人代取"""
    if request.method == 'POST':
        state = 0
        msg = '抢单失败'
        id = request.POST.get('id')
        username = request.POST.get('username')
        take_id = Admin.objects.get(username=username).id
        info = Logistics.objects.get(id=id)
        if info.admin_id == take_id:
            info = {"status": state, "msg": "不能抢自己的派单快递"}
            return HttpResponse(json.dumps(info))
        updatetime = time.time()
        update = Logistics.objects.filter(id=id).update(
            orders=8,
            take_id=take_id,
            taketime=updatetime,
            updatetime=updatetime
        )
        if update:
            state = 1
            msg = '抢单成功'

        info = {"status": state, "msg": msg}
        return HttpResponse(json.dumps(info))


@csrf_exempt
def end_order(request):
    """签收"""
    if request.method == 'POST':
        state = 0
        msg = '签收失败'
        id = request.POST.get('id')
        updatetime = time.time()
        update = Logistics.objects.filter(id=id).update(
            orders=9,
            updatetime=updatetime
        )
        if update:
            insert = LogisticsRecord.objects.create(
                logistics_id=id,
                title="签收成功",
                addtime=updatetime,
                updatetime=updatetime
            )
            if insert:
                state = 1
                msg = '签收成功'

        info = {"status": state, "msg": msg}
        return HttpResponse(json.dumps(info))
