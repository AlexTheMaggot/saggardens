from django.shortcuts import render

# Create your views here.


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
