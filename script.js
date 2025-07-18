const apiKey = "5546d20c3a8e454aa9014032251807";
const apiUrl = "https://api.weatherapi.com/v1/current.json?"

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weather_icon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + `key=${apiKey}` + `&q=${city}` + "&aqi=yes")
    if (response.status == 400) {
        document.querySelector(".error").style.display = "block"
        // document.querySelector(".weather").style.display = "none"
    }
    else {
        var data = await response.json()
        console.log(data);
        document.querySelector(".search input").value = " "
        document.querySelector(".city").innerHTML = data.location.name;
        document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
        document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
        document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";



        if (data.current.condition.code === 1000) {
            document.querySelector(".weather-icon").innerHTML = `<img src="assets/clear.png" alt="weather icon" class="weather-iconn">`
            console.log("mama g same hai brooo")
        }
        else if (data.current.condition.code === 1003) {
            document.querySelector(".weather-icon").innerHTML = `<img src="assets/partly-cloudy.png" alt="weather icon" class="weather-iconn">`
            console.log("mama g same hai brooo")
        }
        else if (data.current.condition.code === 1006) {
            document.querySelector(".weather-icon").innerHTML = `<img src="assets/clouds.png" alt="weather icon" class="weather-iconn">`
            console.log("mama g same hai brooo")
        }
        else if (data.current.condition.code === 1009) {
            document.querySelector(".weather-icon").innerHTML = `<img src="assets/overcast.png" alt="weather icon" class="weather-iconn">`
            console.log("mama g same hai brooo")
        }
        else if (data.current.condition.code === 1030) {
            document.querySelector(".weather-icon").innerHTML = `<img src="assets/mist.png" alt="weather icon" class="weather-iconn">`
            console.log("mama g same hai brooo")
        }
        else if (data.current.condition.code === 1063) {
            document.querySelector(".weather-icon").innerHTML = `<img src="assets/rain.png" alt="weather icon" class="weather-iconn">`
            console.log("mama g same hai brooo")
        }
        else if (data.current.condition.code === 1066) {
            document.querySelector(".weather-icon").innerHTML = `<img src="assets/snow.png" alt="weather icon" class="weather-iconn">`
            console.log("mama g same hai brooo")
        }
        else if (data.current.condition.code === 1069) {
            document.querySelector(".weather-icon").innerHTML = `<img src="assets/rain.png" alt="weather icon" class="weather-iconn">`
            console.log("mama g same hai brooo")
        }
        else if (data.current.condition.code === 1072) {
            document.querySelector(".weather-icon").innerHTML = `<img src="assets/overcast.png" alt="weather icon" class="weather-iconn">`
            console.log("mama g same hai brooo")
        }
        else if (data.current.condition.code === 1087) {
            document.querySelector(".weather-icon").innerHTML = `<img src="assets/thunder.png" alt="weather icon" class="weather-iconn">`
            console.log("mama g same hai brooo")
        }
        else if (data.current.condition.code === 1117) {
            document.querySelector(".weather-icon").innerHTML = `<img src="assets/blizzard.png" alt="weather icon" class="weather-iconn">`
            console.log("mama g same hai brooo")
        }
        else if (data.current.condition.code === 1153) {
            document.querySelector(".weather-icon").innerHTML = `<img src="assets/drizzle.png" alt="weather icon" class="weather-iconn">`
            console.log("mama g same hai brooo")
        }
                else if (data.current.condition.code === 1240) {
            document.querySelector(".weather-icon").innerHTML = `<img src="assets/drizzle.png" alt="weather icon" class="weather-iconn">`
            console.log("mama g same hai brooo")
        }       


        else {

            weather_icon.innerHTML = `
      <img src="${data.current.condition.icon}" alt="weather icon" class="weather-iconn">`;
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }


}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})
searchBox.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        event.preventDefault();
        searchBtn.click()
    }
})