from django.urls import path
from . import views

app_name = 'mainapp_uzl'

urlpatterns = [
    path('', views.index, name='index')
]
