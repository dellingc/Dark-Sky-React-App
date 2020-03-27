import React from 'react';

class Location extends React.Component {
    constructor(props){
        super(props);
        this.state = { location: '', city: 'Chicago, IL', newCity: ''}

        this.handleChange = this.handleChange.bind(this);
    }


    onFormSubmit = (e) => {
        e.preventDefault();

        this.setState({location: e.target.value, city: this.state.newCity})
        this.props.callAPI(this.state.location)
    }

    handleChange(e) {
        this.setState({location: e.target.value, newCity: e.target[e.target.selectedIndex].text})
    }


    render(){
       return(
        <div>
            <form onSubmit={this.onFormSubmit} onChange={this.handleChange}>
            <select id='location'>
                <option value='?lat=41.8559&lon=-87.6310'>Chicago, IL</option>
                <option value='?lat=36.0840&lon=-115.1646'>Las Vegas, NV</option>
                <option value='?lat=40.7456&lon=-73.9881'>New York, NY</option>
                <option value='?lat=37.5260&lon=-77.4416'>Richmond, VA</option>
                <option value='?lat=37.7950&lon=-122.4190'>San Francisco, CA</option>
                <option value='?lat=38.8896&lon=-77.0344'>Washington, DC</option>
            </select>
            <input type='submit' value='submit'></input>
            </form>

            <h2>Weather for {this.state.city}</h2>
        </div>
    ) 
    }
    
}

export default Location;