import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Weather extends Component {
  constructor(props) {
    super(props);

    // Initialize component state
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

  // Handler for successful location retrieval
  handleLocationSuccess = (position) => {
    console.log('handleLocationSuccess', position);
    const { latitude, longitude } = position.coords;
    // Update state with coordinates and trigger weather data fetch
    this.setState({ latitude, longitude }, this.getWeatherData);
  }

  // Handler for location retrieval error
  handleLocationError = (error) => {
    console.error(`Error getting location: ${error.message}`);
    // Fallback to default location if geolocation fails
    this.getWeatherData();
  }

  // Fetch weather data based on coordinates
  getWeatherData = async () => {
    console.log('getWeatherData');
    const { latitude, longitude } = this.state;
    if (!latitude || !longitude) {
      console.error('Latitude and/or longitude not available. Using default location.');
      this.setState({ icon: 'default-icon' });
      return;
    }
  
    // Define base URL for API endpoint (using environment variable or default)
    const baseURL = process.env.ENDPOINT || 'http://0.0.0.0:9000/api';
  
    try {
      // Fetch weather data from the backend
      //const response = await fetch(`${baseURL}/forecast?lat=${latitude}&lon=${longitude}`);
      const response = await fetch(`${baseURL}/weather?lat=${latitude}&lon=${longitude}`);
      const data = await response.json();
      console.log('Response Data:',data);
      // Extract icon information from API response
      if (Array.isArray(data.list) && data.list.length > 0) {
        const icon = data.list[0].weather[0].icon;
        // Update component state with icon information
        this.setState({ icon: icon.slice(0, -1) });
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
        { icon ? <img src={`../img/${icon}.svg`} alt="Weather Icon" /> : <p>Icon not found</p> }
      </div>
    );
  }
}

// Render Weather component to the DOM
ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);
