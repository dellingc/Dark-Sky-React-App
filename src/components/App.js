import React from 'react';
import darksky from '../api/darksky';
import WeatherCard from './WeatherCard';
import CurrentCard from './CurrentCard';
import Location from './Location';
import Loading from './Loading';
import '../styles/App.css';
import moment from 'moment-timezone';

import rain from '../images/rain.png';
import sun from '../images/sun.png';
import partlyCloudy from '../images/partly-cloudy.png';
import cloudy from '../images/cloudy.png';
import snow from '../images/snow.png';
import sleet from '../images/sleet.png';
import wind from '../images/wind.png';
import hot from '../images/hot.png';
import clearMoon from '../images/clear-moon.png';
import rainMoon from '../images/rainy-moon.png';
import snowMoon from '../images/snow-moon.png';
import cloudMoon from '../images/cloudy-moon.png';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loading: true,
      timezone: null,
      currentTime: null,
      currentIcon: null, 
      currentSummary: null, 
      currentTemp: null,
      currentWind: null,
      currentHumid: null,
      currentWindDir: null,
      currentUV: null,
      currentVis: null, 
      daily: [
        {temperatureHigh: 'loading', temperatureLow: 'loading', precipProbablility: 'loading'},
        {temperatureHigh: 'loading', temperatureLow: 'loading', precipProbablility: 'loading'},
        {temperatureHigh: 'loading', temperatureLow: 'loading', precipProbablility: 'loading'},
        {temperatureHigh: 'loading', temperatureLow: 'loading', precipProbablility: 'loading'},
        {temperatureHigh: 'loading', temperatureLow: 'loading', precipProbablility: 'loading'},
        {temperatureHigh: 'loading', temperatureLow: 'loading', precipProbablility: 'loading'},
        {temperatureHigh: 'loading', temperatureLow: 'loading', precipProbablility: 'loading'},
        {temperatureHigh: 'loading', temperatureLow: 'loading', precipProbablility: 'loading'}
      ]
    };
  }

  getWeather = async (query) => {
      this.setState({loading: true})
      const response = await darksky.get(query)

      this.setState({
        loading: false,
        timezone: response.data.timezone,
        currentTime: response.data.current.time,
        currentIcon: response.data.current.icon,
        currentSummary: response.data.current.summary, 
        currentTemp: response.data.current.temperature,
        currentWind: response.data.current.windSpeed,
        currentWindDir: response.data.current.windBearing,
        currentHumid: response.data.current.humidity,
        currentUV: response.data.current.uvIndex,
        currentVis: response.data.current.visibility,
        currentDew: response.data.current.dewPoint, 
        daily: response.data.daily.data,
      })
  }

  componentDidMount(){
    this.getWeather('?lat=37.5260&lon=-77.4416')
  }

  //param1 = api icon text, param2 = temp, param3 = time
  iconSwitch(param1, param2, param3){
    if(param2 < 90){
        switch(param1){
        case 'rain': {
          if(param3 > 1930 || param3 < 700){
            return rainMoon
          } else {
            return rain
          }
        }
        case 'partly-cloudy-day':
            return partlyCloudy;
        case 'cloudy':
            return cloudy;
        case 'clear-day':
            return sun;
        case 'sleet':
            return sleet;
        case 'snow': {
          if(param3 > 1930 || param3 < 700){
            return snowMoon
          } else {
            return snow
          }
        }
        case 'wind':
            return wind;
        case 'fog':
            return cloudy;
        case 'clear-night':
            return clearMoon;
        case 'partly-cloudy-night':
            return cloudMoon;
        default:
            return sun;
        }
    }else {
      return hot
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

  render() {
    const cards =[]
    const {loading} = this.state;

    for (let i = 0; i < 8; i++){
      cards.push(<WeatherCard 
        time={moment.tz(moment.unix(this.state.daily[i].time),(this.state.timezone)).format('dddd - MMM Do')}
        highTemp={Math.floor(this.state.daily[i].temperatureHigh)}
        lowTemp={Math.floor(this.state.daily[i].temperatureLow)} 
        precipProb={Math.floor(this.state.daily[i].precipProbability * 100)}
        summary={this.state.daily[i].summary}
        icon={this.state.daily[i].icon}
        windSpeed={Math.floor(this.state.daily[i].windSpeed)}
        humidity={Math.floor(this.state.daily[i].humidity * 100)}
        windDir={this.state.daily[i].windBearing}
        uvIndex={this.state.daily[i].uvIndex}
        dewPoint={Math.floor(this.state.daily[i].dewPoint)}
        iconSwitch={this.iconSwitch}
        windSwitch={this.windSwitch}
      />)
    }

    return(
      <div className='content'>
        <Location getWeather={this.getWeather}/>
        <div className='cards'>
          <div>
          {loading ? <Loading /> : 
            <CurrentCard 
              currentTime={moment.tz(moment.unix(this.state.currentTime),(this.state.timezone)).format('HHmm')}
              currentIcon={this.state.currentIcon}
              currentSummary={this.state.currentSummary}
              currentTemp={Math.floor(this.state.currentTemp)}
              currentWind={Math.floor(this.state.currentWind)}
              currentWindDir={this.state.currentWindDir}
              currentHumid={Math.floor(this.state.currentHumid * 100)}
              currentUV={this.state.currentUV}
              currentVis={Math.floor(this.state.currentVis)}
              currentDew={Math.floor(this.state.currentDew)}
              iconSwitch={this.iconSwitch}
              windSwitch={this.windSwitch}
            />
          }
          </div>
          <div className='cards-row'>
            {loading ? <div></div> :cards[0]}{loading ? <div></div> :cards[1]}{loading ? <div></div> :cards[2]}{loading ? <div></div> :cards[3]}
          </div>
          <div className='cards-row'>
            {loading ? <div></div> :cards[4]}{loading ? <div></div> :cards[5]}{loading ? <div></div> :cards[6]}{loading ? <div></div> :cards[7]}
          </div>
          <footer>
          Icons created by <a href='https://www.iconfinder.com/iconsets/weather-and-forecast-free' 
                              target='_blank'
                              rel="noopener noreferrer">icon lauk</a><br/>
          Weather data provided by <a href='https://www.darksky.net'
                                      target='_blank'
                                      rel='noopener noreferrer'>Dark Sky API</a><br/>
          &copy; Dellinco Enterprises 2020
          </footer>
        </div>
      </div>
    )
  }
}

export default App;
