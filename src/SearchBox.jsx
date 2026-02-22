import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {

    const [city, setcity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "ce63147aa8d7a180c104d7cf04f6df32";

    // ✅ Fetch weather info
    const getWheatherInfo = async () => {

        const response = await fetch(
            `${API_URL}?q=${city},IN&appid=${API_KEY}&units=metric`
        );

        const jsonResponse = await response.json();

        // ✅ check if city exists
        if (jsonResponse.cod !== 200) {
            throw new Error("City not found");
        }

        const result = {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelslike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };

        return result;
    };

    // ✅ input change
    const handleChange = (e) => {
        setcity(e.target.value);
    };

    // ✅ form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const newInfo = await getWheatherInfo();

            updateInfo(newInfo);

            setError(false);   // reset error
            setcity("");

        } catch (err) {

            setError(true);   // show error message

        }
    };

    return (
        <div className='SearchBox'>

            <form onSubmit={handleSubmit}>

                <TextField
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                    error={error}
                    helperText={error ? "City not found. Try Pune, Mumbai, etc." : ""}
                />

                <br /><br />

                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    type="submit"
                >
                    Search
                </Button>

            </form>

        </div>
    );
}