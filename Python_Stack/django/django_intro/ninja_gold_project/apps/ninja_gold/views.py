from django.shortcuts import render, HttpResponse, redirect
from datetime import date
import random # import the random module

# Create your views here.
def index(request):
    if 'activities' in request.session:
        print('activities exists!')
    else:
        print("key 'activities' does NOT exist")
        request.session['activities'] = []
    context = {
        'activities': request.session['activities']
    }
    return render(request, 'index.html', context)

def process(request):
    activities = request.session['activities']
    num = 0
    if request.POST['building'] == 'farm':
        num = random.randint(10, 20)
    elif request.POST['building'] == 'cave':
        num = random.randint(5, 10)
    elif request.POST['building'] == 'house':
        num = random.randint(2, 5)
    elif request.POST['building'] == 'casino':
        num = random.randint(-50, 50)

    if num >= 0:
        activities.append('Earned '+str(num)+' golds from the '+request.POST['building']+'! ('+str(date.today())+')')
    else:
        activities.append('Entered a casino and lost '+str(num)+' golds... Ouch.. ('+str(date.today())+')')

    request.session['activities'] = activities
    return redirect('/')

def clear(request):
    try:
        del request.session['activities']
    except:
        pass
    return redirect('/')