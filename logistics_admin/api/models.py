from django.db import models


# Create your models here.
class Admin(models.Model):
    """用户模型"""
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=32)
    gender = models.SmallIntegerField(default=3)  # 1:男，2:女，3:保密
    status = models.SmallIntegerField(default=0)  # 0正常，1禁用
    addtime = models.FloatField(max_length=30, default=0.0)
    updatetime = models.FloatField(max_length=30, default=0.0)
    role_id = models.IntegerField(default=0)
    email = models.EmailField(default='')
    mark = models.TextField(default='')
    avatar = models.TextField(default='')
    nickname = models.CharField(default='', max_length=50)  # 昵称
    telephone = models.CharField(default='', max_length=15)  # 手机号
    wechat = models.CharField(default='', max_length=50)  # 微信号
    qq = models.CharField(default='', max_length=50)  # qq


class Role(models.Model):
    """角色模型"""
    title = models.CharField(max_length=50)
    status = models.SmallIntegerField(default=0)
    addtime = models.FloatField(max_length=30, default=0.0)
    updatetime = models.FloatField(max_length=30, default=0.0)
    mark = models.TextField(default='')


class LogisticsType(models.Model):
    """快递计价模型"""
    title = models.CharField(default='', max_length=15)
    unit = models.FloatField(default=0.0)  # 单价元
    status = models.SmallIntegerField(default=0)
    addtime = models.FloatField(max_length=30, default=0.0)
    updatetime = models.FloatField(max_length=30, default=0.0)


class Logistics(models.Model):
    """快递模型"""
    sn = models.CharField(default='', max_length=21)  # 运单号
    goods = models.CharField(default='', max_length=15)  # 物品名称
    number = models.FloatField(default=0.0, max_length=30)  # 物品数量
    unit_price = models.FloatField(default=0.0, max_length=30)  # 物品单价
    weight = models.FloatField(default=0.0, max_length=30)  # 物品重量
    mtelephone = models.CharField(default='', max_length=15)  # 寄件人电话
    mname = models.CharField(default='', max_length=50)  # 寄件人
    maddress = models.CharField(default='', max_length=255)  # 寄件人地址
    rtelephone = models.CharField(default='', max_length=15)  # 收件人电话
    rname = models.CharField(default='', max_length=50)  # 收件人
    raddress = models.CharField(default='', max_length=255)  # 收件人地址
    type_price = models.IntegerField(default=1)  # 计价模式
    price = models.FloatField(max_length=30, default=0.0)  # 寄件费用
    service_price = models.FloatField(max_length=30, default=0.0)  # 代发费用
    admin_id = models.IntegerField(default=0)  # 提交人
    logistics_id = models.IntegerField(default=0)  # 代发人
    intypes = models.SmallIntegerField(default=0)  # 0 自己发，1 找人代发
    outtypes = models.SmallIntegerField(default=0)  # 0 自己取，1 找人代取
    take_id = models.IntegerField(default=0)  # 代取人
    taketime = models.FloatField(max_length=30, default=0.0)  # 代取接单时间
    take_price = models.FloatField(max_length=30, default=0.0)  # 代取费用
    arrtype = models.IntegerField(default=0)  # 是否送达，0 未送达，1 已送达
    orders = models.SmallIntegerField(default=0)  # 0 未接单，1 已接单,2 待入库,3 待出库, 4 物流运输中，5 分发派送网点中， 6 待取件，7 已预约取件，8 代取已接单，9 已签收
    status = models.SmallIntegerField(default=0)  # 0 正常，1 禁用
    apptype = models.IntegerField(default=0)  # 是否送达，0 未预约，1 已预约
    apptime = models.FloatField(max_length=30, default=0.0)  # 预约取件时间
    appmark = models.TextField(default='')  # 预约取件备注
    intime = models.FloatField(max_length=30, default=0.0)  # 入库时间
    outtime = models.FloatField(max_length=30, default=0.0)  # 出库时间
    arrtime = models.FloatField(max_length=30, default=0.0)  # 网点揽收快递时间
    picktime = models.FloatField(max_length=30, default=0.0)  # 取件时间
    addtime = models.FloatField(max_length=30, default=0.0)
    updatetime = models.FloatField(max_length=30, default=0.0)
    mark = models.TextField(default='')  # 代发备注


class LogisticsRecord(models.Model):
    """快递物流记录模型"""
    logistics_id = models.IntegerField(default=0)  # 物流信息id
    title = models.CharField(default='', max_length=15)
    status = models.SmallIntegerField(default=0)
    addtime = models.FloatField(max_length=30, default=0.0)
    updatetime = models.FloatField(max_length=30, default=0.0)
