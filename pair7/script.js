console.log('Happy developing ✨')


// let price = [12, 5, 45, 3]
// const price2 = [12, 5, 45, 3]
//
// console.log(price2[2])
// price2[1] = 30
//
// console.log(price.length)
//
// for (let i  = 0; i < price.length, i++) {
//     console.log(price[i])
// }
//
// let suma = 0
// for (let i = 0; i < price.length; i++) {
//     suma += price[i]
//     if (prices[i] % 2 === 0) {
//         console.log(price[i])
//     }
// }
// console.log(suma)
//
// function countLimit(prices, limit) {
//     let count = 0
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] > limit) {
//             count++
//         }
//     }
//     return count
// }
//
// let prices = [45, 30, 100, 55]
// let limit = 50
// console.log(countLimit(prices, limit))

function calcSum() {
    let count = Number(prompt("Enter quantity of numbers:"));
    let numbers = new Array(count);
    let sum = 0;

    for (let i = 0; i < count; i++) {
        numbers[i] = Number(prompt("Enter number " + (i + 1) + ":"));
        sum += numbers[i];
    }

    return sum;
}

let totalSum = calcSum();
console.log("Sum of entered numbers: " + totalSum);