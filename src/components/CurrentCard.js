import React from 'react';
import '../styles/weathercard.css';
import rain from '../images/rain.png';
import sun from '../images/sun.png';
import partlyCloudy from '../images/partly-cloudy.png';
import cloudy from '../images/cloudy.png';
import snow from '../images/snow.png';
import sleet from '../images/sleet.png';
import wind from '../images/wind.png';
import hot from '../images/hot.png';

class CurrentCard extends React.Component {
    constructor(props) {
        super(props)
    }


    iconSwitch(param1, param2){
        if(param2 < 90){
            switch(param1){
            case 'rain':
                return rain;
            case 'partly-cloudy-day':
                return partlyCloudy;
            case 'cloudy':
                return cloudy;
            case 'clear-day':
                return sun;
            case 'sleet':
                return sleet;
            case 'snow':
                return snow;
            case 'wind':
                return wind;
            case 'fog':
                return cloudy;
            default:
                return sun;
            }
        } else {
            return hot;
        }
        
    }

    windSwitch(param) {
        switch(true){
            case (param >= 338 || param < 22):
                return 'N'
            case (param >= 22 && param < 68):
                return 'NE'
            case (param >= 68 && param < 112):
                return 'E'
            case (param >= 112 && param < 158):
                return 'ESE'
            case (param >= 158 && param < 202):
                return 'S'
            case (param >= 202 && param < 248):
                return 'SW'
            case (param >= 248 && param < 292):
                return 'W'
            case (param >= 292 && param < 338):
                return 'NW'
            default:
                return 'Wind Dir'
        }
    }


    render(){
      return(
        <div className='weather-card'>
            <h3>Currently:</h3>
            <h4>Current Temp: {this.props.currentTemp}&#176; F</h4>
            <h4>Conditions: {this.props.currentSummary}</h4>
            <h4>Winds: {this.props.currentWind} mph</h4>
            <h4>Wind Direction: {this.windSwitch(this.props.currentWindDir)}</h4>
            <h4>Humidity: {this.props.currentHumid}%</h4>
            <h4>Visibility: {this.props.currentVis} miles</h4>
            <h4>UV Index: {this.props.currentUV}</h4>
            <img src={this.iconSwitch(this.props.currentIcon, this.props.currentTemp)} alt='current' height='100' width='100'/>
        </div>
    );  
    }
    
}

export default CurrentCard;