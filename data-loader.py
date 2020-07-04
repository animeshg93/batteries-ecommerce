import redis

r = redis.StrictRedis(charset="utf-8", decode_responses=True)

r.flushdb();

r.hmset("AmazonBasics-12-Ct",{"image":"https://m.media-amazon.com/images/I/81rQOqg6S3L._AC_UL320_.jpg", "name":"AmazonBasics 1.5V 12 Ct","price":"12.99","quantity":200})
r.hmset("Energizer-48-Ct",{"image":"https://m.media-amazon.com/images/I/81S+pX7uujL._AC_UL320_.jpg", "name":"Energizer AAA 48 Ct","price":"13.58","quantity":250})
r.hmset("Duracell-4-Ct",{"image":"https://m.media-amazon.com/images/I/71B+sFbk3FL._AC_UL320_.jpg", "name":"Duracell 2032 3V 4 Ct","price":"7.56","quantity":100})

r.hmset("AmazonBasics-Coin-2-Ct",{"image":"https://images-na.ssl-images-amazon.com/images/I/61WfS6xHLxL._AC_UL200_SR200,200_.jpg", "name":"AmazonBasics CR1616 Coin 2 Ct","price":"3.51","quantity":45})
r.hmset("Energizer-Coin-2-Ct",{"image":"https://images-na.ssl-images-amazon.com/images/I/819A0g-%2BaJL._AC_UL200_SR200,200_.jpg", "name":"Energizer 2016 2 Ct","price":"2.44","quantity":1000})
r.hmset("LiCB-Coin-20-Ct",{"image":"https://images-na.ssl-images-amazon.com/images/I/81zyi4tOtYL._AC_UL200_SR200,200_.jpg", "name":"LiCB LR44 Coin Cell 20 Ct","price":"5.00","quantity":8457})
