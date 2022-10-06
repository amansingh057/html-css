// searching and querying data
use amakart
db.items.find({rating:4})
db.items.find({rating:{$gte:3.5}}) //greater than or equal to 3.5
db.items.find({rating:{$gt:3.5}})
//and operator
db.items.find({rating:{$gt:3.5},price:{$gt:200000}})
db.items.find({rating:{$lt:3.5},price:{$gt:200000}})
//or operator
db.items.find({$or:[{rating:{$gt:3.5}},{price:{$gt:30000}}]})
db.items.find({rating:{$lt:3.5},price:{$gt:200000}})
db.items.find({price:{$gte:20000}},{rating:1},{qty:1})