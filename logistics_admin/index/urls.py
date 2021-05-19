from django.urls import path
from index.views import index

urlpatterns = [
    # 首页路由
    path('', index.index),
    path('index.html', index.index),
]
