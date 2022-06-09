const APIKEY = '9ceb5184b274975edd22e28d0c8bf4bb'

let ville = document.getElementById('inputCity');

document.querySelector('#form').addEventListener('submit', function(e){
    apiCall(ville.value);
    if (ville.value === ''){
        alert('Veuillez entrer une ville');
    }

    e.preventDefault();
})

let apiCall = function(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url).then(response => {
        return response.json()
    }).then(data => {
        // error 404
        if (data.cod === '404') {
            alert('Ville introuvable');
        } else {
            // console.log(data);

            console.log(data);
            document.querySelector('#city').innerHTML = data.name;
            document.querySelector('#temp').innerHTML = data.main.temp + ' °C';
            if (data.main.temp > 25) {
                document.querySelector('#temp').style.backgroundColor = 'red';
            }
            if (data.main.temp > 10 < 25) {
                document.querySelector('#temp').style.backgroundColor = 'orange';
            }
        }
        if (data.main.temp < 10) {
            document.querySelector('#temp').style.backgroundColor = 'blue';
        }
        document.querySelector('#weather').innerHTML = data.weather[0].description;
        let meteoicon = data.weather[0].icon;
        document.querySelector('#icon').innerHTML = "<img src='http://openweathermap.org/img/wn/" + meteoicon + "@2x.png'/>";
    })
        .catch((err) => console.log('Erreur : ' + err));
};

