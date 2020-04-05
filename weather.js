
const COORDS = 'coords';
const WEATHER_APIKEY = 'a6ddbdfc2d38462a9046a5d230d8cf79';


function showWeather(description, temp, name){
    const weather = document.querySelector('.js-weather');
    weather.innerText = `${description} ${temp}°C
@${name}`;
}

function getWeatherInfo(coords){
    console.log('get weather info');
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${WEATHER_APIKEY}&units=metric`)
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            console.log(json);

            const lat = json.coord.lat
                , lon = json.coord.lon
                , main = json.weather[0].main
                , description = json.weather[0].description
                , temp = json.main.temp
                , feels_like = json.main.feels_like
                , temp_min = json.main.temp_min
                , temp_max = json.main.temp_max
                , name = json.name;

            // 화면에 표시
            // 화면에 div 추가하고 위도, 경도, 날씨, 온도 보여주기
            showWeather(description, temp, name);

        })
}


function saveCoords(obj){
    console.log('save');
    localStorage.setItem(COORDS, JSON.stringify(obj));
}

/**
 * latitude: 37.3686272
 longitude: 127.1136256
 * @param success
 */
function successCallback(success){
    const latitude = success.coords.latitude;
    const longitude = success.coords.longitude;
    const coordsObj = { latitude : latitude,
                        longitude : longitude
    };
    console.log('성공');
    console.dir(coordsObj);

    // 이좌표를 로컬디비에 넣어준다.
    saveCoords(coordsObj);
    getWeatherInfo(coordsObj);
}

function errorCallback(error){
    console.log(error.message);
}

function getGeolocation(){
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

function loadCoords(){
    // 로컬스토리지에서 좌표를 가져온다.

    const loadedCoords = localStorage.getItem(COORDS);
    console.log("로컬에서 가져온거 check : ", loadedCoords);
    // 저장돼있는 좌표가 없으면 geolocation에서 좌표를 가져와서 로컬디비에 넣는다.
    if (loadedCoords === null){
        console.log('get coords!!');
        getGeolocation();
    }
    else{
        // 저장돼있는게 있으면 json을 객체로바꿔서 날씨정보를 가져올 api를 호출한다.
        console.log('존재함', loadedCoords);
        getWeatherInfo(JSON.parse(loadedCoords));
    }
}

function init(){
    // 좌표를 가져옴.
    loadCoords();
}

init();