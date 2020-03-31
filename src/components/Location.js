import React from 'react';
import '../styles/location.css';

class Location extends React.Component {
    constructor(props){
        super(props);
        this.state = { location: '', city: 'Richmond, VA', newCity: ''}
        this.btn = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.getLocalWeather = this.getLocalWeather.bind(this);
    }


    onFormSubmit = (e) => {
        e.preventDefault();

        this.setState({city: this.state.newCity})
        this.props.callAPI(this.state.location)
        this.btn.current.setAttribute('disabled', 'disabled')
    }

    handleChange(e) {
        this.setState({location: e.target.value, newCity: e.target[e.target.selectedIndex].text})
        this.btn.current.removeAttribute('disabled')
        if(e.target.value === ''){
            this.btn.current.setAttribute('disabled', 'disabled')
        }
    }

    getLocalWeather() {
        navigator.geolocation.getCurrentPosition((position) => { 
            this.props.callAPI(`?lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
            this.setState({city: 'your current location'})
        }, function(error) {alert(`Error: ${error.message}`)})
    }


    render(){
       return(
        <div id='city-select'>
        <h2>Select a city</h2>
            <form onSubmit={this.onFormSubmit} onChange={this.handleChange}>
            <select id='location'>
                <option value=''>---</option>
                <option value='?lat=30.2547&lon=-97.7473'>Austin, TX</option>
                <option value='?lat=33.3061&lon=44.3650'>Baghdad, IRQ</option>
                <option value='?lat=41.8559&lon=-87.6310'>Chicago, IL</option>
                <option value='?lat=23.1182&lon=-82.3673'>Havana, CUB</option>
                <option value='?lat=21.3018&lon=-157.8573'>Honolulu, HI</option>
                <option value='?lat=8.7287&lon=167.7396'>Kwajalein, RMI</option>
                <option value='?lat=36.0840&lon=-115.1646'>Las Vegas, NV</option>
                <option value='?lat=25.7659&lon=-80.2149'>Miami, FL</option>
                <option value='?lat=35.9268&lon=-75.6108'>Nags Head, NC</option>
                <option value='?lat=29.9416&lon=-90.0834'>New Orleans, LA</option>
                <option value='?lat=40.7456&lon=-73.9881'>New York, NY</option>
                <option value='?lat=48.8670&lon=2.3480'>Paris, FRN</option>
                <option value='?lat=37.5260&lon=-77.4416'>Richmond, VA</option>
                <option value='?lat=-22.9357&lon=-43.1948'>Rio de Janeiro, BRA</option>
                <option value='?lat=43.158&lon=-77.5996'>Rochester, NY</option>
                <option value='?lat=37.7950&lon=-122.4190'>San Francisco, CA</option>
                <option value='?lat=39.0858&lon=-78.1910'>Stephens City, VA</option>
                <option value='?lat=-33.8791&lon=151.1029'>Sydney, AUS</option>
                <option value='?lat=35.6820&lon=139.7575'>Tokyo, JPN</option>
                <option value='?lat=38.8896&lon=-77.0344'>Washington, DC</option>
                <option value='?lat=49.8913&lon=-97.1389'>Winnipeg, CAN</option>
            </select>
            <input type='submit' value='Get Weather' ref={this.btn} id='sbmt' disabled="disabled"></input>
            </form>

            <h2>Get your local weather</h2>
            <button id='local-btn' onClick={this.getLocalWeather}>Get Local Weather</button>
            <h2 id='city-info'>Weather for {this.state.city}</h2>
        </div>
    ) 
    }
    
}

export default Location;