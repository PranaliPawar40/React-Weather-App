import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}){
    //const INIT_URL = "https://images.unsplash.com/photo-1673191898695-8252d409d82c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    const HOT_URL= "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const COLD_URL="https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const RAINY_URL="https://images.unsplash.com/photo-1599806112354-67f8b5425a06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    
    return(
    <div className="InfoBox">
        {/* <h1>WeatherInfo - {info.weather}</h1> */}
        <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity > 80 ? RAINY_URL : (info.temp > 15 ? HOT_URL : COLD_URL)}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary'}} component={"span"}>
                    <p>Temperature: {info.temp}&deg;C</p>
                    <p>Humidity: {info.humidity}</p>
                    <p>Min Temp: {info.tempMin}&deg;C</p>
                    <p>Max Temp: {info.tempMax}&deg;C</p>
                    <p>The weather can be described as {info.weather} feels like: {info.feelslike}&deg;C</p>
                </Typography>
            </CardContent>
            </Card>
        </div>
    </div>
    );
}