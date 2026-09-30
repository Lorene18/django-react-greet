from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.
def greet_view(request):
    name=request.GET.get('name','World')
    return JsonResponse({"message": f"Hello,{name}"})