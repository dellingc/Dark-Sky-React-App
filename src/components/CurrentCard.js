import React from 'react';
import '../styles/weathercard.css';
import rain from '../images/rain.png';
import sun from '../images/sun.png';
import partlyCloudy from '../images/partly-cloudy.png';

class CurrentCard extends React.Component {
    constructor(props) {
        super(props)
    }
    renderSwitch(param){
        switch(param){
            case 'rain':
                return rain;
            case 'partly-cloudy-day':
                return partlyCloudy;
            default:
                return sun;
        }
    }
    render(){
      return(
        <div className='weather-card'>
            <h3>Today - {this.props.time}</h3>
            <p>Current Temp: {this.props.currentTemp}&#176; F</p>
            <p>Conditions: {this.props.currentSky}</p>
            <p>Forecast High: {this.props.highTemp}&#176; F</p>
            <p>Forecast Low: {this.props.lowTemp}&#176; F</p>
            <p>Rain Chance: {this.props.precipProb}%</p>
            <img src={this.renderSwitch(this.props.currentIcon)} alt='current' height='100' width='100'/>
        </div>
    );  
    }
    
}

export default CurrentCard;