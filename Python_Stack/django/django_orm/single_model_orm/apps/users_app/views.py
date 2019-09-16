from django.shortcuts import render, HttpResponse
from apps.users_app.models import User

# Create your views here.
def index(request):
    # Create 3 users
    # user = User.objects.create(first_name="Khalid",last_name="Alzahrani",email_address="khalid@site.sa",age=24)
    # print(user)

    #  Retrieve all the users
    users = User.objects.all()

    # Retrieve the last user
    last = User.objects.last()
    first = User.objects.first()

    context = {
        'users':users,
        'last':last,
        'first':first,
    }
    return render(request,'index.html',context)