
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import {useState} from "react";

export default function SearchBox( {updateInfo} ){

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "2fd13af9b8c92bf94e983aca2a0aa9a5";

    let getWeatherInfo = async ( ) => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json(); // ← added ()
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }
        catch(err){
            throw err;
        }
    };


    let handelChange = (evt) => {
        setCity(evt.target.value);
    };

    let handelSubmit =  async (evt) =>{
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
    };

    return (
    <div className="SearchBox">
        <form action="" onSubmit={handelSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handelChange} required/>
                <br />
                <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <p style={{color: "red"}}>No such place in our API.</p>}
        </form>
    </div>
    );
}