document.getElementById("search-button").addEventListener("click", getWeatherData);
var cityName;

function getWeatherData(event){
    event.preventDefault()
    
    cityName = document.getElementById("search-input").value;
    var APIKey = "25ad33a50e52de46a368f0aafde629c1";
    var queryUrlOne = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey + "&units=metric";

    // use this for the 5 day forecast
    var queryUrlTwo = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIKey + "&units=metric";


    var result;
// Here we run our Fetch call to the OpenWeatherMap API

//queryUrlONe
fetch(queryUrlOne) 
.then(function (response) {
    // Calling .json() to access the json data stored inside the returned promise
    return response.json();
})
// We store all of the retrieved data inside of an object called "data"
.then(function (data) {
    console.log("queryUrlOne", data);
    result = data;
    var tempEl = result.main.temp;
    var humidityEl = result.main.humidity;
    var windEl = result.wind.speed;

    console.log("Today's weather" ,tempEl, humidityEl, windEl);

    // // Log the resulting object
    // console.log(data);
    document.getElementById("city").textContent = cityName;
    document.getElementById("tempToday").textContent = "Temp: " + tempEl + " C";
    document.getElementById("windToday").textContent = "Wind: " + windEl + " Kph";
    document.getElementById("humidityToday").textContent = "Humidity: " + humidityEl + "%";
    
    // localStorage.setItem("cityName", cityName);
    // console.log("result", result)

})
    
// queryUrlTwo      
// Here we run our Fetch call to the OpenWeatherMap API
    fetch(queryUrlTwo) 
    .then(function (response) {
        // Calling .json() to access the json data stored inside the returned promise
        return response.json();
    })
    // We store all of the retrieved data inside of an object called "data"
    .then(function (data) {
        console.log("queryUrlTwo", data);
        result = data;
        
        
        localStorage.setItem("cityName", cityName);
        console.log("result", result)

        for (let i = 0; i < 5; i++) {
        //    console.log(i * 8);
           console.log(result.list[i * 8]);
           var foreCast = result.list[i * 8];
       
           
        const tempElement = document.getElementById("tempDay" + (i + 2));
        const windElement = document.getElementById("windDay" + (i + 2));
        const humidityElement = document.getElementById("humidityDay" + (i + 2));

        console.log("5 days", tempElement, windElement, humidityElement);

        const tempValue = foreCast.main.temp;
        const windValue = foreCast.wind.speed;
        const humidityValue = foreCast.main.humidity;

        

        tempElement.textContent = "Temp: " + tempValue + " C";
        windElement.textContent = "Wind: " + windValue + " Kph";
        humidityElement.textContent = "Humidity: " + humidityValue + "%";


           
        
    }
})
var  cityButton = document.createElement("button");
cityButton.innerHTML = cityName;
document.getElementById("history").appendChild(cityButton);

}




