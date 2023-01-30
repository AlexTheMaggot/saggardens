from django.contrib import admin
from .models import *


class GardenAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title_en', ), }


class GrowtimeAdmin(admin.ModelAdmin):
    list_display = ('garden', 'year', 'nut', 'area', )


class NutvarietyAdmin(admin.ModelAdmin):
    list_display = ('garden', 'nut', 'area')


admin.site.register(Nut)
admin.site.register(Growtime, GrowtimeAdmin)
admin.site.register(Garden, GardenAdmin)
admin.site.register(Nutvariety, NutvarietyAdmin)
