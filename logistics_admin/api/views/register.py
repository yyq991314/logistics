from django.http import HttpResponse

import json
import time

from django.views.decorators.csrf import csrf_exempt

from api.models import Admin


@csrf_exempt
def check(request):
    if request.method == 'POST':
        status = 0
        msg = '注册失败'
        username = request.POST.get('username')
        telephone = request.POST.get('telephone')
        password = request.POST.get('password')
        email = request.POST.get('email')
        addtime = time.time()
        updatetime = addtime
        try:
            Admin.objects.get(username=username)
            msg = '用户名已经存在'
        except Admin.DoesNotExist:
            insert = Admin.objects.create(
                username=username,
                telephone=telephone,
                password=password,
                email=email,
                role_id=2,
                status=1,
                addtime=addtime,
                updatetime=updatetime
            )
            if insert:
                status = 1
                msg = '注册成功'

        ret = {"status": status, "msg": msg}
        return HttpResponse(json.dumps(ret))
