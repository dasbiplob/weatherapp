import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line no-undef
const baseURL = process.env.ENDPOINT || 'http://0.0.0.0:9000/api';

// const getWeatherFromApi = async () => {
//   try {
//     const response = await fetch(`${baseURL}/weather`);
//     const data = await response.json();
//     console.log(data); // Check if the data is as expected
//     return data;

//   } catch (error) {
//     console.error(error);
//   }

//   return {};
// };

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: "",
    };
  }

  async componentDidMount() {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const response = await fetch(`${baseURL}/weather/${latitude}/${longitude}`);
          const data = await response.json();
          console.log(data); // Check if the data is as expected
          if (data && data.list && data.list[0] && data.list[0].weather && data.list[0].weather[0] && data.list[0].weather[0].icon) {
            this.setState({ icon: data.list[0].weather[0].icon.slice(0, -1) });
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { icon } = this.state;

    return (
      <div className="icon">
        { icon && <img src={`/img/${icon}.svg`} /> }
      </div>
    );
  }
}

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);
