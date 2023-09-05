document.getElementById("button-56").addEventListener("click", function () {
    var query = document.getElementById('textInput').value;
    var apiKey = ''; // Replace with your actual Weatherbit API key
    var url = 'https://api.weatherbit.io/v2.0/current?city=' + query + '&key=' + apiKey + '&units=I';
  

    fetch(url)
    .then(response => response.json())
    .then(data => {
      var temperature = data.data[0].temp;
      var city = data.data[0].city_name;
      var unit = 'Fahrenheit';
      var time_zone = data.data[0].timezone;
      var time = data.data[0].app_temp;
      var description = data.data[0].weather.description;
      

      document.getElementById("degrees").textContent = temperature;
      document.getElementById("city").textContent = city;
      document.getElementById("unit").textContent = unit;
      document.getElementById("timezone").textContent = time_zone;
      document.getElementById("time").textContent = time;
      document.getElementById("description").textContent = description;
      
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

document.getElementById("button-57").addEventListener("click", function () {
    var query = document.getElementById('textInput1').value;
    var apiKey = ''; // Replace with your actual Weatherbit API key
    var url = 'https://api.weatherbit.io/v2.0/current?city=' + query + '&key=' + apiKey + '&units=I';
  

    fetch(url)
    .then(response => response.json())
    .then(data => {
      var temperature = data.data[0].temp;
      var city = data.data[0].city_name;
      var unit = 'Fahrenheit';
      var time_zone = data.data[0].timezone;

      document.getElementById("degrees1").textContent = temperature;
      document.getElementById("city1").textContent = city;
      document.getElementById("unit1").textContent = unit;
      document.getElementById("timezone1").textContent = time_zone;
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
