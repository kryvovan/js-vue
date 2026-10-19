console.log('Happy developing ✨')

let courses = [
    {
        id: 1,
        title: "HTML",
        category: "programming",
        price: 300,
        duration: 10,
        rating: 4.5,
        available: true
    },
    {
        id: 2,
        title: "CSS",
        category: "programming",
        price: 400,
        duration: 15,
        rating: 4.7,
        available: true
    },
    {
        id: 3,
        title: "JS",
        category: "programming",
        price: 500,
        duration: 20,
        rating: 4.9,
        available: true
    },
    {
        id: 4,
        title: "Python",
        category: "programming",
        price: 700,
        duration: 25,
        rating: 4.8,
        available: false
    },
    {
        id: 5,
        title: "Photoshop",
        category: "design",
        price: 250,
        duration: 12,
        rating: 4.2,
        available: true
    },
    {
        id: 6,
        title: "Figma",
        category: "design",
        price: 350,
        duration: 14,
        rating: 4.6,
        available: true
    },
    {
        id: 7,
        title: "English",
        category: "language",
        price: 600,
        duration: 30,
        rating: 4.4,
        available: false
    },
    {
        id: 8,
        title: "German",
        category: "language",
        price: 450,
        duration: 18,
        rating: 4.3,
        available: true
    }
]

function findCourse(id) {
    let found = courses.find(course => course.id === id)

    if (found !== undefined) {
        console.log(found)
    } else {
        alert("not found")
    }
}

function findCategory(category) {
    let found = courses.filter(course => course.category === category)

    if (found.length > 0) {
        console.log(found)
    } else {
        alert("not found")
    }
}

function findPrice(price) {
    let found = courses.filter(course => course.price <= price)

    if (found.length > 0) {
        console.log(found)
    } else {
        alert("not found")
    }
}

function findTitle(title) {
    let found = courses.filter(course =>
        course.title.toLowerCase().includes(title.toLowerCase())
    )

    if (found.length > 0) {
        console.log(found)
    } else {
        alert("not found")
    }
}

function getTitles() {
    let titles = courses.map(course => course.title)
    console.log(titles)
}

function getDiscount() {
    let discount = courses.map(course => ({
        title: course.title,
        price: course.price * 0.85
    }))

    console.log(discount)
}

function sortPrice() {
    let sorted = [...courses].sort((a, b) => a.price - b.price)
    console.log(sorted)
}

function sortRating() {
    let sorted = [...courses].sort((a, b) => b.rating - a.rating)
    console.log(sorted)
}

function sortTitle() {
    let sorted = [...courses].sort((a, b) => a.title.localeCompare(b.title))
    console.log(sorted)
}

function getStats() {
    let active = courses.filter(course => course.available === true)
    let sum = 0

    active.forEach(course => {
        sum += course.price
    })

    if (active.length > 0) {
        console.log("sum:", sum)
        console.log("average:", sum / active.length)
    } else {
        alert("no courses")
    }
}

let choice

do {
    choice = +prompt("?")

    switch (choice) {
        case 1: {
            let id = +prompt("id")

            if (Number.isInteger(id) && id > 0) {
                findCourse(id)
            } else {
                alert("error")
            }

            break
        }

        case 2: {
            let category = prompt("category")

            if (category !== null && category.trim().length > 0) {
                findCategory(category.trim().toLowerCase())
            } else {
                alert("error")
            }

            break
        }

        case 3: {
            let price = prompt("max price")

            if (price !== null && price.trim() !== "" && !Number.isNaN(Number(price)) && Number(price) >= 0) {
                findPrice(Number(price))
            } else {
                alert("error")
            }

            break
        }

        case 4: {
            let title = prompt("title")

            if (title !== null && title.trim().length > 0) {
                findTitle(title.trim())
            } else {
                alert("error")
            }

            break
        }

        case 5:
            getTitles()
            break

        case 6:
            getDiscount()
            break

        case 7:
            sortPrice()
            break

        case 8:
            sortRating()
            break

        case 9:
            sortTitle()
            break

        case 10:
            getStats()
            break

        case 0:
            alert("bye")
            break

        default:
            alert("error")
    }

} while (choice !== 0 && confirm("continue?"))
