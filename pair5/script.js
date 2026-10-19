console.log('Happy developing ✨')
//
// let n = 1
// while (n <=5) {
//     console.log(n)
//     n++
// }
//
//
// let userNumber = +prompt()
// while (userNumber < 1 || userNumber > 10) {
//     userNumber = +prompt()
//     console.log("no")
// }
//
// console.log(Number("7"))
//
// let age = +prompt()
// while (Number.isNaN(age) || age < 0 || age >= 100) {
//     age = +prompt()
// }
// console.log(age)
//
// const correctPin = 1234;
//
// let userPin = +prompt()
// let attempts = 1
// while (attempts < 3 && correctPin !== userPin) {
//     alert("loh")
//     userPin = +prompt()
//     attempts++
// }
// if (userPin === correctPin) {
//     console.log("welcome")
// } else {
//     console.log("no")
// }
//
// const correctPin = 1234;
//
// let attempts = 1
//
// while (attempts <= 3) {
//     let userPin = +prompt()
//     if (userPin === correctPin) {
//         console.log("hey pookie")
//         break;
//     }
// }

//
// let menuChoice;
// do{
//     menuChoice = +prompt(`1 - profile \n 2 - settings \n 3 - statistics \n 0 - exit`)
//     if (menuChoice === "1") {
//         console.log("profile")
//     } else if (menuChoice === "2") {
//         console.log("settings")
//     } else if (menuChoice === "3") {
//         console.log("stats")
//     } else if (menuChoice === "0") {
//         console.log("exit")
//     } else {
//         console.log("what are you yapping about")
//     }
// } while (menuChoice !== "0")
//___________________________________________________________
//
// let menuChoice;
// do{
//     menuChoice = +prompt(`1 - profile \n 2 - settings \n 3 - statistics \n 0 - exit`)
//     switch (menuChoice) {
//         case "1":
//             console.log("profile")
//             break
//         case "2":
//             console.log("set")
//             break
//         case "3":
//             console.log("stats")
//             break
//         case "0":
//             console.log("exit")
//             break
//         default:
//             console.log("skibidi")
//     }
// } while (menuChoice !== "0")
//_________________________________________________________________
//
// let count = 0
// let sum = 0
// while (count < 5) {
//     let grade = +prompt(`grade # ${count + 1}`)
//     if (!Number.isNaN(grade) || grade < 1 || grade > 12) {
//         alert("no")
//         continue
//     }
//     sum += grade
//     count++
// }
//
// console.log(sum)
// console.log(sum / 5)
//
// let questionsNumber = 1, score = 0
//
// while (questionsNumber <= 5){
//     let questions = "", correctAnswer = ""
//     switch (questionsNumber) {
//         case 1:
//             questions = "blahblahblah?"
//             correctAnswer = "let"
//             break
//         case 2:
//             questions = "and"
//             correctAnswer = "&&"
//             break
//         case 3:
//             questions = "or"
//             correctAnswer = "||"
//             break
//         case 4:
//             questions = "break"
//             correctAnswer = "break"
//             break
//         case 5:
//             questions = "= == or ==="
//             correctAnswer = "==="
//             break
//     }
//     let answer = prompt(`# ${questionsNumber} / 5 \n
//     ${questions}`)
//     if (answer === "") {
//         alert("error")
//         continue
//     }
//     if (answer === correctAnswer) {
//         alert("krasava")
//         score++
//     } else {
//         alert("no")
//     }
//     questionsNumber++
// }
// if (score === 5) {
//     alert("maladsa")
// } else if (score >= 3) {
//     alert("ok")
// } else {
//     alert("skill issue")
// }


let age = +prompt("age");

while (Number.isNaN(age) || age < 12 || age > 90) {
    age = +prompt("too young. or too old. too bad");
}

const correctPin = 4321;
let userPin = +prompt("pin");
let attempts = 1;

while (correctPin !== userPin && attempts < 3) {
    userPin = +prompt("error");
    attempts++;
}

if (userPin === correctPin) {
    let menuChoice;

    do {
        menuChoice = prompt("?");

        switch (menuChoice) {
            case "1":
                console.log("cabinet");
                break;

            case "2":
                console.log("mess");
                break;

            case "3":
                console.log("settings");
                break;

            case "0":
                console.log("exit");
                break;

            default:
                console.log("error");
        }
    } while (menuChoice !== "0");

} else {
    console.log("wrong");
}
