// inserting data in database
use amankart
db.items.insertOne({name:"Samsung s9",price:20000,rating:4.5,qty:233,sold:1000})
db.items.insertMany([{name:"Moto 9",price:20000,rating:4,qty:233,sold:1000},{name:"Samsung s9",price:20000,rating:4.5,qty:233,sold:100},{name:"iphone",price:110000,rating:2,qty:33,sold:5,isBig:true}])
db.items.find()