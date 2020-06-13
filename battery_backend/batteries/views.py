from django.http import JsonResponse
import redis

r = redis.StrictRedis(charset="utf-8", decode_responses=True)

def getBatteries(request):
	vals=[]
	keys = r.keys()
	for key in keys:
		productUrl='http://127.0.0.1/batteries/'+key
		r.hmset(key, {"url":productUrl})
		vals.append(r.hgetall(key))
	return JsonResponse(vals, safe=False)

