const API_KEY = 'b3514c282b0881d3c62d1738e4d0f678'

async function onGeoOk(position){
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    
    fetch(API_URL).then(res => res.json()).then(data=>{
        const city = document.querySelector('#weather span:first-child')
        const weather = document.querySelector('#weather span:last-child')
        city.innerText = `${data.name} :`
        weather.innerText = `${data.weather[0].main} / temp ${data.main.temp}`
    })
}
function onGeoError(){
    alert("can't find you")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)