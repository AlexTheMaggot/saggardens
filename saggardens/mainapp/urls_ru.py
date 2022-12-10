from django.urls import path
from . import views

app_name = 'mainapp_ru'

urlpatterns = [
    path('', views.index, name='index')
]
