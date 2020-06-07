from django.http import JsonResponse
import redis

r = redis.StrictRedis(charset="utf-8", decode_responses=True)

def getBatteries(request):
	vals=[]
	keys = r.keys()
	for key in keys:
		vals.append(r.hgetall(key))
	return JsonResponse(vals, safe=False)

