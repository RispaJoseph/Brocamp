from django.shortcuts import render
from  django.http import HttpResponse
from django.shortcuts import render
# Create your views here.

def print_hello(request):
    movie_data={
        'movies' : [
        {
        'title' : 'Godfather',
        'year' : 1990,
        'summary' : 'story of an underworld kin',
        'success' : True
    },
        {
        'title': 'Intestellar',
        'year': 2012,
        # 'summary': 'story of an underworld kin',
        'success': True
    },

        {
        'title': 'Dune',
        'year': 2022,
        'summary': 'story of an underworld kin',
        'success': False
    }
        ]}
    return render(request,'hello.html',movie_data)

# def print_hello(request):
#     return HttpResponse("<b>Hello World!</b>")