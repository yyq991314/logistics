from django.shortcuts import redirect, reverse
from django.http import HttpResponse, JsonResponse
import json
from api.models import Admin, Role
from django.views.decorators.csrf import csrf_exempt
from rest_framework import permissions
from rest_framework_simplejwt import authentication
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    token_refresh)
from rest_framework_jwt.settings import api_settings
from rest_framework_jwt.utils import jwt_decode_handler


@csrf_exempt
def check(request):
    if request.method == 'POST':
        status = 0
        msg = '登录失败'
        username = request.POST.get('username')
        password = request.POST.get('password')
        token = ""
        role_id = 0
        try:
            rows = Admin.objects.get(username=username)
            if rows.password == password:
                if rows.status == 0:
                    msg = '用户被禁用'
                else:
                    request.session['username'] = request.POST.get('username')
                    request.session['password'] = request.POST.get('password')
                    status = 1
                    msg = '登录成功！'
                    role_id = rows.role_id
                    # 生成token
                    jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
                    jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
                    payload = jwt_payload_handler(rows)
                    token = jwt_encode_handler(payload)
                    # 解密token
                    toke_user = jwt_decode_handler(token)
            else:
                msg = '密码有误'
        except Admin.DoesNotExist:
            msg = '用户名不存在，请先进行注册'
        ret = {"status": status, "msg": msg, "token": token, "role": role_id}
        return HttpResponse(json.dumps(ret))


@csrf_exempt
def info(request):
    username = request.POST.get('username')
    rows = Admin.objects.get(username=username)
    info = Role.objects.get(id=rows.role_id).title
    status = 0
    msg = '获取用户信息失败'
    if rows:
        status = 1
        msg = "ok"
    ret = {"status": status, "msg": msg, "info": info}
    return HttpResponse(json.dumps(ret))
