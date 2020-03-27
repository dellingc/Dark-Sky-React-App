import React from 'react';
import '../styles/weathercard.css'

function WeatherCard(props) {
    return(
        <div className='weather-card'>
            <p>{props.time}</p>
            <p>High: {props.highTemp} degrees</p>
            <p>Low: {props.lowTemp} degrees</p>
            <p>Rain Chance: {props.precipProb}%</p>
            <p>Conditions: {props.summary}</p>
        </div>
    );
}

export default WeatherCard;