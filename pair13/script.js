let student = {
    name: "bleh",
    role: "student",
    city: "Kyiv",
    portfolio: "git"
}
let nameElement = document.querySelector("#profile-name");
let roleElement = document.querySelector("#profile-role");
let cityElement = document.querySelector("#profile-city");
let portfolioElement = document.querySelector("#profile-portfolio");

nameElement.textContent = student.name;
roleElement.textContent = student.role;
cityElement.innerHTML = "<strong>Kyiv</strong>";
// portfolioElement.textContent = student.portfolio;
// portfolioElement.innerHTML = student.portfolio;
portfolioElement.setAttribute("href", student.portfolio);
portfolioElement.setAttribute("title", "open");

let skills= document.querySelectorAll(".skill");
skills[0].textContent = "html";
skills[1].textContent = "css";
skills[2].textContent = "js";
