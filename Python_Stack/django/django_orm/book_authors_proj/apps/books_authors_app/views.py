from django.shortcuts import render, HttpResponse

# Create your views here.
def index (request):
    Book.objects.create(title="C Sharp",desc="C# langauge")
    return HttpResponse('hello')
