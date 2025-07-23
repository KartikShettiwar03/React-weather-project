
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

export default function InfoBox( {info}){

    const INIT_URL = "https://images.unsplash.com/photo-1592639296346-560c37a0f711?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVsaGl8ZW58MHx8MHx8fDA%3D";

    const HOT_URL = "https://imagesvs.oneindia.com/img/2018/03/heatwave-1519848798.jpg";
    const COLD_URL = "https://staticimg.amarujala.com/assets/images/2022/12/30/kanapara_1672381887.jpeg?w=750";
    const RAIN_URL = "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/ezgif-sixteen_nine_619.jpg?size=948:533";

    const HOT_ICON = DeviceThermostatIcon;
    const COLD_ICON = AcUnitIcon;
    const RAIN_ICON = ThunderstormIcon;

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image= {info.humidity>80? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {
                        info.humidity > 80
                            ? <ThunderstormIcon />
                            : info.temp > 20
                            ? <DeviceThermostatIcon />
                            : <AcUnitIcon />
                        }
                    </Typography>
                    <Typography variant="body2" color= "text.secondary" component={"span"}>
                        <div>Temprature = {info.temp}&deg;C</div>
                        <div>Humidity = {info.humidity}</div>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feels_like}&deg;C</p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    );
}