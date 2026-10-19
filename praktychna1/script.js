console.log('Happy developing ✨')

let eventType, eventName = "", basePrice = 0

while (true) {
    eventType = +prompt("event")

    switch (eventType) {
        case 1:
            eventName = "movie"
            basePrice = 150
            break
        case 2:
            eventName = "theater"
            basePrice = 220
            break
        case 3:
            eventName = "concert"
            basePrice = 350
            break
        default:
            alert("error")
            continue
    }

    break
}

let dayType = +prompt("day")

while (dayType !== 1 && dayType !== 2) {
    dayType = +prompt("try again")
}

let ticketPrice = basePrice

if (dayType === 2) {
    ticketPrice *= 1.15
}

let ticketCount = +prompt("tickets")

while (Number.isNaN(ticketCount) || !Number.isInteger(ticketCount) || ticketCount < 1 || ticketCount > 6) {
    ticketCount = +prompt("try again")
}

let processedTickets = 0
let freeTickets = 0
let discountTickets = 0
let fullPriceTickets = 0
let totalSum = 0
let i = 1

while (i <= ticketCount) {
    let age = +prompt("age")

    while (age !== -1 && (Number.isNaN(age) || !Number.isInteger(age) || age < 0 || age > 120)) {
        age = +prompt("wrong age")
    }

    if (age === -1) {
        break
    }

    processedTickets++

    if (age <= 5) {
        freeTickets++
        i++
        continue
    }

    let discount = 0

    if (age >= 6 && age <= 12) {
        discount = 0.5
    } else if (age >= 13 && age <= 17) {
        discount = 0.2
    } else if (age >= 60) {
        discount = 0.25
    }

    let price = ticketPrice * (1 - discount)
    let hasStudentCard = false

    if (age >= 18 && age <= 25) {
        let student = prompt("student?").toLowerCase()

        while (student !== "yes" && student !== "no") {
            student = prompt("yes or no").toLowerCase()
        }

        if (student === "yes") {
            price *= 0.9
            hasStudentCard = true
        }
    }

    if (discount > 0 || hasStudentCard) {
        discountTickets++
    } else {
        fullPriceTickets++
    }

    totalSum += price
    i++
}

let extraDiscount = 0

if (totalSum > 1000) {
    extraDiscount = totalSum * 0.05
    totalSum -= extraDiscount
}

console.log("event: " + eventName)
console.log("processed: " + processedTickets)
console.log("free: " + freeTickets)
console.log("discount: " + discountTickets)
console.log("full price: " + fullPriceTickets)
console.log("extra discount: " + extraDiscount.toFixed(2))
console.log("total: " + totalSum.toFixed(2) )