from django.urls import path
from . import views

app_name = 'mainapp_ru'

urlpatterns = [
    path('', views.index, name='index'),
    path('in-progress/', views.in_progress, name='in_progress'),
    path('contacts/', views.contacts, name='contacts'),
    path('partners/', views.partners, name='partners'),
    path('about/', views.about, name='about'),
    path('gallery/', views.gallery, name='gallery'),
    path('videogallery/', views.videogallery, name='videogallery'),
    path('gradens/', views.garden_list, name='garden_list'),
    path('gardens/<slug:garden_slug>/', views.garden_detail, name='garden_detail'),
    path('news/', views.news_list, name='news_list'),
    path('news/<int:post_id>/', views.news_detail, name='news_detail'),
    path('products/', views.product_list, name='product_list'),
    path('products/<int:product_id>/', views.product_detail, name='product_detail'),
]
