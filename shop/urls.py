from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('new_search', views.new_search, name='new_search'),
    path('subscribe', views.sub, name='subscribe'),
    path('goods', views.goods, name='goods'),
]
