from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import *


class GardenAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title_en', ), }


class GrowtimeAdmin(admin.ModelAdmin):
    list_display = ('garden', 'year', 'nut', 'area', )


class NutvarietyAdmin(admin.ModelAdmin):
    list_display = ('garden', 'nut', 'area')


class PostAdmin(SummernoteModelAdmin):
    summernote_fields = ('text_ru', 'text_en', 'text_uzl', 'text_uzc')


class_pairs = [
    [Growtime, GrowtimeAdmin],
    [Garden, GardenAdmin],
    [Nutvariety, NutvarietyAdmin],
    [Post, PostAdmin],
]

class_single = [
    Nut,
    Photo,
    Author,
    Category,
    Product,
    Video
]

for item in class_single:
    admin.site.register(item)

for item in class_pairs:
    admin.site.register(item[0], item[1])
