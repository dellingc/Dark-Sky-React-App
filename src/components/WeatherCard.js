import React from 'react';
import '../styles/weathercard.css';
import rain from '../images/rain.png';
import sun from '../images/sun.png';
import partlyCloudy from '../images/partly-cloudy.png';
import cloudy from '../images/cloudy.jpg'

class WeatherCard extends React.Component {
    constructor(props){
        super(props)
    }

    renderSwitch(param){
        switch(param){
            case 'rain':
                return rain;
            case 'partly-cloudy-day':
                return partlyCloudy;
            case 'cloudy':
                return cloudy;
            default:
                return sun;
        }
    }

    render(){
       return(
        <div className='weather-card'>
            <h3>{this.props.time}</h3>
            <p>High: {this.props.highTemp}&#176; F</p>
            <p>Low: {this.props.lowTemp}&#176; F</p>
            <p>Rain Chance: {this.props.precipProb}%</p>
            <p>Conditions: {this.props.summary}</p>
            <img src={this.renderSwitch(this.props.icon)} alt='conditions' width='100' height='100'/>
        </div>
    ); 
    }
    
}

export default WeatherCard;