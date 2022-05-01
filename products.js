const item = [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000}
]

// 1 . Filter and show the product that will be bought when you don't have much money I mean Cheap one
min_price = item[0].price
console.log(min_price)
var cheapest_item

for (var i = 1; i < item.length; i++){
    if (item[i].price < min_price){
        min_price = item[i].price
        cheapest_item = item[i]
    }
}

console.log("Cheapest item is: " + cheapest_item.name + " at price of: " + cheapest_item.price)

// 2 . Filter and show the product that will be expensive in the array
max_price = item[0].price
console.log(max_price)
var most_expensive_item

for (var i = 1; i < item.length; i++){
    if (item[i].price > max_price){
        max_price = item[i].price
        most_expensive_item = item[i]
    }
}

console.log("Most expensive item is: " + most_expensive_item.name + " at price of: " + most_expensive_item.price)

// 3 . Calculate the full price of all product combined
var total_price = 0

for (var i = 0; i < item.length; i++){
    total_price += item[i].price
}

console.log(total_price)

// 4 . Calculate the full price of all product combined and remove product that are under the 10 dollar

var new_total_price = 0

for (var i=0; i < item.length; i++){
    if (item[i].price < 10){
        item.splice(i, 1)
    }
    new_total_price += item[i].price
}

console.log(new_total_price)