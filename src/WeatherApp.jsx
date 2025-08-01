
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";
  

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feels_like: 24.84,
        temp: 25.85,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather app by Delta</h2>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo} ></InfoBox>
        </div>
    );
}