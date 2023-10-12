import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: "",
      latitude: null,
      longitude: null,
    };
  }

  async componentDidMount() {
    // Use Geolocation API to get user's location
    console.log('componentDidMount');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleLocationSuccess, this.handleLocationError);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  handleLocationSuccess = (position) => {
    console.log('handleLocationSuccess', position);
    const { latitude, longitude } = position.coords;
    this.setState({ latitude, longitude }, this.getWeatherData);
  }

  handleLocationError = (error) => {
    console.error(`Error getting location: ${error.message}`);
    // Fallback to default location if geolocation fails
    this.getWeatherData();
  }

  getWeatherData = async () => {
    console.log('getWeatherData');
    const { latitude, longitude } = this.state;
    if (!latitude || !longitude) {
      console.error('Latitude and/or longitude not available. Using default location.');
      this.setState({ icon: 'default-icon' });
      return;
    }
  
    const baseURL = process.env.ENDPOINT || 'http://0.0.0.0:9000/api';
  
    try {
      //const response = await fetch(`${baseURL}/forecast?lat=${latitude}&lon=${longitude}`);
      const response = await fetch(`${baseURL}/weather?lat=${latitude}&lon=${longitude}`);
      const data = await response.json();
      console.log('Response Data:',data);
      if (data && data.icon) {
        this.setState({ icon: data.icon.slice(0, -1) });
      } else {
        this.setState({ icon: 'default-icon' });
        console.error('Invalid data received from backend:', data);
      }
    } catch (error) {
      console.error(error);
    }
  }
  

  render() {
    const { icon } = this.state;
    console.log('Icon:', icon);

    return (
      <div className="icon">
        { icon ? <img src={`./public/img/${icon}.svg`} alt="Weather Icon" /> : <p>Icon not found</p> }
        <p>Temporary Content</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);
