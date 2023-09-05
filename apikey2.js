const weatherDescriptions = {
    "Sunny": "fas fa-sun",
    "Clear": "fas fa-sun",
    "Partly cloudy": "fas fa-cloud-sun",
    "Cloudy": "fas fa-cloud",
    "Overcast": "fas fa-cloud",
    "Mist": "fas fa-smog",
    "Patchy rain possible": "fas fa-cloud-showers-heavy",
    "Patchy snow possible": "fas fa-snowflake",
    "Patchy sleet possible": "fas fa-cloud-meatball",
    "Patchy freezing drizzle possible": "fas fa-cloud-rain",
    "Thundery outbreaks possible": "fas fa-bolt",
    "Blowing snow": "fas fa-snowflake",
    "Blizzard": "fas fa-snowflake",
    "Fog": "fas fa-smog",
    "Freezing fog": "fas fa-smog",
    "Patchy light drizzle": "fas fa-cloud-rain",
    "Light drizzle": "fas fa-cloud-rain",
    "Freezing drizzle": "fas fa-cloud-rain",
    "Heavy freezing drizzle": "fas fa-cloud-rain",
    "Patchy light rain": "fas fa-cloud-showers-heavy",
    "Light rain": "fas fa-cloud-showers-heavy",
    "Moderate rain at times": "fas fa-cloud-showers-heavy",
    "Moderate rain": "fas fa-cloud-showers-heavy",
    "Heavy rain at times": "fas fa-cloud-showers-heavy",
    "Heavy rain": "fas fa-cloud-showers-heavy",
    "Light freezing rain": "fas fa-cloud-rain",
    "Moderate or heavy freezing rain": "fas fa-cloud-rain",
    "Light sleet": "fas fa-cloud-meatball",
    "Moderate or heavy sleet": "fas fa-cloud-meatball",
    "Patchy light snow": "fas fa-snowflake",
    "Light snow": "fas fa-snowflake",
    "Patchy moderate snow": "fas fa-snowflake",
    "Moderate snow": "fas fa-snowflake",
    "Patchy heavy snow": "fas fa-snowflake",
    "Heavy snow": "fas fa-snowflake",
    "Ice pellets": "fas fa-cloud-meatball",
    "Light rain shower": "fas fa-cloud-showers-heavy",
    "Moderate or heavy rain shower": "fas fa-cloud-showers-heavy",
    "Torrential rain shower": "fas fa-cloud-showers-heavy",
    "Light sleet showers": "fas fa-cloud-meatball",
    "Moderate or heavy sleet showers": "fas fa-cloud-meatball",
    "Light snow showers": "fas fa-snowflake",
    "Moderate or heavy snow showers": "fas fa-snowflake",
    "Light showers of ice pellets": "fas fa-cloud-meatball",
    "Moderate or heavy showers of ice pellets": "fas fa-cloud-meatball",
    "Patchy light rain with thunder": "fas fa-bolt",
    "Moderate or heavy rain with thunder": "fas fa-bolt",
    "Patchy light snow with thunder": "fas fa-bolt",
    "Moderate or heavy snow with thunder": "fas fa-bolt"
  };
  
  function displayWeatherIcon(description, elementId) {
    const iconClass = weatherDescriptions[description];
    const iconElement = document.getElementById(elementId);
    if (iconClass && iconElement) {
      iconElement.className = iconClass;
    }
  }


  function isdayornightleft(is_day){
    var left_field = document.querySelector(".left_field");
    if (is_day === 1) {
        left_field.style.background = "lightblue";
      } else {
        left_field.style.background = "linear-gradient(to top, #636363, #434343)";
      }
  }

  function isdayornightright(is_day){
    var right_field = document.querySelector(".right_field");
    if (is_day === 1) {
        right_field.style.background = "lightblue";
      } else {
        right_field.style.background = "linear-gradient(to top, #636363, #434343)";
      }
  }

