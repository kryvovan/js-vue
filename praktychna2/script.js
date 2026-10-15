console.log('Happy developing ✨')


let clubs = [
    {
        id: 1,
        name: "football",
        category: "sport",
        price: 500,
        members: 12,
        isActive: true
    },
    {
        id: 2,
        name: "piano",
        category: "arts",
        price: 700,
        members: 15,
        isActive: true
    },
    {
        id: 3,
        name: "programming",
        category: "IT",
        price: 550,
        members: 10,
        isActive: false
    },
    {
        id: 4,
        name: "drawing",
        category: "arts",
        price: 400,
        members: 17,
        isActive: true
    },
    {
        id: 5,
        name: "basketball",
        category: "sport",
        price: 750,
        members: 20,
        isActive: false
    }
]

let choose

do {
    choose = +prompt("choose")

    switch (choose) {
        case 1:
            {if (clubs.length === 0) {
                alert("not found")
                break
            }
            for (let club of clubs) {
                let result = `${club.name}, ${club.category}, ${club.price}, ${club.members}, ${club.isActive}`
            }
            alert(result)
            break}
        case 2:
            {let idFind = +prompt("id")
            let found = null
            for (club of clubs) {
                if (club.id === idFind) {
                    found = club
                    break
                }
            }
            if (found) {
                alert(found.id, found.name, found.category, found.price, found.members, found.isActive)
            } else {
                alert("not found")
            }
            break}
        case 3:
            {let idFind = +prompt("id")
            let foundClub = null

            for (let club of clubs) {
                if (club.id === idFind) {
                    foundClub = club
                    break
                }
            }

            if (foundClub === null) {
                alert("not found")
                break
            }

            if (foundClub.isActive === false) {
                alert("closed")
                break
            }

            let confirmRez = confirm("a new one?")
            if (confirmRez) {
                foundClub.members++
                alert(`ok ${foundClub.members}`)
            }
            break}
        case 4:
            {let idFind = +prompt("id")
                let foundClub = null

                for (let club of clubs) {
                    if (club.id === idFind) {
                        foundClub = club
                        break
                    }
                }

                if (foundClub === null) {
                    alert("not found")
                    break
                }

                if (confirm("confirm?")) {
                    if (foundClub.isActive) {
                        foundClub.isActive = false
                    } else {
                        foundClub.isActive = true
                    }
                    alert(`success, this club is now ${foundClub.isActive}`)
                }
                break
            }
        case 5:
            {let name = prompt("name")
                let category = prompt("category")
                let price = +prompt("price")
                let members = +prompt("members")

                if (name === "" || category === "" || isNaN(price) || isNaN(members) || price < 0 || members < 0) {
                    alert("error")
                    break
                }

                let newId = clubs.length + 1

                clubs.push({
                    id: newId,
                    name: name,
                    category: category,
                    price: price,
                    members: members,
                    isActive: true
                })
                alert(`successfully added, id: ${newId}`)
                break
            }
        case 6:
            {if (clubs.length === 0) {
                alert("not found")
                break
            }

                let activeCount = 0
                let totalMembers = 0
                let totalPrice = 0

                for (let club of clubs) {
                    if (club.isActive) {
                        activeCount++
                    }
                    totalMembers += club.members
                    totalPrice += club.price
                }

                let avgPrice = totalPrice / clubs.length

                alert(`stats:\n total: ${clubs.length}\n active: ${activeCount}\n members: ${totalMembers}\n avg price: ${avgPrice}`)
                break
            }


    }
} while (choose !== 0)