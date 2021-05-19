import random
import time

from django.core import serializers
from django.http import HttpResponse, JsonResponse
import json

from django.views.decorators.csrf import csrf_exempt

from api.models import Admin, Role, Logistics, LogisticsType


# 自动生成21位运单号
@csrf_exempt
def logisticssn(request):
    num = str(time.strftime('%Y%m%d%H%M%S', time.localtime(time.time()))) + str(time.time()).replace('.', '')[-7:]
    return num


@csrf_exempt
def index(request):
    """待发待抢单接口"""
    keywords = request.GET.get('keywords')
    offset = request.GET.get('pageIndex') if request.GET.get('pageIndex') is not None else 1
    offset = int(offset)
    limit = request.GET.get('pageSize') if request.GET.get('pageSize') is not None else 10
    limit = int(limit)
    start = (int(offset) - 1) * limit
    end = offset * limit
    if keywords is None:
        total = Logistics.objects.filter(intypes=1, orders=0)
        rows = Logistics.objects.filter(intypes=1, orders=0).order_by('-id')[start:end].values()
    else:
        total = Logistics.objects.filter(goods__icontains=keywords, intypes=1, orders=0)
        rows = Logistics.objects.filter(goods__icontains=keywords, intypes=1, orders=0).order_by('-id')[
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
def lists(request):
    """已接单接口"""
    keywords = request.GET.get('keywords')
    username = request.GET.get('username')
    admin_info = Admin.objects.get(username=username)
    offset = request.GET.get('pageIndex') if request.GET.get('pageIndex') is not None else 1
    offset = int(offset)
    limit = request.GET.get('pageSize') if request.GET.get('pageSize') is not None else 10
    limit = int(limit)
    start = (int(offset) - 1) * limit
    end = offset * limit
    if keywords is None:
        if admin_info.role_id == 1:
            total = Logistics.objects.filter(intypes=1, orders=1)
            rows = Logistics.objects.filter(intypes=1, orders=1).order_by('-id')[start:end].values()
        else:
            total = Logistics.objects.filter(intypes=1, orders=1, logistics_id=admin_info.id)
            rows = Logistics.objects.filter(intypes=1, orders=1, logistics_id=admin_info.id).order_by('-id')[
                   start:end].values()
    else:
        if admin_info.role_id == 1:
            total = Logistics.objects.filter(goods__icontains=keywords, intypes=1, orders=1)
            rows = Logistics.objects.filter(goods__icontains=keywords, intypes=1, orders=1).order_by('-id')[
                   start:end].values()
        else:
            total = Logistics.objects.filter(goods__icontains=keywords, intypes=1, orders=1, logistics_id=admin_info.id)
            rows = Logistics.objects.filter(goods__icontains=keywords, intypes=1, orders=1,
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
def listsed(request):
    keywords = request.GET.get('keywords')
    username = request.GET.get('username')
    admin_info = Admin.objects.get(username=username)
    offset = request.GET.get('pageIndex') if request.GET.get('pageIndex') is not None else 1
    offset = int(offset)
    limit = request.GET.get('pageSize') if request.GET.get('pageSize') is not None else 10
    limit = int(limit)
    start = (int(offset) - 1) * limit
    end = offset * limit
    if keywords is None:
        if admin_info.role_id == 1:
            total = Logistics.objects.filter(intypes=1, arrtype=1)
            rows = Logistics.objects.filter(intypes=1, arrtype=1).order_by('-id')[start:end].values()
        else:
            total = Logistics.objects.filter(intypes=1, arrtype=1, logistics_id=admin_info.id)
            rows = Logistics.objects.filter(intypes=1, arrtype=1, logistics_id=admin_info.id).order_by('-id')[
                   start:end].values()
    else:
        if admin_info.role_id == 1:
            total = Logistics.objects.filter(goods__icontains=keywords, intypes=1, arrtype=1)
            rows = Logistics.objects.filter(goods__icontains=keywords, intypes=1, arrtype=1).order_by('-id')[
                   start:end].values()
        else:
            total = Logistics.objects.filter(goods__icontains=keywords, intypes=1, arrtype=1,
                                             logistics_id=admin_info.id)
            rows = Logistics.objects.filter(goods__icontains=keywords, intypes=1, arrtype=1,
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
def unit(request):
    username = request.POST.get('username')
    status = 0
    msg = '获取模型信息失败'
    if username is None:
        ret = {"status": status, "msg": msg, "info": {}}
        return HttpResponse(json.dumps(ret))

    ltype = LogisticsType.objects.get(id=1)
    info = {}
    if ltype:
        status = 1
        msg = "ok"
        info["unit"] = ltype.unit
    ret = {"status": status, "msg": msg, "info": info}
    return HttpResponse(json.dumps(ret))


@csrf_exempt
def save(request):
    if request.method == 'POST':
        state = 0
        msg = '寄件失败'
        goods = request.POST.get('goods')
        username = request.POST.get('username')
        admin_id = Admin.objects.get(username=username).id
        weight = request.POST.get('weight')
        number = request.POST.get('number')
        price = float(request.POST.get('price'))
        # 计算快递费用
        ltype = LogisticsType.objects.get(id=1)
        lprice = float(weight) * float(ltype.unit)
        if lprice != price:
            msg += '，价格被篡改'
            info = {"status": state, "msg": msg}
            return HttpResponse(json.dumps(info))

        mname = request.POST.get('mname')
        mtelephone = request.POST.get('mtelephone')
        maddress = request.POST.get('maddress')
        rname = request.POST.get('rname')
        rtelephone = request.POST.get('rtelephone')
        raddress = request.POST.get('raddress')
        intypes = request.POST.get('intypes')
        service_price = request.POST.get('service_price')
        orders = request.POST.get('orders')
        mark = request.POST.get('mark')
        addtime = time.time()
        updatetime = addtime
        sn = logisticssn(request)

        insert = Logistics.objects.create(
            sn=sn,
            goods=goods,
            weight=weight,
            number=number,
            price=price,
            unit_price=float(ltype.unit),
            mname=mname,
            mtelephone=mtelephone,
            maddress=maddress,
            rname=rname,
            rtelephone=rtelephone,
            raddress=raddress,
            intypes=intypes,
            service_price=service_price,
            orders=orders,
            admin_id=admin_id,
            mark=mark,
            addtime=addtime,
            updatetime=updatetime
        )
        if insert:
            state = 1
            msg = '寄件成功'

        info = {"status": state, "msg": msg}
        return HttpResponse(json.dumps(info))


@csrf_exempt
def rop_order(request):
    if request.method == 'POST':
        state = 0
        msg = '抢单失败'
        id = request.POST.get('id')
        username = request.POST.get('username')
        logistics_id = Admin.objects.get(username=username).id
        updatetime = time.time()

        info = Logistics.objects.get(id=id)
        if info.admin_id == logistics_id:
            info = {"status": state, "msg": "自己不能接自己的派单快件"}
            return HttpResponse(json.dumps(info))
        update = Logistics.objects.filter(id=id).update(
            logistics_id=logistics_id,
            orders=1,
            updatetime=updatetime
        )
        if update:
            state = 1
            msg = '抢单成功'

        info = {"status": state, "msg": msg}
        return HttpResponse(json.dumps(info))


@csrf_exempt
def rev_order(request):
    """代发确认送达接口"""
    if request.method == 'POST':
        state = 0
        msg = '送达失败'
        id = request.POST.get('id')
        updatetime = time.time()
        update = Logistics.objects.filter(id=id).update(
            orders=2,
            arrtype=1,
            intime=updatetime,
            updatetime=updatetime
        )
        if update:
            state = 1
            msg = '送达成功'

        info = {"status": state, "msg": msg}
        return HttpResponse(json.dumps(info))