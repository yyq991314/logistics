import time

from django.core import serializers
from django.http import HttpResponse, JsonResponse
import json

from django.views.decorators.csrf import csrf_exempt
from rest_framework_simplejwt.views import token_refresh

from api.models import Admin, Role


@csrf_exempt
def lists(request):
    keywords = request.GET.get('keywords')
    offset = request.GET.get('pageIndex') if request.GET.get('pageIndex') is not None else 1
    offset = int(offset)
    limit = request.GET.get('pageSize') if request.GET.get('pageSize') is not None else 10
    limit = int(limit)
    start = (int(offset) - 1) * limit
    end = offset * limit
    if keywords is None:
        total = Admin.objects.filter()
        rows = Admin.objects.filter().order_by('-id')[start:end].values()
    else:
        total = Admin.objects.filter(username__icontains=keywords)
        rows = Admin.objects.filter(username__icontains=keywords).order_by('-id')[start:end].values()
    rows = list(rows)
    count = len(total)
    for i, value in enumerate(rows):
        rows[i]['role'] = Role.objects.get(id=rows[i]['role_id']).title
    data = {"code": 0, "msg": "", "count": count, "data": rows}
    return HttpResponse(json.dumps(data))


@csrf_exempt
def info(request):
    username = request.POST.get('username')
    rows = Admin.objects.get(username=username)
    rows.role = Role.objects.get(id=rows.role_id).title
    status = 0
    msg = '获取用户信息失败'
    info = {}
    if rows:
        status = 1
        msg = "ok"
        if rows.avatar == "":
            rows.avatar = request.scheme + "://" + request.get_host() + "/static/img.jpg"
        info["id"] = rows.id
        info["username"] = rows.username
        info["avatar"] = rows.avatar
        info["gender"] = rows.gender
        info["email"] = rows.email
        info["role"] = rows.role
        info["role_id"] = rows.role_id
        info["nickname"] = rows.nickname
        info["telephone"] = rows.telephone
        info["wechat"] = rows.wechat
        info["qq"] = rows.qq
        info["mark"] = rows.mark
    ret = {"status": status, "msg": msg, "info": info}
    # return JsonResponse(json.dumps(rows), safe=False)
    return HttpResponse(json.dumps(ret))


@csrf_exempt
def save(request):
    if request.method == 'POST':
        state = 0
        msg = '添加失败'
        username = request.POST.get('username')
        nickname = request.POST.get('nickname')
        email = request.POST.get('email')
        telephone = request.POST.get('telephone')
        wechat = request.POST.get('wechat')
        qq = request.POST.get('qq')
        gender = request.POST.get('gender')
        status = request.POST.get('status')
        mark = request.POST.get('mark')
        role_id = request.POST.get('role_id')
        addtime = time.time()
        updatetime = time.time()
        try:
            Admin.objects.get(username=username)
            msg += ',登录名称已经存在！'
        except Admin.DoesNotExist:
            rest = Admin.objects.create(
                username=username,
                nickname=nickname,
                email=email,
                telephone=telephone,
                wechat=wechat,
                qq=qq,
                gender=gender,
                password=123456,
                status=status,
                role_id=role_id,
                addtime=addtime,
                updatetime=updatetime,
                mark=mark
            )
            if rest:
                state = 1
                msg = '添加成功'

        info = {"status": state, "msg": msg}
        return HttpResponse(json.dumps(info))


@csrf_exempt
def update(request):
    if request.method == 'POST':
        state = 0
        msg = '更新失败'
        id = request.POST.get('id')
        nickname = request.POST.get('nickname')
        telephone = request.POST.get('telephone')
        wechat = request.POST.get('wechat')
        qq = request.POST.get('qq')
        email = request.POST.get('email')
        gender = int(request.POST.get('gender'))
        status = request.POST.get('status', 1)
        mark = request.POST.get('mark')
        updatetime = time.time()
        update = Admin.objects.filter(id=id).update(
            nickname=nickname,
            telephone=telephone,
            wechat=wechat,
            qq=qq,
            email=email,
            gender=gender,
            status=status,
            mark=mark,
            updatetime=updatetime
        )
        if update:
            state = 1
            msg = '更新成功'

        info = {"status": state, "msg": msg}
        return HttpResponse(json.dumps(info))


@csrf_exempt
def update_avatar(request):
    if request.method == 'POST':
        state = 0
        msg = '更新失败'
        username = request.POST.get('username')
        avatar = request.POST.get('avatar')
        updatetime = time.time()
        update = Admin.objects.filter(username=username).update(
            avatar=avatar,
            updatetime=updatetime
        )
        if update:
            state = 1
            msg = '更新成功'

        info = {"status": state, "msg": msg}
        return HttpResponse(json.dumps(info))


@csrf_exempt
def password(request):
    if request.method == 'POST':
        state = 0
        msg = '修改失败'
        id = request.POST.get('id')
        admin = Admin.objects.get(id=id)
        password = request.POST.get('password')
        if admin.password != password:
            msg += ',原始密码有误！'
        else:
            newpassword = request.POST.get('newpassword')
            repassword = request.POST.get('repassword')
            if newpassword != repassword:
                msg += ',两次密码不一致！'
            else:
                update = Admin.objects.filter(id=id).update(password=newpassword)
                if update:
                    state = 1
                    msg = '修改成功！'
                else:
                    msg += ',数据库错误！'

        info = {"status": state, "msg": msg}
        return HttpResponse(json.dumps(info))


@csrf_exempt
def role(request):
    """角色列表接口"""
    rows = Role.objects.filter(status=1).order_by('-id').values('id', 'title')
    rows = list(rows)
    data = {"code": 0, "msg": "", "data": rows}
    return HttpResponse(json.dumps(data))


@csrf_exempt
def avatar(request):
    img = request.FILES['file']
    print(img)
    info = {'state': 1, 'msg': '上传成功'}
    return HttpResponse(json.dumps(info))
