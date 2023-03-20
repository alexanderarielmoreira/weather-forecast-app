import React from "react";
import Spinner from './Spinner'; 

const Card = ({
    showData,
    loadingData,
    weather,
    forecast
})=> {

    let today = new Date();
    let day = today.getDate(); 
    let month = today.getMonth() + 1; 
    let year = today.getFullYear(); 
    let date = day + '/' + month + '/' + year; 

    let url = ''; 
    let iconUrl = '';

    let iconUrl3 = '';
    let iconUrl6 = '';
    let iconUrl9 = ''; 

    let forecastDate3 = '';
    let forecastDate6 = '';
    let forecastDate9 = '';
    
    if(loadingData){
        return <Spinner />; 
    }

    if(showData){
        url = 'http://openweathermap.org/img/w/'; 
        iconUrl = url + weather.weather[0].icon + '.png'; 

        iconUrl3 = url + forecast.list[1].weather[0].icon + '.png';
        iconUrl6 = url + forecast.list[2].weather[0].icon + '.png';
        iconUrl9 = url + forecast.list[3].weather[0].icon + '.png'; 

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13);
        
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13);

        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 13); 
    }
    
    return(
            <div className="mt-5"> 
                {
                    showData === true ? (
                        <div className="container"> 
                            <div className="card mb-3 msx-auto bg-dark text-light"> 
                                <div className="row g-0">
                                    <div className="col-md-4">
                                    <h4 className="card-title"> {weather.name} </h4>
                                    <p className="card-date"> {date} </p> 
                                    <h3 className="card-temp"> {(weather.main.temp - 273.15).toFixed(1)}° C </h3>
                                    <p className="card-desc"> <img src={iconUrl} alt="icon-weather" /> {weather.weather[0].description} </p> 
                                    <img src='https://images.pexels.com/photos/2348811/pexels-photo-2348811.jpeg?auto=compress&cs=tinysrgb&w=600' 
                                    className="img-fluid rounded-start" 
                                    alt="background-image"
                                    />
                                    </div>

                                    <div className="col-md-8">
                                        <div className="card-body msx-auto mt-2">
                                              <h5 className="card-text">Velocidad del viento: {(weather.wind.speed)} m/s</h5>
                                              <h5 className="card-text">Temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)}° C</h5>
                                              <h5 className="card-text">Temperatura mínima: {(weather.main.temp_min - 273.15).toFixed(1)}° C</h5>
                                              <h5 className="card-text">Sensación térmica: {(weather.main.feels_like - 273.15).toFixed(1)}° C</h5>
                                              <h5 className="card-text">Humedad: {(weather.main.humidity)} %</h5>
                                              
                                        </div>
                                        <hr />

                                        <div className="row mt-4">
                                            <div className="col">
                                                <p> {forecastDate3} horas</p>
                                                <p className="description"> <img src={iconUrl3} alt="icon-3" /> {forecast.list[1].weather[0].description} </p> 
                                                <p className="temp"> {(forecast.list[1].main.temp - 273.15).toFixed(1)}° C</p>
                                            </div>

                                            <div className="col">
                                                <p> {forecastDate6} horas</p>
                                                <p className="description"> <img src={iconUrl6} alt="icon-6" /> {forecast.list[2].weather[0].description} </p> 
                                                <p className="temp"> {(forecast.list[2].main.temp - 273.15).toFixed(1)}° C</p> 
                                            </div>

                                            <div className="col">
                                                <p> {forecastDate9} horas</p>
                                                <p className="description"> <img src={iconUrl9} alt="icon-9" /> {forecast.list[3].weather[0].description} </p> 
                                                <p className="temp"> {(forecast.list[3].main.temp - 273.15).toFixed(1)}° C</p> 
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                            
                        </div>
                    ):(
                        <p className='text-light'>Sin datos para visualizar. Ingresa el nombre de una ciudad.</p>
                    )

                }
            
            </div>
    ) 
        
};  

export default Card;

 