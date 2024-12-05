const fakeWeatherData = {
    "New York": { temp: "33°C", condition: "Cloudy", humidity: "75%" },
    "New Orleans": { temp: "37°C", condition: "Sunny", humidity: "55%" },
    "Indianapolis": { temp: "24°C", condition: "Windy", humidity: "65%" },
    "Chicago": { temp: "18°C", condition: "Humid", humidity: "77%" },
    "London": { temp: "5°C", condition: "Rainy", humidity: "80%" },
};

document.getElementById("get-weather").addEventListener("click", () => {
    const city = document.getElementById("city-input").value;
    const weather = fakeWeatherData[city];

    if (weather) {
        document.getElementById("weather-result").classList.remove("hidden");
        document.getElementById("city-name").innerText = city;
        document.getElementById("temperature").innerText = `Temperature: ${weather.temp}`;
        document.getElementById("condition").innerText = `Condition: ${weather.condition}`;
        document.getElementById("humidity").innerText = `Humidity: ${weather.humidity}`;
    } else {
        alert('City not found. Try another one');
    }
});
