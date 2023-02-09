const request = 'https://api.openweathermap.org/data/2.5/forecast?lat=45.55111&lon=18.69389&appid=e294b9061d827c22079003024df76e9d';
function makeGetRequest(path) {
    axios.get(path).then(
        (response) => {
            var result = response.data;
            console.log(result.list[0].weather[0].main);
            document.getElementById('temp1').innerHTML = (Math.round(result.list[0].main.temp - 273) + "°C").bold();
            document.getElementById('time1').innerHTML = result.list[0].dt_txt.slice(11, 16).bold();
            document.getElementById('desc1').innerHTML = result.list[0].weather[0].main.bold();

            document.getElementById('temp2').innerHTML = (Math.round(result.list[1].main.temp - 273) + "°C").bold();
            document.getElementById('time2').innerHTML = result.list[1].dt_txt.slice(11, 16).bold();
            document.getElementById('desc2').innerHTML = result.list[1].weather[0].main.bold();

            document.getElementById('temp3').innerHTML = (Math.round(result.list[2].main.temp - 273) + "°C").bold();
            document.getElementById('time3').innerHTML = result.list[2].dt_txt.slice(11, 16).bold();
            document.getElementById('desc3').innerHTML = result.list[2].weather[0].main.bold();

            document.getElementById('temp4').innerHTML = (Math.round(result.list[3].main.temp - 273) + "°C").bold();
            document.getElementById('time4').innerHTML = result.list[3].dt_txt.slice(11, 16).bold();
            document.getElementById('desc4').innerHTML = result.list[3].weather[0].main.bold();

            document.getElementById('temp5').innerHTML = (Math.round(result.list[4].main.temp - 273) + "°C").bold();
            document.getElementById('time5').innerHTML = result.list[4].dt_txt.slice(11, 16).bold();
            document.getElementById('desc5').innerHTML = result.list[4].weather[0].main.bold();

            document.getElementById('temp6').innerHTML = (Math.round(result.list[5].main.temp - 273) + "°C").bold();
            document.getElementById('time6').innerHTML = result.list[5].dt_txt.slice(11, 16).bold();
            document.getElementById('desc6').innerHTML = result.list[5].weather[0].main.bold();

            document.getElementById('temp7').innerHTML = (Math.round(result.list[6].main.temp - 273) + "°C").bold();
            document.getElementById('time7').innerHTML = result.list[6].dt_txt.slice(11, 16).bold();
            document.getElementById('desc7').innerHTML = result.list[6].weather[0].main.bold();

            document.getElementById('temp8').innerHTML = (Math.round(result.list[7].main.temp - 273) + "°C").bold();
            document.getElementById('time8').innerHTML = result.list[7].dt_txt.slice(11, 16).bold();
            document.getElementById('desc8').innerHTML = result.list[7].weather[0].main.bold();
        },
        (error) => {
            console.log(error);
        }
    );
}
makeGetRequest(request);

// API call
function fire(){
    let queryUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + document.getElementById("search").value + "&limit=5&appid=e294b9061d827c22079003024df76e9d";
    

    axios.get(queryUrl).then(
        (response) => {
            var result1 = response.data;
            document.getElementById("cityName").innerHTML = result1[0].name;
            let lat = result1[0].lat;
            let lon = result1[0].lon;
            const request2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon +'&appid=e294b9061d827c22079003024df76e9d';
            axios.get(request2).then(
                (response2) => {
                    var result2 = response2.data;
                    document.getElementById("currentTemperature").innerHTML = "Current temperature: "+ (Math.round(result2.list[0].main.temp - 273) + "°C").bold();
                    document.getElementById("feelsLike").innerHTML = "Feels like: " + (Math.round(result2.list[0].main.feels_like - 273) + "°C").bold();
                    document.getElementById("description2").innerHTML = result2.list[0].weather[0].description[0].toUpperCase() + result2.list[0].weather[0].description.substring(1); 
                },
        (error) => {
            console.log(error);
        }
    );
                },
        (error) => {
            console.log(error);
        }
    );
}