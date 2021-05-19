import datetime
import time

from django.http import HttpResponse
import json

from django.views.decorators.csrf import csrf_exempt

from api.models import Logistics


@csrf_exempt
def index(request):
    """今日出入库统计接口"""
    today = datetime.date.today().timetuple()
    day_time = float(time.mktime(today))
    # 统计今日入库数量
    intotal = Logistics.objects.filter(intime__gte=day_time)
    incount = len(intotal)
    # 统计今日出库数量
    outtotal = Logistics.objects.filter(outtime__gte=day_time)
    outcount = len(outtotal)
    # 统计今日揽收数量
    arrtotal = Logistics.objects.filter(arrtime__gte=day_time)
    arrcount = len(arrtotal)
    data = {"code": 0, "msg": "", "incount": incount, "outcount": outcount, "arrcount": arrcount}
    return HttpResponse(json.dumps(data))


@csrf_exempt
def trend(request):
    """今日出入库趋势数据接口"""
    today = datetime.date.today().timetuple()
    day_time = float(time.mktime(today))
    now_time = time.time()
    start_time = day_time + 3600 * 7
    # 入库数量
    incountarr = []
    # 出库数量
    outcountarr = []
    # 揽收数量
    arrcountarr = []
    while start_time <= now_time:
        temp_time = start_time + 3600
        # 入库数量
        intotal = Logistics.objects.filter(intime__gte=start_time, intime__lte=temp_time).count()
        incountarr.append(intotal)
        # 出库数量
        outtotal = Logistics.objects.filter(outtime__gte=start_time, outtime__lte=temp_time).count()
        outcountarr.append(outtotal)
        # 揽收数量
        arrtotal = Logistics.objects.filter(arrtime__gte=start_time, arrtime__lte=temp_time).count()
        arrcountarr.append(arrtotal)

        start_time = temp_time

    data = {"code": 0, "msg": "", "incountarr": incountarr, "outcountarr": outcountarr, "arrcountarr": arrcountarr}
    return HttpResponse(json.dumps(data))
