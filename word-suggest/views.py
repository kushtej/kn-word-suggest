from django.http import HttpResponse
from django.shortcuts import render
from django.http import JsonResponse

from . import wordfreq

language=wordfreq.Language()

def index(req):
    return render(req,'index.html')

def is_ascii(s):
    return all(ord(c) < 128 for c in s)

def suggest(req):

    sentence = req.GET.get('word')
    words = sentence.split(" ")
    word=words[-1]
    
    if(is_ascii(word)==True):
        print("english string")
        txt=language.english_language(word)
        return JsonResponse({"word": txt})


    else:
        print("unicode string")
        txt=language.kannada_language(word)
        return JsonResponse({"word": txt})

