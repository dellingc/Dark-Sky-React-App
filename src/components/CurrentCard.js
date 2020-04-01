import React from 'react';
import '../styles/weathercard.css';

function CurrentCard(props) {

      return(
        <div className='weather-card'>
            <h3>Currently: </h3>
            <img src={props.iconSwitch(props.currentIcon, props.currentTemp, parseInt(props.currentTime))} 
                 alt={props.currentIcon} 
                 title={props.currentIcon}
                 height='100' width='100'
            />
            <h3>{props.currentSummary}</h3>
            <div className='ind-card-row'>
                <div className='ind-card-row-child-l'>
                    <h4>Current Temp: {props.currentTemp}&#176; F</h4>
                    <h4>Dew Point: {props.currentDew}&#176; F</h4>
                    <h4>Winds: {props.windSwitch(props.currentWindDir) + ' ' + props.currentWind} mph</h4>
                </div>
                <div className='ind-card-row-child-r'>
                    <h4>Humidity: {props.currentHumid}%</h4>
                    <h4>Visibility: {props.currentVis} miles</h4>
                    <h4>UV Index: {props.currentUV}</h4>
                </div>
            </div>
        </div>
    );  
}

export default CurrentCard;