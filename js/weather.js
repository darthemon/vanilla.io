const weather = document.getElementById("weatherC1");
const city = document.getElementById("weatherC2");

const API_KEY = "4d94fe53478fed19fe342b180121b3da"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
        city.innerText = `🧭 ${data.name}`;
        weather.innerText = `🌤️ ${data.weather[0].main} / 🌡️ ${data.main.temp}도`;
    });
}

function onGeoError() {
    alert("위치 정보를 찾을 수 없어요");
}

//navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);