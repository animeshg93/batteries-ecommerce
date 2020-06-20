from django.http import JsonResponse
import redis

r = redis.StrictRedis(charset="utf-8", decode_responses=True)

def getBatteries(request):
	vals=[]
	keys = r.keys()
	for key in keys:
		productUrl='http://localhost:3000/batteries/'+key
		r.hmset(key, {"url":productUrl})
		vals.append(r.hgetall(key))
	return JsonResponse(vals, safe=False)

def getSingleBattery(request, slug):
	battery = r.hgetall(slug)
	return JsonResponse(battery, safe=False)

def validateQuantity(request):
	