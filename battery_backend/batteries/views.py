from django.http import JsonResponse
import redis
import json

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

def validateBatteryQuantity(request):
	if request.method == 'POST':
		content = request.body.decode('utf-8')
		data=json.loads(content)
		battery = r.hgetall(data.get("key"))
		batteryQuantity = int(battery.get("quantity"))
		requestQuantity = int(data.get("quantity"))
		if batteryQuantity - requestQuantity < 0:
			return JsonResponse({"status":"FAILED"}, safe=False)
		else:
			r.hmset(data.get("key"), {"quantity":batteryQuantity - requestQuantity})
			return JsonResponse({"status":"SUCCESS"}, safe=False)