import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line no-undef
const baseURL = process.env.ENDPOINT || 'http://0.0.0.0:9000/api';

const getWeatherFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/weather`);
    const data = await response.json();
    console.log(data); // Check if the data is as expected
    return data.icon ? data.icon.slice(0, -1) : null;
  } catch (error) {
    console.error(error);
  }

  return {};
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: "",
    };
  }

  async componentDidMount() {
    const weather = await getWeatherFromApi();
    console.log('Weather Data:', weather);
    if (weather !== null) {
      this.setState({ weather });
    }
  }


  render() {
    console.log('Current icon state:', this.state.icon)
    const { icon } = this.state;

    return (
      <div className="icon">
        { icon && <img src={`/img/${icon}.svg`} alt="Weather Icon" /> }
        <p>Temporary Content</p>
      </div>
    );
  }
}

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);
