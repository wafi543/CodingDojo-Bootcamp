from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string

# Create your views here.
def index(request):
    count = 0
    if 'count' in request.session:
        count = request.session['count']
    word = get_random_string(length=14)
    if 'word' in request.session:
        word = request.session['word']
    else:
        request.session['word'] = word
    context = {
        'count': count,
        'word': word
    }
    return render(request, 'random_word/index.html', context)

def generate(request):
    if 'count' in request.session:
        request.session['count'] = request.session['count'] + 1
    else:
        request.session['count'] = 1
    request.session['word'] = get_random_string(length=14)
    return redirect('/random_word')


def reset(request):
    try:
        del request.session['count']
        del request.session['word']
    except:
        print('error')
    return redirect('/random_word')