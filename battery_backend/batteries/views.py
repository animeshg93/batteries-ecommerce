from django.http import JsonResponse
import redis
import json

r = redis.StrictRedis(charset="utf-8", decode_responses=True)
purchasedItems = {}
totalQuantity = 0

def getBatteries(request):
	vals=[]
	keys = r.keys()
	for key in keys:
		productUrl= '/batteries/'+key
		r.hmset(key, {"url":productUrl})
		vals.append(r.hgetall(key))
	return JsonResponse(vals, safe=False)

def getSingleBattery(request, slug):
	battery = r.hgetall(slug)
	return JsonResponse(battery, safe=False)

def validateBatteryQuantity(request):
	global totalQuantity
	if request.method == 'POST':
		content = request.body.decode('utf-8')
		data=json.loads(content)
		key = data.get("key")
		battery = r.hgetall(key)
		batteryQuantity = int(battery.get("quantity"))
		requestQuantity = int(data.get("quantity"))
		if batteryQuantity - requestQuantity < 0:
			return JsonResponse({"status":"FAILED"}, safe=False)
		else:
			r.hmset(key, {"quantity":batteryQuantity - requestQuantity})
			storeItems(key, requestQuantity, battery.get("price"))
			return JsonResponse({"status":"SUCCESS", "totalQuantity": totalQuantity}, safe=False)

def storeItems(key, quantity, amount):
	global totalQuantity
	totalQuantity += quantity
	if key in purchasedItems:
		purchasedItems[key]["quantity"] += quantity
	else:
		purchasedItems[key]={"quantity":quantity, "amount": float(amount)}
	print(purchasedItems)
