//BÀI 1 & 2
var fruits = [
    {
        type: 'Grapes',
        amount: 15
    },
    {
        type: 'Mangos',
        amount: 15
    },
    {
        type: 'Apples',
        amount: 15
    }
]
for (var input = 0; input < 3; input++) {
    var typeoffruit = fruits[input].type
    var amountoffruit = fruits[input].amount
    console.log('I have' + amountoffruit + typeoffruit)
}

//BÀI 3
var myDog = {
    name: 'Husky',
    legs: 4,
    color: 'brown'
}
console.log(myDog)