document.getElementById("button-73").addEventListener("click", function () {
    var query = document.getElementById('textInput').value;
    var apiKey = ''; // Replace with your actual WeatherAPI key
    var url = 'https://api.weatherapi.com/v1/current.json?key=' + apiKey + '&q=' + query + '&aqi=yes&lang=en';
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var temperature = data.current.temp_f;
        var city = data.location.name;
        var unit = 'F°';
        var unitf = 'F°';
        var uv_index = data.current.uv;
        var time_zone = data.location.tz_id;
        var time = data.location.localtime;
        var feels_like = data.current.feelslike_f;
        var description = data.current.condition.text;
        var AQI_index = data.current.air_quality.pm2_5;
        displayWeatherIcon(description, 'weatherIcon');
        var is_day = data.current.is_day;
        

        isdayornightleft(is_day);
        document.getElementById("aqi").textContent = AQI_index;
        document.getElementById("uv").textContent = uv_index;
        document.getElementById("degrees").textContent = temperature;
        document.getElementById("city").textContent = city;
        document.getElementById("unit").textContent = unit;
        document.getElementById("unitf").textContent = unit;
        document.getElementById("timezone").textContent = time_zone;
        document.getElementById("feels_like").textContent = feels_like;
        document.getElementById("description").textContent = description;
        document.getElementById("local_time").textContent = time;

      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  
  document.getElementById("button-74").addEventListener("click", function () {
    var query = document.getElementById('textInput1').value;
    var apiKey = ''; // Replace with your actual WeatherAPI key
    var url = 'https://api.weatherapi.com/v1/current.json?key=' + apiKey + '&q=' + query + '&aqi=yes&lang=en';
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var temperature = data.current.temp_f;
        var city = data.location.name;
        var unit = 'F°';
        var uv_index = data.current.uv;
        var time_zone = data.location.tz_id;
        var time = data.location.localtime;
        var feels_like = data.current.feelslike_f;
        var description = data.current.condition.text;
        var AQI_index = data.current.air_quality.pm2_5;
        displayWeatherIcon(description, 'weatherIcon1');
        var is_day = data.current.is_day;
  
        isdayornightright(is_day);
  
        document.getElementById("degrees1").textContent = temperature;
        document.getElementById("city1").textContent = city;
        document.getElementById("unit1").textContent = unit;
        document.getElementById("aqi1").textContent = AQI_index;
        document.getElementById("uv1").textContent = uv_index;
        document.getElementById("timezone1").textContent = time_zone;
        document.getElementById("local_time1").textContent = time;
        document.getElementById("feels_like1").textContent = feels_like;
        document.getElementById("description1").textContent = description;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  
  
  



  document.getElementById("forecastButton").addEventListener("click", function () {
    var query = document.getElementById('textInput').value;
    var apiKey = ''; // Replace with your actual WeatherAPI key
    var url = 'https://api.weatherapi.com/v1/forecast.json?key=' + apiKey + '&q=' + query + '&days=3';
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var forecast = data.forecast.forecastday;
  
        // Display forecast information
        var forecastBox = document.getElementById("forecastBox");
        forecastBox.innerHTML = "";
  
        for (var i = 0; i < forecast.length; i++) {
          var date = forecast[i].date;
          var description = forecast[i].day.condition.text;
          var temperature = forecast[i].day.avgtemp_f;
          var forecastHtml = '<p>' + date + ': <span>' + description + '</span> (' + temperature + '°F)</p>';
  
          forecastBox.innerHTML += forecastHtml;
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });

  document.getElementById("forecastButton1").addEventListener("click", function () {
    var query = document.getElementById('textInput1').value;
    var apiKey = ''; // Replace with your actual WeatherAPI key
    var url = 'https://api.weatherapi.com/v1/forecast.json?key=' + apiKey + '&q=' + query + '&days=3';
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var forecast = data.forecast.forecastday;
  
        // Display forecast information
        var forecastBox = document.getElementById("forecastBox1");
        forecastBox.innerHTML = "";
  
        for (var i = 0; i < forecast.length; i++) {
          var date = forecast[i].date;
          var description = forecast[i].day.condition.text;
          var temperature = forecast[i].day.avgtemp_f;
          var forecastHtml = '<p>' + date + ': <span>' + description + '</span> (' + temperature + '°F)</p>';
  
          forecastBox.innerHTML += forecastHtml;
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });

  
  
  
  document.getElementById("forecastButton1").addEventListener("click", function () {
    var forecastBox = document.getElementById("forecastBox1");
    if (forecastBox.style.display === "none") {
      forecastBox.style.display = "block";
    } else {
      forecastBox.style.display = "none";
    }
  });
  
  
  


  document.getElementById("forecastButton").addEventListener("click", function () {
    var forecastBox = document.getElementById("forecastBox");
    if (forecastBox.style.display === "none") {
      forecastBox.style.display = "block";
    } else {
      forecastBox.style.display = "none";
    }
  });
  
  const forecastButton = document.getElementById('forecastButton');

forecastButton.addEventListener('click', function () {
  forecastButton.classList.toggle('line');
});








//CHATGPT API 
document.getElementById("button-75").addEventListener("click", function () {
    var apiKey = ''; // Your ChatGPT API key
    var firstCity = document.getElementById("textInput").value;
  
    // Call Weather API to get weather information for the first city
    fetchWeatherData(firstCity)
      .then(data => {
        // Extract relevant weather information for the first city
        var temperature = data.current.temp_f;
        var description = data.current.condition.text;
        var uvIndex = data.current.uv;
        var feelsLike = data.current.feelslike_f;
  
        var secondCity = document.getElementById("textInput1").value;
        var daysInAdvance = document.getElementById("in_advance").value;
  
        // Call Weather API to get weather information for the second city
        fetchWeatherDataFuture(secondCity)
        .then(data => {
            var forecast = data.forecast.forecastday;
            if (forecast.length > daysInAdvance) {
              var maxTemp = forecast[daysInAdvance].day.maxtemp_f;
              var minTemp = forecast[daysInAdvance].day.mintemp_f;
              var rainfall = forecast[daysInAdvance].day.totalprecip_in;
              var humidity = forecast[daysInAdvance].day.avghumidity;
              var uvIndex2 = forecast[daysInAdvance].day.uv;
              
            } else {
              throw new Error('Invalid forecast day');
            }
  
            // Call ChatGPT API to get clothing suggestions
            fetchChatGPTResponse(apiKey, firstCity, temperature, description, uvIndex, feelsLike, secondCity, daysInAdvance, maxTemp, minTemp, rainfall, humidity, uvIndex2)
              .then(response => {
                // Display clothing suggestions
                displaySuggestions(response);
              })
              .catch(error => {
                console.error('Error:', error);
              });
          })
          .catch(error => {
            console.error('Error:', error);
          });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });

  
  
  
  
  
  
  






//CHATGPT response function real 

function fetchChatGPTResponse(apiKey, first_city, temperature, description, uvIndex, feels_like, second_city, days_in_advance, maxTemp, minTemp, rainfall, humidity, uvIndex2) {
    var url = 'https://api.openai.com/v1/chat/completions';
  

    var weather_parametersfirst = 'temp: '+temperature+'F°, '+description+', feels like: '+feels_like+'F°, uv index: ' +uvIndex+'.';
    var weather_parameterssecond = 'forecast parameters for: ' +days_in_advance+ 'days in advance, max temp: ' +maxTemp+'F°, min temp: '+minTemp+'F°, total precipitation: '+rainfall+' inches, humidity: '+humidity+'%, and uv index: '+uvIndex2+' ';
    var prompt1 = 'You are giving weather advice for what a human should wear for their trip. I am in a city with these weather parameters: '+weather_parametersfirst+
    ', I am traveling to another city with these weather parameters: '+weather_parameterssecond+'. Based on the weather conditions here, what are some suggestions for what to bring to the trip?';
    //construct payload for chatGPT API 
    var payload = {
        max_tokens: 1000,
        temperature: 1.5, // Adjust the temperature value as needed
        n: 1,
        stop: '\n',
        model: 'gpt-3.5-turbo-16k',
        messages: [
          { role: 'user', content: 'I am in a city with these weather parameters: ' + weather_parametersfirst + '.' },
          { role: 'user', content: 'I am traveling to another city with these weather parameters: ' + weather_parameterssecond + '.' },
          { role: 'user', content: 'List articles of clothing that I should bring to the destination city only.'},
          {role: 'user', content: 'if the temperature of second city is cold, suggest pants, sweaters, long sleeved shirts.'},
          {role: 'user', content: 'if the temperature of second city is hot, suggest shorts, skirts, short sleeved clothing'},
        ],
      };
  
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiKey,
        },
        body: JSON.stringify(payload),
    })
        .then(response => response.json())
        .then(data => {
            console.log('ChatGPT API Response:', data);
            console.log('ChatGPT message only: ', data.choices[0].message);
            return data.choices[0].message.content;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}








  


//API weather fetcher
function fetchWeatherData(query) {
    var apiKey = ''; // Replace with your actual WeatherAPI key
    var url = 'https://api.weatherapi.com/v1/current.json?key=' + apiKey + '&q=' + query + '&aqi=yes&lang=en';
  
    return fetch(url)
      .then(response => response.json())
      .catch(error => {
        console.error('Error:', error);
      });
  }

$( ".arrow-icon" ).click(function() {
    $(this).toggleClass("open");
  });


function fetchWeatherDataFuture(query){
    var apiKey = ''; // Replace with your actual WeatherAPI key
    var url = 'https://api.weatherapi.com/v1/forecast.json?key=' + apiKey + '&q=' + query + '&days=3&aqi=yes&lang=en';
    return fetch(url)
      .then(response => response.json())
      .catch(error => {
        console.error('Error:', error);
      });
  }



    // Function to display clothing suggestions
function displaySuggestions(suggestions) {
    var suggestionsElement = document.getElementById('Suggestions');
    suggestionsElement.textContent = suggestions;
  }
