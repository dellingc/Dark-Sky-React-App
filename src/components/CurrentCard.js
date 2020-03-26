import React from 'react';
import '../styles/weathercard.css'

function CurrentCard(props) {
    return(
        <div className='weather-card'>
            <p>Today - {props.time}</p>
            <p>Current Temp: {props.currentTemp} degrees</p>
            <p>Conditions: {props.currentSky}</p>
            <p>Forecast High: {props.highTemp} degrees</p>
            <p>Forecast Low: {props.lowTemp} degrees</p>
            <p>Rain Chance: {props.precipProb}%</p>
        </div>
    );
}

export default CurrentCard;