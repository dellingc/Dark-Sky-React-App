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
            <h3>Today - {this.props.time}</h3>
            <h4>Current Temp: {this.props.currentTemp}&#176; F</h4>
            <h4>Conditions: {this.props.currentSky}</h4>
            <h4>Forecast High: {this.props.highTemp}&#176; F</h4>
            <h4>Forecast Low: {this.props.lowTemp}&#176; F</h4>
            <h4>Rain Chance: {this.props.precipProb}%</h4>
            <img src={this.renderSwitch(this.props.currentIcon, this.props.currentTemp)} alt='current' height='100' width='100'/>
        </div>
    );  
    }
    
}

export default CurrentCard;