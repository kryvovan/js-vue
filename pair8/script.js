console.log('Happy developing ✨')
//
// names = ["Ivan", "Mark", "Miroslava", "Oleksandr", "Emiliia"]
// console.log(names)
// console.log(names[-1])
// console.log(names.length)
//
// names2 = []
// names2.push("Skib")
// names2.push("Kuku")
//
//
// names2.pop()
// names2.unshift("Kuku", "Kuku")
// names2.shift()
//
// names.slice(1, 4)
// console.log(names)
//
// console.log(names2)
//
// __________________________________________
//
//
// names = ["Ivan", "Mark", "Miroslava", "Oleksandr", "Emiliia"]
//
// let deleted = names.splice(2, 1)
// console.log(deleted)
// console.log(names)
//
// names.splice(1, 0, "Bohdan")
// console.log(names)
//
// names.splice(0, 1, "Maria", "Ksenia")
//
//
// ________________________________________________________
//
// function register(name) {
//     if (name.trim().length === 0) {
//         alert("no")
//     }
//     let duplicate = false
//     for (let i = 1; i < names.length; i++) {
//         if (names[i] === name) {
//             duplicate = true
//         }
//     }
//     if (duplicate) {
//         alert("dupl")
//         return
//     }
//     names.push(name)
//     alert(`uchasnyk ${name} dodaniy`)
// }
//
//
// function deleted(name) {
//     let index = -1
//     for (let i = 1; i < names.length; i++) {
//         if (names[i] === name) {
//             index = i
//             break
//         }
//     }
//     if (index === -1) {
//         alert("unknown")
//     }
//     else {
//         names.splice(index, 1)
//         alert("succesfully deleted")
//     }
// }
//
// function count() {
//     alert(`count: ${names.length}`)
// }
//
//
// names = ["Ivan", "Mark", "Miroslava", "Oleksandr", "Emiliia"]


__________________________________________________________________________



names = ["Ivan", "Mark", "Miroslava", "Oleksandr", "Emiliia"]

for (let name of names) {
    console.log(name)
}

names.forEach(function (name, index) {
    console.log(name, index)
})

__________________________________________________________________________