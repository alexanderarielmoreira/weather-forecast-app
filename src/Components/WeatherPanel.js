//Styles;
import '../assets/css/bootstrap.min.css';

//Hooks;
import React, {useState} from 'react'; 

//Components;
import Form from './Form';
import Card from './Card'; 

const WeatherPanel = ()=> {

    let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?appid=0b3ad0934eb49ce30485e70710b02e88&lang=es'; 

    let cityUrl = '&q=';  

    let urlForeCast = 'https://api.openweathermap.org/data/2.5/forecast?appid=0b3ad0934eb49ce30485e70710b02e88&lang=es'; 

    const [weather, setWeather] = useState([]); 
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState(''); 
    
    const getLocation = async(loc)=> {
        setLoading(true);
        setLocation(loc);

        //Weather;

        urlWeather = urlWeather + cityUrl + loc;

        await fetch(urlWeather).then(
            (response)=> {
                if(!response.ok){ 
                    throw {response}
                }

                return response.json()
            }
        ).then((weatherData)=> {
            console.log(weatherData); 
            setWeather(weatherData);  
        }).catch(
            error => {
                console.log(error); 
                setLoading(false); 
                setShow(false); 
            }
        ); 
        
        //Forecast;

        urlForeCast = urlForeCast + cityUrl + loc; 

        await fetch(urlForeCast).then(
            (response)=> {
                if(!response.ok){ 
                    throw {response}
                }

                return response.json()
            }
        ).then((forecastData)=> {
            console.log(forecastData); 
            setForecast(forecastData);  
            
            setLoading(false); 
            setShow(true); 

        }).catch(
            error => {
                console.log(error); 
                setLoading(false); 
                setShow(false); 
            }
        );

    }
    
    return(
        <React.Fragment>
            <Form newLocation = {getLocation} /> 
            <Card 
                showData = {show} 
                loadingData = {loading}
                weather = {weather} 
                forecast = {forecast} 
            />
        </React.Fragment>
    );
}

export default WeatherPanel; 

