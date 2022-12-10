from django.urls import path
from . import views

app_name = 'mainapp_en'

urlpatterns = [
    path('', views.index, name='index')
]
