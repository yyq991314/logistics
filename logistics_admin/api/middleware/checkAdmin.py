import jwt
from django.http import HttpResponse
from django.utils.deprecation import MiddlewareMixin
from django.shortcuts import HttpResponseRedirect
from rest_framework.utils import json
from rest_framework_jwt.authentication import jwt_decode_handler
from rest_framework_jwt.serializers import jwt_payload_handler, jwt_encode_handler

from api.models import Admin


# 后台登录判断中间件
class checkAdmin(MiddlewareMixin):

    def process_request(self, request):
        pattern = '/api/'
        path_url = request.path
        if path_url.startswith(pattern):
            urls_list = [
                '/api/login/check.html',
                '/api/register/check.html',
            ]
            if request.path not in urls_list:
                try:
                    token = request.META.get("HTTP_AUTHORIZATION")
                    if token != "null" and token is not None:
                        rows = jwt_decode_handler(token)
                        print(rows)
                    else:
                        ret = {"status": 0, "msg": "error"}
                        return HttpResponse(json.dumps(ret))
                except jwt.ExpiredSignatureError as e:
                    ret = {"status": 0, "msg": str(e)}
                    return HttpResponse(json.dumps(ret))

    def process_response(self, request, response):
        # print("当前url为：" + request.path)
        return response
