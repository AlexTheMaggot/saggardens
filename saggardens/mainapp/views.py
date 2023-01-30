import requests
from django.shortcuts import render, redirect, get_object_or_404
from saggardens.config import *
from .models import Garden


def index(request):
    if '/en/' in request.path:
        template = 'mainapp/index_en.html'
    elif '/uzl/' in request.path:
        template = 'mainapp/index_uzl.html'
    elif '/uzc/' in request.path:
        template = 'mainapp/index_uzc.html'
    else:
        template = 'mainapp/index_ru.html'
    return render(request, template)


def contacts(request):
    if '/en/' in request.path:
        template = 'mainapp/contacts_en.html'
        redirect_link = 'mainapp_en:index'
    elif '/uzl/' in request.path:
        template = 'mainapp/contacts_uzl.html'
        redirect_link = 'mainapp_uzl:index'
    elif '/uzc/' in request.path:
        template = 'mainapp/contacts_uzc.html'
        redirect_link = 'mainapp_uzc:index'
    else:
        template = 'mainapp/contacts_ru.html'
        redirect_link = 'mainapp_ru:index'
    if request.method == 'GET':
        return render(request, template)
    elif request.method == 'POST':
        url = 'https://api.telegram.org/bot'
        method = '/sendMessage?chat_id=-1001637210214&text='
        name = request.POST['name']
        email = request.POST['email']
        text = 'Новая заявка!\n\nИмя: ' + name + '\nПочта: ' + email
        if request.POST['phone']:
            text += '\nТелефон: ' + str(request.POST['phone'])
        if request.POST['message']:
            text += '\nСообщение: ' + request.POST['message']
        r = requests.get(url + TELEGRAM_BOT_TOKEN + method + text)
        return redirect(redirect_link)


def about(request):
    if '/en/' in request.path:
        template = 'mainapp/about_en.html'
    elif '/uzl/' in request.path:
        template = 'mainapp/about_uzl.html'
    elif '/uzc/' in request.path:
        template = 'mainapp/about_uzc.html'
    else:
        template = 'mainapp/about_ru.html'
    return render(request, template)


def garden_list(request):
    context = {
        'gardens': Garden.objects.all(),
    }
    if '/en/' in request.path:
        template = 'mainapp/garden_list_en.html'
    elif '/uzl/' in request.path:
        template = 'mainapp/garden_list_uzl.html'
    elif '/uzc/' in request.path:
        template = 'mainapp/garden_list_uzc.html'
    else:
        template = 'mainapp/garden_list_ru.html'
    return render(request, template, context)


def garden_detail(request, garden_slug):
    context = {
        'garden': get_object_or_404(Garden, slug=garden_slug)
    }
    if '/en/' in request.path:
        template = 'mainapp/garden_detail_en.html'
    elif '/uzl/' in request.path:
        template = 'mainapp/garden_detail_uzl.html'
    elif '/uzc/' in request.path:
        template = 'mainapp/garden_detail_uzc.html'
    else:
        template = 'mainapp/garden_detail_ru.html'
    return render(request, template, context)
