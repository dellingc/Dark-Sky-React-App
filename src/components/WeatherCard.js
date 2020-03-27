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

    render(){
       return(
        <div className='weather-card'>
            <h3>{this.props.time}</h3>
            <h4>High: {this.props.highTemp}&#176; F</h4>
            <h4>Low: {this.props.lowTemp}&#176; F</h4>
            <h4>Precip Chance: {this.props.precipProb}%</h4>
            <h4>Conditions: {this.props.summary}</h4>
            <img src={this.renderSwitch(this.props.icon, this.props.highTemp)} alt='conditions' width='100' height='100'/>
        </div>
    ); 
    }
    
}

export default WeatherCard;