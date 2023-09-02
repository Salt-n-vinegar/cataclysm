//  1. Hero
const items = document.querySelectorAll('h4');
console.log(items);
let futureDate = new Date(2030, 5, 5, 30, 15);


const futureTime = futureDate.getTime();

function remainingTime() {
    const todayTime = new Date().getTime();
    const time = futureTime - todayTime;

    const oneYear = 365 * 24 * 60 * 60 * 1000;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let years = Math.floor(time / oneYear);
    let days = Math.floor((time % oneYear) / oneDay);
    let hours = Math.floor((time % oneDay) / oneHour);
    let minutes = Math.floor((time % oneHour) / oneMinute);
    let seconds = Math.floor((time % oneMinute) / 1000);
    
    const values = [years, days, hours, minutes, seconds]

    function format(item) {
        return item;
    }

    items.forEach(function(item, index) {
        item.textContent = format(values[index]);
    })
}

let countdown = setInterval(remainingTime, 1000)

remainingTime();



// 2. Questions Section
const btns = document.querySelectorAll('.tab-btn');
const questionsSection = document.querySelector('.questions-section');
const articles = document.querySelectorAll('.content');
var activeLine = document.querySelectorAll('.active-line')

activeLine.forEach(function(item) {
    const bigPapaPump = item.parentElement;
    bigPapaPump.addEventListener('click', function(e) {
        activeLine.forEach(function (item) {
            item.classList.remove('activated');
        });
        item.classList.add('activated');
    });
});

questionsSection.addEventListener('click', function(e) {

    const id = e.target.dataset.id

    if(id) {
        btns.forEach(function(btn) {
            btn.classList.remove('active')
        })

        e.target.classList.add('active');

        articles.forEach(function(article) {
            article.classList.remove('active');
        })

        const element = document.getElementById(id);
        element.classList.add('active');

    }

})



// 3. Prep Section
const catImg = document.querySelector('.prep-img')
const url = 'https://cataas.com/cat';
const url2 = 'https://catfact.ninja/fact'
const catImgBtn = document.querySelector('.cat-img-btn');
const catFactBtn = document.querySelector('.cat-fact-btn')
const catFact = document.querySelector('.prep-fact-text');

const fetchData = async () => {
    try {
    catImg.innerHTML = `<img src="/images/api-loading-img.jpg" class="prep-pic"><img>`
        const response = await fetch(url);
        catImg.innerHTML = `<img src="${response.url}" class="prep-pic"></img>`;
    } catch (error) {
        catImg.innerHTML = `<img src="/images/api-error-img.jpg" class="prep-pic"><img>`
    }
}

const catFactData = async () => {
    catFact.innerHTML = `<p>Resistance is futile!</p>`
    try {
        const response = await fetch(url2);
        const data = await response.json();
        console.log(data.fact);
        catFact.innerHTML = `<p>${data.fact}</p>`
    } catch (error) {
        catFact.textContent = `The API was broken.  All is lost.  Please await further instructions from your new leaders.`
    }
}

window.addEventListener('load', () => {
    fetchData()
    catFactData()
})

catImgBtn.addEventListener('click', (e) => {
    fetchData()
})

catFactBtn.addEventListener('click', () => {
    catFactData();
})



// 5. Extras
const catRollHover = document.querySelectorAll('.cat-roll-hover');
const rollCatContainer = document.querySelector('.roll-cat-container');

catRollHover.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        rollCatContainer.classList.add('roll')
    })
})

catRollHover.forEach((item) => {
    item.addEventListener('mouseleave', () => {
        rollCatContainer.classList.remove('roll')
    })
})