import redis

r = redis.StrictRedis(charset="utf-8", decode_responses=True)

r.hmset("AmazonBasics-12-Ct",{"image":"https://m.media-amazon.com/images/I/81rQOqg6S3L._AC_UL320_.jpg", "name":"AmazonBasics 1.5V 12 Ct","price":"$12.99","quantity":200})
r.hmset("Energizer-48-Ct",{"image":"https://m.media-amazon.com/images/I/81S+pX7uujL._AC_UL320_.jpg", "name":"Energizer AAA 48 Ct","price":"$13.58","quantity":250})
r.hmset("Duracell-4-Ct",{"image":"https://m.media-amazon.com/images/I/71B+sFbk3FL._AC_UL320_.jpg", "name":"Duracell 2032 3V 4 Ct","price":"$7.56","quantity":100})
# r.hmset("",)
# r.hmset("",)
# r.hmset("",)
# r.hmset("",)
# r.hmset("",)
# r.hmset("",)
