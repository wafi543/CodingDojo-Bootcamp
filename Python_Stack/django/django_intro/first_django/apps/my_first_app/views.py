from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return HttpResponse("placeholder to later display a list of all blogs")

def one_method(request):
    return HttpResponse("bears")                                
    
def another_method(request, my_val):
    return HttpResponse("bears: "+my_val)
    
def yet_another(request, name):
    return HttpResponse("name: "+name)
    
def one_more(request, id, color):
    return HttpResponse("id: "+id+", color: "+color)

def new(request):
    return HttpResponse("placeholder to display a new form to create a new blog")

def create(request):
    return redirect('/')

def show(request, number):
    return HttpResponse("placeholder to display blog number "+number)

def edit(request, number):
    return HttpResponse("placeholder to edit blog "+number)

def destroy(request, number):
    return redirect('/')