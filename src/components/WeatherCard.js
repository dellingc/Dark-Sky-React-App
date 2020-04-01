import React from 'react';
import '../styles/weathercard.css';

function WeatherCard(props) {

       return(
        <div className='weather-card'>
            <h3>{props.time}</h3>
            <img src={props.iconSwitch(props.icon, props.highTemp)}
                 alt={props.icon} 
                 width='100' height='100'
                 title={props.icon}/>
            <h3 id='summary'>{props.summary}</h3>
            <div className='ind-card-row'>
                <div className='ind-card-row-child-l'>
                    <h4>High: {props.highTemp}&#176; F</h4>
                    <h4>Low: {props.lowTemp}&#176; F</h4>
                    <h4>Precip Chance: {props.precipProb}%</h4>
                </div>
                <div className='ind-card-row-child-r'>
                    <h4>Winds: {props.windSwitch(props.windDir) + ' ' + props.windSpeed} mph</h4>
                    <h4>Humidity: {props.humidity}%</h4>
                    <h4>UV Index: {props.uvIndex}</h4>
                </div>
            </div>
        </div>
    ); 
}

export default WeatherCard;