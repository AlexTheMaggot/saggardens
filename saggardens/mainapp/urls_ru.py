from django.urls import path
from . import views

app_name = 'mainapp_ru'

urlpatterns = [
    path('', views.index, name='index'),
    path('contacts/', views.contacts, name='contacts'),
    path('about/', views.about, name='about'),
    path('gradens/', views.garden_list, name='garden_list'),
    path('gardens/<slug:garden_slug>/', views.garden_detail, name='garden_detail'),
]
