from django.urls import path
from api.views import login, register, user, logistics, out, pick, take, datas

urlpatterns = [
    # 登录路由
    path('login/check.html', login.check),
    path('login/info.html', login.info),
    # 注册路由
    path('register/check.html', register.check),
    # 用户路由
    path('user/lists.html', user.lists),
    path('user/info.html', user.info),
    path('user/save.html', user.save),
    path('user/update.html', user.update),
    path('user/password.html', user.password),
    path('user/role.html', user.role),
    path('user/avatar.html', user.avatar),
    path('user/update_avatar.html', user.update_avatar),
    # 物流路由
    path('logistics/index.html', logistics.index),
    path('logistics/unit.html', logistics.unit),
    path('logistics/save.html', logistics.save),
    path('logistics/lists.html', logistics.lists),
    path('logistics/listsed.html', logistics.listsed),
    path('logistics/rev_order.html', logistics.rev_order),
    path('logistics/rop_order.html', logistics.rop_order),
    # 快递路由
    path('out/in_order.html', out.in_order),
    path('out/out_order.html', out.out_order),
    path('out/lists.html', out.lists),
    path('out/logs.html', out.logs),
    path('out/loglists.html', out.loglists),
    path('out/arr_order.html', out.arr_order),
    # 待取快递路由
    path('pick/lists.html', pick.lists),
    path('pick/listsed.html', pick.listsed),
    path('pick/apptime.html', pick.apptime),
    # 待取快递路由
    path('take/all.html', take.all),
    path('take/lists.html', take.lists),
    path('take/listsed.html', take.listsed),
    path('take/end.html', take.end),
    path('take/take_lists.html', take.take_lists),
    path('take/take_order.html', take.take_order),
    path('take/take_out.html', take.take_out),
    path('take/end_order.html', take.end_order),
    path('take/ordered.html', take.ordered),
    # 今日出入库数据路由
    path('datas/index.html', datas.index),
    path('datas/trend.html', datas.trend),

]
