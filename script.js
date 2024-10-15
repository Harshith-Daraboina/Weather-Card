const apikey = "1bd080a033d7639c3cab21aa6517b679";
        const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
        
        
        var city = "Bangalore";

        
        async function getWeather(city) {
            const response = await fetch(apiurl + `&q=${city}`+`&appid=${apikey}`);

            
            var data = await response.json();

            if(data.cod == "404"){
                alert("City not found");
                return;
            }
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".city").innerHTML = data.name ;
            document.querySelector(".humidity").innerHTML = data.main.humidity+ "%";
            document.querySelector(".windspeed").innerHTML = data.wind.speed + "kmph";

            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "images/clouds.png";
            }
            if(data.weather[0].main == "Clear"){
                weatherIcon.src = "images/clear.png";
            }
            if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "images/drizzle.png";
            }
            if(data.weather[0].main == "Mist"){
                weatherIcon.src = "images/mist.png";
            }
            if(data.weather[0].main == "Rain"){
                weatherIcon.src = "images/rain.png";
            }
            if(data.weather[0].main == "Snow"){
                weatherIcon.src = "images/snow.png";
            }
        }
        const weatherIcon=document.querySelector(".weather-icon");
        const searchbox = document.querySelector(".search input");
        const searchbtn = document.querySelector(".search button");
        searchbtn.addEventListener("click", () => {
            getWeather(searchbox.value);
        })
        