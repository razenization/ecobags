from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.about, name='about'),
    path('shop/', views.index, name='shop'),
    path('media/', views.media, name='media'),
    path('calculate/', views.calc, name='calc'),
    path('order/', views.order, name='order'),
    path('register/', views.reg, name='register'),
    path('login/', auth_views.LoginView.as_view(redirect_authenticated_user=True), name='login'),
    path('reset/', auth_views.PasswordResetView.as_view(), name='reset'),
    path('profile/', views.profile, name='profile'),
    # path('', '')
    # path('accounts/login', LoginView.as_view(redirect_authenticated_user=True), name='register'),
]
