import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Form';
import Weather from './components/Weather';
import './App.css';

const API_KEY = '33d05df4089963acf0457c0f511cb4ba';

class App extends Component {
	state = {
		name: null,
		temp: null,
		humidity: null,
		weather: null,
		message: null
	};

	getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		const api_call = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
		);
		const data = await api_call.json();
		const { name, main: { temp, humidity } = {}, weather } = data;
		if (name === undefined || null) {
			this.setState(() => {
				return {
					name: null,
					temp: null,
					humidity: null,
					weather: null,
					message: 'Please input the right place !'
				}; //顺带清空
			});
		} else {
			this.setState(() => {
				console.log(data);
				return { name, humidity, temp, weather, message: 'Have a nice day!' };
			});
		}
	};

	render() {
		return (
			<div className="wrapper">
				<div className="main">
					<div className="container">
						<div className="row">
							<div className="col-xs-5 title-container">
								<Header />
							</div>
							<div className="col-xs-7 form-container">
								<Search getWeather={this.getWeather} />
								<Weather weatherCondition={this.state} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
