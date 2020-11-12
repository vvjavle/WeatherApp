const api = {
    key: "6af738d446dcd069618ceb779557d27c",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getReults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getReults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json()
    }).then(displayResults);
}

function displayResults (weather) {
    console.log(weather);
}