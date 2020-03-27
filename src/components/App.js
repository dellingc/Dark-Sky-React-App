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
      currentSky: null, 
      currentTemp: null, 
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
        currentSky: response.data.current.summary, 
        currentTemp: response.data.current.temperature, 
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
      />)
    }

    return(
      <div className='content'>
        <Location callAPI={this.getWeather}/>
        <div className='cards'>
          <CurrentCard 
            time={moment.unix(this.state.daily[0].time).format('dddd - MMM Do')}
            currentIcon={this.state.currentIcon}
            currentSky={this.state.currentSky}
            currentTemp={Math.floor(this.state.currentTemp)}
            highTemp={Math.floor(this.state.daily[0].temperatureHigh)}
            lowTemp={Math.floor(this.state.daily[0].temperatureLow)} 
            precipProb={Math.floor(this.state.daily[0].precipProbability *100)}
          />
          {cards}
          <footer>Icons created by <a href='https://www.iconfinder.com/iconsets/weather-and-forecast-free' target='_blank'>icon lauk</a></footer>
        </div>
      
      </div>
    )
  }
}

export default App;
