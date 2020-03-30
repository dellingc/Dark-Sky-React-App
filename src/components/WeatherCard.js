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

class WeatherCard extends React.Component {
    constructor(props){
        super(props)
    }

    renderSwitch(param1, param2){
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
            <h3>{this.props.time}</h3>
            <img src={this.renderSwitch(this.props.icon, this.props.highTemp)}
            alt={this.props.icon} 
            width='100' height='100'
            title={this.props.icon}/>
            <h3>{this.props.summary}</h3>
            <div className='card-row'>
            <div className='card-row-child-l'>
            <h4>High: {this.props.highTemp}&#176; F</h4>
            <h4>Low: {this.props.lowTemp}&#176; F</h4>
            <h4>Precip Chance: {this.props.precipProb}%</h4>
            </div>
            <div className='card-row-child-r'>
            <h4>Winds: {this.windSwitch(this.props.windDir) + ' ' + this.props.windSpeed} mph</h4>
            <h4>Humidity: {this.props.humidity}%</h4>
            <h4>UV Index: {this.props.uvIndex}</h4>
            </div>
            </div>

        </div>
    ); 
    }
    
}

export default WeatherCard;