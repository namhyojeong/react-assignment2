import { useEffect, useState } from "react";
import "./App.css";

const API_KEY = '70b633589a881d40f9bc32b473f07139';

function Weather() {
    const [cityName, setCityName] = useState('');
    const [weather, setWeather] = useState('');
    const [wind, setWind] = useState({});
    const [showWeather, setShowWeather] = useState(false);

    useEffect(() => {
        const sungnamCoords = {
            latitude: 37.4202,
            longitude: 127.1269
        };  

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${sungnamCoords.latitude}&lon=${sungnamCoords.longitude}&appid=${API_KEY}`)
            .then(res => res.json())
            .then(json => {
                setCityName(json.name);
                setWeather(json.weather[0]);
                setWind(json.wind);
            });
    }, []);

    const onClickHandler = () => {
        setShowWeather(true);
    };


    return (
        <>
            <button className="transparent-button" onClick={onClickHandler}>날씨보기</button>
            {showWeather && (
                <>
                    <h3>현재 날씨 정보 - 성남시</h3>
                    <h4>{`조회 도시 : ${cityName}`}</h4>
                    <h4>{`날씨 : ${weather.main} 날씨 설명 : ${weather.description}`}</h4>
                    <h4>{`풍향 : ${wind.deg}도, 풍속 : ${wind.speed}`}</h4>
                </>
            )}
        </>
    );
}

export default Weather;