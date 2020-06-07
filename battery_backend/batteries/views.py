from django.http import HttpResponse
import redis

r = redis.Redis()

def getBatteries(request):
    return HttpResponse("Hello, world")

