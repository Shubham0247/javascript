const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => num + 10 )

const newNums = myNumbers
                        .map( (num) => num*10 )
                        .map( (num) => num + 1 )
                        .filter( (num) => num >= 40)

// console.log(newNums);

//reduce method

const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc,currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0 )

const myTotal = myNums.reduce( (acc,currVal) => acc + currVal, 0 )

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "data science course",
        price: 4999
    },
    {
        itemName: "cpp course",
        price: 1999
    },
    {
        itemName: "java course",
        price: 599
    },
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0 )

console.log(priceToPay);