from django.shortcuts import render

# Create your views here.


def index(request):
    template = 'mainapp/index.html'
    return render(request, template)