console.log('Happy developing ✨')

let news = [
    {
        category: "js",
        title: "js is cool",
        description: "ts is cool, Ryuko approves",
        date: "20.11.2026"
    },
    {
        category: "design",
        title: "design is cool",
        description: "ts is cool, Himeno approves",
        date: "12.11.2026"
    }
]

let newsList = document.querySelector("#news-list");
let newsCount = document.querySelector("#news-count");

function addNews(items){
    newsList.innerHTML = '';
    for (let item of items){
        let card = document.createElement('article');
        card.classList.add("news-card");

        let tag = document.createElement('span');
        tag.classList.add("tag");
        tag.innerText = item.category;

        let title = document.createElement('h2');
        title.innerText = item.title;

        let description = document.createElement('p');
        description.innerText = item.description;

        let date = document.createElement('small');
        date.innerText = item.date;

        card.append(tag, title, description, date);
        newsList.append(card);

    }
    newsCount.textContent = items.length


}

addNews(news);


let allButton = document.querySelector('#show-all');
let jsButton = document.querySelector('#show-js');
let designButton = document.querySelector('#show-design');

allButton.addEventListener('click', function(){
    addNews(news)
});

jsButton.addEventListener('click', function(){
    let jsNews = news.filter(function(item){
        return item.category === "js";
    })
    addNews(jsNews)
})


designButton.addEventListener('click', function(){
    let designNews = news.filter(function(item){
        return item.category === "design";
    })
    addNews(designNews)
})