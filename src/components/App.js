import React from 'react';
import darksky from '../api/darksky';
import WeatherCard from './WeatherCard';
import CurrentCard from './CurrentCard';
import Location from './Location';
import '../styles/App.css';
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
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
      const response = await darksky.get(query)

      console.log(response.data)
      this.setState({
        currentIcon: response.data.current.icon,
        currentSummary: response.data.current.summary, 
        currentTemp: response.data.current.temperature,
        currentWind: response.data.current.windSpeed,
        currentWindDir: response.data.current.windBearing,
        currentHumid: response.data.current.humidity,
        currentUV: response.data.current.uvIndex,
        currentVis: response.data.current.visibility, 
        daily: response.data.daily.data,
      })
  }

  componentDidMount(){
    this.getWeather('?lat=37.5260&lon=-77.4416');
  }

  render() {
    const cards =[]

    for (let i = 1; i < 8; i++){
      cards.push(<WeatherCard 
        time={moment.unix(this.state.daily[i].time).format('dddd - MMM Do')}
        highTemp={Math.floor(this.state.daily[i].temperatureHigh)}
        lowTemp={Math.floor(this.state.daily[i].temperatureLow)} 
        precipProb={Math.floor(this.state.daily[i].precipProbability * 100)}
        summary={this.state.daily[i].summary}
        icon={this.state.daily[i].icon}
        windSpeed={Math.floor(this.state.daily[i].windSpeed)}
        humidity={Math.floor(this.state.daily[i].humidity * 100)}
        windDir={this.state.daily[i].windBearing}
        uvIndex={this.state.daily[i].uvIndex}
      />)
    }

    return(
      <div className='content'>
        <Location callAPI={this.getWeather}/>
        <div className='cards'>
        <div>
          <CurrentCard 
            time={moment.unix(this.state.daily[0].time).format('dddd - MMM Do')}
            currentIcon={this.state.currentIcon}
            currentSummary={this.state.currentSummary}
            currentTemp={Math.floor(this.state.currentTemp)}
            currentWind={Math.floor(this.state.currentWind)}
            currentWindDir={this.state.currentWindDir}
            currentHumid={Math.floor(this.state.currentHumid * 100)}
            currentUV={this.state.currentUV}
            currentVis={Math.floor(this.state.currentVis)}
          />
          </div>
          <div className='card-column'>
          {cards[0]}{cards[1]}{cards[2]}{cards[3]}
          </div>
          <div className='card-column'>
          {cards[4]}{cards[5]}{cards[6]}
          </div>
          <footer>Icons created by <a href='https://www.iconfinder.com/iconsets/weather-and-forecast-free' target='_blank'>icon lauk</a></footer>
        </div>
      
      </div>
    )
  }
}

export default App;
