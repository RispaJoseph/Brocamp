from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import logout, authenticate, login
from django.views.decorators.cache import never_cache



# Create your views here.
@never_cache
def index(request):
    print(request.user)
    if request.user.is_anonymous:
        return redirect("/login")
        
    return render(request, 'index.html')

@never_cache
def loginUser(request):
    if 'username' in request.session:
        return redirect("/")
    if request.method=="POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        print(username, password)

        # check if user has entered correct credentials
        user = authenticate(username=username, password=password)

        if user is not None:
            request.session['username'] = username
           
            
            login(request, user)
            return redirect("/")

        else:
            
            print('Invalid Credentials')

    return render(request, 'login.html')

@never_cache
def logoutUser(request):
    if 'username' in request.session:
        request.session.flush()
    logout(request)
    return redirect("/login")