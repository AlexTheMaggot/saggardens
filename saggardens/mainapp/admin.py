from django.contrib import admin
from .models import *


class GardenAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title_en', ), }


class GrowtimeAdmin(admin.ModelAdmin):
    list_display = ('garden', 'year', 'nut', 'area', )


class NutvarietyAdmin(admin.ModelAdmin):
    list_display = ('garden', 'nut', 'area')


class_pairs = [
    [Growtime, GrowtimeAdmin],
    [Garden, GardenAdmin],
    [Nutvariety, NutvarietyAdmin],
]

class_single = [
    Nut,
    Photo,
]

for item in class_single:
    admin.site.register(item)

for item in class_pairs:
    admin.site.register(item[0], item[1])
